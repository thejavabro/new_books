# Monolith to Microservices — visual companion

Interactive, self-contained HTML pages for each chapter of *Monolith to Microservices: Evolutionary Patterns to Transform Your Monolith* by Sam Newman (O'Reilly, 2019).

Each page explains the chapter's key ideas in original wording, with inline SVG diagrams, step-through walkthroughs, small simulations (sliders, toggles, failure injection), pattern pickers and a quick-check quiz.

## How to open

Open `index.html` in any modern browser. Everything is in the HTML files: no server, no build step, no external scripts. Fonts come from Google Fonts when online and fall back to system fonts offline. Light and dark themes follow your system; the "Theme" button in each page header switches between them.

## Pages

| Page | Covers |
|---|---|
| `ch01-just-enough-microservices.html` | Ch 1 Just Enough Microservices |
| `ch02-why-microservices.html` | Ch 2 Planning a Migration, part 1: goals, reasons and alternatives, bad fits, priorities |
| `ch02-planning-the-journey.html` | Ch 2 Planning a Migration, part 2: change management, incremental steps, where to start, teams, skills, measuring |
| `ch03-strangler-and-ui.html` | Ch 3 Splitting the Monolith, part 1: strangler fig, proxies, protocols, messaging, UI composition |
| `ch03-abstraction-to-cdc.html` | Ch 3 Splitting the Monolith, part 2: branch by abstraction, parallel run, decorating collaborator, change data capture |
| `ch04-shared-data.html` | Ch 4 Decomposing the Database, part 1: shared database coping patterns, ownership, data synchronization, tracer write |
| `ch04-splitting-the-database.html` | Ch 4 Decomposing the Database, part 2: splitting schemas, split table, foreign keys, static reference data |
| `ch04-transactions-and-sagas.html` | Ch 4 Decomposing the Database, part 3: transactions, two-phase commit, sagas |
| `ch05-growing-pains.html` | Ch 5 Growing Pains |
| `ch06-closing-and-patterns.html` | Ch 6 Closing Words + Appendix B Pattern Index (as an interactive picker) |

## Notes

- All explanations, examples, code snippets and drawings are original summaries written for this companion. They are not copied from the book; only short phrases are quoted. Numbers in the simulations are illustrative unless stated otherwise.
- Skipped on purpose: front matter (preface, conventions, acknowledgments), Appendix A (bibliography) and the book's index.
- Missing content: none found. Every chapter (1-6) and both appendices in the source PDF were present and readable. Pages that look blank in the PDF contain only figures.
