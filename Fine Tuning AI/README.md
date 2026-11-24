# Fine Tuning AI: Visual Companion

An interactive, chapter-by-chapter visual guide to *Fine-Tuning AI: Customizing Large Language Models* by Laurence Moroney (O'Reilly, 2026). Every chapter has its own self-contained HTML page with:

- explanations
- SVG diagrams
- interactive widgets (sliders, simulators, step-through walkthroughs)
- a short quiz

Each page has a table of contents, previous and next links, and a link back to the index. Light and dark themes are included, and the pages work at phone width.

**Note:** all explanations, diagrams and simulations are original summaries written for this companion. They are not text copied from the book. Some numbers in the simulations are illustrative, and the pages say so where that applies. Use this guide alongside the book, not instead of it.

## How to open

Unzip the folder and open `index.html` in any modern browser. No server or internet connection is needed; without a connection, the Google Fonts fall back to system fonts. Pages link to each other by relative paths, so keep all the files in one folder.

## Chapters

**Part I: Setting the table**

1. `ch01-generalist-to-specialist.html`: From Generalist to Specialist
2. `ch02-model-architectures.html`: Model Architectures: The DNA of AI
3. `ch03-fine-tuners-workshop.html`: The Fine-Tuner's Workshop

**Part II: The core fine-tuning loop**

4. `ch04-excavating-data.html`: Excavating Data
5. `ch05-synthetic-data.html`: Synthetic Data
6. `ch06-preparing-dataset.html`: Preparing Your Dataset for Fine-Tuning
7. `ch07-mechanics-of-adaptation.html`: The Mechanics of Adaptation
8. `ch08-training-loop.html`: The Training Loop
9. `ch09-using-the-adapter.html`: Using the Adapter
10. `ch10-alignment-preference.html`: Alignment and Preference Optimization

**Part III: Tuning image models**

11. `ch11-vision-language-models.html`: Vision Language Models
12. `ch12-diffusion-models.html`: Diffusion Models
13. `ch13-fine-tuning-diffusion.html`: Fine-Tuning Diffusion Models

**Part IV: Shipping the expert**

14. `ch14-optimization-quantization.html`: Optimization and Quantization
15. `ch15-serving-the-expert.html`: Serving the Expert

## Missing content

None. All 15 chapters (PDF pages 14 to 453) were present and readable. A few near-blank pages are chapter breaks or full-page figures. Figures exist only as images in the PDF, so the diagrams here were redrawn from the text. The front matter and the back-of-book index were not turned into pages.

## Source

The `_source/` folder (only in the shared project folder, not in the zip) contains `build.py`, `base.css`, `base.js` and the per-chapter sources in `src/`. Rebuild the pages with `python3 _source/build.py <outdir>`.
