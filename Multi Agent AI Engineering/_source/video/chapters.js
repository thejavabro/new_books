//@@ ch01-introduction
CH({slug:"ch01-introduction",n:"1",part:"Part 1 · Foundations",sub:"When several agents are worth the cost.",end:"Ask how agentic, not whether it is an agent.",scenes:[
VS("Why organise, if models keep improving?","The bet on bigger models",["One model will do everything"],"The case for structure",["Tasks exceed one context","Work needs separate authority and review"],["Each wave of AI removed one ceiling and exposed the next."],"VS","amber","blue"),
ST("How agentic?",[["Sets its own sub-goals","And revises its plan.","purple",0.4],["Chooses tools and steps","Within a goal you set.","blue",0.6],["Follows a fixed workflow","The model fills in steps.","green",0.8],["Answers once","No loop.","muted",1.0]],["Match the degree of agency to the task. More is not better."]),
VD("When a separate agent is justified",[["A different context is needed",true,"The work does not fit one window.","YES","green"],["A different authority or permission",true,"It should not share credentials.","YES","green"],["Independent review",true,"A second view must not see the first’s reasoning.","YES","green"],["It just feels tidier",false,"Every boundary has a cost.","NO","red"]],["The book gives a four-criterion test for drawing a boundary."],{sw:150}),
PT("What coordination costs",[["Tokens","Context is copied at every handoff.","blue"],["Latency","More round trips.","green"],["Failure modes","That arise only between agents.","purple"],["Debugging","Across several transcripts.","amber"]],["Distributing work is never free."]),
RC("1",[["Structure","Still matters."],["Agency","A spectrum."],["Match","To the task."],["Boundaries","Must be justified."],["Costs","Tokens, time, failures."],["Microservices","A limited analogy."]])
]});
//@@ ch02-principles
CH({slug:"ch02-principles",n:"2",part:"Part 1 · Foundations",sub:"Seven principles for designing agent teams.",end:"You cannot maximise all seven.",scenes:[
PT("Seven principles",[["Bounded autonomy","Freedom, inside limits.","blue"],["Collective alignment","The team’s goal, not each agent’s.","green"],["Resilience","Against silent failure.","purple"],["Learnability","Getting better with use.","amber"],["Modular composability","Agents as replaceable parts.","red"],["Safety and trust","By design.","blue"]],["The seventh is observability and evaluation: you cannot fix what you cannot see."]),
VS("Bounded autonomy","Too little",["A script with a model in it"],"Too much",["Unpredictable, and unaccountable"],["Autonomy is granted in proportion to how well errors can be caught."],"VS","amber","red"),
VS("Silent failure","A crashed service",["Throws an error"],"A failed agent",["Returns a confident, wrong answer","Nothing alerts"],["A failed model call still produces fluent text."],"→","amber","red"),
PL("The minimum viable design review",[["Who decides?","At each step."],["What can it touch?","Tools and data.","blue"],["How will we know it failed?","Checks.","amber"],["Who can stop it?","And how.","green"]],["Before the full review, ask these."],{tc:"blue"}),
RC("2",[["Seven","Principles."],["Autonomy","Bounded."],["Alignment","Collective."],["Failure","Is silent."],["Tension","Between principles."],["Review","Before building."]])
]});
//@@ ch03-frameworks
CH({slug:"ch03-frameworks",n:"3",part:"Part 1 · Foundations",sub:"What agent frameworks have in common, and where they differ.",end:"A framework is decisions someone else already made.",scenes:[
PT("Abstractions every framework shares",[["Agent","A model with a role.","blue"],["Tool","Something it can call.","green"],["Message","What passes between agents.","purple"],["Memory","What persists.","amber"],["Orchestrator","What decides who acts next.","red"]],["Different names, the same five ideas."]),
PL("The tool cycle",[["Describe","The tool to the model."],["Select","The model picks it.","blue"],["Format","Arguments as structured data.","purple"],["Execute","In your code.","amber"],["Return","The result to the model.","green"]],["Tool integration looks the same everywhere."],{tc:"blue"}),
PT("Three orchestration models",[["Conversation","Agents take turns in a dialogue.","blue"],["Graph","Nodes and edges define the flow.","green"],["Role-based crew","Tasks assigned to roles.","purple"]],["Frameworks cluster by which they favour."]),
VD("Keep the framework a vehicle",[["Business logic in plain functions",true,"Portable.","DO","green"],["Prompts and tools defined outside the framework",true,"Reusable.","DO","green"],["Framework types throughout your code",false,"Hard to leave.","AVOID","red"]],["A portability checklist. The framework will change, or you will."],{sw:160}),
RC("3",[["Framework","Pre-made decisions."],["Five","Shared abstractions."],["Tool cycle","The same everywhere."],["Three models","Of orchestration."],["Differences","In control and state."],["Portable","Keep it so."]])
]});
//@@ ch04-first-agents
CH({slug:"ch04-first-agents",n:"4",part:"Part 2 · Building",sub:"General background: this chapter was missing from the source file.",end:"Start with one agent that works.",scenes:[
VS("A note on this chapter","Missing",["Chapter 4 was not in the source PDF"],"So",["This page is general background","It is not a summary of the book’s chapter"],["Later chapters of the book build on a first working agent."],"→","amber","blue"),
PT("What a first agent needs",[["A model","To decide.","blue"],["A system prompt","Its role and limits.","green"],["A tool or two","With clear descriptions.","purple"],["A loop","Call, observe, repeat.","amber"],["A stop condition","So it ends.","red"]],["The smallest thing that deserves the name."]),
PT("Reasoning strategies",[["Direct","Answer in one step.","blue"],["Step by step","Think, then answer.","green"],["Reason and act","Alternate thinking with tool calls.","purple"],["Plan then execute","Write a plan first.","amber"]],["Choose the simplest that solves the task."]),
PL("From one agent to two",[["One agent","Working, and tested."],["Find the strain","Too many tools, or too much context.","amber"],["Split","Along that line.","blue"],["Define the handoff","What passes between them.","green"]],["Add a second agent only when the first is clearly overloaded."],{tc:"blue"}),
RC("First agents",[["Missing","From the source file."],["Background","Not the book’s text."],["One agent","First."],["Tools","Few and clear."],["Stop","Condition."],["Split","Only when needed."]])
]});
//@@ ch05-communication
CH({slug:"ch05-communication",n:"5",part:"Part 2 · Building",sub:"How work passes between agents.",end:"A handoff is a contract, not a packet.",scenes:[
VS("A handoff is a contract","A packet",["Some text, passed along"],"A contract",["What is asked","What done looks like","By when","What to do on failure"],["Failures start where work changes hands."],"→","red","green"),
PT("The envelope",[["Identity","Who sent it.","blue"],["Lineage","Which task it belongs to.","green"],["Deadline","As an absolute time.","purple"],["Idempotency key","So a duplicate is harmless.","amber"]],["Keep the contract and the envelope separate."]),
PT("Addressing",[["Direct","Names the recipient.","blue"],["Topic","Anyone subscribed.","green"],["Broadcast","Everyone.","purple"]],["Narrow addressing is easier to reason about."]),
PL("The lifecycle of a task",[["Sent","With a contract."],["Acknowledged","Received and accepted.","blue"],["In progress","With updates.","purple"],["Completed","Or failed, explicitly.","green"]],["A deadline written as a duration is lost in transit. Write it as a time."],{tc:"blue"}),
RC("5",[["Handoffs","Fail most."],["Contract","Says what done is."],["Envelope","Identity and lineage."],["Addressing","Direct where possible."],["Lifecycle","Explicit states."],["Duplicates","Made harmless."]])
]});
//@@ ch06-patterns
CH({slug:"ch06-patterns",n:"6",part:"Part 2 · Building",sub:"Named shapes for agents working together.",end:"Patterns are named answers to coordination problems.",scenes:[
PT("Collaboration patterns",[["Concurrent specialists","Fan out, then fan in.","blue"],["Sequential workflow","A cascade or a relay.","green"],["Task decomposition","Plan, execute, reassemble.","purple"],["Debate and reflection","Structured disagreement.","amber"],["Mixture of experts","Route to the right one.","red"]],["Each solves a different problem."]),
VS("Route, do not broadcast","Broadcast",["Every expert sees every request","Cost multiplies"],"Route",["A router reads the request","One expert handles it"],["Send work to who can do it."],"→","red","green"),
VS("Debate and reflection","One pass",["A fluent first answer"],"Generator and critic",["One proposes","Another challenges","Revised until it holds"],["The critic must be able to say no."],"→","amber","green"),
VD("Failure signatures",[["Fan-out with no time limit",false,"One slow agent stalls everything.","WATCH","amber"],["A relay that drops context",false,"Each stage knows less.","WATCH","amber"],["Debate that never converges",false,"Set a round limit.","WATCH","amber"],["A supervisor that does the work itself",false,"The pattern has collapsed.","WATCH","amber"]],["Each pattern degrades in a recognisable way."],{sw:160}),
RC("6",[["Patterns","Named shapes."],["Fan-out","For parallel work."],["Sequence","For stages."],["Decompose","For big tasks."],["Debate","For quality."],["Compose","With care."]])
]});
//@@ ch07-memory
CH({slug:"ch07-memory",n:"7",part:"Part 2 · Building",sub:"What agents keep, share and forget.",end:"A bigger window is not memory.",scenes:[
VS("A bigger window is not memory","Window",["Everything in view, once","Gone next session"],"Memory",["Selected, stored, retrieved","Outlives the session"],["Capacity is not the same as recall."],"→","amber","green"),
PT("Short-term memory",[["Trim","Drop what is no longer needed.","blue"],["Summarise","Compress old turns.","green"],["Offload","Tool results to files.","purple"],["Pin","What must stay.","amber"]],["After fifty tool calls, the window needs managing."]),
PL("Long-term memory lifecycle",[["Write","Decide what is worth keeping."],["Index","So it can be found.","blue"],["Retrieve","When relevant.","purple"],["Update","When it changes.","amber"],["Forget","When it is stale.","green"]],["Every stored item has a cost. Forgetting is a feature."],{tc:"blue"}),
VS("Shared memory","Open to all agents",["Any agent can read and overwrite"],"Least privilege",["Each agent sees what its role needs","Writes are attributed"],["Shared stores need access rules."],"→","red","green"),
RC("7",[["Window","Is not memory."],["Propagation","Context thins at handoffs."],["Short-term","Managed."],["Long-term","Has a lifecycle."],["Shared","With least privilege."],["Forget","On purpose."]])
]});
//@@ ch08-orchestration
CH({slug:"ch08-orchestration",n:"8",part:"Part 2 · Building",sub:"Who decides what happens next, and what happens when it fails.",end:"Reliability is the orchestrator’s problem.",scenes:[
VS("Centralised to decentralised","Centralised",["One orchestrator decides","Easy to trace","A bottleneck"],"Decentralised",["Agents hand off among themselves","Flexible","Harder to follow"],["A dial, not a switch."],"or","blue","purple"),
VS("The planner is a failure domain","Assumed",["The plan is valid"],"Reality",["It may be malformed","It may name tools that do not exist"],["Validate a plan before running it."],"→","amber","red"),
PT("Reliability patterns",[["Retries","With backoff and jitter.","blue"],["Circuit breakers","Stop retry storms.","green"],["Graceful degradation","Optional steps may be skipped.","purple"],["Durable state","Resume after a crash.","amber"]],["A chain of stages multiplies each stage’s failure rate."]),
PL("Work longer than one session",[["Checkpoint","Save progress."],["Summarise","What was done and what is next.","blue"],["Resume","From the checkpoint.","purple"],["Verify","Before continuing.","green"]],["Long tasks finish only if they can be picked up again."],{tc:"blue"}),
RC("8",[["Orchestration","Makes a team."],["Dial","Central to decentral."],["Plans","Validate them."],["Retries","With backoff."],["Breakers","Stop storms."],["State","Durable."]])
]});
//@@ ch09-protocols
CH({slug:"ch09-protocols",n:"9",part:"Part 2 · Building",sub:"Standards that let agents and tools from different teams work together.",end:"Interoperability is a ladder.",scenes:[
ST("The interoperability ladder",[["Shared protocols","Across organisations.","green",0.4],["A registry","Agents can be discovered.","blue",0.6],["Service contracts","Each agent declares what it does.","purple",0.8],["One framework","Everyone uses the same.","muted",1.0]],["Climb only as far as you need."]),
VS("MCP for tools, A2A for peers","Model Context Protocol",["Connects an agent to tools and data"],"Agent-to-agent protocol",["Connects agents to each other"],["Two protocols do the load-bearing work."],"and","blue","green"),
VS("Adapters","Direct dependence",["Your code speaks the protocol everywhere"],"An adapter",["One place translates","A protocol change touches one file"],["Standardisation is a bet. The adapter is the insurance."],"→","red","green"),
PT("Versioning across boundaries",[["Announce","Before changing.","blue"],["Support both","For a migration window.","green"],["Measure","Who still uses the old version.","purple"],["Remove","Only when nobody does.","amber"]],["A contract change is a release."]),
RC("9",[["Ladder","Of interoperability."],["Contracts","Per agent."],["Registry","For discovery."],["MCP","For tools."],["A2A","For peers."],["Adapters","As insurance."]])
]});
//@@ ch10-framework-survey
CH({slug:"ch10-framework-survey",n:"10",part:"Part 3 · Operating",sub:"Choosing a framework on purpose.",end:"Choosing a framework is an architecture decision.",scenes:[
VS("Two axes","How is control expressed?",["As conversation, or as an explicit graph"],"How much is managed for you?",["A library, or a platform"],["Two questions place every framework."],"and","blue","purple"),
PL("A selection process",[["Classify","The orchestration you need."],["List","Hard constraints.","blue"],["Shortlist","What survives them.","purple"],["Prototype","The riskiest part.","amber"],["Decide","And record why.","green"]],["Constraints narrow the field quickly."],{tc:"blue"}),
VD("Ways teams choose badly",[["By popularity",false,"Stars are not fit.","AVOID","red"],["By a demo",false,"Demos hide operations.","AVOID","red"],["By adding up a scorecard",false,"Compare one dimension at a time.","AVOID","red"],["By what one engineer knows",false,"Check the constraints first.","AVOID","red"]],["The chapter’s longer view."],{sw:150}),
VS("Mixing frameworks","Tempting",["The best tool for each part"],"Cost",["Two models of state","Two ways to trace"],["Possible at clear boundaries, with one tracing standard."],"→","amber","blue"),
RC("10",[["Decision","Architectural."],["Axes","Control and management."],["Constraints","First."],["Prototype","The risk."],["Compare","By dimension."],["Mix","With care."]])
]});
//@@ ch11-evaluation
CH({slug:"ch11-evaluation",n:"11",part:"Part 3 · Operating",sub:"Measuring whether an agent team works.",end:"Without measurement, you have a demo.",scenes:[
PT("Who grades",[["Code","Exact checks. Cheap, narrow.","blue"],["A model","A rubric applied at scale.","green"],["A person","Slow, and the reference.","purple"]],["Use each for what it is good at."]),
PL("Evaluation by stage",[["Development","Fast checks on every change."],["Pre-release","The full suite.","blue"],["Canary","Real traffic, a small share.","amber"],["Production","Continuous sampling.","green"]],["Software has a lifecycle. So do evaluations."],{tc:"blue"}),
PT("Measuring how the team worked",[["Handoff quality","Was the contract met?","blue"],["Redundant work","Did agents repeat each other?","green"],["Escalations","How often a person stepped in.","purple"],["Cost per task","Across all agents.","amber"]],["A right answer can hide a wasteful path."]),
VS("Size the run to the decision","One run",["Could be luck"],"Many runs",["Shows variance","Supports a decision"],["Models vary, even at temperature zero. Decide how sure you need to be."],"→","amber","green"),
RC("11",[["Measure","Or it is a demo."],["Dimensions","Ranked by context."],["Graders","Code, model, human."],["Stages","Each has evals."],["Team","Measured too."],["Runs","Enough to decide."]])
]});
//@@ ch12-observability
CH({slug:"ch12-observability",n:"12",part:"Part 3 · Operating",sub:"Seeing what agents did.",end:"You cannot fix what you cannot see.",scenes:[
PT("Four kinds of signal",[["Behaviour","What each agent did.","blue"],["Performance","How long it took.","green"],["Cost","Tokens, attributed.","purple"],["Quality","Scores on sampled runs.","amber"]],["Telemetry costs storage, so choose."]),
VS("Keep the runs you will need","Head sampling",["Decide at the start","Misses rare failures"],"Tail sampling",["Decide after the run","Keep errors and outliers"],["Sample by outcome, not by chance."],"→","amber","green"),
PL("From complaint to cause",[["A complaint","Arrives."],["Find the trace","By task identifier.","blue"],["Walk the spans","Agent by agent.","purple"],["Classify","The failure.","amber"],["Attribute","To a prompt, tool or handoff.","green"]],["Classify first, then attribute."],{tc:"blue"}),
VS("Privacy at the source","Scrub later",["Sensitive data already stored"],"Scrub at emission",["Redacted before it leaves the process"],["Traces of agents contain what users said."],"→","red","green"),
RC("12",[["See","Before fixing."],["Standard","OpenTelemetry."],["Signals","Four."],["Sample","By outcome."],["Cost","Per token, attributed."],["Privacy","At emission."]])
]});
//@@ ch13-self-evolving
CH({slug:"ch13-self-evolving",n:"13",part:"Part 3 · Operating",sub:"Agent teams that improve with use.",end:"Change one surface at a time, under a contract.",scenes:[
PT("Surfaces a loop can change",[["Prompts","Instructions.","blue"],["Tools","Descriptions and availability.","green"],["Memory","What is kept.","purple"],["Routing","Who gets what.","amber"],["Workflow","The order of steps.","red"],["Models","Which one is used.","blue"]],["A learnable surface is anything that can be changed based on evidence."]),
VS("Signal and action","Lots of signal",["Thousands of traces and scores"],"Little you can act on",["Until failures are grouped by cause"],["Turn joint work into durable knowledge."],"→","amber","green"),
PL("Start from the symptom",[["Symptom","A failing case."],["Smallest change","A prompt edit.","blue"],["Then","A tool or memory change.","purple"],["Only then","Workflow or model.","amber"],["Verify","On the evaluation suite.","green"]],["Climb only as far as needed."],{tc:"blue"}),
PT("An evolution contract",[["What may change","Per surface.","blue"],["Who approves","Person or automated gate.","green"],["What evidence","Is required.","purple"],["How to roll back","If it gets worse.","amber"]],["The more a change can affect, the more review it needs."]),
RC("13",[["Teams","Can learn."],["Surfaces","Six and more."],["Group","Failures by cause."],["Smallest","Change first."],["Contract","Per surface."],["Levels","Of permission."]])
]});
//@@ ch14-security
CH({slug:"ch14-security",n:"14",part:"Part 3 · Operating",sub:"Protecting systems that act.",end:"Security is about authority, not filters.",scenes:[
VS("Authority, not filters","Filters",["Try to catch bad text"],"Authority",["Limit what an agent can do","Whatever text it reads"],["A filter can be bypassed. A missing permission cannot be talked round."],"→","amber","green"),
VS("Keep the planner away from untrusted text","Planner reads web pages",["Injected instructions steer the plan"],"Separated",["A quarantined agent reads untrusted content","Returns structured data only"],["The defence against indirect prompt injection is architectural."],"→","red","green"),
PT("A minimum baseline",[["Least privilege","Per agent.","blue"],["Separate credentials","No shared keys.","green"],["Human approval","For irreversible actions.","purple"],["Input and output checks","At boundaries.","amber"],["Audit logs","Of every action.","red"]],["Controls to have before launch."]),
VS("Privacy as information flow","Secrecy",["Is this data confidential?"],"Flow",["Is this the right recipient, for this purpose?"],["Privacy is about where information goes."],"→","blue","purple"),
RC("14",[["Authority","Is the control."],["Planner","Kept clean."],["Baseline","Before launch."],["Mitigations","Architectural."],["Red team","Continuously."],["Privacy","Is flow."]])
]});
//@@ ch15-deploying
CH({slug:"ch15-deploying",n:"15",part:"Part 3 · Operating",sub:"Running agent teams in production.",end:"Mostly ordinary work, with a few sharp differences.",scenes:[
VS("Scale on the queue, not the CPU","CPU",["Workers wait on model calls","CPU stays low"],"Queue depth",["Shows real demand","Scale on that"],["Agent workers are I/O-bound."],"→","red","green"),
VS("Why token cost grows fast","One agent",["Cost grows with the task"],"A team",["Context is copied to each agent","History grows each turn"],["Cost grows faster than the number of agents."],"→","amber","red"),
PT("Fingerprint every release",[["Model","And version.","blue"],["Prompts","Each one, hashed.","green"],["Tools","And their schemas.","purple"],["Configuration","Routing and limits.","amber"]],["An agent system has far more that can change than code."]),
VS("Rollback","A command",["Redeploy the old code"],"A state transition",["Tasks in flight","Memory written by the new version"],["Plan what happens to work already started."],"→","amber","green"),
RC("15",[["Ordinary","Mostly."],["Queue","Drives scaling."],["Tokens","Grow fast."],["Fingerprint","Each release."],["Rollback","Includes state."],["Promise","Only what you measure."]])
]});
//@@ ch16-case-studies
CH({slug:"ch16-case-studies",n:"16",part:"Part 4 · Looking ahead",sub:"What real systems teach.",end:"Read each system by the same questions.",scenes:[
PT("Questions to ask of any system",[["Why several agents?","What justified the boundaries.","blue"],["Who owns what?","Each decision and each clock.","green"],["What is checked?","And by whom.","purple"],["What failed?","And what changed.","amber"]],["The chapter reads four production systems this way."]),
VS("When to retire a boundary","Kept",["An agent whose reason has gone","Cost without benefit"],"Removed",["Fewer handoffs","Simpler traces"],["Boundaries should be revisited as models improve."],"→","amber","green"),
VS("Scaffold beats model","A better model",["Helps"],"A better scaffold",["Tools, checks and structure around the model","Often helps more"],["One of the lessons the case studies share."],"and","blue","green"),
VS("One owner per clock","Shared",["Two agents both think the other is tracking the deadline"],"Owned",["Exactly one is responsible for each timer"],["Ambiguous ownership is where support conversations stall."],"→","red","green"),
RC("16",[["Four systems","Read alike."],["Boundaries","Earn their place."],["Filters","Can be the product."],["Scaffold","Matters."],["Owner","One per clock."],["Compare","Across cases."]])
]});
//@@ ch17-trends
CH({slug:"ch17-trends",n:"17",part:"Part 4 · Looking ahead",sub:"Where the field is heading.",end:"Small errors dominate long tasks.",scenes:[
{type:'curve',title:'Why small errors dominate long tasks',xl:'number of steps →',yl:'chance the whole task succeeds →',legend:false,series:[{c:'red',pts:line(40,x=>Math.pow(.98,100*x))}],marks:[{x:.1,y:.82,t:'10 steps: likely',c:'green',at:.25,dx:40,dy:-30,w:300},{x:.9,y:.16,t:'90 steps: unlikely',c:'red',at:.75,dx:-200,dy:-120,w:340}],cap:['If each step succeeds with probability p, n steps succeed with p to the power n.','Long tasks need checkpoints and verification. (Illustrative.)']},
VS("Coordination becomes learned","Today",["Coordination is hand-designed"],"Emerging",["Models trained to work in teams"],["What is scaffolding now may move into the model."],"→","blue","purple"),
VS("Authorisation is not intent","Authorised",["The agent is allowed to do it"],"Intended",["The person wanted it done, now, this way"],["“The agent” is several identities acting for someone."],"VS","amber","green"),
PT("Why does each component exist?",[["Compensates for a model weakness","May disappear.","blue"],["Enforces a boundary","Will stay.","green"],["Carries domain knowledge","Will stay.","purple"]],["Classify each part, and you know what a model upgrade will change."]),
RC("17",[["Long tasks","Compound errors."],["Checkpoints","Help."],["Coordination","May be learned."],["Intent","Beyond authorisation."],["Planes","Of responsibility."],["Components","Know why each exists."]])
]});
//@@ ch18-conclusions
CH({slug:"ch18-conclusions",n:"18",part:"Part 4 · Looking ahead",sub:"What the book leaves you with.",end:"One next action is enough.",scenes:[
PT("Lessons the book carries",[["Justify every boundary","Agents cost.","blue"],["Contracts at handoffs","Not packets.","green"],["Reliability is designed","By the orchestrator.","purple"],["Measure","Or it is a demo.","amber"],["Authority","Not filters.","red"],["Evolve","Under a contract.","blue"]],["Each entered as a chapter’s claim."]),
VS("Engineering choices are ethical choices","Looks technical",["Which capabilities to grant","What to log"],"Is also ethical",["Who is affected","Who can contest a decision"],["There is no purely technical design."],"→","blue","purple"),
ST("From capability to contribution",[["Contribution","It improves what people can do.","green",0.5],["Reliability","It works every time.","blue",0.75],["Capability","It can do the task.","amber",1.0]],["A system that can is not yet a system that helps."]),
VS("The last ask","A grand plan",["Never started"],"One next action",["A review, an eval, a contract","Done this week"],["When you have closed the book, do one thing."],"→","amber","green"),
RC("18",[["Review","The architecture."],["Lessons","Carried forward."],["Ethics","In the design."],["Contribution","Above capability."],["One action","Next."],["Start","This week."]])
]});
