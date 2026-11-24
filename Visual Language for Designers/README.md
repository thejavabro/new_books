# Visual Language for Designers: visual companion

Interactive learning pages for *Visual Language for Designers: Principles for Creating Graphics That People Understand* by Connie Malamed (Rockport, 2009). There is one self-contained HTML page per chapter, plus an index page.

## How to open

Open `index.html` in any modern browser. Every page is a single file with its CSS and JavaScript inlined, and pages link to each other by relative paths, so the folder works offline and from a zip once extracted. Fonts load from Google Fonts when online and fall back to system fonts otherwise. Pages follow the system light or dark setting, and each has a theme button (auto, light, dark).

## Chapters

| File | Chapter | Covers |
|---|---|---|
| `ch01-getting-graphics.html` | 1. Getting Graphics | Introduction and Section One: the information-processing system, fovea and saccades, bottom-up and top-down processing, working memory and cognitive load, long-term memory, schemas, dual coding, audience characteristics, informative purpose |
| `ch02-organize-for-perception.html` | 2. Organize for Perception (Principle 1) | Preattentive processing, features that pop out, texture segregation, grouping |
| `ch03-direct-the-eyes.html` | 3. Direct the Eyes (Principle 2) | Position, emphasis, movement, eye gaze, visual cues |
| `ch04-reduce-realism.html` | 4. Reduce Realism (Principle 3) | Fidelity, visual noise, silhouettes, iconic forms, line art, quantity |
| `ch05-make-the-abstract-concrete.html` | 5. Make the Abstract Concrete (Principle 4) | Big-picture views (diagrams), data displays, visualization of information, maps, timelines |
| `ch06-clarify-complexity.html` | 6. Clarify Complexity (Principle 5) | Segments and sequences, specialized views, implied motion, inherent structure (LATCH) |
| `ch07-charge-it-up.html` | 7. Charge It Up (Principle 6) | Emotional salience, narratives, visual metaphors, novelty and humor |
| `appendix-toolkit.html` | A. Toolkit and Glossary | Glossary flashcards, a matching game, a principle picker, and a summary of the back matter |

Each page has numbered sections with diagrams, simulations, step-throughs or small games, and ends with a short quiz.

## About the content

The explanations are original summaries written for this companion. They are not excerpts from the book; quotations are limited to short phrases. All diagrams, examples and interactive demos are new drawings. None of the book's illustrations or contributor artwork is reproduced. Where a demo uses numbers (search times, illustrative bars), they come from your own interaction or are labeled as illustrative.

The bibliography, sources cited and directory of contributors are summarized on the appendix page, not reproduced.

## Missing or blank content in the source PDF

No chapter content is missing. The introduction, Section One and all six principles (PDF pages 13 to 344) have readable text. A few pages in the source file have no content:

- PDF page 1: a web-viewer "loading" placeholder ("Hang tight. This'll take just a sec.") in front of the title page.
- PDF pages 6 to 12: blank where the front matter would be (probably copyright, dedication and acknowledgments). No chapter text is affected.
- PDF page 64: blank, just before the Section Two divider. No text is missing around it.

## Source

`_source/` holds the build pipeline: `base.css`, `base.js`, `build.py` and `src/*.html`. Run `python3 build.py <output-dir>` to rebuild every page, inlining the shared CSS and JS into each one.
