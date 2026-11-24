# Team Topologies — visual companion

Interactive, illustrated learning pages for *Team Topologies: Organizing Business and Technology Teams for Fast Flow* by Matthew Skelton and Manuel Pais (IT Revolution, 2019). One self-contained HTML page per chapter, plus a conclusion-and-glossary page and an index.

## How to open
Open `index.html` in any browser. Every page works offline (fonts fall back to system fonts) and links to the others by relative path, so keep the files together in one folder.

## Pages
- `index.html`: overview of the model and the chapter list
- `ch01-org-charts.html`: 1. The Problem with Org Charts (also covers the foreword and preface reading guide)
- `ch02-conways-law.html`: 2. Conway's Law and Why It Matters
- `ch03-team-first-thinking.html`: 3. Team-First Thinking
- `ch04-static-topologies.html`: 4. Static Team Topologies
- `ch05-four-team-types.html`: 5. The Four Fundamental Team Topologies
- `ch06-team-first-boundaries.html`: 6. Choose Team-First Boundaries
- `ch07-interaction-modes.html`: 7. Team Interaction Modes
- `ch08-organizational-sensing.html`: 8. Evolve Team Structures with Organizational Sensing
- `ch09-conclusion.html`: Conclusion (The Next-Generation Digital Operating Model), getting started, and the glossary

Each page has light and dark themes (system setting or the toggle button), works at phone width, and includes diagrams, simulations, small games and a quick-check quiz. A few choices (checklists, sliders) are saved only in your own browser.

## Notes
- Explanations are original summaries written for this companion, not text copied from the book. Diagrams are redrawn ideas, not copies of the book's figures. Values marked "illustrative" are not from the book.
- **Missing from the source PDF:** the Recommended Reading page (PDF page 273) contains only a loading placeholder ("Hang tight. This'll take just a sec.") instead of the reading list, so it is not covered.
- Skipped on purpose: praise pages, references, notes, index, acknowledgments and author bios (reference lists).

`_source/` holds the shared CSS/JS, page sources and `build.py` (`python3 build.py <outdir> all`) for regenerating the pages.
