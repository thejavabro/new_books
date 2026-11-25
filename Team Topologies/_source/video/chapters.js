//@@ ch01-org-charts
CH({slug:"ch01-org-charts",n:"1",part:"Part I · Teams as the means of delivery",sub:"Why the org chart does not describe how work gets done.",end:"Design the organisation for flow, not for reporting lines.",scenes:[
VS("The org chart and how work happens","The chart",["Lines run up and down"],"The work",["Flows sideways, between teams"],["Decisions made along the chart create bottlenecks across it."],"→","amber","blue"),
PT("Three structures in every organisation",[["Formal","The org chart. For compliance.","blue"],["Informal","Who influences whom.","green"],["Value creation","How work actually gets done.","purple"]],["The third is the one to design for."]),
PT("The model in brief",[["Four team types","Each with a clear purpose.","blue"],["Three interaction modes","How teams work together.","green"],["Conway’s law","Structure shapes architecture.","purple"],["Cognitive load","A limit on what a team can own.","amber"]],["The book’s whole vocabulary."]),
VS("Cognitive load: the forgotten constraint","Ignored",["A team is given whatever needs doing","Quality and morale fall"],"Respected",["A team’s scope fits what it can hold in mind"],["Each person, and each team, has a limit."],"→","red","green"),
RC("1",[["Chart","Is not the work."],["Three structures","Formal, informal, value."],["Four types","Of team."],["Three modes","Of interaction."],["Conway","Structure shapes software."],["Load","Is finite."]])
]});
//@@ ch02-conways-law
CH({slug:"ch02-conways-law",n:"2",part:"Part I · Teams as the means of delivery",sub:"How communication structure becomes system structure.",end:"Teams in, architecture out.",scenes:[
VS("Conway’s law","The observation",["A system’s design mirrors the communication structure of the organisation that built it"],"The consequence",["Four teams building a compiler will produce a four-pass compiler"],["Structure is not neutral."],"→","blue","amber"),
VS("The reverse Conway manoeuvre","Usual",["Design the architecture","Hope the teams fit"],"Reverse",["Shape the teams to match the architecture you want"],["Organise first, and the architecture follows."],"→","red","green"),
VS("Restrict unnecessary communication","More communication",["Seems always better"],"Selective",["Teams that should be independent need not talk constantly"],["If two teams must coordinate on everything, their boundary is wrong."],"→","amber","green"),
VD("Naive uses of Conway’s law",[["Frequent reorganisation to fit a diagram",false,"Disrupts the teams that do the work.","AVOID","red"],["One shared tool for everyone, regardless of need",false,"Pulls teams together that should be apart.","AVOID","red"],["Team boundaries aligned to desired architecture",true,"The intended use.","DO","green"]],["Tool choices and seating shape communication too."],{sw:150}),
RC("2",[["Conway","Structure mirrors communication."],["Reverse","Design teams first."],["Flow","Team-scoped architecture."],["Limit","Unneeded communication."],["Tools","Shape it."],["Naive","Reorganising is costly."]])
]});
//@@ ch03-team-first-thinking
CH({slug:"ch03-team-first-thinking",n:"3",part:"Part I · Teams as the means of delivery",sub:"Treating the team as the fundamental unit.",end:"The team is the unit of delivery.",scenes:[
PT("Team-first principles",[["Small","Five to nine people.","blue"],["Long-lived","Together for more than one project.","green"],["Owns its software","No shared ownership.","purple"],["Work flows to the team","Not people to the work.","amber"]],["High-trust teams take time to form. Do not keep breaking them up."]),
PT("Sizes that trust can hold",[["A team","Under ten.","blue"],["A family of teams","Dozens.","green"],["A division","Around 150.","purple"],["Beyond","Around 500.","amber"]],["Groupings scale in steps, following the limits of human trust."]),
PT("Three kinds of cognitive load",[["Intrinsic","The skill the task itself needs.","blue"],["Extraneous","The environment: tooling, process.","green"],["Germane","Learning the business domain.","purple"]],["Reduce the first two, to leave room for the third."]),
VS("Size the software to the team","Architecture first",["Then find teams to carry it"],"Team first",["A service is as large as one team can own"],["Do not argue monolith against microservices. Ask what a team can hold."],"→","red","green"),
RC("3",[["Team","The unit."],["Small","And stable."],["Ownership","One team per part."],["Load","Three kinds."],["Software","Sized to the team."],["Team API","How others reach it."]])
]});
//@@ ch04-static-topologies
CH({slug:"ch04-static-topologies",n:"4",part:"Part II · Team topologies that work",sub:"Team patterns, and where each fits.",end:"Design teams on purpose. Do not let them form by accident.",scenes:[
VS("Two ways teams form by accident","Ad hoc",["A team for each new need","Nobody removes any"],"Shuffled",["People reassigned project by project","No stable teams"],["Both leave a structure nobody chose."],"and","red","amber"),
VS("Design for the flow of change","Functional silos",["Work hands off from team to team","Each handoff is a queue"],"Flow-aligned",["One team carries a change from idea to production"],["Organise around the path a change takes."],"→","red","green"),
VS("The Spotify model","Copying it",["Squads, tribes, chapters, guilds, adopted as a template"],"Learning from it",["It was a snapshot of one company at one time"],["Copy the reasoning, not the names."],"→","red","green"),
PT("Choosing a pattern",[["Size","Of the organisation.","blue"],["Maturity","Of engineering practice.","green"],["Dependencies","Between teams, tracked.","purple"],["Evolution","Expect the pattern to change.","amber"]],["A pattern works only in the right setting."]),
RC("4",[["Design","Do not drift."],["Flow","Over function."],["Silos","Create handoffs."],["Models","Do not copy."],["Context","Decides."],["Dependencies","Track them."]])
]});
//@@ ch05-four-team-types
CH({slug:"ch05-four-team-types",n:"5",part:"Part II · Team topologies that work",sub:"The only team types an organisation needs.",end:"Most teams should be stream-aligned.",scenes:[
PT("Four team types",[["Stream-aligned","Delivers a continuous flow of work for one stream.","blue"],["Enabling","Helps other teams gain a capability.","green"],["Complicated-subsystem","Owns a part that needs specialists.","purple"],["Platform","Provides services that others consume.","amber"]],["Every other team exists to help the stream-aligned ones."]),
VS("Stream-aligned teams","What a stream is",["A product, a service, a user journey"],"What the team does",["Owns it end to end","Builds, runs and improves it"],["The main event. The rest reduce its load."],"→","blue","green"),
VS("Enabling teams","Do",["Bring knowledge","Coach","Then leave"],"Do not",["Become a permanent dependency","Do the work for others"],["Help, then step back."],"VS","green","red"),
VS("Platform teams","A mandate",["“You must use the platform”"],"A product",["Compelling enough that teams choose it","The thinnest platform that works"],["Treat the platform as a product, with internal customers."],"→","red","green"),
RC("5",[["Four","Types only."],["Stream","The main one."],["Enabling","Temporary help."],["Subsystem","Only when needed."],["Platform","As a product."],["Convert","Existing teams."]])
]});
//@@ ch06-team-first-boundaries
CH({slug:"ch06-team-first-boundaries",n:"6",part:"Part II · Team topologies that work",sub:"Where to split software so teams can own it.",end:"Split along fracture planes.",scenes:[
PT("Hidden monoliths",[["Application","One deployable.","blue"],["Database","Joined at the schema.","green"],["Build","Everything rebuilt together.","purple"],["Release","Everything shipped together.","amber"],["Thinking","One standard way for all.","red"]],["Monoliths come in more shapes than one."]),
PT("Fracture planes",[["Business domain","The usual place.","blue"],["Regulatory compliance","Parts under stricter rules.","green"],["Change cadence","Fast parts from slow.","purple"],["Team location","Where people are.","amber"],["Risk","Parts with different tolerance.","red"],["Technology","When it truly differs.","blue"]],["Natural seams where software can be split."]),
VS("The litmus test","Splitting by technology layer",["Every change crosses several teams"],"Splitting by domain",["A change stays within one team"],["Does the split let a team deliver on its own?"],"→","red","green"),
VS("Mostly, follow the business domain","Why",["Domains match how the business thinks and changes"],"How",["Bounded contexts from domain-driven design"],["Other planes are for exceptions."],"and","blue","green"),
RC("6",[["Boundaries","Enable flow."],["Monoliths","Many kinds."],["Fracture planes","Natural seams."],["Domain","First."],["Test","Can a team deliver alone?"],["Technology","Rarely."]])
]});
//@@ ch07-interaction-modes
CH({slug:"ch07-interaction-modes",n:"7",part:"Part III · Evolving team interactions",sub:"How teams should work with each other.",end:"Interactions need designing too.",scenes:[
PT("Three interaction modes",[["Collaboration","Working closely together, for a time.","blue"],["X-as-a-Service","One provides, the other consumes.","green"],["Facilitating","One helps the other learn.","purple"]],["Every relationship between two teams should be one of these."]),
VS("Collaboration and X-as-a-Service","Collaboration",["Fast discovery","High cost","Blurred responsibility"],"X-as-a-Service",["Clear ownership","Low overhead","Slower to change the boundary"],["Collaborate to discover. Serve to deliver."],"VS","purple","blue"),
VS("Awkwardness is a signal","Friction between teams",["Often blamed on people"],"Read as information",["The interaction mode is wrong","Or the boundary is"],["Use the modes to sense what needs changing."],"→","amber","green"),
VS("Making a reverse Conway stick","Reorganise only",["Old communication paths persist"],"Reorganise and redesign interactions",["Who talks to whom is made explicit"],["New boxes with old habits change nothing."],"→","red","green"),
RC("7",[["Modes","Three."],["Collaborate","To discover."],["Serve","To deliver."],["Facilitate","To teach."],["Awkwardness","Is data."],["Explicit","Interactions."]])
]});
//@@ ch08-organizational-sensing
CH({slug:"ch08-organizational-sensing",n:"8",part:"Part III · Evolving team interactions",sub:"Changing the structure as the organisation learns.",end:"Evolution, not reorganisation.",scenes:[
PL("From collaboration to X-as-a-Service",[["Collaborate","Explore a new area together."],["Find the boundary","Where the interface should be.","blue"],["Stabilise","The interface.","purple"],["Switch","To X-as-a-Service.","green"]],["Interaction modes are meant to change over time."],{tc:"blue"}),
PT("Triggers to evolve",[["Software too large","For one team.","blue"],["Delivery slowing","Despite effort.","green"],["Many services","Depending on one team.","purple"],["Awkward interactions","That persist.","amber"]],["Signs the topology needs to change."]),
VS("Reorganisation and evolution","A reorg",["Large, rare, disruptive","Decided at the top"],"Evolution",["Small, continuous","Driven by what teams sense"],["Design the rules by which the design changes."],"→","red","green"),
VS("Operations as a sensor","Operations as a cost",["Kept apart from development"],"Operations as input",["What breaks in production informs what to build"],["Treat operations as high-value information for the organisation."],"→","red","green"),
RC("8",[["Evolve","Do not reorganise."],["Modes","Change with time."],["Triggers","Watch for them."],["Several modes","At once."],["Sensing","From operations."],["Self-steering","The aim."]])
]});
//@@ ch09-conclusion
CH({slug:"ch09-conclusion",n:"9",part:"Conclusion",sub:"The model in one picture, and how to begin.",end:"Start with the team.",scenes:[
PT("The model in one picture",[["Team-first thinking","At the centre.","blue"],["Four team types","Around it.","green"],["Three interaction modes","Between them.","purple"],["Conway’s law and cognitive load","Shaping it all.","amber"]],["Everything else follows from these."]),
VS("The garden needs soil and water","The structure",["Team types and interactions"],"What it needs to grow",["A healthy culture","Good engineering practice","Sound funding","Clear vision"],["Team Topologies is not enough by itself."],"and","blue","green"),
PL("Getting started",[["Start with the team","Its load and its needs."],["Identify streams","Of change.","blue"],["Find the thinnest platform","That would help.","purple"],["Find capability gaps","For enabling teams.","amber"],["Practise","Different interaction modes.","green"]],["Five steps the book suggests."],{tc:"blue"}),
VS("Why delivery keeps hurting","The diagnosis",["Teams and their interactions were never designed"],"The remedy",["Design them, and keep adjusting"],["Fast flow is an organisational property."],"→","red","green"),
RC("9",[["Centre","The team."],["Types","Four."],["Modes","Three."],["Culture","Still needed."],["Start","Small."],["Adjust","Continuously."]])
]});
