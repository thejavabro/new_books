# Java Performance — visual companion

Interactive, self-contained HTML pages that accompany *Java Performance: In-Depth Advice for Tuning and Programming Java 8, 11, and Beyond* (2nd edition) by Scott Oaks (O'Reilly, 2020). Each chapter page has diagrams, simulations (sliders, toggles, step-throughs), a quick-check quiz and a one-screen recap.

## How to open

Open `index.html` in any modern browser. Every page is a single file with its CSS and JavaScript inlined, so the folder works offline. Without a connection, Google Fonts falls back to system fonts. Pages support light and dark themes (they follow the system setting, and the "Theme" button switches it), and they work at phone width.

## Chapters

| Page | Covers |
|---|---|
| `ch01-approach.html` | Ch 1–2: Introduction, An Approach to Performance Testing |
| `ch03-toolbox.html` | Ch 3: A Java Performance Toolbox |
| `ch04-jit.html` | Ch 4: Working with the JIT Compiler |
| `ch05-gc-intro.html` | Ch 5: An Introduction to Garbage Collection |
| `ch06a-gc-throughput-g1.html` | Ch 6 (part 1): Throughput collector and G1 |
| `ch06b-gc-cms-advanced.html` | Ch 6 (part 2): CMS, advanced tunings, ZGC/Shenandoah/Epsilon |
| `ch07-heap.html` | Ch 7: Heap Memory Best Practices |
| `ch08-native.html` | Ch 8: Native Memory Best Practices |
| `ch09-threading.html` | Ch 9: Threading and Synchronization |
| `ch10-servers.html` | Ch 10: Java Servers |
| `ch11-database.html` | Ch 11: Database Performance Best Practices |
| `ch12a-strings-io-classes.html` | Ch 12 (part 1): strings, buffered I/O, class data sharing, random numbers, JNI, exceptions, logging |
| `ch12b-collections-lambdas.html` | Ch 12 (part 2): collections, lambdas, streams, serialization |
| `appendix-flags.html` | Appendix: summary of tuning flags (filterable table) |

## Notes

- Explanations, code snippets and drawings are original summaries written for this companion, not text copied from the book. A few small benchmark figures reported in the book are charted and labelled as such. Every other number in a simulation is illustrative.
- Chapter 1 is short, so it shares a page with chapter 2. Chapters 6 and 12 are long, so each is split over two pages. The front matter and the index are skipped.
- MISSING: none. All 12 chapters and the appendix are present in the source PDF.
