# Storytelling with You — visual companion

Interactive, self-contained HTML pages that summarise *storytelling with you: plan, create, and deliver a stellar presentation* by Cole Nussbaumer Knaflic (Wiley, 2023): one page per chapter plus a case-study appendix.

## How to open
Open `index.html` in any modern browser. Every page is a single self-contained file (CSS and JS inlined) and works offline; the Google Fonts stylesheet is optional and falls back to system fonts. Pages link to each other by relative paths, so keep them in the same folder. A theme button switches light, dark or automatic.

## Chapters
- Plan
  - 01 Consider your audience — `ch01-consider-your-audience.html`
  - 02 Craft your message — `ch02-craft-your-message.html`
  - 03 Compile the pieces — `ch03-compile-the-pieces.html`
  - 04 Form a story — `ch04-form-a-story.html`
- Create
  - 05 Set the style & structure — `ch05-set-the-style-and-structure.html`
  - 06 Say it with words — `ch06-say-it-with-words.html`
  - 07 Show data in graphs — `ch07-show-data-in-graphs.html`
  - 08 Illustrate with images — `ch08-illustrate-with-images.html`
- Deliver
  - 09 Refine through practice — `ch09-refine-through-practice.html`
  - 10 Build your confidence — `ch10-build-your-confidence.html`
  - 11 Introduce yourself — `ch11-introduce-yourself.html`
  - 12 Have a stellar session — `ch12-have-a-stellar-session.html`
- Appendix
  - A The TRIX case study, start to finish (running example plus a walk-through of the final slide deck) — `appendix-trix-deck.html`

The book's introduction is summarised on the index page; the book's index is skipped.

Each page has: the chapter's key ideas, interactive diagrams, small simulations or games, the chapter's TRIX case-study step, and a 4-5 question quick check.

## About the content
All explanations, examples, diagrams and quiz questions are original summaries written for this companion. No passages, slides or figures are copied from the book; short phrases are quoted at most. Some numbers (for example the meals-served chart in chapter 7) are invented for illustration and labelled as such; liking scores in the TRIX examples are approximate.

## Missing or unreadable content in the source PDF
- PDF page 2 (just after the cover) and PDF page 8 (the acknowledgments body) contain only a "Hang tight. This'll take just a sec." loading placeholder instead of content. The acknowledgments are therefore not summarised. No chapter content is missing.
- The appendix slide deck (PDF pages 352-372) is images only, with no text layer; the appendix page describes it from viewing the images.

## Rebuilding
`_source/` (in the project folder, not in the zip) holds `build.py`, `base.css`, `base.js` and `src/*.html`. Run `python3 _source/build.py <output-folder>` to regenerate the pages.
