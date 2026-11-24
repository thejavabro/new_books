# Multi-Agent AI, Drawn Out: a visual companion to *Multi-Agent AI Engineering*

An interactive companion to *Multi-Agent AI Engineering* by Dr. Xiao Ma and Dr. Chi Wang (Packt, 2026). Each chapter has its own self-contained HTML page with clickable diagrams, small simulations, step-throughs, a short quiz and a recap.

## How to open it

Open `index.html` in any modern browser. Each page links to the others with relative paths. The pages work offline: everything is inline, and only the Google Fonts stylesheet is loaded from outside, with a fallback to system fonts. Each page has a light/dark theme toggle and is laid out for phone and desktop widths.

## Chapters

**Part 1: Foundations**
- 01 · Introduction to Multi-Agent Systems: `ch01-introduction.html`
- 02 · Principles of Multi-Agent Systems: `ch02-principles.html`
- 03 · Frameworks and Mental Models: `ch03-frameworks.html`
- 04 · Constructing Your First Agents: `ch04-first-agents.html` (**missing from the source PDF**, see below)

**Part 2: Building Multi-Agent Systems**
- 05 · Agent Communication: `ch05-communication.html`
- 06 · Design Patterns for Multi-Agent Collaboration: `ch06-patterns.html`
- 07 · Context and Memory Management: `ch07-memory.html`
- 08 · Orchestrating Agent Teams: `ch08-orchestration.html`
- 09 · Unified Abstractions and Protocols for Agent Collaboration: `ch09-protocols.html`
- 10 · Comparative Survey of Frameworks: `ch10-framework-survey.html`

**Part 3: Evaluating, Observing, Evolving, and Securing**
- 11 · Evaluating the Performance and Behaviors of Multi-Agent Systems: `ch11-evaluation.html`
- 12 · Observability for Agentic AI: `ch12-observability.html`
- 13 · Self-Evolving Multi-Agent Systems: `ch13-self-evolving.html`
- 14 · Security and Privacy for Multi-Agent Systems: `ch14-security.html`
- 15 · Deploying and Scaling Multi-Agent Systems: `ch15-deploying.html`

**Part 4: Practice and Outlook**
- 16 · Case Studies from Real-World Applications: `ch16-case-studies.html`
- 17 · Emerging Research and Industry Trends: `ch17-trends.html`
- 18 · Conclusions and Future Outlook: `ch18-conclusions.html`

## About the content

All explanations are original summaries written for this companion, not text from the book. Quotes are kept short. Code snippets are my own illustrative sketches, not the book's listings. Numbers in simulations are illustrative unless a page says a figure comes from the book.

## Missing content

- **Chapter 4, "Constructing Your First Agents"** is absent from the supplied PDF. PDF page 144 contains only a "Hang tight. This'll take just a sec." loading placeholder where the chapter should be. Its page here shows the outline from the book's table of contents, cross-references to related chapters and some clearly labelled general background. It does not summarise the missing text.
- **Preface**: PDF pages 13–14 are a loading placeholder and a browser error page ("This site can't be reached… ERR_TIMED_OUT"), so the preface could not be read.

Blank PDF pages 47, 398, 747, 795 and 960 are chapter and part separators, not missing content.

## Source

`_source/` holds the build inputs: `base.css`, `base.js`, `build.py`, `pages.py` and the per-chapter sources in `src/`. To rebuild the pages, run `python3 build.py <out-dir> all` from inside `_source/`.
