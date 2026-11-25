//@@ appendix-avl-and-np-hard
CH({slug:"appendix-avl-and-np-hard",n:"A",part:"Appendices",sub:"How tall an AVL tree can get, and what NP-hard means.",end:"Hard to solve, quick to verify.",scenes:[
VS("How tall can an AVL tree get?","Perfectly balanced",["Height log n"],"Worst AVL tree",["Only a little taller","Still logarithmic"],["The balance rule guarantees a short tree."],"→","green","blue"),
VS("Hard to solve, quick to verify","Solving",["Try enormous numbers of combinations"],"Verifying",["Given an answer, check it quickly"],["Many hard problems have this shape."],"VS","red","green"),
PT("The vocabulary",[["Decision problem","A yes or no question.","blue"],["NP","A proposed answer can be checked quickly.","green"],["NP-hard","At least as hard as everything in NP.","purple"],["NP-complete","Both in NP and NP-hard.","amber"]],["Satisfiability was the first problem shown to be NP-complete."]),
PL("Reductions",[["A new problem","Looks hard."],["Translate","A known hard problem into it.","blue"],["So","It is at least as hard.","purple"],["Then","Stop looking for a fast exact answer.","green"]],["Recognising hardness tells you to approximate."],{tc:"blue"}),
RC("Appendix",[["AVL","Always short."],["Decision","Yes or no."],["Verify","Quickly."],["NP-hard","As hard as any."],["Reduce","To prove hardness."],["Approximate","When it is hard."]])
]});
//@@ ch01-introduction-to-algorithms
CH({slug:"ch01-introduction-to-algorithms",n:"1",part:"Foundations",sub:"Binary search, and how to talk about speed.",end:"Halve the problem at every step.",scenes:[
VS("The guessing game","Simple search",["Guess 1, 2, 3 and so on","Up to 100 guesses for 100 numbers"],"Binary search",["Guess the middle","Throw away half each time","At most 7 guesses"],["It only works on a sorted list."],"→","red","green"),
BR("Guesses needed, worst case",[["100 items",7,"7 guesses","green"],["1,000 items",10,"10","green"],["1 million",20,"20","blue"],["1 billion",30,"30","purple"]],["A logarithm asks: how many times can you halve it?","Multiply the list by a thousand, and it takes only ten more guesses."],{max:32,lw:240}),
{type:'curve',title:'Big O: how run time grows',xl:'size of the input →',yl:'operations →',series:[{l:'Quadratic',c:'red',pts:line(40,x=>.04+.86*x*x)},{l:'Linear',c:'blue',pts:line(40,x=>.04+.42*x)},{l:'Logarithmic',c:'green',pts:line(40,x=>.04+.035*Math.log2(1+15*x))}],marks:[],cap:['Big O does not measure seconds. It describes how the work grows.','The gap between the curves widens as the input grows. (Illustrative shape.)']},
PT("Five run times you will meet again",[["O(log n)","Binary search.","blue"],["O(n)","Simple search.","green"],["O(n log n)","A fast sort.","purple"],["O(n²)","A slow sort.","amber"],["O(n!)","The travelling salesperson.","red"]],["Fastest to slowest."]),
RC("1",[["Algorithm","A set of instructions."],["Binary search","Halve each time."],["Sorted","Is required."],["Logarithm","Count the halvings."],["Big O","Growth, not seconds."],["Factorial","Hopeless at scale."]])
]});
//@@ ch02-selection-sort
CH({slug:"ch02-selection-sort",n:"2",part:"Foundations",sub:"Arrays, linked lists and a first sorting algorithm.",end:"Arrays are fast to read. Lists are fast to insert.",scenes:[
VS("Arrays and linked lists","Array",["Items side by side in memory","Read any item instantly","Inserting means shifting"],"Linked list",["Items anywhere, each pointing to the next","Read by walking from the start","Inserting is one pointer change"],["Think of memory as a wall of numbered drawers."],"VS","blue","purple"),
VD("Run times",[["Reading from an array",true,"Jump straight to it.","O(1)","green"],["Reading from a list",false,"Walk to it.","O(n)","red"],["Inserting into an array",false,"Shift everything after.","O(n)","red"],["Inserting into a list",true,"Change a pointer.","O(1)","green"]],["Which is used more? Arrays, because most programs read more than they insert."],{sw:150}),
PL("Selection sort",[["Find","The smallest item."],["Move it","To a new list.","blue"],["Repeat","On what remains.","purple"],["Done","When nothing is left.","green"]],["Each pass looks at every remaining item."],{tc:"blue"}),
VS("Why it is O(n²)","Each pass",["Checks up to n items"],"Number of passes",["n"],["About n times n over two checks, and Big O drops the constant."],"and","blue","amber"),
RC("2",[["Memory","Numbered drawers."],["Arrays","Fast reads."],["Lists","Fast inserts."],["Access","Random or sequential."],["Selection sort","Pick the smallest, repeat."],["Speed","Quadratic."]])
]});
//@@ ch03-recursion
CH({slug:"ch03-recursion",n:"3",part:"Foundations",sub:"Functions that call themselves, and the stack that makes it work.",end:"Every recursive function needs a way to stop.",scenes:[
VS("A key in a box of boxes","Loop",["Keep a pile of boxes to check","While the pile is not empty, look"],"Recursion",["Look in a box","For each box inside, do the same"],["The same result. Recursion is often the clearer way to say it."],"or","blue","purple"),
PT("Two parts of a recursive function",[["Base case","When to stop.","blue"],["Recursive case","When to call itself again.","green"]],["Without a base case, it never ends."]),
PL("The call stack",[["Call","Push a frame."],["Call again","Push another.","blue"],["Return","Pop the top.","purple"],["Back","To where you were.","green"]],["A stack is a pile of sticky notes: add to the top, take from the top."],{tc:"blue"}),
VS("The cost of a tall stack","Recursion",["Each call saves a frame","Deep recursion uses a lot of memory"],"Loop",["No extra frames"],["If the stack grows too tall, switch to a loop."],"VS","amber","green"),
RC("3",[["Recursion","A function calls itself."],["Base case","Stops it."],["Recursive case","Continues it."],["Stack","Push and pop."],["Frames","Hold each call."],["Deep","Costs memory."]])
]});
//@@ ch04-quicksort
CH({slug:"ch04-quicksort",n:"4",part:"Foundations",sub:"Divide and conquer, and a sort that uses it.",end:"Find the simplest case, then shrink the problem towards it.",scenes:[
PL("Divide and conquer",[["Base case","The simplest version."],["Divide","Until you reach it.","blue"],["Solve","Each small piece.","purple"],["Combine","The results.","green"]],["A recursive technique for solving problems."],{tc:"blue"}),
PL("Quicksort",[["Pick a pivot","Any element."],["Partition","Smaller left, larger right.","blue"],["Recurse","On each side.","purple"],["Join","Left, pivot, right.","green"]],["Empty and one-element arrays are already sorted. That is the base case."],{tc:"blue"}),
VS("Average case and worst case","Good pivots",["The array splits roughly in half","O(n log n)"],"Bad pivots",["One side is always empty","O(n²)"],["Choosing a random pivot makes the good case the usual one."],"VS","green","red"),
VS("When the constant matters","Usually",["Constants are ignored"],"Sometimes",["Two algorithms share a Big O","The smaller constant wins"],["Quicksort beats merge sort in practice for this reason."],"and","blue","amber"),
RC("4",[["D and C","Shrink to a base case."],["Pivot","Choose one."],["Partition","Around it."],["Average","n log n."],["Worst","Quadratic."],["Random pivot","Avoids the worst."]])
]});
//@@ ch05-hash-tables
CH({slug:"ch05-hash-tables",n:"5",part:"Foundations",sub:"Instant lookups, and how they are possible.",end:"A hash function turns a key into a slot.",scenes:[
VS("A cashier who knows every price","Looking it up",["Search a list for each item"],"Knowing it",["Name goes in, price comes out, instantly"],["A hash table gives you that cashier."],"→","amber","green"),
PL("How a hash table works",[["Key","A string, say."],["Hash function","Turns it into a number.","blue"],["Slot","That number is an array index.","purple"],["Value","Stored there.","green"]],["The same key always gives the same slot."],{tc:"blue"}),
PT("Three everyday uses",[["Lookups","Map one thing to another.","blue"],["Preventing duplicates","Have I seen this before?","green"],["Caching","Remember an answer.","purple"]],["Phone books, voter lists and web caches."]),
VS("Collisions and load factor","Collision",["Two keys, one slot","Keep a list there"],"Load factor",["Items divided by slots","Resize when it passes about 0.7"],["A good hash function and a low load factor keep operations at O(1) on average."],"and","amber","blue"),
RC("5",[["Hash table","Instant lookup."],["Hash function","Key to slot."],["Uses","Lookup, duplicates, cache."],["Collisions","Are inevitable."],["Load factor","Keep it low."],["Average","O(1)."]])
]});
//@@ ch06-breadth-first-search
CH({slug:"ch06-breadth-first-search",n:"6",part:"Graphs and trees",sub:"Graphs, and finding the shortest path by number of steps.",end:"Search your friends before your friends’ friends.",scenes:[
PT("What is a graph?",[["Nodes","The things.","blue"],["Edges","The connections.","green"],["Neighbours","Nodes joined by an edge.","purple"],["Directed","Edges with a direction.","amber"]],["A graph models who is connected to whom."]),
PL("Breadth-first search",[["Start","With your direct connections."],["Check each","Is this the one?","blue"],["If not","Add their connections to the queue.","purple"],["Repeat","Until found, or the queue is empty.","green"]],["First-degree connections are searched before second-degree ones."],{tc:"blue"}),
VS("Queues and stacks","Queue",["First in, first out","Searches in order of distance"],"Stack",["Last in, first out","Dives deep first"],["Breadth-first search needs a queue."],"VS","blue","purple"),
VS("Two questions it answers","Is there a path?",["From A to B"],"What is the shortest?",["In number of edges"],["Mark nodes you have checked, or you may loop for ever."],"and","green","blue"),
RC("6",[["Graph","Nodes and edges."],["BFS","Level by level."],["Queue","First in, first out."],["Shortest","Fewest edges."],["Visited","Keep a record."],["Topological sort","Orders dependencies."]])
]});
//@@ ch07-trees
CH({slug:"ch07-trees",n:"7",part:"Graphs and trees",sub:"Trees, two ways to walk them, and a compression scheme.",end:"A tree is a graph with no cycles.",scenes:[
PT("Your first tree",[["Root","The top node.","blue"],["Children","Nodes below.","green"],["Leaves","Nodes with no children.","purple"],["Connected and acyclic","The formal definition.","amber"]],["A folder on your disk is a tree."]),
VS("Two ways to walk it","Breadth-first",["Level by level","Uses a queue"],"Depth-first",["All the way down one branch first","Uses recursion, or a stack"],["Both visit every node. Only breadth-first finds the shortest path."],"VS","blue","purple"),
PL("Huffman coding",[["Count","How often each character appears."],["Build a tree","Rare characters deeper.","blue"],["Read codes","Left is 0, right is 1.","purple"],["Encode","Common characters get short codes.","green"]],["No code is the start of another, so the bits decode without separators."],{tc:"blue"}),
VS("Why it saves space","Fixed width",["Every character, 8 bits"],"Variable width",["Frequent characters, a few bits","Rare ones, more"],["Compression is a classic use of binary trees."],"→","amber","green"),
RC("7",[["Tree","Connected, no cycles."],["Files","A tree you know."],["BFS","By level."],["DFS","By branch."],["Huffman","Frequent means short."],["Prefix-free","Decodes cleanly."]])
]});
//@@ ch08-balanced-trees
CH({slug:"ch08-balanced-trees",n:"8",part:"Graphs and trees",sub:"Trees that stay short, so they stay fast.",end:"Shorter trees are faster.",scenes:[
VD("Fast search and fast insert",[["Sorted array",false,"Fast search, slow insert.","HALF","amber"],["Linked list",false,"Fast insert, slow search.","HALF","amber"],["Balanced search tree",true,"Both in O(log n).","BOTH","green"]],["A binary search tree keeps smaller keys on the left and larger on the right."],{sw:160}),
VS("Height decides speed","Balanced",["Height about log n","Fast"],"Unbalanced",["Height up to n","As slow as a list"],["Insert sorted data into a plain tree, and it degenerates."],"VS","green","red"),
PT("Three self-balancing trees",[["AVL tree","Rotates to stay strictly balanced.","blue"],["Splay tree","Moves recently used items to the top.","green"],["B-tree","Many keys per node, for disks.","purple"]],["Each keeps the height small in its own way."]),
VS("B-trees: fewer trips","Binary tree",["One key per node","Many disk reads"],"B-tree",["Many keys per node","A few reads reach anything"],["Databases use them because reading a disk block is the slow part."],"→","amber","green"),
RC("8",[["Goal","Fast search and insert."],["BST","Left smaller, right larger."],["Height","Is the cost."],["AVL","Rotations."],["Splay","Recent on top."],["B-tree","Wide nodes."]])
]});
//@@ ch09-dijkstras-algorithm
CH({slug:"ch09-dijkstras-algorithm",n:"9",part:"Graphs and trees",sub:"The cheapest path when edges have weights.",end:"Always extend the cheapest node you have not finished.",scenes:[
VS("Fewest segments or fastest route","Breadth-first search",["Fewest edges"],"Dijkstra’s algorithm",["Smallest total weight"],["When edges have costs, counting edges is not enough."],"VS","blue","green"),
PL("Dijkstra’s algorithm",[["Find","The cheapest unprocessed node."],["Update","The costs of its neighbours.","blue"],["Record","Each neighbour’s new parent.","purple"],["Mark","The node as done.","amber"],["Repeat","Until all are done.","green"]],["Then follow the parents back from the finish."],{tc:"blue"}),
VD("Where it works",[["Positive weights",true,"Works.","OK","green"],["A graph with cycles",true,"Works. A cycle only adds weight.","OK","green"],["Negative weights",false,"A finished node might later be reached more cheaply.","BREAKS","red"]],["For negative weights, use Bellman-Ford."],{sw:170}),
PT("Three hash tables",[["Graph","Each node’s neighbours and weights.","blue"],["Costs","Cheapest known cost to each node.","green"],["Parents","Where that cheapest path came from.","purple"]],["The whole implementation."]),
RC("9",[["Weights","On edges."],["Cheapest","Node first."],["Update","Neighbours."],["Parents","Trace the path."],["Negative","Weights break it."],["Tables","Graph, costs, parents."]])
]});
//@@ ch10-greedy-algorithms
CH({slug:"ch10-greedy-algorithms",n:"10",part:"Hard problems",sub:"Taking the best step now, and when that is enough.",end:"Greedy is simple, fast, and often good enough.",scenes:[
PL("The classroom scheduling problem",[["Pick","The class that ends soonest."],["Then","The next that starts after it.","blue"],["Repeat","To the end of the day.","green"]],["At each step, take the locally best choice. Here, that gives the best answer overall."],{tc:"blue"}),
VS("When greedy is not perfect","Greedy thief",["Takes the most valuable item that fits","May waste space"],"Best answer",["A different combination is worth more"],["Greedy does not always find the optimum. It usually gets close."],"VS","amber","green"),
PL("Set covering",[["Pick","The station that covers the most uncovered states."],["Remove","Those states.","blue"],["Repeat","Until all are covered.","green"]],["The exact solution checks every subset, which takes exponential time."],{tc:"blue"}),
VS("Approximation algorithms","Exact",["The best answer","May take longer than the universe"],"Approximate",["A good answer","Fast"],["Judge them by how fast they are and how close they get."],"or","red","green"),
RC("10",[["Greedy","Best step now."],["Scheduling","It is optimal."],["Knapsack","It is not."],["Set cover","Approximate."],["Trade","Speed for exactness."],["Hard problems","Call for it."]])
]});
//@@ ch11-dynamic-programming
CH({slug:"ch11-dynamic-programming",n:"11",part:"Hard problems",sub:"Solving a hard problem by filling in a grid of smaller ones.",end:"Every cell is a subproblem.",scenes:[
PL("Fill in the grid",[["Rows","The items."],["Columns","Capacities, from small to full.","blue"],["Each cell","The best value for that sub-knapsack.","purple"],["Rule","Previous best, or this item plus the best of what is left.","amber"],["Answer","The last cell.","green"]],["Solve subproblems, and build up to the whole."],{tc:"blue"}),
VD("Knapsack questions",[["Does the order of rows matter?",false,"No.","NO","blue"],["Can I take a fraction of an item?",false,"Not with this method. Use greedy.","NO","blue"],["Can items depend on each other?",false,"Subproblems must be independent.","NO","blue"],["Is the best answer always the last cell?",true,"For the knapsack, yes.","YES","green"]],["When it works, and when it does not."],{sw:150}),
PT("Longest common substring",[["A grid","One word across, one down.","blue"],["Match","The cell is the diagonal neighbour plus one.","green"],["No match","Zero.","purple"],["Answer","The largest cell.","amber"]],["A user typed “hish”. Did they mean “fish” or “vista”?"]),
VS("When to reach for it","It fits",["You are optimising under a constraint","The problem splits into discrete subproblems"],"It does not",["Subproblems depend on each other"],["There is no single formula. You design the grid."],"VS","green","amber"),
RC("11",[["Grid","Of subproblems."],["Cell","A smaller answer."],["Rule","Reuse earlier cells."],["Independent","Subproblems."],["Strings","Use grids too."],["Design","The grid yourself."]])
]});
//@@ ch12-k-nearest-neighbors
CH({slug:"ch12-k-nearest-neighbors",n:"12",part:"Hard problems",sub:"Classifying by looking at similar examples.",end:"You are like your neighbours.",scenes:[
PL("Orange or grapefruit?",[["Plot","Known fruit by size and colour."],["Place","The mystery fruit.","blue"],["Find","Its k nearest neighbours.","purple"],["Vote","The majority wins.","green"]],["Classification puts something into a group."],{tc:"blue"}),
PT("Features and distance",[["Features","Turn each item into numbers.","blue"],["Distance","How far apart two items are.","green"],["Normalise","So scales are comparable.","purple"],["Cosine similarity","Compares direction, not size.","amber"]],["Two people can have the same taste, yet one rates everything higher."]),
VS("Classification and regression","Classification",["Which group?","Take a vote"],"Regression",["What number?","Take the average"],["The same neighbours answer both."],"and","blue","purple"),
VD("Picking good features",[["Correlates with what you are predicting",true,"Keep it.","GOOD","green"],["Unbiased across the items",true,"Keep it.","GOOD","green"],["Irrelevant to the question",false,"It only adds noise.","DROP","red"]],["k-nearest neighbours is only as good as its features."],{sw:160}),
RC("12",[["KNN","Ask the neighbours."],["Features","Numbers per item."],["Distance","Defines near."],["Classify","By vote."],["Regress","By average."],["Features","Decide quality."]])
]});
//@@ ch13-where-to-go-next
CH({slug:"ch13-where-to-go-next",n:"13",part:"Hard problems",sub:"A quick tour of ideas worth learning next.",end:"Ten doors, each opening on a field.",scenes:[
PT("Searching and indexing",[["Inverted index","From word to the pages containing it.","blue"],["Bloom filter","Probably seen, or definitely not.","green"],["HyperLogLog","Counts distinct items, approximately.","purple"],["Locality-sensitive hashing","Similar items get similar hashes.","amber"]],["Trading a little accuracy for a lot of space."]),
PT("Scale",[["Parallel algorithms","Split work across cores.","blue"],["Amdahl’s law","The serial part limits the speed-up.","green"],["Map and reduce","Spread work across machines.","purple"]],["Computers stopped getting much faster. They got more numerous."]),
PT("Signals and security",[["Fourier transform","Break a signal into frequencies.","blue"],["Diffie-Hellman","Agree a secret in public.","green"],["Secure hashes","Small changes scramble the output.","purple"]],["Compression, audio and encrypted connections rest on these."]),
PT("Optimisation",[["Linear regression","Fit a line to data.","blue"],["Min heap","The smallest item, always on top.","green"],["Linear programming","Maximise under constraints.","purple"]],["Saved for last."]),
RC("13",[["Indexes","How search starts."],["Probabilistic","Bloom and HyperLogLog."],["Parallel","And its limit."],["Fourier","Frequencies."],["Key exchange","In the open."],["Linear programming","Optimise."]])
]});
