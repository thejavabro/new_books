//@@ appendix-leftovers
CH({slug:"appendix-leftovers",n:"A",part:"Appendix",sub:"Ten more topics, briefly.",end:"Each of these is a door to a larger subject.",scenes:[
PT("More structures",[["Tries","Share prefixes, for autocomplete.","blue"],["LRU cache","A hash table plus a linked list.","green"],["Self-balancing trees","Stay short as they grow.","purple"]],["Structures built from the ones you know."]),
PT("More kinds of algorithm",[["String algorithms","Searching and matching text.","blue"],["Approximation","Good enough, quickly.","green"],["Randomised","Chance, used on purpose.","purple"],["Bit manipulation","Many facts in one integer.","amber"]],["Techniques for particular kinds of problem."]),
PT("At scale",[["Parallel","Many processors.","blue"],["Distributed","Many machines.","green"],["External memory","Data too big for RAM.","purple"]],["The book assumed one processor and data that fits in memory."]),
VS("Machine learning","Looks like",["Something new"],"Underneath",["Arrays, graphs, loops and optimisation"],["It is algorithms you already know."],"→","purple","green"),
RC("Leftovers",[["Tries","Prefixes."],["LRU","Two structures."],["Balanced trees","Short."],["Parallel","And distributed."],["Random","On purpose."],["Bits","Compact facts."]])
]});
//@@ ch01-comparing-algorithms
CH({slug:"ch01-comparing-algorithms",n:"1",part:"Foundations",sub:"Two ways to search, and how to compare them.",end:"Count steps, not seconds.",scenes:[
VS("Two searches in the warehouse","Linear search",["Check every box in turn","Up to n checks"],"Binary search",["Open the middle box","Discard half each time","About log n checks"],["Binary search needs the boxes in order."],"→","red","green"),
VS("An algorithm is a recipe, only stricter","Recipe",["“Season to taste”","A person fills the gaps"],"Algorithm",["Every step exact","Always finishes","Gives the right answer"],["Correct first. Then efficient."],"→","amber","green"),
VS("Count steps, not seconds","A stopwatch",["Depends on the machine","Depends on the language"],"Counting steps",["How does the work grow with the input?"],["Timing misleads. Growth does not."],"→","red","green"),
BR("How many times can you halve it?",[["100",7,"7 steps","green"],["1,000",10,"10","green"],["1,000,000",20,"20","blue"]],["The worst case for binary search is log base 2 of n, rounded up."],{max:22,lw:220}),
RC("1",[["Recipe","With no gaps."],["Correct","Before fast."],["Steps","Not seconds."],["Linear","Check each."],["Binary","Halve each time."],["Sorted","Is the price."]])
]});
//@@ ch02-big-o
CH({slug:"ch02-big-o",n:"2",part:"Foundations",sub:"A vocabulary for how work grows.",end:"Keep the biggest term. Drop the rest.",scenes:[
PT("The common growth rates",[["O(1)","Ignores n.","blue"],["O(log n)","Halving.","green"],["O(n)","One pass.","purple"],["O(n²)","A loop in a loop.","amber"],["O(2ⁿ)","Doubles with each extra item.","red"],["O(n!)","Every possible order.","blue"]],["From painless to hopeless."]),
VS("O(1) is not one step","Misreading",["Exactly one operation"],"Meaning",["The same amount of work, whatever n is"],["Constant means it does not grow."],"→","amber","green"),
VS("Drop the constants, keep the biggest term","Counted",["3n² + 20n + 100"],"Big O",["O(n²)"],["As n grows, the largest term swamps everything else."],"→","blue","green"),
VS("Polynomial and exponential","Polynomial",["n, n², n³","Slow, but usable"],"Exponential and factorial",["2ⁿ, n!","Useless beyond small inputs"],["A faster computer barely helps an exponential algorithm."],"VS","amber","red"),
RC("2",[["Big O","Describes growth."],["Constant","Does not grow."],["Nested loops","Quadratic."],["Simplify","Biggest term only."],["Exponential","Explodes."],["Factorial","Worse."]])
]});
//@@ ch03-arrays-linked-lists
CH({slug:"ch03-arrays-linked-lists",n:"3",part:"Foundations",sub:"How the shape of data decides what is cheap.",end:"Pick the structure by your most frequent operation.",scenes:[
VS("Arrays and linked lists","Array",["A block of seats in a row","Jump to any seat","Inserting shifts everyone"],"Linked list",["A chain of nodes","Walk to find","Inserting changes a pointer"],["Contiguity buys fast access, and costs flexible insertion."],"VS","blue","purple"),
VS("Dynamic arrays","When full",["Allocate a bigger block","Copy everything across"],"Amortised",["Most appends are cheap","The occasional copy averages out"],["Doubling the size keeps appends at constant time on average."],"→","amber","green"),
VD("Worst-case costs",[["Array: read by index",true,"Direct.","O(1)","green"],["Array: insert at the front",false,"Shift all.","O(n)","red"],["List: read the k-th item",false,"Walk there.","O(n)","red"],["List: insert at the front",true,"One pointer.","O(1)","green"]],["A doubly linked list adds a pointer back, and makes removal at the tail cheap."],{sw:150}),
VS("The O(n) tax","Sorted array",["Fast lookups by binary search"],"But",["Every insertion shifts the rest"],["Fast search and fast insert, together, need a different structure."],"→","green","red"),
RC("3",[["Shape","Decides cost."],["Array","Fast access."],["Dynamic","Grows by doubling."],["List","Fast insertion."],["Doubly linked","Both directions."],["Choose","By use."]])
]});
//@@ ch04-recursion
CH({slug:"ch04-recursion",n:"4",part:"Foundations",sub:"Functions defined in terms of themselves.",end:"A base case, and a step towards it.",scenes:[
PT("A definition that uses itself, safely",[["Base case","The answer is known.","blue"],["Recursive case","A smaller version of the same problem.","green"],["Progress","Each call moves towards the base.","purple"]],["Factorial: n times the factorial of n minus one."]),
PL("How recursion runs",[["Call","Push a frame."],["Call again","Push another.","blue"],["Base case","Return a value.","purple"],["Unwind","Each frame finishes in turn.","green"]],["Every function call gets a frame on the call stack."],{tc:"blue"}),
VS("Fibonacci and the exploding call tree","Naive",["Each call makes two more","The same values computed again and again"],"Memoised",["Keep a notebook of answers","Each value computed once"],["From exponential time to linear."],"→","red","green"),
VS("When the stack runs out","Deep recursion",["One frame per call","A limit is reached"],"A loop",["No frames"],["If the depth can be large, iterate instead."],"→","amber","green"),
RC("4",[["Recursion","Self-reference."],["Base case","Stops it."],["Stack","One frame per call."],["Fibonacci","Repeats work."],["Memoise","Remember answers."],["Depth","Has a limit."]])
]});
//@@ ch05-sorting
CH({slug:"ch05-sorting",n:"5",part:"Algorithms",sub:"Four sorts, and the speed limit on all of them.",end:"Comparison sorts cannot beat n log n.",scenes:[
VD("Four sorts side by side",[["Bubble sort",false,"Swap neighbours until nothing moves.","O(n²)","red"],["Insertion sort",false,"Like sorting cards in your hand.","O(n²)","amber"],["Merge sort",true,"Split in half, merge in order.","O(n log n)","green"],["Quicksort",true,"Let a pivot do the dividing.","O(n log n)","green"]],["Quicksort’s worst case is quadratic, but it is rare with good pivots."],{sw:260}),
PL("Merge sort",[["Split","In half."],["Sort","Each half, recursively.","blue"],["Merge","Two sorted halves.","green"]],["Divide and conquer. The merge does the work."],{tc:"blue"}),
VS("Stability","Stable",["Items with equal keys keep their order"],"Unstable",["They may be reordered"],["It matters when you sort by one field, then another."],"VS","green","amber"),
VS("What your language uses","Textbook",["One pure algorithm"],"In practice",["Hybrids","Insertion sort for small runs, merging for the rest"],["Built-in sorts are engineered. Use them."],"→","blue","green"),
RC("5",[["Bubble","Simple and slow."],["Insertion","Good on nearly sorted data."],["Merge","Reliable n log n."],["Quick","Fast on average."],["Limit","n log n for comparisons."],["Stable","Keeps ties in order."]])
]});
//@@ ch06-hash-tables-stacks-queues
CH({slug:"ch06-hash-tables-stacks-queues",n:"6",part:"Data structures",sub:"Finding anything fast, and two disciplined containers.",end:"A hash turns a key into a place.",scenes:[
PL("A hash table",[["Key","Anything hashable."],["Hash function","Produces a number.","blue"],["Bucket","The number picks a slot.","purple"],["Value","Lives there.","green"]],["Lookups, insertions and deletions in constant time on average."],{tc:"blue"}),
PT("What makes a hash function good",[["Consistent","Same key, same hash.","blue"],["Fast","To compute.","green"],["Spread out","Keys land evenly.","purple"]],["Collisions are inevitable. Plan for them with chaining, or by probing."]),
VS("Stacks and queues","Stack",["Last in, first out","A pile of plates"],"Queue",["First in, first out","A line at a taxi stand"],["Two rules for what comes out next."],"VS","purple","blue"),
VS("A browser history from two stacks","Back stack",["Pages you came from"],"Forward stack",["Pages you went back from"],["Visiting pushes. Back and forward move pages between the two."],"and","blue","green"),
RC("6",[["Hash table","Key to place."],["Collisions","Expected."],["Good hash","Even spread."],["Stack","Last in, first out."],["Queue","First in, first out."],["Choose","By the job."]])
]});
//@@ ch07-graphs
CH({slug:"ch07-graphs",n:"7",part:"Data structures",sub:"Modelling relationships, and two ways to explore them.",end:"Breadth-first ripples. Depth-first dives.",scenes:[
PT("It is all about relationships",[["Vertices","The things.","blue"],["Edges","The links.","green"],["Directed","One way.","purple"],["Weighted","With a cost.","amber"],["Cycle","A path back to the start.","red"]],["Arrays answer “what is at this position”. Graphs answer “what is connected”."]),
VS("Two ways to store a graph","Adjacency list",["Each vertex keeps its neighbours","Compact for sparse graphs"],"Adjacency matrix",["A grid of yes and no","Instant edge checks, more memory"],["Most real graphs are sparse."],"or","blue","purple"),
VS("Two traversals","Breadth-first",["Level by level","Uses a queue","Finds the fewest-hops route"],"Depth-first",["One trail to its end","Uses a stack, or recursion"],["Both visit every vertex and edge once."],"VS","blue","purple"),
VS("The cost","Depends on",["Vertices, V","Edges, E"],"Big O",["O(V + E)"],["Traversal touches each vertex once and each edge once."],"→","blue","green"),
RC("7",[["Graph","Vertices and edges."],["Store","List or matrix."],["BFS","Ripples out."],["Shortest","In hops."],["DFS","Dives deep."],["Cost","V plus E."]])
]});
//@@ ch08-greedy
CH({slug:"ch08-greedy",n:"8",part:"Algorithms",sub:"Taking the best-looking step each time.",end:"Greedy is fast. It is not always right.",scenes:[
VS("What it means to be greedy","Greedy",["Take the best option available now","Never reconsider"],"Sometimes optimal",["Making change with standard coins"],["Simple and fast, when the problem allows it."],"→","amber","green"),
PL("Dijkstra’s algorithm",[["Start","Distance zero at the source."],["Take","The closest unvisited vertex.","blue"],["Relax","Update its neighbours.","purple"],["Repeat","Until all are settled.","green"]],["Breadth-first search, with cheapest first in place of nearest first."],{tc:"blue"}),
PT("Inside the priority queue",[["A min-heap","The smallest item on top.","blue"],["Insert","Bubble up.","green"],["Remove","Bubble down.","purple"],["Both","O(log n).","amber"]],["What makes “take the cheapest next” fast."]),
VS("Grab the loot","Greedy",["Most valuable item first","Leaves value behind"],"Best",["A different combination fills the bag better"],["The knapsack shows where greed fails."],"VS","amber","green"),
RC("8",[["Greedy","Best step now."],["Change","Sometimes optimal."],["Dijkstra","Cheapest first."],["Heap","Powers the queue."],["Selection sort","Is greedy."],["Knapsack","Greedy falls short."]])
]});
//@@ ch09-dynamic-programming
CH({slug:"ch09-dynamic-programming",n:"9",part:"Algorithms",sub:"Solving each subproblem once.",end:"Store the answers, and reuse them.",scenes:[
VS("When greedy fails","Greedy",["Largest token first","Not always the fewest tokens"],"Dynamic programming",["Considers every option","Without repeating work"],["Odd denominations break the greedy approach."],"→","red","green"),
PL("Coin change, one cell at a time",[["A table","One cell per amount."],["For each amount","Try each coin.","blue"],["Take","One plus the best for the remainder.","purple"],["Keep","The smallest.","green"]],["Each cell uses answers already in the table."],{tc:"blue"}),
VD("Is it a dynamic programming problem?",[["Overlapping subproblems",true,"The same smaller problems recur.","NEEDED","blue"],["Optimal substructure",true,"The best answer is built from best sub-answers.","NEEDED","blue"],["Only one of the two",false,"Use something else.","NO","red"]],["Check both properties."],{sw:190}),
VS("Greedy, brute force or dynamic programming","Greedy",["Fast, sometimes wrong"],"Brute force",["Right, and far too slow"],["Dynamic programming is right, and usually fast enough."],"VS","amber","red"),
RC("9",[["Greedy","Can fail."],["Subproblems","Overlap."],["Table","Stores answers."],["Coin change","Cell by cell."],["Knapsack","A two-dimensional table."],["Two properties","Both required."]])
]});
//@@ ch10-limits
CH({slug:"ch10-limits",n:"10",part:"Algorithms",sub:"Problems that are slow, and problems that cannot be solved at all.",end:"Some walls cannot be climbed, only recognised.",scenes:[
VS("Hard to find, easy to check","Finding",["The best route among every possible order"],"Checking",["Given a route, add up its length"],["Many hard problems share this shape."],"VS","red","green"),
PT("P, NP and NP-complete",[["P","Solvable in polynomial time.","blue"],["NP","Checkable in polynomial time.","green"],["NP-complete","The hardest problems in NP.","purple"],["Open question","Whether P equals NP.","amber"]],["Solve one NP-complete problem quickly, and you solve them all."]),
VS("Beyond slow","NP-complete",["Solvable, but impractically slow"],"Undecidable",["No program can solve it for every input"],["The halting problem is the classic example."],"→","amber","red"),
PL("Why a perfect halt-checker cannot exist",[["Suppose","One exists."],["Build","A program that does the opposite of the prediction.","blue"],["Run it","On itself.","purple"],["Contradiction","Either answer is wrong.","red"]],["Turing’s argument is a proof by contradiction."],{tc:"blue"}),
RC("10",[["Routes","Explode."],["Check","Is easy."],["P and NP","Two classes."],["NP-complete","The hardest."],["Undecidable","Unsolvable."],["Recognise","The wall."]])
]});
