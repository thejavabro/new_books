//@@ ch01-locales-numbers-math
CH({slug:"ch01-locales-numbers-math",n:"1",part:"Modern Java, problem by problem",sub:"Small numeric traps, and the tools that avoid them.",end:"Integer overflow wraps silently.",scenes:[
VS("Overflow","Ordinary arithmetic",["Wraps round","No error","A wrong answer"],"The Exact methods",["addExact, multiplyExact, toIntExact","Throw on overflow"],["Use the Exact family when a wrong number is worse than an exception."],"→","red","green"),
PT("Which way does division round?",[["The / operator","Truncates towards zero.","blue"],["floorDiv","Rounds down.","green"],["ceilDiv","Rounds up.","purple"],["floorMod","Result takes the sign of the divisor.","amber"]],["They differ only for negative numbers, which is where bugs hide."]),
PT("More small tools",[["Locale","A language tag, with region and variants.","blue"],["Unsigned helpers","Same bits, read differently.","green"],["Math.fma","Multiply and add with one rounding.","purple"],["clamp","Keep a value in a range.","amber"]],["The JDK keeps adding small, precise utilities."]),
VS("Random numbers","Before JDK 17",["Several unrelated classes"],"From JDK 17",["One RandomGenerator interface","Algorithms chosen by name"],["Code to the interface, and swap the algorithm."],"→","amber","green"),
RC("Numbers",[["Locale","A tag."],["Overflow","Wraps."],["Exact","Methods throw."],["Division","Four ways to round."],["Unsigned","Helpers."],["Random","One interface."]])
]});
//@@ ch01-text-blocks-strings
CH({slug:"ch01-text-blocks-strings",n:"1",part:"Modern Java, problem by problem",sub:"Multiline strings done properly.",end:"A text block is a string literal that keeps its shape.",scenes:[
VS("Multiline strings","Before",["Concatenation and \\n","Escaped quotes everywhere"],"Text block",["Three quotes open and close it","Written as it should appear"],["Text blocks have been standard since JDK 15."],"→","red","green"),
VS("Incidental and essential white space","Incidental",["Indentation that lines the block up with your code","Removed by the compiler"],"Essential",["Indentation that is part of the text","Kept"],["The closing delimiter’s position decides where the margin is."],"and","muted","blue"),
PT("Things to know",[["Escapes","A backslash at line end joins lines.","blue"],["Quotes","Need no escaping inside.","green"],["formatted()","Fills in placeholders.","purple"],["Type","Still a plain String.","amber"]],["A text block is not a new type."]),
VD("String building",[["Plus in a single expression",true,"The compiler handles it well.","FINE","green"],["Plus inside a loop",false,"Creates a string each time round.","AVOID","red"],["StringBuilder in a loop",true,"One buffer.","USE","green"],["String templates",false,"Previewed in JDK 21, and later withdrawn.","WAIT","amber"]],["Check the status of preview features before relying on them."],{sw:150}),
RC("Text blocks",[["Text block","Three quotes."],["Margin","Set by the delimiter."],["Incidental","Stripped."],["Escapes","A few new ones."],["Loops","Use StringBuilder."],["Templates","Were a preview."]])
]});
//@@ ch02-objects-patterns
CH({slug:"ch02-objects-patterns",n:"2",part:"Modern Java, problem by problem",sub:"Small object utilities, and pattern matching for switch.",end:"Test the type and bind the variable in one step.",scenes:[
VS("Type patterns for instanceof","Before",["Test with instanceof","Then cast","Then use"],"Now",["Test and bind a variable in one expression"],["The variable is in scope only where the test is known to have passed."],"→","red","green"),
VS("Switch expressions","Statement",["Falls through","Needs break"],"Expression",["Arrows, no fall-through","Returns a value","Must cover every case"],["yield returns a value from a block."],"→","amber","green"),
PT("Pattern labels",[["Type patterns","case Circle c.","blue"],["Guards","case Circle c when it is large.","green"],["case null","Handled explicitly.","purple"],["Dominance","A general case may not come before a specific one.","amber"]],["The compiler checks order and completeness."]),
PT("Worth knowing",[["Helpful null messages","Name the variable that was null.","blue"],["Holder idiom","A lazy, thread-safe singleton.","green"],["Immutable stack","Each push shares the old one.","purple"],["Objects utilities","Small checks, done properly.","amber"]],["Short problems, each a tool."]),
RC("2",[["instanceof","With binding."],["Switch","As an expression."],["yield","From a block."],["Guards","With when."],["Complete","Checked by the compiler."],["Nulls","Explained."]])
]});
//@@ ch03-date-time
CH({slug:"ch03-date-time",n:"3",part:"Modern Java, problem by problem",sub:"Choosing and using the java.time types.",end:"Pick the right type first.",scenes:[
VD("Pick the right type",[["LocalDate",true,"A date, no time, no zone.","DATE","blue"],["LocalDateTime",true,"Date and time, no zone.","LOCAL","blue"],["ZonedDateTime",true,"With a zone and its rules.","ZONED","purple"],["Instant",true,"A point on the timeline.","MOMENT","green"],["Duration and Period",true,"Time-based and date-based amounts.","AMOUNT","amber"]],["Most date bugs come from choosing the wrong one."],{sw:190}),
VS("Duration and Period","Duration",["Seconds and nanoseconds","Exact"],"Period",["Years, months, days","Calendar-aware"],["A day is not always 24 hours. A month is not a fixed length."],"VS","blue","purple"),
PT("Counting between two dates",[["ChronoUnit","between() counts whole units.","blue"],["Period.between","Years, months and days.","green"],["until","With a unit.","purple"],["Mind the zone","Around clock changes.","amber"]],["Decide which question you are asking."]),
VS("Two kinds of now","Wall clock",["What time is it?","Can jump"],"Monotonic clock",["How long did that take?","Only moves forward"],["Use nanoTime for measuring. Inject a Clock for testing."],"VS","amber","green"),
RC("3",[["Type","Chosen first."],["Zone","Only when needed."],["Duration","Exact."],["Period","By calendar."],["Between","Counts units."],["Clock","Inject it."]])
]});
//@@ ch04-records
CH({slug:"ch04-records",n:"4",part:"Modern Java, problem by problem",sub:"Data carriers in one line.",end:"One line in place of fifty.",scenes:[
VS("Records","A class",["Fields, constructor, accessors","equals, hashCode, toString"],"A record",["One line","All of that generated","Immutable"],["A record is a transparent carrier for data."],"→","red","green"),
VS("Canonical and compact constructors","Canonical",["All components as parameters","You assign the fields"],"Compact",["No parameter list","Validate or normalise","Assignment is automatic"],["Use the compact form for checks."],"or","blue","green"),
VD("What a record may contain",[["Methods, static fields, nested types",true,"Allowed.","YES","green"],["Implementing interfaces",true,"Allowed.","YES","green"],["Extra instance fields",false,"The state is the header.","NO","red"],["Extending a class",false,"Records are final.","NO","red"]],["Records give up flexibility for clarity."],{sw:150}),
VS("Record patterns","Before",["Test the type","Call each accessor"],"With a pattern",["Test and take it apart at once","Patterns nest"],["Deserialisation also goes through the canonical constructor, so validation always runs."],"→","amber","green"),
RC("4",[["Record","Data in one line."],["Compact","Constructor for checks."],["Immutable","Shallowly."],["Final","Cannot extend."],["Patterns","Deconstruct."],["Frameworks","Good for DTOs."]])
]});
//@@ ch05-arrays-vector-collections
CH({slug:"ch05-arrays-vector-collections",n:"5",part:"Modern Java, problem by problem",sub:"Data-parallel arithmetic, and collection details.",end:"One instruction, many numbers.",scenes:[
VS("The Vector API","A loop",["One pair of numbers per step"],"Vectors",["Several lanes per instruction","The CPU’s SIMD registers"],["It is still an incubating API, so expect change."],"→","amber","green"),
PL("Chunking an array",[["Species","Pick the vector shape."],["Loop","In whole vectors, up to loopBound.","blue"],["Operate","Lane-wise.","purple"],["Tail","Finish the leftovers one by one.","green"]],["The array rarely divides evenly."],{tc:"blue"}),
VD("Not the same thing",[["List.of",true,"Truly immutable. No nulls.","IMMUTABLE","green"],["Arrays.asList",false,"Fixed size, backed by the array. Set works.","VIEW","amber"],["unmodifiableList",false,"A read-only view. The original can still change.","VIEW","amber"]],["Three ways to get a list that will not grow."],{sw:250}),
PT("Collections details",[["HashMap sizing","Capacity is not the number of entries. Use newHashMap.","blue"],["Sequenced collections","First, last and reversed, from JDK 21.","green"],["Arrays helpers","Compare, mismatch, fill.","purple"]],["Small things that prevent large surprises."]),
RC("Arrays",[["Vector API","SIMD from Java."],["Lanes","Several per step."],["Tail","Handle it."],["Immutable","Or just a view."],["HashMap","Size by entries."],["Sequenced","First and last."]])
]});
//@@ ch05-data-structures
CH({slug:"ch05-data-structures",n:"5",part:"Modern Java, problem by problem",sub:"Structures the JDK does not ship.",end:"Know them well enough to recognise when you need one.",scenes:[
PT("Structures for text and order",[["Rope","A string as a tree of pieces.","blue"],["Skip list","Express lanes over a linked list.","green"],["Splay tree","What you touch moves to the top.","purple"],["Trie","Shared prefixes.","amber"]],["Each beats the standard collections for one kind of job."]),
PT("Structures for space and codes",[["K-D tree","Split space, then search a little of it.","blue"],["Huffman coding","Short codes for common symbols.","green"],["Bloom filter","Probably present, or definitely absent.","purple"],["Interval tree","Which ranges overlap this one?","amber"]],["Geometry, compression and membership."]),
VS("Skip list","Sorted linked list",["Search walks every node"],"Skip list",["Extra levels skip ahead","Logarithmic search on average"],["Levels are chosen at random, with no rebalancing."],"→","amber","green"),
PT("Three ways to join two tables",[["Nested loop","Every row against every row.","blue"],["Hash join","Build a table on one side, probe with the other.","green"],["Sort-merge join","Sort both, then walk together.","purple"]],["The algorithms behind a database join."]),
RC("Structures",[["Rope","Big strings."],["Skip list","Fast, simple."],["K-D tree","Space."],["Huffman","Compression."],["Splay","Recent on top."],["Joins","Three algorithms."]])
]});
//@@ ch06-deserialization-filters
CH({slug:"ch06-deserialization-filters",n:"6",part:"Modern Java, problem by problem",sub:"Making deserialisation safe.",end:"Never deserialise untrusted data unfiltered.",scenes:[
VS("Why it is dangerous","Looks like",["Reading data"],"Is",["Constructing objects chosen by the sender","Running their code paths"],["The bytes decide which classes are created."],"→","amber","red"),
PT("Filters",[["Pattern-based","A short string of allowed and rejected classes.","blue"],["As code","A class, a method or a lambda.","green"],["Limits","On depth, references and array size.","purple"],["Verdicts","Allowed, rejected or undecided.","amber"]],["A filter sees each class before it is created."]),
VS("Two small payloads","Deep nesting",["Exhausts the stack"],"Huge collections",["Exhaust memory or time"],["Filters guard against resource attacks, as well as dangerous classes."],"and","red","amber"),
PT("From JDK 17",[["Allow and reject helpers","Build filters from predicates.","blue"],["Merge","Combine filters.","green"],["A filter factory","Applies to every stream in the JVM.","purple"],["Flight Recorder","Records deserialisation events.","amber"]],["Set a JVM-wide default, and observe."]),
RC("6",[["Risk","Sender chooses classes."],["Filter","Before creation."],["Patterns","Or code."],["Limits","Depth and size."],["Factory","JVM-wide."],["Observe","With events."]])
]});
//@@ ch07-foreign-memory
CH({slug:"ch07-foreign-memory",n:"7",part:"Modern Java, problem by problem",sub:"Calling native code and using off-heap memory.",end:"From JNI glue to plain Java.",scenes:[
VS("Calling C from Java","JNI",["Header files","C glue code","Easy to crash the JVM"],"The new API",["Described in Java","No glue code","Safer by design"],["Finalised after the book’s JDK 21 preview."],"→","red","green"),
PT("The types to learn",[["MemorySegment","A region of memory.","blue"],["Arena","Controls its lifetime.","green"],["MemoryLayout","Describes its structure.","purple"],["ValueLayout","A primitive’s size and order.","amber"],["Linker","Finds and calls native functions.","red"],["MethodHandle","The call itself.","blue"]],["A small API."]),
VS("Arenas decide when memory dies","Garbage collector",["Does not manage native memory"],"Arena",["Confined, shared, automatic or global","Closing it frees everything allocated from it"],["Lifetime is explicit and safe."],"→","amber","green"),
PL("A downcall",[["Look up","The C function’s symbol."],["Describe","Its signature.","blue"],["Link","To get a method handle.","purple"],["Invoke","With Java values.","green"]],["An upcall goes the other way: C calls back into Java."],{tc:"blue"}),
RC("7",[["JNI","Replaced."],["Segment","A region."],["Arena","Its lifetime."],["Layout","Its shape."],["Linker","Calls C."],["Upcall","C calls Java."]])
]});
//@@ ch08-sealed-hidden
CH({slug:"ch08-sealed-hidden",n:"8",part:"Modern Java, problem by problem",sub:"Controlling who may extend a type.",end:"The compiler can check every case.",scenes:[
VS("Sealed types","Open",["Anyone may extend","You cannot know every subtype"],"Sealed",["Only the subclasses you list","The full set is known"],["A middle setting between open and final."],"→","amber","green"),
PT("The rules of permits",[["Each permitted subclass","Must be final, sealed or non-sealed.","blue"],["Same module","Or same package.","green"],["Directly extends","The sealed type.","purple"],["Records and enums","Fit naturally.","amber"]],["The hierarchy is closed and known."]),
VS("Sealed, records and switch","Open hierarchy",["A default branch","New subtypes slip through"],"Sealed hierarchy",["No default needed","A new subtype breaks the build until handled"],["Algebraic data types, in Java."],"→","red","green"),
VS("Hidden classes","Ordinary class",["Discoverable by name","Lives as long as its loader"],"Hidden class",["Cannot be found by name","Can be unloaded on its own"],["For frameworks that generate code at run time."],"VS","blue","purple"),
RC("8",[["Sealed","A closed hierarchy."],["Permits","Lists subclasses."],["Exhaustive","Switch."],["Visitor","Often unnecessary."],["Reflection","isSealed."],["Hidden","For generated code."]])
]});
//@@ ch09-functional
CH({slug:"ch09-functional",n:"9",part:"Modern Java, problem by problem",sub:"Getting more from streams and functional interfaces.",end:"Compose small functions.",scenes:[
VS("mapMulti and flatMap","flatMap",["Return a stream per element"],"mapMulti",["Push zero or more elements to a consumer","No intermediate streams"],["Useful when most elements map to few or none."],"or","blue","green"),
VS("Method reference and lambda","Lambda",["The receiver is evaluated each call"],"Bound method reference",["The receiver is evaluated once, when created"],["Usually the same. Not when the receiver can change or be null."],"VS","amber","blue"),
PT("Building blocks",[["Supplier","Defer an expensive argument.","blue"],["Predicate","Combine with and, or, negate.","green"],["Comparator","Chain with thenComparing.","purple"],["Function","Compose and andThen.","amber"]],["Functional interfaces compose."]),
PT("Collector.of",[["Supplier","Make the container.","blue"],["Accumulator","Add an element.","green"],["Combiner","Merge two containers.","purple"],["Finisher","Produce the result.","amber"]],["Four functions make a collector."]),
RC("9",[["mapMulti","Push elements."],["References","Bound once."],["Supplier","Lazy."],["Predicates","Composed."],["Comparators","Chained."],["Collectors","Four functions."]])
]});
//@@ ch10-virtual-threads
CH({slug:"ch10-virtual-threads",n:"10",part:"Modern Java, problem by problem",sub:"Cheap threads, and tasks with a parent.",end:"Write blocking code. Let the runtime make it scale.",scenes:[
VS("Concurrency and parallelism","Concurrency",["Many tasks in progress","Mostly waiting"],"Parallelism",["One job split across cores","Mostly computing"],["Virtual threads are for the first."],"VS","blue","purple"),
VS("Why thread-per-request ran out of road","Platform threads",["Each is an OS thread","Costly, and limited in number"],"Virtual threads",["Managed by the JVM","Cheap enough for one per task"],["A million is practical."],"→","red","green"),
PL("Mount, run, park, unmount",[["Mount","On a carrier thread."],["Run","Until it blocks.","blue"],["Unmount","The carrier is freed.","purple"],["Resume","On any carrier, when ready.","green"]],["Blocking a virtual thread does not block an OS thread."],{tc:"blue"}),
VS("Structured concurrency","Plain executors",["Subtasks outlive the caller","Leaks on failure"],"A task scope",["Subtasks have a parent","Cancelled together","Finished before the scope exits"],["Still a preview API. Check its status."],"→","red","green"),
RC("10",[["Concurrency","Not parallelism."],["Virtual","Cheap threads."],["Carrier","Shared."],["Park","Without blocking the OS."],["Scopes","Give structure."],["Observe","With thread dumps."]])
]});
//@@ ch11-virtual-threads-deep-dive
CH({slug:"ch11-virtual-threads-deep-dive",n:"11",part:"Modern Java, problem by problem",sub:"What lies under virtual threads, and how to use them well.",end:"Limit concurrency with a semaphore, not a pool.",scenes:[
PT("Continuations",[["A continuation","A computation that can pause and resume.","blue"],["Yield","Saves the stack.","green"],["Run","Restores it.","purple"],["A virtual thread","Is a continuation plus a scheduler.","amber"]],["The engine underneath."]),
VS("ThreadLocal and ScopedValue","ThreadLocal",["Mutable","Lives as long as the thread","Costly with millions of threads"],"ScopedValue",["Immutable","Bound for a block of code","Inherited by child tasks"],["Share context without leaking it."],"→","amber","green"),
VS("Semaphore, not a pool","Pooling virtual threads",["Defeats the point","They are meant to be disposable"],"A semaphore",["One new thread per task","Permits limit access to the scarce resource"],["Limit the resource, not the threads."],"→","red","green"),
VS("Pinning","In JDK 21",["Blocking inside synchronized held the carrier"],"Mitigation",["Use ReentrantLock around blocking calls","Later JDK releases reduced the problem"],["A pinned virtual thread cannot let go of its carrier."],"→","red","amber"),
RC("11",[["Continuations","Underneath."],["States","More than platform threads."],["Scopes","Composable."],["Scoped values","Over thread locals."],["Semaphore","To limit."],["Pinning","Watch for it."]])
]});
//@@ ch12-garbage-collectors
CH({slug:"ch12-garbage-collectors",n:"12",part:"Modern Java, problem by problem",sub:"How collectors work, and how to pick one.",end:"Every collector trades throughput, latency and footprint.",scenes:[
PT("What a collector does",[["Find","Objects still reachable.","blue"],["Reclaim","The rest.","green"],["Compact","To avoid fragmentation.","purple"],["Pause","As little as it can.","amber"]],["Most objects die young, so the heap is split into generations."]),
VD("Choosing a collector",[["Serial",true,"Small heaps, one core.","SIMPLE","muted"],["Parallel",true,"Maximum throughput. Longer pauses.","THROUGHPUT","blue"],["G1",true,"Balanced. The default.","DEFAULT","green"],["ZGC",true,"Very short pauses on large heaps.","LOW PAUSE","purple"]],["Pick by what the application can tolerate."],{sw:290}),
VS("G1 and ZGC","G1",["Heap split into regions","Collects the emptiest first","Pause targets"],"ZGC",["Works concurrently with the application","Coloured pointers and load barriers"],["Both avoid stopping the world for long."],"VS","green","purple"),
PT("Tuning and startup",[["Measure first","Logs and Flight Recorder.","blue"],["Heap size","The first setting to consider.","green"],["Pause goal","For G1.","purple"],["Class data sharing","Archives loaded classes for a faster start.","amber"]],["Tune only what the measurements point to."]),
RC("12",[["Collector","Finds and reclaims."],["Generations","Most die young."],["Trade-off","Three ways."],["G1","Regions."],["ZGC","Concurrent."],["CDS","Faster startup."]])
]});
//@@ ch13-sockets-sws
CH({slug:"ch13-sockets-sws",n:"13",part:"Modern Java, problem by problem",sub:"Networking primitives, and a tiny web server.",end:"A socket is one end of a conversation.",scenes:[
VS("TCP and UDP","TCP",["A phone call","A connection","Ordered, reliable"],"UDP",["A postcard","No connection","May be lost or reordered"],["Choose by whether you need every byte, in order."],"VS","blue","amber"),
VS("Blocking and non-blocking servers","Blocking",["One thread per connection","Simple"],"Non-blocking",["A selector watches many channels","One thread serves many"],["Virtual threads make the simple style scale too."],"or","green","purple"),
PT("More in the chapter",[["Multicast","One send, many receivers.","blue"],["Unix domain sockets","Between processes on one machine.","green"],["Key encapsulation","Agree a secret key, from JDK 21.","purple"]],["Beyond the basic client and server."]),
VS("The Simple Web Server","What it is",["A minimal static file server in the JDK","One command to start"],"What it is not",["For production","For dynamic content"],["Handy for testing and demos."],"and","green","amber"),
RC("13",[["Socket","An endpoint."],["TCP","Reliable stream."],["UDP","Datagrams."],["Selector","Many channels."],["KEM","Share a key."],["jwebserver","For quick tests."]])
]});
