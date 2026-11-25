//@@ appendix-glossary
CH({slug:"appendix-glossary",n:"A",part:"Reference",sub:"A handful of terms the book relies on.",end:"Shared vocabulary makes the rest easier.",scenes:[
PT("Agent terms",[["Agent","A model that acts in a loop.","blue"],["Tool","A capability the agent can call.","green"],["Orchestration","How steps are sequenced.","purple"],["Memory","What is put back in the context.","amber"]],["The book’s own glossary is much longer."]),
PT("Retrieval terms",[["Embedding","Text as a vector.","blue"],["Vector search","Finding the nearest vectors.","green"],["Chunk","A piece of a document.","purple"],["RAG","Retrieve, then generate.","amber"]],["These recur in the memory chapters."]),
PT("Model terms",[["Token","A piece of text.","blue"],["Context window","What the model can see at once.","green"],["Fine-tuning","Further training on your data.","purple"],["Inference","Running the model.","amber"]],["General machine learning vocabulary."]),
PT("Operating terms",[["Trace","One request, step by step.","blue"],["Evaluation case","An input with an expected outcome.","green"],["Canary","A small share of traffic.","purple"],["Prompt injection","Instructions hidden in content.","amber"]],["From the chapters on validation, monitoring and security."]),
RC("Glossary",[["Agent","Acts in a loop."],["Tool","A callable capability."],["RAG","Retrieve, then generate."],["Token","A piece of text."],["Trace","A recorded run."],["Injection","Hidden instructions."]])
]});
//@@ ch01-introduction
CH({slug:"ch01-introduction",n:"1",part:"Foundations",sub:"What an agent is, and when it is the right tool.",end:"An agent is a loop, not a single answer.",scenes:[
{type:"cycle",title:"An agent is a loop",center:"Agent",items:[{t:"Analyse",d:"Read the situation."},{t:"Decide",d:"Choose the next step."},{t:"Act",d:"Use a tool."},{t:"Observe",d:"Check the result."}],cap:["It keeps going until the goal is met."]},
VD("Code, workflow, RAG or agent?",[["The rules are known and fixed",true,"Write ordinary code.","CODE","muted"],["Fixed steps that need language",true,"Chain model calls.","WORKFLOW","blue"],["Answers live in your documents",true,"Retrieve, then generate.","RAG","green"],["The path depends on what is found",true,"Let the model choose.","AGENT","purple"]],["An agent is not the default. It is the last option to reach for."],{sw:240}),
VS("Synchronous and asynchronous","Synchronous",["One step waits for the last","The user waits too"],"Asynchronous",["Steps run in parallel","The agent reports back when done"],["Agents shift work from waiting in line to working in parallel."],"→","amber","green"),
PT("Choosing a model and a framework",[["Start simple","A capable general model.","blue"],["Measure","On your own tasks.","green"],["Then optimise","Smaller or tuned models.","purple"],["Framework","Pick for control and fit, not fashion.","amber"]],["The book compares several frameworks and suggests starting with the simplest that works."]),
RC("1",[["Loop","Not one answer."],["Pretrained","Models changed the game."],["Choose","Code, workflow, RAG or agent."],["Model","Start simple."],["Parallel","Not in line."],["Framework","Fit over fashion."]])
]});
//@@ ch02-designing
CH({slug:"ch02-designing",n:"2",part:"Foundations",sub:"The parts of an agent system and the trade-offs between them.",end:"Start with one narrow, boring job.",scenes:[
PT("The four core components",[["Model","Reasons.","blue"],["Tools","Act.","green"],["Memory","Keeps context.","purple"],["Orchestration","Ties it together.","amber"]],["Every agent system combines these four."]),
PT("Ask three questions of every run",[["Did it finish?","The task was completed.","blue"],["Was it right?","The outcome was correct.","green"],["Was it efficient?","In steps, time and cost.","purple"]],["Running is not the same as working."]),
PT("Five trade-offs",[["Speed","How fast it answers.","blue"],["Accuracy","How often it is right.","green"],["Scale","How much load it takes.","purple"],["Reliability","How consistently it behaves.","amber"],["Cost","What each run costs.","red"]],["Design is choosing which to favour."]),
VS("One agent or several?","Single agent",["Simplest","Fits narrow, well-defined tasks"],"Multiple agents",["Specialised roles","More coordination and cost"],["Split only when one agent has too many tools or too many jobs."],"or","blue","purple"),
RC("2",[["Start small","One narrow job."],["Components","Model, tools, memory, orchestration."],["Model","Price per performance."],["Memory","Short and long term."],["Trade-offs","Five of them."],["Iterate","Evaluate in the real world."]])
]});
//@@ ch03-ux
CH({slug:"ch03-ux",n:"3",part:"Foundations",sub:"How people experience an agent, and what earns their trust.",end:"Trust is gained in drops and lost in buckets.",scenes:[
PT("Choosing a modality",[["Text","Everywhere, and flexible.","blue"],["Graphical","Reduces cognitive load.","green"],["Voice","Fast to say, slow to take in.","purple"],["Video","Rich, and demanding.","amber"]],["The best experiences flow across several."]),
ST("The autonomy slider",[["Acts on its own","Reports afterwards.","purple",0.4],["Acts unless stopped","The user can veto.","blue",0.6],["Asks before acting","The user approves.","green",0.8],["Suggests only","The user does the work.","muted",1.0]],["Different users, tasks and moments need different amounts of autonomy."]),
VD("Habits that build trust",[["Say what it can do",true,"Text agents suffer from poor discoverability.","DO","green"],["Say how sure it is",true,"Calibrated confidence.","DO","green"],["Remember context",true,"Users should not repeat themselves.","DO","green"],["Ask one focused question when unsure",true,"Not five.","DO","green"],["Interrupt constantly",false,"Notifications must earn their place.","AVOID","red"]],["People judge the agent by the experience, not the model."],{sw:170}),
VS("Failing gracefully","Badly",["A wrong answer, stated confidently","A dead end"],"Well",["Says what went wrong","Offers a next step or a person"],["Every agent fails sometimes. How it fails is a design choice."],"→","red","green"),
RC("3",[["Experience","Is the product."],["Modalities","Mix them."],["Autonomy","A slider."],["Memory","Saves repetition."],["Honesty","About limits."],["Trust","Slow to earn."]])
]});
//@@ ch04-tools
CH({slug:"ch04-tools",n:"4",part:"Building blocks",sub:"Giving an agent skills, safely.",end:"The model sees the name and the description, never the code.",scenes:[
VS("The description is part of the tool","Poor",["A vague name","No parameter hints"],"Good",["A name that says what it does","When to use it","Typed parameters"],["The model never sees your function body."],"→","red","green"),
PT("Four ways to give an agent a tool",[["Local function","In the same process.","blue"],["API","A remote service.","green"],["Plug-in","Packaged by a platform.","purple"],["MCP server","A standard protocol.","amber"]],["Each trades convenience against control."]),
VS("MCP: from N×M to N+M","Before",["Each agent needs an adapter for each tool"],"After",["Tools speak one protocol","Agents speak it too"],["Adapters add up instead of multiplying."],"→","amber","green"),
PL("Validate, retry, fall back, log",[["Validate","The arguments."],["Retry","With the error fed back.","blue"],["Fall back","To a simpler path.","amber"],["Log","Every call.","green"]],["Even good agents skip calls, or emit invalid arguments."],{tc:"blue"}),
RC("4",[["Tools","Are skills."],["Describe","With care."],["Four ways","Local to MCP."],["Least power","For tools that change state."],["Control","When tools are used."],["Recover","Validate and retry."]])
]});
//@@ ch05-orchestration
CH({slug:"ch05-orchestration",n:"5",part:"Building blocks",sub:"How an agent selects tools, fills them in and sequences them.",end:"Match the strategy to the task.",scenes:[
PT("Choosing the tool",[["Standard","All tools in the prompt.","blue"],["Semantic","Retrieve the relevant ones.","green"],["Hierarchical","Pick a group, then a tool.","purple"]],["Tool selection gets harder as the toolbox grows."]),
PT("Shapes of execution",[["Single","One call.","blue"],["Parallel","Several at once.","green"],["Chain","One after another.","purple"],["Graph","Branches and joins.","amber"]],["Most chatbots make a single call. Complex tasks need a graph."]),
PL("Context engineering",[["Decide","What goes in the window."],["Order","What comes first.","blue"],["Compress","What is long.","purple"],["Refresh","What has gone stale.","green"]],["The window is the agent’s whole view of the world."],{tc:"blue"}),
VS("Choosing an approach","Simple tasks",["One call, or a short chain","Fast and cheap"],"Complex tasks",["Planning and a graph","Slower, more capable"],["Add planning only when the task needs it."],"and","green","purple"),
RC("5",[["Patterns","Ways to think."],["Selection","Standard, semantic, hierarchical."],["Arguments","Filled by the model."],["Shape","Single to graph."],["Context","Engineered."],["Fit","Strategy to task."]])
]});
//@@ ch06-memory
CH({slug:"ch06-memory",n:"6",part:"Building blocks",sub:"Search, retrieval and notes.",end:"Memory is what you put back in the window.",scenes:[
VS("Two kinds of search","Keyword",["Fast and exact","Misses synonyms"],"Embeddings",["Matches meaning","Can miss exact terms"],["Many systems combine both."],"and","amber","blue"),
PL("Retrieval-augmented generation",[["Chunk","The documents."],["Embed","And index them.","blue"],["Retrieve","The closest chunks.","purple"],["Generate","With them in the prompt.","green"]],["Retrieve relevant pieces, then answer from them."],{tc:"blue"}),
VS("GraphRAG","Baseline RAG",["Finds similar chunks","Struggles to connect facts across documents"],"GraphRAG",["Builds a graph of entities and relations","Follows the links"],["It answers questions that need the dots joined."],"→","amber","green"),
VS("Why not stuff everything in?","Whole corpus in the window",["Costly and slow","Key facts get lost"],"Selected context",["Cheaper","The model attends to what matters"],["Large windows tempt you to skip retrieval. Resist."],"→","red","green"),
RC("6",[["Memory","Is context."],["Keyword","Precise, literal."],["Embeddings","By meaning."],["RAG","Retrieve, then generate."],["Graphs","Connect facts."],["Notes","Working memory."]])
]});
//@@ ch07-learning
CH({slug:"ch07-learning",n:"7",part:"Building blocks",sub:"How agents improve, with and without changing weights.",end:"Start without training. Tune when the task is narrow and stable.",scenes:[
VS("Two ways to improve","Without changing weights",["Examples in the prompt","Notes from past attempts","Rules that proved useful"],"By changing weights",["Fine-tuning","Needs data and compute"],["Most teams should start on the left."],"and","green","purple"),
PT("Learning without training",[["Exemplars","Show good behaviour in the prompt.","blue"],["Reflexion","Write a note after failing.","green"],["Experiential learning","Keep rules that earn their place.","purple"]],["Lessons are stored as text and read back."]),
VD("Should you fine-tune?",[["A narrow, stable task at high volume",true,"A small tuned model is cheaper.","YES","green"],["Still changing the product weekly",false,"Prompts are easier to change.","NOT YET","amber"],["No labelled examples",false,"Collect data first.","NOT YET","amber"],["Function calling in a fixed format",true,"Supervised tuning suits it.","YES","green"]],["Fine-tuning is an optimisation, not a starting point."],{sw:210}),
VS("The promise of small models","Large general model",["Capable at everything","Costly and slower"],"Small tuned model",["Matches it on one narrow task","Cheap and fast"],["Supervised fine-tuning on input and output pairs is the foundation."],"→","amber","green"),
RC("7",[["Two ways","Prompt or weights."],["Exemplars","Show, do not tell."],["Reflexion","Notes after failure."],["Rules","That earn their place."],["Tune","When narrow and stable."],["Small","Can match large."]])
]});
//@@ ch08-multiagent
CH({slug:"ch08-multiagent",n:"8",part:"Scaling up",sub:"When to add agents, and how they coordinate.",end:"Start with one agent. Split when the tools pile up.",scenes:[
VS("A supervisor routes to specialists","One agent",["Every tool in one prompt","Wrong picks rise"],"Supervisor and specialists",["Each specialist has a few tools","The supervisor routes the request"],["The same tools, divided."],"→","amber","green"),
PT("How agents coordinate",[["Supervisor","One decides for all.","blue"],["Hierarchy","Supervisors of supervisors.","green"],["Peer to peer","Agents hand off directly.","purple"],["Swarm","Simple rules, emergent behaviour.","amber"]],["Each is a different answer to who decides."]),
PL("Actor and critic",[["Actor","Drafts."],["Critic","Scores the draft.","amber"],["Revise","Using the critique.","blue"],["Accept","When the critic approves.","green"]],["Generate until the critic is satisfied, within a limit."],{tc:"blue"}),
PT("Connecting agents across processes",[["Agent-to-Agent protocol","A common language.","blue"],["Message brokers","Decouple senders and receivers.","green"],["Actor frameworks","State and behaviour together.","purple"],["Durable workflows","Survive restarts.","amber"]],["Point-to-point calls get brittle as systems grow."]),
RC("8",[["One first","Then split."],["Supervisor","Routes."],["Swarm","Emergent."],["Critic","Checks the actor."],["Protocols","Between agents."],["State","Shared, and stored."]])
]});
//@@ ch09-validation
CH({slug:"ch09-validation",n:"9",part:"Operating",sub:"Knowing whether an agent works.",end:"Measurement is the keystone.",scenes:[
PT("Anatomy of an evaluation case",[["Input state","What the agent starts with.","blue"],["Expected outcome","What should be true after.","green"],["Expected path","Which tools, roughly.","purple"],["Scoring","How it is judged.","amber"]],["A good case is specific enough to fail."]),
PT("Unit-test the parts",[["Tools","Ordinary automated tests.","blue"],["Planning","Was the plan sensible?","green"],["Memory","Was the right thing recalled?","purple"],["Learning","Did it improve?","amber"]],["Then test the whole, end to end."]),
VS("Same input, many runs","One run",["May be lucky"],"Many runs",["Shows consistency","Reveals rare failures"],["Models are probabilistic, so one good run proves little."],"→","amber","green"),
VD("Quality gates before deployment",[["A pass rate on the core suite",true,"Set a threshold in advance.","GATE","blue"],["Hostile and malformed inputs",true,"Typos, empty messages, injection.","GATE","blue"],["No regression against the last version",true,"Compare.","GATE","blue"]],["Explicit release criteria, agreed before the test."],{sw:160}),
RC("9",[["Measure","Or you are guessing."],["Cases","State and outcome."],["Parts","Tested alone."],["Runs","Many."],["Hostile","Inputs too."],["Gates","Before release."]])
]});
//@@ ch10-monitoring
CH({slug:"ch10-monitoring",n:"10",part:"Operating",sub:"Watching agents in production.",end:"Monitoring is how you learn.",scenes:[
ST("What to measure, layer by layer",[["Business","Tasks completed, satisfaction.","green",0.4],["Agent","Tool choices, steps, retries.","blue",0.6],["Model","Tokens, latency, errors.","purple",0.8],["Infrastructure","CPU, memory, uptime.","amber",1.0]],["Each layer has its own action when a metric moves."]),
PT("Traces and spans",[["Trace","One request, end to end.","blue"],["Span","One step inside it.","green"],["Attributes","Prompt, tool, tokens, result.","purple"],["Together","What the agent actually did.","amber"]],["Instrument every node of the graph."]),
PT("Shipping changes safely",[["Shadow","Run beside production, unseen.","blue"],["Canary","A small share of traffic.","green"],["Rollback","One step away.","purple"],["Feature flags","Switch without deploying.","amber"]],["Monitoring turns into safe change."]),
VS("Catching distribution shift","What changes",["New products and slang","Seasonal spikes","New kinds of request"],"What to do",["Compare inputs with the past","Alert on drift","Refresh evaluation cases"],["Users change, and the agent must follow."],"→","amber","green"),
RC("10",[["Learn","From production."],["Layers","Four of them."],["Traces","Step by step."],["Dashboards","Show agent behaviour."],["Canary","Ship safely."],["Drift","Watch the inputs."]])
]});
//@@ ch11-improvement
CH({slug:"ch11-improvement",n:"11",part:"Operating",sub:"Turning failures into fixes.",end:"Failure is inevitable. Improvement is a cycle.",scenes:[
{type:"cycle",title:"The improvement loop",center:"Improve",items:[{t:"Detect",d:"Find the failures."},{t:"Diagnose",d:"Find the root cause."},{t:"Fix",d:"Prompt, tool or model."},{t:"Test",d:"Experiment before rollout."}],cap:["Each turn makes the next failure rarer."]},
PT("Where fixes land",[["Prompts","Ambiguous, or too broad.","blue"],["Tools","Poor descriptions or outputs.","green"],["Retrieval","The wrong context.","purple"],["Model","Too weak, or too costly.","amber"]],["Aggregate similar issues, then prioritise by impact."]),
PT("Experiments",[["Shadow","Validate quietly.","blue"],["A/B test","Split traffic evenly.","green"],["Staged rollout","Widen gradually.","purple"],["Bandit","Shift traffic as you learn.","amber"]],["A bandit sends more traffic to the variant that is winning."]),
VS("When to escalate to people","Automation",["Flags and groups issues","Tunes prompts"],"People",["Judge the hard cases","Decide what matters"],["Automated prompt optimisation helps. It does not replace judgement."],"and","blue","green"),
RC("11",[["Cycle","Not a one-off."],["Detect","Then diagnose."],["Fix","At the right layer."],["Prioritise","By impact."],["Experiment","Before rollout."],["People","For hard cases."]])
]});
//@@ ch12-security
CH({slug:"ch12-security",n:"12",part:"Operating",sub:"Threats particular to agents, and layers of defence.",end:"No single defence is enough.",scenes:[
PT("Why agents need their own security thinking",[["They act","Not only answer.","blue"],["They read untrusted content","Web pages, emails, files.","green"],["They hold credentials","For their tools.","purple"],["They chain steps","One mistake spreads.","amber"]],["Prompt-based attacks blend in with legitimate input."]),
ST("Defence in depth",[["Monitoring","Detect and respond.","muted",0.4],["Output checks","Before anything leaves.","purple",0.55],["Least privilege","Narrow roles and tools.","blue",0.7],["Isolation","Sandbox what runs.","green",0.85],["Input sanitisation","At the door.","amber",1.0]],["Layer the defences so that one failure is not a breach."]),
PL("Red teaming",[["Model the threats","What could go wrong?"],["Attack yourself","With experts and tools.","amber"],["Fix","What was found.","blue"],["Repeat","After every change.","green"]],["Frameworks built for agents add autonomy and agent interaction to classic threat models."],{tc:"blue"}),
PT("Protecting data",[["Encrypt","At rest and in transit.","blue"],["Provenance","Know where data came from.","green"],["Integrity","Detect tampering.","purple"],["Minimise","Keep only what is needed.","amber"]],["Give each agent the narrowest role it needs."]),
RC("12",[["New risks","Agents act."],["Injection","Hides in content."],["Layers","Defence in depth."],["Red team","Attack first."],["Data","Encrypt and trace."],["Privilege","The least that works."]])
]});
//@@ ch13-humans
CH({slug:"ch13-humans",n:"13",part:"Operating",sub:"How people and agents share work.",end:"Autonomy is earned, and can be withdrawn.",scenes:[
ST("The human’s role changes",[["Sets policy","And audits.","purple",0.4],["Reviews exceptions","Steps in when needed.","blue",0.6],["Approves each action","Before it happens.","green",0.8],["Does the work","The agent assists.","muted",1.0]],["As the agent matures, the person moves from doing, to approving, to overseeing."]),
VS("Progressive delegation","Start",["Low-risk tasks","Every action reviewed"],"Later",["Wider scope","Reviews by exception"],["Trust is not binary. After a failure, narrow the scope and rebuild."],"→","amber","green"),
PT("Scopes of memory",[["Personal","One person’s preferences.","blue"],["Team","Shared tasks and context.","green"],["Enterprise","Policies and records.","purple"],["Boundaries","What may cross between them.","amber"]],["An agent serving several scopes must keep them apart."]),
VD("Escalation: act, ask or defer",[["Low risk, reversible",true,"Go ahead.","ACT","green"],["Uncertain, or costly to undo",true,"Check with a person.","ASK","amber"],["Out of scope, or prohibited",true,"Hand over.","DEFER","red"]],["Someone must be accountable for every agent action."],{sw:160}),
RC("13",[["Roles","Shift with maturity."],["Adoption","A journey."],["Scopes","Personal to enterprise."],["Delegation","Progressive."],["Accountability","Logged and audited."],["Escalation","Act, ask or defer."]])
]});
