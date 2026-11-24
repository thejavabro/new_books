# Inspired: visual companion

Interactive learning pages for *Inspired: How To Create Products Customers Love* by Marty Cagan (SVPG Press, first edition, 2008). There is one self-contained HTML page for each group of chapters, plus an index. Each page has diagrams, step-throughs, small simulations and a short quiz.

## How to open
Open `index.html` in any modern browser. Every page is self-contained: CSS and JS are inlined, and there are no external scripts. Web fonts load from Google Fonts when you're online; offline, pages fall back to system fonts. Pages support light and dark themes (with a toggle) and work on phones.

## Pages
| Page | Book chapters |
|---|---|
| ch01-intro-roles.html | Introduction; 1 Key Roles and Responsibilities |
| ch02-pm-vs-others.html | 2 PM vs. Product Marketing; 3 PM vs. Project Management; 4 PM vs. Design; 5 PM vs. Engineering |
| ch03-people-leaders.html | 6 Recruiting PMs; 7 Managing PMs; 8 Patton's Advice; 9 Deputy PMs; 10 Managing Up |
| ch04-opportunity-discovery.html | 11 Assessing Product Opportunities; 12 Product Discovery; 13 Product Principles |
| ch05-council-customers.html | 14 The Product Council; 15 Charter User Programs; 16 Market Research; 17 Personas |
| ch06-spec-validation.html | 18 Reinventing the Product Spec; 19 Design vs. Implementation; 20 Minimal Product; 21 Product Validation; 22 Prototype Testing |
| ch07-after-launch.html | 23 Improving Existing Products; 24 Gentle Deployment; 25 Rapid Response |
| ch08-process-context.html | 26 Agile; 27 Waterfall; 28 Startup PM; 29 Innovating in Large Companies; 30 Succeeding in Large Companies |
| ch09-inspiring-products.html | 31 Lessons from Apple; 32 Beware of Specials; 33 The New Old Thing; 34 Fear, Greed and Lust; 35 The Emotional Adoption Curve; 36 Usability vs. Aesthetics |
| ch10-product-types-summary.html | 37 Consumer Internet; 38 Enterprise; 39 Platforms; 40 Best Practices Summary; 41 PM Worry List; Learning More |

## Notes
- All explanations, examples, simulations and drawings are original summaries written for this companion. No passages are copied from the book. Numbers in the simulations are illustrative unless the page says they come from the book.
- The source PDF is the 2008 first edition (41 chapters). It is a scanned image PDF, so the text was extracted with OCR.
- Missing content: none. All 41 chapters and the front and back matter were present and readable. The book's references to online examples on the author's website are not part of the PDF and are not reproduced. The Dilbert cartoons on part-divider pages and the acknowledgments were skipped on purpose.
- `_source/` holds `build.py`, the shared `base.css` and `base.js`, and the page sources in `src/`. Rebuild with `python3 _source/build.py <outdir>`.
