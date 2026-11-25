//@@ ch01-first-example
CH({slug:"ch01-first-example",n:"1",part:"Part I · Principles",sub:"One function, improved in small steps.",end:"Refactor to make the change easy. Then make the easy change.",scenes:[
PL("The journey",[["One long function","It prints a bill."],["Tests first","A solid, self-checking suite.","blue"],["Decompose","Extract small, named functions.","purple"],["Split phases","Calculation, then formatting.","amber"],["Polymorphism","Calculations organised by type.","green"]],["The behaviour never changes. Only the structure does."],{tc:"blue"}),
VS("Why change working code?","Leave it",["It works","Adding a feature is slow and risky"],"Refactor first",["Structure fits the change","The feature is then easy"],["When you have to add a feature to code that is not structured for it, restructure first."],"→","amber","green"),
PT("The rhythm",[["A small change","One refactoring.","blue"],["Compile and test","Straight away.","green"],["Commit","When green.","purple"],["Repeat","Again and again.","amber"]],["Small steps mean any mistake is easy to find."]),
VS("Splitting calculation from formatting","Mixed",["Each new output format copies the calculation"],"Split",["One function computes the data","Others render it as text or HTML"],["Split Phase makes a second output cheap."],"→","red","green"),
RC("1",[["Tests","First."],["Small steps","Each one tested."],["Extract","Functions with names."],["Split","Calculation from formatting."],["Polymorphism","Replaces conditionals."],["Easy","Then change."]])
]});
//@@ ch02-principles
CH({slug:"ch02-principles",n:"2",part:"Part I · Principles",sub:"What refactoring is, and why and when to do it.",end:"Refactoring makes you faster.",scenes:[
VS("What refactoring means","It is",["A change to the structure of code","That does not change its observable behaviour"],"It is not",["Any tidying up","A rewrite","A change that leaves the code broken for days"],["If the code is broken for long, you are not refactoring."],"VS","green","red"),
VS("The two hats","Adding function",["New capabilities","New tests"],"Refactoring",["No new capabilities","No new tests needed"],["You swap hats often. You never wear both at once."],"or","blue","purple"),
{type:'curve',title:'Why refactor? It makes you faster',xl:'time →',yl:'features delivered →',series:[{l:'Good design',c:'green',pts:line(40,x=>.05+.85*x)},{l:'Poor design',c:'red',pts:line(40,x=>.05+.5*(1-Math.exp(-3.2*x)))}],marks:[],cap:['With poor design, each new feature is harder than the last.','Refactoring keeps the line climbing. (Illustrative: the design stamina hypothesis.)']},
PT("When to refactor",[["Preparatory","Before adding a feature.","blue"],["Comprehension","To understand code as you read it.","green"],["Litter-pickup","Small fixes as you pass.","purple"],["Planned","Occasionally, and rarely.","amber"]],["Most refactoring is opportunistic, done as part of other work."]),
RC("2",[["Definition","Structure, not behaviour."],["Hats","One at a time."],["Speed","The economic reason."],["Opportunistic","Most of the time."],["Costs","Branches and legacy code make it harder."],["Tools","Automate the safe ones."]])
]});
//@@ ch03-bad-smells
CH({slug:"ch03-bad-smells",n:"3",part:"Part I · Principles",sub:"Signs that code wants refactoring.",end:"Use your nose.",scenes:[
PT("Smells in functions and names",[["Mysterious name","It does not say what it is.","blue"],["Long function","Too much in one place.","green"],["Long parameter list","Too much to pass.","purple"],["Duplicated code","The same thing twice.","amber"],["Comments","Used as deodorant.","red"]],["Often cured by Extract Function and a better name."]),
PT("Smells in data",[["Global data","Anyone can change it.","blue"],["Mutable data","Changes surprise you.","green"],["Data clumps","Items that travel together.","purple"],["Primitive obsession","Strings and numbers for real concepts.","amber"]],["Encapsulate, and give the concept a type."]),
PT("Smells in structure",[["Divergent change","One module changes for many reasons.","blue"],["Shotgun surgery","One change touches many modules.","green"],["Feature envy","A function wants another module’s data.","purple"],["Message chains","a.b().c().d().","amber"]],["Move things to where they belong."]),
VS("What a smell is","Not",["A rule broken","A bug"],"But",["A hint that something may be wrong","A prompt to look"],["The book catalogues two dozen. Judgement decides whether to act."],"→","muted","blue"),
RC("3",[["Smells","Hints, not rules."],["Names","First to fix."],["Length","Extract."],["Data","Encapsulate."],["Change","Should be local."],["Judgement","Decides."]])
]});
//@@ ch04-building-tests
CH({slug:"ch04-building-tests",n:"4–5",part:"Part I · Principles",sub:"Tests that make refactoring safe, and how the catalog is laid out.",end:"Self-testing code comes first.",scenes:[
VS("Why self-testing code","Manual checking",["Slow","Skipped under pressure"],"Self-checking tests",["Run in seconds","Pass or fail, no reading output"],["A suite of tests is a powerful bug detector."],"→","red","green"),
PT("Tests that earn trust",[["Test what could break","Not every getter.","blue"],["Probe the boundaries","Empty, zero, negative.","green"],["Fresh fixture","For every test.","purple"],["See it fail","At least once.","amber"]],["Would the test catch a real bug? Break the code and find out."]),
VS("Enough tests","Chasing coverage",["Tests for the sake of numbers"],"Risk-driven",["Test where you fear mistakes","Add a test when a bug is found"],["It is better to write and run incomplete tests than not to run complete ones."],"→","amber","green"),
PT("How a catalog entry is built",[["Name","The vocabulary.","blue"],["Sketch","Before and after.","green"],["Motivation","When to use it, and when not.","purple"],["Mechanics","Step by step.","amber"],["Examples","Simple cases.","red"]],["Every refactoring in Part II follows this format."]),
RC("Chapters 4–5",[["Self-testing","Is the base."],["Fast","Run them often."],["Boundaries","Probe them."],["Fixtures","Fresh."],["Risk","Guides testing."],["Catalog","Five parts per entry."]])
]});
//@@ ch06-first-set
CH({slug:"ch06-first-set",n:"6",part:"Part II · The catalog",sub:"The refactorings used most often.",end:"Separate intention from implementation.",scenes:[
VS("Extract and inline","Extract Function",["Pull a fragment into a function named for what it does"],"Inline Function",["Put a body back where it is called, when the name adds nothing"],["If you have to work out what a fragment does, extract it and name it."],"and","green","blue"),
PT("More of the everyday toolkit",[["Extract Variable","Name a complicated expression.","blue"],["Inline Variable","Remove a name that says no more than the expression.","green"],["Change Function Declaration","Rename, or change parameters.","purple"],["Rename Variable","Say what it is.","amber"]],["Naming is the most frequent refactoring."]),
VS("Encapsulate Variable","Bare data",["Used directly everywhere","Hard to move or watch"],"Behind functions",["One place to read, one to write","Easy to change later"],["Data is harder to move than functions. Wrap it first."],"→","red","green"),
PT("Grouping, and splitting",[["Introduce Parameter Object","Replace a clump with one object.","blue"],["Combine Functions into Class","Data and the functions that use it.","green"],["Combine Functions into Transform","Derive data in one place.","purple"],["Split Phase","Separate two stages of work.","amber"]],["Group what belongs together. Split what does not."]),
RC("6",[["Extract","And name."],["Inline","When the name adds nothing."],["Rename","Constantly."],["Encapsulate","Data."],["Group","Data with its functions."],["Split Phase","Two jobs, two stages."]])
]});
//@@ ch07-encapsulation
CH({slug:"ch07-encapsulation",n:"7",part:"Part II · The catalog",sub:"Deciding what each module hides.",end:"Modules are defined by their secrets.",scenes:[
PT("Encapsulating data",[["Encapsulate Record","Replace a bare record with an object.","blue"],["Encapsulate Collection","Do not hand out the mutable list.","green"],["Replace Primitive with Object","Give a concept a type.","purple"],["Replace Temp with Query","Compute on demand.","amber"]],["Hide the representation, and it can change."]),
VS("Encapsulate Collection","Returning the list",["Callers can change it behind your back"],"Returning a copy or a read-only view",["Changes go through add and remove methods"],["The owner stays in control of its own data."],"→","red","green"),
VS("Extract Class and Inline Class","Extract Class",["A class doing two jobs becomes two"],"Inline Class",["A class doing too little is folded into another"],["Classes grow a field at a time. Split when they bulge."],"and","green","blue"),
VS("Hide Delegate and Remove Middle Man","Hide Delegate",["The client asks the server","It does not reach through to its collaborator"],"Remove Middle Man",["Too many forwarding methods","Let the client call the delegate"],["Both are right, at different times. Adjust as the code changes."],"and","blue","amber"),
RC("7",[["Secrets","Define modules."],["Records","Become objects."],["Collections","Not handed out."],["Primitives","Become types."],["Extract","Or inline classes."],["Delegation","In balance."]])
]});
//@@ ch08-moving-features
CH({slug:"ch08-moving-features",n:"8",part:"Part II · The catalog",sub:"Putting code where it belongs.",end:"Good modularity means related things sit together.",scenes:[
PT("Moving between contexts",[["Move Function","To the module it uses most.","blue"],["Move Field","To where the data belongs.","green"],["Move Statements into Function","Shared setup joins the function.","purple"],["Move Statements to Callers","When callers need to differ.","amber"]],["Understanding improves, so placement changes."]),
VS("Slide Statements","Scattered",["A variable declared far from its use"],"Together",["Related lines side by side","Ready to extract"],["Related code is easier to read when it is adjacent."],"→","amber","green"),
VS("Split Loop","One loop, two jobs",["Hard to move either"],"Two loops",["Each does one thing","Each can be extracted"],["Worried about performance? Measure. It is rarely the bottleneck."],"→","red","green"),
VS("Replace Loop with Pipeline","A loop",["Mutation and control flow mixed"],"A pipeline",["filter, map, reduce","Each step named by what it does"],["Then remove any dead code. Version control remembers it."],"→","amber","green"),
RC("8",[["Move","To where it belongs."],["Slide","Related lines together."],["Split","Loops with two jobs."],["Pipeline","Over loop."],["Dead code","Delete it."],["Placement","Is revisited."]])
]});
//@@ ch09-organizing-data
CH({slug:"ch09-organizing-data",n:"9",part:"Part II · The catalog",sub:"Shaping data so the code that uses it is simple.",end:"Data structures carry the design.",scenes:[
VS("Split Variable","One variable, two uses",["Assigned for one purpose, then reused"],"Two variables",["Each with one meaning and one name"],["A variable should have one responsibility."],"→","red","green"),
VS("Replace Derived Variable with Query","Stored",["A total kept in step by hand","Sooner or later, it is wrong"],"Calculated",["Derived from the source data when asked"],["Mutable data is a major source of bugs. Remove what you can derive."],"→","red","green"),
VS("Values or references?","Value",["Immutable","Copied freely","Equal if the contents are equal"],"Reference",["One shared object","A change is seen by all holders"],["Change Reference to Value, or Value to Reference, as the need changes."],"or","blue","purple"),
PT("Smaller moves",[["Rename Field","Names in data structures matter most.","blue"],["Replace Magic Literal","Give the number a name.","green"],["Change field types","As understanding grows.","purple"]],["If you see the tables, the code is usually obvious."]),
RC("9",[["Data","Carries design."],["One use","Per variable."],["Rename","Fields."],["Derive","Do not store."],["Value","Or reference."],["Literals","Named."]])
]});
//@@ ch10-conditional-logic
CH({slug:"ch10-conditional-logic",n:"10",part:"Part II · The catalog",sub:"Making branching code say what it means.",end:"Conditionals carry much of a program’s power, and much of its confusion.",scenes:[
PT("Clarify the condition",[["Decompose Conditional","Extract the test and each branch.","blue"],["Consolidate Conditional Expression","Several checks with one result become one.","green"],["Replace Nested Conditional with Guard Clauses","Exit early for special cases.","purple"]],["A long condition tells you what happens, not why."]),
VS("Guard clauses","Nested",["Every case indented a level deeper","The main path is buried"],"Guards",["Unusual cases return at the top","The normal case reads straight down"],["Guards say: this is not the point of the function."],"→","red","green"),
VS("Replace Conditional with Polymorphism","A switch on type",["Repeated wherever behaviour varies"],"Subclasses",["Each type carries its own behaviour","A new type is a new class"],["Use it when the same type-based branching recurs."],"→","amber","green"),
PT("Special cases and assertions",[["Introduce Special Case","An object that stands in for “none”.","blue"],["Introduce Assertion","State what must be true.","green"],["Replace Control Flag with Break","Leave the loop directly.","purple"]],["Null checks scattered everywhere become one object."]),
RC("10",[["Decompose","Name the parts."],["Consolidate","Shared results."],["Guards","Exit early."],["Polymorphism","For recurring switches."],["Special case","Replaces null checks."],["Assertions","State assumptions."]])
]});
//@@ ch11-refactoring-apis
CH({slug:"ch11-refactoring-apis",n:"11",part:"Part II · The catalog",sub:"Making functions easier to call and understand.",end:"A good interface separates asking from doing.",scenes:[
VS("Separate Query from Modifier","Mixed",["A function returns a value and changes state"],"Separated",["A query has no side effects","A modifier returns nothing"],["A function you can call without worry is worth a great deal."],"→","red","green"),
PT("Tidy the parameters",[["Parameterize Function","Two functions that differ by a value become one.","blue"],["Remove Flag Argument","A function per behaviour.","green"],["Preserve Whole Object","Pass the object, not three of its fields.","purple"],["Replace Parameter with Query","Let the function find it.","amber"]],["Shorter parameter lists, with fewer surprises."]),
VS("Remove Flag Argument","A boolean flag",["The call says setDimension(true)","Nobody knows what true means"],"Explicit functions",["Each name says what it does"],["Flags hide which code will run."],"→","red","green"),
PT("Constructors, commands and errors",[["Replace Constructor with Factory Function","A name, and freedom over what is returned.","blue"],["Replace Function with Command","An object you can undo or build up.","green"],["Remove Setting Method","Make a field immutable.","purple"],["Exceptions","For the unexpected, not for control flow.","amber"]],["Choose the form the caller needs."]),
RC("11",[["Query","Or modifier, not both."],["Parameters","Fewer."],["Flags","Removed."],["Whole object","Passed."],["Factory","Over constructor."],["Commands","When functions need more."]])
]});
//@@ ch12-inheritance
CH({slug:"ch12-inheritance",n:"12",part:"Part II · The catalog",sub:"Moving features up and down a hierarchy, and knowing when to drop it.",end:"Inheritance is powerful, and easy to misuse.",scenes:[
PT("Up and down",[["Pull Up Method, Field","Shared features move to the superclass.","blue"],["Push Down Method, Field","Features used by one subclass move there.","green"],["Extract Superclass","Two similar classes gain a parent.","purple"],["Collapse Hierarchy","A parent and child that are no longer different merge.","amber"]],["Features move as understanding changes."]),
VS("Replace Type Code with Subclasses","A type field",["Checked in conditionals everywhere"],"Subclasses",["Each type has its own class","Behaviour lives with it"],["The gateway to polymorphism."],"→","amber","green"),
VS("Replace Subclass with Delegate","Inheritance",["A class can vary in only one way","Tight coupling to the parent"],"Delegation",["Vary in several ways","Looser coupling"],["Favour a judicious mixture of composition and inheritance."],"→","amber","green"),
VS("Replace Superclass with Delegate","Inheritance misused",["A stack that inherits from a list","Exposes methods that make no sense"],"Delegation",["Hold the list","Offer only what a stack should"],["Inherit only when every operation of the parent applies."],"→","red","green"),
RC("12",[["Pull up","What is shared."],["Push down","What is specific."],["Subclasses","For type codes."],["Delegate","When inheritance binds."],["Collapse","What no longer differs."],["Inherit","Only when it truly fits."]])
]});
