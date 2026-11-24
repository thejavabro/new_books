# Database Internals — visual companion

This is a set of interactive, illustrated pages for *Database Internals: A Deep Dive into How Distributed Data Systems Work* by Alex Petrov (O'Reilly, 2019). Each chapter has its own self-contained HTML page, and an index page links them all.

## How to open

Open `index.html` in any browser. The pages work offline (fonts fall back to system fonts) and link to each other by relative path, so keep all the files together in one folder.

## What's on each page

- Diagrams, animations, steppers and simulations. Examples include B-tree splits, slotted pages, LSM compaction, WAL/ARIES recovery, gossip, Merkle trees, 2PC/3PC, a Paxos sandbox and a live Raft cluster.
- A 3–5 question quiz.
- Light and dark themes, and a layout that works on a phone.

The explanations, code snippets and drawings are original summaries written for this companion. They are not quotations from the book, and they don't replace it.

## Chapters

| Page | Book chapter |
|---|---|
| `ch01-introduction.html` | Part I, Ch 1. Introduction and Overview |
| `ch02-btree-basics.html` | Ch 2. B-Tree Basics |
| `ch03-file-formats.html` | Ch 3. File Formats |
| `ch04-implementing-btrees.html` | Ch 4. Implementing B-Trees |
| `ch05a-buffers-recovery.html` | Ch 5 (first half). Buffer Management and Recovery |
| `ch05b-concurrency.html` | Ch 5 (second half). Concurrency Control |
| `ch06-btree-variants.html` | Ch 6. B-Tree Variants |
| `ch07-log-structured.html` | Ch 7. Log-Structured Storage, plus the Part I conclusion |
| `ch08-distributed-intro.html` | Part II, Ch 8. Introduction and Overview |
| `ch09-failure-leader.html` | Ch 9. Failure Detection and Ch 10. Leader Election, combined |
| `ch11-replication-consistency.html` | Ch 11. Replication and Consistency |
| `ch12-anti-entropy.html` | Ch 12. Anti-Entropy and Dissemination |
| `ch13-distributed-transactions.html` | Ch 13. Distributed Transactions |
| `ch14a-broadcast-paxos.html` | Ch 14 (first half). Consensus: broadcast, ZAB, the Paxos family |
| `ch14b-raft-pbft.html` | Ch 14 (second half). Consensus: Raft and PBFT, plus the Part II conclusion |

## Source PDF check

MISSING: none. Every chapter in the source PDF had full text. The only near-empty pages were blank separators and figure-only pages.

## Rebuilding

`_source/` holds the shared CSS/JS, the B+-tree helper (`lib-btree.js`), the chapter sources (`src/`) and `build.py`. To regenerate the pages, run `python3 build.py out` from inside `_source/`.
