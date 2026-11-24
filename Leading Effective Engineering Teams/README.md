# Leading Effective Engineering Teams — visual companion

Interactive visual learning pages for *Leading Effective Engineering Teams: Lessons for Individual Contributors and Managers from 10 Years at Google* by Addy Osmani (O'Reilly, 2024).

## How to open
Unzip and open `index.html` in any modern browser. Every page is self-contained (CSS and JS inlined) and works offline; fonts load from Google Fonts when online and fall back to system fonts otherwise. Light and dark themes follow your system setting. Works at phone width.

## Pages
- `index.html` — overview and chapter list
- `ch01-effective-teams.html` — Ch 1: What Makes a Software Engineering Team Effective?
- `ch02-efficiency-effectiveness.html` — Ch 2: Efficiency Versus Effectiveness Versus Productivity
- `ch03-three-es.html` — Ch 3: The 3 E's Model of Effective Engineering
- `ch04-effective-management.html` — Ch 4: Effective Management Behaviors: Research from Google
- `ch05-antipatterns.html` — Ch 5: Common Effectiveness Antipatterns
- `ch06-effective-managers.html` — Ch 6: Effective Managers
- `ch07a-leaders-and-traits.html` — Ch 7 (part 1): Becoming an Effective Leader — leaders vs managers, roles, traits
- `ch07b-leading-effectively.html` — Ch 7 (part 2): Becoming an Effective Leader — styles, strategy, attitude, adaptive leadership

Chapter 7 is the longest chapter (about 58 pages), so it is split across two pages. Front matter (foreword, preface, acknowledgments), the index, About the Author and the colophon are not covered.

Each chapter page has diagrams, step-throughs, small simulations, a quick-check quiz and a one-screen recap.

## Note on content
All explanations, examples, numbers in simulations and drawings are original summaries written for this companion, not text or figures copied from the book. Short phrases are quoted only where needed. Simulation numbers are illustrative unless the page says they come from the book.

## Missing content
None found. All 7 chapters (PDF pages 15–299) extracted cleanly; the only text-less pages are blank separators or a figure page.

## Source
`_source/` (in the project folder, not the zip) holds `build.py`, `base.css`, `base.js` and `src/*.html`. Run `python3 build.py <outdir>` to rebuild.
