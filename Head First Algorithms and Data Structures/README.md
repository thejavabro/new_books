# Head First Algorithms and Data Structures: visual companion

An interactive, visual study companion for *Head First Algorithms and Data Structures: A Learner's Guide to the Foundations of Computing* by Eric Freeman and Elisabeth Robson (O'Reilly, 2026).

Each chapter is one self-contained HTML page with step-through animations, small simulations, games and a quick-check quiz at the end.

## How to open

Open `index.html` in any modern browser. Every page is self-contained (CSS and JavaScript inlined) and works offline; it loads Google Fonts when online and falls back to system fonts otherwise. Pages work at phone width and support light and dark themes (follows your system setting; the Theme button cycles auto / light / dark).

## Pages

| Page | Covers |
|---|---|
| ch01-comparing-algorithms.html | What counts as an algorithm (Knuth's criteria); linear vs. binary search; time complexity; logarithms |
| ch02-big-o.html | Big O notation; O(1) to O(n!); dropping constants; Algorithm Land |
| ch03-arrays-linked-lists.html | Static and dynamic arrays (amortized append); singly and doubly linked lists; choosing a structure |
| ch04-recursion.html | Base and recursive cases; the call stack; factorial; Fibonacci; memoization |
| ch05-sorting.html | Bubble, insertion, merge sort, quicksort; stability; the n log n limit; Timsort |
| ch06-hash-tables-stacks-queues.html | Hash functions, collisions, load factor, composite keys; stacks; queues |
| ch07-graphs.html | Graph vocabulary; adjacency lists and matrices; BFS, shortest paths, DFS; O(V + E) |
| ch08-greedy.html | Greedy choice; Dijkstra's algorithm; heaps and priority queues; selection sort; greedy knapsack |
| ch09-dynamic-programming.html | Overlapping subproblems and optimal substructure; coin change table; 0/1 knapsack table |
| ch10-limits.html | Traveling salesman; P, NP, NP-complete; the halting problem; what to do at the wall |
| appendix-leftovers.html | Tries, LRU caches, balanced trees, parallelism, strings, approximation, ML, external memory, randomized algorithms, bits |

## A note on content

All explanations, code snippets, puzzles, simulations and drawings are original summaries written for this companion. They are not copied from the book; scenario names (Micro-Storage, Algorithm Land, the dragon's lair) are used only to tie each page back to the matching chapter. Numbers in some examples (graph weights, maps) are invented for the demos. Front matter, exercise solutions, crosswords and the index were skipped.

The `_source/` folder (in the project folder only) holds `build.py`, the shared `base.css`/`base.js` and per-page sources; run `python3 build.py <outdir>` to rebuild.
