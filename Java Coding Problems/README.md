# Java Coding Problems, Drawn Out

An interactive visual companion to *Java Coding Problems, Second Edition* by Anghel Leonard (Packt, 2024).
One self-contained HTML page per chapter (two pages each for the large chapters 1 and 5), with diagrams,
step-through walkthroughs, small simulations and a quick-check quiz at the end of every page.

## How to open

Open `index.html` in any modern browser. Everything works offline: each page carries its own CSS and
JavaScript, and the Google Fonts stylesheet is optional (system fonts are used without a connection).
Pages follow your system's light or dark setting, and a button in the header switches theme.

## Pages

| Page | Chapter | Problems |
|---|---|---|
| ch01-text-blocks-strings.html | 1. Text Blocks and String Templates | 1–16 |
| ch01-locales-numbers-math.html | 1. Locales, Numbers and Math | 17–37 |
| ch02-objects-patterns.html | 2. Objects, Immutability, Switch Expressions and Pattern Matching | 38–67 |
| ch03-date-time.html | 3. Working with Date and Time | 68–87 |
| ch04-records.html | 4. Records and Record Patterns | 88–106 |
| ch05-arrays-vector-collections.html | 5. Arrays, the Vector API and Collections | 107–118 |
| ch05-data-structures.html | 5. Classic Data Structures | 119–130 |
| ch06-deserialization-filters.html | 6. Java I/O: Deserialization Filters | 131–143 |
| ch07-foreign-memory.html | 7. Foreign (Function) Memory API | 144–171 |
| ch08-sealed-hidden.html | 8. Sealed and Hidden Classes | 172–184 |
| ch09-functional.html | 9. Functional Style Programming: Extending APIs | 185–208 |
| ch10-virtual-threads.html | 10. Virtual Threads and Structured Concurrency | 209–224 |
| ch11-virtual-threads-deep-dive.html | 11. Virtual Threads Deep Dive | 225–242 |
| ch12-garbage-collectors.html | 12. Garbage Collectors and Dynamic CDS Archives | 243–257 |
| ch13-sockets-sws.html | 13. Socket API and Simple Web Server | 258–276 |

Each page explains the chapter's main concepts and visualizes a representative selection of its problems;
orange "P#" tags give the problem number in the book, where the full solutions and bundled code live.

## A note on the content

All explanations, code snippets, diagrams and simulations are original summaries written for this
companion; they are not copied from the book. Simulations are simplified models meant to show the idea
(for example the GC, virtual-thread and benchmark visuals), not measurements. Where the platform has moved
on since the book (string templates withdrawn in JDK 23, `synchronized` pinning removed in JDK 24, FFM API
final in JDK 22), the pages say so.

The `_source/` folder (in the project copy only) holds `build.py`, the shared `base.css`/`base.js` and the
page sources; run `python3 build.py <outdir> all` to rebuild.
