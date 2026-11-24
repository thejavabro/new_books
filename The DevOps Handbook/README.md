# The DevOps Handbook: visual companion

A set of interactive web pages, one per chapter, that explain the ideas in *The DevOps Handbook* (2nd edition, 2021) by Gene Kim, Jez Humble, Patrick Debois, John Willis and Nicole Forsgren. Each page has diagrams drawn in SVG, small simulations you can play with, the chapter's case studies, and a short quiz.

## How to open it

Open `index.html` in any modern web browser. Everything works offline: no install, no server, and no scripts loaded from the internet. Only the Google Fonts stylesheet is fetched, and the pages fall back to system fonts if you are offline. Pages link to each other with relative paths, so keep all the `.html` files together in one folder.

Use the "theme" button in each page header to switch between light and dark. The pages are built to work on phones as well as desktops.

## Chapters

- [Introduction: Imagine a World Where Dev and Ops Become DevOps](ch00-introduction.html)
- [Chapter 1: Agile, Continuous Delivery, and the Three Ways](ch01-three-ways.html)
- [Chapter 2: The First Way: The Principles of Flow](ch02-flow.html)
- [Chapter 3: The Second Way: The Principles of Feedback](ch03-feedback.html)
- [Chapter 4: The Third Way: Continual Learning and Experimentation](ch04-learning.html)
- [Chapter 5: Selecting Which Value Stream to Start With](ch05-value-stream.html)
- [Chapter 6: Understanding, Visualizing and Expanding the Value Stream](ch06-value-stream-mapping.html)
- [Chapter 7: Designing Organization and Architecture with Conway's Law in Mind](ch07-conways-law.html)
- [Chapter 8: Integrating Operations into the Daily Work of Development](ch08-ops-in-dev.html)
- [Chapter 9: Create the Foundations of Our Deployment Pipeline](ch09-deployment-pipeline.html)
- [Chapter 10: Enable Fast and Reliable Automated Testing](ch10-automated-testing.html)
- [Chapter 11: Enable and Practice Continuous Integration](ch11-continuous-integration.html)
- [Chapter 12: Automate and Enable Low-Risk Releases](ch12-low-risk-releases.html)
- [Chapter 13: Architect for Low-Risk Releases](ch13-architecture.html)
- [Chapter 14: Create Telemetry to Enable Seeing and Solving Problems](ch14-telemetry.html)
- [Chapter 15: Analyze Telemetry to Better Anticipate Problems](ch15-analyze-telemetry.html)
- [Chapter 16: Enable Feedback So Dev and Ops Can Safely Deploy Code](ch16-feedback-deploy.html)
- [Chapter 17: Integrate Hypothesis-Driven Development and A/B Testing](ch17-ab-testing.html)
- [Chapter 18: Create Review and Coordination Processes to Increase Quality](ch18-review-coordination.html)
- [Chapters 19–21: Part V: The Technical Practices of Continual Learning](ch19-21-learning.html) **(missing from the PDF, see below)**
- [Chapter 22: Information Security Is Everyone's Job Every Day](ch22-infosec.html)
- [Chapter 23: Protecting the Deployment Pipeline](ch23-protect-pipeline.html)
- [Conclusion: A Call to Action and the Afterword](ch24-conclusion-afterword.html)
- [Appendices 1–10: reference material](appendix-reference.html)

## About the content

All explanations, diagrams, simulations and quiz questions are **original summaries** written for this companion. They are not text from the book. Short quotations are attributed to the people the book quotes. Numbers marked "illustrative" in a simulation show the direction of an effect, not data from the book. Read the book itself for the full argument, sources and figures.

## Missing content

The source PDF is incomplete:

- **Chapters 19, 20 and 21 are missing.** After the Part V introduction (PDF pages 474–475), pages 476–477 show only a loading placeholder ("Hang tight. This'll take just a sec."), and page 478 shows "404 Not Found". The PDF jumps straight to the Part V conclusion on page 479. The missing chapters are:
  - Ch 19: Enable and Inject Learning into Daily Work
  - Ch 20: Convert Local Discoveries into Global Improvements
  - Ch 21: Reserve Time to Create Organizational Learning and Improvement

  The page `ch19-21-learning.html` says so clearly. It covers only what the PDF does contain: the Part V introduction and conclusion, and the chapter and case-study titles from the table of contents. It does not invent the missing content.

Every other chapter, the introduction, the conclusion, the afterword and appendices 1–10 were present and are covered.

## Source

`_source/` holds `build.py`, the shared `base.css` and `base.js`, and the per-page sources in `src/`. Run `python3 _source/build.py <outdir> all` to rebuild the pages.
