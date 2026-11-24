# Terraform Up and Running: visual companion

Interactive visual learning pages for *Terraform: Up & Running*, third edition, by Yevgeniy Brikman (O'Reilly, 2022). One self-contained HTML page per chapter, plus an index and an appendix page.

## How to open
Open `index.html` in any modern browser. Every page is self-contained (CSS and JS inlined) and works offline; the Google Fonts stylesheet is optional and falls back to system fonts. Pages link to each other by relative paths, so keep the files together in one folder. Light and dark themes follow your system setting; the "Theme" button in each header overrides it.

## Pages
- `index.html`: contents and overview
- `ch01-why-terraform.html`: Why Terraform
- `ch02-getting-started.html`: Getting Started with Terraform
- `ch03-state.html`: How to Manage Terraform State
- `ch04-modules.html`: How to Create Reusable Infrastructure with Terraform Modules
- `ch05-loops-conditionals.html`: Terraform Tips and Tricks: Loops, If-Statements, Deployment, and Gotchas
- `ch06-secrets.html`: Managing Secrets with Terraform
- `ch07-providers.html`: Working with Multiple Providers
- `ch08-production-grade.html`: Production-Grade Terraform Code
- `ch09-testing.html`: How to Test Terraform Code
- `ch10-team.html`: How to Use Terraform as a Team
- `appendix-reading.html`: Appendix A, Recommended Reading, plus a cheat sheet of every command and language feature

Each chapter page has diagrams, step-through walkthroughs, small simulations and a short quiz at the end.

## About the content
The explanations, diagrams and code snippets are original summaries and illustrations written for these pages. They are not copied from the book. Short phrases and the book's own data tables (tool comparisons, time estimates, checklists) are summarized for study purposes.

## Missing or skipped content in the source PDF
- PDF page 6 (front matter, where the table of contents would normally be) contains only a loading placeholder: "Hang tight. This'll take just a sec." No chapter content is affected. The contents list was rebuilt from the chapter headings.
- The preface, index, About the Author and colophon are not covered, because they are front and back matter.

## Rebuilding
`_source/` (in the project folder, not in the zip) holds `build.py`, `base.css`, `base.js` and `src/*.html`. Run `python3 _source/build.py <output-dir> all`.
