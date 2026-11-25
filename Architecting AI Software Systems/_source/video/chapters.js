//@@ ch01-fundamentals
CH({slug:"ch01-fundamentals",n:"1",part:"Part 1 · Architecting fundamentals",sub:"What an AI system is made of, and what its architecture must achieve.",end:"It all comes down to trust.",scenes:[
PT("It all comes down to trust",[["Inference","The system classifies, predicts, recommends.","blue"],["Uncertainty","Its outputs are probabilistic.","green"],["Trust","Users must be able to rely on them.","purple"],["Architecture","Is how trust is designed in.","amber"]],["An AI system that is not trusted is not used."]),
PT("Four key components",[["Data","The raw material.","blue"],["Algorithms","How learning happens.","green"],["Models","What was learned.","purple"],["Infrastructure","Where it all runs.","amber"]],["Weakness in any one limits the whole system."]),
ST("The AI technology stack",[["Applications","What users touch.","green",0.4],["Models and serving","Inference.","blue",0.6],["Training and pipelines","How models are made.","purple",0.8],["Data and infrastructure","Storage and compute.","amber",1.0]],["From an implementation point of view, an AI system is a stack of layers."]),
VS("Cloud-native or lift-and-shift","Lift and shift",["Move it as it is","Quick, with few of the benefits"],"Cloud-native",["Containers and orchestration","Elastic scaling","Managed services"],["Growth arrives as more data, bigger models and more users."],"→","amber","green"),
RC("1",[["Trust","The central quality."],["Blueprint","What architecture is."],["Stack","Layer by layer."],["Components","Data, algorithms, models, infrastructure."],["Scale","Plan for growth."],["Cloud-native","Built for elasticity."]])
]});
//@@ ch02-case-for-architecture
CH({slug:"ch02-case-for-architecture",n:"2",part:"Part 1 · Architecting fundamentals",sub:"Why a system needs someone who holds the whole picture.",end:"Without an architect, the parts work and the system does not.",scenes:[
VS("Four engineers, no architect","Without",["Each builds a good component","Nobody owns the seams","It fails at integration"],"With",["One person holds the vision","Interfaces agreed early","Trade-offs made on purpose"],["A thought experiment the chapter opens with."],"→","red","green"),
PT("What an architect does",[["Holds the vision","And keeps it coherent.","blue"],["Asks the 5W and H","Who, what, when, where, why, how.","green"],["Makes trade-offs","Between competing qualities.","purple"],["Communicates","With every stakeholder.","amber"]],["The documents are a by-product. The thinking is the work."]),
{type:"cycle",title:"The architectural cycle",center:"Architecture",items:[{t:"Analysis",d:"Decompose the functions."},{t:"Synthesis",d:"Compose a design."},{t:"Evaluation",d:"Test it against the needs."}],cap:["Architecture is iterative. Each pass refines the last."]},
PT("The language of architecture",[["Heuristics","Rules of thumb from experience.","blue"],["Tactics","Targeted fixes for one quality.","green"],["Patterns","Reusable arrangements of components.","purple"]],["Governance, explainability and compliance are designed in, not added at the end."]),
RC("2",[["Architect","Owns the whole."],["5W and H","Frame the problem."],["Cycle","Analyse, synthesise, evaluate."],["Approach","Choose the kind of AI."],["Vocabulary","Heuristics, tactics, patterns."],["Governance","By design."]])
]});
//@@ ch03-software-engineering
CH({slug:"ch03-software-engineering",n:"3",part:"Part 1 · Architecting fundamentals",sub:"Where AI software gets its complexity, and how engineering practice contains it.",end:"Put architecture early, and keep it coherent as the project changes.",scenes:[
VS("Where AI software gets its complexity","Traditional software",["Deterministic rules","The same input gives the same output"],"AI-enabled software",["Learned behaviour","Depends on data","Outputs carry uncertainty"],["Testing has to cover the data and the model, as well as the code."],"→","blue","amber"),
ST("Levels of automation",[["The machine decides and acts","The human is informed, or not.","red",0.4],["The machine acts unless vetoed","Human on the loop.","amber",0.6],["The machine recommends","The human approves.","blue",0.8],["The human decides","The machine offers information.","green",1.0]],["Who decides, the person or the machine, is an architectural choice."]),
PT("Artifacts that tame complexity",[["Concept of operations","How the system will be used.","blue"],["Requirements","What it must do.","green"],["Interface definitions","How parts connect.","purple"],["Test plans","How it will be verified.","amber"]],["Even the smallest project should write a concept of operations."]),
VS("The architect in project management","Not",["The project manager"],"But",["Estimates and risks","Technical sequencing","Keeping agile sprints coherent"],["Integration is usually the first time non-functional problems show."],"→","muted","blue"),
RC("3",[["Complexity","From learned behaviour."],["Lifecycle","Architecture early."],["Verification","Data and model too."],["Automation","Choose the level."],["Artifacts","Start with a CONOPS."],["Integration","Where changes ripple."]])
]});
//@@ ch04-conceptual-design
CH({slug:"ch04-conceptual-design",n:"4",part:"Part 2 · Architecting AI systems",sub:"From stakeholder needs to scenarios, use cases and modes.",end:"Conceptual design is the cheapest place to remove risk.",scenes:[
PL("From need to design",[["CONOPS","How it will be used."],["Scenarios","Stories of use.","blue"],["Use cases","Enough detail to build from.","purple"],["Modes","How the system behaves in each state.","green"]],["The concept of operations bridges stakeholders and builders."],{tc:"blue"}),
PT("What is AI worth?",[["Say what it will do","For the business, plainly.","blue"],["Estimate the value","Revenue, cost, risk.","green"],["Estimate the effort","Data, models, integration.","purple"],["Compare","Before building.","amber"]],["A business value matrix sets value against feasibility."]),
VS("The AI-human interaction spectrum","Human decides",["AI informs","Slower, more accountable"],"AI decides",["Human supervises","Faster, needs more trust"],["Place the system on the spectrum deliberately."],"↔","blue","purple"),
PT("Conceptual design as risk reduction",[["A holistic view","Before any code.","blue"],["Constraints","Found early.","green"],["Success criteria","Agreed up front.","purple"],["Stakeholders","Aligned.","amber"]],["A restaurant with no menu serves what the kitchen likes, not what you wanted."]),
RC("4",[["CONOPS","The first definition."],["Value","Stated plainly."],["Spectrum","Human to AI."],["Scenarios","Then use cases."],["Modes","The system’s states."],["Risk","Reduced on paper."]])
]});
//@@ ch05-ai-pipelines
CH({slug:"ch05-ai-pipelines",n:"5",part:"Part 2 · Architecting AI systems",sub:"Development and production pipelines, and how they are operated.",end:"Most enterprise AI is a pipeline.",scenes:[
PL("An AI pipeline",[["Data store","The source of truth."],["Quality checks","Is the data fit?","blue"],["Transform","Features and summaries.","purple"],["Build and verify","The model.","amber"],["Serve","In production.","green"]],["Progressive stages, each handing on to the next."],{tc:"blue"}),
VS("Development and production","Development",["Experiments and tuning","Models change often"],"Production",["A managed black box","Never edited in place","Replaced by a new version"],["Two pipelines with different rules."],"and","blue","green"),
PL("Canary checks in production",[["New model","Deployed beside the old."],["A small share","Of traffic.","amber"],["Compare","Outputs and metrics.","blue"],["Promote or roll back","Based on evidence.","green"]],["A new model earns its traffic."],{tc:"blue"}),
PT("The operations store",[["Telemetry","From every stage.","blue"],["Logs, metrics, alerts","In one place.","green"],["Lineage","Which data made which model.","purple"],["Feedback","To the next build.","amber"]],["The pipeline’s nervous system."]),
RC("5",[["Pipeline","Stages in order."],["Data store","Source of truth."],["Quality","Checked first."],["Models","Rebuilt, never patched."],["Canary","Prove it on a little traffic."],["Telemetry","From every stage."]])
]});
//@@ ch06-design-integration-testing
CH({slug:"ch06-design-integration-testing",n:"6",part:"Part 2 · Architecting AI systems",sub:"Measurable requirements, resilience patterns and tests.",end:"A requirement you cannot measure is a wish.",scenes:[
VS("Requirements you can measure","Vague",["“The system should be fast”"],"Measurable",["A number","A condition","A way to test it"],["Architecture stays paper until its requirements can be verified."],"→","red","green"),
VS("The bulkhead pattern","Without",["Components share resources","One overload sinks them all"],"With",["Separate pools per component","A failure stays in its compartment"],["Ships are split into watertight compartments for the same reason."],"→","red","green"),
PL("The circuit breaker",[["Closed","Calls pass through."],["Failures mount","Past a threshold.","amber"],["Open","Calls fail fast.","red"],["Half-open","Try one. Close if it works.","green"]],["It stops a failing dependency from being hammered."],{tc:"blue"}),
PT("Testing: layers and types",[["Unit","One component.","blue"],["Integration","Components together.","green"],["System","The whole, end to end.","purple"],["Model","Accuracy, drift and bias.","amber"]],["Continuous integration for AI adds gates for data quality and model performance."]),
RC("6",[["Measurable","Requirements."],["Modes","A state machine."],["Tactics","For one quality each."],["Bulkhead","Contain failure."],["Breaker","Fail fast."],["Gates","Data and model checks."]])
]});
//@@ ch07-generative-ai-case-study
CH({slug:"ch07-generative-ai-case-study",n:"7",part:"Part 2 · Architecting AI systems",sub:"A knowledge assistant for a fictional software vendor.",end:"Ground the answers in the organisation’s own verified knowledge.",scenes:[
VS("The knowledge problem","Before",["Answers scattered across systems","Support staff search by hand"],"The vision",["One index over all of it","Answers with their sources"],["The case study is a fictional company."],"→","amber","green"),
PL("The indexing pipeline",[["Collect","Documents and tickets."],["Chunk","Into passages.","blue"],["Embed","As vectors.","purple"],["Store","In a vector database.","green"]],["Hybrid retrieval combines vector search with keyword search."],{tc:"blue"}),
PL("The agent workflow",[["Interpret","The query."],["Plan","What to retrieve.","blue"],["Retrieve","Relevant passages.","purple"],["Generate","An answer with sources.","amber"],["Check","Before replying.","green"]],["Simple queries go to a small model, and hard ones to a larger one."],{tc:"blue"}),
PT("Measuring the impact",[["A baseline","Captured before launch.","blue"],["Business goals","Turned into measurable targets.","green"],["Compare","After against before.","purple"]],["Credible results need a baseline."]),
RC("7",[["Problem","Scattered knowledge."],["Index","Chunk, embed, store."],["Retrieval","Hybrid."],["Models","Matched to the query."],["Agent","Plans and checks."],["Impact","Measured against a baseline."]])
]});
//@@ ch08-insights-future
CH({slug:"ch08-insights-future",n:"8",part:"Closing",sub:"The lessons to keep, and where the field is going.",end:"Own the non-functional requirements.",scenes:[
VS("The failure mode to fear","Familiar failures",["Late, over budget","Misunderstood requirements"],"The AI failure",["Users stop trusting the outputs","The system is abandoned"],["Lost trust is hard to win back."],"and","amber","red"),
PT("If you keep one lesson",[["Identify","The non-functional requirements.","blue"],["Communicate","Them to everyone.","green"],["Defend","Them through the project.","purple"]],["Performance, reliability, security and explainability are the architect’s to own."]),
PT("The minimum documentation kit",[["Concept of operations","How it is used.","blue"],["Context diagram","What it touches.","green"],["Key decisions","And why.","purple"],["Interfaces","Between the parts.","amber"]],["It can be slides and sketches. It must exist."]),
PT("Looking ahead",[["Data engineering","A discipline of its own.","blue"],["Larger systems","Of many models.","green"],["Learn by doing","Build, review, repeat.","purple"]],["The authors liken the journey to a mountain with no summit."]),
RC("8",[["Trust","The thing to protect."],["NFRs","Own them."],["Documents","A minimum kit."],["Data","Its own discipline."],["Scale","Systems of models."],["Practice","Learn by doing."]])
]});
