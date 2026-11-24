# The Hard Parts, Drawn Out

An interactive visual companion to *Software Architecture: The Hard Parts* by Neal Ford, Mark Richards, Pramod Sadalage and Zhamak Dehghani (O'Reilly, 2021). There is one self-contained HTML page per chapter, plus an index. Each page has diagrams, steppers, small simulations and a short quiz.

## How to open

Open `index.html` in any modern browser. No server or install is needed, and every page works offline. Pages use Google Fonts when online and fall back to system fonts otherwise. A button in the header switches between the light and dark themes.

## Chapters

| # | Page | Topic |
|---|------|-------|
| 1 | ch01-no-best-practices.html | Least-worst trade-offs, ADRs, fitness functions |
| 2 | ch02-discerning-coupling.html | Architecture quantum, static and dynamic coupling |
| 3 | ch03-architectural-modularity.html | Modularity drivers |
| 4 | ch04-architectural-decomposition.html | Component-based decomposition vs tactical forking |
| 5 | ch05-component-decomposition-patterns.html | Six decomposition patterns |
| 6 | ch06-pulling-apart-operational-data.html | Data disintegrators/integrators, database types |
| 7 | ch07-service-granularity.html | Granularity disintegrators and integrators |
| 8 | ch08-reuse-patterns.html | Replication, libraries, shared services, sidecars |
| 9 | ch09-data-ownership.html | Data ownership, ACID vs BASE, eventual consistency |
| 10 | ch10-distributed-data-access.html | Four data access patterns |
| 11 | ch11-distributed-workflows.html | Orchestration vs choreography |
| 12 | ch12-transactional-sagas.html | The eight saga patterns, compensation, state machines |
| 13 | ch13-contracts.html | Strict vs loose contracts, consumer-driven contracts, stamp coupling |
| 14 | ch14-analytical-data.html | Warehouse, lake, data mesh |
| 15 | ch15-build-your-own-tradeoff-analysis.html | Doing your own trade-off analysis |

The appendices (reference lists) are not covered.

## A note on content

All explanations, examples, code snippets and visuals are original summaries written for this companion. Apart from short terms and pattern names, they do not reproduce the book's text or figures. Some numbers in the interactive models are illustrative, and the pages say so where they appear. Please read the book for the full argument.

`_source/` contains the build script and page sources (`python3 build.py <outdir> all`).
