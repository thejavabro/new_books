# Accelerate — visual companion

Interactive, illustrated learning pages for *Accelerate: The Science of Lean Software and DevOps* (Forsgren, Humble, Kim), one self-contained HTML page per chapter plus Appendix A and Appendices B–C.

Open `index.html` in any browser. Every page works offline (fonts fall back to system fonts) and links to the others by relative path, so keep the files together in one folder, e.g. `C:\repo\new_books\Accelerate\`.

- 16 chapters + 2 appendix pages, light and dark themes, phone friendly
- Diagrams, animations, simulations, quizzes and a self-assessment (saved only in your browser)
- Explanations are original summaries; figures are redrawn from the book's findings. Values marked "illustrative" are not from the book.

`_source/` holds the shared CSS/JS, chapter sources and `build.py` (`python3 build.py out all`) for regenerating the pages.
