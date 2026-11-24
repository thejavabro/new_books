# Release It! - visual companion

A set of self-contained, interactive HTML pages that walk through *Release It! Design and Deploy Production-Ready Software* (Michael T. Nygard, 2nd edition, Pragmatic Bookshelf, 2018), one page per chapter, with diagrams, simulations and a short quiz on each.

## How to open it

Unzip `Release It!.zip` and open `Release It!/index.html` in any modern browser. Everything works offline. The only external request is the Google Fonts stylesheet; without it the pages fall back to system fonts. Pages follow your system's light/dark setting and have a theme toggle.

## Chapters

| Ch | Page |
|---|---|
| 1 | [Living in Production](ch01-living-in-production.html) |
| 2 | [Case Study: The Exception That Grounded an Airline](ch02-airline-case-study.html) |
| 3 | [Stabilize Your System](ch03-stabilize-your-system.html) |
| 4a | [Stability Antipatterns I: Points of Contact](ch04a-antipatterns-integration.html) |
| 4b | [Stability Antipatterns II: Scale and Slowness](ch04b-antipatterns-scale.html) |
| 5a | [Stability Patterns I: Contain the Damage](ch05a-patterns-containment.html) |
| 5b | [Stability Patterns II: Control the Flow](ch05b-patterns-flow.html) |
| 6 | [Case Study: Phenomenal Cosmic Powers, Itty-Bitty Living Space](ch06-black-friday.html) |
| 7 | [Foundations](ch07-foundations.html) |
| 8 | [Processes on Machines](ch08-processes-on-machines.html) |
| 9 | [Interconnect](ch09-interconnect.html) |
| 10 | [Control Plane](ch10-control-plane.html) |
| 11 | [Security](ch11-security.html) |
| 12–13 | [Design for Deployment](ch12-13-design-for-deployment.html) |
| 14 | [Handling Versions](ch14-handling-versions.html) |
| 15 | [Case Study: Trampled by Your Own Customers](ch15-trampled-case-study.html) |
| 16 | [Adaptation](ch16-adaptation.html) |
| 17 | [Chaos Engineering](ch17-chaos-engineering.html) |

## About the text

All explanations are original summaries and paraphrases written for this companion. Quotations from the book are limited to short phrases. Interactive numbers marked "illustrative" are teaching aids, not figures from the book. Read the book itself for the full argument.

## Missing content in the source PDF

These parts of the source PDF did not contain the book's text (a loading placeholder, a browser error screenshot or a server error page appeared instead). The affected pages flag each gap and do not invent the missing material.

- Preface: section "About the Case Studies" (loading placeholder, PDF p. 19)
- Ch 3 Stabilize Your System: section "Chain of Failure" (loading placeholder, PDF p. 66)
- Ch 4 Stability Antipatterns: section "Chain Reactions" (browser "ERR_TIMED_OUT" screenshot, PDF p. 90)
- Ch 4 Stability Antipatterns: section "Unbounded Result Sets" (loading placeholder, PDF p. 148)
- Ch 5 Stability Patterns: section "Timeouts" (loading placeholder, PDF p. 152)
- Ch 16 Adaptation: section "Information Architecture" ("502 Bad Gateway" page, PDF p. 497)

The bibliography and index of the book were not turned into pages.

## Rebuilding

`_source/` (kept in the project folder, not in the zip) holds `build.py`, `base.css`, `base.js` and `src/`. Run `python3 build.py .. all` from inside `_source/`.
