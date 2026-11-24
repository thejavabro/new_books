# Mastering the TOGAF Standard: visual companion

These are interactive, illustrated learning pages for *Mastering the TOGAF® Standard* by Eric Jager (Apress, 2025). There is one self-contained HTML page per chapter or chapter group, plus an index. Chapter 12, the ADM, is split across five pages.

Open `index.html` in any browser. Every page works offline (fonts fall back to system fonts). The pages link to each other by relative path, so keep the files together in one folder.

- 20 pages plus an index. Light and dark themes with a toggle in the header. Phone-friendly.
- Clickable ADM wheels, diagrams, steppers, simulations, a stakeholder power grid, a gap matrix, a risk heat map, a CMMI self-assessment and a quiz on every page. Self-assessment scores are saved only in your browser.
- **The explanations are original summaries**, not text from the book. Figures are redrawn, and the examples follow the book's fictional hospital cases. Values marked "illustrative" are not from the book.
- The book's Appendix A (list of copyrighted figures), references and index are not reproduced.

TOGAF is a registered trademark of The Open Group.

## Pages

- `index.html`: overview and clickable ADM
- `ch01-introduction-history.html`: Ch. 1–2, Why TOGAF, and Where It Came From
- `ch03-standard-and-definition.html`: Ch. 3–4, The Standard and What EA Means
- `ch05-enterprise-metamodel.html`: Ch. 5, Enterprise Metamodel
- `ch06-content-framework.html`: Ch. 6, Content Framework
- `ch07-architecture-repository.html`: Ch. 7, Architecture Repository
- `ch08-architecture-governance.html`: Ch. 8, Architecture Governance
- `ch09-capability-roles.html`: Ch. 9–10, Capability, Roles and Skills
- `ch11-architecture-domains.html`: Ch. 11, Architecture Domains
- `ch12a-adm-preliminary-vision.html`: Ch. 12.1–12.4, The ADM: Preliminary and Vision
- `ch12b-business-architecture.html`: Ch. 12.5, Phase B: Business Architecture
- `ch12c-is-technology.html`: Ch. 12.6–12.7, Phases C and D: Systems and Technology
- `ch12d-opportunities-migration.html`: Ch. 12.8–12.9, Phases E and F: From Gaps to a Plan
- `ch12e-governance-change-requirements.html`: Ch. 12.10–12.14, Phases G, H and Requirements
- `ch13-applying-the-adm.html`: Ch. 13, Applying the ADM
- `ch14-adm-techniques.html`: Ch. 14, ADM Techniques
- `ch15-maturity-frameworks.html`: Ch. 15–16, Maturity and Other Frameworks
- `ch17-tailoring-agile.html`: Ch. 17–18, Tailoring and Agile Architecture
- `ch19-digital-transformation.html`: Ch. 19, Digital Transformation
- `ch20-case-scenario.html`: Ch. 20, Putting TOGAF into Practice
- `ch21-togaf-on-a-page.html`: Ch. 21–22, TOGAF on a Page

## Rebuilding

`_source/` holds the shared `base.css` and `base.js`, the page sources in `src/`, and `build.py`. To regenerate every page into a folder named `out`, run `python3 build.py out`.
