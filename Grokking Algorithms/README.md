# Grokking Algorithms — visual companion

Interactive, illustrated learning pages for *Grokking Algorithms*, second edition (Aditya Y. Bhargava, Manning), with one self-contained HTML page for each chapter plus one page that combines Appendices A and B.

## How to open

Open `index.html` in any browser. Every page works offline (fonts fall back to system fonts) and links to the others by relative path, so keep the files together in one folder. Light and dark themes follow your system; the "Theme" button in each header overrides the setting. The pages work on phones.

## Pages

| Page | Topic |
|---|---|
| `ch01-introduction-to-algorithms.html` | Binary search, logarithms, big O, traveling salesperson |
| `ch02-selection-sort.html` | Memory, arrays vs. linked lists, selection sort |
| `ch03-recursion.html` | Base and recursive case, the call stack |
| `ch04-quicksort.html` | Divide and conquer, quicksort, average vs. worst case |
| `ch05-hash-tables.html` | Hash functions, use cases, collisions, load factor |
| `ch06-breadth-first-search.html` | Graphs, BFS, queues, topological sort |
| `ch07-trees.html` | Trees, depth-first search, binary trees, Huffman coding |
| `ch08-balanced-trees.html` | BSTs, AVL rotations, splay trees, B-trees |
| `ch09-dijkstras-algorithm.html` | Weighted graphs, Dijkstra, negative weights |
| `ch10-greedy-algorithms.html` | Scheduling, knapsack, set cover, approximation |
| `ch11-dynamic-programming.html` | Knapsack grid, itinerary, longest common substring/subsequence |
| `ch12-k-nearest-neighbors.html` | Classification, regression, features, intro to ML |
| `ch13-where-to-go-next.html` | Ten more algorithms, each with a small toy |
| `appendix-avl-and-np-hard.html` | Appendix A (AVL performance) and B (P, NP, NP-hard, NP-complete) |

Each page has step-through animations, interactive simulations and a short quiz at the end.

## Notes

- All explanations, examples, code snippets and drawings are original summaries written for this companion. No text or figures are copied from the book. Values labeled "illustrative" are made up for the demo.
- Appendix C (answers to exercises) is not reproduced; each chapter has its own quiz instead.
- `_source/` (only in the project folder) holds the shared CSS/JS, the chapter sources and `build.py`. To regenerate the pages, run `python3 build.py <outdir> all`.
