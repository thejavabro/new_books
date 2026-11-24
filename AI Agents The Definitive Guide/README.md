# AI Agents The Definitive Guide: visual companion

An interactive, visual study companion to *AI Agents: The Definitive Guide* by Nicole Koenigstein (O'Reilly). There is one self-contained HTML page per chapter, plus an index page. Each chapter page has clickable diagrams and small simulations, a short quiz and a one-page recap. Pages work in light and dark themes and at phone width.

## How to open

Unzip the folder and open `index.html` in any modern browser. No install or server is needed. Every page has its CSS and JavaScript built in. The only external request is for Google Fonts; without a connection the pages fall back to system fonts.

## Chapters

1. [From LLMs to Agents](ch01-llms-to-agents.html) — State machines, stateful graphs and orchestrated autonomy
2. [Architectures and Patterns](ch02-architectures-patterns.html) — CoT, ToT, ReAct, human-in-the-loop, supervisor, hierarchy, swarm
3. [Advanced Planning, Reasoning and Scalable Execution](ch03-planning-reasoning.html) — RL for agents, GRPO and GSPO, RULER and ART, MCTS and AB-MCTS, rLLM
4. [Models Behind the Agents](ch04-models-behind-agents.html) — Decoders, encoders, MoE, reasoning models, KV cache, open vs closed, LoRA
5. [From Prototypes to Production](ch05-prototypes-to-production.html) — Lusser's law, Pydantic contracts, checkpoints, Instructor, MCP, deep agents
6. [Secure Execution and Tool Governance](ch06-secure-execution.html) — Rogue helpers, an A2A governor, Docker and paths, cloud sandboxes, code mode
7. [Deploying Agents in Real Products](ch07-deploying-agents.html) — Maturity model, monitoring, circuit breakers, fallback tiers, cold starts
8. [Foundational Evaluation and Observation](ch08-evaluation-foundations.html) — Stress scenarios, an eval harness, OWASP agentic Top 10, traces, observability
9. [Customized and Advanced Evaluation](ch09-advanced-benchmarks.html) — Trace-based regression suites, choosing judges, SWE-smith, trajectories
10. [Agent Memory](ch10-agent-memory.html) — Short-term, semantic, episodic, procedural memory; hygiene and topology
11. [From Compute to Cost](ch11-compute-to-cost.html) — Retry economics, KV cache, FlashAttention, cost multipliers, memoized planning
12. [Threat Modeling for AI Agents](ch12-threat-modeling.html) — Layered threat model, injection propagation, red teaming, runtime scanning

## About the content

All explanations, examples, simulations, quiz questions and code snippets are original summaries written for this companion. They are not copied from the book and nothing is quoted at length. Figures and numbers attributed to the book (for example, the scanner outcomes in Chapter 12 or the expected-call table in Chapter 11) are paraphrased and redrawn. Toy models (prices, weights, scores) are clearly labelled as illustrative.

## Missing content

- **Front matter.** In the source PDF, pages 1 and 4 to 7 are browser loading screens ("Hang tight...") or a "This site can't be reached / ERR_TIMED_OUT" error page instead of the title page, copyright page, table of contents and preface. The book was identified from the praise pages and the chapter text. The index page notes that this section is missing.
- All 12 chapters are complete. Pages 36, 120 and 252 are blank pages at the ends of chapters, and no content is lost there.
- The back-of-book index (PDF pages 413–482) was skipped on purpose because it is a reference list.

## Source

`_source/` holds `build.py`, `base.css`, `base.js` and `src/*.html` (this folder is not in the zip). To rebuild, run `cd _source && python3 build.py <outdir> all`.
