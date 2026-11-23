import json,re,glob,os,sys,html
OUT=sys.argv[1] if len(sys.argv)>1 else 'out'
os.makedirs(OUT,exist_ok=True)
BOOK="Agentic Architectural Patterns for Building Multi-Agent Systems"
CSS=open('base.css').read(); JS=open('base.js').read()
FONTS='<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;600&display=swap">'
COLS=['ink','blue','pencil','ok','bad','muted','d2','d3','d4','line']
DEFS='<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>'+''.join(f'<marker id="ah-{c}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" fill="var(--{c})"/></marker>' for c in COLS)+'</defs></svg>'
chs=[]
for f in sorted(glob.glob('ch/ch*.html')):
  src=open(f).read()
  m=re.search(r'<!--meta\s*(\{.*?\})\s*-->',src,re.S); meta=json.loads(m.group(1)); body=src[m.end():]
  sm=re.search(r'<script>(.*)</script>\s*$',body,re.S); script=sm.group(1) if sm else ''; body=body[:sm.start()] if sm else body
  meta['body']=body;meta['script']=script;meta['file']=f"ch{meta['n']:02d}-{meta['slug']}.html";chs.append(meta)
chs.sort(key=lambda c:c['n'])
PARTS={1:'Part 1 · Foundations and core agent concepts',4:'Part 2 · Architecture and design patterns',12:'Part 3 · Execution: strategy, use cases, future'}
def part(n): return 'Part 1' if n<=3 else ('Part 2' if n<=11 else 'Part 3')
for i,c in enumerate(chs):
  secs=re.findall(r'<section id="([^"]+)" data-t="([^"]+)" data-h="([^"]+)"',c['body'])
  k=[0]
  def rep(mm):
    k[0]+=1;return f'{mm.group(0)[:-1]} class="stack">\n  <div class="sec-head"><span class="num">{k[0]}</span><h2>{mm.group(3)}</h2></div>'
  body=re.sub(r'<section id="([^"]+)" data-t="([^"]+)" data-h="([^"]+)">',rep,c['body'])
  toc=''.join(f'<a href="#{a}">{b}</a>' for a,b,_ in secs)
  prev=chs[i-1] if i>0 else None; nxt=chs[i+1] if i+1<len(chs) else None
  pager='<nav class="pager" aria-label="Chapters">'+(f'<a href="{prev["file"]}">← Ch {prev["n"]}: {prev["short"]}</a>' if prev else '<a href="index.html">← All chapters</a>')+'<a href="index.html">All chapters</a>'+(f'<a href="{nxt["file"]}">Ch {nxt["n"]}: {nxt["short"]} →</a>' if nxt else '')+'</nav>'
  page=f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(c["short"])}</title>
<meta name="description" content="{html.escape(c["lede"])}">
{FONTS}
<style>
{CSS}
{c.get("css","")}
</style>
</head>
<body>
{DEFS}
<div class="wrap">
<header>
  <div class="stamp"><a class="tag" href="index.html">Agentic Architectural Patterns</a><span class="tag">Visual companion</span><span class="tag">{part(c["n"])} · Chapter {c["n"]} of 16</span></div>
  <h1>{c["title"]}</h1>
  <p class="lede">{c["lede"]}</p>
  <nav class="toc" aria-label="Sections">{toc}</nav>
</header>
{body}
<footer>
  {pager}
  <span>Companion notes for chapter {c["n"]} of <i>{BOOK}</i> by Dr. Ali Arsanjani and Juan Pablo Bustos (Packt, 2026). Explanations, diagrams and simulations are original summaries, not text from the book.</span>
</footer>
</div>
<script>
(function(){{
{JS}
{c["script"]}
}})();
</script>
</body>
</html>
'''
  open(os.path.join(OUT,c['file']),'w').write(page)
# index
rows=''
for c in chs:
  if c['n'] in PARTS: rows+=f'<li class="part"><span>{PARTS[c["n"]]}</span></li>'
  rows+=f'<li><span class="n">{c["n"]:02d}</span><a class="t" href="{c["file"]}"><b>{c["title"]}</b><span>{c["blurb"]}</span></a><span class="s">{c.get("kind","Chapter")}</span></li>'
idx=f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Agentic Patterns Visual Companion</title>
{FONTS}
<style>
:root{{--paper:#f3f6fa;--surface:#fff;--ink:#12243a;--muted:#55677b;--grid:#dfe7f1;--line:#c8d5e3;--blue:#1d5ea8;--blue-soft:#e1ebf8;--pencil:#c2410c;
--display:"Bricolage Grotesque","Segoe UI",system-ui,sans-serif;--body:"Source Sans 3",system-ui,sans-serif;--mono:"JetBrains Mono",ui-monospace,Menlo,monospace}}
@media (prefers-color-scheme: dark){{:root:not([data-theme="light"]){{--paper:#0c1623;--surface:#122030;--ink:#e3ebf5;--muted:#94a6ba;--grid:#16263a;--line:#263a51;--blue:#6ea9ee;--blue-soft:#15304f;--pencil:#f39a69;color-scheme:dark}}}}
:root[data-theme="dark"]{{--paper:#0c1623;--surface:#122030;--ink:#e3ebf5;--muted:#94a6ba;--grid:#16263a;--line:#263a51;--blue:#6ea9ee;--blue-soft:#15304f;--pencil:#f39a69;color-scheme:dark}}
*{{box-sizing:border-box}}
body{{margin:0;background-color:var(--paper);background-image:linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px);background-size:24px 24px;
color:var(--ink);font-family:var(--body);font-size:17px;line-height:1.55;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));padding-block:40px 80px}}
.wrap{{max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:28px}}
h1{{font-family:var(--display);font-weight:800;font-size:clamp(2rem,5.5vw,3rem);line-height:1.1;margin:0;letter-spacing:-.02em;text-wrap:balance}}
p{{margin:0;max-width:62ch;color:var(--muted)}}
.eyebrow{{font-family:var(--mono);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}}
ol{{list-style:none;margin:0;padding:0;background:var(--surface);border:1px solid var(--line);border-radius:10px;overflow:hidden}}
li{{display:grid;grid-template-columns:3.2rem minmax(0,1fr) auto;gap:12px;align-items:center;padding:14px 16px;border-bottom:1px solid var(--line)}}
li:last-child{{border-bottom:0}}
li.part{{display:block;background:var(--paper);padding:10px 16px;font-family:var(--mono);font-size:.74rem;letter-spacing:.08em;text-transform:uppercase;color:var(--pencil)}}
.n{{font-family:var(--mono);color:var(--blue);font-size:.9rem}}
.t{{display:flex;flex-direction:column;min-width:0}}
.t b{{font-family:var(--display);font-weight:600}}
.t span{{font-size:.9rem;color:var(--muted)}}
.s{{font-family:var(--mono);font-size:.72rem;padding:3px 8px;border-radius:4px;border:1px solid var(--blue);background:var(--blue);color:var(--surface);white-space:nowrap}}
a{{color:inherit;text-decoration:none}}
a:hover b{{color:var(--blue)}}
a:focus-visible{{outline:2px solid var(--blue);outline-offset:2px;border-radius:3px}}
footer{{font-size:.85rem;color:var(--muted)}}
@media (max-width:520px){{li{{grid-template-columns:2.4rem minmax(0,1fr)}}.s{{display:none}}}}
</style>
</head>
<body>
<div class="wrap">
  <span class="eyebrow">{BOOK} · visual companion</span>
  <h1>Agentic Patterns, Drawn Out</h1>
  <p>One interactive page per chapter: animated diagrams you can step through, pattern explorers, small simulations and quick checks. Every page works offline from this folder; open any chapter to start, or go in order.</p>
  <ol>{rows}</ol>
  <footer>Original summaries and drawings based on <i>{BOOK}</i> by Dr. Ali Arsanjani and Juan Pablo Bustos (Packt, 2026).</footer>
</div>
</body>
</html>
'''
open(os.path.join(OUT,'index.html'),'w').write(idx)
print('built',len(chs))
