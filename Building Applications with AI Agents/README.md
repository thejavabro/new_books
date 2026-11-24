# Building Applications with AI Agents: visual companion

Interactive learning pages for *Building Applications with AI Agents: Designing and Implementing Multiagent Systems* by Michael Albada (O'Reilly, 2025). There is one page per chapter, with diagrams, step-through walkthroughs, small simulations and a quick quiz on each page.

## How to open

Open `index.html` in any modern browser. Every page is a single self-contained HTML file. Pages link to each other by relative paths, so keep them in the same folder. They work offline. The only external request is a Google Fonts stylesheet, and system fonts are used when it is unavailable. A button in each header switches between light, dark and automatic themes.

## Chapters

| Page | Chapter |
|---|---|
| ch01-introduction.html | 1. Introduction to Agents |
| ch02-designing.html | 2. Designing Agent Systems |
| ch03-ux.html | 3. User Experience Design for Agentic Systems |
| ch04-tools.html | 4. Tool Use |
| ch05-orchestration.html | 5. Orchestration |
| ch06-memory.html | 6. Knowledge and Memory |
| ch07-learning.html | 7. Learning in Agentic Systems |
| ch08-multiagent.html | 8. From One Agent to Many |
| ch09-validation.html | 9. Validation and Measurement |
| ch10-monitoring.html | 10. Monitoring in Production |
| ch11-improvement.html | 11. Improvement Loops |
| ch12-security.html | 12. Protecting Agentic Systems |
| ch13-humans.html | 13. Human-Agent Collaboration |
| appendix-glossary.html | Glossary (searchable, with flashcards) |

We left out the front matter (praise, preface), the index, the About the Author page and the colophon.

## About the content

All explanations are original summaries written for these pages. They are not text copied from the book. Code snippets are short illustrations written for these pages, and every diagram was drawn fresh. Numbers marked "illustrative" come from simplified models that show a trend. They are not measurements from the book. A few data points are taken from tables in the book: the model leaderboard and price comparison in chapters 1 and 2, and some thresholds in chapters 10 and 12. They reflect the book at publication and will date quickly.

## Missing or incomplete content in the source PDF

All 13 chapters and the glossary are present and readable in the PDF (451 pages). One small defect:

- Chapter 3: the caption of Table 3-1 (interaction modalities) reads "Placeholder" in the PDF instead of a title. The table's contents are present. The chapter page includes a note about this.

## Source

`_source/` holds the build pipeline. `build.py` inlines `base.css` and `base.js` into every page in `src/`. Run `python3 _source/build.py <outdir>` to rebuild.
