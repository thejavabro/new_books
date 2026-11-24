# ChatGPT Visual Bible: visual companion

Interactive learning pages for *ChatGPT Visual Bible* by Mark J. Price (Packt, first published September 2026): one self-contained HTML page per chapter group, plus an index.

## How to open

Open `index.html` in any modern browser. Every page is a single self-contained file (CSS and JavaScript inlined) and works offline; the Google Fonts stylesheet is optional and falls back to system fonts. Pages link to each other with relative paths, so keep them in the same folder. Light and dark themes follow your system setting, and a Theme button in each header switches manually.

## What is on each page

Original explanations of the chapter's ideas, inline SVG diagrams, step-through walkthroughs, small simulations (sliders, toggles, sorting games) and a quick-check quiz. Amber "Likely changed since publication" boxes flag product details (model names, plans, limits, menu paths, new features) that the book itself describes as fast-moving and that have probably changed since mid-2026.

All explanations, example prompts, datasets and drawings are original summaries written for this companion. Nothing is copied from the book's text or screenshots; quoted phrases are at most a few words.

## Pages

| Page | Book chapters |
|---|---|
| ch00-introduction.html | Introduction |
| ch01-what-chatgpt-can-do.html | 1.1 Understand What ChatGPT Can Do · 1.2 Create Your Account and Choose a Plan |
| ch02-devices-first-conversation.html | 1.3 Use ChatGPT on the Web, Phone, and Desktop · 1.4 Have Your First Useful Conversation |
| ch03-prompts.html | 1.5 Write, Refine, and Improve Prompts Through Conversation |
| ch04-learn-and-plan.html | 1.6 Learn Something New and Educate Your Child · 1.7 Plan Everyday Life and Compare Important Choices |
| ch05-search-research-files.html | 1.8 Search and Verify Current Information · 1.9 Conduct Deeper Research with Cited Sources · 1.10 Add Documents, Images, and Data to a Chat |
| ch06-personalize-workbench.html | 1.11 Personalize and Organize with Instructions, Memory, and Projects · 1.12 Project: Build Your Personal AI Workbench |
| ch07-safety-and-modes.html | 2.1 Use ChatGPT Safely and Responsibly at Work · 2.2 Choose the Right Mode for Each Task |
| ch08-documents-summaries.html | 2.3 Draft Professional Documents · 2.4 Summarize and Extract Information |
| ch09-spreadsheets.html | 2.5 Analyze Spreadsheets and Data |
| ch10-images-presentations.html | 2.6 Create and Edit Images and Media · 2.7 Create Presentations and Visual Reports |
| ch11-plugins-briefing.html | 2.8 Add Plugins, Apps, and Skills · 2.9 Project: Produce a Useful Weekly Briefing |
| ch12-automation-scheduling.html | 3.1 Choose the Right Automation Building Block · 3.2 Schedule Recurring and Conditional Work |
| ch13-skills-gpts.html | 3.3 Turn a Procedure Into a Reusable Skill · 3.4 Build a Custom GPT |
| ch14-workflows.html | 3.5 Automate Personal Organization and Learning · 3.6 Build a Research and Content Workflow · 3.7 Build a Decision and Operations Workflow · 3.8 Project: Build and Measure an End-to-End Workflow |
| ch15-direction-audit-measure.html | 4.1 Choose What Better Work Means to You · 4.2 Audit Your Role and Find High-Value Work · 4.3 Measure and Document Your Improvement |
| ch16-skills-strengths-lead.html | 4.4 Learn the Skills Your Next Role Requires · 4.5 Combine AI Fluency with Human Strengths · 4.6 Propose and Lead an AI Improvement at Work |
| ch17-promotion-jobs-voice.html | 4.7 Build a Case for Promotion or Higher Pay · 4.8 Prepare for a Better Job or Career Change · 4.9 Rehearse High-Stakes Conversations with Voice Mode |
| ch18-portfolio-product-field.html | 4.10 Build a Portfolio and Measurable Case Study · 4.11 Turn a Problem into a Service or Product · 4.12 Decide How to Respond to AI in Your Field · 4.13 Project: Complete a 30-day Career Value Project |
| ch19-epilogue.html | Epilogue |

Front matter (copyright, author bio, "free benefits", review request) is skipped.

## Missing or incomplete content in the source PDF

- **Truncated prompt boxes.** In chapters 1.1, 1.3–1.12, 2.3–2.9, 3.2 and 3.3 (about 50 pages: pp. 35, 47, 51–58, 60–68, 70–78, 80, 85, 101, 107, 109, 111–113, 116–124, 131, 134–137, 145–149, 153–157), the book's copy-paste prompt boxes are cut off at the right-hand margin, so the prompts end mid-sentence and their full wording is not in the PDF. The affected companion pages say so in a red box; their example prompts are original rewrites.
- **Blank page.** PDF page 28 (between the Introduction and Book 1) is blank; no chapter content appears to be lost.
- **Online-only chapters.** The book refers to optional online chapters 3.9 (MCP), 3.10 (workspace agents) and 4.14 (finding customers). They are not in the PDF by design and are not covered here.

## Rebuilding

`_source/` holds `base.css`, `base.js`, `build.py` and `src/*.html`. Run `python3 _source/build.py <outdir>` to regenerate every page.
