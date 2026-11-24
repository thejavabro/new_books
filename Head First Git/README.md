# Head First Git: visual companion

Interactive, self-contained HTML pages, one per chapter of *Head First Git* by Raju Gandhi (O'Reilly, 2022), plus an index.

## How to open

Open `index.html` in any modern browser. Every page is a single file with its CSS and JavaScript inlined, so it works offline (fonts load from Google Fonts when online and fall back to system fonts otherwise). Pages follow your system light/dark setting and work on phones.

## Pages

| Page | Covers |
|---|---|
| `ch01-beginning-git.html` | Why version control, command-line basics, `git init`, commit objects, the three stages (working directory, index, object database), file states, `git status` |
| `ch02-branching-out.html` | Branches as sticky notes, `git branch`/`git switch`, a branch playground, fast-forward vs merge commits, conflicts, deleting branches, typical workflow |
| `ch03-looking-around.html` | `git log` and its flags, how log walks parents, reading a diff, `git diff` vs `--cached`, diffing branches and commits, `--word-diff`, new files |
| `ch04-undoing.html` | `git restore` (and `--staged`), `git rm`, `git mv`, `--amend`, `git branch -m`, `HEAD~`/`HEAD^`, `git reset` soft/mixed/hard, `git revert` |
| `ch05-remote-work.html` | Fork vs clone, what cloning does, Git is distributed, pushing, public vs private commits, `--set-upstream`, pull requests |
| `ch06-go-team-go.html` | Remote tracking branches, a two-person collaboration simulator, fetch/merge vs pull, the ideal workflow, cleaning up remote branches |
| `ch07-searching.html` | `git blame`, `git grep`, `git log -S`/`-G`/`--grep`, detached HEAD, a `git bisect` game |
| `ch08-pro-tips.html` | Global vs local config, aliases, a `.gitignore` tester, commit-message checker, branch-name builder, GUI tools |
| `appendix-leftovers.html` | Tags, cherry-pick, stash, reflog, rebase |

Each page ends with a short quiz.

## Note on content

All explanations, examples, code snippets and diagrams are original summaries written for this companion; nothing is copied from the book beyond short terms and names. Commit IDs and terminal output in the simulators are illustrative.

The source PDF (786 pages) was complete: all eight chapters and Appendix A were present. A handful of pages contain only an illustration and no text layer; these are diagrams, not missing content. Front matter (praise, the how-to-use-this-book intro, installation steps) is skipped.

Build sources are in `_source/` (`python3 _source/build.py <out-dir>`).
