//@@ ch01-living-in-production
CH({slug:"ch01-living-in-production",n:"1",part:"Introduction",sub:"Why passing QA is not the goal.",end:"Design for production, not for the test lab.",scenes:[
VS("Aiming for the right target","Designed to pass QA",["Features work in a quiet lab"],"Designed for production",["Survives real load, real failures, real users"],["Software spends its life in production. Most design decisions should serve that."],"→","red","green"),
VS("The scope of the challenge","Then",["A few hundred internal users","Office hours"],"Now",["Millions of users","Always on","Many integrations"],["Uptime expectations rose as architectures grew more complex."],"→","muted","blue"),
PT("A million dollars here, a million there",[["Downtime","Lost revenue and reputation.","blue"],["Operations","The cost of running it for years.","green"],["Early decisions","Fix those costs for a long time.","purple"]],["Design choices made in a hurry are paid for across the system’s life."]),
VS("Pragmatic architecture","Ivory tower",["Perfect on paper","Detached from operations"],"Pragmatic",["Shaped by how it will run","Changes as reality teaches"],["The book takes the second view."],"VS","amber","green"),
RC("1",[["Production","Is the target."],["QA","Is not enough."],["Scale","Has grown."],["Cost","Lives in operations."],["Early choices","Last."],["Pragmatic","Architecture."]])
]});
//@@ ch02-airline-case-study
CH({slug:"ch02-airline-case-study",n:"2",part:"Part I · Create stability",sub:"How one uncaught exception stopped an airline.",end:"A small fault, with nothing to stop it spreading.",scenes:[
PL("How it unfolded",[["A routine failover","Of a database."],["One exception","Not handled in one place.","amber"],["A leaked resource","Connections never returned to the pool.","red"],["Threads blocked","Waiting for a connection.","red"],["Check-in stopped","Everywhere.","red"]],["Each step was ordinary. Together they grounded flights."],{tc:"blue"}),
VS("The post-mortem","Tempting conclusion",["Find the bug, fix the bug"],"The real lesson",["Bugs will happen","What stops one from taking everything down?"],["You cannot test away every bug. You can limit its reach."],"→","amber","green"),
PT("What was missing",[["A timeout","On the call that hung.","blue"],["Isolation","Between the caller and the failing service.","green"],["A way to fail fast","In place of waiting.","purple"]],["Any one of them would have contained the damage."]),
VS("Hunting for the cause","Logs and thread dumps",["Showed every thread waiting in the same place"],"The code",["A resource not released on an error path"],["Thread dumps are how production tells you where it is stuck."],"and","blue","amber"),
RC("2",[["Trigger","A routine failover."],["Fault","One unhandled exception."],["Spread","Through blocked threads."],["Lesson","Contain, do not just fix."],["Timeouts","Were missing."],["Dumps","Show where it hangs."]])
]});
//@@ ch03-stabilize-your-system
CH({slug:"ch03-stabilize-your-system",n:"3",part:"Part I · Create stability",sub:"The vocabulary of failure.",end:"Faults become errors. Errors become failures.",scenes:[
PL("Chain of failure",[["Fault","A condition that creates an incorrect state."],["Error","Visibly incorrect behaviour.","amber"],["Failure","An unresponsive system.","red"]],["Faults will happen. The job is to keep them from becoming failures."],{tc:"blue"}),
PT("Defining stability",[["Transaction","One unit of work.","blue"],["Impulse","A sudden shock, such as a traffic spike.","green"],["Stress","A force applied over a long time.","purple"],["Longevity","How long it runs without a restart.","amber"]],["A robust system keeps processing transactions under both impulse and stress."]),
VS("Two philosophies","Fault tolerance",["Catch and recover from every exception"],"Let it crash",["Restart cleanly from a known state"],["Both accept that faults happen. They differ in where recovery lives."],"or","blue","purple"),
VS("Crack stoppers","Tightly coupled",["A crack in one part runs through the whole"],"Decoupled",["Boundaries stop it"],["Stability patterns are crack stoppers. Antipatterns are how cracks spread."],"→","red","green"),
RC("3",[["Fault","The cause."],["Error","The symptom."],["Failure","The outage."],["Impulse","And stress."],["Longevity","Test for it."],["Stoppers","Limit the spread."]])
]});
//@@ ch04a-antipatterns-integration
CH({slug:"ch04a-antipatterns-integration",n:"4",part:"Part I · Create stability",sub:"Where systems touch, and how failure crosses.",end:"Integration points are the number one killer.",scenes:[
PT("Points of contact",[["Integration points","Every call out can hang or fail.","blue"],["Chain reactions","One node fails, the rest take its load.","green"],["Cascading failures","A failure in one layer spreads to its callers.","purple"],["Users","Too many, or too demanding.","amber"],["Blocked threads","Waiting on something that never comes.","red"],["Self-denial attacks","Your own promotion overloads you.","blue"]],["Six ways trouble enters."]),
VS("Integration points","Assumed",["The call returns, or fails cleanly"],"Possible",["It hangs","It answers very slowly","It answers with nonsense"],["Every integration point will eventually fail in some way."],"→","amber","red"),
VS("Chain reaction and cascading failure","Chain reaction",["Within one layer","Survivors get more load, and fail in turn"],"Cascading failure",["Across layers","Callers exhaust resources waiting for a sick provider"],["One is horizontal. The other is vertical."],"and","amber","red"),
VS("Blocked threads","Looks like",["The process is up","Monitoring is green"],"Is",["No thread is free to do work"],["Usually near resource pools and locks. Always use a timeout."],"→","green","red"),
RC("Antipatterns, part one",[["Integration","Points fail."],["Chain","Reactions."],["Cascades","Across layers."],["Users","Are a load."],["Blocked","Threads."],["Self-denial","Attacks."]])
]});
//@@ ch04b-antipatterns-scale
CH({slug:"ch04b-antipatterns-scale",n:"4",part:"Part I · Create stability",sub:"Problems that appear only at size.",end:"What works for two servers fails for two hundred.",scenes:[
PT("Scale and slowness",[["Scaling effects","Patterns that work small, and fail large.","blue"],["Unbalanced capacities","A big front end swamps a small back end.","green"],["Dogpile","Everything starts at once.","purple"],["Force multiplier","Automation makes a mistake at scale.","amber"],["Slow responses","Worse than a refusal.","red"],["Unbounded result sets","The query that returns a million rows.","blue"]],["Six more ways to fail."]),
VS("Slow responses","A fast failure",["The caller can retry or move on"],"A slow response",["Ties up the caller","And the caller’s caller"],["Slowness spreads upward. Fail fast instead."],"→","amber","red"),
VS("Unbounded result sets","In development",["A table with a hundred rows"],"In production",["Millions","Memory runs out"],["Always put a limit on what you ask for."],"→","green","red"),
VS("Force multiplier","A person",["Makes a mistake on one server"],"Automation",["Makes it on all of them, in seconds"],["Give control systems limits, hysteresis and a way to say “are you sure?”."],"→","amber","red"),
RC("Antipatterns, part two",[["Scale","Changes behaviour."],["Capacity","Must be balanced."],["Dogpile","Stagger starts."],["Automation","Needs limits."],["Slow","Is worse than down."],["Limit","Every result set."]])
]});
//@@ ch05a-patterns-containment
CH({slug:"ch05a-patterns-containment",n:"5",part:"Part I · Create stability",sub:"Patterns that stop a failure from spreading.",end:"Never wait for ever.",scenes:[
PT("Contain the damage",[["Timeouts","Stop waiting.","blue"],["Circuit breaker","Stop calling a failing service.","green"],["Bulkheads","Partition resources.","purple"],["Steady state","Clean up as you go.","amber"],["Fail fast","Refuse early.","red"],["Let it crash","Restart from a clean state.","blue"]],["Six patterns."]),
PL("The circuit breaker",[["Closed","Calls go through. Failures are counted."],["Open","Past a threshold, calls fail immediately.","red"],["Half-open","After a pause, one trial call.","amber"],["Closed again","If the trial succeeds.","green"]],["It protects the caller, and gives the provider room to recover."],{tc:"blue"}),
VS("Bulkheads","One shared pool",["A flood from one caller sinks everyone"],"Partitioned",["Separate pools or servers per caller","One compartment floods"],["Named after the partitions in a ship’s hull."],"→","red","green"),
VS("Steady state","Accumulating",["Logs, caches and data grow without limit","Someone must intervene by hand"],"Steady",["Every mechanism that fills has one that empties"],["A system should run indefinitely without anyone logging in to it."],"→","red","green"),
RC("Patterns, part one",[["Timeouts","Everywhere."],["Breaker","Three states."],["Bulkheads","Partition."],["Steady state","No fiddling."],["Fail fast","Check first."],["Crash","And restart clean."]])
]});
//@@ ch05b-patterns-flow
CH({slug:"ch05b-patterns-flow",n:"5",part:"Part I · Create stability",sub:"Patterns that manage demand.",end:"Protect yourself from your callers.",scenes:[
PT("Control the flow",[["Handshaking","Ask before sending.","blue"],["Test harnesses","Simulate a misbehaving remote system.","green"],["Decoupling middleware","Queue in place of calling.","purple"],["Shed load","Refuse work you cannot finish.","amber"],["Create back pressure","Slow the sender.","red"],["Governor","Limit the rate of automated actions.","blue"]],["Six more patterns."]),
VS("Shed load","Accept everything",["Every request slows","All of them time out"],"Shed",["Refuse the excess quickly","Serve the rest well"],["Better to serve some users properly than all of them badly."],"→","red","green"),
VS("Back pressure","Unbounded queue",["Grows until memory runs out","Latency grows with it"],"Bounded queue",["When full, the producer waits or is refused"],["A full queue is information. Pass it upstream."],"→","red","green"),
VS("Test harnesses","A normal test",["The remote system behaves"],"A harness",["It hangs","Sends garbage","Drops the connection half-way"],["Test how you cope with the failures that real networks produce."],"→","amber","green"),
RC("Patterns, part two",[["Handshake","Before sending."],["Harness","For bad behaviour."],["Queues","Decouple."],["Shed","Excess load."],["Back pressure","Upstream."],["Governor","On automation."]])
]});
//@@ ch06-black-friday
CH({slug:"ch06-black-friday",n:"6",part:"Part II · Design for production",sub:"A launch-week outage, examined.",end:"Capacity is a property of the whole system.",scenes:[
PL("The day",[["Traffic rises","As expected."],["A back end slows","Under the load.","amber"],["Front ends pile up","Waiting on it.","red"],["Sessions multiply","Memory fills.","red"],["The site stops","On the busiest day.","red"]],["The front end could accept far more than the back end could serve."],{tc:"blue"}),
VS("What testing missed","Load test",["Clean scripts","Well-behaved sessions"],"Reality",["Bots and scrapers","Sessions created and abandoned","Retries"],["Real traffic is messier than any script."],"→","green","red"),
PT("What would have helped",[["Timeouts and breakers","Between tiers.","blue"],["Session limits","And lighter sessions.","green"],["Shedding","At the edge.","purple"],["A way to turn features off","Under load.","amber"]],["Stability patterns, applied before the day."]),
VS("The lesson","A component",["Was fast enough"],"The system",["Was not, at its narrowest point"],["Capacity is set by the weakest link, and by how it fails."],"→","green","red"),
RC("6",[["Peak day","Exposes it."],["Imbalance","Front to back."],["Sessions","Cost memory."],["Bots","Are traffic too."],["Shed","At the edge."],["Whole system","Has the capacity."]])
]});
//@@ ch07-foundations
CH({slug:"ch07-foundations",n:"7",part:"Part II · Design for production",sub:"Networks, machines and what they are really like.",end:"The network is not what the diagram shows.",scenes:[
ST("Layers of concern",[["Operations","Security, availability, capacity.","purple",0.4],["Control plane","Monitoring and deployment.","blue",0.55],["Interconnect","Routing, load balancing, discovery.","green",0.7],["Instances","Services and processes.","amber",0.85],["Foundation","Hardware, virtual machines, networks.","muted",1.0]],["Designing for production means designing every layer."]),
VS("Names and addresses","Assumed",["One machine, one name, one address"],"In a data centre",["Several interfaces","Several addresses","The name maps to one of them"],["Bind to the right interface, on purpose."],"→","amber","blue"),
PT("Where code runs",[["Physical hosts","Fixed, and long-lived.","blue"],["Virtual machines","Shared hardware, uncertain clocks.","green"],["Containers","Short-lived, with addresses that change.","purple"],["Cloud","Machines that come and go.","amber"]],["The less permanent the machine, the less it may hold."]),
VS("Disposable machines","Pets",["Named, nursed, repaired"],"Cattle",["Numbered, replaced"],["Identity and state must live outside anything that can disappear."],"→","amber","green"),
RC("7",[["Layers","Five."],["Networking","Is more complex than code assumes."],["Hosts","Vary in permanence."],["Containers","Are ephemeral."],["State","Outside the instance."],["Cattle","Not pets."]])
]});
//@@ ch08-processes-on-machines
CH({slug:"ch08-processes-on-machines",n:"8",part:"Part II · Design for production",sub:"What a single instance needs in order to be operable.",end:"An instance must be buildable, configurable and visible.",scenes:[
PT("Three concerns",[["Code","Built once, reproducibly.","blue"],["Configuration","Injected, not baked in.","green"],["Transparency","Logs, metrics and health.","purple"]],["What every instance needs."]),
VS("Code","Mutable deployment",["Patched in place","Drifts from version control"],"Immutable",["Built once from a known commit","The same artefact everywhere"],["What runs should be exactly what was tested."],"→","red","green"),
VS("Configuration","In the build",["A new build per environment","Secrets in the repository"],"Outside",["Files, environment or a configuration service","Secrets kept separately"],["Per-environment settings do not belong in the artefact."],"→","red","green"),
PT("Transparency",[["Logs","For people, and written with operators in mind.","blue"],["Metrics","For trends and alerts.","green"],["Health checks","More than “the process is up”.","purple"],["A window in","Without logging on to the box.","amber"]],["A system you cannot see into cannot be run."]),
RC("8",[["Code","Immutable."],["Build","Reproducible."],["Config","Injected."],["Secrets","Separate."],["Logs","For operators."],["Health","Meaningfully checked."]])
]});
//@@ ch09-interconnect
CH({slug:"ch09-interconnect",n:"9",part:"Part II · Design for production",sub:"How instances find and reach each other.",end:"The interconnect layer is where availability is made.",scenes:[
PT("The mechanisms",[["DNS","Names to addresses.","blue"],["Load balancing","Spread across instances.","green"],["Demand control","Decide what to refuse.","purple"],["Routing","Which path traffic takes.","amber"],["Service discovery","Who is available now.","red"]],["Several ways to connect a caller to a healthy instance."]),
VS("Load balancing","By DNS",["Simple","Clients cache, so changes are slow"],"By a balancer",["A virtual address in front of a pool","Health checks remove bad instances"],["Health checks decide who receives traffic."],"or","amber","green"),
VS("Demand control","When overloaded",["Queues back up","Everyone waits"],"Shed early",["Refuse at the edge","As close to the caller as possible"],["Systems fail when demand exceeds capacity. Decide in advance who waits."],"→","red","green"),
VS("Service discovery","Static configuration",["A list of addresses, maintained by hand"],"Discovery",["Instances announce themselves","Callers ask who is there"],["Needed when instances come and go."],"→","amber","green"),
RC("9",[["DNS","Simple and slow to change."],["Balancers","With health checks."],["Demand","Controlled."],["Shed","At the edge."],["Routing","Deliberate."],["Discovery","For dynamic fleets."]])
]});
//@@ ch10-control-plane
CH({slug:"ch10-control-plane",n:"10",part:"Part II · Design for production",sub:"The systems that run the system.",end:"Buy only as much control plane as you need.",scenes:[
VS("How much is right for you?","Too little",["Manual operations","Slow recovery"],"Too much",["A complex platform to run","Its own failures"],["The control plane is software too. It can fail, and it costs."],"VS","amber","red"),
PT("What it contains",[["Monitoring","Logs and metrics, gathered centrally.","blue"],["Configuration services","Settings, distributed.","green"],["Deployment","Getting code out.","purple"],["Orchestration","Placing and restarting instances.","amber"],["Command and control","Changing behaviour at run time.","red"]],["The machinery around production."]),
VS("Mechanical advantage","By hand",["One mistake, one server"],"Automated",["One mistake, every server"],["Automation needs safeguards in proportion to its reach."],"→","amber","red"),
VS("Live control","Redeploy to change behaviour",["Slow, in an emergency"],"Controls built in",["Switch features off","Adjust limits","Drain an instance"],["Build the levers before you need them."],"→","red","green"),
RC("10",[["Control plane","Runs production."],["Right-size","It."],["Monitoring","Central."],["Deployment","Automated."],["Safeguards","On automation."],["Levers","For emergencies."]])
]});
//@@ ch11-security
CH({slug:"ch11-security",n:"11",part:"Part II · Design for production",sub:"Security as a property of the whole design.",end:"Security is baked in, not sprinkled on.",scenes:[
PT("Common weaknesses",[["Injection","Untrusted input treated as code.","blue"],["Broken authentication","Sessions and credentials.","green"],["Cross-site scripting","Untrusted output in a page.","purple"],["Broken access control","Checks that can be skipped.","amber"],["Misconfiguration","Defaults left in place.","red"],["Vulnerable components","Old dependencies.","blue"]],["The well-known top ten, in brief."]),
VS("Least privilege","Convenient",["Run as an administrator","One account for everything"],"Sound",["The minimum rights each process needs"],["A compromised process can do only what it was allowed to do."],"→","red","green"),
VS("Configured passwords","In files and source control",["Readable by anyone who gets in"],"In a vault",["Fetched at start-up","Rotated","Audited"],["Credentials are the keys to everything else."],"→","red","green"),
VS("Security as a process","A project",["Done once, before launch"],"A practice",["Patching","Monitoring","Review, continuously"],["New weaknesses are found every week."],"→","amber","green"),
RC("11",[["Built in","From the start."],["Input","Never trusted."],["Privilege","The least."],["Secrets","In a vault."],["Dependencies","Kept current."],["Ongoing","Not once."]])
]});
//@@ ch12-13-design-for-deployment
CH({slug:"ch12-13-design-for-deployment",n:"12–13",part:"Part III · Deliver your system",sub:"A deployment that waited for ever, and how to avoid one.",end:"Design the software to be deployed.",scenes:[
VS("So many machines","The old picture",["A planned outage","A runbook","A long night"],"The new one",["Many small deployments","No downtime","During the day"],["Deployment is a feature, and must be designed."],"→","red","green"),
PL("Phases of a deployment",[["Before","Expand the schema and add what the new code needs."],["During","Old and new versions run side by side.","blue"],["After","Clean up what only the old code used.","green"]],["Both versions must work against the same database for a while."],{tc:"blue"}),
VS("Fill your pipeline","Rare, large releases",["High risk each time","Hard to find what broke"],"Small, frequent ones",["Low risk each","Easy to trace"],["The pipeline is how changes reach production. Keep it moving."],"→","red","green"),
PT("Deploy like the pros",[["Rolling","A few instances at a time.","blue"],["Blue and green","Two environments, switched.","green"],["Canary","A small share first.","purple"],["Feature toggles","Deploy dark, release later.","amber"]],["Deployment and release are separate events."]),
RC("Chapters 12–13",[["Deployment","Designed."],["Zero downtime","The aim."],["Expand","Then contract."],["Two versions","At once."],["Small","And frequent."],["Release","Separate from deploy."]])
]});
//@@ ch14-handling-versions
CH({slug:"ch14-handling-versions",n:"14",part:"Part III · Deliver your system",sub:"Changing a service without breaking its consumers.",end:"Be conservative in what you send, liberal in what you accept.",scenes:[
VS("Help others handle your versions","Breaking change",["Remove a field","Require a new one","Change a meaning"],"Non-breaking change",["Add an optional field","Accept more than before"],["Consumers upgrade on their schedule, not yours."],"VS","red","green"),
PT("When you must break",[["A new version","Alongside the old.","blue"],["Both supported","For a period.","green"],["Usage tracked","Who still calls the old one.","purple"],["Retired","Only when nobody does.","amber"]],["Version in the URL or in a header. Either way, run both."]),
VS("Handle others’ versions","Assume",["Their response matches the documentation"],"Verify",["Tolerate extra fields","Fail clearly on missing ones"],["Their change may reach you without warning."],"→","red","green"),
VS("Contract tests","Shared test environments",["Slow, and unreliable"],"Contract tests",["Each side checks its expectations of the other","Independently"],["Agreement can be tested without deploying everything together."],"→","amber","green"),
RC("14",[["Compatible","Changes preferred."],["Add","Do not remove."],["Two versions","When breaking."],["Track","Old usage."],["Tolerate","Extra data."],["Contracts","Tested."]])
]});
//@@ ch15-trampled-case-study
CH({slug:"ch15-trampled-case-study",n:"15",part:"Part IV · Solve systemic problems",sub:"A launch overwhelmed by real users.",end:"Test with the traffic you will actually get.",scenes:[
VS("Countdown and launch","The plan",["Load tested to the expected numbers"],"The launch",["Site down within minutes"],["The test and the reality were different kinds of traffic."],"→","green","red"),
PT("What the test missed",[["Real browsing","Unlike the scripted paths.","blue"],["Sessions without cookies","Every request a new session.","green"],["Bots and crawlers","Hitting expensive pages.","purple"],["Deep links","Bypassing caches.","amber"]],["Users, and non-users, do not behave like scripts."]),
PT("Aiming for quality assurance",[["Functional tests","Passed.","blue"],["Load tests","Passed.","green"],["Production","Failed.","purple"]],["Passing tests is not the same as being ready."]),
VS("The fix","More hardware",["Would not have saved it"],"Design changes",["Cheaper sessions","Protection from bots","Limits at each tier"],["Capacity problems are often design problems."],"→","red","green"),
RC("15",[["Launch","Failed fast."],["Scripts","Are not users."],["Sessions","Were the cost."],["Bots","Count as load."],["Readiness","Beyond tests."],["Design","Not hardware."]])
]});
//@@ ch16-adaptation
CH({slug:"ch16-adaptation",n:"16",part:"Part IV · Solve systemic problems",sub:"Building systems and organisations that can change.",end:"The ability to adapt is the lasting advantage.",scenes:[
VS("Platform team","A gatekeeper",["Tickets and queues","Teams wait"],"An enabler",["Self-service tools","Teams deploy themselves"],["The platform team’s customers are the other teams."],"→","red","green"),
VS("Team-scale autonomy","Coordinated",["Every change needs several teams","Releases are negotiated"],"Autonomous",["A team owns a service end to end","Deploys on its own"],["If teams must coordinate to deploy, the architecture is coupled."],"→","red","green"),
PT("Evolutionary architecture",[["Small services","That can be replaced.","blue"],["Loose clustering","Members do not know each other.","green"],["Explicit context","Pass what is needed.","purple"],["Create options","Keep future moves cheap.","amber"]],["Structures that make change inexpensive."]),
VS("Efficiency and adaptability","Fully efficient",["No slack","Tuned to today"],"Adaptable",["Some slack","Ready for a different tomorrow"],["Squeezing out all waste also squeezes out the ability to change."],"VS","amber","green"),
RC("16",[["Adapt","Or fall behind."],["Platform","Enables."],["Teams","Autonomous."],["Services","Replaceable."],["Options","Kept open."],["Slack","Has value."]])
]});
//@@ ch17-chaos-engineering
CH({slug:"ch17-chaos-engineering",n:"17",part:"Part IV · Solve systemic problems",sub:"Breaking things on purpose, to learn.",end:"Find the weakness before it finds you.",scenes:[
VS("Breaking things to make them better","Hoping",["It will hold when something fails"],"Knowing",["You made it fail, and watched"],["Chaos engineering is experimenting on a system to build confidence in it."],"→","amber","green"),
PT("Prerequisites",[["Monitoring","You must be able to see the effect.","blue"],["A defined steady state","What “healthy” looks like.","green"],["Limited exposure","A small blast radius.","purple"],["A way to stop","Immediately.","amber"]],["Without these, it is only an outage."]),
PL("Designing the experiment",[["Hypothesis","It will keep working if this fails."],["Inject","The failure.","amber"],["Observe","Against the steady state.","blue"],["Learn","Fix what broke, or widen the test.","green"]],["Start small, in production, with care."],{tc:"blue"}),
VS("Disaster simulations","Technical failures",["Kill instances","Add latency","Cut a zone"],"Human ones",["The on-call person is unreachable","The runbook is wrong"],["People and procedures are part of the system."],"and","blue","purple"),
RC("17",[["Experiment","On purpose."],["Steady state","Defined first."],["Small","Blast radius."],["Stop","Button ready."],["Learn","Each time."],["People","Are tested too."]])
]});
