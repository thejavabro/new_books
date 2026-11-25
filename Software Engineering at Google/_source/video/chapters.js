//@@ ch01-what-is-software-engineering
CH({slug:"ch01-what-is-software-engineering",n:"1",part:"Part I · Thesis",sub:"What separates engineering from programming.",end:"Software engineering is programming integrated over time.",scenes:[
VS("Programming and software engineering","Programming",["Writing code that works now"],"Software engineering",["Keeping it working as time, scale and people change"],["The difference is how long the code must live."],"→","blue","green"),
PT("Three themes",[["Time and change","Code must adapt over its lifetime.","blue"],["Scale and growth","Processes must not cost more as the team grows.","green"],["Trade-offs and costs","Decide with evidence.","purple"]],["The lens for the rest of the book."]),
VS("Hyrum’s Law","The promise",["What the interface documents"],"What people depend on",["Every observable behaviour","Including the accidents"],["With enough users, someone depends on everything you do."],"→","blue","amber"),
VS("Shifting left","Found late",["In production","Expensive"],"Found early",["In design, review or a test","Cheap"],["The earlier a problem is found, the less it costs."],"→","red","green"),
RC("1",[["Engineering","Programming over time."],["Time","Demands change."],["Scale","Must be sustainable."],["Trade-offs","With data."],["Hyrum’s Law","Everything is depended on."],["Shift left","Find it early."]])
]});
//@@ ch02-work-well-on-teams
CH({slug:"ch02-work-well-on-teams",n:"2",part:"Part II · Culture",sub:"Why software is a team effort.",end:"Humility, respect and trust.",scenes:[
VS("The genius myth","The myth",["One brilliant person does it alone"],"The reality",["Great software is built by teams"],["Working alone, and hiding your work, raises the risk of failing late."],"→","red","green"),
PT("Why hiding is harmful",[["Late feedback","Mistakes found only at the end.","blue"],["Bus factor","Knowledge in one head.","green"],["Slower","Nobody can help.","purple"],["No learning","From others’ experience.","amber"]],["Share early, and often."]),
PT("Three pillars",[["Humility","You are not the centre of the universe.","blue"],["Respect","You care about the people you work with.","green"],["Trust","You believe others are competent and will do right.","purple"]],["Almost every social conflict traces back to a lack of one."]),
VS("Blameless postmortems","Blame",["People hide mistakes","The same failure returns"],"Blameless",["What happened, and why","What will change"],["Document failures to learn from them."],"→","red","green"),
RC("2",[["Teams","Build software."],["Hiding","Is harmful."],["Bus factor","Spread knowledge."],["Three pillars","Humility, respect, trust."],["Blameless","Postmortems."],["Ego","Set it aside."]])
]});
//@@ ch03-knowledge-sharing
CH({slug:"ch03-knowledge-sharing",n:"3",part:"Part II · Culture",sub:"How an organisation learns.",end:"Your organisation knows more than any one person.",scenes:[
VS("Psychological safety","Unsafe",["People do not ask","They guess"],"Safe",["Questions are welcome","“I do not know” is normal"],["Safety is the foundation of a learning culture."],"→","red","green"),
VS("Tribal and documented knowledge","Tribal",["Lives in people’s heads","Tailored, and does not scale"],"Documented",["Written once, read by many","General, and goes stale"],["You need both, and people who connect them."],"and","blue","purple"),
PT("Ways to share",[["Mentors","One to one.","blue"],["Office hours and chat","Quick questions.","green"],["Mailing lists and Q and A","Searchable answers.","purple"],["Classes and codelabs","Structured learning.","amber"],["Documentation","The lasting record.","red"]],["Each scales differently."]),
VS("Readability","What it is",["A certification that someone writes idiomatic code in a language"],"What it does",["Spreads best practice through review"],["Mentoring through code review, at scale."],"→","blue","green"),
RC("3",[["Safety","First."],["Ask","Questions."],["Tribal","And documented."],["Mentors","Matter."],["Readability","Teaches through review."],["Culture","Of learning."]])
]});
//@@ ch04-engineering-for-equity
CH({slug:"ch04-engineering-for-equity",n:"4",part:"Part II · Culture",sub:"Building for every user.",end:"Bias is the default.",scenes:[
VS("Bias is the default","Assumed",["We are objective"],"Reality",["Everyone carries unconscious bias","It reaches the product"],["Good intentions do not prevent biased systems."],"→","amber","red"),
PT("Building multicultural capacity",[["Know your users","All of them.","blue"],["Diverse teams","See problems others miss.","green"],["Test broadly","Across populations.","purple"],["Listen","To those affected.","amber"]],["An engineer’s skills should include understanding who is left out."]),
VS("Build for everyone","For the typical user",["Works for the majority","Fails others"],"For the hardest case first",["Works for those least served","And usually for everyone"],["Design with the excluded user in mind."],"→","red","green"),
VS("Challenge established processes","Speed first",["Ship, and fix it later"],"Equity first",["Slow down when harm is possible"],["Measure outcomes for every group, not the average."],"→","amber","green"),
RC("4",[["Bias","Is default."],["Users","All of them."],["Teams","Diverse."],["Hardest case","First."],["Process","Challenge it."],["Measure","By group."]])
]});
//@@ ch05-how-to-lead-a-team
CH({slug:"ch05-how-to-lead-a-team",n:"5",part:"Part II · Culture",sub:"From engineer to leader.",end:"Serve the team.",scenes:[
PT("Three leadership roles",[["Engineering manager","People and performance.","blue"],["Tech lead","Technical direction.","green"],["Tech lead manager","Both, on a small team.","purple"]],["Leading without managing, and managing without leading, are both possible."]),
VS("Servant leadership","Traditional manager",["Directs the work"],"Servant leader",["Removes obstacles","Creates humility, respect and trust"],["The team is not there to serve you."],"→","amber","green"),
VD("Antipatterns",[["Hire pushovers",false,"Hire people smarter than you.","AVOID","red"],["Ignore low performers",false,"It hurts the whole team.","AVOID","red"],["Ignore human issues",false,"People have lives.","AVOID","red"],["Be everyone’s friend",false,"Friendly, but still the lead.","AVOID","red"],["Compromise the hiring bar",false,"The cost lasts.","AVOID","red"]],["Things new leaders do, and regret."],{sw:150}),
PT("Positive patterns",[["Lose the ego","Trust the team.","blue"],["Be a catalyst","Build consensus.","green"],["Remove roadblocks","Know who to ask.","purple"],["Teach and mentor","Even when slower.","amber"],["Set clear goals","A shared direction.","red"],["Be honest","Kindly.","blue"]],["People are like plants: each needs something different."]),
RC("5",[["Roles","Three."],["Serve","The team."],["Antipatterns","Five to avoid."],["Ego","Lose it."],["Goals","Clear."],["Motivation","Autonomy, mastery, purpose."]])
]});
//@@ ch06-leading-at-scale
CH({slug:"ch06-leading-at-scale",n:"6",part:"Part II · Culture",sub:"Leading leaders.",end:"Always be deciding, leaving and scaling.",scenes:[
PT("The three always",[["Always be deciding","Find the trade-offs, decide, iterate.","blue"],["Always be leaving","Build teams that do not need you.","green"],["Always be scaling","Protect your time and energy.","purple"]],["Advice for a leader of several teams."]),
PL("Always be deciding",[["Identify the blinders","What is assumed?"],["Identify the trade-offs","What competes?","blue"],["Decide","Then iterate.","green"]],["Ambiguous problems rarely have a perfect answer."],{tc:"blue"}),
VS("Always be leaving","Indispensable",["You are the single point of failure"],"Self-driving team",["Delegated problems","Leaders grown beneath you"],["Your job is to build an organisation that solves the problem without you."],"→","red","green"),
VS("Important versus urgent","Urgent",["Demands attention now","Fills the day"],"Important",["Moves the mission","Easily postponed"],["Delegate, schedule, and learn to drop balls on purpose."],"VS","amber","green"),
RC("6",[["Decide","With trade-offs."],["Leave","Build self-driving teams."],["Scale","Yourself."],["Delegate","Problems, not tasks."],["Important","Over urgent."],["Energy","Manage it."]])
]});
//@@ ch07-measuring-productivity
CH({slug:"ch07-measuring-productivity",n:"7",part:"Part II · Culture",sub:"Deciding what to measure, and how.",end:"Measure only what will change a decision.",scenes:[
PL("Is it worth measuring?",[["What result do you expect?","And why."],["What will you do","If it is positive? Negative?","blue"],["Who decides","And when?","purple"],["Then","Measure, or do not.","green"]],["If no result would change the decision, do not measure."],{tc:"blue"}),
PL("Goals, signals, metrics",[["Goal","The desired end result."],["Signal","How you would know it was achieved.","blue"],["Metric","A measurable proxy for the signal.","green"]],["Start from goals, so the metric does not become the target."],{tc:"blue"}),
PT("QUANTS",[["Quality","Of the code.","blue"],["Attention","Of engineers.","green"],["Intellectual complexity","Of the task.","purple"],["Tempo and velocity","How fast.","amber"],["Satisfaction","Of the people.","red"]],["Five components of productivity, so that one is not improved at the expense of another."]),
VS("Data and action","Quantitative",["Logs and counts","What happened"],"Qualitative",["Surveys and interviews","Why"],["Use both, then recommend an action."],"and","blue","purple"),
RC("7",[["Triage","Worth measuring?"],["GSM","Goals, signals, metrics."],["QUANTS","Five components."],["Proxy","Metrics are proxies."],["Mix","Numbers and interviews."],["Act","On the result."]])
]});
//@@ ch08-style-guides-and-rules
CH({slug:"ch08-style-guides-and-rules",n:"8",part:"Part III · Processes",sub:"Rules that keep a large codebase consistent.",end:"Optimise for the reader, not the writer.",scenes:[
PT("Principles for rules",[["Pull their weight","Every rule has a cost.","blue"],["Optimise for the reader","Code is read far more than written.","green"],["Be consistent","Across the codebase.","purple"],["Avoid error-prone constructs","And surprising ones.","amber"],["Concede to practicalities","When needed.","red"]],["What makes a good rule."]),
VS("Why consistency","Each team its own way",["Every file is a new dialect"],"One style",["Engineers move between projects","Tools work everywhere"],["Consistency lets an organisation scale."],"→","red","green"),
VS("Enforce with tools","By reviewers",["Arguments about formatting","Uneven"],"By tools",["Formatters and checkers","No debate"],["Automate what can be automated."],"→","amber","green"),
PL("Changing the rules",[["Propose","With the problem it solves."],["Discuss","With the community.","blue"],["Decide","By the style arbiters.","purple"],["Update","The guide and the tools.","green"]],["Rules are not frozen. They change with evidence."],{tc:"blue"}),
RC("8",[["Rules","Earn their place."],["Reader","First."],["Consistent","Everywhere."],["Tools","Enforce."],["Guidance","Beyond rules."],["Change","With evidence."]])
]});
//@@ ch09-code-review
CH({slug:"ch09-code-review",n:"9",part:"Part III · Processes",sub:"How review works, and what it is for.",end:"Review is about more than finding bugs.",scenes:[
PT("Three kinds of approval",[["Correctness","Another engineer agrees it does what it says.","blue"],["Ownership","An owner agrees it belongs here.","green"],["Readability","It follows the language’s style and practice.","purple"]],["One reviewer can often give all three."]),
PT("What review provides",[["Correctness","A second pair of eyes.","blue"],["Comprehension","Someone else understands it.","green"],["Consistency","Across the codebase.","purple"],["Ownership","Shared, not personal.","amber"],["Knowledge sharing","In both directions.","red"]],["Finding bugs is only the first."]),
VS("Write small changes","Large change",["Slow to review","Hard to reason about","Hard to roll back"],"Small change",["Reviewed in minutes","One idea"],["Most changes should be a couple of hundred lines."],"→","red","green"),
VD("Good review practice",[["Be polite and professional",true,"Comment on the code, not the person.","DO","green"],["Write a good change description",true,"Say what, and why.","DO","green"],["Keep reviewers to a minimum",true,"One is usually enough.","DO","green"],["Automate where possible",true,"Leave people to judge design.","DO","green"]],["Review should be fast and courteous."],{sw:150}),
RC("9",[["Approvals","Three kinds."],["Benefits","Five."],["Small","Changes."],["Descriptions","Matter."],["One reviewer","Often enough."],["Automate","The mechanical."]])
]});
//@@ ch10-documentation
CH({slug:"ch10-documentation",n:"10",part:"Part III · Processes",sub:"Treating documentation as part of the engineering.",end:"Documentation is like code.",scenes:[
VS("Documentation is like code","An afterthought",["No owner","No review","Goes stale"],"Like code",["In source control","Owned and reviewed","Has bugs that are tracked"],["Give it the same process."],"→","red","green"),
PT("Know your audience",[["Experience","Novice or expert.","blue"],["Domain knowledge","New to it, or deep.","green"],["Purpose","Seeking, or stumbling on.","purple"]],["Write for the reader you have."]),
PT("Types of document",[["Reference","Comments and API docs.","blue"],["Design documents","Before building.","green"],["Tutorials","Getting started.","purple"],["Conceptual","Why it works this way.","amber"],["Landing pages","Where to go.","red"]],["Each has one job. Do not mix them."]),
PT("Who, what, when, where, why",[["Who","Is it for?","blue"],["What","Is its purpose?","green"],["When","Was it written and reviewed?","purple"],["Where","Should it live?","amber"],["Why","Does it exist?","red"]],["State them, and the document has a shape."]),
RC("10",[["Like code","Owned and reviewed."],["Audience","Known."],["Types","Five."],["One job","Per document."],["Five Ws","Up front."],["Stale","Docs are bugs."]])
]});
//@@ ch11-testing-overview
CH({slug:"ch11-testing-overview",n:"11",part:"Part III · Processes",sub:"Why tests are written, and how they are classified.",end:"If you liked it, you should have put a test on it.",scenes:[
PT("Why write tests",[["Less debugging","Bugs caught at once.","blue"],["Confidence to change","Refactor freely.","green"],["Documentation","Of intended behaviour.","purple"],["Simpler reviews","Evidence of correctness.","amber"],["Better design","Testable code is modular.","red"]],["Automated tests are what make change sustainable."]),
VS("Size and scope","Size",["Small, medium, large","The resources a test needs"],"Scope",["Unit, integration, system","How much code it validates"],["Two separate dimensions."],"and","blue","purple"),
ST("The shape of a healthy suite",[["End to end","A few.","red",0.4],["Integration","Some.","amber",0.7],["Unit","Most.","green",1.0]],["Most tests are narrow, fast and deterministic."]),
VS("Flaky tests","A little flakiness",["Seems tolerable"],"At scale",["Some test fails on every run","People stop trusting the suite"],["Small tests, hermetic and deterministic, do not flake."],"→","amber","red"),
RC("11",[["Why","Change with confidence."],["Size","Resources used."],["Scope","Code covered."],["Pyramid","Mostly unit."],["Beyoncé rule","Test what you care about."],["Flakiness","Erodes trust."]])
]});
//@@ ch12-unit-testing
CH({slug:"ch12-unit-testing",n:"12",part:"Part III · Processes",sub:"Writing tests that last.",end:"Strive for unchanging tests.",scenes:[
VS("Brittle and unclear tests","Brittle",["Break when unrelated code changes"],"Unclear",["When they fail, nobody knows why"],["The two things that make tests a burden."],"and","red","amber"),
PT("Preventing brittle tests",[["Test through public APIs","As a user would.","blue"],["Test state","Not interactions.","green"],["Change tests","Only when requirements change.","purple"]],["A refactoring should never require a test change."]),
VS("Test behaviours, not methods","One test per method",["Grows as the method grows","Unclear what failed"],"One test per behaviour",["Given, when, then","Named for the behaviour"],["A method can have many behaviours."],"→","red","green"),
VS("DAMP, not DRY","DRY",["Shared helpers hide what the test does"],"DAMP",["Descriptive and meaningful phrases","Each test reads on its own"],["A little duplication is fine if it makes the test obvious."],"→","amber","green"),
RC("12",[["Unchanging","Tests."],["Public API","Test through it."],["State","Over interactions."],["Behaviours","Not methods."],["DAMP","Over DRY."],["Failures","Should explain themselves."]])
]});
//@@ ch13-test-doubles
CH({slug:"ch13-test-doubles",n:"13",part:"Part III · Processes",sub:"Standing in for real dependencies.",end:"Prefer the real thing.",scenes:[
PT("Three techniques",[["Faking","A lightweight working implementation.","blue"],["Stubbing","Canned return values.","green"],["Interaction testing","Checking which calls were made.","purple"]],["Each has a place, and a cost."]),
VS("Prefer real implementations","Mock everything",["Tests pass, the system fails","Tests know too much"],"Use the real thing when it is fast and deterministic",["Tests exercise real behaviour"],["Realism gives confidence."],"→","red","green"),
VS("State and interaction testing","Interaction",["“Was this method called?”","Breaks on refactoring"],"State",["“Is the result right?”","Survives refactoring"],["Reserve interaction testing for side effects you cannot observe."],"VS","amber","green"),
PT("Fakes",[["Maintained by the owner","Of the real implementation.","blue"],["Tested","Against the real thing.","green"],["Faithful","In the behaviours callers rely on.","purple"]],["A good fake is the next best thing to the real implementation."]),
RC("13",[["Doubles","Three techniques."],["Real","First choice."],["Fakes","Second."],["Stubs","Sparingly."],["Interactions","Last resort."],["Seams","Make code testable."]])
]});
//@@ ch14-larger-testing
CH({slug:"ch14-larger-testing",n:"14",part:"Part III · Processes",sub:"Tests that span more than one unit.",end:"Unit tests cannot find what lives between the units.",scenes:[
VS("What unit tests miss","Unit tests",["Assume the doubles are faithful","Cannot see configuration"],"Larger tests",["Real dependencies","Real configuration","Under load"],["Fidelity is what larger tests buy."],"→","amber","green"),
PT("The anatomy of a large test",[["System under test","What is deployed.","blue"],["Test data","Seeded, or copied.","green"],["Verification","Assertions, comparison or people.","purple"]],["Three choices define each one."]),
PT("Kinds of larger test",[["Functional","Several binaries together.","blue"],["Performance and load","Under stress.","green"],["Deployment configuration","Does it start?","purple"],["A/B diff","New against old.","amber"],["Probers and canaries","In production.","red"],["Disaster recovery","Rehearsed.","blue"]],["Each targets a different risk."]),
VS("Owning them","No owner",["Large tests rot","Failures are ignored"],"An owner",["Maintains them","Triages failures"],["A large test without an owner becomes noise."],"→","red","green"),
RC("14",[["Fidelity","Is the gain."],["Cost","Slower, flakier."],["Anatomy","SUT, data, verification."],["Kinds","Many."],["Production","Testing counts."],["Owner","Required."]])
]});
//@@ ch15-deprecation
CH({slug:"ch15-deprecation",n:"15",part:"Part III · Processes",sub:"Retiring old systems on purpose.",end:"Code is a liability, not an asset.",scenes:[
VS("Code is a liability","Asset view",["More code is more value"],"Liability view",["Every line must be maintained","Value is in the function it provides"],["If a newer system provides the same function, the old one is pure cost."],"→","amber","green"),
VS("Two kinds of deprecation","Advisory",["No deadline","“Please move when you can”"],"Compulsory",["A removal date","A team to help migrate"],["Advisory deprecation alone rarely finishes the job."],"or","amber","green"),
PT("Deprecation warnings",[["Actionable","Say what to do next.","blue"],["Relevant","Shown when someone is using it.","green"],["Not noisy","Or they are ignored.","purple"]],["A warning nobody can act on is clutter."]),
PT("Managing the process",[["An owner","For the deprecation.","blue"],["Milestones","Small, and visible.","green"],["Tooling","Discovery, migration, backsliding prevention.","purple"]],["Deprecation is a project, with engineering of its own."]),
RC("15",[["Liability","Not asset."],["Design","For removal."],["Advisory","Rarely completes."],["Compulsory","With help."],["Warnings","Actionable."],["Tools","Stop backsliding."]])
]});
//@@ ch16-version-control
CH({slug:"ch16-version-control",n:"16",part:"Part IV · Tools",sub:"How a large organisation keeps one history.",end:"One version, and one trunk.",scenes:[
VS("Source of truth","Unclear",["Several copies claim to be current"],"Clear",["One repository, one branch","Is the truth"],["Everything else derives from it."],"→","red","green"),
VS("Long-lived branches","Dev branches",["Drift from trunk","Painful merges","Hidden work"],"Trunk-based development",["Small, frequent commits to one branch","Unfinished work behind flags"],["Work in progress is like a branch. Keep it short."],"→","red","green"),
VS("The One-Version Rule","Many versions",["Diamond dependencies","Which one is linked?"],"One version",["Each dependency exists once in the repository"],["Developers must never have a choice of “which version”."],"→","red","green"),
VS("A monorepo","The benefit",["One version, atomic changes, shared tools"],"The cost",["Needs heavy tooling to scale"],["The principle matters more than the layout: one version, one source of truth."],"and","green","amber"),
RC("16",[["Truth","One source."],["Trunk","Develop on it."],["Branches","Short-lived."],["One version","Per dependency."],["Monorepo","One way to get there."],["Release branches","Are fine."]])
]});
//@@ ch17-code-search
CH({slug:"ch17-code-search",n:"17",part:"Part IV · Tools",sub:"A tool for understanding code.",end:"Most searches answer a question about how something is done.",scenes:[
PT("Questions it answers",[["Where","Is something defined?","blue"],["What","Does this do?","green"],["How","Have others done it?","purple"],["Why","Does it behave this way?","amber"],["Who and when","Changed it?","red"]],["Engineers search many times a day."]),
VS("Why a separate tool?","An IDE",["Knows your project"],"Code search",["Knows the whole codebase","Needs no setup","Shareable by link"],["Scale and speed set it apart."],"and","blue","green"),
PT("What makes it work",[["An index","Of all the code.","blue"],["Ranking","The likely answer first.","green"],["Low latency","Under a second.","purple"],["Cross-references","Jump to definitions and uses.","amber"]],["Slow search breaks the flow of thought."]),
VS("Trade-offs","Completeness",["Every branch, every version"],"Speed and relevance",["The head of trunk, well ranked"],["Index what people need, quickly."],"VS","amber","green"),
RC("17",[["Questions","Where, what, how, why, who."],["Whole codebase","Searchable."],["Links","Shareable."],["Index","And ranking."],["Latency","Matters."],["Cross-references","To navigate."]])
]});
//@@ ch18-build-systems
CH({slug:"ch18-build-systems",n:"18",part:"Part IV · Tools",sub:"From shell scripts to distributed, reproducible builds.",end:"Describe what to build, not how.",scenes:[
VS("Task-based and artifact-based","Task-based",["You write the steps","The tool cannot tell what a step touches"],"Artifact-based",["You declare targets and dependencies","The tool decides how"],["Giving up flexibility is what makes builds fast and correct."],"→","amber","green"),
PT("Hermetic builds",[["Declared inputs","Nothing else is visible.","blue"],["Deterministic","Same inputs, same output.","green"],["Sandboxed","No surprises from the machine.","purple"],["So","Results can be cached and shared.","amber"]],["Reproducibility is the foundation."]),
PT("Distributed builds",[["Remote caching","Reuse what someone already built.","blue"],["Remote execution","Spread actions across machines.","green"],["Only what changed","Is rebuilt.","purple"]],["Possible only because builds are hermetic."]),
VS("Module granularity","Few large modules",["Everything rebuilds"],"Many small modules",["Precise rebuilds","Strict visibility"],["Small targets, with minimal visibility, keep builds fast."],"→","red","green"),
RC("18",[["Artifact-based","Builds."],["Declare","Dependencies."],["Hermetic","And deterministic."],["Cache","Remotely."],["Small","Targets."],["Dependencies","One version."]])
]});
//@@ ch19-critique
CH({slug:"ch19-critique",n:"19",part:"Part IV · Tools",sub:"The tool behind the code review process.",end:"Tooling shapes how review feels.",scenes:[
PL("The review flow",[["Create","A change."],["Request","A review.","blue"],["Comment","And discuss.","purple"],["Modify","And reply.","amber"],["Approve","Then commit.","green"]],["Each stage has support in the tool."],{tc:"blue"}),
PT("What the tool provides",[["Diffs","Clear, with history between snapshots.","blue"],["Analysis results","Shown beside the code.","green"],["Whose turn","It is to act.","purple"],["Tight integration","With search, tests and the editor.","amber"]],["Reviewers see evidence, not just code."]),
VS("Whose turn is it?","Unclear",["Changes wait while both sides assume the other will act"],"Clear",["The tool shows who must act next"],["Removing ambiguity removes waiting."],"→","red","green"),
VS("Principles","Heavy process",["Many steps","Slow"],"Simplicity",["Fast for the common case","Trust between colleagues"],["The tool reflects the culture: speed, simplicity and trust."],"→","amber","green"),
RC("19",[["Flow","Create to commit."],["Diffs","Clear."],["Analysis","In the review."],["Turn","Always known."],["Integration","With other tools."],["Culture","Shapes the tool."]])
]});
//@@ ch20-static-analysis
CH({slug:"ch20-static-analysis",n:"20",part:"Part IV · Tools",sub:"Finding problems without running the code.",end:"Focus on developer happiness.",scenes:[
PT("What makes analysis effective",[["Scalable","Runs on changes, not the whole codebase.","blue"],["Usable","Few false positives.","green"],["Actionable","With a suggested fix.","purple"],["In the workflow","Shown at review time.","amber"]],["Analysis that annoys people gets switched off."]),
VS("Effective false positives","Technically correct",["The warning is true","Nobody acts on it"],"Effectively useful",["Developers agree, and fix it"],["Measure a check by whether people act on it."],"→","amber","green"),
VS("Where to show results","In a separate report",["Ignored"],"In code review",["Seen by author and reviewer","At the moment of change"],["Make it part of the core workflow."],"→","red","green"),
PT("A platform",[["Many analysers","Behind one interface.","blue"],["Contributed by experts","Across the company.","green"],["Feedback","A “not useful” button.","purple"],["Fixes","One click to apply.","amber"]],["Empower users to contribute checks."]),
RC("20",[["Happiness","Of developers."],["False positives","Kept low."],["Workflow","At review."],["Fixes","Suggested."],["Feedback","Collected."],["Platform","Open to contribution."]])
]});
//@@ ch21-dependency-management
CH({slug:"ch21-dependency-management",n:"21",part:"Part IV · Tools",sub:"Managing code you do not control.",end:"Prefer source control problems to dependency problems.",scenes:[
VS("Why it is hard","Your code",["You control every version"],"Dependencies",["Others decide when to change","On their schedule"],["Dependency management is coordination across organisations."],"→","green","red"),
VS("The diamond problem","A and B",["Both depend on C"],"The clash",["A needs one version of C","B needs another"],["No version satisfies both."],"→","amber","red"),
PT("Approaches",[["Nothing changes","Never upgrade. Safe until it is not.","blue"],["Semantic versioning","A promise about compatibility.","green"],["Bundled distributions","Versions tested together.","purple"],["Live at Head","Always the latest, with tests.","amber"]],["Each trades stability against freshness."]),
VS("The limits of semantic versioning","It promises",["A major number means breaking"],"In practice",["Any change breaks someone","Numbers are estimates by people"],["A version number compresses a lot of information, with loss."],"→","amber","blue"),
RC("21",[["Harder","Than version control."],["Diamonds","Cause conflicts."],["SemVer","An estimate."],["Bundles","Tested sets."],["Live at Head","With tests."],["Import","With care."]])
]});
//@@ ch22-large-scale-changes
CH({slug:"ch22-large-scale-changes",n:"22",part:"Part IV · Tools",sub:"Changing thousands of files safely.",end:"No change is too large, if it can be split.",scenes:[
VS("Why atomic changes fail at scale","One huge commit",["Merge conflicts","Cannot be tested or reviewed","Cannot be rolled back"],"Many small ones",["Each tested and reviewed on its own"],["Large changes are made of independent pieces."],"→","red","green"),
PL("The process",[["Authorise","Experts agree it is worth doing."],["Create","Usually with a tool.","blue"],["Shard","Into small changes.","purple"],["Test and review","Each one.","amber"],["Submit","And clean up.","green"]],["Infrastructure spreads the work."],{tc:"blue"}),
VS("Who does the migration?","Each team migrates itself",["Slow","Uneven","Unpopular"],"The infrastructure team does it",["Expert in the change","Economies of scale"],["Whoever makes the change owns migrating the users."],"→","red","green"),
PT("What makes it possible",[["Tests","Everywhere.","blue"],["Tooling","To generate and split changes.","green"],["Policies","For global approval.","purple"],["Culture","That accepts being changed by others.","amber"]],["Without tests, nobody would dare."]),
RC("22",[["Split","Large changes."],["Automate","Their creation."],["Test","Each shard."],["Central team","Migrates."],["Tests","Enable it."],["Culture","Accepts it."]])
]});
//@@ ch23-continuous-integration
CH({slug:"ch23-continuous-integration",n:"23",part:"Part IV · Tools",sub:"Testing every change, continuously.",end:"Find the problem at the point it is cheapest to fix.",scenes:[
PL("Feedback loops",[["Edit and compile","Seconds."],["Presubmit","Minutes.","blue"],["Post-submit","Tens of minutes.","purple"],["Release candidate","Hours.","amber"],["Production","Canaries and monitoring.","green"]],["Each later loop finds problems the earlier ones cannot, at higher cost."],{tc:"blue"}),
VS("Presubmit and post-submit","Presubmit",["Fast tests only","Blocks the change"],"Post-submit",["Everything else","Finds what slipped through"],["Run the fast, reliable tests before merging."],"and","blue","purple"),
VS("Actionable feedback","“Something failed”",["Engineers dig through logs"],"Actionable",["Which test","Which change","What to do"],["A failure nobody can act on is ignored."],"→","red","green"),
PT("Challenges",[["Presubmit time","Too slow, and people work round it.","blue"],["Flakiness","Erodes trust.","green"],["Culprit finding","Which change broke it.","purple"],["Hermetic testing","Removes shared environments.","amber"]],["Continuous integration is alerting for developers."]),
RC("23",[["Loops","Fast to slow."],["Presubmit","Fast tests."],["Post-submit","The rest."],["Actionable","Results."],["Hermetic","Tests."],["Culprits","Found automatically."]])
]});
//@@ ch24-continuous-delivery
CH({slug:"ch24-continuous-delivery",n:"24",part:"Part IV · Tools",sub:"Releasing often.",end:"Faster is safer.",scenes:[
VS("Faster is safer","Rare, big releases",["Many changes at once","Hard to find the cause"],"Frequent, small ones",["Few changes each","Easy to roll back"],["Small batches lower risk."],"→","red","green"),
PT("Idioms of delivery",[["Agility","Release frequently, in small batches.","blue"],["Automation","Remove repeated manual work.","green"],["Isolation","Modular architecture.","purple"],["Reliability","Monitor crashes and latency.","amber"],["Data-driven","A/B test.","red"],["Phased rollout","A few users first.","blue"]],["Velocity is a team sport."]),
VS("Evaluate changes in isolation","Bundled",["A feature ships with the binary"],"Flag-guarded",["Deployed switched off","Turned on for a few, then more"],["Separate deploying from launching."],"→","red","green"),
VS("No binary is perfect","Wait for perfect",["The release slips","More piles in"],"Meet the train",["Ship what is ready","The next train is soon"],["A release train leaves on time."],"→","red","green"),
RC("24",[["Faster","Is safer."],["Small","Batches."],["Flags","Isolate changes."],["Reality","Is the benchmark."],["Shift left","Decisions."],["Trains","Leave on time."]])
]});
//@@ ch25-compute-as-a-service
CH({slug:"ch25-compute-as-a-service",n:"25",part:"Part IV · Tools",sub:"Running code on shared, automated infrastructure.",end:"Write software so that it can be run by automation.",scenes:[
VS("Taming the compute environment","By hand",["A person starts each job on a machine"],"Automated",["A scheduler places and restarts jobs"],["Toil must not grow with the size of the fleet."],"→","red","green"),
VS("Pets and cattle","Pets",["Named","Repaired when sick"],"Cattle",["Interchangeable","Replaced when sick"],["Software must tolerate any single instance disappearing."],"→","amber","green"),
VS("Batch and serving","Batch",["Finishes","Cares about throughput","Can be interrupted"],"Serving",["Runs for ever","Cares about latency","Needs spare capacity"],["Sharing machines between them uses the fleet well."],"and","blue","purple"),
PT("Choosing a service",[["Level of abstraction","Machines, containers or functions.","blue"],["Centralised or custom","One platform or several.","green"],["Public or private","Cloud or your own.","purple"],["Lock-in","What leaving would cost.","amber"]],["The more that is managed for you, the less you can control."]),
RC("25",[["Automate","Scheduling."],["Containers","Isolate."],["Cattle","Not pets."],["State","Kept outside."],["Batch","And serving."],["Abstraction","Choose the level."]])
]});
