# Fabulous Adventures in Data Structures and Algorithms: visual companion

These are interactive, illustrated study pages for *Fabulous Adventures in Data Structures and Algorithms* by Eric Lippert (Manning). There is one self-contained HTML page for each of the 16 chapters, plus one page that covers Appendix A (notes on C#) and Appendix B (further reading).

## How to open

Open `index.html` in any modern browser. Every page works offline: fonts fall back to system fonts if Google Fonts can't be reached. The pages link to one another by relative path, so keep all the files together in one folder.

Each page has:
- a table of contents
- diagrams, step-through animations and live simulations
- a short quiz
- previous/next links

All pages support light and dark themes and work on a phone.

## Chapters

| Page | Chapter |
|---|---|
| ch01-starting.html | 1 Starting a Fabulous Adventure |
| ch02-stacks-queues.html | 2 Immutable Stacks and Queues |
| ch03-deque.html | 3 An Immutable Deque (finger trees) |
| ch04-hashlife.html | 4 Memoizing Quadtrees for a Better Life (HashLife) |
| ch05-dawg.html | 5 The Directed Acyclic Word Graph |
| ch06-combinatorics.html | 6 Combinatorial Algorithms |
| ch07-category-theory.html | 7 Interlude: Category Theory |
| ch08-graph-coloring.html | 8 Coloring Graphs with Backtracking |
| ch09-pretty-printing.html | 9 Greedy Iterative Pretty Printing |
| ch10-unification.html | 10 Unification and Anti-unification |
| ch11-monads.html | 11 Interlude: Monads |
| ch12-randomness.html | 12 A Better Abstraction for Randomness |
| ch13-bayes.html | 13 Conditional Probability with Bayes' Theorem |
| ch14-probability-monad.html | 14 Interlude: The Probability Monad |
| ch15-continuous.html | 15 Sampling Continuous Distributions |
| ch16-markov-metropolis.html | 16 Markov Processes and Metropolis |
| appendix-csharp.html | Appendices A–B: Notes on C# and Further Reading |

## Note

The explanations are original summaries written for this companion. They are not text from the book. The code snippets, simulations and example data (for example, the small Markov-text corpus) were written for these pages.

`_source/` holds the shared CSS and JS, the per-page sources and `build.py`. Run `python3 build.py out` to regenerate the pages.
