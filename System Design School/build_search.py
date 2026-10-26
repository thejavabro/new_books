#!/usr/bin/env python3
"""
Build one offline search page over a folder of study material.

Reads every document in the folder (HTML, PDF, Word, PowerPoint, text,
Markdown), pulls out the text, and writes search.html into that same folder.
Open search.html in Chrome or Edge, type a query, and each result shows the
matching text with a link that opens the source document at about the right
spot (the right page for PDFs, the matching passage for HTML).

Everything stays on your computer. Nothing is uploaded anywhere.

Usage:
    python build_search.py                      # indexes C:\\IMPORTANT\\sds
    python build_search.py "D:\\some\\other\\folder"
    python build_search.py --out C:\\somewhere\\search.html

Run it again whenever you add files; it rebuilds search.html from scratch.
PDF support needs one extra package:  python -m pip install pypdf
"""

import argparse
import hashlib
import html
import json
import os
import re
import sys
import time
import zipfile
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import quote

DEFAULT_FOLDER = r"C:\IMPORTANT\sds"
OUTPUT_NAME = "search.html"
CHUNK_CHARS = 700          # target size of one searchable passage
SKIP_DIRS = {"browser-profile", "node_modules", "__pycache__", ".git"}

HTML_EXT = {".html", ".htm", ".xhtml"}
TEXT_EXT = {".txt", ".md", ".markdown", ".rst"}
PDF_EXT = {".pdf"}
DOCX_EXT = {".docx"}
PPTX_EXT = {".pptx"}
ALL_EXT = HTML_EXT | TEXT_EXT | PDF_EXT | DOCX_EXT | PPTX_EXT


# ---------------------------------------------------------------- extraction

BLOCK_TAGS = {
    "p", "div", "section", "article", "main", "li", "ul", "ol", "dl", "dt", "dd",
    "h1", "h2", "h3", "h4", "h5", "h6", "pre", "blockquote", "table", "tr", "td",
    "th", "br", "hr", "figcaption", "figure", "header", "summary", "details",
    "caption", "tbody", "thead",
}
SKIP_TAGS = {"script", "style", "noscript", "svg", "template", "head", "nav",
             "footer", "iframe", "canvas", "math", "button", "select", "form"}
VOID_TAGS = {"br", "hr", "img", "input", "meta", "link", "source", "wbr", "area",
             "base", "col", "embed", "param", "track"}


class _TextHTML(HTMLParser):
    """Collects visible text as paragraphs, and separately the text inside
    <main>/<article> so menus and sidebars can be dropped when possible."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.h1 = ""
        self._in_title = False
        self._in_h1 = False
        self._skip = 0
        self._main = 0
        self.paras, self.main_paras = [], []
        self._buf, self._mbuf = [], []

    def _flush(self):
        for buf, out in ((self._buf, self.paras), (self._mbuf, self.main_paras)):
            t = re.sub(r"\s+", " ", "".join(buf)).strip()
            if t:
                out.append(t)
            buf.clear()

    def handle_starttag(self, tag, attrs):
        if tag == "title":
            self._in_title = True
        if tag in SKIP_TAGS:
            if tag not in VOID_TAGS:
                self._skip += 1
            return
        if tag in ("main", "article"):
            self._main += 1
        if tag == "h1" and not self.h1:
            self._in_h1 = True
        if tag in BLOCK_TAGS:
            self._flush()

    def handle_startendtag(self, tag, attrs):
        if tag in BLOCK_TAGS:
            self._flush()

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        if tag in SKIP_TAGS:
            if tag not in VOID_TAGS and self._skip:
                self._skip -= 1
            return
        if tag == "h1":
            self._in_h1 = False
        if tag in BLOCK_TAGS or tag in ("main", "article"):
            self._flush()
        if tag in ("main", "article") and self._main:
            self._main -= 1

    def handle_data(self, data):
        if self._in_title:
            self.title += data
        if self._skip:
            return
        if self._in_h1:
            self.h1 += data
        self._buf.append(data)
        if self._main:
            self._mbuf.append(data)


def read_text_file(path):
    raw = path.read_bytes()
    for enc in ("utf-8-sig", "cp1252"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            pass
    return raw.decode("utf-8", errors="replace")


def extract_html(path):
    p = _TextHTML()
    try:
        p.feed(read_text_file(path))
        p.close()
    except Exception:
        pass
    p._flush()
    main_len = sum(len(x) for x in p.main_paras)
    paras = p.main_paras if main_len > 400 else p.paras
    title = re.sub(r"\s+", " ", p.title or p.h1).strip()
    return title, [(None, paras)]


def extract_text(path):
    text = read_text_file(path)
    paras = [re.sub(r"\s+", " ", b).strip() for b in re.split(r"\n\s*\n", text)]
    paras = [x for x in paras if x]
    title = ""
    if path.suffix.lower() in (".md", ".markdown") and paras and paras[0].startswith("#"):
        title = paras[0].lstrip("# ").strip()
    return title, [(None, paras)]


_pdf_warned = False


def extract_pdf(path):
    global _pdf_warned
    try:
        from pypdf import PdfReader
    except ImportError:
        if not _pdf_warned:
            print("  ! PDFs skipped: run  python -m pip install pypdf  and build again")
            _pdf_warned = True
        return None
    import logging
    logging.getLogger("pypdf").setLevel(logging.ERROR)
    reader = PdfReader(str(path))
    title = ""
    try:
        if reader.metadata and reader.metadata.title:
            title = str(reader.metadata.title).strip()
    except Exception:
        pass
    pages = []
    for i, page in enumerate(reader.pages, start=1):
        try:
            text = page.extract_text() or ""
        except Exception:
            text = ""
        # PDF text comes as hard-wrapped lines; rejoin them into paragraphs.
        text = re.sub(r"-\n(?=[a-z])", "", text)
        blocks = re.split(r"\n\s*\n|(?<=[.:?!])\n(?=[A-Z0-9•\-])", text)
        paras = [re.sub(r"\s+", " ", b).strip() for b in blocks]
        pages.append((i, [x for x in paras if x]))
    return title, pages


def _xml_text(xml, para_tag, text_tag):
    paras = []
    for m in re.finditer(r"<%s[ >].*?</%s>" % (para_tag, para_tag), xml, re.S):
        parts = re.findall(r"<%s(?: [^>]*)?>([^<]*)</%s>" % (text_tag, text_tag), m.group(0))
        t = html.unescape("".join(parts)).strip()
        if t:
            paras.append(re.sub(r"\s+", " ", t))
    return paras


def extract_docx(path):
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml").decode("utf-8", "replace")
    return "", [(None, _xml_text(xml, "w:p", "w:t"))]


def extract_pptx(path):
    pages = []
    with zipfile.ZipFile(path) as z:
        names = [n for n in z.namelist() if re.match(r"ppt/slides/slide\d+\.xml$", n)]
        names.sort(key=lambda n: int(re.search(r"(\d+)", n.rsplit("/", 1)[1]).group(1)))
        for i, n in enumerate(names, start=1):
            xml = z.read(n).decode("utf-8", "replace")
            pages.append((i, _xml_text(xml, "a:p", "a:t")))
    return "", pages


def extract(path):
    ext = path.suffix.lower()
    if ext in HTML_EXT:
        return extract_html(path)
    if ext in TEXT_EXT:
        return extract_text(path)
    if ext in PDF_EXT:
        return extract_pdf(path)
    if ext in DOCX_EXT:
        return extract_docx(path)
    if ext in PPTX_EXT:
        return extract_pptx(path)
    return None


# ------------------------------------------------------------------ chunking

def split_long(para, limit):
    if len(para) <= limit:
        return [para]
    out, cur = [], ""
    for sent in re.split(r"(?<=[.!?])\s+", para):
        while len(sent) > limit:              # no sentence breaks at all
            cut = sent.rfind(" ", 0, limit)
            cut = cut if cut > limit // 2 else limit
            if cur:
                out.append(cur)
                cur = ""
            out.append(sent[:cut].strip())
            sent = sent[cut:].strip()
        if cur and len(cur) + len(sent) + 1 > limit:
            out.append(cur)
            cur = sent
        else:
            cur = (cur + " " + sent).strip()
    if cur:
        out.append(cur)
    return out


def chunk(paras, limit=CHUNK_CHARS):
    """Groups paragraphs into passages of about `limit` characters.
    Paragraph breaks are kept as newlines so the page can link to one."""
    out, cur, size = [], [], 0
    for para in paras:
        for piece in split_long(para, limit):
            if cur and size + len(piece) > limit:
                out.append("\n".join(cur))
                cur, size = [], 0
            cur.append(piece)
            size += len(piece) + 1
    if cur:
        out.append("\n".join(cur))
    return out


# --------------------------------------------------------------------- build

def link_for(path, out_dir):
    try:
        rel = os.path.relpath(path, out_dir)
    except ValueError:                        # different drive on Windows
        return Path(path).resolve().as_uri()
    return "/".join(quote(part) for part in Path(rel).parts)


def nice_title(path, title):
    title = (title or "").strip()
    for junk in (" | System Design School", " - System Design School", " | DesignGurus.io",
                 " - DesignGurus.io", " | Design Gurus"):
        if title.endswith(junk):
            title = title[: -len(junk)].strip()
    if not title or len(title) > 160:
        title = path.stem.replace("_", " ").replace("-", " ").strip()
    return title


def collect(folder, out_file):
    files = []
    for root, dirs, names in os.walk(folder):
        dirs[:] = sorted(d for d in dirs if d not in SKIP_DIRS and not d.startswith("."))
        for n in sorted(names):
            p = Path(root) / n
            if p.suffix.lower() in ALL_EXT and not n.startswith("~$"):
                try:
                    if p.resolve() == out_file.resolve():
                        continue
                except OSError:
                    pass
                files.append(p)
    return files


def build(folder, out_file):
    folder = Path(folder)
    if not folder.is_dir():
        sys.exit(f"Folder not found: {folder}")
    out_dir = out_file.parent
    files = collect(folder, out_file)
    if not files:
        sys.exit(f"No HTML, PDF, Word, PowerPoint, text or Markdown files found in {folder}")
    print(f"Found {len(files)} documents in {folder}")

    docs, chunks, kinds = [], [], Counter()
    skipped = []
    t0 = time.time()
    for n, path in enumerate(files, 1):
        rel = os.path.relpath(path, folder)
        print(f"  [{n}/{len(files)}] {rel}"[:110])
        try:
            result = extract(path)
        except Exception as e:                # one bad file shouldn't stop the build
            skipped.append(f"{rel}  ({type(e).__name__}: {e})"[:200])
            continue
        if result is None:
            continue
        title, pages = result
        doc_chunks = []
        for page, paras in pages:
            for text in chunk(paras):
                if len(text) >= 20:
                    doc_chunks.append((page, text))
        if not doc_chunks:
            skipped.append(f"{rel}  (no readable text; a scanned PDF needs OCR first)")
            continue
        ext = path.suffix.lower().lstrip(".")
        kind = {"htm": "html", "xhtml": "html", "markdown": "md", "rst": "txt"}.get(ext, ext)
        kinds[kind] += 1
        folder_label = str(Path(rel).parent).replace("\\", "/")
        docs.append({
            "t": nice_title(path, title),
            "u": link_for(path, out_dir),
            "k": kind,
            "f": "" if folder_label == "." else folder_label,
        })
        d = len(docs) - 1
        for page, text in doc_chunks:
            chunks.append([d, page or 0, text])

    # Drop passages repeated across many documents (menus, cookie banners, footers).
    seen = Counter(hashlib.md5(c[2].encode()).hexdigest() for c in chunks)
    limit = max(4, len(docs) // 10)
    before = len(chunks)
    chunks = [c for c in chunks if seen[hashlib.md5(c[2].encode()).hexdigest()] < limit]
    dropped = before - len(chunks)

    data = {"docs": docs, "chunks": chunks, "built": time.strftime("%Y-%m-%d %H:%M"),
            "root": str(folder)}
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    payload = payload.replace("</", "<\\/")
    page = PAGE.replace("/*__DATA__*/", payload)
    out_file.write_text(page, encoding="utf-8")

    size_mb = out_file.stat().st_size / 1e6
    print()
    print(f"Indexed {len(docs)} documents, {len(chunks)} passages in {time.time() - t0:.0f}s"
          + (f" ({dropped} repeated boilerplate passages dropped)" if dropped else ""))
    print("  by type: " + ", ".join(f"{k} {v}" for k, v in sorted(kinds.items())))
    if skipped:
        print(f"Skipped {len(skipped)} files:")
        for s in skipped:
            print("  - " + s)
    print(f"\nWrote {out_file}  ({size_mb:.1f} MB)")
    print("Open it in Chrome or Edge (double-click it, or drag it into a browser window).")


def main():
    ap = argparse.ArgumentParser(description="Build an offline search page over a folder of documents.")
    ap.add_argument("folder", nargs="?", default=DEFAULT_FOLDER,
                    help=f"folder to index (default {DEFAULT_FOLDER})")
    ap.add_argument("--out", help="where to write the page (default: search.html inside the folder)")
    args = ap.parse_args()
    folder = Path(args.folder).expanduser()
    out = Path(args.out).expanduser() if args.out else folder / OUTPUT_NAME
    build(folder, out)


# ---------------------------------------------------------------------- page

PAGE = r"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Study Search</title>
<style>
:root {
  --bg: #f7f7f5; --panel: #ffffff; --text: #1d1d1f; --muted: #6b6b70; --line: #e3e3e0;
  --accent: #2f5bd3; --accent-soft: #e8eefc; --mark: #ffe58a; --mark-text: #1d1d1f;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #161618; --panel: #1f1f22; --text: #ececee; --muted: #9a9aa2; --line: #2e2e33;
    --accent: #8aa8ff; --accent-soft: #23293d; --mark: #6b5a12; --mark-text: #fff6cc;
  }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text);
  font: 15px/1.55 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.wrap { max-width: 880px; margin: 0 auto; padding: 28px 16px 80px; }
header { position: sticky; top: 0; z-index: 2; background: var(--bg); padding: 8px 0 12px; }
h1 { font-size: 20px; margin: 0 0 12px; font-weight: 650; letter-spacing: -0.01em; }
h1 span { color: var(--muted); font-weight: 400; font-size: 14px; margin-left: 8px; }
.bar { display: flex; gap: 8px; flex-wrap: wrap; }
#q { flex: 1 1 320px; font: inherit; font-size: 17px; padding: 11px 14px; border-radius: 10px;
  border: 1px solid var(--line); background: var(--panel); color: var(--text); outline: none; }
#q:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
select { font: inherit; padding: 0 10px; border-radius: 10px; border: 1px solid var(--line);
  background: var(--panel); color: var(--text); }
.status { color: var(--muted); font-size: 13px; margin-top: 8px; min-height: 20px; }
.doc { background: var(--panel); border: 1px solid var(--line); border-radius: 12px;
  padding: 14px 16px; margin: 12px 0; }
.doc-head { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
.doc-title { font-weight: 620; font-size: 16px; color: var(--accent); text-decoration: none; }
.doc-title:hover { text-decoration: underline; }
.tag { font-size: 11px; text-transform: uppercase; letter-spacing: .04em; color: var(--muted);
  border: 1px solid var(--line); border-radius: 5px; padding: 0 5px; }
.path { color: var(--muted); font-size: 12px; overflow-wrap: anywhere; }
.hit { display: block; color: inherit; text-decoration: none; padding: 8px 10px; margin: 8px -10px 0;
  border-radius: 8px; }
.hit:hover { background: var(--accent-soft); }
.hit .where { font-size: 12px; color: var(--muted); }
.hit .snip { overflow-wrap: anywhere; }
mark { background: var(--mark); color: var(--mark-text); border-radius: 3px; padding: 0 1px; }
.more { font-size: 13px; color: var(--muted); margin-top: 6px; cursor: pointer; background: none;
  border: 0; padding: 0; font: inherit; font-size: 13px; text-decoration: underline; }
.help { color: var(--muted); font-size: 14px; background: var(--panel); border: 1px solid var(--line);
  border-radius: 12px; padding: 14px 18px; }
.help code { background: var(--accent-soft); padding: 1px 5px; border-radius: 4px; }
.help ul { margin: 6px 0 0; padding-left: 18px; }
</style>
</head>
<body>
<div class="wrap">
  <header>
    <h1>Study Search <span id="meta"></span></h1>
    <div class="bar">
      <input id="q" type="search" placeholder="Search your notes, e.g.  consistent hashing" autofocus autocomplete="off">
      <select id="kind"><option value="">All types</option></select>
    </div>
    <div class="status" id="status">Loading…</div>
  </header>
  <main id="results"></main>
</div>
<script id="data" type="application/json">/*__DATA__*/</script>
<script>
(() => {
const DATA = JSON.parse(document.getElementById("data").textContent);
const DOCS = DATA.docs, CH = DATA.chunks;
const $ = id => document.getElementById(id);
const esc = s => s.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const WORD = /[\p{L}\p{N}]+(?:['’.+#][\p{L}\p{N}]+)*/gu;
const fold = s => s.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
const tokens = s => fold(s).match(WORD) || [];

// ---- build the index in the browser (a second or two for big folders)
const postings = new Map();     // term -> [chunkId, tf, chunkId, tf, ...]
const lens = new Uint32Array(CH.length);
let total = 0;
for (let i = 0; i < CH.length; i++) {
  const toks = tokens(CH[i][2] + " " + (i === 0 || CH[i - 1][0] !== CH[i][0] ? DOCS[CH[i][0]].t : ""));
  lens[i] = toks.length; total += toks.length;
  const tf = new Map();
  for (const t of toks) tf.set(t, (tf.get(t) || 0) + 1);
  for (const [t, n] of tf) { let p = postings.get(t); if (!p) postings.set(t, p = []); p.push(i, n); }
}
const avgLen = total / Math.max(1, CH.length);
const TERMS = [...postings.keys()].sort();
const titleToks = DOCS.map(d => new Set(tokens(d.t)));

const kinds = [...new Set(DOCS.map(d => d.k))].sort();
for (const k of kinds) $("kind").insertAdjacentHTML("beforeend", `<option value="${k}">${k.toUpperCase()}</option>`);
$("meta").textContent = `${DOCS.length} documents · built ${DATA.built}`;

function expand(term) {        // exact term plus words that start with it (cache -> caches, caching)
  const out = [];
  if (postings.has(term)) out.push([term, 1]);
  if (term.length < 3) return out;
  let lo = 0, hi = TERMS.length;
  while (lo < hi) { const m = (lo + hi) >> 1; if (TERMS[m] < term) lo = m + 1; else hi = m; }
  for (let i = lo; i < TERMS.length && out.length < 60 && TERMS[i].startsWith(term); i++)
    if (TERMS[i] !== term) out.push([TERMS[i], 0.6]);
  return out;
}

function parse(q) {
  const phrases = [], neg = [], words = [];
  q = q.replace(/"([^"]+)"/g, (_, p) => { phrases.push(fold(p).trim()); words.push(...tokens(p)); return " "; });
  for (const part of q.split(/\s+/)) {
    if (!part) continue;
    if (part.startsWith("-") && part.length > 1) neg.push(...tokens(part.slice(1)));
    else words.push(...tokens(part));
  }
  return { words: [...new Set(words)], phrases, neg };
}

function search(q, kind) {
  const { words, phrases, neg } = parse(q);
  if (!words.length) return null;
  const N = CH.length, k1 = 1.2, b = 0.75;
  const score = new Map(), matched = new Map();
  words.forEach((w, wi) => {
    for (const [term, weight] of expand(w)) {
      const p = postings.get(term), df = p.length / 2;
      const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));
      for (let j = 0; j < p.length; j += 2) {
        const c = p[j], tf = p[j + 1];
        const s = weight * idf * tf * (k1 + 1) / (tf + k1 * (1 - b + b * lens[c] / avgLen));
        score.set(c, (score.get(c) || 0) + s);
        let m = matched.get(c); if (!m) matched.set(c, m = new Set()); m.add(wi);
      }
    }
  });
  const negSet = new Set(neg);
  let ids = [...score.keys()];
  if (kind) ids = ids.filter(c => DOCS[CH[c][0]].k === kind);
  if (negSet.size) ids = ids.filter(c => !tokens(CH[c][2]).some(t => negSet.has(t)));
  if (phrases.length) ids = ids.filter(c => { const t = fold(CH[c][2]).replace(/\s+/g, " "); return phrases.every(p => t.includes(p)); });
  // Prefer passages containing every word; fall back to partial matches.
  const all = ids.filter(c => matched.get(c).size === words.length);
  const partial = all.length === 0 && words.length > 1;
  if (!partial) ids = all;
  const whole = words.length > 1 ? words.join(" ") : null;
  const scored = ids.map(c => {
    let s = score.get(c) * (0.5 + 0.5 * matched.get(c).size / words.length);
    if (whole && fold(CH[c][2]).replace(/[^\p{L}\p{N}]+/gu, " ").includes(whole)) s *= 1.6;
    const tt = titleToks[CH[c][0]];
    s *= 1 + 0.25 * words.filter(w => tt.has(w)).length;
    return [c, s];
  }).sort((a, b) => b[1] - a[1]);
  // Group passages by document, best document first.
  const byDoc = new Map();
  for (const [c, s] of scored) { const d = CH[c][0]; let g = byDoc.get(d); if (!g) byDoc.set(d, g = { d, best: s, hits: [] }); g.hits.push(c); }
  const groups = [...byDoc.values()].sort((a, b) => b.best - a.best);
  return { groups, words, phrases, partial, passages: scored.length };
}

function highlightRegex(words, phrases) {
  const parts = [...phrases.map(p => p.split(/\s+/).map(escRe).join("\\s+")),
                 ...words.map(w => escRe(w) + "[\\p{L}\\p{N}]*")];
  return new RegExp("(?<![\\p{L}\\p{N}])(" + parts.join("|") + ")", "giu");
}
function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

function snippet(text, re, size = 280) {
  // Find the window with the most hits, then cut on word boundaries.
  const folded = fold(text), hits = [];
  re.lastIndex = 0; let m;
  while ((m = re.exec(folded)) && hits.length < 200) hits.push(m.index);
  let start = 0;
  if (hits.length) {
    let best = -1;
    for (const h of hits) { const n = hits.filter(x => x >= h && x < h + size * 0.8).length; if (n > best) { best = n; start = Math.max(0, h - 60); } }
  }
  if (start > 0) { const sp = text.indexOf(" ", start); start = sp > 0 && sp - start < 30 ? sp + 1 : start; }
  let end = Math.min(text.length, start + size);
  if (end < text.length) { const sp = text.lastIndexOf(" ", end); if (sp > start + size / 2) end = sp; }
  const piece = text.slice(start, end).replace(/\n/g, " ¶ ");
  const fpiece = fold(piece);
  // fold() keeps lengths for almost all text; if not, skip highlighting this snippet
  let out = "";
  if (fpiece.length === piece.length) {
    let last = 0; re.lastIndex = 0;
    while ((m = re.exec(fpiece))) { out += esc(piece.slice(last, m.index)) + "<mark>" + esc(piece.slice(m.index, m.index + m[0].length)) + "</mark>"; last = m.index + m[0].length; if (!m[0].length) re.lastIndex++; }
    out += esc(piece.slice(last));
  } else out = esc(piece);
  return (start > 0 ? "… " : "") + out.replace(/ ¶ /g, ' <span style="opacity:.4">¶</span> ') + (end < text.length ? " …" : "");
}

function deepLink(c, re) {
  const [d, page, text] = CH[c], doc = DOCS[d];
  if (doc.k === "pdf" && page) return doc.u + "#page=" + page;
  if (doc.k !== "html") return doc.u;
  // Text fragment: jumps to and highlights the passage in Chrome, Edge and recent Firefox.
  const lines = text.split("\n");
  re.lastIndex = 0;
  let line = lines.find(l => { re.lastIndex = 0; return re.test(fold(l)); }) || lines[0];
  re.lastIndex = 0;
  const m = re.exec(fold(line));
  const ws = line.split(" ");
  let wi = 0;
  if (m) { let pos = 0; for (let i = 0; i < ws.length; i++) { if (pos + ws[i].length > m.index) { wi = i; break; } pos += ws[i].length + 1; } }
  const from = Math.max(0, wi - 3), phrase = ws.slice(from, from + 8).join(" ").trim();
  if (!phrase) return doc.u;
  const enc = s => encodeURIComponent(s).replace(/-/g, "%2D").replace(/,/g, "%2C").replace(/&/g, "%26");
  return doc.u + "#:~:text=" + enc(phrase);
}

let shown = 0, current = null;
function render(reset = true) {
  const q = $("q").value.trim(), kind = $("kind").value;
  try { history.replaceState(null, "", q ? "#q=" + encodeURIComponent(q) + (kind ? "&k=" + kind : "") : location.pathname); } catch (e) {}
  if (reset) { current = q ? search(q, kind) : null; shown = 0; $("results").innerHTML = ""; }
  if (!current) {
    $("status").textContent = q ? "Type a longer word." : "";
    if (!q) $("results").innerHTML = HELP;
    return;
  }
  const { groups, words, phrases, partial, passages } = current;
  $("status").textContent = groups.length
    ? `${passages} matching passage${passages === 1 ? "" : "s"} in ${groups.length} document${groups.length === 1 ? "" : "s"}` + (partial ? " (no passage has every word, so showing partial matches)" : "")
    : "No matches. Try fewer or shorter words.";
  const re = highlightRegex(words, phrases);
  let html = "";
  for (const g of groups.slice(shown, shown + 30)) {
    const doc = DOCS[g.d];
    const hits = g.hits.slice(0, 3).map(c => hitHtml(c, re)).join("");
    const extra = g.hits.length - 3;
    html += `<div class="doc"><div class="doc-head"><a class="doc-title" href="${esc(doc.u)}" target="_blank" rel="noopener">${esc(doc.t)}</a><span class="tag">${doc.k}</span></div>`
      + (doc.f ? `<div class="path">${esc(doc.f)}</div>` : "") + hits
      + (extra > 0 ? `<button class="more" data-d="${g.d}">${extra} more in this document</button>` : "") + `</div>`;
  }
  shown += 30;
  if (shown < groups.length) html += `<button class="more" id="loadmore">Show more documents (${groups.length - shown} left)</button>`;
  const lm = $("loadmore"); if (lm) lm.remove();
  $("results").insertAdjacentHTML("beforeend", html);
}
function hitHtml(c, re) {
  const page = CH[c][1], doc = DOCS[CH[c][0]];
  const where = page ? (doc.k === "pptx" ? "Slide " : "Page ") + page : "";
  return `<a class="hit" href="${esc(deepLink(c, re))}" target="_blank" rel="noopener">`
    + (where ? `<div class="where">${where}</div>` : "") + `<div class="snip">${snippet(CH[c][2], re)}</div></a>`;
}
$("results").addEventListener("click", e => {
  const t = e.target;
  if (t.id === "loadmore") { render(false); return; }
  if (t.classList.contains("more") && t.dataset.d) {
    const g = current.groups.find(g => g.d == t.dataset.d);
    const re = highlightRegex(current.words, current.phrases);
    t.insertAdjacentHTML("beforebegin", g.hits.slice(3, 50).map(c => hitHtml(c, re)).join(""));
    t.remove();
  }
});

const HELP = `<div class="help"><b>Tips</b><ul>
<li>All words must appear in the same passage: <code>leader election</code></li>
<li>Exact wording in quotes: <code>"write-ahead log"</code></li>
<li>Leave a word out with a minus: <code>cache -cdn</code></li>
<li>Word starts match too, so <code>shard</code> also finds sharding and shards.</li>
<li>Click a passage to open the document at that spot (the page number for PDFs). Press <code>/</code> to jump back to the search box.</li>
</ul></div>`;

let timer;
$("q").addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(render, 150); });
$("kind").addEventListener("change", () => render());
document.addEventListener("keydown", e => { if (e.key === "/" && document.activeElement !== $("q")) { e.preventDefault(); $("q").focus(); $("q").select(); } });
function fromHash() {
  const h = new URLSearchParams(location.hash.slice(1));
  if (!h.has("q")) return false;
  $("q").value = h.get("q"); $("kind").value = h.get("k") || "";
  return true;
}
window.addEventListener("hashchange", () => { if (fromHash()) render(); });
fromHash();
render();
})();
</script>
</body>
</html>
"""

if __name__ == "__main__":
    main()
