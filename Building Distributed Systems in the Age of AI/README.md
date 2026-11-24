# Building Distributed Systems in the Age of AI — visual companion

A set of self-contained, interactive HTML pages, one per chapter, that explain the ideas in *Building Distributed Systems in the Age of AI* by Max Hopei (Apress, 2026). Each page uses diagrams, steppers, small simulations and a short quiz at the end.

## How to open

Unzip the folder and open `index.html` in any modern browser. Everything works offline: pages link to each other with relative paths and need no server. The only external request is an optional Google Fonts stylesheet, and the pages fall back to system fonts without it. Light and dark themes follow your system setting.

## Chapters

Part I
1. `ch01-setting-the-focus.html` — Setting the Focus on the Right Things
2. `ch02-revising-microservices.html` — Revising Microservice Architecture
3. `ch03-message-driven.html` — Message-Driven Architecture (**missing from the source PDF**; see below)
4. `ch04-streaming.html` — Streaming Architecture
5. `ch05-agentic.html` — Agentic Architecture
6. `ch06-real-world-example.html` — Real-World System Example
7. `ch07-observability.html` — Observability in Unpredictable Systems
8. `ch08-systems-powered-by-ai.html` — Systems Powered by AI

Part II
9. `ch09-using-ai-to-build.html` — Using AI to Build Systems
10. `ch10-code-for-ai.html` — From Code for People to Code for AI
11. `ch11-programming-language-for-ai.html` — Programming Language for AI
12. `ch12-full-stack-team.html` — A Full-Stack Team for Distributed Systems

Part III
13. `ch13-approachable.html` — Making Systems Approachable
14. `ch14-privacy.html` — Growing Privacy Pressure
15. `ch15-expectations.html` — Changing and Increasing Expectations

## About the content

All explanations are original summaries written for this companion. They are not the book's text, and quotations are limited to a few short phrases. Interactive figures and numbers are illustrative unless stated otherwise. Read the book for the author's full argument.

## Missing or damaged content in the source PDF

- **Chapter 3, Message-Driven Architecture:** the entire chapter is absent. PDF page 78 shows only a "Hang tight" loading placeholder where roughly 28 printed pages should be. The chapter page here is a clearly marked notice with an outline inferred from the book's index and from references in other chapters. It contains no summary of the chapter's actual text.
- **Front matter:**
  - PDF pages 5–6 show a "site can't be reached" browser error.
  - PDF pages 8 and 20 show loading placeholders.
  - PDF page 17 shows "404 Not Found".
  - PDF page 19 is blank.
  - These appear to be preface or about pages. They have no chapter page of their own.
- The back-of-book index (PDF pp. 393–409) was not turned into a page.

## Source

`_source/` holds `build.py`, the shared `base.css` and `base.js`, and the per-chapter sources in `src/`. Run `python3 build.py <outdir>` to regenerate the pages.
