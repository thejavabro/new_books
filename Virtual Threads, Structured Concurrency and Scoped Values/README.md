# Virtual Threads, Structured Concurrency and Scoped Values: visual companion

Interactive learning pages for *Virtual Threads, Structured Concurrency, and Scoped Values: Explore Java's New Threading Model* by Ron Veen and David Vlijmincx (Apress Pocket Guides, 2024).

## How to open
Open `index.html` in any modern browser. Every page is self-contained (shared CSS/JS is inlined) and works offline. Fonts load from Google Fonts when online and fall back to system fonts otherwise. Light and dark themes follow your system setting.

## Pages
- `index.html`: overview and feature status by JDK release
- `ch01-virtual-threads.html`: platform vs virtual threads, pools and ThreadLocal leaks, creation APIs, a carrier-thread scheduler simulation, mounting/unmounting, pinning, when not to use them
- `ch02-structured-concurrency.html`: unstructured vs structured, scope flow, Subtask states, timeouts, invoke-all/any race, a custom policy, alternatives
- `ch03-scoped-values.html`: ThreadLocal internals and problems, binding and rebinding scoped values, unbound access, inheritance into structured subtasks
- `ch04-concurrency-patterns.html`: thread per task, migration checklist, Semaphore instead of small pools, Spring Boot and Quarkus, CompletableFuture
- `appendix-since-the-book.html`: what changed in JDK 22 to 26 and how to translate the book's code

## Notes
Explanations, code snippets, simulations and drawings are original summaries, not text from the book. Amber "JDK update" boxes mark changes made after the book was written (for example, synchronized no longer pins from JDK 24, scoped values are final in JDK 25, structured concurrency was redesigned in JDK 25 and is still a preview).

`_source/` holds `build.py`, the shared `base.css`/`base.js` and the per-page sources. Run `python3 _source/build.py <outdir>` to rebuild.
