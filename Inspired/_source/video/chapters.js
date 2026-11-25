//@@ ch01-intro-roles
CH({slug:"ch01-intro-roles",n:"1",part:"Part I · People",sub:"Why well-built products still fail, and the team that prevents it.",end:"It does not matter how good the engineering is, if the product is not worth building.",scenes:[
VS("A great product nobody bought","What the team did",["Built it well","Shipped on time"],"What went wrong",["Nobody had checked that customers wanted it"],["The author’s early lesson: someone has to decide what is worth building."],"→","green","red"),
PT("The modern product organisation",[["Product manager","Decides what to build.","blue"],["Designer","How it works for the user.","green"],["Engineering","Builds it.","purple"],["Project management","Gets it delivered.","amber"],["Product marketing","Tells the world.","red"]],["Chapter 1 defines the roles the rest of the book relies on."]),
VS("Discovering and executing","Discover",["A product that is valuable, usable and feasible"],"Execute",["Build it, and deliver it"],["The product manager’s main job is the first."],"and","purple","blue"),
PT("Truths behind inspiring products",[["The job is discovery","Not gathering requirements.","blue"],["Ideas must be tested","With real users, early.","green"],["Design matters","As much as engineering.","purple"],["Customers cannot tell you","What to build.","amber"]],["The introduction lists ten. These are a few."]),
RC("Chapter 1",[["Failure","Often the wrong product."],["Roles","Five of them."],["PM","Decides what."],["Discovery","Then execution."],["Test","Ideas early."],["Team","Sized to match."]])
]});
//@@ ch02-pm-vs-others
CH({slug:"ch02-pm-vs-others",n:"2–5",part:"Part I · People",sub:"What product management is not.",end:"One role, often confused with four others.",scenes:[
VS("Product management and product marketing","Product management",["Defines the product to build"],"Product marketing",["Tells the world about it"],["Different skills. Combining them in one person rarely works."],"VS","blue","purple"),
VS("Product management and project management","Product",["What to build, and why"],"Project",["When it ships, and how it gets there"],["Both matter. They are different jobs."],"VS","blue","amber"),
VS("Product management and design","Product manager",["Understands the customer’s problem"],"Designer",["Shapes the experience that solves it"],["They discover the product together."],"and","blue","green"),
VS("“We need to stop and rewrite!”","Why it happens",["Technical debt was never paid"],"How to avoid it",["Reserve a steady share of capacity for engineering’s own work"],["A rewrite stalls the product for a year or more."],"→","red","green"),
RC("Chapters 2–5",[["Not marketing","Define, not promote."],["Not projects","What, not when."],["Not design","But partners."],["Not engineering","But informed by it."],["Debt","Pay it steadily."],["Rewrite","Avoid needing one."]])
]});
//@@ ch03-people-leaders
CH({slug:"ch03-people-leaders",n:"6–10",part:"Part I · People",sub:"Hiring, growing and managing product people.",end:"Tell people what, not how.",scenes:[
PT("What to look for in a product manager",[["Product passion","A love of good products.","blue"],["Customer empathy","For people unlike themselves.","green"],["Intelligence","And judgement.","purple"],["Work ethic","And integrity.","amber"],["Communication","Written and spoken.","red"]],["Domain experience and age matter less than you think."]),
VS("Tell people what, not how","Dictating how",["Smart people stop thinking"],"Stating what",["The problem and the goal","They find a better way"],["Patton’s advice, applied to product teams."],"→","red","green"),
PT("Leading product managers",[["Build the team","Hire well.","blue"],["Product strategy","Across the portfolio.","green"],["Coach","Each manager.","purple"],["Judge by results","Would customers recommend it?","amber"]],["The head of product has two jobs: people, and the whole product line."]),
PT("Managing up",[["Measure and plan","Around changing direction.","blue"],["Communicate","Often, and briefly.","green"],["Use data","Not opinion.","purple"],["Build relationships","Before you need them.","amber"]],["The book lists ten techniques, most of them for large companies."]),
RC("Chapters 6–10",[["Hire","For traits."],["Experience","Matters less."],["What","Not how."],["Smartest people","Find them."],["Results","Net promoter score."],["Manage up","Deliberately."]])
]});
//@@ ch04-opportunity-discovery
CH({slug:"ch04-opportunity-discovery",n:"11–13",part:"Part II · Process",sub:"Deciding what is worth building.",end:"First decide whether it is worth doing. Then decide what it is.",scenes:[
PT("An opportunity assessment",[["What problem","Does this solve?","blue"],["For whom","And how many?","green"],["How will we measure","Success?","purple"],["What alternatives","Exist?","amber"],["Why us","And why now?","red"]],["Ten questions to answer before building anything. None of them is about the solution."]),
VS("Discovery, then execution","Figure out what to build",["Ideas, prototypes, tests with users","Cheap to change"],"Build it",["Engineering, quality, release","Expensive to change"],["Do not start the second before finishing the first."],"→","purple","blue"),
VS("Can you schedule discovery?","Pressure",["Engineers are free. Give them something"],"Reality",["Discovery takes as long as it takes","Have a backlog of validated work ready"],["Keep discovery running ahead of engineering."],"→","red","green"),
PT("Product principles",[["A short list","Of what the team believes.","blue"],["In priority order","So trade-offs are settled.","green"],["Specific","To this product.","purple"],["Used","To resolve arguments.","amber"]],["Decide what matters, in order."]),
RC("Chapters 11–13",[["Assess","The opportunity."],["Problem","Before solution."],["Discover","Then execute."],["Backlog","Of validated work."],["Principles","In order."],["Arguments","Settled by them."]])
]});
//@@ ch05-council-customers
CH({slug:"ch05-council-customers",n:"14–17",part:"Part II · Process",sub:"Getting decisions made, and getting close to customers.",end:"Launch with reference customers.",scenes:[
PL("The product council",[["Opportunity","Is it worth pursuing?"],["Solution","Is this the right product?","blue"],["Build","Is it ready to start?","purple"],["Launch","Is it ready to ship?","green"]],["A small group of executives gives timely, definitive decisions at each milestone."],{tc:"blue"}),
PL("Charter user programme",[["Recruit","A handful of target customers."],["Work with them","Throughout discovery.","blue"],["They get","Early input and access.","purple"],["You get","Reference customers at launch.","green"]],["Launching with nobody to vouch for the product is a risk you can remove."],{tc:"blue"}),
VS("What market research can tell you","Good for",["Understanding the problem","Sizing a market","Measuring what happened"],"Not for",["Telling you what to build"],["Customers know their problems. They do not know what is possible."],"VS","green","red"),
VS("Personas","For",["The person this release is designed for"],"Not for",["Everyone else, at least this time"],["A persona is a decision about who to disappoint."],"and","green","amber"),
RC("Chapters 14–17",[["Council","Decides."],["Cost","Estimate after discovery."],["Charter users","References at launch."],["Research","Informs, does not specify."],["Personas","Focus."],["Customers","Close throughout."]])
]});
//@@ ch06-spec-validation
CH({slug:"ch06-spec-validation",n:"18–22",part:"Part II · Process",sub:"Replacing the paper spec with something users can try.",end:"The prototype is the spec.",scenes:[
VS("The prototype is the spec","A document",["Long","Unread","Untestable"],"A high-fidelity prototype",["Shows the experience","Can be tested with users","Unambiguous for engineers"],["Describe the product by showing it."],"→","red","green"),
VS("Design before implementation","Overlapping",["Engineers build while design is still changing","Rework"],"In sequence",["Design and validate first","Then build what is known to work"],["Many things can run in parallel. These two should not."],"→","red","green"),
PT("Three tests before you build",[["Feasibility","Can it be built?","blue"],["Usability","Can users work out how to use it?","green"],["Value","Do they want it?","purple"]],["Product validation, done on the prototype."]),
PL("Test a prototype yourself",[["Recruit","Target users."],["Give tasks","Do not explain.","blue"],["Watch","Where they struggle.","amber"],["Ask","Would they use it?","purple"],["Revise","And test again.","green"]],["Cut features before you build, not after."],{tc:"blue"}),
RC("Chapters 18–22",[["Spec","Is the prototype."],["Design","Before build."],["Minimum","Cut early."],["Feasible","Usable, valuable."],["Test","With users."],["Iterate","On the prototype."]])
]});
//@@ ch07-after-launch
CH({slug:"ch07-after-launch",n:"23–25",part:"Part II · Process",sub:"What to do with a product that already exists.",end:"Improving a product is not adding features.",scenes:[
VS("Improving an existing product","Adding features",["Whatever was asked for most"],"Moving a metric",["Pick the number that matters","Find what will move it"],["Start from the measure, not from the request list."],"→","red","green"),
PT("Gentle deployment",[["Do not surprise users","Announce changes.","blue"],["Let them try","Before they must switch.","green"],["Keep the old","For a while.","purple"],["Roll out gradually","And watch.","amber"]],["Shipping changes users did not ask for, without warning, is user abuse."]),
VS("Rapid response","Typical",["The team scatters after launch"],"Better",["Stay together for the first week","Watch, and fix fast"],["The first days tell you the most."],"→","red","green"),
PL("After launch",[["Release","To users."],["Watch","The metrics and the feedback.","blue"],["Respond","Quickly.","amber"],["Learn","For the next round.","green"]],["Launch is the start of learning, not the end of the project."],{tc:"blue"}),
RC("Chapters 23–25",[["Improve","A metric."],["Not features","For their own sake."],["Gentle","Deployment."],["Choice","For users."],["Respond","In the first week."],["Learn","From real use."]])
]});
//@@ ch08-process-context
CH({slug:"ch08-process-context",n:"26–30",part:"Part II · Process",sub:"Making this work under Agile, Waterfall, in startups and in large companies.",end:"The method changes. Discovery does not.",scenes:[
VS("Succeeding with Agile","The risk",["Sprints begin before anyone knows what to build"],"The fix",["Discovery runs a sprint or two ahead","Designers and the product manager feed the backlog"],["Agile is a way to build. It still needs something worth building."],"→","red","green"),
VS("Succeeding with Waterfall","The risk",["Validation comes at the very end"],"The fix",["Validate with prototypes before the requirements phase closes"],["Whatever the process, test the idea early."],"→","red","green"),
VS("Startups","Usual recipe",["Hire engineers","Start building"],"Better",["Discover the product first","Then hire the team to build it"],["Money runs out before the third attempt."],"→","red","green"),
PT("Innovating in a large company",[["Protected time","For new ideas.","blue"],["Skunk works","A small team apart.","green"],["Observe users","For unmet needs.","purple"],["Improve what exists","In ways customers feel.","amber"]],["Large companies drift conservative. Innovation needs room."]),
RC("Chapters 26–30",[["Agile","Discovery ahead."],["Waterfall","Validate early."],["Startups","Discover first."],["Large companies","Make room."],["Getting things done","Build relationships."],["Method","Is secondary."]])
]});
//@@ ch09-inspiring-products
CH({slug:"ch09-inspiring-products",n:"31–36",part:"Part III · Product",sub:"What separates products people love.",end:"People buy for emotional reasons.",scenes:[
ST("Lessons from Apple",[["Emotion","What people feel.","purple",0.5],["User experience","Serves the emotion.","blue",0.7],["Hardware and software","Serve the experience.","green",1.0]],["Three layers, each in service of the one above."]),
VS("Beware of specials","A special",["A big cheque from one customer","For a feature only they need"],"The cost",["The product bends away from the market"],["You become a custom software shop."],"→","amber","red"),
VS("The next big thing","Expected",["Something entirely new"],"Usual",["An old thing, done much better"],["Search engines, music players and phones all existed before the ones that won."],"→","blue","green"),
PT("The emotional adoption curve",[["Early adopters","Feel the pain most, and tolerate rough edges.","blue"],["The mainstream","Feel it too, and will not struggle.","green"],["The bridge","Make it usable for the less patient.","purple"]],["People buy to relieve an emotion: fear, frustration, greed, pride."]),
RC("Chapters 31–36",[["Emotion","Drives buying."],["Layers","Each serves the next."],["Specials","Decline them."],["Old things","Done better."],["Adoption","By emotion."],["Usability","And aesthetics, both."]])
]});
//@@ ch10-product-types-summary
CH({slug:"ch10-product-types-summary",n:"37–41",part:"Part III · Product",sub:"Advice by product type, and the practices that matter most.",end:"Know which game you are playing.",scenes:[
PT("Three kinds of product",[["Consumer services","Scale, usability, community.","blue"],["Enterprise products","Buyers are not the users.","green"],["Platforms","Developers are the customers too.","purple"]],["Each has its own keys to success."]),
VS("Enterprise products","The trap",["Sell to the buyer","Ignore the user"],"The key",["Usable for the people who work in it","Easy to install and run"],["The author finds fewer good products here than anywhere."],"→","red","green"),
PT("Practices that matter most",[["Know your users","First-hand.","blue"],["Discover before you build","With prototypes.","green"],["Design the experience","On purpose.","purple"],["Charter users","References at launch.","amber"],["Measure and improve","After launch.","red"]],["The summary chapter picks out ten."]),
PT("The product manager’s worry list",[["Is it valuable?","To real customers.","blue"],["Is it usable?","By them.","green"],["Is it feasible?","For engineering.","purple"],["Is it differentiated?","From what exists.","amber"],["Will it sell?","And can we support it?","red"]],["Questions a strong product manager keeps asking."]),
RC("Chapters 37–41",[["Types","Three."],["Consumer","Scale and usability."],["Enterprise","Users, not only buyers."],["Platform","Developers matter."],["Practices","Ten."],["Worry","Usefully."]])
]});
