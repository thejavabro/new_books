# AI Engineering: visual companion

A set of interactive, self-contained HTML pages that walk through *AI Engineering: Building Applications with Foundation Models* by Chip Huyen (O'Reilly, 2025), chapter by chapter. Each page explains the chapter's ideas in plain language and includes original diagrams, steppers, calculators, small simulations, a short quiz and a one-screen recap.

## How to open

Open `index.html` in any modern browser. No server or install is needed: every page works offline from the local folder. (Only Google Fonts loads from the web, and the pages fall back to system fonts without it.) Pages link to each other with relative paths, so keep the files together in one folder. A theme button in each header cycles through auto, light and dark.

## Chapters

| Page | Chapter |
|---|---|
| `ch01-introduction.html` | 1. Introduction to Building AI Applications with Foundation Models |
| `ch02-foundation-models.html` | 2. Understanding Foundation Models |
| `ch03-evaluation-methodology.html` | 3. Evaluation Methodology |
| `ch04-evaluate-ai-systems.html` | 4. Evaluate AI Systems |
| `ch05-prompt-engineering.html` | 5. Prompt Engineering |
| `ch06-rag.html` | 6A. RAG and Agents, part A: RAG (retrieval-augmented generation) |
| `ch06b-agents.html` | 6B. RAG and Agents, part B: Agents (tools, planning and memory) |
| `ch07-finetuning.html` | 7. Finetuning |
| `ch08-dataset-engineering.html` | 8. Dataset Engineering |
| `ch09-inference-optimization.html` | 9. Inference Optimization |
| `ch10-architecture-feedback.html` | 10. AI Engineering Architecture and User Feedback (with the Epilogue) |

The preface, index and other back matter are not covered.

## About the content

All explanations are **original summaries**, written fresh rather than copied from the book. Quotes are short and few. Code snippets, worked examples and diagrams are original. Charts that redraw figures or tables from the book are labelled with their source, and any number marked "illustrative" comes from a toy model, not from the book. To learn the material properly, read the book; these pages are a study aid.

## Missing or odd source content

- No chapters are missing from the source PDF.
- The Epilogue (PDF page 558) starts with a stray placeholder line, "This is some text.", before the real text. The rest of the Epilogue is present and is summarised at the end of the Chapter 10 page.

## Rebuilding

The sources are in `_source/`. `build.py` inlines `base.css` and `base.js` into every page in `src/`. Run `python3 build.py <output-dir> all` from inside `_source/`.
