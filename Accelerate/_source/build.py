#!/usr/bin/env python3
"""Assemble self-contained chapter pages for the Accelerate visual companion.
Each src/<slug>.html holds an optional <style>, the <section> blocks and a <script>.
Sections are written as <section id="x" data-toc="Short" data-h="Heading">; the build adds
numbered headings, the table of contents, the header, the pager and the shared CSS/JS."""
import re, sys, os, html, json
ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'out')
BOOK = 'Accelerate'
CREDIT = ('Companion notes for <i>Accelerate: The Science of Lean Software and DevOps</i> by Nicole Forsgren, Jez Humble and Gene Kim '
          '(IT Revolution, 2018){extra}. Explanations, examples and drawings are original summaries; the figures are redrawn from the findings, not copied.')

PAGES = [
 # slug, part, label, title, index subtitle, lede
 ('ch01-accelerate','I','1','Accelerate','Capabilities, not maturity; the size of the gap',
  'Every organization now runs on software. The research behind this book asks a simple question with a rigorous method: what actually makes teams deliver software better, and does it matter to the business?'),
 ('ch02-measuring-performance','I','2','Measuring Performance','Four key metrics and the high, medium and low clusters',
  'Most productivity metrics reward busywork or pit teams against each other. The book replaces them with four measures of delivery speed and stability, and finds that the best teams win on all four at once.'),
 ('ch03-measuring-culture','I','3','Measuring and Changing Culture','Westrum\'s typology, information flow, acting your way to a new culture',
  'Culture sounds too fuzzy to measure. It isn\'t, if you pick a good model. Westrum\'s three culture types predict how information flows, and how information flows predicts performance.'),
 ('ch04-technical-practices','I','4','Technical Practices','Continuous delivery and what drives it',
  'Agile adoptions often treat engineering practices as optional extras. The data says they are central: continuous delivery improves delivery performance, quality, culture and how work feels.'),
 ('ch05-architecture','I','5','Architecture','Loose coupling, Conway\'s law and scaling teams',
  'What kind of system you build matters far less than how it is shaped. Teams that can test and deploy on their own, without asking anyone, are the ones that go fast.'),
 ('ch06-infosec','I','6','Integrating Infosec into the Delivery Lifecycle','Shifting left on security',
  'Security bolted on at the end is slow and expensive. Building it into daily work makes teams faster and more secure at the same time.'),
 ('ch07-management-practices','I','7','Management Practices for Software','WIP limits, visual displays, monitoring and change approval',
  'Lean management works when its practices are used together. And the heavyweight change approval board, the classic safety net, turns out to slow teams down without making anything safer.'),
 ('ch08-product-development','I','8','Product Development','Small batches, customer feedback and team experimentation',
  'Lean product development means treating every feature as an experiment: slice it small, show it to customers, and let the team change the plan when it learns something.'),
 ('ch09-sustainable-work','I','9','Making Work Sustainable','Deployment pain and burnout',
  'High performance should not cost people their health. The same practices that make delivery fast also make deployments calmer and burnout rarer.'),
 ('ch10-satisfaction-identity','I','10','Employee Satisfaction, Identity, and Engagement','eNPS, identity, job satisfaction and diversity',
  'People who would recommend their workplace, who share its goals and who have the tools to do good work, produce better results for the business.'),
 ('ch11-leaders-managers','I','11','Leaders and Managers','Transformational leadership and what managers can do',
  'Leaders don\'t ship software, but they shape whether teams can. Their effect is real and indirect: they amplify good practices rather than replace them.'),
 ('ch12-science','II','12','The Science Behind This Book','Types of research and analysis; correlation vs. prediction',
  'How can survey research claim one thing "drives" another? This chapter lays out the ladder of analysis types and where the book\'s claims sit on it.'),
 ('ch13-psychometrics','II','13','Introduction to Psychometrics','Good survey items, latent constructs, validity and reliability',
  'You can\'t take culture\'s temperature with one question. Latent constructs measure the unmeasurable through several careful items, and statistics checks they hang together.'),
 ('ch14-why-survey','II','14','Why Use a Survey','Five reasons surveys beat, or complement, system data',
  'Engineers tend to trust logs and distrust surveys. The authors argue both can be wrong, and that some things can only be learned by asking people.'),
 ('ch15-data','II','15','The Data for the Project','Target population and snowball sampling',
  'Who answered the survey, how they were found, and what that does and doesn\'t let us conclude.'),
 ('ch16-leadership-ing','III','16','High-Performance Leadership and Management','A day inside ING\'s learning organization',
  'A guest chapter by Steve Bell and Karen Whitley Bell visits ING Netherlands to show what the research looks like when leaders, managers and teams live it day to day.'),
 ('appendix-a-capabilities','App','A','The 24 Capabilities','Explore, self-assess and prioritise (with the Conclusion)',
  'Everything in the book distilled into 24 capabilities in five groups. Rate your team on each and get a short list of where to start.'),
 ('appendix-bc-stats-methods','App','B–C','The Stats and the Methods','Every finding in one place; how constructs are validated',
  'Appendix B lists the statistical findings by category. Appendix C walks through the methods, from bias tests to clustering. Here they are as charts and a construct checker you can play with.'),
]

def head(title, desc, css):
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{html.escape(desc)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;600&display=swap">
<style>
{css}
</style>
</head>
<body>
'''

SEC = re.compile(r'<section id="([\w-]+)"\s+data-toc="([^"]+)"\s+data-h="([^"]+)"\s*>')

def build_page(i, base_css, base_js):
    slug, part, label, title, sub, lede = PAGES[i]
    src = open(os.path.join(ROOT, 'src', slug + '.html'), encoding='utf-8').read()
    m = re.search(r'<style>(.*?)</style>', src, re.S)
    page_css = m.group(1) if m else ''
    src = re.sub(r'<style>.*?</style>', '', src, count=1, flags=re.S)
    m = re.search(r'<script>(.*)</script>', src, re.S)
    page_js = m.group(1) if m else ''
    body = re.sub(r'<script>.*</script>', '', src, count=1, flags=re.S).strip()
    toc = []
    n = [0]
    def rep(mm):
        n[0] += 1
        toc.append((mm.group(1), mm.group(2)))
        return f'<section id="{mm.group(1)}" class="stack">\n  <div class="sec-head"><span class="num">{n[0]}</span><h2>{mm.group(3)}</h2></div>'
    body = SEC.sub(rep, body)
    if part == 'App':
        where = f'Appendix {label}'
    else:
        where = f'Part {part} · Chapter {label} of 16'
    full_title = title if len(title) < 40 else title.split(' into ')[0]
    nav = ''.join(f'<a href="#{a}">{t}</a>' for a, t in toc)
    prev = PAGES[i-1] if i > 0 else None
    nxt = PAGES[i+1] if i < len(PAGES)-1 else None
    def pl(p, cls, word):
        if not p: return '<span></span>'
        lab = ('Chapter ' + p[2]) if p[1] != 'App' else ('Appendix ' + p[2])
        return f'<a class="{cls}" href="{p[0]}.html"><span>{word} · {lab}</span><b>{p[3]}</b></a>'
    pager = f'<nav class="pager" aria-label="Chapters">{pl(prev,"pv","Previous")}<a class="home" href="index.html">All chapters</a>{pl(nxt,"nx","Next")}</nav>'
    extra = ''
    if slug.startswith('ch16'):
        extra = '; chapter 16 is a guest chapter by Steve Bell and Karen Whitley Bell'
    out = head(full_title, lede, base_css + '\n/* page */\n' + page_css)
    out += f'''<div class="wrap">
<header>
  <div class="stamp"><a class="tag" href="index.html">{BOOK} · visual companion</a><span class="tag">{where}</span></div>
  <h1>{title}</h1>
  <p class="lede">{lede}</p>
  <nav class="toc" aria-label="Sections">{nav}</nav>
</header>

{body}

<div class="stack">
  <footer class="src">{CREDIT.format(extra=extra)}</footer>
  {pager}
</div>
</div>
<script>
(function(){{
{base_js}
{page_js}
}})();
</script>
</body>
</html>
'''
    open(os.path.join(OUT, slug + '.html'), 'w', encoding='utf-8').write(out)
    return slug

def main():
    os.makedirs(OUT, exist_ok=True)
    base_css = open(os.path.join(ROOT, 'base.css'), encoding='utf-8').read()
    base_js = open(os.path.join(ROOT, 'base.js'), encoding='utf-8').read()
    only = sys.argv[2:]
    built = []
    for i, p in enumerate(PAGES):
        if only and p[0] not in only and 'all' not in only: continue
        if not os.path.exists(os.path.join(ROOT, 'src', p[0] + '.html')):
            continue
        built.append(build_page(i, base_css, base_js))
    # index
    idx = open(os.path.join(ROOT, 'src', 'index.html'), encoding='utf-8').read()
    rows = {'I': [], 'II': [], 'III': [], 'App': []}
    for p in PAGES:
        ready = os.path.exists(os.path.join(ROOT, 'src', p[0] + '.html'))
        n = p[2]
        if ready:
            rows[p[1]].append(f'<li class="live"><span class="n">{n.zfill(2) if n.isdigit() else n}</span><a class="t" href="{p[0]}.html"><b>{p[3]}</b><span>{p[4]}</span></a><span class="s">Open</span></li>')
        else:
            rows[p[1]].append(f'<li class="soon"><span class="n">{n.zfill(2) if n.isdigit() else n}</span><span class="t"><b>{p[3]}</b><span>{p[4]}</span></span><span class="s">Soon</span></li>')
    for k in rows:
        idx = idx.replace('{{ROWS_' + k + '}}', '\n'.join(rows[k]))
    idx = idx.replace('{{BASE_CSS}}', base_css).replace('{{BASE_JS}}', base_js)
    open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(idx)
    print('built', built)

if __name__ == '__main__':
    main()
