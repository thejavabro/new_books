# Clean Architecture, Drawn Out

An interactive visual companion to *Clean Architecture: A Craftsman's Guide to Software Structure and Design* by Robert C. Martin (Prentice Hall, 2017), with guest chapters by James Grenning and Simon Brown.

One self-contained HTML page per chapter (small chapters combined), plus `index.html`. Each page has diagrams you can click, small simulations and games, and a quick-check quiz at the end.

## How to open

Unzip the folder and open `index.html` in any modern browser. Everything is inline (CSS and JavaScript); no server or install is needed and pages work offline. The only external request is a Google Fonts stylesheet, and pages fall back to system fonts without it. Light and dark themes follow your system setting. Pages work at phone width.

## Chapters

| Ch. | Page | Topics |
|---|---|---|
| 1–2 | [Design, Architecture and Two Values](ch01-design-and-value.html) | The goal of architecture; behavior versus structure |
| 3–4 | [Paradigms and Structured Programming](ch03-paradigms-structured.html) | Three paradigms that take things away; goto, proof and tests |
| 5 | [Object-Oriented Programming](ch05-object-oriented.html) | Encapsulation, inheritance, and the real prize: polymorphism |
| 6 | [Functional Programming](ch06-functional.html) | Immutability, segregating mutation, event sourcing |
| 7 | [SRP: The Single Responsibility Principle](ch07-srp.html) | One module, one actor |
| 8 | [OCP: The Open-Closed Principle](ch08-ocp.html) | Extend behavior without modifying code |
| 9–10 | [LSP and ISP](ch09-lsp-isp.html) | Substitutability and lean interfaces |
| 11 | [DIP: The Dependency Inversion Principle](ch11-dip.html) | Depend on abstractions; factories; the boundary curve |
| 12–13 | [Components and Component Cohesion](ch12-components-cohesion.html) | From linkers to plugins; REP, CCP and CRP |
| 14 | [Component Coupling](ch14-component-coupling.html) | ADP, SDP, SAP and the main sequence |
| 15 | [What Is Architecture?](ch15-what-is-architecture.html) | Keeping options open; details can wait |
| 16 | [Independence](ch16-independence.html) | Use cases, operation, development, deployment; decoupling modes |
| 17–18 | [Boundaries and Their Anatomy](ch17-boundaries.html) | Drawing lines; plugins; monoliths, components, threads, processes, services |
| 19–20 | [Policy, Level and Business Rules](ch19-policy-business-rules.html) | Distance from I/O; entities and use cases |
| 21–22 | [Screaming and Clean Architecture](ch21-screaming-clean.html) | Architecture that shows intent; the concentric circles |
| 23–24 | [Humble Objects and Partial Boundaries](ch23-humble-partial.html) | Presenters, gateways, mappers; cheaper boundaries |
| 25–26 | [Layers, Boundaries and Main](ch25-layers-main.html) | Hunt the Wumpus; the dirtiest component |
| 27–28 | [Services and the Test Boundary](ch27-services-tests.html) | The service fallacies; tests as the outermost circle |
| 29 | [Clean Embedded Architecture](ch29-clean-embedded.html) | Firmware, the target-hardware bottleneck, HAL and OSAL |
| 30–32 | [The Database, the Web and Frameworks Are Details](ch30-details.html) | Keep the I/O devices at arm's length |
| 33–34 | [Case Study and The Missing Chapter](ch33-case-study-missing.html) | Video sales; packaging by layer, feature, ports and component |
| A | [Architecture Archaeology](appendix-a-archaeology.html) | Fifty years of projects and the lessons they taught |

## Notes

- All explanations, code snippets and drawings are **original summaries** written for this companion. They do not reproduce the book's text or figures; short quoted phrases at most. Charts marked "illustrative" show the shape of an argument, not the book's data.
- The source PDF used to build this companion was missing Chapters 17 ("Boundaries: Drawing Lines") and 18 ("Boundary Anatomy"). The page for those chapters summarizes them from the published book's well-known arguments and says so on the page.
- Front matter and the index are skipped; Appendix A (Architecture Archaeology) has its own page.
