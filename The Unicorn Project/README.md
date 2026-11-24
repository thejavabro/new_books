# The Unicorn Project — visual companion

Interactive, illustrated learning pages for *The Unicorn Project: A Novel about Developers, Digital Disruption, and Thriving in the Age of Data* by Gene Kim (IT Revolution, 2019). Because the book is a novel, chapters are grouped by story arc: each page gives a brief plot recap in my own words, then explains the DevOps ideas behind that part of the story (the Five Ideals, flow, technical debt, psychological safety, Three Horizons, Core vs. Context, event sourcing and more) with original diagrams, simulations and a quick check.

Open `index.html` in any browser. Every page is self-contained, works offline (fonts fall back to system fonts) and links to the others by relative path, so keep the files together in one folder.

## Pages

| Page | Covers |
|---|---|
| `ch01-exile.html` — Exiled to the Phoenix Project | Prologue, Chapters 1–2 |
| `ch02-the-build.html` — The Quest for a Build | Chapters 3–4 |
| `ch03-launch.html` — The Rebellion and the Launch | Chapters 5–6 |
| `ch04-five-ideals.html` — The Five Ideals | Chapter 7 (end of Part One) |
| `ch05-data-hub.html` — Data Hub and Project Inversion | Chapters 8–9 |
| `ch06-merge-and-deploy.html` — Merge Hell and Bizarro Ops | Chapters 10–11 |
| `ch07-value-stream.html` — Following the Value Stream | Chapters 12–13 |
| `ch08-unicorn.html` — The Unicorn Project and Black Friday | Chapters 14–15 |
| `ch09-horizons.html` — Three Horizons, Core and Context | Chapters 16–17 |
| `ch10-innovation.html` — Innovation, Shamu and One Year Later | Chapters 18–19 and Epilogue |
| `appendix-ideals.html` — The Five Ideals in Practice | The closing Five Ideals page, a self-check, timeline, cast and the book's recommended reading |

Light and dark themes follow your system setting; layouts work down to phone width. The self-check on the field-guide page saves answers only in your browser.

## Notes

- All explanations and plot recaps are original summaries, not text from the book; quotations are limited to a few short phrases. Diagrams, simulations and code snippets are original illustrations. Numbers inside simulations are illustrative unless the page says a figure comes from the story.
- Content check: the full text of the PDF (398 pages) was present and readable, from the prologue through the epilogue, the Five Ideals page and the references. No chapter is missing. The cover pages and the book's two-page timeline graphic are images; the timeline is summarized on the field-guide page rather than reproduced. The detailed reference list (talks and articles by chapter) is not reproduced.

`_source/` holds the shared CSS/JS, the page sources and `build.py` (`python3 build.py <out-dir> all`) for regenerating the pages.
