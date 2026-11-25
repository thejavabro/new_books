#!/usr/bin/env python3
"""Build the self-playing 16:9 animation pages: python3 build.py <out-dir>
Each specs/<slug>.js becomes <out-dir>/<slug>-video.html (self-contained, works offline)."""
import os,sys,re,html
R=os.path.dirname(os.path.abspath(__file__)); OUT=sys.argv[1] if len(sys.argv)>1 else os.path.join(R,'out'); os.makedirs(OUT,exist_ok=True)
rd=lambda f:open(os.path.join(R,f),encoding='utf8').read()
css,eng,pre=rd('engine.css'),rd('engine.js'),rd('prelude.js')
BOOK=re.search(r"const BOOK='([^']+)'",pre).group(1)
order=re.findall(r"\['([a-z0-9-]+)','([^']+)','([^']+)'\]",pre)
T='''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>%s</title><style>%s</style></head><body>
<div id="fit"><div id="stage"><div id="bg"><div class="grid"></div><div class="blob" style="left:-300px;top:-400px"></div><div class="blob" style="right:-300px;bottom:-500px;background:#2dd4bf"></div><div class="vig"></div></div><div id="mark"></div><div id="prog"><i></i></div></div></div>
<div id="ui"><button id="pp">Pause</button><button id="rs">Restart</button><input id="seek" type="range" min="0" step="0.01" value="0"><span id="tm"></span><button id="fs">Fullscreen</button><span>Space play/pause · ←/→ scene · R restart · F fullscreen · C clean view for recording</span></div>
<script>%s
%s
%s</script></body></html>'''
# storyboards: one file per chapter in specs/, or all of them in chapters.js separated by '//@@ <slug>' lines
ALL={}
if os.path.exists(os.path.join(R,'chapters.js')):
    for part in re.split(r'(?m)^//@@ ',rd('chapters.js')):
        if part.strip():
            k,body=part.split('\n',1); ALL[k.strip()]=body
rows=[]
for slug,lab,title in order:
    p=os.path.join(R,'specs',slug+'.js')
    spec=open(p,encoding='utf8').read() if os.path.exists(p) else ALL.get(slug)
    if spec is None: print('missing',slug); continue
    lab=lab.replace('\\u2013','–')
    open(os.path.join(OUT,slug+'-video.html'),'w',encoding='utf8').write(T%(html.escape(BOOK+' · '+lab+' · '+title+' (animation)'),css,pre,spec,eng))
    rows.append((slug,lab,title))
idx='''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>%s · chapter animations</title><style>body{margin:0;background:#0a101c;color:#eef3fb;font-family:"Segoe UI",system-ui,sans-serif;padding:48px 24px}main{max-width:860px;margin:auto}h1{font-size:2.2rem;margin:0 0 8px}p{color:#8fa3bf;line-height:1.5}a{display:flex;gap:18px;align-items:baseline;padding:16px 20px;margin:10px 0;border:1px solid #26344d;border-radius:12px;background:#111a2b;color:#eef3fb;text-decoration:none;font-size:1.15rem;font-weight:600}a:hover{border-color:#5aa9ff}a span{color:#5aa9ff;min-width:8.5em;font-size:.85rem;letter-spacing:.12em;text-transform:uppercase}kbd{border:1px solid #33456a;border-radius:5px;padding:1px 6px;background:#1b2740;color:#eef3fb}</style></head><body><main><h1>%s · chapter animations</h1><p>Self-playing 16:9 animations, one per chapter, made for screen recording. Open one, press <kbd>F</kbd> for fullscreen and <kbd>C</kbd> for the clean view (no controls or cursor), start your recorder, then press <kbd>R</kbd> to play from the start. <kbd>Space</kbd> pauses; <kbd>←</kbd> <kbd>→</kbd> jump between scenes. The click-through study pages are still at <a style="display:inline;padding:0;border:0;background:none;color:#5aa9ff;font-size:inherit" href="index.html">index.html</a>.</p>%s</main></body></html>'''
open(os.path.join(OUT,'video-index.html'),'w',encoding='utf8').write(idx%(html.escape(BOOK),html.escape(BOOK),''.join('<a href="%s-video.html"><span>%s</span>%s</a>'%(s,l,html.escape(t)) for s,l,t in rows)))
print('built',len(rows))
