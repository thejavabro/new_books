# Building Event-Driven Microservices: visual companion

An interactive, chapter-by-chapter visual companion to *Building Event-Driven Microservices: Leveraging Organizational Data at Scale*, 2nd edition, by Adam Bellemare (O'Reilly, 2025).

Each chapter is a single, self-contained HTML page with:

- diagrams drawn in SVG
- step-through animations and small simulations
- a 3–7 question quiz

Every page works in light and dark themes and at phone width. Nothing needs installing, and pages work offline. The only external request is an optional Google Fonts stylesheet, and the pages fall back to system fonts without it.

## How to open

Open `index.html` in any modern browser. From there you can reach every chapter. Each chapter page has a table of contents, previous/next links, and a link back to the index. A few pages remember small preferences (theme, checklist ticks) in your browser's local storage.

## Chapters

**Part I: Foundations**
1. Why Event-Driven Microservices (`ch01-why-event-driven.html`)
2. Fundamentals of Events and Event Streams (`ch02-events-and-streams.html`)
3. Fundamentals of Event-Driven Microservices (`ch03-event-driven-microservices.html`)

**Part II: Events and data**

4. Schemas and Data Contracts (`ch04-schemas-contracts.html`)
5. Designing Events (`ch05-designing-events.html`)
6. Integrating Event-Driven Architectures with Existing Systems (`ch06-integrating-existing.html`)
7. Denormalization and Eventification (`ch07-denormalization.html`)
8. Stateful Event-Driven Microservices (`ch08-stateful.html`)
9. Deterministic Stream Processing (`ch09-deterministic.html`)
10. Building Workflows with Microservices (`ch10-workflows.html`)

**Part III: Building services**

11. Basic Producer and Consumer Microservices (`ch11-basic-producer-consumer.html`)
12. Heavyweight Framework Microservices (`ch12-heavyweight.html`)
13. Lightweight Framework Microservices (`ch13-lightweight.html`)
14. Streaming SQL (`ch14-streaming-sql.html`)
15. Microservices Using Functions as a Service (`ch15-faas.html`)

**Part IV: Running them**

16. Eventual Consistency (`ch16-eventual-consistency.html`)
17. Integrating Event-Driven and Request-Response Microservices (`ch17-request-response.html`)
18. Handling Bad Data in Event Streams (`ch18-bad-data.html`)
19. Supportive Tooling (`ch19-tooling.html`)
20. Testing Event-Driven Microservices (`ch20-testing.html`)
21. Deploying Event-Driven Microservices (`ch21-deploying.html`)
22. Conclusion (`ch22-conclusion.html`), with a whole-book map and quiz

## About the content

The explanations, examples, code snippets and drawings are original summaries written for this companion. They are not text or figures from the book. Short phrases are paraphrased, and the code samples are simplified sketches, not the book's listings. Read the book for the full treatment.

## Completeness

All 22 chapters of the source PDF (594 pages) were covered. **No missing chapters or pages were found.**

- The blank PDF pages (1–2 cover image, and 198, 314, 365, 443, 545, 592) are chapter or part separators.
- The index (pp. 546–592) is not reproduced.

## Source

The `_source/` folder (not included in the zip) holds `build.py`, `pages.py`, the shared `base.css` and `base.js`, and the per-chapter sources in `src/`. To rebuild:

```
python3 build.py <output-dir>
```
