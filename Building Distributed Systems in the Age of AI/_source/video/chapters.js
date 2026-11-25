//@@ ch01-setting-the-focus
CH({slug:"ch01-setting-the-focus",n:"1",part:"Part I · Architecture",sub:"What architecture is for, and why the starting point matters.",end:"Architecture is a bet on tomorrow.",scenes:[
VS("Architecture is a bet on tomorrow","Today’s load",["Can nearly always be served by something simple"],"Tomorrow’s change",["New features, new teams, new users","This is what the structure must absorb"],["Design for the changes you expect, not only the traffic you have."],"→","muted","blue"),
PT("What shifted",[["Users","Expect answers, not screens.","blue"],["Software","Now includes models that decide.","green"],["Teams","Build with AI assistance.","purple"],["Callers","May be agents, not people.","amber"]],["There is no single start date for the shift."]),
ST("Ways to structure a system",[["Agents","Components that decide.","purple",0.4],["Streaming","React to data as it flows.","blue",0.55],["Message-driven","Communicate by events.","green",0.7],["Microservices","Independent services.","amber",0.85],["Monolith","One deployable unit.","muted",1.0]],["Structurally there are only a handful of options, and they combine."]),
VS("Do not start with the monolith","The familiar advice",["Start with a monolith","Split it later"],"The author’s view",["The split rarely happens cleanly","Draw the boundaries from the start, pragmatically"],["The book argues for pragmatic microservices from day one."],"→","amber","green"),
RC("1",[["Bet","On tomorrow."],["Shift","In users and callers."],["Structures","A handful."],["Boundaries","Draw them early."],["Pragmatic","Not dogmatic."],["Road","Classic first, then AI."]])
]});
//@@ ch02-revising-microservices
CH({slug:"ch02-revising-microservices",n:"2",part:"Part I · Architecture",sub:"Service design, seen in three dimensions.",end:"Let the domain shape the service, not the storage.",scenes:[
VS("Domain-driven or process-driven?","Domain-driven",["Services around business concepts"],"Process-driven",["Services around steps of a flow"],["Two schools of service design. Most systems use both."],"or","blue","purple"),
PT("The three-dimensional service",[["Bounded context","The business meaning.","blue"],["Deployable units","One or several processes.","green"],["Codebase","Where it lives.","purple"]],["One logical unit, seen three ways."]),
PL("From one file to domain-centric",[["One file","Everything together."],["Layers","Presentation, logic, data.","blue"],["Domain at the centre","Storage and transport depend on it.","green"]],["Code structure tends to evolve in this order."],{tc:"blue"}),
VS("Make the service scream","Technical folders",["controllers, services, repositories","Says how it is built"],"Use cases",["place order, cancel order","Says what it does"],["A screaming architecture tells the reader its purpose."],"→","amber","green"),
RC("2",[["Two schools","Domain and process."],["3D service","Context, units, code."],["Monorepo","Holds it together."],["Layers","Have a blind spot."],["Domain","At the centre."],["Use cases","Named in the code."]])
]});
//@@ ch03-message-driven
CH({slug:"ch03-message-driven",n:"3",part:"Part I · Architecture",sub:"General background: this chapter was missing from the source file.",end:"Messages decouple services in time.",scenes:[
VS("A note on this chapter","Missing",["Chapter 3 was not in the source PDF"],"So",["This page is general background on the topic","It is not a summary of the book’s chapter"],["Later chapters of the book lean on these ideas."],"→","amber","blue"),
VS("Request and message","Request and reply",["The caller waits","Both must be up at once"],"Message",["The sender carries on","The receiver works when it can"],["Messaging decouples services in time."],"VS","amber","green"),
PT("Kinds of message",[["Command","Asks for something to be done.","blue"],["Event","Says that something happened.","green"],["Query","Asks for information.","purple"]],["Events are facts. Commands can be refused."]),
VS("Queue and topic","Queue",["Each message goes to one consumer","Work is shared"],"Topic",["Each message goes to every subscriber","News is broadcast"],["Two delivery shapes for two needs."],"and","blue","purple"),
RC("Message-driven systems",[["Missing","From the source file."],["Background","Not the book’s text."],["Decoupling","In time."],["Kinds","Command, event, query."],["Queue","One consumer."],["Topic","Every subscriber."]])
]});
//@@ ch04-streaming
CH({slug:"ch04-streaming",n:"4",part:"Part I · Architecture",sub:"Reacting to data as it arrives.",end:"From serving requests to reacting to data.",scenes:[
VS("From serving to reacting","A service",["Waits for a request","Answers it"],"A stream processor",["Receives data continuously","Reacts as it arrives"],["The direction of initiative reverses."],"→","blue","green"),
PT("Windows",[["Tumbling","Fixed, no overlap.","blue"],["Sliding","Fixed, overlapping.","green"],["Session","Closed by a gap.","purple"]],["A window makes an endless stream countable."]),
VS("Event time and late data","Event time",["When it happened"],"Processing time",["When it was seen"],["A watermark says how long to wait for late events before closing a window."],"VS","blue","amber"),
VS("A streaming mindset on a small budget","Heavy",["A full streaming platform","A team to run it"],"Light",["A log or a queue","A small processor","The same ideas"],["Streaming does not require a heavyweight stack. AI systems want fresh data."],"→","amber","green"),
RC("4",[["React","To data."],["Windows","Make it countable."],["Two times","Event and processing."],["Watermarks","Handle lateness."],["Fresh data","What AI needs."],["Small","Start light."]])
]});
//@@ ch05-agentic
CH({slug:"ch05-agentic",n:"5",part:"Part I · Architecture",sub:"Agents as an architectural style.",end:"The model proposes. The runtime acts.",scenes:[
{type:"cycle",title:"The agent loop",center:"Agent",items:[{t:"Observe",d:"Gather the context."},{t:"Reason",d:"The model decides."},{t:"Act",d:"The runtime calls a tool."}],cap:["A model only produces tokens. The runtime turns them into actions."]},
VS("Memory","The model",["Keeps nothing between calls"],"The application",["Stores the conversation","Stores long-term facts","Puts back what is relevant"],["The model forgets. The app remembers."],"→","amber","green"),
VS("Prompt injection","The problem",["Input is one sheet of text","Instructions and data look alike"],"Defences",["Least privilege for tools","Separate trusted and untrusted content","Approval for risky actions"],["An agent that reads untrusted content can be told what to do by it."],"→","red","green"),
VS("Many agents","Orchestration",["One coordinator directs","Easier to follow"],"Choreography",["Agents react to events","Looser, harder to trace"],["The same choice as in microservices."],"or","blue","purple"),
RC("5",[["Old idea","New brain."],["Loop","Observe, reason, act."],["Tools","Called by the runtime."],["Memory","In the application."],["Injection","Defend in layers."],["Many agents","Two ways to coordinate."]])
]});
//@@ ch06-real-world-example
CH({slug:"ch06-real-world-example",n:"6",part:"Part I · Architecture",sub:"A scooter-sharing platform that uses every style.",end:"No single style covers everything.",scenes:[
ST("Three layers, one platform",[["Agents","Propose and act.","purple",0.5],["Streaming","Telemetry from the fleet.","blue",0.75],["Services and events","Search, booking, payment.","green",1.0]],["Patterns rarely appear alone."]),
PL("From search to ride",[["Search","Find a scooter."],["Reserve","A command.","blue"],["Unlock","The ride begins.","purple"],["Ride","Telemetry streams.","amber"],["Pay","At the end.","green"]],["One journey crosses services, events and streams."],{tc:"blue"}),
VS("An event bus is not a queue","Queue",["Work for one consumer","Removed when done"],"Event bus",["Facts for anyone interested","Many independent readers"],["The same technology may carry both. The meaning differs."],"VS","amber","blue"),
VS("Two kinds of agent","Proposes",["Blends data into a suggestion","A person decides"],"Acts",["Carries out bounded actions","Within limits set in advance"],["Decide which kind each agent is."],"and","blue","purple"),
RC("6",[["Layers","Three of them."],["Journey","Across styles."],["Telemetry","Finds faults."],["Bus","Not a queue."],["Agents","Propose or act."],["Integration","Each pattern where it fits."]])
]});
//@@ ch07-observability
CH({slug:"ch07-observability",n:"7",part:"Part I · Architecture",sub:"Seeing what a non-deterministic system did, and why.",end:"Capture the reasoning, not just the code path.",scenes:[
VS("The implicit contract","Deterministic systems",["The same input, the same path","Logs explain it"],"Agentic systems",["The path is chosen at run time","The reason is not in the code"],["Agents break the assumption behind classic observability."],"→","blue","amber"),
PT("Capturing the reasoning",[["The prompt","What the model saw.","blue"],["The decision","Which tool, with what.","green"],["The result","What came back.","purple"],["The chain","How one step led to the next.","amber"]],["Logs, traces and metrics still work. Their usefulness shifts."]),
PT("Metrics for decisions",[["Task success","Was the goal met?","blue"],["Tool accuracy","Were the right tools called?","green"],["Cost per task","In tokens.","purple"],["Escalations","How often a person stepped in.","amber"]],["Latency alone says little about an agent."]),
VS("The economics of watching","Record everything",["Tens of thousands of tokens per interaction","Storage and privacy costs"],"Sample and summarise",["Full detail for failures","Summaries for the rest"],["Logs may also become evidence for regulators."],"→","amber","green"),
RC("7",[["Contract","Broken by agents."],["Pillars","Still useful."],["Reasoning","Must be captured."],["Metrics","About decisions."],["People","Remain accountable."],["Cost","Watch it too."]])
]});
//@@ ch08-systems-powered-by-ai
CH({slug:"ch08-systems-powered-by-ai",n:"8",part:"Part I · Architecture",sub:"Three depths at which AI enters a system.",end:"Know how much of the control flow you have handed over.",scenes:[
ST("Three depths of AI in a system",[["Level 3","People set goals and tend the system.","purple",0.5],["Level 2","The model decides the steps.","blue",0.75],["Level 1","A model as a function.","green",1.0]],["The levels add up. A system can use all three."]),
VS("Level 1: a model as a function","The engineer decides",["When the model is called","With what input"],"The model",["Returns an output","Nothing more"],["Classify, extract, summarise. The control flow stays in code."],"and","blue","green"),
VS("Level 2: the model runs the show","Before",["Code decides the steps"],"Now",["The model picks tools and parameters","Code enforces the limits"],["The engineer designs the boundaries."],"→","amber","purple"),
VS("Level 3: from hunting to herding","Hunting",["Chase each task by hand"],"Herding",["Tend a system that does the tasks","Watch, guide, correct"],["The human role moves from doing to supervising."],"→","amber","green"),
RC("8",[["AI","A moving definition."],["Depths","Three."],["Function","The model as a call."],["Control","Handed to the model."],["Herding","People supervise."],["Limits","Enforced in code."]])
]});
//@@ ch09-using-ai-to-build
CH({slug:"ch09-using-ai-to-build",n:"9",part:"Part II · Building with AI",sub:"How engineers work with coding agents.",end:"Shape the work. Do not just accept it.",scenes:[
VS("Seven-league boots","With an agent",["Far faster over known ground"],"Still needed",["Knowing where to go","Checking where you landed"],["Speed without direction covers the wrong distance quickly."],"and","green","amber"),
VD("When barefoot is the right choice",[["The process teaches you the domain",true,"Write it yourself.","BY HAND","blue"],["A small, delicate change",true,"Faster than explaining it.","BY HAND","blue"],["Well-described, repetitive work",true,"Delegate.","AGENT","purple"],["Exploring options quickly",true,"Delegate.","AGENT","purple"]],["Writing by hand still pays when the process is the point."],{sw:220}),
VS("Shaping, not writing","Left alone",["The output works","It reflects no design"],"Shaped",["You set structure and constraints","You review against them"],["The engineer’s job moves from typing to steering."],"→","red","green"),
VS("Shifting bottlenecks","Before",["Writing code was the constraint"],"After",["Review, testing and deciding what to build"],["Speed up one stage, and the queue moves to the next."],"→","amber","blue"),
RC("9",[["Boots","Fast, not wise."],["Barefoot","Sometimes better."],["Shape","The work."],["Delegate","Deliberately."],["Not a person","Do not treat it as one."],["Bottleneck","Moves downstream."]])
]});
//@@ ch10-code-for-ai
CH({slug:"ch10-code-for-ai",n:"10",part:"Part II · Building with AI",sub:"Which coding conventions still matter when a model reads the code.",end:"Keep what carries meaning. Drop what only eased the eye.",scenes:[
VS("A different kind of reader","A person",["Holds a few things in mind","Reads slowly, tires"],"A model",["Reads everything in its window","Fast, with no memory between sessions"],["Many conventions follow from human limits."],"VS","blue","purple"),
VD("Which conventions still earn their keep?",[["Clear names",true,"The agent’s main anchors.","KEEP","green"],["Types",true,"Constraints it can check.","KEEP","green"],["Tests",true,"How it knows it worked.","KEEP","green"],["Rules that only saved typing or screen space",false,"Matter less to a model.","RELAX","amber"]],["Conventions that convey meaning stay."],{sw:170}),
PT("Stable anchors",[["Names","Say what a thing is.","blue"],["Types","Say what it may hold.","green"],["Module boundaries","Say what may call what.","purple"]],["These survive any change of reader."]),
PT("Memory files for agents",[["What","Architecture, conventions, commands.","blue"],["Why","The agent starts each session blank.","green"],["Where","In the repository.","purple"],["Keep","Short and current.","amber"]],["If the agent has no architectural memory, give it one."]),
RC("10",[["Reader","Has changed."],["Limits","Human ones shaped style."],["Meaning","Keep it."],["Names","Anchors."],["Types","Constraints."],["Memory","Written down."]])
]});
//@@ ch11-programming-language-for-ai
CH({slug:"ch11-programming-language-for-ai",n:"11",part:"Part II · Building with AI",sub:"Whether languages will change now that models write the code.",end:"Expect layers, not a replacement.",scenes:[
VS("Why still human languages?","For",["Vast training data in them","People must still review"],"Against",["Designed around human limits","Verbose for a machine"],["Language committees are quiet. The market is not."],"VS","blue","amber"),
VS("Where it ships today","Plain tool calling",["Every step is a round trip to the model"],"Code as orchestration",["The model writes a short program","It runs many steps at once"],["Tool orchestration is the first place this shows up."],"→","amber","green"),
VS("Natural language as source code?","The appeal",["Say what you want"],"The catch",["Prose is ambiguous","A compiler needs a precise specification"],["A formal layer has to remain somewhere."],"VS","green","red"),
ST("The likely shape: layers",[["Intent","Natural language.","green",0.5],["Specification","Precise and checkable.","blue",0.75],["Execution","Formal code.","purple",1.0]],["The realistic path, as the author sees it, is stratification."]),
RC("11",[["Question","Why human languages?"],["Data","Keeps them in place."],["Orchestration","Code written by models."],["Prose","Too ambiguous alone."],["Formal","Layer stays."],["Layers","Intent to execution."]])
]});
//@@ ch12-full-stack-team
CH({slug:"ch12-full-stack-team",n:"12",part:"Part II · Building with AI",sub:"What changes for teams when code is cheap.",end:"Faster engines, same traffic jam.",scenes:[
VS("Faster engines, same traffic jam","Faster code generation",["More output per person"],"The jam",["Review","Decisions","Coordination between teams"],["Team throughput is set by the slowest stage."],"→","green","amber"),
VS("Broken estimations","Before",["Points blended complexity, effort and uncertainty"],"Now",["AI cuts effort","Complexity and uncertainty remain"],["Old estimates no longer mean what they did."],"→","muted","amber"),
VS("Commitment cannot be automated","Can be automated",["Notes and summaries","Extracting action items"],"Cannot",["Caring about the outcome","Promising to do it"],["A tool can record a commitment. Only a person can make one."],"VS","blue","green"),
PT("Agents on the team",[["Someone configures each one","So someone owns it.","blue"],["They work around the clock","On well-described issues.","green"],["Their output needs review","By a person.","purple"],["The team reaches further","Without growing.","amber"]],["The team becomes a few people with many arms."]),
RC("12",[["Full-stack","Redefined."],["Jam","Moves to review."],["Estimates","Need rethinking."],["Overnight","Agents keep working."],["Commitment","Stays human."],["Ownership","Of every agent."]])
]});
//@@ ch13-approachable
CH({slug:"ch13-approachable",n:"13",part:"Part III · Consequences",sub:"Designing systems that agents can use as well as people.",end:"Your next user may not be a person.",scenes:[
VS("Make your API agent-friendly","For a developer",["Read the docs once","Write code for every case"],"For an agent",["Reads descriptions at run time","Needs clear errors and next steps"],["An agent learns your API each time it uses it."],"→","blue","purple"),
PT("An MCP server is not a wrapper",[["Tools","Actions the model calls.","blue"],["Resources","Data it can read.","green"],["Prompts","Templates it can use.","purple"],["Design","For tasks, not endpoints.","amber"]],["Mirroring every endpoint gives the model too many choices."]),
VS("Keep the UI human, add shortcuts","For people",["A clear interface"],"For agents",["An API or a protocol for the same action","No need to click through screens"],["Serve both, without making either worse."],"and","green","blue"),
PT("More ways in",[["Agent-to-agent","Expose your own agents.","blue"],["Events","As a public contract.","green"],["Headless","Capability without a screen.","purple"]],["Many callers are not agents at all: they are other systems."]),
RC("13",[["Users","Not only people."],["APIs","Self-describing."],["MCP","Designed for tasks."],["UI","Still human."],["A2A","Agents as a service."],["Events","A public contract."]])
]});
//@@ ch14-privacy
CH({slug:"ch14-privacy",n:"14",part:"Part III · Consequences",sub:"How AI raises the stakes for personal data.",end:"Design for appropriate reliance.",scenes:[
PT("What has shifted",[["Oversharing","People confide in a patient listener.","blue"],["Retrieval","Crosses access boundaries.","green"],["Attackers","Have the same tools.","purple"],["Public data","Is easily gathered and combined.","amber"]],["Privacy pressure did not start with AI. AI sharpened it."]),
VD("Any two, never all three",[["Access to private data",true,"Needed for many tasks.","ONE","blue"],["Exposure to untrusted content",true,"Web pages, emails.","TWO","blue"],["Ability to send data out",true,"Messages, requests.","THREE","red"]],["An injection becomes a breach when one agent has all three."],{sw:170}),
VS("Retrieval crosses boundaries","Classic app",["A deterministic access check on each request"],"Retrieval",["An index built from many sources","Permissions must travel with the data"],["Check access at retrieval time, for the person asking."],"→","blue","amber"),
VS("Regulation wants evidence","Fragmented",["Rules differ by region"],"In common",["Show what you did","Show why"],["Keep records that can be presented."],"and","amber","green"),
RC("14",[["Old pressure","New intensity."],["Oversharing","To chat windows."],["Boundaries","Crossed by retrieval."],["Three powers","Never all in one agent."],["Evidence","Keep it."],["Trust","Calibrated."]])
]});
//@@ ch15-expectations
CH({slug:"ch15-expectations",n:"15",part:"Part III · Consequences",sub:"When users expect results rather than interfaces.",end:"Serve the capability, on any surface.",scenes:[
VS("When the result is all that matters","Interface first",["The user learns your screens","Then gets the result"],"Result first",["The user states the goal","The system finds the way"],["Interfaces used to be the only bridge from intention to outcome."],"→","amber","green"),
PT("One capability, any surface",[["A screen","For people.","blue"],["An API","For developers.","green"],["A protocol","For agents.","purple"],["A voice","For anyone.","amber"]],["Build the capability once. Do not assume how it will be reached."]),
VS("Identity without interfaces","With a login page",["The user signs in","A token follows the requests"],"Through an agent",["Who is acting, and for whom?","Delegated, limited authority"],["Decouple internal identity from how people log in."],"→","blue","purple"),
PT("What remains for engineers",[["Boundaries","Where systems meet.","blue"],["Trade-offs","That need judgement.","green"],["Accountability","For what is built.","purple"],["The hard part","Deciding what to build.","amber"]],["Much can be generated. Responsibility cannot."]),
RC("15",[["Results","Over interfaces."],["Start","Where the user is."],["Surfaces","Many."],["Identity","Delegated."],["Decouple","Login from identity."],["Engineers","Keep the hard part."]])
]});
