# The Pragmatic Programmer — visual companion

Interactive, illustrated learning pages for *The Pragmatic Programmer: Your Journey to Mastery* (20th Anniversary Edition) by David Thomas and Andrew Hunt. All 9 chapters and 53 topics are covered on 11 self-contained HTML pages, plus an index. The two longest chapters (2 and 7) are each split across two pages.

## How to open

Open `index.html` in any browser. Every page works offline: fonts fall back to system fonts when there is no connection. Pages link to each other by relative path, so keep all the files together in one folder.

- Light and dark themes (follows your system; the "theme" button cycles auto / light / dark)
- Works at phone width
- Diagrams, step-through walkthroughs, simulations, small games and a 5-question quick check on every page

## Pages

| File | Book chapter | Topics |
|---|---|---|
| ch01-pragmatic-philosophy.html | 1 A Pragmatic Philosophy | 1–7 |
| ch02-good-design.html | 2 A Pragmatic Approach (I): ETC, DRY, orthogonality, reversibility | 8–11 |
| ch03-tracer-bullets-estimating.html | 2 A Pragmatic Approach (II): tracer bullets, prototypes, domain languages, estimating | 12–15 |
| ch04-basic-tools.html | 3 The Basic Tools | 16–22 |
| ch05-pragmatic-paranoia.html | 4 Pragmatic Paranoia | 23–27 |
| ch06-bend-or-break.html | 5 Bend, or Break | 28–32 |
| ch07-concurrency.html | 6 Concurrency | 33–36 |
| ch08-while-coding.html | 7 While You Are Coding (I) | 37–40 |
| ch09-tests-safety-names.html | 7 While You Are Coding (II) | 41–44 |
| ch10-before-the-project.html | 8 Before the Project | 45–48 |
| ch11-pragmatic-projects.html | 9 Pragmatic Projects, plus the Postface | 49–53 |

The front matter, bibliography and exercise answers are not reproduced.

## Note on content

The explanations, code snippets, games and drawings are original summaries written for this companion. They are not text from the book. Tip numbers and short tip titles match the book so you can cross-reference. Values marked "illustrative" come from toy models, not from the book.

`_source/` holds the shared CSS/JS, the page sources and `build.py`. Run `python3 build.py <outdir> all` to regenerate the pages.
