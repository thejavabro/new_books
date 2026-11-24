# AI Engineering Interviews, Drawn Out

An interactive visual companion to *AI Engineering Interviews: Over 350 AI Interview Questions and Answers* by Mina Ghashami and Ali Torkamani (O'Reilly, 2026).

There is one self-contained HTML page per chapter (14 in all), plus `index.html`. Each page explains the chapter's key ideas with inline SVG diagrams, step-through walkthroughs, sliders and small simulations. It then has an **Interview drill** with a representative set of the chapter's questions (116 across the book) and short model answers, a 5-question quick check, and a one-page recap.

## How to open

Open `index.html` in any modern browser. The pages need no server and no internet connection: if Google Fonts cannot load, the pages fall back to system fonts. Light and dark themes follow your system setting, and the "Theme" button in each header switches between them. The layout works at phone width.

## Chapters

**Part I. Practical AI Engineering**
1. Hello AI Engineering! (`ch01-hello-ai-engineering.html`)
2. Pretrained Models (`ch02-pretrained-models.html`)
3. Prompt Engineering (`ch03-prompt-engineering.html`)
4. RAG and Agents (`ch04-rag-and-agents.html`)
5. Evaluation (`ch05-evaluation.html`)

**Part II. Foundations of Modern Generative AI**
6. Machine Learning Foundations (`ch06-ml-foundations.html`)
7. Transformer Architecture (`ch07-transformer-architecture.html`)
8. Data Preparation (`ch08-data-preparation.html`)
9. Training of Generative AI (`ch09-training.html`)
10. Fine-Tuning (`ch10-fine-tuning.html`)
11. Alignment (`ch11-alignment.html`)
12. Reasoning Models (`ch12-reasoning-models.html`)
13. LLM Inference (`ch13-llm-inference.html`)
14. Long Context Modeling (`ch14-long-context.html`)

## About the content

All explanations, model answers, code snippets and drawings are original summaries written for this companion. No passages are copied from the book. The book has far more questions than appear here, so each page samples a representative set. Numbers in the simulations are illustrative unless a page says otherwise. The few published figures used (for example GPT-3's data mixture, Mixtral or DeepSeek parameter counts, and Chinchilla's ratio) are public facts.

## Missing content

None found. All 14 chapters in the PDF (509 pages) are complete. A few PDF pages are blank chapter separators or full-page figures with no extractable text (for example pp. 43, 71, 327, 469). These are not missing content.

## Rebuilding

`_source/` holds `build.py`, the shared `base.css` and `base.js`, and one source file per page in `src/`. Run `python3 _source/build.py <outdir>` to regenerate self-contained pages.
