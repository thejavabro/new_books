//@@ ch01-why-agentic-systems-fail
CH({slug:"ch01-why-agentic-systems-fail",n:"1",part:"Part 1 · Foundations",sub:"Why pilots impress and then never reach production.",end:"The hard part starts on day two.",scenes:[
VS("The Day 2 problem","Day 1",["The demo works","Everyone is impressed"],"Day 2",["Who owns it? Who pays?","What happens when it is wrong?","Nobody had asked"],["Stakeholders do not care about the code. They care that it runs, safely, every day."],"→","green","red"),
VS("The proof-of-concept trap","A pilot",["A sensible way to start","Built to impress"],"The trap",["It hardens into a habit","Nothing was built to operate"],["A pilot that cannot become a product is a dead end."],"→","blue","amber"),
PT("Three pillars",[["Skills","People who can build and run agents.","blue"],["Context","Data the agents can trust.","green"],["Culture","An organisation ready to change.","purple"]],["Better models and better prompts do not close the gap."]),
PL("From Discovery to Run",[["Discovery","Find the use cases."],["Crawl","One agent, one team.","blue"],["Walk","Several, with shared rules.","purple"],["Run","An enterprise capability.","green"]],["Adoption moves through four levels, each with its own business win."],{tc:"blue"}),
RC("1",[["Outcomes","Not code."],["Day 2","Where pilots die."],["Trap","The endless pilot."],["Pillars","Skills, context, culture."],["Levels","Discovery to Run."],["Engineering","Not vibe coding."]])
]});
//@@ ch02-agentic-ai-foundation
CH({slug:"ch02-agentic-ai-foundation",n:"2",part:"Part 1 · Foundations",sub:"What an agent is, and what it needs to be managed.",end:"An agent is a managed system actor, not a throwaway function.",scenes:[
VS("Prompt chain or agent?","Prompt chain",["Fixed steps, set by the developer","The model fills each one in"],"Agent",["The model chooses the next step","It decides when it is done"],["The tell is who decides what happens next."],"VS","blue","purple"),
{type:"cycle",title:"The loop",center:"Agent",items:[{t:"Reason",d:"What do I know? What do I need?"},{t:"Act",d:"Call a tool."},{t:"Observe",d:"Read the result."}],cap:["The model supplies intelligence. Tools supply capability."]},
VS("Rightsizing models","Default",["The most capable model for every agent","High cost, high latency"],"Rightsized",["A smaller model for routine steps","The largest only where it pays"],["Match the model, and its thinking effort, to the step."],"→","amber","green"),
PT("Day 2 challenges",[["Ownership","Who runs it?","blue"],["Cost","Who pays, and how much?","green"],["Quality","How is drift caught?","purple"],["Security","What can it reach?","amber"],["Change","How is it updated?","red"]],["Governance gates check each one before go-live."]),
RC("2",[["Agent","A word worn thin."],["Tell","Who decides the next step."],["Loop","Reason, act, observe."],["Tools","Make it an agent."],["Lifecycle","Owned and managed."],["Rightsize","Model per step."]])
]});
//@@ ch03-single-and-multi-agent
CH({slug:"ch03-single-and-multi-agent",n:"3",part:"Part 1 · Foundations",sub:"How many agents a system really needs.",end:"Start with one. Earn each addition.",scenes:[
VS("How many agents do you need?","One agent",["A coherent role","The right tools","Easy to trace"],"Many agents",["Parallel work, separate expertise","Every handoff has a cost"],["Multi-agent systems are seductive. Most problems need fewer than you think."],"or","green","amber"),
PT("What each handoff costs",[["Context","Summarised, and thinned.","blue"],["Latency","Another round trip.","green"],["Tokens","Paid again.","purple"],["Traceability","Harder to follow.","amber"]],["Context rarely crosses a boundary intact."]),
VS("Design agents like job specs","Split by task",["One agent per step","Many handoffs"],"Split by role",["A clear responsibility","Its own tools and authority"],["If you do split, split by role."],"→","red","green"),
PT("What breaks when agents work together",[["Loops","Agents hand work back and forth.","blue"],["Conflicts","Two agents disagree.","green"],["Cascades","One error spreads.","purple"],["Diffusion","Nobody owns the result.","amber"]],["Multi-agent failures are emergent: they come from the interaction."]),
RC("3",[["Seductive","More agents."],["One","Is the default."],["Handoffs","Cost context."],["Roles","Not tasks."],["Maturity","Earn each stage."],["Failures","Emerge from interaction."]])
]});
//@@ ch04-core-architectural-patterns
CH({slug:"ch04-core-architectural-patterns",n:"4",part:"Part 2 · Design",sub:"The patterns that recur in agent systems.",end:"One agent, one pattern, one outcome, first.",scenes:[
VS("Planner and executor","Planner",["Works at the strategic level","Decomposes the goal","Decides what"],"Executor",["Carries out each step","Decides how"],["Separating the two makes each easier to check."],"and","purple","blue"),
PT("More patterns",[["Controller and worker","One owner, many specialists.","blue"],["Routing","Send each request to the right handler.","green"],["Reflection","Generate fast, check slowly.","purple"],["Hybrid","Reactive for triggers, deliberative for plans.","amber"]],["Each answers a different question about who decides."]),
VS("Separate who decides from who does","Control logic",["What should happen","Deterministic, in code"],"Execution",["Carrying it out","May use a model"],["Keep the decision about permission out of the model."],"and","blue","green"),
PT("Safety as a pattern",[["Input","Screen what comes in.","blue"],["Tools","Limit what can be called.","green"],["Output","Check what goes out.","purple"],["Human gate","Approve what cannot be undone.","amber"]],["Enforcement surfaces form the minimum viable guardrail."]),
RC("4",[["Readiness","Before patterns."],["Planner","What, not how."],["Controller","Routes to workers."],["Reflection","A second look."],["Control","Separate from doing."],["Safety","Built in."]])
]});
//@@ ch05-multi-agent-orchestration
CH({slug:"ch05-multi-agent-orchestration",n:"5",part:"Part 2 · Design",sub:"Coordinating agents across an enterprise.",end:"Start from the business process, not the agent boxes.",scenes:[
VS("Orchestration or choreography?","Orchestration",["A coordinator directs","Clear ownership"],"Choreography",["Agents react to events","Looser, harder to audit"],["The book favours supervision where accountability matters."],"or","blue","purple"),
PT("Routing and delegation",[["By intent","What the request is about.","blue"],["By capability","Who can do it.","green"],["By policy","Who is allowed to.","purple"],["Contracts","What is handed over, and what comes back.","amber"]],["A delegation contract makes a handoff checkable."]),
VS("Containing runaway autonomy","The risk",["A delegates to B, B to C","C acts three steps from any human"],"The limits",["A maximum depth","Budgets","Authority that narrows with each hop"],["Delegated authority should shrink, never grow."],"→","red","green"),
VS("The platform as a governance layer","One pioneer",["An expert builds a great agent","The advantage stays local"],"A platform",["Shared routing, identity and policy","Others can reuse it"],["How one success becomes an enterprise capability."],"→","amber","green"),
RC("5",[["Process","First."],["Supervise","Where it matters."],["Routing","Intent, capability, policy."],["Contracts","For delegation."],["Limits","On depth and budget."],["Platform","Makes it repeatable."]])
]});
//@@ ch06-context-memory-knowledge
CH({slug:"ch06-context-memory-knowledge",n:"6",part:"Part 2 · Design",sub:"Why context, not the model, decides most outcomes.",end:"The model was fine. The context was poisoned.",scenes:[
VS("Prompt and context","Prompt engineering",["The static instruction layer"],"Context engineering",["Everything assembled at run time","Data, memory, tool results"],["A flawless answer built on stale data is still wrong."],"→","blue","green"),
PT("Sources of context",[["Instructions","The fixed rules.","blue"],["Retrieved knowledge","Documents and data.","green"],["Memory","What happened before.","purple"],["Tool results","What was just learned.","amber"],["The request","What is being asked.","red"]],["Each agent gets a deliberate context profile."]),
PT("Budgeting the window",[["Reserve","Space for the answer.","blue"],["Prioritise","What must be present.","green"],["Compress","What can be shortened.","purple"],["Drop","What is not needed.","amber"]],["Even a very large window needs a budget."]),
PT("Context drift",[["Stale data","The source moved on.","blue"],["Schema change","Fields mean something new.","green"],["Accumulated noise","Old turns crowd in.","purple"],["Broken retrieval","The index is out of date.","amber"]],["Drift is silent, and measurable if you look."]),
RC("6",[["Context","Decides outcomes."],["Data","Strategy comes first."],["Not prompts","Context engineering."],["Sources","Chosen per agent."],["Budget","The window."],["Drift","Measure it."]])
]});
//@@ ch07-security-identity-guardrails
CH({slug:"ch07-security-identity-guardrails",n:"7",part:"Part 3 · Build and operate",sub:"What an enterprise needs before it lets an agent act.",end:"Tool availability is permission.",scenes:[
VS("Identity is the gate","A user",["Logs in","The session acts as them"],"An agent",["Whose authority does it carry?","Its own identity, with narrow rights"],["An agent can work perfectly and never ship, because nobody trusts what it can reach."],"→","blue","amber"),
VS("Visitor badges, not master keys","Long-lived key",["Works anywhere, for ever","Devastating if stolen"],"Short-lived credential",["Issued for one workload","Expires quickly"],["Federated workload identity replaces stored secrets."],"→","red","green"),
ST("Guardrails in three layers",[["Output","Check before anything leaves.","purple",0.5],["Tool","Limit what can be called, and how.","blue",0.75],["Input","Screen and sanitise.","green",1.0]],["No single layer is enough. Assume the model can be tricked."]),
VS("Least Agency","Least privilege",["The minimum access"],"Least agency",["The minimum autonomy","Only as much freedom to act as the task needs"],["If a tool is in the list, the agent can and will use it."],"and","blue","purple"),
RC("7",[["Trust","The barrier."],["Identity","For the agent itself."],["Credentials","Short-lived."],["Perimeter","Assume a tricked model."],["Guardrails","Three layers."],["Agency","The least that works."]])
]});
//@@ ch08-building-deploying-workflows
CH({slug:"ch08-building-deploying-workflows",n:"8",part:"Part 3 · Build and operate",sub:"Getting an agent from design to production.",end:"Build fast. Release deliberately.",scenes:[
VS("Two lanes","Build lane",["Fast, noisy, experimental","AI makes it faster still"],"Release lane",["Slow, gated, evidenced","Nothing skips it"],["Speed in one lane must not leak into the other."],"and","green","blue"),
PL("Three environments",[["Development","Anything goes."],["Staging","Production-like, with gates.","amber"],["Production","Locked down.","green"]],["Enforced by infrastructure, not by good intentions."],{tc:"blue"}),
PT("The resilience stack",[["Timeouts","For slow services.","blue"],["Retries","With backoff.","green"],["Circuit breakers","For failing ones.","purple"],["Fallbacks","A simpler path.","amber"],["Dead letters","For what cannot be processed.","red"]],["Each failure mode has a pattern."]),
PL("Cost-aware execution",[["Estimate","Before the run."],["Meter","During it.","blue"],["Stop","At the budget.","red"],["Review","Afterwards.","green"]],["You can watch token spend. You cannot forecast it without limits."],{tc:"blue"}),
RC("8",[["Journey","To production."],["Lanes","Build and release."],["Scope","Autonomy by stage."],["Environments","Three, enforced."],["Resilience","A pattern per failure."],["Cost","Checked three times."]])
]});
//@@ ch09-state-memory-persistence
CH({slug:"ch09-state-memory-persistence",n:"9",part:"Part 3 · Build and operate",sub:"What an agent must remember, and what must be recorded.",end:"Anything not captured at decision time is gone.",scenes:[
ST("A four-tier memory hierarchy",[["Decision record","What was decided, and why.","purple",0.4],["Long-term memory","Across sessions.","blue",0.6],["Session state","Within one task.","green",0.8],["Working memory","The context window.","amber",1.0]],["Like registers, RAM and disk, each tier is slower and longer-lived."]),
VS("Schema migration","The outage",["New code reads old state","The shape has changed"],"The pattern",["Version the state","Migrate on read","Test with old data"],["The most common Day 2 outage is a mismatch between code and stored state."],"→","red","green"),
PL("Long-running work",[["Dehydrate","Save the state."],["Wait","For a person or an event.","amber"],["Rehydrate","Load it back.","blue"],["Continue","Where it stopped.","green"]],["A request made on day one may be approved on day three."],{tc:"blue"}),
VS("Graceful amnesia","Remember everything",["Old facts resurface","Costs grow"],"Forget on purpose",["Expire what is stale","Keep what is still true"],["An agent that remembers everything eventually recalls the wrong thing."],"→","amber","green"),
RC("9",[["State","Not always needed."],["Tiers","Four."],["Migration","Version the state."],["Decisions","Recorded when made."],["Long work","Save and resume."],["Forgetting","By design."]])
]});
//@@ ch10-agentops-evalops
CH({slug:"ch10-agentops-evalops",n:"10",part:"Part 3 · Build and operate",sub:"Operating agents whose outputs vary.",end:"Up is not the same as right.",scenes:[
VS("Up is not the same as right","DevOps asks",["Is it running?","Is it fast?"],"AgentOps also asks",["Is the answer correct?","Was the path acceptable?"],["An agent can be healthy and wrong."],"→","blue","purple"),
ST("The evaluation pyramid",[["End-to-end","Whole tasks, a few.","purple",0.4],["Trajectory","Was the path sound?","blue",0.7],["Component","Tools and prompts, many.","green",1.0]],["Judge the path, not only the answer. A lucky result with a broken path is a time bomb."]),
PT("Control",[["Retries","With limits.","blue"],["Escalation","To a person.","green"],["Kill switch","Stops everything, fast.","purple"],["Budgets","On spend and steps.","amber"]],["Agents make decisions at high frequency, so they can break things quickly."]),
VS("Evaluation as deployment authority","One passing run",["Proves little"],"A suite, run many times",["Sets a pass rate","Blocks a release that falls below it"],["The evaluation decides whether a change ships."],"→","red","green"),
RC("10",[["Right","Not just up."],["Rails","Deterministic, around the agent."],["Pyramid","Three levels."],["Path","Counts."],["Kill switch","Ready."],["Evals","Gate releases."]])
]});
//@@ ch11-platform-engineering
CH({slug:"ch11-platform-engineering",n:"11",part:"Part 4 · Scale",sub:"Building agents repeatedly, without rebuilding the foundations.",end:"Make the governed path the easy path.",scenes:[
VS("The factory problem","Each team alone",["Rebuilds identity, logging, evals","Slow and inconsistent"],"A platform",["Provides them once","Teams build agents, not plumbing"],["The second agent should cost less than the first."],"→","amber","green"),
PT("Day 2 ownership",[["Who is on call?","Named.","blue"],["Who approves changes?","Named.","green"],["Who pays?","Named.","purple"],["Who retires it?","Named.","amber"]],["The hardest questions are not technical."]),
PT("Releasing",[["Shadow","Run on live traffic, unseen.","blue"],["Canary","A small share first.","green"],["Evaluate","Against the suite.","purple"],["Promote","Or roll back.","amber"]],["Pipelines for software that answers differently each time."]),
VS("Centralised or federated?","Centralised",["One platform team","Consistent rules"],"Federated",["Teams own more","Faster, with more drift"],["The book’s default is a central platform, with federation earned."],"or","blue","purple"),
RC("11",[["Factory","Not craft."],["Ownership","Named people."],["Pipelines","With evaluation."],["Shadow, canary","Then promote."],["Easy path","Is the governed one."],["Teams","Equip people first."]])
]});
//@@ ch12-operating-models
CH({slug:"ch12-operating-models",n:"12",part:"Part 4 · Scale",sub:"How organisations and roles change around agents.",end:"Multiply the experts. Do not replace them.",scenes:[
VS("Multiply, do not replace","Replace",["Remove the expert","Lose the judgement"],"Multiply",["One expert directs several agents","Their judgement reaches further"],["The unit of hybrid work is one person with a small squad of agents."],"→","red","green"),
ST("Humans govern, agents execute",[["Agents","Do the work.","green",1.0],["Supervisors","Review and correct.","blue",0.7],["Governors","Set strategy and policy.","purple",0.4]],["People sit at the top of the chart. Agents sit at the base."]),
VS("Copilot, assistant or full agency?","Start",["As a copilot","A person does the work"],"Earn",["More autonomy with evidence","Full agency only where risk allows"],["The default is to begin new domains with the least autonomy."],"→","blue","green"),
PT("How roles recompose",[["Developers","Some become builders of agents.","blue"],["Experts","Direct squads.","green"],["Managers","Govern outcomes.","purple"],["Culture as code","Context written down for agents.","amber"]],["Write the culture down, or re-explain it to every agent."]),
RC("12",[["Multiply","Experts."],["Squad","One person, a few agents."],["Govern","Humans."],["Maturity","Four stages."],["Autonomy","Earned."],["Culture","As code."]])
]});
//@@ ch13-mrep-reference-architecture
CH({slug:"ch13-mrep-reference-architecture",n:"A",part:"Appendix",sub:"The book’s running example, as one system.",end:"Close the distance between a demo and a system that runs.",scenes:[
PT("The whole book as one system",[["One example","A research platform, used throughout.","blue"],["Agents","With defined roles.","green"],["A perimeter","Around the research agents.","purple"],["Gates","Where they touch the outside.","amber"]],["Every chapter’s idea appears somewhere in it."]),
VS("No exfiltration, continuous ingestion","Inbound",["Data flows in continuously"],"Outbound",["Nothing leaves without passing a gate"],["The agents live inside a service perimeter."],"and","green","red"),
PL("The write-back gate",[["Agent proposes","A change outside the system."],["Policy check","Is it allowed?","blue"],["Human approval","For the consequential.","amber"],["Write","And record.","green"]],["Once an agent can change something, the gate matters most."],{tc:"blue"}),
VS("What to build, what to buy","Build",["What is specific to your business","Roles, context, evaluation"],"Buy",["What is commodity","Models, runtime, storage"],["A decision register records the load-bearing choices and why."],"and","purple","blue"),
RC("Appendix",[["Example","One system."],["Perimeter","Around the agents."],["Gates","In and out."],["Write-back","Approved."],["Build or buy","By differentiation."],["Register","Decisions, with reasons."]])
]});
