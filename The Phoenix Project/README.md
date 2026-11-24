# The Phoenix Project: visual companion

An interactive, offline-friendly companion to *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win* by Gene Kim, Kevin Behr and George Spafford (IT Revolution).

The novel's 35 short chapters are grouped into 11 pages by story arc, plus one page on the Resource Guide at the back of the book. Each page has a short plot recap in our own words, then explains the DevOps ideas the chapters teach (the Three Ways, the four types of work, work in process, constraints, wait times, batch size, and so on) with original diagrams, small simulations and games, and a quiz.

## How to open

Open `index.html` in any modern browser. Every page is a single self-contained HTML file; pages link to each other with relative paths, so keep them in the same folder. No internet connection is needed (Google Fonts are used when online; system fonts otherwise). Light and dark themes follow your system setting, and each page has a theme button.

## Pages

| # | File | Chapters | Title |
|---|------|----------|-------|
| 1 | ch01-03-a-promotion.html | Prologue, 1–3 | A Promotion Nobody Wanted |
| 2 | ch04-07-the-catwalk.html | 4–7 | Changes, Brent and a Stranger on the Catwalk |
| 3 | ch08-10-making-work-visible.html | 8–10 | Making Work Visible |
| 4 | ch11-13-phoenix-launch.html | 11–13 | WIP and the Phoenix Launch |
| 5 | ch14-16-unplanned-work.html | 14–16 | The Fourth Type of Work |
| 6 | ch17-19-the-off-site.html | 17–19 | Trust, Technical Debt and the Freeze |
| 7 | ch20-22-work-centers.html | 20–22 | Work Centers, Audits and Kanban |
| 8 | ch23-25-handoffs-and-value.html | 23–25 | Handoffs and the Business Behind IT |
| 9 | ch26-29-the-second-way.html | 26–29 | Batch Size and the Second Way |
| 10 | ch30-33-project-unicorn.html | 30–33 | Project Unicorn |
| 11 | ch34-35-the-third-way.html | 34–35 | Black Friday and the Third Way |
| 12 | appendix-resource-guide.html | Resource Guide | Why DevOps, origins, the Three Ways, myths |

The Cast list, Acknowledgements, Further Reading and Notes are reference material and are not given pages of their own.

## Missing from the source PDF

The PDF this was built from has placeholder or error pages in place of the following. The affected pages say so at the top and only bridge the gap from neighbouring chapters.

- Chapter 3: whole chapter missing ("Hang tight. This'll take just a sec." loading placeholder)
- Chapter 5: whole chapter missing (loading placeholder)
- Chapter 6: whole chapter missing (loading placeholder)
- Chapter 26: whole chapter missing (loading placeholder)
- Chapter 27: whole chapter missing (loading placeholder)
- Chapter 30: whole chapter missing (blank page plus loading placeholder)
- Chapter 31: whole chapter missing (browser "This site can't be reached" error page)
- Resource Guide, "The Four Types of Work": section missing (loading placeholder)
- Resource Guide title page: browser error page (no content lost)
- The cover is also a loading placeholder.

## Note on content

All explanations, plot summaries, examples, simulations and drawings are original summaries written for this companion. Nothing is copied from the book beyond a few short phrases, and the simulations use illustrative numbers unless a page says a figure comes from the book. Read the novel itself for the full story.

`_source/` holds the build script (`python3 build.py <outdir>`), the shared CSS/JS and the page sources.
