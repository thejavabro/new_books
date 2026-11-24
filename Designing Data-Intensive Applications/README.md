# Designing Data-Intensive Applications: visual companion

This is a set of self-contained interactive HTML pages, one for each of the 14 chapters of *Designing Data-Intensive Applications* (2nd edition, Martin Kleppmann & Chris Riccomini, O'Reilly). The pages explain each chapter's ideas with inline SVG diagrams, step-through animations, small simulations (such as replication lag, quorums, write skew, Raft-style elections, MapReduce and stream windows) and a short quiz.

## How to open

Open `index.html` in any modern browser. Everything works offline: no install, no server, no external scripts. The only external resource is a Google Fonts stylesheet, and the pages fall back to system fonts without it. Each page links back to the index and to the previous and next chapters. The pages work on phones and support light and dark themes (use the toggle in the header).

## Chapters

**Part A: Foundations**
1. `ch01-trade-offs.html`: Trade-Offs in Data Systems Architecture
2. `ch02-nonfunctional-requirements.html`: Defining Nonfunctional Requirements
3. `ch03-data-models.html`: Data Models and Query Languages
4. `ch04-storage-retrieval.html`: Storage and Retrieval
5. `ch05-encoding-evolution.html`: Encoding and Evolution

**Part B: Distributed data**
6. `ch06-replication.html`: Replication
7. `ch07-sharding.html`: Sharding
8. `ch08-transactions.html`: Transactions
9. `ch09-distributed-trouble.html`: The Trouble with Distributed Systems
10. `ch10-consistency-consensus.html`: Consistency and Consensus

**Part C: Derived data and society**
11. `ch11-batch-processing.html`: Batch Processing
12. `ch12-stream-processing.html`: Stream Processing
13. `ch13-philosophy-streaming.html`: A Philosophy of Streaming Systems
14. `ch14-doing-right.html`: Doing the Right Thing

The 2nd edition has no formal parts. The three groups above are this companion's own grouping. The glossary and back-of-book index are not covered.

## Source PDF completeness

MISSING: none. All 14 chapters were present in the source PDF with full text.

## About the content

All explanations, examples, diagrams and quiz questions are original summaries written for this companion. They are not excerpts from the book, and they contain no long quotations. They are meant to accompany the book, not replace it.

## Rebuilding

`_source/` (kept in the shared folder only, not in the zip) holds `build.py`, `base.css`, `base.js` and the per-chapter sources in `src/`. Run `python3 _source/build.py <outdir>` to regenerate the pages.
