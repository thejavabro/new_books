# Claude Code Visual Bible: visual companion

An interactive, chapter-by-chapter study companion for *Claude Code Visual Bible* (Mark J. Price, Packt, October 2026): three books (Foundations, Websites, Mobile apps), 38 chapters, plus the Introduction and Epilogue, grouped into 21 self-contained HTML pages.

Each page has diagrams drawn in inline SVG, small interactive simulations and checklists, a "may have changed" box wherever the product has likely moved on since publication, and a 3 to 5 question quiz.

## How to open

Open `index.html` in any modern browser (double-click it). Everything works offline; the pages link to each other with relative links. Fonts load from Google Fonts when online and fall back to system fonts otherwise. Use the theme button in the header to switch light/dark.

## Chapters

| Page | Book chapters | Title | PDF pages |
|---|---|---|---|
| [ch00-introduction.html](ch00-introduction.html) | Intro | Introduction | 10–28 |
| [ch01-agent-and-workspace.html](ch01-agent-and-workspace.html) | 1.1–1.2 | Understand Claude Code and Set Up a Workspace | 30–39 |
| [ch02-terminal-first-build.html](ch02-terminal-first-build.html) | 1.3–1.4 | The Terminal and Your First Build | 40–48 |
| [ch03-pieces-and-brief.html](ch03-pieces-and-brief.html) | 1.5–1.6 | Software Pieces and the Build Brief | 49–58 |
| [ch04-prompts-plans-memory.html](ch04-prompts-plans-memory.html) | 1.7–1.8 | Clear Prompts, Plans First, and Project Memory | 59–66 |
| [ch05-git-and-debugging.html](ch05-git-and-debugging.html) | 1.9–1.10 | Diffs, Git Checkpoints and Calm Debugging | 67–77 |
| [ch06-secrets-and-tool-project.html](ch06-secrets-and-tool-project.html) | 1.11–1.12 | Secrets, Skepticism and Your First Tool | 78–88 |
| [ch07-plan-site-and-html.html](ch07-plan-site-and-html.html) | 2.1–2.2 | Plan the Website and Structure It with HTML | 89–98 |
| [ch08-css-system-and-layout.html](ch08-css-system-and-layout.html) | 2.3–2.4 | A Visual System and Layout with CSS | 99–107 |
| [ch09-responsive-nav-images.html](ch09-responsive-nav-images.html) | 2.5–2.7 | Responsive Design, Navigation and Images | 108–116 |
| [ch10-javascript-and-forms.html](ch10-javascript-and-forms.html) | 2.8–2.9 | Behaviour with JavaScript and a Contact Form | 117–122 |
| [ch11-audit-and-publish.html](ch11-audit-and-publish.html) | 2.10–2.11 | Audit the Site and Publish It | 123–132 |
| [ch12-website-project.html](ch12-website-project.html) | 2.12 | Project: Build and Publish a Website You Would Use | 133–138 |
| [ch13-app-brief-and-expo.html](ch13-app-brief-and-expo.html) | 3.1–3.2 | Define the App and Run It with Expo | 139–147 |
| [ch14-project-tour-and-components.html](ch14-project-tour-and-components.html) | 3.3–3.4 | Tour the Project and Build Components | 148–155 |
| [ch15-navigation-and-state.html](ch15-navigation-and-state.html) | 3.5–3.6 | Navigation, Props and State | 156–162 |
| [ch16-forms-and-crud.html](ch16-forms-and-crud.html) | 3.7–3.8 | Validated Forms and CRUD | 163–167 |
| [ch17-persistence-reminders-sharing.html](ch17-persistence-reminders-sharing.html) | 3.9–3.10 | Persistence, Reminders and Sharing | 168–174 |
| [ch18-test-and-prepare-release.html](ch18-test-and-prepare-release.html) | 3.11–3.12 | Test on a Real Device and Prepare for Release | 175–179 |
| [ch19-ship-and-app-project.html](ch19-ship-and-app-project.html) | 3.13–3.14 | Build, Beta Test, Submit, and Your Own App | 180–188 |
| [ch20-epilogue.html](ch20-epilogue.html) | Epilogue | Epilogue: Keep Building | 189–197 |

## About the content

- All explanations, diagrams, quizzes and example prompts are original summaries written for this companion. They are not copied from the book; read the book for the author's full wording and screenshots.
- Amber dashed boxes labelled "May have changed since publication" flag details that move quickly: Claude plan requirements and prices, VS Code extension labels and defaults, CLI install and login steps, permission mode names, memory and settings files, Git and Netlify interfaces, Expo Go SDK versions, store submission requirements, account-enforcement figures and AI model/product names. Check current documentation for these.

## Missing or incomplete source content

- Chapters 1.1 to 3.14: the copy-and-paste prompt boxes are clipped at the right page margin in the source PDF, so the full wording of many long prompts is not available. The prompts shown on these pages are rewritten in our own words from the visible part and the surrounding text. Each affected page carries a source note.
- Front matter (title pages, copyright, author biography, table of contents) was not converted.

## Rebuilding

`_source/` holds `build.py`, `base.css`, `base.js` and the page sources in `src/`. Run `python3 _source/build.py <output-folder>` from this folder to regenerate the pages.
