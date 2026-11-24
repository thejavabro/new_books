# The Book of Debugging — visual companion

Interactive, illustrated learning pages for *The Book of Debugging* (Johannes Kuhlmann, No Starch Press). The book has no numbered chapters; it walks through a four-step workflow (Reproduce, Probe, Examine, Fix) and 30 numbered strategies. This companion groups them into 16 pages plus an index.

## How to open

Open `index.html` in any browser. Every page is self-contained and works offline (the Google Fonts stylesheet is optional; system fonts are used without it). Pages link to each other by relative path, so keep all files together in one folder.

- Light and dark themes (follows your system; toggle in the top-right corner), phone friendly
- Diagrams, step-throughs, simulations, small games and a 5-question quiz on every page
- Only small per-browser conveniences (theme choice) are stored, in your browser

## Pages

1. `ch01-the-workflow.html` (Introduction): The Workflow, root causes
2. `ch02-reproduce-yourself.html` (Part I Reproduce, strategy 1): Bug Reports and Reproducing the Bug Yourself
3. `ch03-shorten-feedback-loop.html` (Part I, strategy 2): Shorten the Feedback Loop
4. `ch04-automate-reproduction.html` (Part I, strategy 3): Automate the Reproduction
5. `ch05-shortcuts-and-search.html` (Part II Probe, strategies 4–5): Try Shortcuts and Search the Internet
6. `ch06-history-and-debugger.html` (Part II, strategies 6–7): Check Version Histories and Attach the Debugger
7. `ch07-instrument-and-determinism.html` (Part II, strategies 8–9): Instrument the Program and Remove Randomness
8. `ch08-colleagues-search-dumps.html` (Part II, strategies 10–12): Ask Colleagues, Search All Files, Collect Crash Dumps
9. `ch09-step-through-code.html` (Part III Examine, strategy 13): Step Through the Code
10. `ch10-read-code-follow-data.html` (Part III, strategies 14–15): Read the Code and Follow the Data
11. `ch11-question-experiment-log.html` (Part III, strategies 16–18): Question Everything, Experiment, Keep a Log
12. `ch12-tools-and-minimal-repros.html` (Part III, strategies 19–20): Build Your Own Tools and a Minimal Repro
13. `ch13-printf-tools-talk.html` (Part III, strategies 21–23): Debug with printf, Use Off-the-Shelf Tools, Talk It Through
14. `ch14-just-fix-it.html` (Part IV Fix, strategies 24–26): Just Fix It, Share What You Learned, Search for Related Problems
15. `ch15-fix-early-quick-fix.html` (Part IV, strategies 27–28): Fix Early and Deploy a Quick Fix
16. `ch16-start-over-creative.html` (Part IV, strategies 29–30 and Conclusion): Start Over, Find a Creative Solution

## Note on content

All explanations are original summaries written for this companion, not text from the book; quotes are kept to a few words and code samples are new. Anecdotes from the book are retold briefly in our own words. Numbers in simulations and charts are illustrative unless stated otherwise. Front matter, acknowledgments and the book's index are not covered.

`_source/` holds the shared `base.css`/`base.js`, the page sources in `src/` and `build.py` (`python3 build.py <outdir> [slugs]`) for regenerating the pages.
