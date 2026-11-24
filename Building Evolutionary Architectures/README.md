# Building Evolutionary Architectures — visual companion

Interactive, illustrated learning pages for *Building Evolutionary Architectures: Automated Software Governance* (2nd edition, Neal Ford, Rebecca Parsons, Patrick Kua and Pramod Sadalage). There is one self-contained HTML page per chapter, with the three longest chapters split in two, plus an index page.

## How to open

Open `index.html` in any browser. Every page works offline (fonts fall back to system fonts if Google Fonts can't be reached) and the pages link to each other by relative paths, so keep all the files together in one folder.

- Light and dark themes (the Theme button cycles auto / light / dark) and phone-friendly layouts
- Diagrams, step-throughs, simulations, small games and a short quiz on every page
- Explanations are original summaries written for this companion, not text from the book. Code snippets are illustrative and written fresh, and so are numbers labeled "illustrative".

## Pages

| Page | Book chapter |
|---|---|
| `ch01-evolving-architecture.html`: Evolving Software Architecture | Part I, Ch 1 |
| `ch02-fitness-functions.html`: Fitness Functions | Part I, Ch 2 |
| `ch03-incremental-change.html`: Engineering Incremental Change | Part I, Ch 3 |
| `ch04a-code-governance.html`: Automating Governance: Code Level | Part I, Ch 4 (first half) |
| `ch04b-stack-governance.html`: Automating Governance: Across the Stack | Part I, Ch 4 (second half) |
| `ch05a-connascence-quanta.html`: Topologies: Connascence and Quanta | Part II, Ch 5 (first half) |
| `ch05b-contracts-reuse.html`: Topologies: Contracts, Reuse and Meshes | Part II, Ch 5 (second half) |
| `ch06-evolutionary-data.html`: Evolutionary Data | Part II, Ch 6 |
| `ch07a-principles-migration.html`: Evolvable Architectures: Principles and Migration | Part III, Ch 7 (first half) |
| `ch07b-guidelines.html`: Evolvable Architectures: Guidelines | Part III, Ch 7 (second half) |
| `ch08-pitfalls-antipatterns.html`: Pitfalls and Antipatterns | Part III, Ch 8 |
| `ch09-into-practice.html`: Putting It into Practice | Part III, Ch 9 |

The front matter (foreword, preface) and the book's index are not covered.

## Rebuilding

`_source/` holds the shared `base.css` and `base.js`, the page sources in `src/`, and `build.py`. Run `python3 build.py <out-dir>` from inside `_source/` to regenerate every page.
