# Logic as a Tool — visual companion

Interactive, illustrated learning pages for *Logic as a Tool: A Guide to Formal Logical Reasoning* by Valentin Goranko (Wiley, 2016): 17 self-contained HTML pages plus `index.html`.

Open `index.html` in any browser. Pages work offline (fonts fall back to system fonts) and link to each other by relative path, so keep the files together in one folder. Light and dark themes (button in the header), phone friendly.

Interactive pieces include a truth-table and parse-tree builder, consequence and equivalence checkers, a negation-normal-form stepper, a Modus Ponens puzzle for the Hilbert system, a signed/unsigned Semantic Tableaux builder, Natural Deduction steppers, CNF/DNF and clausal resolution with optimisations, a 3-SAT toy, a first-order "world of shapes" model checker with a Verifier/Falsifier evaluation game, a Venn-diagram tester for all 256 syllogistic forms, Skolemization and unification steppers, a Herbrand-universe generator, relation/function explorers and a tiny Prolog interpreter. Every page ends with a quick-check quiz.

## Pages
- 01 Why Logic, and a Taste of Paradox (Introduction, Appetizer)
- 02 Propositions, Connectives and Truth Tables (§1.1)
- 03 Logical Consequence and Equivalence (§1.2–1.3)
- 04 Inductive Definitions, Induction and Recursion (§1.4)
- 05 Deductive Systems and Hilbert-style Axioms (§2.1–2.2)
- 06 Semantic Tableaux (§2.3)
- 07 Natural Deduction (§2.4)
- 08 Normal Forms, Resolution and SAT (§2.5–2.7)
- 09 First-order Structures, Languages and Truth (§3.1–3.2)
- 10 Using First-order Logic (§3.3–3.4)
- 11 Syllogisms (§3.5)
- 12 Deduction in First-order Logic (§4.1–4.3)
- 13 Normal Forms, Unification and Resolution (§4.4–4.5)
- 14 Soundness and Completeness (§4.6)
- 15 Mathematical Proofs, Sets, Functions and Relations (§5.1–5.2)
- 16 Mathematical Induction and Peano Arithmetic (§5.3)
- 17 Automated Reasoning and Prolog (§5.4)

Not covered: Chapter 6 (answers and solutions to selected exercises), References and Index.

## Missing content in the source PDF
In the supplied PDF most formula, table and diagram images are blank; the prose is intact. Affected PDF pages: Introduction/Appetizer 23, 26–29; Ch 1: 31, 36–61, 73–113; Ch 2: 114–115, 118–119, 122, 136–184, 190–196; Ch 3: 198, 203–216, 219, 233–309 (incl. Figures 3.1–3.4); Ch 4: 310, 316–342, 347–356, 358, 363–365, 368–415; Ch 5: 416, 429–430, 432–440, 447–490; Ch 6: 491, 497–519, 525–529, 542–589. Each page notes this. Formulas, tables and examples here were reconstructed from the surrounding text and standard logic.

Explanations, examples and drawings are original summaries written for this companion; nothing is reproduced from the book.

`_source/` holds the shared CSS/JS (`base.css`, `base.js`, `logic.js`, `fo.js`), page sources and `build.py` (`python3 build.py OUTDIR all`) for regenerating the pages.
