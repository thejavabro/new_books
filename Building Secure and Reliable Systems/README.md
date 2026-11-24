# Building Secure and Reliable Systems: visual companion

An interactive, chapter-by-chapter companion to *Building Secure and Reliable Systems* (Adkins, Beyer, Blankinship, Lewandowski, Oprea, Stubblefield; O'Reilly, 2020). Each page explains one chapter with diagrams, small simulations and a short quiz.

## How to open
Open `index.html` in any modern browser. Every page is a single self-contained HTML file with relative links, so it works offline (only the web fonts need a connection). Light and dark themes are supported; it is usable on a phone.

## Chapters
- Part I: Ch 1 The Intersection of Security and Reliability; Ch 2 Understanding Adversaries
- Part II: Ch 3–4 Safe Proxies and Design Tradeoffs; Ch 5 Least Privilege; Ch 6 Understandability; Ch 7 A Changing Landscape; Ch 8 Resilience; Ch 9 Recovery; Ch 10 Mitigating Denial-of-Service Attacks
- Part III: Ch 11 Designing a Trusted CA; Ch 12 Writing Code; Ch 13 Testing Code; Ch 14 Deploying Code; Ch 15 Investigating Systems
- Part IV: Ch 16 Disaster Planning; Ch 17 Crisis Management; Ch 18 Recovery and Aftermath (missing)
- Part V: Ch 19 Chrome Security Team; Ch 20 Roles and Responsibilities (missing); Ch 21 Culture of Security and Reliability (missing)
- Closing: Conclusion and Appendix A Risk Matrix

The explanations, examples and quizzes are original summaries written for study. They are not the book's text.

## Missing chapters
The source PDF does not contain these chapters, so their pages are placeholders:
- Ch 18 Recovery and Aftermath: PDF page 484 is a "Hang tight" loading screen.
- Ch 20 Understanding Roles and Responsibilities: PDF page 496 is a "404 Not Found" page.
- Ch 21 Building a Culture of Security and Reliability: PDF page 497 is an ERR_TIMED_OUT browser error.

## Rebuild
`python3 _source/build.py <outdir>` (sources live in `_source/src`, shared CSS and JS in `_source/base.css` and `base.js`).
