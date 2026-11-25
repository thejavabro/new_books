//@@ appendix-leftover-patterns
CH({slug:"appendix-leftover-patterns",n:"A",part:"Appendix",sub:"Nine more patterns, briefly.",end:"Less common, and worth knowing.",scenes:[
PT("Creational and structural",[["Builder","Construct a complex object step by step.","blue"],["Prototype","Make new objects by copying one.","green"],["Bridge","Vary an abstraction and its implementation separately.","purple"],["Flyweight","Share one object among many uses.","amber"]],["When objects are costly, numerous or complicated to make."]),
PT("Behavioural, part one",[["Chain of responsibility","Pass a request along until someone handles it.","blue"],["Mediator","Centralise how objects talk to each other.","green"],["Memento","Save and restore an object’s state.","purple"]],["Managing communication and history."]),
PT("Behavioural, part two",[["Interpreter","Represent a small language as classes.","blue"],["Visitor","Add operations to a structure without changing it.","green"]],["For languages and for stable structures."]),
VS("When to reach for them","Common patterns",["Earn their place often"],"These",["Solve narrower problems","Know them by name, and look them up"],["The appendix gives each a page."],"and","green","blue"),
RC("Leftovers",[["Builder","Step by step."],["Prototype","Copy."],["Bridge","Two hierarchies."],["Flyweight","Share."],["Chain","Pass it on."],["Visitor","New operations."]])
]});
//@@ ch01-intro-strategy
CH({slug:"ch01-intro-strategy",n:"1",part:"Strategy",sub:"Why inheritance alone fails, and the first pattern.",end:"Encapsulate what varies.",scenes:[
VS("The duck problem","Inheritance",["Add fly() to the base class","Rubber ducks now fly","Overrides everywhere"],"Composition",["Flying is a separate behaviour","Each duck is given the one it needs"],["A change in the superclass rippled into every subclass."],"→","red","green"),
PT("Three design principles",[["Encapsulate what varies","Separate it from what stays the same.","blue"],["Program to an interface","Not an implementation.","green"],["Favour composition","Over inheritance.","purple"]],["The first principles of the book."]),
{type:'flow',title:'The Strategy pattern',cols:3,rows:2,nodes:[{id:'d',t:'Duck',c:'blue',col:0,row:0,big:true},{id:'f',t:'FlyBehavior',c:'purple',col:1,row:0},{id:'a',t:'FlyWithWings',c:'green',col:2,row:0},{id:'b',t:'FlyNoWay',c:'green',col:2,row:1}],edges:[['d','f'],['f','a'],['f','b']],cap:['The duck holds a behaviour, and delegates to it.','Swap the behaviour at run time, without touching the duck.']},
VS("Why patterns matter","Without",["Explain the whole design in detail"],"With a shared vocabulary",["“Use Strategy here”","The team understands at once"],["Patterns are a language for design."],"→","amber","green"),
RC("1",[["Problem","Inheritance spreads change."],["Vary","Encapsulate it."],["Interface","Program to it."],["Compose","Do not inherit."],["Strategy","Swappable behaviour."],["Vocabulary","Shared."]])
]});
//@@ ch02-observer
CH({slug:"ch02-observer",n:"2",part:"Observer",sub:"Keeping many objects informed of a change.",end:"Publishers and subscribers.",scenes:[
VS("Newspapers","Publisher",["Produces something new","Does not know who reads it"],"Subscribers",["Sign up","Are told when it changes","Can leave"],["The subject is the publisher. Observers are the subscribers."],"and","blue","green"),
PL("The Observer pattern",[["Register","An observer subscribes."],["Change","The subject’s state changes.","blue"],["Notify","Every observer is told.","purple"],["Update","Each reacts in its own way.","green"]],["One-to-many: when one object changes, its dependents are updated."],{tc:"blue"}),
VS("Push or pull","Push",["The subject sends the data","Observers get everything"],"Pull",["The subject says “I changed”","Observers fetch what they need"],["Pull keeps observers independent of data they do not use."],"or","blue","purple"),
VS("Loose coupling","Tightly coupled",["The subject knows each display by name"],"Loosely coupled",["The subject knows only an interface","Observers come and go freely"],["Strive for loosely coupled designs between objects that interact."],"→","red","green"),
RC("2",[["Subject","Has the state."],["Observers","Want to know."],["Register","And remove."],["Notify","On change."],["Pull","What you need."],["Loose coupling","The principle."]])
]});
//@@ ch03-decorator
CH({slug:"ch03-decorator",n:"3",part:"Decorator",sub:"Adding responsibilities without changing a class.",end:"Open for extension, closed for modification.",scenes:[
VS("The class explosion","A subclass per combination",["Coffee with milk","With milk and mocha","With milk, mocha and whip"],"Wrappers",["One class per condiment","Wrap the coffee as many times as needed"],["Inheritance cannot keep up with combinations."],"→","red","green"),
PL("Wrapping a drink",[["Dark roast","The base object."],["Mocha","Wraps it.","blue"],["Whip","Wraps that.","purple"],["Cost","Each adds its price and asks the one inside.","green"]],["A decorator has the same type as what it wraps, so they can nest."],{tc:"blue"}),
VS("The open-closed principle","Modify",["Open the class and change it","Risk breaking what worked"],"Extend",["Add a new class","Existing code untouched"],["Classes should be open for extension, and closed for modification."],"→","red","green"),
VS("The cost","Benefit",["Behaviour added at run time","Any combination"],"Cost",["Many small classes","Harder to see what an object is"],["Used heavily in input and output stream libraries."],"and","green","amber"),
RC("3",[["Problem","Combinations."],["Wrap","Not subclass."],["Same type","As the wrapped."],["Stack","Decorators."],["Open-closed","The principle."],["Cost","Many small objects."]])
]});
//@@ ch04-factory
CH({slug:"ch04-factory",n:"4",part:"Factory",sub:"Keeping the code that creates objects in one place.",end:"Depend on abstractions, not on concrete classes.",scenes:[
VS("The trouble with “new”","Scattered",["Concrete classes named throughout the code","A new product means edits everywhere"],"Encapsulated",["Creation lives in one place","The rest depends on an interface"],["When you see “new”, think “concrete”."],"→","red","green"),
PT("Three related ideas",[["Simple factory","One class creates the objects. An idiom, not a pattern.","blue"],["Factory method","Subclasses decide which class to create.","green"],["Abstract factory","Creates families of related objects.","purple"]],["Each goes a step further."]),
VS("Factory method and abstract factory","Factory method",["Uses inheritance","A subclass overrides one creation method"],"Abstract factory",["Uses composition","An object supplies a whole family"],["One product, or a matching set."],"VS","blue","purple"),
VS("The dependency inversion principle","Before",["High-level code depends on concrete products"],"After",["Both depend on an abstraction"],["Depend upon abstractions. Do not depend upon concrete classes."],"→","red","green"),
RC("4",[["New","Means concrete."],["Encapsulate","Creation."],["Simple factory","An idiom."],["Factory method","Subclasses decide."],["Abstract factory","Families."],["Inversion","Depend on abstractions."]])
]});
//@@ ch05-singleton
CH({slug:"ch05-singleton",n:"5",part:"Singleton",sub:"Guaranteeing exactly one instance.",end:"One object, and one way to reach it.",scenes:[
PT("The pattern",[["A private constructor","Nobody else can create one.","blue"],["A static method","Returns the single instance.","green"],["Created once","Then reused.","purple"]],["For things there must be only one of: a registry, a pool, a device driver."]),
VS("The threading problem","Two threads",["Both see “no instance yet”","Both create one"],"Fix",["Make creation safe","Only one is ever made"],["Lazy creation needs care when threads are involved."],"→","red","green"),
PT("Ways to make it safe",[["Synchronise the method","Simple, slower.","blue"],["Create it eagerly","At class load.","green"],["Double-checked locking","Lock only the first time.","purple"],["An enum","The simplest in Java.","amber"]],["Choose by how often it is called."]),
VS("Use it sparingly","Appeal",["Easy global access"],"Cost",["Hidden dependencies","Harder to test","Two responsibilities in one class"],["It is the simplest pattern, and often overused."],"VS","green","amber"),
RC("5",[["One","Instance."],["Private","Constructor."],["Static","Access."],["Threads","Need care."],["Enum","Is simplest."],["Sparingly","Use it."]])
]});
//@@ ch06-command
CH({slug:"ch06-command",n:"6",part:"Command",sub:"Turning a request into an object.",end:"The invoker does not know what it is invoking.",scenes:[
{type:'flow',title:'The Command pattern',cols:4,rows:1,nodes:[{id:'c',t:'Client',c:'muted',col:0,row:0},{id:'i',t:'Invoker',c:'blue',col:1,row:0},{id:'k',t:'Command',c:'purple',col:2,row:0,big:true},{id:'r',t:'Receiver',c:'green',col:3,row:0}],edges:[['c','i'],['i','k'],['k','r']],cap:['A command object wraps an action and the object that performs it.','The invoker only calls execute().']},
VS("A diner","Customer",["Writes an order"],"Waitress",["Takes the order slip","Does not know how to cook it"],["The cook knows how. The order slip is the command."],"→","blue","green"),
PT("What it makes possible",[["Undo","Each command knows how to reverse itself.","blue"],["Macros","A command that runs several.","green"],["Queues","Commands waiting for a worker.","purple"],["Logs","Replay after a crash.","amber"]],["Requests become things you can store and pass around."]),
VS("Decoupling","Without",["The remote control knows every device’s API"],"With",["The remote knows only “execute”","New devices need no change to it"],["The requester is separated from the performer."],"→","red","green"),
RC("6",[["Request","As an object."],["Invoker","Calls execute."],["Receiver","Does the work."],["Undo","Built in."],["Macro","Many commands."],["Queue","And log."]])
]});
//@@ ch07-adapter-facade
CH({slug:"ch07-adapter-facade",n:"7",part:"Adapter and Facade",sub:"Changing an interface, and simplifying one.",end:"An adapter converts. A facade simplifies.",scenes:[
VS("Adapter","The problem",["You have one interface","The client expects another"],"The adapter",["Wraps the object","Translates each call"],["Like a plug adapter between two socket standards."],"→","amber","green"),
VS("Facade","The subsystem",["Many classes","Many steps to do one thing"],"The facade",["One class","One method per task"],["It does not hide the subsystem. It offers an easier way in."],"→","red","green"),
VD("Three wrappers, three intents",[["Decorator",true,"Adds responsibilities. Same interface.","ADDS","purple"],["Adapter",true,"Converts one interface into another.","CONVERTS","blue"],["Facade",true,"Provides a simpler interface.","SIMPLIFIES","green"]],["They all wrap. They differ in why."],{sw:260}),
VS("The principle of least knowledge","Chained calls",["Reach through an object to its friends’ friends"],"Close friends only",["Talk to what you hold, create, or are given"],["Fewer dependencies between objects."],"→","red","green"),
RC("7",[["Adapter","Converts."],["Facade","Simplifies."],["Decorator","Adds."],["Intent","Tells them apart."],["Least knowledge","Talk to friends."],["Coupling","Reduced."]])
]});
//@@ ch08-template-method
CH({slug:"ch08-template-method",n:"8",part:"Template Method",sub:"Fixing the steps of an algorithm, and letting subclasses fill some in.",end:"Do not call us. We will call you.",scenes:[
PL("Coffee and tea",[["Boil water","The same."],["Brew or steep","Differs.","amber"],["Pour into a cup","The same.","blue"],["Add condiments","Differs.","amber"]],["Two recipes with the same shape."],{tc:"blue"}),
PT("The pattern",[["Template method","Defines the steps, in order.","blue"],["Abstract steps","Subclasses must supply them.","green"],["Concrete steps","Shared by all.","purple"],["Hooks","Optional steps, with a default.","amber"]],["The superclass controls the algorithm."]),
VS("The Hollywood principle","Low-level calls high-level",["Dependencies in every direction"],"High-level calls low-level",["Subclasses plug in","They are called when needed"],["Do not call us, we will call you."],"→","red","green"),
VS("Template method and strategy","Template method",["Inheritance","Subclasses fill in steps"],"Strategy",["Composition","A whole algorithm is swapped"],["Both encapsulate algorithms, in different ways."],"VS","blue","purple"),
RC("8",[["Template","The fixed outline."],["Steps","Some abstract."],["Hooks","Optional."],["Hollywood","High calls low."],["Reuse","The shared steps."],["Strategy","The alternative."]])
]});
//@@ ch09-iterator-composite
CH({slug:"ch09-iterator-composite",n:"9",part:"Iterator and Composite",sub:"Walking a collection without knowing how it is stored.",end:"One way to traverse, and one way to treat parts and wholes.",scenes:[
VS("The two menus","One uses a list",["The other uses an array"],"The waitress",["Needs two loops","Knows both internals"],["Different collections forced duplicate code."],"and","blue","red"),
PL("The Iterator pattern",[["Ask","The collection for an iterator."],["hasNext","Is there more?","blue"],["next","Give me the next one.","purple"],["Repeat","Until done.","green"]],["The collection keeps its storage private. The client sees one interface."],{tc:"blue"}),
VS("Single responsibility","Two jobs",["Manage the items","And iterate over them"],"One each",["The collection manages","The iterator iterates"],["A class should have only one reason to change."],"→","red","green"),
VS("The Composite pattern","Leaf",["A menu item"],"Composite",["A menu, holding items and other menus"],["Treat individual objects and groups of them through the same interface."],"and","blue","purple"),
RC("9",[["Iterator","Uniform traversal."],["Encapsulate","The storage."],["One reason","To change."],["Composite","Trees of parts."],["Uniform","Leaf and group."],["Together","Walk the tree."]])
]});
//@@ ch10-state
CH({slug:"ch10-state",n:"10",part:"State",sub:"Objects whose behaviour depends on what state they are in.",end:"Give each state its own class.",scenes:[
VS("The gumball machine","Conditionals",["Every method checks the state","A new state means editing them all"],"State objects",["Each state is a class","The machine delegates to the current one"],["Behaviour is localised by state."],"→","red","green"),
PL("How it runs",[["An action","Arrives at the machine."],["Delegate","To the current state object.","blue"],["Act","The state does what is right for it.","purple"],["Transition","It may set a new current state.","green"]],["The machine appears to change its class."],{tc:"blue"}),
VS("State and Strategy","State",["The object changes its own behaviour as its state changes","Transitions are part of the design"],"Strategy",["The client chooses one behaviour","It usually stays"],["The same class diagram. A different intent."],"VS","purple","blue"),
VS("Adding a state","With conditionals",["Touch every method"],"With the pattern",["Add one class","Adjust the transitions into it"],["Closed for modification, open for extension."],"→","red","green"),
RC("10",[["State","As a class."],["Delegate","To the current one."],["Transitions","Explicit."],["No conditionals","Per method."],["Strategy","Same shape."],["Extend","By adding a class."]])
]});
//@@ ch11-proxy
CH({slug:"ch11-proxy",n:"11",part:"Proxy",sub:"A stand-in that controls access to another object.",end:"Same interface, with something in between.",scenes:[
PT("Kinds of proxy",[["Remote","The real object lives elsewhere.","blue"],["Virtual","The real object is expensive to create.","green"],["Protection","Access depends on who is asking.","purple"]],["Each controls access for a different reason."]),
PL("A remote proxy",[["Client","Calls a local method."],["Proxy","Packages the call.","blue"],["Network","Carries it.","purple"],["Real object","Does the work, and replies.","green"]],["The client behaves as if the object were local."],{tc:"blue"}),
VS("A virtual proxy","Without",["Wait for every image to load"],"With",["Show a placeholder at once","Swap in the real image when it arrives"],["Creation is deferred until needed."],"→","amber","green"),
VS("Proxy and Decorator","Proxy",["Controls access"],"Decorator",["Adds behaviour"],["Both wrap an object behind the same interface. The purpose differs."],"VS","blue","purple"),
RC("11",[["Proxy","A stand-in."],["Remote","Across a network."],["Virtual","Lazy creation."],["Protection","By role."],["Same interface","As the subject."],["Purpose","Control access."]])
]});
//@@ ch12-compound-mvc
CH({slug:"ch12-compound-mvc",n:"12",part:"Compound patterns",sub:"Patterns working together.",end:"MVC is three patterns in one.",scenes:[
PT("Model, view, controller",[["Model","Holds the data and logic.","blue"],["View","Shows the model.","green"],["Controller","Turns input into actions on the model.","purple"]],["Three objects with three jobs."]),
VD("The patterns inside MVC",[["The model tells views it changed",true,"Views subscribe.","OBSERVER","blue"],["The view delegates input handling",true,"Swap the controller.","STRATEGY","purple"],["The view is a tree of components",true,"Windows, panels, buttons.","COMPOSITE","green"]],["A compound pattern combines patterns into a general solution."],{sw:250}),
PL("A round trip",[["User acts","On the view."],["Controller","Interprets it.","blue"],["Model","Changes state.","purple"],["View","Is notified, and redraws.","green"]],["The model knows nothing of the views."],{tc:"blue"}),
VS("Why bother","One big class",["Interface and logic tangled","Cannot reuse either"],"Separated",["Several views of one model","Test the model alone"],["Separation of concerns, by design."],"→","red","green"),
RC("12",[["Compound","Patterns together."],["Model","Data and rules."],["View","Display."],["Controller","Input."],["Observer","Keeps views current."],["Strategy","Swappable controller."]])
]});
//@@ ch13-real-world
CH({slug:"ch13-real-world",n:"13",part:"Patterns in practice",sub:"What a pattern is, and how to use patterns well.",end:"Let patterns emerge. Do not force them.",scenes:[
PT("What a pattern is",[["A solution","To a problem.","blue"],["In a context","Where it applies.","green"],["With consequences","Benefits and costs.","purple"]],["A pattern is more than a clever class diagram."]),
PT("Three categories",[["Creational","How objects are made.","blue"],["Structural","How objects are composed.","green"],["Behavioural","How objects interact.","purple"]],["The classic catalogue groups patterns this way."]),
VS("Using patterns well","Beginner",["Uses patterns everywhere"],"Experienced",["Starts simple","Adds a pattern when change demands it"],["The simplest design that works usually wins."],"→","amber","green"),
VS("Anti-patterns","A pattern",["A good solution to a recurring problem"],"An anti-pattern",["A tempting solution that turns out badly","And how to get out of it"],["Knowing the traps is part of the vocabulary."],"VS","green","red"),
RC("13",[["Pattern","Problem, context, solution."],["Catalogue","Three categories."],["Simple","First."],["Emerge","Through refactoring."],["Vocabulary","For teams."],["Anti-patterns","Know them."]])
]});
