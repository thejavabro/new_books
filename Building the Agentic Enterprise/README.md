# Building the Agentic Enterprise: visual companion

An interactive, chapter-by-chapter study companion to *Building the Agentic Enterprise* by Jaroslav Pantsjoha (Packt, 2026). There is one self-contained HTML page per chapter. Each page has original diagrams, small simulations and a short quiz.

## How to open

Unzip the folder and open `index.html` in any modern browser. It works offline. The only network request is an optional Google Fonts stylesheet; without it the pages fall back to system fonts. Each page has a light/dark/auto theme toggle and works at phone width.

## Chapters

- [Why Agentic Systems Fail to Go Live](ch01-why-agentic-systems-fail.html)
- [The Agentic AI Foundation](ch02-agentic-ai-foundation.html)
- [Single-Agent and Multi-Agent Systems](ch03-single-and-multi-agent.html)
- [Core Architectural Patterns for Agentic Systems](ch04-core-architectural-patterns.html)
- [Multi-Agent Orchestration](ch05-multi-agent-orchestration.html)
- [Context, Memory, and Knowledge](ch06-context-memory-knowledge.html)
- [Security, Identity, and Guardrails](ch07-security-identity-guardrails.html)
- [Building and Deploying Agentic Workflows](ch08-building-deploying-workflows.html)
- [State, Memory, and Decision Persistence](ch09-state-memory-persistence.html)
- [AgentOps and EvalOps](ch10-agentops-evalops.html)
- [Platform Engineering for Agentic Systems](ch11-platform-engineering.html)
- [Operating Models and Business Transformation](ch12-operating-models.html)
- [The MREP Reference Architecture](ch13-mrep-reference-architecture.html)

## About the content

All explanations are original summaries and paraphrases written for this companion. They are not the book's text. Quotations are limited to short phrases. Every diagram, interactive and code snippet is original. Numbers in the interactive simulations are illustrative unless they are attributed to the book. Read the book for the full argument, its sources and its figures.

## Missing or skipped content

- Front matter: PDF page 1, where the cover should be, shows only a loading placeholder ("Hang tight. This'll take just a sec."). This does not affect any chapter.
- No chapter content was found missing. Blank PDF pages (31, 40, 205, 391, 549, 624, 799) are chapter separators, and page 342 is a figure-only page.
- Chapter 14, "Unlock Your Exclusive Benefits" (PDF pp. 748–798), is publisher promotional material with no technical content. It was intentionally skipped.

## Source

`_source/` holds `build.py`, the shared `base.css` and `base.js`, and the per-chapter sources in `src/`. Rebuild with `cd _source && python3 build.py ..`.
