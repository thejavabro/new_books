//@@ appendix-leftovers
CH({slug:"appendix-leftovers",n:"A",part:"Appendix",sub:"Five more topics, in brief.",end:"A safety net, and a few power tools.",scenes:[
PT("Five more topics",[["Tags","Names for commits that never move.","blue"],["Cherry-pick","Copy one commit onto your branch.","green"],["Stash","Park unfinished work.","purple"],["Reflog","A diary of where HEAD has been.","amber"],["Rebase","Replay commits on a new base.","red"]],["Each is a chapter’s worth elsewhere."]),
VS("Tags and branches","Branch",["Moves with each commit"],"Tag",["Stays where it was put"],["Use tags to mark releases."],"VS","blue","green"),
VS("Reflog: the safety net","Feels lost",["A reset moved the branch","The commits seem gone"],"Reflog",["Lists every place HEAD has been","Find the commit, and point a branch at it"],["Commits are rarely lost. They are only unreferenced."],"→","red","green"),
VS("Merge and rebase","Merge",["Joins two histories","Keeps what happened"],"Rebase",["Replays your commits on top","A straight line, with new commit IDs"],["Do not rebase commits that others already have."],"or","blue","amber"),
RC("Leftovers",[["Tags","Fixed names."],["Cherry-pick","One commit."],["Stash","Park work."],["Reflog","Recovers."],["Rebase","Replays."],["Shared","Do not rewrite."]])
]});
//@@ ch01-beginning-git
CH({slug:"ch01-beginning-git",n:"1",part:"Getting started",sub:"Repositories, the index and your first commit.",end:"A commit is a snapshot you chose on purpose.",scenes:[
PL("The three places a file lives",[["Working directory","Where you edit."],["Index","Where you stage, with git add.","blue"],["Object database","Where commits live, after git commit.","green"]],["Two commands, because the index lets you choose what goes into a commit."],{tc:"blue"}),
PT("What a commit holds",[["A snapshot","Of everything staged.","blue"],["A message","Why it was made.","green"],["Author and time","Who and when.","purple"],["A parent","The commit before it.","amber"]],["Commits form a chain back through history."]),
VS("The index is a scratch pad","Adding once",["Stages the file as it is now"],"Editing and adding again",["Replaces the staged copy"],["You compose the next commit in the index."],"→","blue","green"),
PT("The life of a file",[["Untracked","Git has never seen it.","blue"],["Staged","Ready for the next commit.","green"],["Unmodified","Matches the last commit.","purple"],["Modified","Changed since.","amber"]],["git status tells you which state each file is in."]),
RC("1",[["Repository","Created by git init."],["Add","Copies to the index."],["Commit","Saves a snapshot."],["Three places","Working, index, database."],["Status","Shows the state."],["History","A chain of commits."]])
]});
//@@ ch02-branching-out
CH({slug:"ch02-branching-out",n:"2",part:"Getting started",sub:"Working on several things at once, and bringing them together.",end:"A branch is just a sticky note on a commit.",scenes:[
VS("Why branches","One line of work",["A half-finished feature blocks an urgent fix"],"Branches",["Each task on its own line","Switch between them freely"],["Branches let unfinished work stay out of the way."],"→","red","green"),
PT("A branch is a sticky note",[["It points","To one commit.","blue"],["Committing","Moves the note forward.","green"],["HEAD","Marks the branch you are on.","purple"],["Creating one","Costs almost nothing.","amber"]],["Say it slowly: a branch is a pointer."]),
VS("Two kinds of merge","Fast-forward",["The target has not moved","Its note simply slides forward"],"Merge commit",["Both branches moved","A new commit with two parents joins them"],["Which one you get depends on whether the histories diverged."],"or","green","blue"),
PL("When both sides change the same lines",[["Merge","Git stops."],["Open the file","Find the conflict markers.","amber"],["Choose","What the result should be.","blue"],["Add and commit","To finish the merge.","green"]],["Usually Git combines changes by itself. A conflict is the exception."],{tc:"blue"}),
RC("2",[["Branch","A pointer."],["HEAD","Where you are."],["Switch","Between lines of work."],["Fast-forward","The note slides."],["Merge commit","Two parents."],["Conflicts","Resolved by hand."]])
]});
//@@ ch03-looking-around
CH({slug:"ch03-looking-around",n:"3",part:"Getting started",sub:"Reading history, and seeing what changed.",end:"Every diff compares exactly two things.",scenes:[
PT("Reading the history",[["git log","Commits, newest first.","blue"],["One line each","A compact view.","green"],["A graph","Shows branches and merges.","purple"],["All branches","Not just the current one.","amber"]],["By default, the log shows only what the current branch can reach."]),
PT("Anatomy of a diff",[["Header","Which two versions.","blue"],["Hunks","Regions that changed.","green"],["Minus lines","Removed.","purple"],["Plus lines","Added.","amber"]],["Commits record snapshots. A diff works out the difference between two."]),
VD("Which two things is diff comparing?",[["git diff",true,"Working directory against the index.","UNSTAGED","blue"],["git diff --staged",true,"Index against the last commit.","STAGED","purple"],["git diff A B",true,"One branch tip against another.","BRANCHES","green"]],["Ask this first, and the output makes sense."],{sw:220}),
VS("Comparing two branches","Looks like",["Comparing whole histories"],"Is",["Comparing the two commits at their tips"],["A branch name stands for one commit."],"→","amber","green"),
RC("3",[["Log","Reads history."],["Graph","Shows the shape."],["Diff","Compares two things."],["Unstaged","Working against index."],["Staged","Index against commit."],["Branches","Tip against tip."]])
]});
//@@ ch04-undoing
CH({slug:"ch04-undoing",n:"4",part:"Getting started",sub:"How to take back a mistake, depending on where it lives.",end:"Undo has a shape: where is the mistake?",scenes:[
VD("Where does the mistake live?",[["In the working directory",true,"Restore the file from the index.","RESTORE","blue"],["In the index",true,"Unstage it, with restore --staged.","UNSTAGE","purple"],["In the last commit",true,"Amend it.","AMEND","amber"],["In an older, shared commit",true,"Revert it with a new commit.","REVERT","green"]],["git add copies forward. git restore copies backwards."],{sw:200}),
ST("Three ways to un-commit",[["Hard","Commit, index and files all go back.","red",0.5],["Mixed","Commit and index go back. Files stay.","amber",0.75],["Soft","Only the commit goes back. Changes stay staged.","green",1.0]],["git reset moves the branch pointer. The mode decides what else changes."]),
VS("Reset and revert","Reset",["Rewrites history","Fine for commits nobody else has"],"Revert",["Adds a new commit that undoes an old one","Safe for shared history"],["Undo by adding, when others already have the commit."],"or","amber","green"),
PT("Small fixes",[["Amend","Fix the last commit or its message.","blue"],["Rename a branch","With branch -m.","green"],["Delete or rename files","With git rm and git mv.","purple"],["HEAD","1","The commit before HEAD."]],["Tools for the everyday slip."]),
RC("4",[["Where","Decides how."],["Restore","Copies backwards."],["Amend","The last commit."],["Reset","Soft, mixed, hard."],["Revert","Undo by adding."],["Shared","Never rewrite it."]])
]});
//@@ ch05-remote-work
CH({slug:"ch05-remote-work",n:"5",part:"Working with others",sub:"Clones, remotes and pull requests.",end:"Every clone is a full repository.",scenes:[
VS("Git is distributed","Centralised",["One server holds the history","You hold a copy of the files"],"Distributed",["Every clone holds the whole history","You can work offline"],["A clone is not a checkout. It is a repository."],"→","amber","green"),
PL("From local to shared",[["Clone","Copy a remote repository."],["Commit","Locally.","blue"],["Push","Send commits to the remote.","purple"],["Others pull","And receive them.","green"]],["The remote is another repository that everyone agrees to share through."],{tc:"blue"}),
VS("Public commits are different","Private",["Only you have them","Rewrite freely"],"Public",["Others have built on them","Do not rewrite"],["Once pushed, treat a commit as permanent."],"→","green","red"),
PL("The life of a pull request",[["Push","A branch."],["Open","A pull request.","blue"],["Review","Comments and changes.","amber"],["Merge","Into the main branch.","purple"],["Delete","The branch.","green"]],["A pull request is a conversation about a branch."],{tc:"blue"}),
RC("5",[["Clone","A full copy."],["Distributed","Everyone has history."],["Push","Shares commits."],["Public","Do not rewrite."],["Pull request","Review before merge."],["Clean up","Afterwards."]])
]});
//@@ ch06-go-team-go
CH({slug:"ch06-go-team-go",n:"6",part:"Working with others",sub:"Staying in step with teammates.",end:"git pull is git fetch plus git merge.",scenes:[
PT("The middlemen",[["Remote tracking branches","Your record of where the remote’s branches were.","blue"],["Updated by fetch","Not by committing.","green"],["Named like","origin/main.","purple"],["Read-only","You do not commit to them.","amber"]],["They sit between your branches and the remote."]),
VS("Fetch, then merge","git fetch",["Downloads new commits","Updates the tracking branches","Changes nothing of yours"],"git merge",["Brings them into your branch"],["Fetching first lets you look before you merge."],"→","blue","green"),
VS("The ideal: only one side moves","Both moved",["A merge commit, perhaps a conflict"],"Only the remote moved",["A clean fast-forward"],["Do your work on a branch, and keep your copy of main untouched."],"→","amber","green"),
PL("A typical team workflow",[["Fetch","The latest."],["Branch","From the updated main.","blue"],["Commit","Your work.","purple"],["Push","The branch.","amber"],["Pull request","Review and merge.","green"]],["Then delete the branch, locally and on the remote."],{tc:"blue"}),
RC("6",[["Tracking branches","Where the remote was."],["Fetch","Downloads only."],["Pull","Fetch plus merge."],["Fast-forward","The easy case."],["Workflow","Branch, push, review."],["Tidy","Old branches."]])
]});
//@@ ch07-searching
CH({slug:"ch07-searching",n:"7",part:"Finding things",sub:"Answering “who, when and where” from the repository.",end:"The history can answer questions about itself.",scenes:[
PT("Four search tools",[["git blame","Who last changed each line.","blue"],["git grep","Search the files at a commit.","green"],["The pickaxe","Find commits that added or removed some text.","purple"],["git bisect","Find the commit that broke something.","amber"]],["Each answers a different question."]),
VS("Searching files and searching history","git grep",["What is in the files, now or at a given commit"],"log with -S or -G",["Which commits changed the number of matches"],["One searches a snapshot. The other searches changes."],"VS","blue","purple"),
PL("git bisect",[["Mark","A bad commit and a good one."],["Test","The one Git checks out, halfway.","blue"],["Tell it","Good or bad.","purple"],["Repeat","Each answer halves the range.","green"]],["A binary search through history."],{tc:"blue"}),
VS("Detached HEAD","Normally",["HEAD points to a branch"],"Checking out a commit",["HEAD points to the commit directly","New commits belong to no branch"],["Fine for looking around. Create a branch if you want to keep work."],"→","green","amber"),
RC("7",[["Blame","Line by line."],["Grep","In a snapshot."],["Pickaxe","In history."],["Bisect","Binary search."],["Detached","For looking."],["Branch","To keep work."]])
]});
//@@ ch08-pro-tips
CH({slug:"ch08-pro-tips",n:"8",part:"Finding things",sub:"Configuration and habits that make Git pleasant.",end:"Commit early, commit often, and say why.",scenes:[
ST("Configuration levels",[["Local","This repository only.","green",0.5],["Global","Every repository of yours.","blue",0.75],["System","Every user on the machine.","muted",1.0]],["A more specific level overrides a more general one."]),
PT("Shortcuts and ignores",[["Aliases","Short names for long commands.","blue"],[".gitignore","Patterns Git should not track.","green"],["Ignore","Build output, logs, editor files.","purple"],["Never ignore","What others need to build.","amber"]],["Set these up once."]),
VS("Commit messages","Weak",["“Fix stuff”","Says nothing"],"Useful",["A short summary line","Then why the change was needed"],["The diff shows what changed. The message should say why."],"→","red","green"),
PT("Good habits",[["Small commits","One idea each.","blue"],["Helpful branch names","With a prefix and a topic.","green"],["A graphical tool","When it helps you see.","purple"],["The command line","To understand what it does.","amber"]],["Every graphical tool runs Git commands underneath."]),
RC("8",[["Config","Three levels."],["Aliases","Save typing."],["Ignore","What is generated."],["Messages","Say why."],["Small","Commits."],["Names","That explain."]])
]});
