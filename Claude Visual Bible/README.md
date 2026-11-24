# Claude Visual Bible: visual companion

An interactive, offline study companion for *Claude Visual Bible* (four books, forty chapters, plus introduction and epilogue). Each page explains the ideas of one or more chapters with original diagrams, step-throughs, simulators, small exercises, a "Try it" checklist and a short quiz.

## How to open it

Open `index.html` in any modern browser (double-click it). Everything is self-contained: no install, no server, no network needed (a Google Fonts stylesheet is used when online, with a system-font fallback). Pages link to each other with relative paths, so keep the files together in one folder. Each page has a light/dark theme toggle and works at phone width.

## Chapters

25 pages. Short related chapters are combined on one page.

| Page | Part | Book chapters | Title |
|---|---|---|---|
| [ch00-introduction.html](ch00-introduction.html) | Introduction | – | How This Volume Works |
| [ch01-what-claude-can-do.html](ch01-what-claude-can-do.html) | Book 1 | 1.1–1.2 | What Claude Can Do, and Which Plan You Need |
| [ch02-apps-first-conversation.html](ch02-apps-first-conversation.html) | Book 1 | 1.3–1.4 | Web, Phone, Desktop and Your First Useful Conversation |
| [ch03-prompts-through-conversation.html](ch03-prompts-through-conversation.html) | Book 1 | 1.5 | Write, Refine and Improve Prompts |
| [ch04-learn-and-plan.html](ch04-learn-and-plan.html) | Book 1 | 1.6–1.7 | Learn Something New and Plan Everyday Life |
| [ch05-search-and-research.html](ch05-search-and-research.html) | Book 1 | 1.8–1.9 | Search, Verify and Research with Sources |
| [ch06-files-memory-projects.html](ch06-files-memory-projects.html) | Book 1 | 1.10–1.12 | Files, Memory, Projects and Your AI Workbench |
| [ch07-safety-and-modes.html](ch07-safety-and-modes.html) | Book 2 | 2.1–2.2 | Work Safely and Choose the Right Mode |
| [ch08-documents-and-summaries.html](ch08-documents-and-summaries.html) | Book 2 | 2.3–2.4 | Draft Documents, Summarize and Extract |
| [ch09-spreadsheets-and-data.html](ch09-spreadsheets-and-data.html) | Book 2 | 2.5 | Analyze Spreadsheets and Data |
| [ch10-visuals-and-presentations.html](ch10-visuals-and-presentations.html) | Book 2 | 2.6–2.7 | Visual, Interactive Content and Presentations |
| [ch11-plugins-connectors-skills.html](ch11-plugins-connectors-skills.html) | Book 2 | 2.8 | Plugins, Connectors and Skills |
| [ch12-weekly-briefing-project.html](ch12-weekly-briefing-project.html) | Book 2 | 2.9 | Project: A Useful Weekly Briefing |
| [ch13-blocks-and-schedules.html](ch13-blocks-and-schedules.html) | Book 3 | 3.1–3.2 | Automation Building Blocks and Scheduled Work |
| [ch14-procedure-to-skill.html](ch14-procedure-to-skill.html) | Book 3 | 3.3 | Turn a Procedure into a Reusable Skill |
| [ch15-skill-library.html](ch15-skill-library.html) | Book 3 | 3.4 | Build a Library of Skills for Real Work |
| [ch16-mcp-connections.html](ch16-mcp-connections.html) | Book 3 | 3.5 | Connect Trusted Information and Tools with MCP |
| [ch17-computer-use.html](ch17-computer-use.html) | Book 3 | 3.6 | Control Software with Computer Use |
| [ch18-personal-workflows.html](ch18-personal-workflows.html) | Book 3 | 3.7–3.8 | Personal Workflows and an End-to-End Project |
| [ch19-better-work.html](ch19-better-work.html) | Book 4 | 4.1–4.3 | Choose, Audit and Measure Better Work |
| [ch20-skills-and-strengths.html](ch20-skills-and-strengths.html) | Book 4 | 4.4–4.5 | Learn New Skills and Combine AI with Human Strengths |
| [ch21-lead-and-promotion.html](ch21-lead-and-promotion.html) | Book 4 | 4.6–4.7 | Lead an AI Improvement and Build a Promotion Case |
| [ch22-career-portfolio.html](ch22-career-portfolio.html) | Book 4 | 4.8–4.9 | Career Change and a Portfolio Case Study |
| [ch23-service-and-30-days.html](ch23-service-and-30-days.html) | Book 4 | 4.10–4.11 | Turn a Problem into a Service, and a 30-Day Project |
| [ch24-epilogue.html](ch24-epilogue.html) | Epilogue | Epilogue | Epilogue: Beyond One AI |

## Where the product has likely changed

Every page ends with a **Likely changed since publication** section. It flags features, model names, prices, beta programs, menus and external links that were moving fast when the book was written (many of which the book itself warns about), rated "very likely changed", "may have changed" or "stable idea". Check Anthropic's current help pages before relying on any specific menu, plan or limit.

## Completeness

All chapters of the book were covered; nothing was skipped or missing from the source. The book's final page is a publisher request for reviews and has no content to summarise.

## About the content

The explanations are original summaries written for this companion, in my own words; they are not excerpts from the book. All examples, code-like snippets, figures, diagrams and interactive elements are original. Numbers marked "illustrative" are invented teaching examples. Anything saved on a page (checklists, drafts) stays only in your own browser.

## Source

`_source/` holds the build: `build.py` assembles each page from `src/*.html`, inlining `base.css` and `base.js`. Rebuild with `python3 _source/build.py <outdir> all`.
