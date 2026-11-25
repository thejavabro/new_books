//@@ ch01-introduction-history
CH({slug:"ch01-introduction-history",n:"1–2",part:"Part I · Foundations",sub:"What the standard is for, and how it got here.",end:"A large standard, meant to be adopted in parts.",scenes:[
PT("TOGAF in a nutshell",[["A method","The Architecture Development Method.","blue"],["A content model","What architecture work produces.","green"],["A repository","Where it is kept.","purple"],["A capability","The people and governance to do it.","amber"]],["The standard is big. Its core ideas are few."]),
VS("Why people say they do not use it","The complaint",["Too big","Too heavy","Too slow"],"The reply",["It is a framework to tailor","Take what the situation needs"],["The de facto standard, and often applied without being named."],"→","amber","green"),
PL("Where it came from",[["Defence framework","The starting point in the 1990s."],["The Open Group","Adopted and developed it.","blue"],["Successive editions","Added content and governance.","purple"],["10th Edition","Modular documents and guides.","green"]],["Enterprise Architecture as a discipline is some six decades old."],{tc:"blue"}),
VS("The ADM graphic","Often read as",["A fixed sequence, phase after phase"],"Intended as",["A set of phases to iterate and adapt"],["The picture is a reference, not a flowchart."],"→","red","green"),
RC("Chapters 1–2",[["TOGAF","A framework."],["ADM","Its method."],["Tailor","Always."],["History","From defence to open standard."],["Editions","Now modular."],["Graphic","Not a flowchart."]])
]});
//@@ ch03-standard-and-definition
CH({slug:"ch03-standard-and-definition",n:"3–4",part:"Part I · Foundations",sub:"How the standard is organised, and what Enterprise Architecture means.",end:"Adopt what you need.",scenes:[
PT("The fundamental content",[["Introduction and core concepts","The vocabulary.","blue"],["Architecture Development Method","The phases.","green"],["ADM techniques","Tools used across phases.","purple"],["Applying the ADM","Iteration and levels.","amber"],["Architecture content","Metamodel and artifacts.","red"],["Capability and governance","Running the practice.","blue"]],["Six core documents."]),
ST("How the standard is layered",[["Library","Templates, examples, reference material.","muted",1.0],["Series Guides","How to apply it to a topic.","blue",0.75],["Fundamental content","The stable core.","green",0.5]],["The core changes slowly. The guides change as practice does."]),
VS("Describe an apple","One person",["Colour and taste"],"Another",["Variety, weight, where it grew"],["A definition of Enterprise Architecture should leave less room than that."],"and","blue","purple"),
PT("What you get for the effort",[["Alignment","Of business and IT.","blue"],["Coherence","Across change initiatives.","green"],["Reuse","Of what already exists.","purple"],["Informed decisions","Based on a shared picture.","amber"]],["Business capabilities show up everywhere because they change slowly."]),
RC("Chapters 3–4",[["Open","A standard anyone can use."],["Six documents","The core."],["Guides","Around it."],["Capabilities","A stable anchor."],["Definition","Agree one."],["Benefits","Alignment and reuse."]])
]});
//@@ ch05-enterprise-metamodel
CH({slug:"ch05-enterprise-metamodel",n:"5",part:"Part II · Content and capability",sub:"The entities architecture work is made of, and how they relate.",end:"Every artifact is built from the same set of entities.",scenes:[
ST("Five sections",[["Technology","Platforms and infrastructure.","amber",1.0],["Application","Systems and their services.","blue",0.85],["Data","Entities, logical and physical.","purple",0.7],["Business","Capabilities, processes, organisation.","green",0.55],["General","Principles, requirements, constraints, gaps.","muted",0.4]],["The metamodel defines the entities and their relationships."]),
PL("From driver to measure",[["Driver","Why change at all."],["Goal","What to achieve.","blue"],["Objective","A time-bound target.","purple"],["Measure","How you will know.","green"]],["Motivation concepts are kept in the metamodel so decisions can be traced back."],{tc:"blue"}),
VS("Principles, requirements, constraints","Principles",["Frame every decision"],"Requirements and constraints",["Requirements detail what is needed","Constraints limit what is possible"],["Three kinds of statement, with three jobs."],"and","blue","amber"),
VS("Logical first, physical later","Logical",["What is needed, independent of product"],"Physical",["The product or deployment that provides it"],["Decide the first before the second."],"→","blue","green"),
RC("5",[["Metamodel","Entities and relations."],["Sections","Five."],["Motivation","Driver to measure."],["Capability","A business ability."],["Gap","Between two states."],["Tailor","In the Preliminary phase."]])
]});
//@@ ch06-content-framework
CH({slug:"ch06-content-framework",n:"6",part:"Part II · Content and capability",sub:"A structure for the outputs of architecture work.",end:"Agree what you will produce before producing it.",scenes:[
PT("Three kinds of output",[["Deliverable","Contractually specified, signed off.","blue"],["Artifact","A catalog, matrix or diagram.","green"],["Building block","A reusable component.","purple"]],["Deliverables hold artifacts. Artifacts describe building blocks."]),
PT("What the framework does",[["Names","The outputs.","blue"],["Places","Each in a phase.","green"],["Relates","Them to the metamodel.","purple"],["Standardises","Their form.","amber"],["Enables","Reuse.","red"]],["Each is a promise about consistency."]),
VS("Settle in the Preliminary phase","Left open",["Each project invents its own outputs"],"Settled",["Which artifacts","Which metamodel","Which tool"],["Decide once, for the whole practice."],"→","red","green"),
VS("When content may change","Freely",["Nothing can be compared across projects"],"Under governance",["Changes proposed, reviewed, versioned"],["The framework is tailored deliberately, not casually."],"→","red","green"),
RC("6",[["Deliverable","Signed off."],["Artifact","Catalog, matrix, diagram."],["Building block","Reusable."],["Framework","Organises them."],["Preliminary","Settle it there."],["Change","Under control."]])
]});
//@@ ch07-architecture-repository
CH({slug:"ch07-architecture-repository",n:"7",part:"Part II · Content and capability",sub:"Where architecture assets live.",end:"One place for every architecture asset.",scenes:[
PT("What the repository holds",[["Metamodel","The tailored framework.","blue"],["Landscape","The architectures themselves.","green"],["Standards","What must be complied with.","purple"],["Reference material","Patterns and templates.","amber"],["Governance log","Decisions and compliance.","red"],["Requirements","Agreed, and traced.","blue"]],["An organised store, not a file share."]),
ST("Three levels of landscape",[["Capability","Detail for one capability.","green",0.5],["Segment","A business area or programme.","blue",0.75],["Strategic","The whole enterprise, long term.","purple",1.0]],["The landscape gets large, so it is divided by level."]),
VS("From generic to specific","Generic",["Foundation and common architectures","Reusable across industries"],"Specific",["Industry, then your organisation"],["The continua classify assets by how specific they are."],"→","blue","green"),
VS("Views and viewpoints","Viewpoint",["The template: whose concerns, which conventions"],"View",["What one stakeholder actually sees"],["Catalogs list, matrices relate, diagrams show."],"and","blue","purple"),
RC("7",[["Repository","One place."],["Landscape","Three levels."],["Continua","Generic to specific."],["Artifacts","Catalog, matrix, diagram."],["Viewpoint","The template."],["Tool","Pick one."]])
]});
//@@ ch08-architecture-governance
CH({slug:"ch08-architecture-governance",n:"8",part:"Part II · Content and capability",sub:"Who steers the architecture, and how.",end:"Governance turns architecture from advice into decisions.",scenes:[
PT("What governance does",[["Sets direction","Principles and standards.","blue"],["Reviews","Compliance of projects.","green"],["Grants","Dispensations, with conditions.","purple"],["Monitors","Whether the architecture is followed.","amber"]],["Architecture governance sits within corporate and IT governance."]),
VS("A board, not a meeting of architects","Architects only",["Technical views","No authority"],"A cross-organisational board",["Business and IT leaders","Authority to decide"],["The board’s sponsor sets how far its decisions reach."],"→","red","green"),
PL("A compliance review",[["Request","A project submits its design."],["Assess","Against principles and standards.","blue"],["Decide","Compliant, or not.","purple"],["Dispensation","Where a deviation is justified.","amber"],["Record","In the governance log.","green"]],["Reviews are how governance meets real projects."],{tc:"blue"}),
VS("Rotation with continuity","All fixed",["Stale, and narrow"],"Rotating, with a stable core",["Fresh views","Shared ownership","Memory kept"],["Membership should change, but not all at once."],"→","amber","green"),
RC("8",[["Governance","Decides and monitors."],["Board","Cross-organisational."],["Sponsor","Sets the scope."],["Reviews","Check compliance."],["Dispensations","Recorded."],["Rotate","With continuity."]])
]});
//@@ ch09-capability-roles
CH({slug:"ch09-capability-roles",n:"9–10",part:"Part II · Content and capability",sub:"The ability to practise architecture, and the people who do.",end:"An architecture capability is built, like any other.",scenes:[
PT("An architecture capability",[["People","With roles and skills.","blue"],["Process","A tailored method.","green"],["Governance","Boards and reviews.","purple"],["Tools","A repository.","amber"]],["The ability to practise architecture."]),
VS("Where it reports","Under IT",["Seen as technical","Limited reach"],"Close to the executive",["Covers business and IT","Can influence strategy"],["Where the capability reports determines what it can do."],"→","amber","green"),
PT("Core roles",[["Enterprise architect","Across the whole organisation.","blue"],["Domain architect","Business, data, application or technology.","green"],["Solution architect","One solution, across domains.","purple"]],["A job is a position. A role is what you do in a given assignment."]),
VS("Skills and competencies","Skills",["What you can do","Listed, with proficiency levels"],"Competencies",["How you do it","Judgement, influence, communication"],["The standard defines the first. The author argues the second matters as much."],"and","blue","purple"),
RC("Chapters 9–10",[["Capability","To do architecture."],["Reporting line","Sets its reach."],["Roles","Enterprise, domain, solution."],["Skills","With levels."],["Competencies","Beyond skills."],["Build","It deliberately."]])
]});
//@@ ch11-architecture-domains
CH({slug:"ch11-architecture-domains",n:"11",part:"Part II · Content and capability",sub:"The four domains, and how they relate.",end:"Four domains, one enterprise.",scenes:[
PT("Four domains",[["Business","Strategy, organisation, processes, capabilities.","blue"],["Data","What information exists, and how it is structured.","green"],["Application","The systems, and how they interact.","purple"],["Technology","The platforms they run on.","amber"]],["Data and Application together are the Information Systems architectures."]),
VS("Data plus context","Data",["Raw facts"],"Information",["Data with context and meaning"],["The standard’s Data Architecture is about both."],"→","blue","green"),
VS("Domains are not layers","Layers",["Each rests on the one below"],"Domains",["Viewpoints on one enterprise","Each relates to all the others"],["People have confused the two for years."],"VS","amber","green"),
VS("Do you need all four?","Complete",["An Enterprise Architecture covers all four"],"In practice",["A given piece of work may need only some"],["Scope decides which domains are in play."],"and","blue","green"),
RC("11",[["Business","Why and what."],["Data","Information."],["Application","Systems."],["Technology","Platforms."],["Not layers","Viewpoints."],["Scope","Chooses domains."]])
]});
//@@ ch12a-adm-preliminary-vision
CH({slug:"ch12a-adm-preliminary-vision",n:"12",part:"Part III · The ADM",sub:"The method’s first two phases.",end:"Get ready, then agree what you are aiming for.",scenes:[
{type:"cycle",title:"The ADM",center:"Requirements",items:[{t:"Preliminary",d:"Prepare the practice."},{t:"A",d:"Architecture Vision."},{t:"B, C, D",d:"Develop the architectures."},{t:"E, F",d:"Plan the change."},{t:"G, H",d:"Govern and adapt."}],cap:["Requirements Management sits at the centre, and touches every phase."]},
PT("Preliminary: get ready",[["Scope","Which organisation is covered.","blue"],["Principles","Agreed in advance.","green"],["Framework","Tailored to fit.","purple"],["Team and tools","In place.","amber"]],["Done once, and revisited when the practice changes."]),
PL("Phase A: Architecture Vision",[["Stakeholders","And their concerns."],["Drivers and goals","Confirmed.","blue"],["Scope","Of this cycle.","purple"],["Vision","A high-level target.","amber"],["Approval","Statement of Architecture Work.","green"]],["Phase A secures the mandate for the rest."],{tc:"blue"}),
PT("Documents that frame a cycle",[["Request for Architecture Work","What is being asked.","blue"],["Statement of Architecture Work","What will be done.","green"],["Architecture Vision","Where it is heading.","purple"],["Communications Plan","Who hears what.","amber"]],["Agreed before the detailed work starts."]),
RC("Preliminary and A",[["ADM","The heart of the standard."],["Preliminary","Prepare."],["Principles","Up front."],["Vision","High level."],["Stakeholders","First."],["Mandate","Before detail."]])
]});
//@@ ch12b-business-architecture
CH({slug:"ch12b-business-architecture",n:"12",part:"Part III · The ADM",sub:"Describing the business before the systems.",end:"Business Architecture comes first.",scenes:[
PL("One recipe for B, C and D",[["Baseline","Where things stand now."],["Target","Where they should be.","blue"],["Gap analysis","The difference.","purple"],["Roadmap components","Candidate changes.","amber"],["Review","With stakeholders.","green"]],["The same steps in each of the three phases."],{tc:"blue"}),
VS("Capabilities and value streams","Business capability",["What the business is able to do"],"Value stream",["How value reaches a stakeholder, stage by stage"],["Value streams give capabilities a reason."],"and","blue","green"),
PT("Capability heat mapping",[["A capability map","The abilities of the business.","blue"],["A colour per capability","By maturity, risk or investment.","green"],["The hot spots","Where change is needed.","purple"]],["A picture executives read at a glance."]),
VS("An organisation map","An org chart",["A tree of reporting lines"],"An organisation map",["A web","Units, partners and how they work together"],["Phase B lists more artifacts than any other phase."],"→","amber","green"),
RC("Phase B",[["Business first","Then systems."],["Recipe","Baseline, target, gap."],["Capabilities","What it can do."],["Value streams","How value flows."],["Heat map","Shows priorities."],["Organisation map","A web."]])
]});
//@@ ch12c-is-technology
CH({slug:"ch12c-is-technology",n:"12",part:"Part III · The ADM",sub:"Data, applications and the technology beneath them.",end:"Trace each capability down to what runs it.",scenes:[
PL("Trace a capability down",[["Capability","A business ability."],["Process","That realises it.","blue"],["Application","That supports the process.","purple"],["Data","It creates and uses.","amber"],["Technology","It runs on.","green"]],["The phases are connected through these relationships."],{tc:"blue"}),
PT("Phase C: data",[["Entities","What the business keeps information about.","blue"],["Ownership","Who is responsible.","green"],["A CRUD matrix","Who creates, reads, updates, deletes.","purple"],["Flows","Where data moves.","amber"]],["Disagreements about ownership surface here."]),
PT("Phase C: applications",[["Portfolio catalog","Every application, with an owner.","blue"],["Interfaces","Which talk to which.","green"],["Overlaps","Two systems doing one job.","purple"],["Gaps","Capabilities with no support.","amber"]],["An application portfolio catalog pays for itself."]),
PT("Phase D: technology",[["Standards","What may be used.","blue"],["Portfolio","What is in use.","green"],["Platforms","Mapped to applications.","purple"],["Lifecycle","What is ageing out.","amber"]],["Phase D picks the platforms the applications need."]),
RC("Phases C and D",[["Trace","Capability to server."],["Data","Entities and ownership."],["CRUD","Who does what."],["Applications","Catalogued."],["Interfaces","Scoped early."],["Technology","Standards and portfolio."]])
]});
//@@ ch12d-opportunities-migration
CH({slug:"ch12d-opportunities-migration",n:"12",part:"Part III · The ADM",sub:"Turning gaps into a sequenced plan.",end:"From gaps to work packages to a roadmap.",scenes:[
PL("From gaps to a roadmap",[["Gaps","From phases B, C and D."],["Work packages","Groups of change.","blue"],["Transition architectures","Stable intermediate states.","purple"],["Roadmap","Ordered over time.","amber"],["Migration plan","With cost and benefit.","green"]],["Phase E consolidates. Phase F prioritises and schedules."],{tc:"blue"}),
VS("Plateaus","Baseline",["Where you are"],"Target",["Where you want to be"],["Plateaus between them are states the organisation can rest at and still function."],"→","amber","green"),
PT("Phase F: value, cost and order",[["Business value","Of each work package.","blue"],["Cost","And resources.","green"],["Dependencies","What must come first.","purple"],["Risk","Of doing, and of not doing.","amber"]],["Put an order on the plan."]),
VS("A roadmap and a plan","Architecture roadmap",["What changes, in what order"],"Implementation and migration plan",["Projects, dates, budgets"],["The first is architecture. The second is delivery."],"and","blue","green"),
RC("Phases E and F",[["Gaps","Consolidated."],["Work packages","Group the change."],["Plateaus","Stable steps."],["Roadmap","The order."],["Phase F","Value and cost."],["Plan","For delivery."]])
]});
//@@ ch12e-governance-change-requirements
CH({slug:"ch12e-governance-change-requirements",n:"12",part:"Part III · The ADM",sub:"Keeping implementation on course, and the architecture current.",end:"The plan meets reality.",scenes:[
PL("Phase G: implementation governance",[["Contract","Agree what will be built."],["Review","Designs against the architecture.","blue"],["Decide","Compliant, or grant a dispensation.","amber"],["Monitor","Until delivered.","green"]],["In Phase G the vision becomes working change."],{tc:"blue"}),
PT("Measuring progress",[["Work packages","How many are done.","blue"],["Goals and objectives","How far they are met.","green"],["Both","Reported to the board.","purple"]],["Delivery and outcomes are separate measures."]),
VS("Phase H: when the world changes","A small change",["Handled within the current architecture"],"A large change",["Triggers a new cycle of the ADM"],["Architecture is never finished."],"or","green","amber"),
VS("Requirements Management","Not a phase",["It has no place in the sequence"],"A hub",["Every phase sends and receives requirements"],["It keeps the cycle consistent."],"→","blue","purple"),
RC("Phases G and H",[["Phase G","Govern delivery."],["Reviews","For compliance."],["Measure","Work and goals."],["Phase H","Manage change."],["Requirements","At the centre."],["Cycle","Never ends."]])
]});
//@@ ch13-applying-the-adm
CH({slug:"ch13-applying-the-adm",n:"13",part:"Part IV · Applying it",sub:"Iteration, levels and partitioning.",end:"One method, many situations.",scenes:[
PT("Iteration groups",[["Capability","Establish or adjust the practice.","blue"],["Development","Cycle through B, C and D.","green"],["Transition planning","Cycle through E and F.","purple"],["Governance","Cycle through G and H.","amber"]],["Phases are grouped, and each group is repeated as needed."]),
VS("Baseline first or target first?","Baseline first",["When the current state is unclear","Understand it before designing"],"Target first",["When the future is clear","Avoid being anchored by today"],["Choose per cycle."],"or","blue","purple"),
ST("Architecture at three levels",[["Capability","Near term, detailed.","green",0.5],["Segment","A programme or business area.","blue",0.75],["Strategic","Enterprise-wide, long term.","purple",1.0]],["The ADM runs at each level, with different depth and horizon."]),
VS("Partitioning","One team, everything",["Does not scale"],"Partitioned",["By subject, time or level of detail","Each part owned"],["Divide the work, not the picture."],"→","red","green"),
RC("13",[["Iterate","By group."],["Four groups","Capability to governance."],["Baseline or target","First."],["Levels","Three."],["Partition","The work."],["Styles","Adapt the method."]])
]});
//@@ ch14-adm-techniques
CH({slug:"ch14-adm-techniques",n:"14",part:"Part IV · Applying it",sub:"Tools used across the phases.",end:"Techniques support the method. They do not replace judgement.",scenes:[
PT("Architecture principles",[["Name","Short and memorable.","blue"],["Statement","What the rule is.","green"],["Rationale","Why it exists.","purple"],["Implications","What follows from it.","amber"]],["Principles settle arguments in advance."]),
PL("Stakeholder management",[["Identify","Who is affected."],["Classify","Power and interest.","blue"],["Decide","How to engage each.","purple"],["Tailor","What each receives.","green"]],["Views are produced for stakeholders, not for architects."],{tc:"blue"}),
PT("Gap analysis",[["Baseline","Listed down one side.","blue"],["Target","Listed across the top.","green"],["Matched","Where one becomes the other.","purple"],["Unmatched","Something to remove, or to build.","amber"]],["A matrix that catches omissions."]),
PT("More techniques",[["Interoperability","How deeply systems must share.","blue"],["Transformation readiness","Is the organisation able to change?","green"],["Risk management","Initial and residual risk.","purple"],["Trade-off analysis","Compare alternatives openly.","amber"]],["Seldom does one option win on every criterion."]),
RC("14",[["Principles","Four parts."],["Stakeholders","Classified."],["Patterns","Reusable solutions."],["Gap analysis","A matrix."],["Readiness","To change."],["Trade-offs","Made explicit."]])
]});
//@@ ch15-maturity-frameworks
CH({slug:"ch15-maturity-frameworks",n:"15–16",part:"Part IV · Applying it",sub:"Measuring the practice, and living alongside other frameworks.",end:"Raise maturity one level at a time.",scenes:[
ST("Maturity levels",[["Optimising","Continuously improved.","green",0.4],["Quantitatively managed","Controlled by measurement.","blue",0.55],["Defined","Documented and followed.","purple",0.7],["Managed","Planned, project by project.","amber",0.85],["Initial","Ad hoc.","red",1.0]],["Five levels, in the style of CMMI. A maturity model describes what each looks like."]),
VS("Why measure","Without",["Improvement is a matter of opinion"],"With",["A baseline","A target level","A plan between them"],["Maturing happens progressively. Skipping a level rarely holds."],"→","amber","green"),
PT("Aligning with other frameworks",[["Service management","How services are run.","blue"],["Project and portfolio management","How change is delivered.","green"],["IT governance","How it is controlled.","purple"],["Agile at scale","How teams deliver.","amber"]],["TOGAF is designed to be used with what you already have."]),
PL("An implementation wheel",[["Start small","One scope, one team."],["Deliver value","Early.","blue"],["Establish","Governance and a repository.","purple"],["Widen","Scope and maturity.","green"]],["The author’s own approach to introducing the practice."],{tc:"blue"}),
RC("Chapters 15–16",[["Maturity","Has levels."],["Measure","To improve."],["One level","At a time."],["Team","Not one architect."],["Align","With other frameworks."],["Start","Small."]])
]});
//@@ ch17-tailoring-agile
CH({slug:"ch17-tailoring-agile",n:"17–18",part:"Part IV · Applying it",sub:"Customising the framework, and working with agile delivery.",end:"TOGAF is meant to be customised.",scenes:[
VS("Tailoring","Out of the box",["Every phase, every artifact","Heavy"],"Tailored",["Phases combined or shortened","Artifacts chosen for the need"],["The standard says plainly that it should be adapted."],"→","red","green"),
VS("Agile architecture is not an oxymoron","Big design up front",["Everything decided before delivery"],"Just enough, just in time",["Direction set early","Detail added as sprints approach"],["Architecture sets the guardrails. Teams decide within them."],"→","red","green"),
PL("From one transition to many sprints",[["Strategic","Direction and principles."],["Segment","A roadmap for one area.","blue"],["Capability","Detail for the next increments.","purple"],["Sprints","Deliver, and feed back.","green"]],["Levels of architecture map onto levels of planning."],{tc:"blue"}),
PT("Agile habits for architects",[["Small increments","Of architecture.","blue"],["Working with teams","Not handing down.","green"],["Feedback","From delivery into design.","purple"],["Decisions","Recorded, and revisable.","amber"]],["Agile is broader than software delivery."]),
RC("Chapters 17–18",[["Tailor","Always."],["Phases","Can combine."],["Agile","Fits."],["Guardrails","Not blueprints."],["Levels","Match planning."],["Feedback","Both ways."]])
]});
//@@ ch19-digital-transformation
CH({slug:"ch19-digital-transformation",n:"19",part:"Part IV · Applying it",sub:"What architecture contributes to a transformation.",end:"Digital transformation is a business shift.",scenes:[
PT("Three terms",[["Digitisation","Analogue to digital.","blue"],["Digitalisation","Processes that use digital data.","green"],["Digital transformation","A changed business model.","purple"]],["They are often confused."]),
VS("Which comes first?","Transformation without architecture",["Disconnected initiatives"],"With it",["A shared target","Sequenced change"],["The two disciplines need each other."],"→","red","green"),
PL("Through the ADM",[["Vision","What the business becomes."],["Architectures","What must change.","blue"],["Roadmap","In what order.","purple"],["Governance","Keeping it on course.","green"]],["The method gives a transformation a structure."],{tc:"blue"}),
PT("What makes it succeed",[["Sponsorship","From the top.","blue"],["Capabilities","As the unit of change.","green"],["People","Readiness and skills.","purple"],["Small steps","With visible results.","amber"]],["Technology is the easier part."]),
RC("19",[["Business shift","Not an IT project."],["Three terms","Distinct."],["Architecture","Gives structure."],["ADM","As the path."],["People","Are the hard part."],["Steps","Small and visible."]])
]});
//@@ ch20-case-scenario
CH({slug:"ch20-case-scenario",n:"20",part:"Part V · Practice",sub:"One organisation, followed through the whole method.",end:"The framework, applied from start to finish.",scenes:[
PL("Phase by phase",[["Preliminary","Set up the practice."],["Vision","Agree the direction.","blue"],["Architectures","Baseline, target, gaps.","purple"],["Plan","Work packages and plateaus.","amber"],["Govern","And report progress.","green"]],["The book’s capstone follows a fictional diagnostic organisation over several years."],{tc:"blue"}),
PT("Concerns and constraints",[["Concerns","What stakeholders worry about.","blue"],["Constraints","What cannot be changed.","green"],["Each one","Tracked to a decision.","purple"],["At the end","What became of them.","amber"]],["Requirements Management in action."]),
VS("The heat map, before and after","Before",["Red and amber capabilities"],"After",["The same map, largely green"],["One artifact that shows the change."],"→","red","green"),
PT("When the board asks",[["Work packages","How many are complete.","blue"],["Objectives","How far they are met.","green"],["Plateaus","Which has been reached.","purple"],["Risks","What is still open.","amber"]],["The architect answers with the measures defined earlier."]),
RC("20",[["Case","Start to finish."],["Vision","Then detail."],["Concerns","Tracked."],["Heat map","Shows progress."],["Plateaus","Mark the route."],["Report","With measures."]])
]});
//@@ ch21-togaf-on-a-page
CH({slug:"ch21-togaf-on-a-page",n:"21–22",part:"Part V · Practice",sub:"The whole framework in summary, and some myths.",end:"Apply the framework. Do not perform it.",scenes:[
PT("Core concepts",[["The ADM","The method.","blue"],["The content framework","The outputs.","green"],["The repository","The store.","purple"],["The capability","The people and governance.","amber"],["The continuum","Generic to specific.","red"]],["The whole framework on one page."]),
VD("Myths, busted",[["TOGAF is only for IT",false,"Business Architecture comes first.","MYTH","red"],["You must do every phase in full",false,"It is meant to be tailored.","MYTH","red"],["It cannot work with agile",false,"It can, at the right level.","MYTH","red"],["It is a waterfall process",false,"The ADM is iterative.","MYTH","red"]],["The closing chapter takes on common objections."],{sw:160}),
VS("Apply, do not perform","Performing",["Producing every document","For the sake of compliance"],"Applying",["Choosing what helps a decision","Leaving out the rest"],["The book’s core message."],"→","red","green"),
PT("What to take away",[["Start with why","Drivers and goals.","blue"],["Use capabilities","As the stable anchor.","green"],["Tailor","To the organisation.","purple"],["Govern","So it is followed.","amber"]],["Value comes from use, not from completeness."]),
RC("Chapters 21–22",[["One page","Five concepts."],["Myths","Answered."],["Tailor","Again."],["Capabilities","Anchor."],["Govern","It."],["Use","Not ceremony."]])
]});
