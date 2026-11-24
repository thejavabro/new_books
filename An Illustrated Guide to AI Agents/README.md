# AI Agents, Drawn Out

An interactive visual companion to *An Illustrated Guide to AI Agents: Concepts and Code for Building Agents with LLMs, Tools, and Memory* by Maarten Grootendorst and Jay Alammar (O'Reilly, 2026).

One self-contained HTML page per chapter: clickable diagrams, step-through walkthroughs, small simulations (sliders, toggles, mini games), short code sketches and a 5-question quick check at the end of each page. Light and dark themes (follows your system, with a toggle), works on phones.

## How to open

Open `index.html` in any modern browser. No server or install needed; everything works offline. Pages load a Google Fonts stylesheet when online and fall back to system fonts otherwise.

## Chapters

**Part I: The anatomy of an AI agent**

1. `ch01-introduction.html`: What is an AI agent? The anatomy figure, autonomy, harnesses, TinyAgent skeleton
2. `ch02-large-language-models.html`: Tokens, chat format, training (SFT, RLHF, RLVR, GRPO), Transformer internals, KV cache, attention variants, mixture of experts
3. `ch03-reasoning-llms.html`: Test-time compute, verifiers (ORM/PRM), self-consistency, Best-of-N, s1, DeepSeek-R1, efficient and latent reasoning
4. `ch04-memory.html`: Memory types, context window strategies, RAG, MemoryBank, agentic RAG, context engineering, MMR, lost in the middle
5. `ch05-tools-and-protocols.html`: Tool lifecycle, definitions, selection, parsing, Toolformer, ToolRL, Search-R1, MCP, Skills
6. `ch06-planning-and-reflection.html`: Task decomposition, Tree of Thoughts, least-to-most, ReAct, FireAct/ETO, Self-Refine, Reflexion, TTRL, R-Zero
7. `ch07-evaluating-agents.html`: Benchmarks, reading scores critically, LLM judges and rubrics, trajectory evaluation, pass@k vs pass^k, safety

**Part II: Specialized agents**

8. `ch08-multi-agent-systems.html`: Patterns, subagents as tools, CAMEL, MetaGPT, A2A, Generative Agents, AI co-scientist, Agent Laboratory
9. `ch09-multi-modal.html`: Encoders (ViT, CLIP, wav2vec 2.0, Whisper, CLAP), video (ViViT, TimeSformer), ImageBind, connectors (projection, Q-Former, Flamingo)
10. `ch10-code-agents.html`: Who code agents serve, code tools, cache-aware context, repo maps, Agentless, building code LLMs, plus the book's afterword

## Notes

- All explanations are original summaries written for this companion. No passages or figures are copied from the book; diagrams are redrawn ideas, code snippets are short illustrative sketches (the book's runnable code is in its GitHub repository), and numbers in simulations are illustrative unless stated as facts from the book.
- Skipped: front matter (praise, copyright, preface), and the index. The one-page afterword is summarised at the end of the Chapter 10 page.
- Missing content: none found. All 10 chapters and the afterword in the source PDF (519 pages) were present and readable; no blank, placeholder or error pages were found.
- `_source/` (in the project folder only) holds `build.py`, the shared `base.css` / `base.js` and the per-chapter sources. Run `python3 _source/build.py .` from this folder to rebuild the pages.
