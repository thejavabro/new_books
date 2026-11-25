//@@ appendix-csharp
CH({slug:"appendix-csharp",n:"A",part:"Appendix",sub:"Language features the book’s code relies on.",end:"A little syntax hides a lot of ceremony.",scenes:[
VS("Value types and reference types","Value type",["Copied when assigned","Lives inline"],"Reference type",["A reference is copied","Many names for one object"],["C# sorts most types into these two kinds."],"VS","blue","purple"),
VS("Two kinds of nullable","Nullable value types",["A value, or nothing","A real wrapper type"],"Nullable reference types",["A compile-time annotation","Warnings, not a new type"],["The same question mark, two mechanisms."],"VS","blue","amber"),
PT("Sugar the book leans on",[["Extension methods","Static methods called like instance methods.","blue"],["Iterators","Sequences produced lazily.","green"],["Lambdas","Small anonymous functions.","purple"],["Records and patterns","Compact data and matching.","amber"]],["Each replaces many lines of boilerplate."]),
PT("Generics",[["Written once","With a type parameter.","blue"],["Checked","By the compiler.","green"],["Specialised","Differently in each language.","purple"]],["Three languages, three ways to implement the same idea."]),
RC("Appendix",[["Value","Or reference."],["Generics","Written once."],["Nullable","Two kinds."],["Sugar","Hides ceremony."],["Iterators","Lazy."],["Reading","Listed by chapter."]])
]});
//@@ ch01-starting
CH({slug:"ch01-starting",n:"1",part:"Getting started",sub:"What the book is after, and a warm-up with an immutable list.",end:"Better asymptotics is not always better.",scenes:[
PT("Three words",[["Data structure","A way to store information.","blue"],["Algorithm","A way to compute with it.","green"],["Complexity","How cost grows with size.","purple"]],["The book goes beyond the structures every course already covers."]),
BR("The doubling test",[["Constant",10,"Unchanged","green"],["Logarithmic",20,"One more step","green"],["Linear",40,"Twice the cost","blue"],["Quadratic",70,"Four times","amber"],["Exponential",100,"Squared","red"]],["What happens to the cost when the input doubles?","(Bars are illustrative.)"],{max:100,lw:260}),
VS("Better asymptotics is not always better","On paper",["A cleverer algorithm with a lower growth rate"],"In practice",["Inputs are small","Constant factors dominate","The simple loop wins"],["Measure with realistic inputs before optimising."],"VS","blue","amber"),
PT("An immutable linked list",[["Either empty","Or a value followed by a list.","blue"],["Push","Makes a new list that shares the old.","green"],["Never changes","So it can be shared safely.","purple"],["Reverse","Push each item onto a new list.","amber"]],["The warm-up structure, and a pattern the book reuses."]),
RC("1",[["Aim","Beyond the basics."],["Three words","Structure, algorithm, complexity."],["Doubling","Feel the growth."],["Measure","Before optimising."],["Immutable list","Shares its tail."],["Hidden costs","In innocent code."]])
]});
//@@ ch02-stacks-queues
CH({slug:"ch02-stacks-queues",n:"2",part:"Part 1 · Extending the basics",sub:"Why to prefer data that cannot change, and two classic structures built that way.",end:"Immutability makes sharing safe.",scenes:[
VS("Why prefer data that cannot change?","Mutable",["Anyone holding it can change it","Bugs at a distance"],"Immutable",["What you checked is what you use","Safe to share across threads"],["A time-of-check, time-of-use bug needs something to change in between."],"→","red","green"),
PT("An immutable stack",[["Push","Returns a new stack.","blue"],["Pop","Returns the rest.","green"],["Peek","Returns the top.","purple"],["Old versions","Remain valid.","amber"]],["Start from the abstract data type, not the implementation."]),
VS("A queue from two stacks","Front stack",["Dequeue from here"],"Back stack",["Enqueue here","Reversed onto the front when the front is empty"],["Each item is moved once, so the cost averages out to constant."],"and","blue","purple"),
VS("Undo and redo for free","Mutable",["Record each change","Write the inverse of each"],"Immutable",["Keep the old versions","Undo is going back to one"],["History is just a stack of past values."],"→","amber","green"),
RC("2",[["Immutable","Cannot change."],["Safe","To check and to share."],["Stack","Push returns a new one."],["Queue","Two stacks."],["Undo","Old versions kept."],["Hughes list","Build cheap, pay later."]])
]});
//@@ ch03-deque
CH({slug:"ch03-deque",n:"3",part:"Part 1 · Extending the basics",sub:"A double-ended queue that never changes.",end:"Solve a restricted version first.",scenes:[
PT("A deque",[["Push left","And pop left.","blue"],["Push right","And pop right.","green"],["Peek","At both ends.","purple"]],["A stack at both ends."]),
VS("The first attempt","Tempting",["Empty, a single item, or left item, middle deque, right item"],"The trouble",["Every operation at one end rebuilds the whole chain"],["An obvious recursive definition that is far too slow."],"→","amber","red"),
PL("Building it in steps",[["Tiny deque","Holds one to four items."],["Ends","A tiny deque at each side.","blue"],["Middle","A deque of tiny deques.","purple"],["Overflow","Pushes a group inward.","green"]],["This is a finger tree. The middle nests one level deeper each time."],{tc:"blue"}),
VS("The cost","Usually",["A push only touches the end","Constant time"],"Occasionally",["It cascades inward","Logarithmic in the worst case"],["Amortised constant, worst case logarithmic."],"and","green","amber"),
RC("3",[["Deque","Two-ended."],["Naive","Too slow."],["Restrict","Then generalise."],["Finger tree","Ends and a middle."],["Cost","Amortised constant."],["Concatenate","In logarithmic time."]])
]});
//@@ ch04-hashlife
CH({slug:"ch04-hashlife",n:"4",part:"Part 1 · Extending the basics",sub:"Conway’s Game of Life, made astonishingly fast.",end:"Never compute the same square twice.",scenes:[
PT("Conway’s Game of Life",[["A grid of cells","Alive or dead.","blue"],["Each tick","Depends on eight neighbours.","green"],["Simple rules","Complex behaviour.","purple"]],["The standard first attempt uses two arrays and a loop."]),
PT("An immutable quadtree",[["A quad","A square whose side is a power of two.","blue"],["Four children","Each a smaller quad.","green"],["Deduplicated","Identical quads are stored once.","purple"],["Empty space","Costs almost nothing.","amber"]],["Large patterns are full of repetition."]),
PL("A quad knows its centre’s future",[["Take a quad","Of four by four."],["Compute","The centre two by two, one tick on.","blue"],["Memoise","Remember the answer.","purple"],["Reuse","Wherever that quad appears.","green"]],["The same idea then recurses to larger and larger quads."],{tc:"blue"}),
VS("Stepping further","One tick at a time",["A million ticks, a million passes"],"Stepping the centres again",["Each level doubles the distance in time","Huge leaps forward"],["Memoised quadtrees let the algorithm jump through time."],"→","amber","green"),
RC("4",[["Life","Simple rules."],["Arrays","The slow way."],["Quadtree","Immutable, shared."],["Memoise","Each quad’s future."],["Recursion","Bigger quads."],["Leaps","Through time."]])
]});
//@@ ch05-dawg
CH({slug:"ch05-dawg",n:"5",part:"Part 1 · Extending the basics",sub:"Storing a large word list in very little space.",end:"Share the prefixes, then share the suffixes.",scenes:[
ST("Three ways to store a word list",[["DAWG","Shares prefixes and suffixes.","green",0.4],["Trie","Shares prefixes.","blue",0.7],["Sorted list","Binary search.","amber",1.0]],["Each step stores the same words in less space."]),
VS("Trie and DAWG","Trie",["A tree","Common beginnings stored once"],"DAWG",["A graph","Common endings stored once too"],["English is full of shared endings."],"→","blue","green"),
PT("A trie is an automaton",[["States","The nodes.","blue"],["Transitions","The letters.","green"],["Accepting states","Ends of words.","purple"],["Minimise it","Merge equivalent states.","amber"]],["A minimal automaton for a word list is a DAWG."]),
PL("Build it one word at a time",[["Add words","In sorted order."],["Find the common prefix","With the last word.","blue"],["Minimise","The part that will not change.","purple"],["Attach","The new suffix.","green"]],["The graph stays minimal as it grows."],{tc:"blue"}),
RC("5",[["Problem","A big word list."],["Sorted list","Binary search."],["Trie","Share prefixes."],["Automaton","States and letters."],["DAWG","Share suffixes."],["Compact","Fits in a byte array."]])
]});
//@@ ch06-combinatorics
CH({slug:"ch06-combinatorics",n:"6",part:"Part 1 · Extending the basics",sub:"Generating products, permutations and combinations.",end:"Number the possibilities, and you can jump to any one.",scenes:[
PT("Three ways of choosing",[["Cartesian product","One from each set.","blue"],["Permutation","All items, in some order.","green"],["Combination","Some items, order ignored.","purple"]],["Every product is also a way of counting."]),
PL("Next permutation, in dictionary order",[["Find","The last ascent from the right."],["Swap","With the next larger item to its right.","blue"],["Reverse","The tail.","green"]],["A centuries-old algorithm that mutates the sequence in place."],{tc:"blue"}),
VS("Jump straight to permutation number p","Step through",["Generate each one in turn"],"Compute directly",["Treat p as a number in a mixed base","Read off each choice"],["There are n factorial permutations, and each has a number."],"→","amber","green"),
VS("Change ringing","Dictionary order",["Many items move at once"],"One swap at a time",["Each permutation differs by one adjacent swap"],["Bell ringers have played permutations this way for centuries."],"→","blue","purple"),
RC("6",[["Product","A nested loop."],["Counting","Digits are a product."],["Next","Permutation in order."],["Number","Any permutation."],["Swaps","One at a time."],["Combinations","Numbered too."]])
]});
//@@ ch07-category-theory
CH({slug:"ch07-category-theory",n:"7",part:"Part 1 · Extending the basics",sub:"Just enough category theory to explain a compiler rule.",end:"Arrows that compose.",scenes:[
PT("Objects and arrows",[["Objects","Anything at all.","blue"],["Arrows","Between objects.","green"],["Composition","Two arrows make a third.","purple"],["Identity","Every object has one.","amber"]],["A category is a collection of things, and the arrows between them."]),
PT("Functors",[["Map objects","To objects.","blue"],["Map arrows","To arrows.","green"],["Preserve","Composition and identity.","purple"]],["A functor is a map between categories that keeps the structure."]),
VS("The category of types","Objects",["Types"],"Arrows",["An arrow from X to Y when an X can be used as a Y"],["A giraffe can be used as an animal, so there is an arrow."],"and","blue","green"),
VS("Covariance","Safe",["A read-only sequence of giraffes used as a sequence of animals"],"Unsafe",["A mutable list of giraffes used as a list of animals","Someone could add a tiger"],["A generic type keeps the arrows only where the type is used for output."],"VS","green","red"),
RC("7",[["Category","Objects and arrows."],["Compose","Arrows."],["Functor","Keeps structure."],["Types","Form a category."],["Covariance","Output only."],["Common type","The most specific."]])
]});
//@@ ch08-graph-coloring
CH({slug:"ch08-graph-coloring",n:"8",part:"Part 2",sub:"Colouring graphs, and the general technique behind it.",end:"Try, and back up when stuck.",scenes:[
PT("Colouring a graph",[["Nodes","Things to colour.","blue"],["Edges","Pairs that must differ.","green"],["Goal","Use as few colours as allowed.","purple"]],["Maps, timetables and puzzles all reduce to it."]),
PL("A general backtracker",[["Choose","An uncoloured node."],["Try","A colour that fits.","blue"],["Recurse","On the rest.","purple"],["Stuck?","Undo and try another.","amber"],["Done","When all are coloured.","green"]],["With immutable state, undoing is free: keep the previous value."],{tc:"blue"}),
VS("Colour the easy nodes last","Any order",["Much backtracking"],"Easy last",["A node with fewer neighbours than colours can always be coloured","Set it aside"],["Removing easy nodes may make others easy."],"→","amber","green"),
PT("The same problem in disguise",[["Sudoku","Cells are nodes. Rows, columns and boxes are edges.","blue"],["Scheduling","Clashing events must differ.","green"],["Register allocation","Variables alive together must differ.","purple"]],["Graph colouring is hard in general, and still solved every day."]),
RC("8",[["Graph","Nodes and edges."],["Store","Three ways."],["Backtrack","Try and undo."],["Easy last","Fewer neighbours."],["Hard","In general."],["Uses","Sudoku, schedules, compilers."]])
]});
//@@ ch09-pretty-printing
CH({slug:"ch09-pretty-printing",n:"9",part:"Part 2",sub:"Turning a parse tree back into well-laid-out text.",end:"Locally best is usually good enough.",scenes:[
VS("Greedy","Optimal",["Consider every layout","Slow"],"Greedy",["Take the best choice now","Never look back","Fast, usually good"],["A greedy algorithm makes the locally best choice at each step."],"VS","amber","green"),
PT("A doc",[["Text","Literal characters.","blue"],["Break","A space, or a new line.","green"],["Group","Break all of it, or none.","purple"],["Indent","What follows a break is indented.","amber"]],["An immutable description of the possible layouts."]),
PL("Two phases",[["Parse tree","The program’s structure."],["Doc","Built by a visitor.","blue"],["Fits?","Would this group fit on the line?","amber"],["Text","Printed with breaks chosen.","green"]],["If a group fits, print it flat. If not, break it."],{tc:"blue"}),
VS("Avoid recursion","Recursive",["Docs are deep","The call stack overflows"],"A work stack",["An explicit stack of pending items","As deep as memory allows"],["Deep structures call for iteration."],"→","red","green"),
RC("9",[["Problem","Tree to text."],["Greedy","Good enough."],["Doc","Layout choices."],["Fits","Decides each group."],["Stack","Not recursion."],["Visitor","Builds the doc."]])
]});
//@@ ch10-unification
CH({slug:"ch10-unification",n:"10",part:"Part 2",sub:"Making two expressions equal, and finding what two have in common.",end:"Fill the holes.",scenes:[
VS("Two directions","Unification",["Two things with holes","Fill the holes to make them equal"],"Anti-unification",["Two things without holes","Find the most specific pattern that fits both"],["One specialises. The other generalises."],"and","blue","purple"),
PL("Robinson’s algorithm",[["Compare","The two terms."],["Same shape?","Recurse into the parts.","blue"],["A hole?","Bind it to the other side.","purple"],["Clash?","Fail.","red"],["Done","A set of bindings.","green"]],["It must also check that a hole is not bound to something containing itself."],{tc:"blue"}),
PT("Where unification appears",[["Type inference","Type parameters are holes.","blue"],["Logic programming","Unification plus backtracking.","green"],["Pattern matching","Binding names to parts.","purple"]],["The same algorithm underneath."]),
PT("Using anti-unification",[["Find clones","Duplicated code with small differences.","blue"],["Learn fix patterns","From before and after pairs.","green"],["Suggest refactorings","From the shared shape.","purple"]],["The most specific generalisation of two examples."]),
RC("10",[["Unify","Fill holes."],["Robinson","The classic algorithm."],["Worst case","Bad. Typical case, fine."],["Inference","Is unification."],["Prolog","Adds backtracking."],["Anti-unify","Generalise."]])
]});
//@@ ch11-monads
CH({slug:"ch11-monads",n:"11",part:"Part 2",sub:"A design pattern for adding a capability to a type.",end:"Unit puts a value in. Bind chains the steps.",scenes:[
PT("A pattern for adding a capability",[["A generic type","Wraps a value.","blue"],["Unit","Puts a plain value in.","green"],["Bind","Applies a function that returns a wrapped value.","purple"]],["Nullable, sequence, task and lazy are all examples."]),
VS("Without and with","By hand",["Check for null after every step","The logic is buried"],"With bind",["Each step is written plainly","The checks happen once, in bind"],["The capability is handled in one place."],"→","amber","green"),
PL("Map, then bind, then join",[["Map","Apply a plain function inside."],["Join","Flatten a wrapper of a wrapper.","blue"],["Bind","Map, then join.","green"]],["Any one of these can be built from the others."],{tc:"blue"}),
VS("You already know one","Sequences",["Unit makes a one-element sequence","Bind is a nested loop, flattened"],"Queries",["Select many is bind","Where is bind with an empty result"],["The sequence operators are monad operations."],"and","blue","green"),
RC("11",[["Monad","A pattern."],["Unit","Wraps."],["Bind","Chains."],["Join","Flattens."],["Sequences","Are one."],["Filter","From bind and empty."]])
]});
//@@ ch12-randomness
CH({slug:"ch12-randomness",n:"12",part:"Part 3",sub:"Treating probability distributions as values.",end:"A distribution is a thing you can pass around.",scenes:[
VS("Two ways to read a probability","Frequency",["How often it happens in many trials"],"Belief",["How confident we are in one case"],["Both are useful readings of the same number."],"and","blue","purple"),
VS("Distributions as values","A random call",["One fair die, once","Nothing to combine"],"A distribution object",["Can be sampled","Can be transformed","Can be combined"],["Give randomness a type."],"→","amber","green"),
PT("Operations",[["Sample","Draw a value.","blue"],["Project","Map each outcome to another.","green"],["Condition","Keep only some outcomes.","purple"],["Combine","Build one distribution from several.","amber"]],["Paint the faces of a die, and you have projected its distribution."]),
PT("Sampling a weighted distribution",[["Scan","Walk the weights. Simple, slow.","blue"],["Search","Binary search on running totals.","green"],["Rejection","Throw a dart, retry on a miss.","purple"],["Alias table","Constant time, after setup.","amber"]],["Four ways, trading setup for speed."]),
RC("12",[["Probability","Two readings."],["Values","Not calls."],["Project","Map outcomes."],["Weights","Categorical."],["Alias table","Constant time."],["Compose","Distributions."]])
]});
//@@ ch13-bayes
CH({slug:"ch13-bayes",n:"13",part:"Part 3",sub:"Updating a belief when evidence arrives.",end:"A positive test for a rare condition is usually a false alarm.",scenes:[
PT("The pieces",[["Prior","What you believed before.","blue"],["Likelihood","How probable the evidence is, given each case.","green"],["Posterior","What you believe after.","purple"]],["Priors change with circumstances. Likelihoods hold steady."]),
PL("Bayes, by counting",[["Start","With a large population."],["Split","By who has the condition.","blue"],["Split again","By who tests positive.","purple"],["Count","The positives who have it.","green"]],["Posterior equals true positives over all positives."],{tc:"blue"}),
VS("Positive on an accurate test","Intuition",["The test is 99.5% accurate","So it is almost certain"],"Arithmetic",["The condition is very rare","False positives far outnumber true ones"],["When the prior is tiny, even a good test mostly raises false alarms."],"→","red","green"),
PT("Bayes in the programmer’s world",[["Spam filtering","Words as evidence.","blue"],["Bug triage","Which change caused it?","green"],["Diagnostics","Which fault explains the symptom?","purple"]],["Each is a prior plus a likelihood, turned into a posterior."]),
RC("13",[["Prior","Before."],["Likelihood","Evidence given the case."],["Posterior","After."],["Count","To see it."],["Rare","Means false alarms."],["Uses","Everywhere."]])
]});
//@@ ch14-probability-monad
CH({slug:"ch14-probability-monad",n:"14",part:"Part 3",sub:"Distributions follow the monad pattern too.",end:"Bind turns a prior and a likelihood into a joint distribution.",scenes:[
PT("Distributions are a monad",[["Unit","A distribution with one certain outcome.","blue"],["Bind","Draw from one, then from a distribution chosen by the result.","green"],["Join","Flatten a distribution of distributions.","purple"]],["The pattern from chapter 11, applied to chance."]),
PL("Bind in action",[["Prior","Do you have a cold?"],["Likelihood","Given that, do you sneeze?","blue"],["Bind","Combine them.","purple"],["Result","A distribution of sneezes.","green"]],["A likelihood is a function from an outcome to a distribution."],{tc:"blue"}),
VS("Join","A distribution of distributions",["Flip a coin","Then roll one die or two"],"Flattened",["One distribution over the totals"],["Join removes a layer."],"→","blue","green"),
VS("What it can and cannot do","Good",["Distributions as values","Exact answers for small discrete cases"],"Limits",["Continuous distributions","Large state spaces"],["The remaining chapters deal with the limits."],"and","green","amber"),
RC("14",[["Monad","Again."],["Unit","Certainty."],["Bind","Prior with likelihood."],["Join","Flatten."],["Additive","Mix two."],["Limits","Continuous cases."]])
]});
//@@ ch15-continuous
CH({slug:"ch15-continuous",n:"15",part:"Part 3",sub:"Drawing samples from continuous distributions.",end:"If you cannot sample it directly, sample something close and correct.",scenes:[
PT("A density",[["A curve","Over real numbers.","blue"],["Area","Is probability.","green"],["Sampling","Is throwing darts under the curve.","purple"]],["A continuous distribution produces real numbers."]),
PT("Ways to sample",[["Special-purpose","A formula for one distribution.","blue"],["Inverse transform","Run the cumulative curve backwards.","green"],["Rejection","Sample a helper, reject some.","purple"]],["Each needs different knowledge of the distribution."]),
PL("Rejection sampling",[["Pick a helper","That covers the target."],["Sample","From the helper.","blue"],["Accept","With probability target over helper.","amber"],["Repeat","On rejection.","green"]],["A good helper hugs the target, so few samples are wasted."],{tc:"blue"}),
VS("Clamping","Looks like",["Just limiting a value to a range"],"Is",["Rejection sampling with a scale of one"],["Familiar code, seen as a sampling method."],"→","blue","purple"),
RC("15",[["Density","Area is probability."],["Darts","Under the curve."],["Special","Samplers exist."],["Inverse","Of the cumulative curve."],["Rejection","With a helper."],["Helper","Should fit closely."]])
]});
//@@ ch16-markov-metropolis
CH({slug:"ch16-markov-metropolis",n:"16",part:"Part 3",sub:"Random walks, and sampling without a helper.",end:"Wander, and let the walk find the distribution.",scenes:[
PT("A Markov process",[["States","Where you can be.","blue"],["Transitions","Depend only on the current state.","green"],["No memory","Of how you got here.","purple"]],["A random sequence with no memory."]),
VS("A very small language model","State",["The current word"],"Transition",["A distribution over the next word, learned from text"],["Sample word after word, and text appears."],"and","blue","purple"),
PL("The Metropolis algorithm",[["Start","Anywhere."],["Propose","A nearby point.","blue"],["Compare","Its density with the current one.","purple"],["Accept","Always if higher, sometimes if lower.","amber"],["Repeat","The visits follow the target.","green"]],["No fitted helper is needed, only the ability to compare densities."],{tc:"blue"}),
VS("Sampling a continuous posterior","The problem",["The posterior is prior times likelihood","Its scale is unknown"],"Metropolis",["Needs only ratios","The unknown scale cancels"],["The book’s last piece falls into place."],"→","amber","green"),
RC("16",[["Markov","No memory."],["Chain","State to state."],["Language","A tiny model."],["Metropolis","Propose and accept."],["Ratios","Are enough."],["Posterior","Sampled at last."]])
]});
