# Building Agentic AI Workflows — visual companion

Interactive, self-contained HTML pages (one per chapter, plus `index.html`) for
*Building Agentic AI: Workflows, Fine-Tuning, Optimization, and Deployment* by Sinan Ozdemir (Pearson, 2026).

## How to open
Open `index.html` in any modern browser. Every page is self-contained (CSS and JS inlined) and
works offline; fonts fall back to system fonts without a connection. Light and dark themes follow
your system setting, or use the "Theme" button. Pages work at phone width.

## Chapters
1. `ch01-ai-llms-agents.html` — An Introduction to AI, LLMs, and Agents
2. `ch02-llm-workflows.html` — First Steps with LLM Workflows (RAG, text-to-SQL, LangGraph)
3. `ch03-evaluation.html` — AI Evaluation Plus Experimentation
4. `ch04-agents-multi-agent.html` — First Steps with AI Agents and Multi-Agent Workloads
5. `ch05-enhancing-agents.html` — Enhancing Agents with Prompting, Workflows, and More Agents
6. `ch06-multimodal-coding.html` — Moving Beyond Natural Language: Multimodal and Coding AI
7. `ch07-reasoning-computer-use.html` — Reasoning LLMs and Computer Use
8. `ch08-fine-tuning.html` — Fine-Tuning AI for Calibrated Performance
9. `ch09-optimizing-production.html` — Optimizing AI Models for Production

Each page has the chapter's key ideas, interactive diagrams/simulations, a 5-question quick check and a one-page recap.

## Note on content
All explanations, code snippets and drawings are original summaries, not copied text or figures.
Charts marked "schematic" redraw trends the book reports; exact numbers are quoted only where the book gives them.

## Missing content in the source PDF
- The table-of-contents page (PDF page 9) contains only a loading placeholder ("Hang tight. This'll take just a sec.")
  instead of the contents. All nine chapters are present and complete.
- Some long code lines in listings are clipped at the right margin in the PDF (does not affect these summaries).

`_source/` (in the project folder only) holds `build.py`, `base.css`, `base.js` and `src/*.html`;
run `python3 build.py <outdir> all` to rebuild.
