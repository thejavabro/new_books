# The Engineering Executive Primer — visual companion

Interactive, illustrated learning pages for *The Engineering Executive's Primer: Impactful Technical Leadership* by Will Larson (O'Reilly, 2024): one self-contained HTML page per chapter (24 chapters) plus two pages covering Appendices B–C and D–E, and an index.

## How to open

Open `index.html` in any browser. Every page works offline (fonts fall back to system fonts) and links to the others by relative path, so keep all the files together in one folder. Each page has a table of contents, previous/next links, a light/dark theme toggle, and a short quiz at the end. Pages work on phones.

## Chapters

- Ch 1: [Getting the Job](ch01-getting-the-job.html) — Why you want it, finding roles, interviews, negotiating, deciding
- Ch 2: [Your First 90 Days](ch02-first-90-days.html) — Learn, build trust, find the hidden fires, write it down
- Ch 3: [Writing Your Engineering Strategy](ch03-engineering-strategy.html) — Diagnosis, guiding policies, operational mechanisms
- Ch 4: [How to Plan](ch04-how-to-plan.html) — Financial plans, headcount, investment mix and the annual cycle
- Ch 5: [Creating Useful Organizational Values](ch05-organizational-values.html) — Reversible, applicable, honest; rolling values out
- Ch 6: [Measuring Engineering Organizations](ch06-measuring-engineering.html) — Measure to plan, operate, optimize and inspire
- Ch 7: [Participating in Mergers and Acquisitions](ch07-mergers-acquisitions.html) — Why companies buy, due diligence, integration
- Ch 8: [Developing Leadership Styles](ch08-leadership-styles.html) — Policy, consensus and conviction
- Ch 9: [Managing Your Priorities and Energy](ch09-priorities-energy.html) — Company, team, self; energy is positive-sum
- Ch 10: [Meetings for an Effective Engineering Organization](ch10-meetings.html) — Six essential meetings and how to scale them
- Ch 11: [Internal Communications](ch11-internal-communications.html) — Weekly notes, testing drafts, every channel
- Ch 12: [Building Personal and Organizational Prestige](ch12-prestige.html) — Why prestige matters, and how to build it deliberately
- Ch 13: [Working with Your CEO, Peers, and Engineering](ch13-ceo-peers-team.html) — Supported or resented; bridging narratives; conflict
- Ch 14: [Gelling Your Engineering Leadership Team](ch14-gelling-team.html) — From a group of managers to a team
- Ch 15: [Building Your Network](ch15-building-network.html) — Who to know and how to keep the network alive
- Ch 16: [Onboarding Peer Executives](ch16-onboarding-peers.html) — Mental frameworks, explicit roles, executive assistants
- Ch 17: [Inspected Trust](ch17-inspected-trust.html) — Trust plus the tools to check it
- Ch 18: [Calibrating Your Standards](ch18-calibrating-standards.html) — High standards as a socially acceptable vice
- Ch 19: [How to Run Engineering Processes](ch19-engineering-processes.html) — Five patterns for running processes, and their budgets
- Ch 20: [Hiring](ch20-hiring.html) — Process, budgets, leveling, executives and trade-offs
- Ch 21: [Engineering Onboarding](ch21-onboarding.html) — Roles, a small curriculum, and staying sustainable
- Ch 22: [Performance and Compensation](ch22-performance-compensation.html) — Rubrics, calibration, demotions and compa-ratios
- Ch 23: [Using Cultural Survey Data](ch23-cultural-surveys.html) — A ten-step review and an eight-step action plan
- Ch 24: [Leaving the Job](ch24-leaving-the-job.html) — Succession, deciding, telling the CEO, letting go
- Appendix B–C: [Interviewing Executives and Reading a P&L](appendix-bc-interviewing-pnl.html) — Running executive searches; anatomy of a P&L
- Appendix D–E: [Engineering Hubs and Magnitudes of Exploration](appendix-de-hubs-exploration.html) — Hub offices; standardize, explore 10x, limit WIP

## Notes

- Explanations are original summaries written for these pages, with only short quotes from the book. Diagrams, simulations and calculators are new drawings; values marked "illustrative" (and the made-up P&L in Appendix C) are not from the book.
- Appendix A (a list of further reading and resources) is not reproduced. The book's figures for Appendix C (HashiCorp S-1/10-K tables) are not reproduced; only growth rates stated in the text are charted.
- Missing content: none. All 24 chapters and Appendices A–E were present and readable in the source PDF.

`_source/` holds the shared CSS/JS, page list (`pages.py`), chapter sources (`src/`) and `build.py` (`python3 build.py out`) for regenerating the pages.
