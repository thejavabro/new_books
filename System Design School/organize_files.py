#!/usr/bin/env python3
"""
Sort the files in your study folder into folders that mirror the website.

Files are grouped the way the website is: each page's web address decides its
folder, so systemdesignschool.io/problems/url-shortener/introduction goes to
Problems/Url Shortener/introduction.html. The address comes from manifest.json
(written by sds_offline.py), or from the page itself, or from the file name
(problems__url-shortener__introduction.html). Files with no web address go
into "Other".

Links between saved pages, and the links in index.html, are updated so they
keep working. search.html is rebuilt at the end if build_search.py is here.

Nothing moves until you confirm. Every move is logged, so you can undo it:
    python organize_files.py                 # shows the plan, asks before moving
    python organize_files.py --undo          # puts everything back
    python organize_files.py "D:\\other\\folder"
"""

import argparse
import html
import json
import os
import re
import subprocess
import sys
from collections import defaultdict
from pathlib import Path
from urllib.parse import quote, unquote, urlparse

DEFAULT_FOLDER = r"C:\IMPORTANT\sds"
UNDO_LOG = "organize_undo.json"
# Files that stay where they are.
KEEP = {"search.html", "readme.md", "build_search.py", "build_serach.py",
        "organize_files.py", "index.html", "manifest.json", UNDO_LOG, "desktop.ini", "thumbs.db"}

MANIFEST = "manifest.json"
Q = "[\"']"                                  # either kind of quote
URL_IN_PAGE = [
    re.compile(r"<link[^>]+rel=" + Q + r"canonical" + Q + r"[^>]*href=" + Q + r"([^\"']+)", re.I),
    re.compile(r"<link[^>]+href=" + Q + r"([^\"']+)" + Q + r"[^>]*rel=" + Q + r"canonical", re.I),
    re.compile(r"<meta[^>]+property=" + Q + r"og:url" + Q + r"[^>]*content=" + Q + r"([^\"']+)", re.I),
    re.compile(r"<!-- saved from url=\(\d+\)(\S+?) -->", re.I),
]

PAGE_EXT = {".html", ".htm"}


def safe(name):
    return re.sub(r'[<>:"/\\|?*\x00-\x1f]+', "_", name).strip(" .")[:120] or "page"


def pretty(part):
    words = safe(re.sub(r"[-_]+", " ", part)).strip()
    return " ".join(w if w.isupper() else w.capitalize() for w in words.split()) or "Other"


def load_manifest(folder):
    """Maps saved file name (lower case, no extension) -> web address path."""
    try:
        data = json.loads((folder / MANIFEST).read_text("utf-8"))
    except (OSError, ValueError):
        return {}
    out = {}
    for url, meta in data.items():
        f = isinstance(meta, dict) and meta.get("file")
        if f:
            out[Path(f).stem.lower()] = urlparse(url).path
    return out


def url_path_in_page(p):
    if p.suffix.lower() not in PAGE_EXT:
        return None
    try:
        with open(p, "r", encoding="utf-8", errors="replace") as fh:
            head = fh.read(400_000)
    except OSError:
        return None
    for rx in URL_IN_PAGE:
        m = rx.search(head)
        if m and m.group(1).startswith("http"):
            return urlparse(html.unescape(m.group(1))).path
    return None


def site_parts(p, manifest):
    """The page's place on the website as a list, e.g. ['problems', 'url-shortener', 'intro']."""
    path = manifest.get(p.stem.lower()) or url_path_in_page(p)
    if path is not None:
        parts = [unquote(x) for x in path.split("/") if x]
        if parts:
            return parts
    parts = [x for x in p.stem.split("__") if x]
    return parts if len(parts) >= 2 else None


def plan(folder):
    """Returns {old_path: new_path} for the top-level files."""
    files = sorted(p for p in folder.iterdir() if p.is_file() and p.name.lower() not in KEEP)
    manifest = load_manifest(folder)
    moves, by_dir = {}, defaultdict(list)
    for p in files:
        parts = site_parts(p, manifest)
        if not parts:                         # no web address: home page, own notes, etc.
            dirs, name = ["Other"], p.name
        elif len(parts) == 1:                 # a section's own page, e.g. /fundamentals
            dirs, name = [pretty(parts[0])], safe(parts[0]) + p.suffix
        else:
            dirs, name = [pretty(x) for x in parts[:-1]], safe(parts[-1]) + p.suffix
        by_dir[tuple(dirs)].append((p, name))

    # A sub-folder holding a single file isn't worth it: lift the file up a level.
    changed = True
    while changed:
        changed = False
        for dirs, items in list(by_dir.items()):
            if len(dirs) > 1 and len(items) == 1:
                p, name = items[0]
                del by_dir[dirs]
                by_dir[dirs[:-1]].append((p, dirs[-1] + " - " + name))
                changed = True

    for dirs, items in by_dir.items():
        used = set()
        for p, name in items:
            target = folder.joinpath(*dirs, name)
            n = 2
            while target.name.lower() in used or (target.exists() and target != p):
                target = folder.joinpath(*dirs, f"{Path(name).stem} ({n}){Path(name).suffix}")
                n += 1
            used.add(target.name.lower())
            moves[p] = target
    return moves


HREF = re.compile(r'''((?:href|src)\s*=\s*)(["'])([^"'#?]*)([^"']*)\2''', re.I)


def rewrite_links(moves, html_files):
    """Updates relative links in html_files after `moves` (old -> new) happened.
    html_files maps each page's location before the move to its location now."""
    moved = {os.path.normcase(str(k)): v for k, v in moves.items()}
    fixed = 0
    for before, now in html_files.items():
        try:
            text = now.read_text("utf-8", errors="surrogateescape")
        except OSError:
            continue

        def repl(m):
            target = m.group(3)
            if not target or re.match(r"[a-z][a-z0-9+.-]*:|/|data:", target, re.I):
                return m.group(0)
            old_abs = os.path.normcase(os.path.normpath(before.parent / unquote(target)))
            new = moved.get(old_abs)
            if new is None:
                return m.group(0)
            rel = os.path.relpath(new, now.parent).replace(os.sep, "/")
            return f"{m.group(1)}{m.group(2)}{quote(rel)}{m.group(4)}{m.group(2)}"

        new_text = HREF.sub(repl, text)
        if new_text != text:
            now.write_text(new_text, "utf-8", errors="surrogateescape")
            fixed += 1
    return fixed


def update_manifest(folder, moves):
    """Keeps manifest.json pointing at the files' new places."""
    path = folder / MANIFEST
    try:
        data = json.loads(path.read_text("utf-8"))
    except (OSError, ValueError):
        return
    where = {os.path.normcase(str(k)): v for k, v in moves.items()}
    for meta in data.values():
        if isinstance(meta, dict) and meta.get("file"):
            new = where.get(os.path.normcase(str(folder / meta["file"])))
            if new is not None:
                meta["file"] = os.path.relpath(new, folder).replace(os.sep, "/")
    path.write_text(json.dumps(data, indent=1), "utf-8")


def all_pages(folder):
    return [p for p in folder.rglob("*") if p.suffix.lower() in PAGE_EXT and p.is_file()
            and p.name.lower() != "search.html"]


def apply(folder, moves):
    log = folder / UNDO_LOG
    pages_before = all_pages(folder)
    done = []
    try:
        for old, new in moves.items():
            new.parent.mkdir(parents=True, exist_ok=True)
            old.rename(new)
            done.append([str(old), str(new)])
    finally:
        log.write_text(json.dumps({"moves": done}, indent=1), "utf-8")
    done_map = {Path(o): Path(n) for o, n in done}
    pages = {p: done_map.get(p, p) for p in pages_before}
    fixed = rewrite_links(done_map, pages)
    update_manifest(folder, done_map)
    print(f"\nMoved {len(done)} files into folders and updated links in {fixed} pages.")
    print(f"To put everything back:  python organize_files.py --undo")


def undo(folder):
    log = folder / UNDO_LOG
    if not log.exists():
        sys.exit(f"Nothing to undo: {log} not found.")
    done = json.loads(log.read_text("utf-8"))["moves"]
    back = {Path(n): Path(o) for o, n in done}
    pages_before = all_pages(folder)
    restored = {}
    for new, old in back.items():
        if new.exists() and not old.exists():
            new.rename(old)
            restored[new] = old
    pages = {p: restored.get(p, p) for p in pages_before}
    fixed = rewrite_links(restored, pages)
    update_manifest(folder, restored)
    for new in back:                          # remove folders the sort created, if now empty
        d = new.parent
        while d != folder and d.is_dir() and not any(d.iterdir()):
            d.rmdir()
            d = d.parent
    log.unlink()
    print(f"Put back {len(restored)} of {len(back)} files and updated links in {fixed} pages.")


def rebuild_search(folder):
    script = Path(__file__).resolve().parent / "build_search.py"
    if not script.exists():
        script = folder / "build_search.py"
    if (folder / "search.html").exists() and script.exists():
        print("\nRebuilding search.html so its links point to the new places...")
        subprocess.run([sys.executable, str(script), str(folder)],
                       stdout=subprocess.DEVNULL, check=False)
        print("Done.")
    elif (folder / "search.html").exists():
        print("\nRun  python build_search.py  again so search.html links to the new places.")


def main():
    ap = argparse.ArgumentParser(description="Sort a study folder into folders that mirror the website.")
    ap.add_argument("folder", nargs="?", default=DEFAULT_FOLDER)
    ap.add_argument("--undo", action="store_true", help="put every file back where it was")
    ap.add_argument("--yes", action="store_true", help="move without asking")
    args = ap.parse_args()
    folder = Path(args.folder).expanduser().resolve()
    if not folder.is_dir():
        sys.exit(f"Folder not found: {folder}")

    if args.undo:
        undo(folder)
        rebuild_search(folder)
        return
    if (folder / UNDO_LOG).exists():
        sys.exit("This folder was already sorted. Run with --undo first if you want to redo it.")

    moves = plan(folder)
    if not moves:
        print("No loose files to sort. Files already inside folders are left alone.")
        return
    tree = defaultdict(list)
    for old, new in moves.items():
        tree[str(new.parent.relative_to(folder))].append((old.name, new.name))
    print(f"Plan for {folder}:\n")
    for d in sorted(tree):
        print(f"{d}\\  ({len(tree[d])} files)")
        for old, new in tree[d]:
            print(f"    {new}" + ("" if old == new else f"   <- {old}"))
    print(f"\n{len(moves)} files into {len(tree)} folders. "
          "search.html, README.md, the scripts, index.html and manifest.json stay where they are.")
    if not args.yes and input("\nMove these files? Type y and press Enter: ").strip().lower() != "y":
        print("Nothing moved.")
        return
    apply(folder, moves)
    rebuild_search(folder)


if __name__ == "__main__":
    main()
