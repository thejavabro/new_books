//@@ ch01-eta-digital-agentic-age
CH({slug:"ch01-eta-digital-agentic-age",n:"1",part:"Foundations",sub:"How enterprise architecture has to change when software can decide.",end:"Architecture for systems that act.",scenes:[
PL("Three eras",[["Systems of record","Store what happened."],["Systems of engagement","Reach customers digitally.","blue"],["Systems of intelligence","Decide and act.","green"]],["The chapter follows one bank through each."],{tc:"blue"}),
VS("Where conventional architecture strains","Built for",["Deterministic applications","Fixed integrations","Periodic review"],"Now needed",["Components that decide","Dynamic collaboration","Continuous governance"],["The assumptions behind the old blueprints no longer hold."],"→","amber","green"),
PT("The four domains, with agents",[["Business","Processes include decisions made by agents.","blue"],["Data","Also memory and knowledge for agents.","green"],["Application","Services and agents side by side.","purple"],["Technology","Model serving and orchestration.","amber"]],["The same domains, with new contents."]),
VS("Frameworks","What they give",["A shared method and vocabulary"],"What they lack",["Guidance for autonomous components"],["Established frameworks still apply. They need extending."],"and","blue","amber"),
RC("1",[["Eras","Three."],["Strain","On old assumptions."],["Principles","A short list."],["Domains","Extended."],["Frameworks","Still useful."],["Leadership","Must care."]])
]});
//@@ ch02-foundations-agentic-ai
CH({slug:"ch02-foundations-agentic-ai",n:"2",part:"Foundations",sub:"The technology underneath agents.",end:"From predicting, to generating, to acting.",scenes:[
PL("Classic, generative, agentic",[["Classic AI","Predicts and classifies."],["Generative AI","Produces content.","blue"],["Agentic AI","Plans and acts towards a goal.","green"]],["Each builds on the one before."],{tc:"blue"}),
PT("Five classic types of agent",[["Simple reflex","Reacts to the current input.","blue"],["Model-based","Keeps an internal picture.","green"],["Goal-based","Chooses actions towards a goal.","purple"],["Utility-based","Weighs how good outcomes are.","amber"],["Learning","Improves with experience.","red"]],["A long-standing textbook classification."]),
VS("Agents as a team","One agent",["One model, many jobs","Overloaded"],"A team under an orchestrator",["Specialists","Coordinated","Supervised"],["Serious enterprise work is divided."],"→","amber","green"),
VS("Plain and agentic RAG","Plain",["Retrieve once","Answer"],"Agentic",["Decide what to look up","Check the result","Look again"],["Retrieval grounds answers in enterprise data."],"→","blue","green"),
RC("2",[["Three kinds","Of AI."],["Transformer","Underneath."],["Lifecycle","Of a model project."],["Agents","Five classic types."],["Protocols","A shared language."],["RAG","Grounds answers."]])
]});
//@@ ch03-bridging-eta-agentic
CH({slug:"ch03-bridging-eta-agentic",n:"3",part:"Foundations",sub:"Connecting existing architecture practice to agents.",end:"Readiness decides whether a pilot becomes a product.",scenes:[
ST("Automation, augmentation, autonomy",[["Autonomy","The system decides and acts, within limits.","purple",0.5],["Augmentation","People decide, with AI assistance.","blue",0.75],["Automation","Fixed rules, executed.","green",1.0]],["A progression. Not every process should reach the top."]),
VS("The incumbent’s dilemma","Protect what exists",["Stable, and falling behind"],"Rebuild everything",["Risky, and slow"],["The realistic path is to add intelligence alongside what already works."],"VS","amber","red"),
PT("AI readiness",[["Data","Accessible, governed, good enough.","blue"],["Platform","Somewhere to run models and agents.","green"],["Skills","People who can build and operate.","purple"],["Governance","Rules before scale.","amber"]],["The gap behind many failed pilots."]),
PL("Risk assessment, by design",[["Identify","Where AI will decide."],["Assess","What could go wrong.","blue"],["Mitigate","Controls and oversight.","purple"],["Monitor","In operation.","green"]],["Responsible AI is designed in, phase by phase. Energy use is an architecture decision too."],{tc:"blue"}),
RC("3",[["Dilemma","For incumbents."],["Progression","Automation to autonomy."],["Lifecycle","AI throughout."],["Readiness","Four parts."],["Risk","By design."],["Energy","Counts."]])
]});
//@@ ch04-enterprise-agentic-ai
CH({slug:"ch04-enterprise-agentic-ai",n:"4",part:"Foundations",sub:"What an enterprise agent is, and how much freedom it has.",end:"Agency is a governed capability, not a free hand.",scenes:[
VS("Agency","A free hand",["The agent does whatever it judges best"],"Governed",["Scope, permissions and oversight are defined"],["How much agency is granted is a design decision."],"→","red","green"),
PT("What an agent is made of",[["A model","To reason.","blue"],["Instructions","Its role and limits.","green"],["Tools","To act.","purple"],["Memory","To carry context.","amber"],["Guardrails","To stay in bounds.","red"]],["The book describes six components. These are the main ones."]),
PT("Agentic workflow patterns",[["Reflection","Check and revise its own work.","blue"],["Tool use","Act through systems.","green"],["Planning","Break a goal into steps.","purple"],["Collaboration","Several agents together.","amber"]],["Patterns are combined, like members of a team."]),
VS("Multi-agent state","Free for all",["Any agent writes anywhere","Conflicts"],"Jurisdiction",["Each agent writes only what it owns"],["Write only in your jurisdiction."],"→","red","green"),
RC("4",[["Agency","Governed."],["Components","Model, tools, memory."],["Design","For user and society."],["Patterns","Combined."],["State","By jurisdiction."],["RAG","Earn the answer."]])
]});
//@@ ch05-reference-architecture
CH({slug:"ch05-reference-architecture",n:"5",part:"Architecture",sub:"A blueprint for an enterprise that uses agents.",end:"From scattered proofs of concept to a platform.",scenes:[
VS("From proofs of concept to a platform","Many pilots",["Each with its own tools and rules","None reusable"],"A platform",["Shared services for agents","Consistent governance"],["A handful of impressive demos is not an architecture."],"→","red","green"),
ST("A layered view",[["Experience","How people and systems reach agents.","green",0.4],["Agents and orchestration","Where decisions are made.","blue",0.55],["Knowledge and memory","What agents know.","purple",0.7],["Integration","Tools, APIs, events.","amber",0.85],["Infrastructure and governance","Underneath everything.","muted",1.0]],["A simplified reading of the chapter’s reference architecture."]),
VS("Without and with agents","Without",["Services call each other in fixed ways"],"With",["Agents choose which services to use, at run time"],["The digital architecture stays. A decision layer is added."],"→","blue","green"),
VS("How the capabilities work together","In isolation",["Each capability looks adequate"],"Together",["Value comes from the connections between them"],["A reference architecture is about relationships."],"→","amber","green"),
RC("5",[["Legacy","Starts here."],["Viewpoints","For stakeholders."],["Platform","Over pilots."],["Layers","Five."],["Decision layer","Added."],["Connections","Create value."]])
]});
//@@ ch06-agent-identification
CH({slug:"ch06-agent-identification",n:"6",part:"Architecture",sub:"Deciding what should be an agent.",end:"Decompose by decision, not by function.",scenes:[
VS("From functions to decisions","Functional decomposition",["What does the system do?"],"Decision decomposition",["Where is judgement needed?","Who decides?"],["Agents belong where decisions are."],"→","amber","green"),
VD("Agent or service?",[["Fixed logic, same result each time",true,"A service.","SERVICE","blue"],["Judgement over ambiguous input",true,"An agent.","AGENT","purple"],["Needs to choose among tools or paths",true,"An agent.","AGENT","purple"],["A simple lookup or calculation",true,"A service.","SERVICE","blue"]],["A quick identification test."],{sw:210}),
VS("Sizing agents","God agent",["Does everything","Unpredictable, untestable"],"Nano agent",["Does almost nothing","All coordination, no value"],["Aim between the two: one coherent responsibility."],"VS","red","amber"),
VS("Agent washing","Called an agent",["A script, or a single prompt, relabelled"],"A real agent",["Has a goal","Chooses actions","Uses feedback"],["In regulated work, also ask who is legally deciding."],"→","red","green"),
RC("6",[["Decisions","Locate agents."],["Test","Agent or service."],["DDD","Reinterpreted."],["Size","Between extremes."],["Washing","Avoid it."],["Accountability","Stays with people."]])
]});
//@@ ch07-agentic-fabric
CH({slug:"ch07-agentic-fabric",n:"7",part:"Architecture",sub:"How agents, tools and systems are connected.",end:"From silos to a fabric.",scenes:[
PT("Three needs",[["Interoperability","Agents and tools understand each other.","blue"],["Orchestration","Work is coordinated.","green"],["Grounding","Answers rest on enterprise data.","purple"]],["Without them, agents remain islands."]),
VS("Orchestration, choreography, hybrid","Orchestration",["A coordinator directs","Easy to audit"],"Choreography",["Agents react to events","Loosely coupled"],["Most enterprises mix the two."],"or","blue","purple"),
VS("The last mile","Judgement",["The agent recommends"],"A committed fact",["Written to a system of record","Validated, authorised, logged"],["The step from one to the other needs the most control."],"→","amber","green"),
PT("Contracts and failure",[["Message contracts","What each side may send.","blue"],["Idempotency","A repeat does no harm.","green"],["Timeouts and retries","With limits.","purple"],["Compensation","Undo what was done.","amber"]],["Integration discipline applies to agents too."]),
RC("7",[["Fabric","Not silos."],["Protocols","For tools and agents."],["Coordinate","Two ways."],["Last mile","Controlled."],["Contracts","For messages."],["Guardrails","In the fabric."]])
]});
//@@ ch08-agentic-runtime
CH({slug:"ch08-agentic-runtime",n:"8",part:"Building and running",sub:"What happens while an agent executes.",end:"An agent’s run must be resumable and traceable.",scenes:[
PT("Runs, steps, checkpoints",[["Run","One execution towards a goal.","blue"],["Step","One reasoning or action.","green"],["Checkpoint","Saved state.","purple"],["Continuation","Resume from a checkpoint.","amber"]],["Long-running work has to survive interruption."]),
VS("Concurrency","Everything in parallel",["Conflicting writes"],"Parallel where safe",["Independent reads together","Dependent writes in order"],["Parallelise what is safe."],"→","red","green"),
VS("Sagas and compensation","A database transaction",["All or nothing, held open"],"A saga",["Each step commits","A failure triggers compensating steps"],["Agents act across systems that cannot share one transaction."],"→","amber","green"),
VS("Actuation control","Reasoning",["Inside the model"],"Acting",["Through tools, under policy","With approval where needed"],["Thinking is free. Acting is controlled."],"and","blue","red"),
RC("8",[["Runtime","For agents."],["Checkpoints","And resumption."],["Concurrency","Where safe."],["Memory","And prompt assembly."],["Sagas","For transactions."],["Actions","Controlled."]])
]});
//@@ ch09-development-deployment
CH({slug:"ch09-development-deployment",n:"9",part:"Building and running",sub:"Building agents, and getting them to production safely.",end:"Start constrained. Loosen with evidence.",scenes:[
VS("A new development mindset","Conventional software",["Specified behaviour","Tested exactly"],"Agents",["Behaviour shaped by model, prompt, tools and data","Tested statistically"],["An agent can change without a line of code changing."],"→","blue","amber"),
VS("Start constrained","Open-ended from the start",["Unpredictable","Hard to trust"],"Constrained first",["A narrow task and few tools","Widened as it proves itself"],["The author’s advice for reliable workflows."],"→","red","green"),
PT("Version everything that shapes behaviour",[["Model","And its version.","blue"],["Prompts","And instructions.","green"],["Tools","And their schemas.","purple"],["Policies","And configuration.","amber"],["Knowledge","The data it retrieves.","red"]],["If it can change the behaviour, it needs a version."]),
PT("Releasing safely",[["Rings","Internal users first.","blue"],["Canaries","A small share of traffic.","green"],["Flags","Turn features on gradually.","purple"],["Kill switches","Stop at once.","amber"]],["Deployment is a business capability rollout, with people in the loop."]),
RC("9",[["Mindset","Behavioural."],["Constrained","First."],["Pipeline","With evaluation."],["Version","Everything."],["Rings","And canaries."],["Kill switch","Ready."]])
]});
//@@ ch10-testing-lifecycle
CH({slug:"ch10-testing-lifecycle",n:"10",part:"Building and running",sub:"Testing systems that do not give the same answer twice.",end:"From exact answers to behavioural validation.",scenes:[
VS("From exact to behavioural","A unit test",["Expects one exact output"],"An agent test",["Expects behaviour within acceptable bounds"],["The standard changes from equal to acceptable."],"→","blue","green"),
ST("Layers of testing",[["Behavioural","Whole tasks, judged against criteria.","purple",0.5],["Integration","Tools, contracts and writes.","blue",0.75],["Unit","Deterministic parts.","green",1.0]],["Test what is deterministic exactly, and the rest by behaviour."]),
PT("What to test",[["Tool calls","Right tool, right arguments.","blue"],["Writes","Authorised, and reversible.","green"],["Prompt injection","Hostile content.","purple"],["Cost and latency","Within budget.","amber"]],["Risk decides how much testing each area gets."]),
VS("Behavioural gates in the pipeline","No gate",["A prompt change ships untested"],"A gate",["The evaluation suite must pass","Within an acceptance band"],["Testing matters only if it can stop a release."],"→","red","green"),
RC("10",[["Behaviour","Validated."],["Hard","For four reasons."],["Risk-based","Strategy."],["Layers","Three."],["Evaluation","With judges."],["Gates","In CI/CD."]])
]});
//@@ ch11-infrastructure-security
CH({slug:"ch11-infrastructure-security",n:"11",part:"Building and running",sub:"The platform underneath, and how it stays in control.",end:"The agent may propose. The platform must control.",scenes:[
VS("Propose and control","The agent",["Proposes an action"],"The platform",["Checks identity, policy and limits","Then allows or refuses"],["Control lives outside the model."],"→","blue","green"),
PT("Security principles",[["Least privilege","Per agent and per tool.","blue"],["Delegated identity","Acting for a user, with their limits.","green"],["Isolation","Between agents and tenants.","purple"],["Audit","Every action recorded.","amber"],["Defence in depth","No single control.","red"]],["The chapter lists six."]),
VD("Threats particular to agents",[["Prompt injection",false,"Instructions hidden in content.","DEFEND","red"],["Tool abuse",false,"A permitted tool used for the wrong end.","DEFEND","red"],["Poisoned memory",false,"Bad data stored, and trusted later.","DEFEND","red"]],["Each needs a control at the platform level."],{sw:170}),
PT("Data protection",[["Personal data","Minimised and masked.","blue"],["Encryption","At rest and in transit.","green"],["Residency","Kept where the law requires.","purple"],["Network zones","Separating what must be apart.","amber"]],["Personal data travels fast in agent systems."]),
RC("11",[["Platform","Controls."],["Identity","Delegated."],["Privilege","The least."],["Threats","Injection, abuse, poisoning."],["Data","Protected."],["Checklist","Before go-live."]])
]});
//@@ ch12-delivery-operations
CH({slug:"ch12-delivery-operations",n:"12",part:"Building and running",sub:"Operating agents once they are live.",end:"Healthy dashboards can hide misbehaving agents.",scenes:[
VS("Healthy dashboards, misbehaving agents","Infrastructure metrics",["Uptime and latency: all green"],"Behavioural metrics",["Wrong answers","Wrong actions","Drift"],["An agent can be up, fast and wrong."],"→","green","red"),
PT("Who owns what",[["Business owner","The outcome.","blue"],["Product owner","The agent’s behaviour.","green"],["Platform team","The runtime.","purple"],["Risk and compliance","The guardrails.","amber"]],["Clear ownership, before something goes wrong."]),
PL("Operating loop",[["Observe","Behaviour, cost, quality."],["Detect","Drift and incidents.","blue"],["Respond","Roll back, or restrict.","amber"],["Improve","Prompts, tools, tests.","green"]],["Operations feed development."],{tc:"blue"}),
VS("Cost","Unwatched",["Token spend grows with use and with loops"],"Managed",["Budgets per agent","Alerts","Cheaper models where they suffice"],["Cost is an operational metric, like latency."],"→","red","green"),
RC("12",[["Behaviour","Must be observed."],["Ownership","Clear."],["Loop","Observe to improve."],["Incidents","Have a playbook."],["Cost","Managed."],["Feedback","Into development."]])
]});
