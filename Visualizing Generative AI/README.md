# Visualizing Generative AI: visual companion

This is a small offline website that works through *Visualizing Generative AI* by Priyanka Vergadia and Valliappa Lakshmanan (O'Reilly, 2025), chapter by chapter. Every page has interactive drawings, step-throughs and small simulations, followed by a short quiz.

## How to open it

Unzip the folder and open `index.html` in any modern browser. You don't need a server or an internet connection: each page is a single self-contained HTML file. If you're online, a Google Fonts stylesheet is used; offline, the pages fall back to system fonts. A button in the header switches between light and dark themes. The pages also work at phone width.

## Pages

The book's six chapters are split across 14 pages:

| Page | Title | Covers |
|---|---|---|
| 1a | [What Generative AI Is](ch01a-what-is-genai.html) | The AI frontier, the GenAI ecosystem and how machine learning learns |
| 1b | [How GenAI Paints, Writes and Sings](ch01b-how-genai-works.html) | Diffusion, next-token prediction, attention, audio and video |
| 1c | [From Transformers to ChatGPT](ch01c-transformers-to-chatgpt.html) | Six years of improvements, and the challenges that remain |
| 2a | [Great First Drafts and Better Prompts](ch02a-prompting.html) | Consumer uses, failure modes, and how to structure a prompt |
| 2b | [Building Products with GenAI](ch02b-building-with-genai.html) | APIs, sampling knobs, fine-tuning, prompt engineering and app architecture |
| 3a | [Use Cases: Customer Support and Code](ch03a-support-and-code.html) | Call deflection, agent assist, coding assistants and AI code review |
| 3b | [Use Cases: Knowledge, Data and Marketing](ch03b-knowledge-data-marketing.html) | Enterprise search, natural-language analytics and personalized content |
| 4a | [Why and How to Build Agents](ch04a-agentic-systems.html) | Breaking down tasks, copilots, a weather agent, AutoGen vs. LangGraph |
| 4b | [RAG Agents](ch04b-rag-agents.html) | Embeddings, indexing, retrieval, and tricks that make RAG better |
| 4c | [SQL Agents, Agent Patterns and Protocols](ch04c-sql-and-architectures.html) | Text-to-SQL, reflection, tool use, planning, multi-agent, MCP and A2A |
| 5a | [Choosing Models and Architectures](ch05a-architecting.html) | Picking a foundational model; eight patterns on a creativity-risk map |
| 5b | [Fine-Tuning a Model](ch05b-fine-tuning.html) | Adapter tuning, distillation step by step, and preference tuning |
| 6a | [Responsible GenAI](ch06a-responsible-genai.html) | Principles, value alignment, human-AI ethics and societal impact |
| 6b | [LLMOps, Evaluation and Guardrails](ch06b-llmops.html) | Experiment tracking, repeatable evaluation, risk mapping, watermarks, rails and governance |

## About the content

- **Everything here is an original summary.** The explanations, examples, code snippets, quizzes and drawings were all written fresh for this companion. Nothing is quoted at length from the book, and none of the book's illustrations are reproduced. Figures from the book (benchmark scores, prices, study results) are quoted as short facts and marked as 2024–25 snapshots. They will have changed since.
- **How it was made.** The source PDF is mostly illustrations, but its text layer extracted cleanly. So the summaries are based on the full chapter text together with general knowledge of the field. Where a page adds material that is not in the book, it says so: for example, the LoRA matrix arithmetic, the toy watermark scheme, the Jevons demand model and the transcription-error simulation.
- **Corrections.** In a few places a page gently corrects or softens something in the book. One example is the book's sentence calling GPT-style models "encoder-only"; they are decoder-style.
- **Not covered.** The front matter (preface, table of contents) and the back index.
- **Missing content.** None. All six chapters are present in the PDF and covered here. The few blank pages in the PDF are ordinary section breaks.

## Source

`_source/` holds `build.py`, `base.css`, `base.js` and `src/`, which contains one fragment per page. Run `python3 build.py <outdir> all` to rebuild every page.
