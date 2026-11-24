# Continuous Delivery, Drawn Out

An interactive visual companion to *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation* by Jez Humble and David Farley (Addison-Wesley, 2011).

There is one self-contained HTML page per chapter, plus an index. Each page has diagrams you can click, small simulations and step-through walkthroughs, a quick-check quiz and a one-page recap. Pages work in light and dark themes and at phone width.

## How to open

Open `index.html` in any modern browser. Everything runs offline. Pages load web fonts from Google Fonts when online and fall back to system fonts when offline. The pages link to each other by relative paths, so keep all the files in one folder.

## Chapters

Part I: Foundations
- ch01-problem-of-delivering-software.html: The Problem of Delivering Software (text missing from the source PDF, see below)
- ch02-configuration-management.html: Configuration Management
- ch03-continuous-integration.html: Continuous Integration (text missing from the source PDF, see below)
- ch04-testing-strategy.html: Implementing a Testing Strategy

Part II: The Deployment Pipeline
- ch05-deployment-pipeline.html: Anatomy of the Deployment Pipeline
- ch06-build-deployment-scripting.html: Build and Deployment Scripting
- ch07-commit-stage.html: The Commit Stage
- ch08-acceptance-testing.html: Automated Acceptance Testing
- ch09-nonfunctional-requirements.html: Testing Nonfunctional Requirements
- ch10-deploying-releasing.html: Deploying and Releasing Applications

Part III: The Delivery Ecosystem
- ch11-infrastructure-environments.html: Managing Infrastructure and Environments
- ch12-managing-data.html: Managing Data
- ch13-components-dependencies.html: Managing Components and Dependencies
- ch14-advanced-version-control.html: Advanced Version Control
- ch15-managing-continuous-delivery.html: Managing Continuous Delivery

The foreword, preface, acknowledgments, bibliography, index and footnotes do not have their own pages.

## Missing content in the source PDF

- MISSING: Ch 1 The Problem of Delivering Software (PDF pages 60 to 62 hold a "Hang tight…" loading placeholder, a "404 Not Found" message and a blank page instead of the chapter text) | Continuous Delivery
- MISSING: Ch 3 Continuous Integration (PDF pages 99 to 100 hold a "Hang tight…" loading placeholder and a blank page instead of the chapter text) | Continuous Delivery

The pages for these two chapters are rebuilt from the book's contents list, which gives every section heading, along with the preface's chapter summaries and cross-references in later chapters. Each of those pages says so at the top.

## A note on content

All explanations, examples, code snippets and drawings are original summaries written for this companion. They are not text or figures copied from the book. Short phrases are quoted only where needed, and numbers in the simulations are illustrative.

## Source

`_source/` holds the build pipeline: `base.css`, `base.js`, `build.py` and `src/*.html`. To rebuild into a folder, run `python3 _source/build.py <out-dir>`.
