# Software Engineering at Google: visual companion

An interactive, chapter-by-chapter visual companion to *Software Engineering at Google: Lessons Learned from Programming Over Time* (Titus Winters, Tom Manshreck and Hyrum Wright, eds.; O'Reilly, 2020). There is one self-contained HTML page per chapter, plus `index.html`. Each page has diagrams, steppers, simulations and small games, and ends with a short quiz.

## How to open

Open `index.html` in any modern browser. Everything works offline: no install and no server needed. Pages link to each other with relative paths, so keep the files together in one folder. Light and dark themes follow your system setting; the button in the header switches between them.

## Chapters

1. What Is Software Engineering? (`ch01-what-is-software-engineering.html`)
2. How to Work Well on Teams (`ch02-work-well-on-teams.html`)
3. Knowledge Sharing (`ch03-knowledge-sharing.html`)
4. Engineering for Equity (`ch04-engineering-for-equity.html`)
5. How to Lead a Team (`ch05-how-to-lead-a-team.html`)
6. Leading at Scale (`ch06-leading-at-scale.html`)
7. Measuring Engineering Productivity (`ch07-measuring-productivity.html`)
8. Style Guides and Rules (`ch08-style-guides-and-rules.html`)
9. Code Review (`ch09-code-review.html`)
10. Documentation (`ch10-documentation.html`)
11. Testing Overview (`ch11-testing-overview.html`)
12. Unit Testing (`ch12-unit-testing.html`)
13. Test Doubles (`ch13-test-doubles.html`)
14. Larger Testing (`ch14-larger-testing.html`)
15. Deprecation (`ch15-deprecation.html`)
16. Version Control and Branch Management (`ch16-version-control.html`)
17. Code Search (`ch17-code-search.html`)
18. Build Systems and Build Philosophy (`ch18-build-systems.html`)
19. Critique: Google\ (`ch19-critique.html`)
20. Static Analysis (`ch20-static-analysis.html`)
21. Dependency Management (`ch21-dependency-management.html`)
22. Large-Scale Changes (`ch22-large-scale-changes.html`)
23. Continuous Integration (`ch23-continuous-integration.html`)
24. Continuous Delivery (`ch24-continuous-delivery.html`)
25. Compute as a Service (`ch25-compute-as-a-service.html`)

## About the content

Every explanation is an original summary written for this companion. The pages are not the book's text. Only short phrases are quoted, and all code snippets, examples and drawings are our own. Numbers marked "illustrative" in simulations are made up for teaching; facts attributed to Google come from the book.

## Coverage and missing content

- All 25 chapters are covered.
- The Foreword and Preface are folded into Chapter 1.
- The Afterword is a section at the end of Chapter 25.
- The index, author bios and colophon are not included.
- Missing content: none. PDF page 65, between Chapter 2 and Chapter 3, is blank in the source file; no text appears to be lost.

`_source/` holds the build script and page sources (`python3 build.py out all`).
