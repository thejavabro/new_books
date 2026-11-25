//@@ ch01-problem-of-delivering-software
CH({slug:"ch01-problem-of-delivering-software",n:"1",part:"Part I · Foundations",sub:"Why releases hurt, and the principles that fix them.",end:"If it hurts, do it more often.",scenes:[
VD("Three release antipatterns",[["Deploying software by hand",false,"A long runbook, different every time.","AVOID","red"],["Seeing a production-like environment only at the end",false,"Problems found too late to fix cheaply.","AVOID","red"],["Managing production configuration by hand",false,"Nobody knows what is really there.","AVOID","red"]],["Habits the authors see again and again."],{sw:170}),
VS("By hand versus pressing a button","Manual",["Many documented steps","Experts needed","Each release is an event"],"Automated",["One action","The same every time","Anyone can do it"],["The script is the documentation."],"→","red","green"),
PL("Every change triggers feedback",[["Check in","A change."],["Build and test","Automatically.","blue"],["Deploy","To a production-like environment.","purple"],["Learn","Within minutes.","green"]],["Every change, of code, configuration, environment or data, runs the whole process."],{tc:"blue"}),
PT("Principles of delivery",[["Repeatable process","Reliable and automated.","blue"],["Everything in version control","Not only code.","green"],["Build quality in","Find defects early.","purple"],["Done means released","Not “dev complete”.","amber"],["Everyone is responsible","Not one team.","red"],["Keep improving","The process itself.","blue"]],["Bring the pain forward, and it shrinks."]),
RC("1",[["Antipatterns","Three."],["Automate","The release."],["Feedback","On every change."],["Often","Makes it smaller."],["Quality","Built in."],["Done","Means released."]])
]});
//@@ ch02-configuration-management
CH({slug:"ch02-configuration-management",n:"2",part:"Part I · Foundations",sub:"Keeping everything that defines the system under control.",end:"Keep absolutely everything in version control.",scenes:[
PT("What belongs in version control",[["Source code","And tests.","blue"],["Build and deploy scripts","The process.","green"],["Configuration","For every environment.","purple"],["Database scripts","Schema and data.","amber"],["Infrastructure definitions","Servers and networks.","red"]],["Enough to rebuild any environment from scratch."]),
VS("Check in regularly to trunk","Long-lived branches",["Work hidden from others","Painful merges"],"Small, frequent commits to trunk",["Integration is continuous","Problems surface early"],["Checking in publishes your work. Do it in small, safe steps."],"→","red","green"),
PT("When configuration is injected",[["Build time","Baked into the binary.","blue"],["Package time","Added when bundling.","green"],["Deploy time","Supplied by the deploy script.","purple"],["Run time","Read at start-up or later.","amber"]],["The later it is injected, the more the same binary can be reused."]),
VS("Environments are not works of art","Hand-built",["Unique","Nobody can recreate it","Fear of touching it"],"Reproducible",["Defined in version control","Rebuilt at will"],["If rebuilding is cheaper than repairing, rebuild."],"→","red","green"),
RC("2",[["Scope","Everything."],["Trunk","Check in often."],["Messages","Say why."],["Dependencies","Managed."],["Configuration","Tested like code."],["Environments","Reproducible."]])
]});
//@@ ch03-continuous-integration
CH({slug:"ch03-continuous-integration",n:"3",part:"Part I · Foundations",sub:"Integrating all the time, so that it is never an event.",end:"Integration should be a non-event.",scenes:[
VS("Integration as a non-event","Without CI",["Software assumed broken","Until someone proves otherwise"],"With CI",["Proven to work with every change","A break is fixed in minutes"],["The default state flips."],"→","red","green"),
PT("What you need before you start",[["Version control","Everything in it.","blue"],["An automated build","Runs from the command line.","green"],["Team agreement","To keep it green.","purple"]],["Continuous integration is a practice, not a tool."]),
VD("The essential practices",[["Check in on a broken build",false,"You make it harder to fix.","NEVER","red"],["Run the commit tests before checking in",true,"Locally.","ALWAYS","green"],["Go home on a broken build",false,"Fix it, or revert.","NEVER","red"],["Comment out a failing test",false,"Find out why it fails.","NEVER","red"],["Be ready to revert",true,"To the last good version.","ALWAYS","green"]],["When the build breaks, fixing it is the team’s first job."],{sw:170}),
VS("Distributed teams","The problem",["Sites and time zones","A break while others sleep"],"The answer",["The same single pipeline","Reverting is normal"],["Spread-out teams need continuous integration even more."],"→","amber","green"),
RC("3",[["Non-event","Integration."],["Prerequisites","Three."],["Often","Check in."],["Green","Keep it."],["Revert","Readily."],["Practice","Not a tool."]])
]});
//@@ ch04-testing-strategy
CH({slug:"ch04-testing-strategy",n:"4",part:"Part I · Foundations",sub:"Which tests to write, who owns them and when they run.",end:"Stop depending on inspection.",scenes:[
PT("The testing quadrants",[["Functional acceptance","Business-facing. Guides development. Automated.","green"],["Showcases, exploratory","Business-facing. Critiques the product. Manual.","amber"],["Unit, component, deployment","Technology-facing. Guides development. Automated.","blue"],["Capacity, security","Technology-facing. Critiques the product.","purple"]],["Two questions sort every test: who is it for, and does it guide the work or judge the result?"]),
PT("Five kinds of test double",[["Dummy","Passed, never used.","blue"],["Fake","A working shortcut.","green"],["Stub","Returns canned answers.","purple"],["Spy","Records what happened.","amber"],["Mock","Checks what was expected.","red"]],["Each replaces part of the system with something simpler."]),
VS("Where you start decides the strategy","New project",["Automate from the first story"],"Legacy system",["Cover the most valuable paths first","Add tests as you change code"],["Do not try to retrofit everything at once."],"or","green","amber"),
PT("Process",[["Kick-off","Agree the acceptance criteria per story.","blue"],["Showcase","Demonstrate when done.","green"],["Bugs","Fix them at once, or prioritise like features.","purple"]],["Testing is a team activity, not a phase."]),
RC("4",[["Inspection","Is too late."],["Quadrants","Four kinds of test."],["Acceptance","Know when you are done."],["Doubles","Five kinds."],["Start","Where you are."],["Team","Owns the tests."]])
]});
//@@ ch05-deployment-pipeline
CH({slug:"ch05-deployment-pipeline",n:"5",part:"Part II · The deployment pipeline",sub:"The automated path from check-in to release.",end:"Build once. Promote the same binary.",scenes:[
PL("A basic deployment pipeline",[["Commit stage","Compile, unit tests, analysis."],["Acceptance stage","Automated acceptance tests.","blue"],["Capacity stage","Nonfunctional tests.","purple"],["Manual testing","Exploratory, showcases.","amber"],["Release","To production.","green"]],["Every check-in creates a release candidate. Most are eliminated early."],{tc:"blue"}),
VD("Pipeline practices",[["Only build your binaries once",true,"Test what you will release.","DO","green"],["Deploy the same way to every environment",true,"The script is tested many times.","DO","green"],["Smoke-test every deployment",true,"Is it up?","DO","green"],["If any part fails, stop the line",true,"The team fixes it first.","DO","green"]],["A pipeline is the value stream, automated."],{sw:150}),
VS("Why build once","Rebuild at each stage",["What you test is not what you ship"],"Build once",["Stored in an artifact repository","The same bytes all the way"],["Rebuilding introduces differences."],"→","red","green"),
PL("Implementing a pipeline",[["Map the value stream","As it is."],["Automate build and deploy","First.","blue"],["Automate tests","Unit and analysis.","purple"],["Add acceptance tests","Then.","amber"],["Evolve","As you learn.","green"]],["Measure cycle time, and attack the constraint."],{tc:"blue"}),
RC("5",[["Pipeline","Check-in to release."],["Stages","Fast first."],["Once","Build binaries."],["Same","Deployment everywhere."],["Stop","The line."],["Cycle time","The measure."]])
]});
//@@ ch06-build-deployment-scripting
CH({slug:"ch06-build-deployment-scripting",n:"6",part:"Part II · The deployment pipeline",sub:"Scripts as the working definition of how to build and deploy.",end:"The same script deploys to every environment.",scenes:[
PT("Principles of scripting",[["One script per stage","Of the pipeline.","blue"],["The right tool","For build, and for deploy.","green"],["The same scripts everywhere","From laptop to production.","purple"],["Use the OS packaging tools","Where you can.","amber"]],["A build tool models a network of dependencies."]),
VS("Idempotent deployment","Not idempotent",["The result depends on what was there"],"Idempotent",["The same end state every time","Whatever the starting point"],["Deployment should leave the target in a known state."],"→","red","green"),
ST("Deploy and test in layers",[["Application configuration","Then smoke-test.","green",0.4],["Application","Binaries and services.","blue",0.6],["Middleware","Servers and brokers.","purple",0.8],["Operating system","The base.","amber",1.0]],["Bottom up, testing each layer before the next."]),
VD("Tips",[["Use relative paths",true,"So the build runs anywhere.","DO","green"],["Eliminate manual steps",true,"Each is a source of error.","DO","green"],["Trace a binary to its version",true,"Know what is deployed.","DO","green"],["Check binaries into source control",false,"Use an artifact repository.","AVOID","red"]],["Small habits with an outsized effect."],{sw:150}),
RC("6",[["Scripts","Are the process."],["Tools","Fit for purpose."],["Same","In every environment."],["Idempotent","Deployment."],["Layers","Bottom up."],["Trace","Every binary."]])
]});
//@@ ch07-commit-stage
CH({slug:"ch07-commit-stage",n:"7",part:"Part II · The deployment pipeline",sub:"The first, fastest stage.",end:"Fast, useful feedback on every check-in.",scenes:[
PL("The entrance to the pipeline",[["Compile","If needed."],["Commit tests","Mostly unit tests.","blue"],["Analyse","Code quality checks.","purple"],["Package","Build the binaries.","amber"],["Store","In the artifact repository.","green"]],["Aim for a few minutes, and never more than about ten."],{tc:"blue"}),
VS("What should break the commit stage?","Traditionally",["Compile errors","Failing tests"],"Also",["Coverage below a threshold","New warnings","Style and complexity limits"],["Fail on anything you never want to let through."],"and","blue","amber"),
ST("Shape the suite like a pyramid",[["End-to-end","A few.","red",0.4],["Service and component","Some.","amber",0.7],["Unit","Many, fast.","green",1.0]],["The bulk of the tests run without a database, a network or a user interface."]),
VS("Stub versus mock","Stub",["Supplies answers","The test checks the result"],"Mock",["Expects certain calls","The test checks the interaction"],["Both keep commit tests fast by isolating the unit."],"VS","blue","purple"),
RC("7",[["Commit stage","The gate."],["Fast","Minutes."],["Break","On more than compile."],["Artifacts","Stored once."],["Pyramid","Mostly unit tests."],["Doubles","Isolate."]])
]});
//@@ ch08-acceptance-testing
CH({slug:"ch08-acceptance-testing",n:"8",part:"Part II · The deployment pipeline",sub:"Proving that each story does what the business asked.",end:"Layer the tests, so they survive change.",scenes:[
ST("Layer your acceptance tests",[["Application driver","Knows how to talk to the system.","blue",1.0],["Test implementation","Uses the domain language.","purple",0.7],["Acceptance criteria","Given, when, then.","green",0.4]],["When the interface changes, only the driver layer changes."]),
VS("Executable specifications","Documents",["Drift from the software"],"Executable criteria",["Written with the business","Run against every build","Always current"],["Acceptance criteria become the tests."],"→","amber","green"),
VS("Waiting for asynchronous results","Sleep",["Slow when it works","Flaky when it does not"],"Poll for the event",["Proceed as soon as it happens","Fail on a time limit"],["Has it failed, or is it just not there yet?"],"→","red","green"),
PT("Keeping the stage healthy",[["The whole team owns it","Not only testers.","blue"],["Test doubles","For external systems.","green"],["Parallel runs","Across machines.","purple"],["Refactor","Common tasks.","amber"]],["A failing acceptance stage stops the line."]),
RC("8",[["Acceptance","Per story."],["Layers","Three."],["Driver","Absorbs change."],["State","Each test sets its own."],["Async","Poll, do not sleep."],["Owned","By everyone."]])
]});
//@@ ch09-nonfunctional-requirements
CH({slug:"ch09-nonfunctional-requirements",n:"9",part:"Part II · The deployment pipeline",sub:"Capacity, performance and other qualities, tested continuously.",end:"Capture them as numbers, and test them in the pipeline.",scenes:[
PT("Pin down the words",[["Performance","Time for one transaction.","blue"],["Throughput","Transactions in a period.","green"],["Capacity","Maximum throughput at acceptable response times.","purple"]],["Three terms that are often confused."]),
VS("Two ways to get it wrong","Ignore until the end",["Find out in production"],"Optimise prematurely",["Complex code for problems you do not have"],["Analyse the requirements, then measure."],"VS","red","amber"),
PT("What to measure",[["Scalability","How does it respond as load grows?","blue"],["Longevity","Does it degrade over time?","green"],["Throughput","Transactions per second.","purple"],["Load","What happens at production volume?","amber"]],["Set thresholds that fail the build when capacity regresses."]),
VS("The capacity-testing environment","Ideal",["A replica of production"],"Affordable",["A scaled-down slice","Trends, not absolute numbers"],["Absolute measurements need production-like hardware."],"or","green","amber"),
RC("9",[["Words","Defined."],["Tension","Qualities trade off."],["Numbers","Not adjectives."],["Measure","Before optimising."],["Thresholds","In the pipeline."],["Environment","As like production as possible."]])
]});
//@@ ch10-deploying-releasing
CH({slug:"ch10-deploying-releasing",n:"10",part:"Part II · The deployment pipeline",sub:"Getting a release out, and getting it back if needed.",end:"Releasing should be boring.",scenes:[
PT("Start with a release strategy",[["Who","Is responsible for each environment.","blue"],["How","Deployments and rollbacks are done.","green"],["What","Is monitored.","purple"],["When","Releases happen.","amber"]],["Deploy to a production-like environment from the first iteration."]),
VS("Blue-green deployments","Blue",["The live version","Still running"],"Green",["The new version, beside it","Switch the router to release","Switch back to roll back"],["Two identical environments make release and rollback a routing change."],"and","blue","green"),
PL("Canary releasing",[["Deploy","To a small subset of servers."],["Route","A few users to it.","blue"],["Watch","Errors and behaviour.","amber"],["Widen","Or pull it back.","green"]],["Risk is limited to the users on the canary."],{tc:"blue"}),
VD("Under pressure",[["Emergency fixes go through the pipeline",true,"The process exists for exactly this.","DO","green"],["Roll back by redeploying the last good version",true,"Using the same script.","DO","green"],["Patch production by hand",false,"Now it matches nothing.","NEVER","red"]],["Continuous deployment takes it to the end: every passing change is released."],{sw:160}),
RC("10",[["Strategy","First."],["Day one","Deploy early."],["Rollback","By redeploying."],["Blue-green","Switch the router."],["Canary","A few users first."],["Emergencies","Use the pipeline."]])
]});
//@@ ch11-infrastructure-environments
CH({slug:"ch11-infrastructure-environments",n:"11",part:"Part III · The delivery ecosystem",sub:"Treating servers and environments as part of the system.",end:"Infrastructure is part of what you deliver.",scenes:[
VS("What operations needs","Development wants",["Change, quickly"],"Operations wants",["Stability","Auditability","Recovery when things fail"],["Automation serves both."],"and","blue","amber"),
PL("Model infrastructure in version control",[["Baseline","The operating system image."],["Configure","Automatically.","blue"],["Deploy","Middleware and applications.","purple"],["Verify","With monitoring.","green"]],["Everything that defines an environment is versioned."],{tc:"blue"}),
VS("Virtualisation and the pipeline","Physical",["Slow to provision","Environments drift"],"Virtual",["Created from a template","Thrown away after use"],["New environments in minutes make every stage production-like."],"→","amber","green"),
PT("A monitoring strategy",[["Instrument","Applications and infrastructure.","blue"],["Store","The data.","green"],["Dashboards","So people can see it.","purple"],["Alerts","So people know.","amber"]],["Monitoring is the last stage of the feedback loop."]),
RC("11",[["Infrastructure","Is in scope."],["Operations","Has needs."],["Versioned","Environments."],["Automated","Provisioning."],["Virtual","And disposable."],["Monitor","Everything."]])
]});
//@@ ch12-managing-data
CH({slug:"ch12-managing-data",n:"12",part:"Part III · The delivery ecosystem",sub:"Evolving a database without losing what is in it.",end:"Version the database, and migrate in small steps.",scenes:[
VS("Why data is different","Code",["Throw away the old, deploy the new"],"Data",["Must survive every release","Rollback cannot discard it"],["Data needs its own approach."],"VS","blue","amber"),
PL("Version your database",[["Number each change","A script per change."],["Store the version","In the database.","blue"],["Apply in order","What is missing.","purple"],["Roll forward","Automatically, in the pipeline.","green"]],["Every change to the database is made by a script in version control."],{tc:"blue"}),
VS("Decouple application and database changes","Coupled",["Both must change at the same moment"],"Decoupled",["The database changes first, compatibly","The application follows","Clean up later"],["Then either can be rolled back without the other."],"→","red","green"),
PT("Managing test data",[["Each test","Creates the data it needs.","blue"],["Isolation","Tests do not share state.","green"],["Small sets","Keep tests fast.","purple"],["Production copies","Only for capacity and staging.","amber"]],["Tests that depend on each other’s data fail unpredictably."]),
RC("12",[["Data","Survives releases."],["Scripts","For every change."],["Versioned","Databases."],["Rollback","Without loss."],["Decouple","From the application."],["Test data","Per test."]])
]});
//@@ ch13-components-dependencies
CH({slug:"ch13-components-dependencies",n:"13",part:"Part III · The delivery ecosystem",sub:"Staying releasable while making big changes.",end:"Keep the mainline releasable, always.",scenes:[
PT("Four ways to stay releasable",[["Hide new features","Until they are finished.","blue"],["Small increments","Each one releasable.","green"],["Branch by abstraction","For large changes.","purple"],["Components","Decouple what changes at different rates.","amber"]],["None of them needs a long-lived branch."]),
PL("Branch by abstraction",[["Add an abstraction","Over the part to replace."],["Point callers at it","Step by step.","blue"],["Build the new version","Behind it.","purple"],["Switch over","When ready.","amber"],["Remove the old","And perhaps the abstraction.","green"]],["The system works at every step."],{tc:"blue"}),
VS("Kinds of dependency","Libraries",["Built by others","Change rarely"],"Components",["Built by you","Change often"],["Dependency hell: two things need different versions of a third."],"and","blue","purple"),
VS("When to trigger builds","Always rebuild",["On every upstream change","Slow, and often broken"],"Cautious optimism",["Use a known good version","Try the newest, and keep it only if it passes"],["A build ladder climbs through the dependency graph in order."],"→","amber","green"),
RC("13",[["Releasable","Always."],["Toggles","Hide the unfinished."],["Abstraction","Instead of a branch."],["Components","Decouple."],["Dependencies","Managed."],["Optimism","Cautious."]])
]});
//@@ ch14-advanced-version-control
CH({slug:"ch14-advanced-version-control",n:"14",part:"Part III · The delivery ecosystem",sub:"Branching, merging and the patterns that work.",end:"Develop on mainline.",scenes:[
PT("Three good reasons to branch",[["Release","To stabilise a version.","blue"],["Spike","To explore, then throw away.","green"],["Short-lived change","That cannot be made incrementally.","purple"]],["Other reasons usually postpone a problem."]),
VS("Branches are easy; merging is hard","Creating",["Cheap, like a parallel universe"],"Merging",["The longer apart, the worse","Conflicts no tool can see"],["Semantic conflicts appear only when the code runs."],"→","green","red"),
VD("Branching patterns compared",[["Develop on mainline",true,"Continuous integration, in the true sense.","PREFER","green"],["Branch for release",true,"Short, and for fixes only.","FINE","blue"],["Branch by feature",false,"Integration is deferred.","CAREFUL","amber"],["Branch by team",false,"Teams drift apart.","CAREFUL","amber"]],["The authors’ strong recommendation is mainline development."],{sw:200}),
VS("Distributed version control","Strength",["Everyone has a full repository","Work offline, share freely"],"Risk",["It is easy to drift apart for longer"],["The tool does not decide how often you integrate. You do."],"and","green","amber"),
RC("14",[["Branch","For three reasons."],["Locking","Switch it off."],["Merging","Is the cost."],["Mainline","Preferred."],["Release branches","Short."],["DVCS","Still integrate often."]])
]});
//@@ ch15-managing-continuous-delivery
CH({slug:"ch15-managing-continuous-delivery",n:"15",part:"Part III · The delivery ecosystem",sub:"Maturity, risk and compliance.",end:"Performance and conformance are not opposites.",scenes:[
ST("A maturity model",[["Optimising","Improving the process itself.","green",0.4],["Quantitatively managed","Measured and controlled.","blue",0.55],["Consistent","Automated across the lifecycle.","purple",0.7],["Repeatable","Documented, partly automated.","amber",0.85],["Regressive","Unrepeatable, reactive.","red",1.0]],["Find where you are for each practice, then improve the weakest."]),
PL("The lifecycle of a project",[["Identification","Is it worth doing?"],["Inception","What will it take?","blue"],["Initiation","Set up the basics.","purple"],["Develop and deploy","Iteratively.","amber"],["Operation","Run and evolve.","green"]],["Compatible with most iterative methods."],{tc:"blue"}),
VD("Common delivery problems",[["Infrequent or buggy deployments",false,"Automate, and deploy more often.","FIX","amber"],["Poor application quality",false,"Test earlier, as a team.","FIX","amber"],["A poorly managed integration process",false,"Fix the build first.","FIX","amber"],["Poor configuration management",false,"Put everything in version control.","FIX","amber"]],["Each symptom points to a missing practice."],{sw:150}),
VS("Compliance and auditing","Manual control",["Locked-down environments","Approvals on paper"],"The pipeline as control",["Every change traced","Who approved what, recorded","Enforced automatically"],["Automation gives auditors better evidence than documents."],"→","amber","green"),
RC("15",[["Both","Speed and control."],["Maturity","Five levels."],["Lifecycle","Five phases."],["Risk","Identify and mitigate."],["Symptoms","Lead to causes."],["Audit","From the pipeline."]])
]});
