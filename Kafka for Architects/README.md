# Kafka for Architects, Drawn Out

An interactive visual companion to *Kafka for Architects: Event-driven architecture, logs, microservices, real-time event processing* by Katya Gorshkova (Manning, 2026).

## What it is
One self-contained HTML page per chapter (12 chapters, 3 parts) plus an index. Each page explains the chapter's key ideas in original words and adds inline SVG diagrams, step-through walkthroughs, small simulations (partitions and consumer groups, replication and min ISR, offsets and commits, rebalances, compaction, windows, quorum math, disaster recovery and more) and a short quiz.

## How to open
Open `index.html` in any modern browser. No server or install needed; pages link to each other with relative paths and work offline (Google Fonts load when online, with system-font fallback). Light and dark themes follow your system; the Theme button overrides it.

## Chapters
Part 1: Exploring Kafka building blocks
1. Getting to Know Kafka as an Architect: `ch01-kafka-as-an-architect.html`
2. Kafka Cluster Data Architecture: `ch02-cluster-data-architecture.html`
3. Kafka Clients and Message Production: `ch03-producers.html`
4. Creating Consumer Applications: `ch04-consumers.html`

Part 2: Solving problems with Kafka
5. Kafka in Real-World Use Cases: `ch05-real-world-use-cases.html`
6. Defining Data Contracts: `ch06-data-contracts.html`
7. Kafka Interaction Patterns: `ch07-interaction-patterns.html`
8. Designing Streaming Applications: `ch08-streaming-applications.html`

Part 3: Delivering projects with Kafka
9. Managing Kafka Within the Enterprise: `ch09-managing-kafka.html`
10. Organizing a Kafka Project: `ch10-organizing-a-project.html`
11. Operating Kafka: `ch11-operating-kafka.html`
12. What's Next for Kafka: `ch12-whats-next.html`

Front matter, "Online resources" link lists and the index are not covered.

## Missing content
None. All 12 chapters (PDF pages 30 to 475) were present and readable. The two blank PDF pages (the cover image on page 1 and a separator page after chapter 8) carry no content.

## Note
All explanations, examples, code snippets and drawings are original summaries written for this companion. Nothing is copied from the book beyond short terms and configuration names; simulated numbers are illustrative.

## Rebuilding
`_source/` holds `build.py`, the shared `base.css` / `base.js` and the page sources in `src/`. Run `python3 _source/build.py <output-dir>` to regenerate the pages.
