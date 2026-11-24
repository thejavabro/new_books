# The DevOps Solutions Handbook: visual companion

This is a set of interactive web pages, one for each chapter of *The DevOps Solutions Handbook* (Packt). That book grew out of the #90DaysOfDevOps community project. Each page explains the chapter's ideas with diagrams, animations, step-throughs, pretend terminals and small simulations, and ends with a short quiz.

## How to open it

Open `index.html` in any modern browser. It works offline and needs no server or install. Chapter pages link to each other with relative paths, so keep all the `.html` files in the same folder.

- There's a contents bar on every page, plus previous/next links and a link back to the index.
- Light and dark themes follow your system setting.
- The pages work at phone width.
- Fonts load from Google Fonts when you're online. Offline, system fonts are used.

## Chapters

| # | Page | Chapter |
|---|------|---------|
| 1 | ch01-kickstart.html | Kickstart Your DevOps Journey |
| 2 | ch02-linux.html | The Big Picture: DevOps and Linux |
| 3 | ch03-git.html | Version Control with Git |
| 4 | ch04-iac.html | Infrastructure as Code |
| 5 | ch05-config-mgmt.html | Configuration Management |
| 6 | ch06-cloud.html | Cloud Fundamentals |
| 7 | ch07-containers.html | Containers |
| 8 | ch08-kubernetes.html | Kubernetes |
| 9 | ch09-golang.html | Golang – Programming Language |
| 10 | ch10-databases.html | Databases |
| 11 | ch11-cicd.html | CI/CD Pipelines |
| 12 | ch12-beyond.html | Beyond the Book |

## Original summaries

All explanations, examples, code snippets, terminal sessions and drawings on these pages are original summaries written for this companion. They are not text or figures copied from the book. The pretend terminals and simulations are simplified teaching models. Where a page uses numbers or rules of its own (for example the planner costs, batch-size model and error-budget demo), it says so. For the full treatment, read the book.

## Missing or skipped content

- **PDF page 2** (front matter) and **PDF page 23** (the Part 1 opener, just before Chapter 1) contain only a "Hang tight. This'll take just a sec." loading placeholder, not real content. No chapter text appears to be lost. Chapter 1 notes the gap.
- **Not covered on purpose:** "Chapter 13, Unlock Your Exclusive Benefits" (publisher instructions for claiming the e-book), the "Other books you may enjoy" list and the back-of-book index.
- Blank separator pages (PDF pages 13, 111, 191 and 259) are normal layout and contain nothing.

## Source

`_source/` holds the build script and shared assets: `build.py`, `base.css`, `base.js` and `src/`, which contains each page's body. To rebuild into a folder, run `python3 build.py <out-dir>` from inside `_source/`.
