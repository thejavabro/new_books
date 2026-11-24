# Think Like a Software Engineering Manager: visual companion

This is a set of self-contained, interactive HTML pages, one for each chapter of *Think Like a Software Engineering Manager* by Akanksha Gupta (Manning, 2024). Each page includes:

- the key ideas, explained in plain language
- original SVG diagrams
- small interactive tools (simulators, sorters, checklists and calculators)
- a short quiz

## How to open

Open `index.html` in any modern browser; it links to every chapter. The pages work offline with no installation.

- **Fonts:** Google Fonts loads when you are online. Offline, the pages fall back to system fonts.
- **Theme:** the pages follow your system's light or dark setting. Use the toggle button to switch manually.
- **Saved answers:** some tools remember your inputs in your browser's localStorage. Nothing is sent anywhere.

## Chapters

**Part 1: Start with the people**

1. Exploring the Engineering Manager Role: `ch01-the-em-role.html`
2. Individual Contributor to Engineering Manager: `ch02-ic-to-em.html`
3. Managing People, Teams, and Yourself: `ch03-people-teams-yourself.html`
4. Managing Performance: `ch04-performance.html`
5. Delegation: Learn to Let Go: `ch05-delegation.html`
6. Rewards and Recognition: `ch06-recognition.html`
7. Hiring: `ch07-hiring.html`
8. Handling Attrition: `ch08-attrition.html`

**Part 2: Projects and the cross-functional world**

9. Working with Cross-Functional Partners: `ch09-cross-functional.html`
10. Project Management, Execution, and Delivery: `ch10-project-delivery.html`
11. Managing Expectations: `ch11-expectations.html`

**Part 3: Learn the process**

12. Engineering and Operational Excellence: `ch12-excellence.html`
13. Organizational Change Management: `ch13-org-change.html`
14. Time Management: `ch14-time.html`
15. Beyond This Book: Grow Yourself: `ch15-grow-yourself.html`

## About the content

All explanations, scenarios, diagrams and quizzes are original summaries written for study. None of the book's text is reproduced, and these pages do not replace the book. Some numbers in the simulators are illustrative toy models, and each page labels them as such.

## Missing content

None. All 15 chapters were present in the source PDF and are fully covered here.

One minor note: page 1 of the PDF (the cover) shows only a loading placeholder ("Hang tight. This'll take just a sec."). It is not part of any chapter, so nothing is lost.

## Rebuilding

The `_source/` folder contains the build files:

- `build.py`: the build script
- `base.css` and `base.js`: shared styles and scripts
- `src/`: one source file per page

To rebuild, run `python3 build.py <outdir>` from inside `_source/`.
