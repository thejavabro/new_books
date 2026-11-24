# Java Concurrency in Practice: a visual companion

Interactive, self-contained HTML pages, one per chapter of *Java Concurrency in Practice* by Brian Goetz with Tim Peierls, Joshua Bloch, Joseph Bowbeer, David Holmes and Doug Lea (Addison-Wesley, 2006). Each page explains the chapter's key ideas with diagrams, step-through thread interleavings, small simulations (thread pools, deadlocking philosophers, compare-and-swap, producer-consumer queues and more) and a short quiz at the end.

## How to open

Open `index.html` in any modern browser. Every page is a single file with its CSS and JavaScript inlined, and the pages link to each other with relative paths, so the folder works offline (Google Fonts are used when online, with system-font fallbacks otherwise). Pages follow your system's light or dark theme; the "Theme" button in the header cycles auto, light and dark.

## Chapters

| Page | Chapter |
|---|---|
| `ch01-introduction.html` | 1. Introduction |
| `ch02-thread-safety.html` | 2. Thread Safety |
| `ch03-sharing-objects.html` | 3. Sharing Objects |
| `ch04-composing-objects.html` | 4. Composing Objects |
| `ch05-building-blocks.html` | 5. Building Blocks (with the Part I cheat sheet) |
| `ch06-task-execution.html` | 6. Task Execution |
| `ch07-cancellation-and-shutdown.html` | 7. Cancellation and Shutdown |
| `ch08-applying-thread-pools.html` | 8. Applying Thread Pools |
| `ch09-gui-applications.html` | 9. GUI Applications |
| `ch10-avoiding-liveness-hazards.html` | 10. Avoiding Liveness Hazards |
| `ch11-performance-and-scalability.html` | 11. Performance and Scalability |
| `ch12-testing-concurrent-programs.html` | 12. Testing Concurrent Programs |
| `ch13-explicit-locks.html` | 13. Explicit Locks |
| `ch14-building-custom-synchronizers.html` | 14. Building Custom Synchronizers |
| `ch15-atomic-variables-and-nonblocking.html` | 15. Atomic Variables and Nonblocking Synchronization |
| `ch16-java-memory-model.html` | 16. The Java Memory Model |
| `appendix-a-annotations.html` | Appendix A. Annotations for Concurrency, plus a filterable cheat sheet of the book's rules |

The preface, bibliography and index are not covered.

## A note on the content

All explanations, code snippets, drawings and quizzes are original summaries written for this companion. They are not copied from the book; quoted phrases are kept short, and code examples are new illustrative snippets in the spirit of the book's listings. Charts marked as illustrative show the shape of a finding, not the book's measured numbers. Read the book itself for the full argument and the complete listings.
