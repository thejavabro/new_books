//@@ appendix-setup-monitoring
CH({slug:"appendix-setup-monitoring",n:"A",part:"Appendix",sub:"A three-broker lab and a monitoring stack on one laptop.",end:"Build the lab once, and every chapter has somewhere to run.",scenes:[
PT("A three-broker lab",[["Three brokers","On one machine.","blue"],["Nearly identical files","Only ID, directory and ports differ.","green"],["KRaft mode","No ZooKeeper.","purple"]],["The environment used throughout the book."]),
PL("Format, start, check, stop",[["Format","The storage, with a cluster ID."],["Start","Each broker.","blue"],["Check","Create a topic, describe it.","purple"],["Stop","Cleanly.","green"]],["Formatting is needed only the first time."],{tc:"blue"}),
PL("Prometheus and Grafana",[["Exporters","Expose metrics."],["Prometheus","Scrapes and stores them.","blue"],["Alert rules","Evaluated on a schedule.","amber"],["Grafana","Dashboards.","green"]],["Prometheus is for quick queries. Grafana is for dashboards."],{tc:"blue"}),
PL("Inactive, pending, firing",[["Inactive","The condition is false."],["Pending","True, but not for long enough.","amber"],["Firing","True for the full duration.","red"]],["A waiting period stops a brief spike from paging anyone."],{tc:"blue"}),
RC("Appendix",[["Lab","Three brokers."],["Config","Three small files."],["Format","Once."],["Prometheus","Scrape and store."],["Alerts","Three states."],["Grafana","Dashboards."]])
]});
//@@ ch01-getting-started
CH({slug:"ch01-getting-started",n:"1–2",part:"Part I · Getting started",sub:"What Kafka is for, and the first produce and consume loop.",end:"Write once to a log, and let many readers follow it.",scenes:[
VS("The problem Kafka solves","Point to point",["Every system wired to every other","Nightly batches","Data arrives late"],"Through Kafka",["Each system writes once","Any system can read","Data flows as it happens"],["Customers now expect things to happen in real time."],"→","amber","green"),
{type:'flow',title:'A transfer through Kafka',cols:4,rows:2,nodes:[{id:'p',t:'Transfer app',c:'blue',col:0,row:0},{id:'t',t:'Topic',c:'purple',col:1,row:0,big:true},{id:'a',t:'Fraud check',c:'amber',col:2,row:0},{id:'b',t:'Ledger',c:'green',col:2,row:1},{id:'c',t:'Notifications',c:'green',col:3,row:0}],edges:[['p','t'],['t','a'],['t','b'],['a','c']],cap:['The producer writes one message per transfer.','Each consumer reads at its own pace, without the producer knowing.']},
PT("The parts of a setup",[["Producer","Writes messages.","blue"],["Topic","A named stream of messages.","green"],["Partition","An ordered slice of a topic.","purple"],["Broker","A server that stores partitions.","amber"],["Consumer","Reads messages.","red"],["Consumer group","Shares the reading.","blue"]],["A Kafka installation is a handful of moving parts."]),
PL("The first loop",[["Create a topic","With the command-line tools."],["Produce","Type a few messages.","blue"],["Consume","Read them back.","green"],["Consume again","From the beginning.","purple"]],["Messages stay in the topic after they are read."],{tc:"blue"}),
RC("Chapters 1–2",[["Why","Real-time data flow."],["Topic","Where messages live."],["Producer","Writes."],["Consumer","Reads, at its own pace."],["Broker","Stores and serves."],["Kept","Reading does not delete."]])
]});
//@@ ch03-topics-messages
CH({slug:"ch03-topics-messages",n:"3",part:"Part II · Concepts",sub:"What a message contains, and how to choose keys and formats.",end:"Design the message as carefully as an API.",scenes:[
PT("Four kinds of message",[["State","The current value of something.","blue"],["Delta","What changed.","green"],["Event","Something that happened.","purple"],["Command","A request to do something.","amber"]],["Kafka does not care what a message means. You should."]),
PT("What is inside a record",[["Key","Decides the partition. Optional.","blue"],["Value","The payload.","green"],["Headers","Metadata for routing and tracing.","purple"],["Timestamp","When it was created or stored.","amber"]],["Keys and values are just bytes to Kafka."]),
VS("Choosing a format","Text: JSON",["Readable by people","Larger, no enforced schema"],"Binary: Avro, Protobuf",["Compact","A schema, with rules for change"],["The format is a contract between teams."],"VS","amber","green"),
VS("Keys keep related messages in order","No key",["Messages spread across partitions","No order between them"],"With a key",["The same key goes to the same partition","Order is kept per key"],["Kafka guarantees order only inside one partition."],"→","amber","green"),
RC("3",[["Topic","Describe it for others."],["Kinds","State, delta, event, command."],["Bytes","In and out."],["Record","Key, value, headers, time."],["Keys","Give ordering."],["Format","Is a contract."]])
]});
//@@ ch04-distributed-log
CH({slug:"ch04-distributed-log",n:"4",part:"Part II · Concepts",sub:"Logs, partitions, consumer groups and replication.",end:"An append-only log, split and copied.",scenes:[
PT("A log",[["Append at the end","Never change the middle.","blue"],["Read from an offset","Each reader keeps its place.","green"],["Replay","Rebuild any past state.","purple"]],["The log keeps history, not just the current value."]),
VS("Partitions split the log","One log",["One server","A ceiling on throughput"],"Many partitions",["Spread across brokers","The key picks the partition","Order per partition only"],["Partitions are how a topic scales out."],"→","amber","green"),
VS("Consumer groups share the work","One consumer",["Reads every partition","Limited by one machine"],"A group",["Partitions divided among members","A member fails, others take over"],["Consumers pull. A slow consumer is never flooded."],"→","blue","green"),
PT("Replication",[["One leader","Handles reads and writes.","blue"],["Several followers","Copy the leader.","green"],["In-sync replicas","Followers that have kept up.","purple"],["Failover","A follower becomes leader.","amber"]],["Each partition has copies on different brokers."]),
RC("4",[["Log","Append and read."],["Replay","History is kept."],["Partitions","Scale out."],["Groups","Share partitions."],["Replicas","Leader and followers."],["Platform","More than brokers."]])
]});
//@@ ch05-reliability
CH({slug:"ch05-reliability",n:"5",part:"Part II · Concepts",sub:"Durability, availability and consistency, and the settings behind them.",end:"Decide what you can afford to lose, then configure for it.",scenes:[
PT("Three goals",[["Durability","Stored data is not lost.","blue"],["Availability","The system keeps answering.","green"],["Consistency","Readers see the same thing.","purple"]],["You cannot maximise all three at once."]),
VD("Acknowledgments",[["acks=0",false,"Do not wait. Fast, and may lose data.","RISKY","red"],["acks=1",false,"Wait for the leader only.","PARTIAL","amber"],["acks=all",true,"Wait for the in-sync replicas.","SAFE","green"]],["With acks=all, the minimum number of in-sync replicas decides when a write is refused."],{sw:200}),
PT("Delivery guarantees",[["At most once","May lose, never repeats.","blue"],["At least once","Never loses, may repeat.","green"],["Exactly once","Idempotent producer plus transactions.","purple"]],["If the acknowledgment is lost, the producer cannot tell whether to resend."]),
VS("Idempotence and transactions","Idempotence",["Protects one partition","Retries do not create duplicates"],"Transactions",["Span several partitions","All written, or none","Include the consumer’s offsets"],["Read, process and write as one unit."],"and","blue","green"),
RC("5",[["Goals","Durability, availability, consistency."],["acks","How much to wait for."],["Min ISR","When to refuse writes."],["Guarantees","Three levels."],["Idempotent","Safe retries."],["Transactions","All or none."]])
]});
//@@ ch06-performance
CH({slug:"ch06-performance",n:"6",part:"Part II · Concepts",sub:"Partitions, batching, compression and fetch tuning.",end:"Most tuning trades latency for throughput.",scenes:[
PT("What “fast” means",[["Bandwidth","Bytes per second.","blue"],["Latency","Time for one message.","green"],["Resources","What it costs to run.","purple"]],["Improve one and you usually pay with another."]),
VS("How many partitions?","Too few",["Consumers cannot scale out"],"Too many",["More files and memory","Slower failover"],["Partitions can be added later, but keys then land elsewhere."],"VS","amber","red"),
VS("Producer batching","Small batches",["Sent at once","Low latency, more requests"],"Larger batches",["Wait a few milliseconds","Fewer requests, better compression"],["Batch size and linger time set the trade."],"→","blue","green"),
PT("Brokers and consumers",[["Sequential writes","Disks are fast at appending.","blue"],["Page cache","The operating system does the caching.","green"],["Compression","Done once, by the producer.","purple"],["Fetch tuning","Minimum bytes against maximum wait.","amber"]],["A broker mostly moves bytes between sockets and disk."]),
RC("6",[["Fast","Three meanings."],["Partitions","Enough, not too many."],["Batching","Latency for throughput."],["Compression","Once, everywhere."],["Page cache","Let the OS work."],["Fetch","Bytes against wait."]])
]});
//@@ ch07-cluster-management
CH({slug:"ch07-cluster-management",n:"7",part:"Part III · Kafka deep dive",sub:"Who is in charge of a cluster, and how clients find their way.",end:"Metadata is a log too.",scenes:[
PT("What the controller does",[["Tracks brokers","Who is alive.","blue"],["Elects leaders","For every partition.","green"],["Stores metadata","Topics, configuration, ACLs.","purple"]],["With more than one broker, somebody has to be in charge."]),
VS("From ZooKeeper to KRaft","ZooKeeper",["A separate system to run","Metadata outside Kafka","Slow recovery with many partitions"],"KRaft",["A Raft quorum of controllers","Metadata in a Kafka log","One system to operate"],["ZooKeeper mode is removed in Kafka 4.0."],"→","amber","green"),
PL("How a client finds a broker",[["Bootstrap","Connect to any listed broker."],["Metadata","Ask who leads what.","blue"],["Connect","Directly to each leader.","purple"],["Refresh","When leadership changes.","green"]],["A database has one address. Kafka has many, and the client learns them."],{tc:"blue"}),
PL("Migrating to KRaft",[["Add controllers","Alongside ZooKeeper."],["Dual-write","Metadata to both.","blue"],["Move brokers","One at a time.","amber"],["Finalise","Remove ZooKeeper.","green"]],["A staged path, with a way back until the last step."],{tc:"blue"}),
RC("7",[["Controller","Runs the cluster."],["KRaft","Raft plus a metadata log."],["ZooKeeper","Gone in 4.0."],["Migration","Staged."],["Bootstrap","Any broker will do."],["Metadata","Tells clients where to go."]])
]});
//@@ ch08-producing-persisting
CH({slug:"ch08-producing-persisting",n:"8",part:"Part III · Kafka deep dive",sub:"From produce() to bytes on disk.",end:"A message passes through a buffer, a network thread and a segment file.",scenes:[
PL("What happens after produce()",[["Serialise","Key and value to bytes."],["Partition","Choose one.","blue"],["Batch","In the buffer.","purple"],["Send","By a background thread.","amber"],["Acknowledge","Or retry.","green"]],["The call returns before the message is on the wire."],{tc:"blue"}),
PL("Inside the broker",[["Network threads","Read the request."],["Request queue","Wait for a worker.","blue"],["I/O threads","Append to the log.","purple"],["Purgatory","Wait for replicas.","amber"],["Response","Back to the client.","green"]],["With acks=all, the request waits until followers have caught up."],{tc:"blue"}),
PT("Segments and the index",[["Segment files","A partition is a series of them.","blue"],["Active segment","The one being written.","green"],["Sparse index","Offset to file position.","purple"],["Time index","Timestamp to offset.","amber"]],["Old segments are closed, and can be deleted or compacted."]),
VS("LEO and the high watermark","Log end offset",["The last message a replica has"],"High watermark",["The last message every in-sync replica has","Consumers read only up to here"],["A leader epoch stops a stale leader from rewriting history."],"and","blue","green"),
RC("8",[["Producer","Buffer, then send."],["Timeouts","One overall deadline."],["Broker","Queues and threads."],["Segments","Files per partition."],["Index","Sparse."],["Watermark","What consumers may see."]])
]});
//@@ ch09-consuming
CH({slug:"ch09-consuming",n:"9",part:"Part III · Kafka deep dive",sub:"Fetching, offsets and rebalancing.",end:"The consumer keeps its own place.",scenes:[
VS("Where do offsets live?","Traditional broker",["Tracks what each consumer has seen","Deletes on acknowledgment"],"Kafka",["The consumer commits its position","Stored in an internal topic","Can be reset to replay"],["Position is the consumer’s responsibility."],"→","amber","green"),
PL("The rebalance protocol",[["Join","Members contact the coordinator."],["Assign","Partitions are divided.","blue"],["Sync","Each member learns its share.","purple"],["Heartbeat","To stay in the group.","green"]],["Every join and every leave can trigger a rebalance."],{tc:"blue"}),
VS("Assignment strategies","Eager",["Everyone gives up everything","Then all are reassigned","A pause for the whole group"],"Cooperative",["Only the partitions that move are revoked","The rest keep reading"],["Cooperative rebalancing shortens the stop."],"→","amber","green"),
PT("Fewer, cheaper rebalances",[["Static membership","A restart keeps its partitions.","blue"],["Sensible timeouts","Do not expel slow members.","green"],["Closest replica","Fetch from the same rack or zone.","purple"]],["Rebalances are the main source of consumer pauses."]),
RC("9",[["Fetch","Consumers pull."],["Start","Earliest or latest."],["Offsets","Committed by the consumer."],["Rebalance","Reassigns partitions."],["Cooperative","Less disruption."],["Static","Fewer rebalances."]])
]});
//@@ ch10-cleaning-up
CH({slug:"ch10-cleaning-up",n:"10",part:"Part III · Kafka deep dive",sub:"Retention and compaction.",end:"Delete by age or size, or keep the latest value per key.",scenes:[
VS("Two cleanup policies","Delete",["Remove old segments","By age or by size","For events"],"Compact",["Keep the newest message per key","For state","Needs keys"],["A topic can use either, or both."],"or","blue","purple"),
PT("Retention works on whole segments",[["Closed segments only","The active one stays.","blue"],["By time","Older than the limit.","green"],["By size","Partition above the limit.","purple"],["So","Data can live longer than you set.","amber"]],["Kafka deletes files, not individual messages."]),
PL("Compaction",[["Read the log","Oldest to newest."],["Remember","The last offset for each key.","blue"],["Copy","Only those messages.","purple"],["Swap","The new segments in.","green"]],["A message with a null value is a tombstone: it deletes the key."],{tc:"blue"}),
VD("When to compact a topic",[["A table of current customer addresses",true,"Only the latest per key matters.","COMPACT","purple"],["A stream of page views",false,"Every event matters.","DELETE","blue"],["A changelog for a state store",true,"Rebuild state from the latest values.","COMPACT","purple"]],["Ask whether a reader needs the history or the current state."],{sw:220}),
RC("10",[["Why","Disks are finite."],["Delete","By age or size."],["Segments","The unit of deletion."],["Compact","Latest per key."],["Tombstone","Deletes a key."],["Choose","History or state."]])
]});
//@@ ch11-kafka-connect
CH({slug:"ch11-kafka-connect",n:"11",part:"Part IV · Kafka in the real world",sub:"Moving data in and out of Kafka without writing code.",end:"Integration as configuration.",scenes:[
VS("Source and sink","Source connector",["Reads an external system","Writes to Kafka"],"Sink connector",["Reads from Kafka","Writes to an external system"],["Most data in Kafka comes from, or goes to, somewhere else."],"and","blue","green"),
ST("Workers, connectors and tasks",[["Tasks","Do the copying, in parallel.","green",0.5],["Connectors","Configuration: what to copy.","blue",0.75],["Workers","Processes that run it all.","purple",1.0]],["In distributed mode, workers share the load and take over from each other."]),
PL("Along the pipeline",[["Connector","Reads a record."],["Transformations","Small per-record changes.","blue"],["Converter","To or from bytes.","purple"],["Kafka","The topic.","green"]],["Single message transformations are for small changes, not business logic."],{tc:"blue"}),
VS("Polling versus the change log","Polling a table",["Repeated queries","Misses deletes and in-between updates"],"Change data capture",["Reads the database’s own log","Every change, in order"],["Failed records can go to a dead letter topic."],"→","amber","green"),
RC("11",[["Connect","Configuration, not code."],["Source, sink","In and out."],["Workers","Run connectors."],["Tasks","Do the work."],["REST","How it is driven."],["CDC","Reads the change log."]])
]});
//@@ ch12-stream-processing
CH({slug:"ch12-stream-processing",n:"12",part:"Part IV · Kafka in the real world",sub:"Processing events one at a time, with state.",end:"Streams and tables are two views of one thing.",scenes:[
VS("From batches to events","Nightly batch",["All of yesterday at once","Answers tomorrow"],"Stream processing",["One event at a time","Answers in seconds"],["The same logic, applied continuously."],"→","amber","green"),
VS("Streams and tables","Stream",["Every change, in order"],"Table",["The latest value per key"],["Fold a stream to get a table. Record a table’s changes to get a stream."],"and","blue","purple"),
PT("Kinds of window",[["Tumbling","Fixed, no overlap.","blue"],["Hopping","Fixed, overlapping.","green"],["Sliding","Defined by the events.","purple"],["Session","Closed by a gap in activity.","amber"]],["First decide which time you mean: when it happened, or when it arrived."]),
PT("Scaling Kafka Streams",[["Task","One per input partition.","blue"],["Thread","Runs several tasks.","green"],["Instance","Runs several threads.","purple"],["State","Backed by a changelog topic.","amber"]],["Partitions set the limit on parallelism."]),
RC("12",[["Events","One at a time."],["Topology","Processors in a graph."],["SQL","The same ideas."],["Duality","Stream and table."],["Windows","Group by time."],["Scale","Tasks follow partitions."]])
]});
//@@ ch13-governance
CH({slug:"ch13-governance",n:"13",part:"Part IV · Kafka in the real world",sub:"Schemas, security and quotas for a shared cluster.",end:"A shared cluster needs rules.",scenes:[
VS("Every piece of data has a schema","Implicit",["In the heads of producers","Consumers guess, and break"],"Explicit",["Stored in a schema registry","Checked for compatibility"],["Even schemaless data has a schema: the one consumers assume."],"→","red","green"),
ST("Layers of protection",[["Quotas","No client can starve the rest.","muted",0.4],["Authorization","Who may read or write what.","purple",0.55],["Authentication","Who is connecting.","blue",0.7],["Encryption in transit","TLS.","green",0.85],["Network","Who can reach the brokers.","amber",1.0]],["Kafka has no native encryption at rest. Use the disk or the client."]),
PT("An ACL reads as a sentence",[["Principal","Who.","blue"],["Allowed or denied","Which way.","green"],["Operation","Read, write, create.","purple"],["Resource","A topic or a group.","amber"]],["Grant each application only what it needs."]),
PL("Securing a running cluster",[["Add a secure listener","Beside the open one."],["Move clients","One by one.","blue"],["Add ACLs","Check nothing breaks.","amber"],["Close the open listener","Last.","green"]],["A proof of concept that slid into production can be fixed without downtime."],{tc:"blue"}),
RC("13",[["Governance","For shared clusters."],["Schemas","Always exist."],["Registry","Checks compatibility."],["Security","In layers."],["ACLs","Least privilege."],["Quotas","Fairness."]])
]});
//@@ ch14-reference-architecture
CH({slug:"ch14-reference-architecture",n:"14",part:"Part IV · Kafka in the real world",sub:"What it takes to run Kafka well.",end:"Brokers are the smallest part of the job.",scenes:[
PT("Kafka is more than brokers",[["Schema registry","Contracts for data.","blue"],["Kafka Connect","Integration.","green"],["Stream processing","Logic on the data.","purple"],["Monitoring","Metrics and alerts.","amber"],["Tooling","Command line and GUI.","red"]],["A platform is the brokers plus everything around them."]),
VS("Look with a GUI, change with Git","GUI",["Good for exploring","Changes leave no trail"],"Git",["Topics and ACLs as files","Reviewed, versioned, repeatable"],["Explore by clicking. Change by committing."],"→","amber","green"),
PT("Sizing brokers",[["At least three","Then grow.","blue"],["Fast, reliable storage","Matters most.","green"],["Memory","For the page cache.","purple"],["Network","Replication uses a lot.","amber"]],["Cruise Control rebalances partitions and leaders across brokers."]),
VS("Keep brokers apart, but not too far","Too close",["One rack fails, all copies gone"],"Too far",["Replication latency grows","The cluster becomes unstable"],["Spread across zones in one region."],"VS","red","amber"),
RC("14",[["Platform","Beyond brokers."],["Tools","kcat and a GUI."],["GitOps","For changes."],["Balance","Cruise Control."],["Kubernetes","With an operator."],["Placement","Zones, not continents."]])
]});
//@@ ch15-monitoring
CH({slug:"ch15-monitoring",n:"15",part:"Part IV · Kafka in the real world",sub:"What to measure, and what to be woken for.",end:"Fault tolerant is not invulnerable.",scenes:[
ST("What to watch",[["Applications","Lag and errors.","green",0.4],["Clients","Producers and consumers.","blue",0.6],["Brokers","Replication and requests.","purple",0.8],["Machines","CPU, disk, network.","amber",1.0]],["Start with the machines, or you will chase a Kafka bug that is a full disk."]),
VD("The broker dashboard",[["Under-replicated partitions",true,"Should be zero.","WATCH","amber"],["Offline partitions",true,"Must be zero.","ALERT","red"],["Active controller count",true,"Exactly one.","ALERT","red"],["Request latency",true,"Watch the trend.","WATCH","amber"]],["A few vital signs say most of what matters."],{sw:170}),
PT("Consumer lag",[["What it is","Messages written but not yet read.","blue"],["Stable","The consumer keeps up.","green"],["Growing","It is falling behind.","purple"],["Alert on","The trend, not one reading.","amber"]],["A healthy cluster is useless if clients fall behind."]),
PL("From metrics to alerts",[["Collect","Exporters and scraping."],["Store","A time series database.","blue"],["Visualise","Dashboards.","purple"],["Alert","Only when someone must act.","green"]],["Not every metric deserves an alert."],{tc:"blue"}),
RC("15",[["Tolerant","Not invulnerable."],["Machines","First."],["Brokers","Replication health."],["Clients","Lag."],["Alerts","Actionable only."],["Security","Watch failed logins."]])
]});
//@@ ch16-disaster-management
CH({slug:"ch16-disaster-management",n:"16",part:"Part IV · Kafka in the real world",sub:"What can go wrong, and what to do about each case.",end:"Know in advance what you will do when it fails.",scenes:[
PT("What could go wrong?",[["Network","Partitions and slow links.","blue"],["Broker","A process or a machine dies.","green"],["Storage","A disk fills or fails.","purple"],["Data centre","A whole site is lost.","amber"],["People","A wrong command.","red"]],["Each needs a different answer."]),
VS("Broker failures and min ISR","Availability first",["Accept writes with fewer replicas","Risk losing data"],"Durability first",["Refuse writes below the minimum","Risk an outage"],["In a payment system, refuse the write."],"or","amber","blue"),
VS("Losing a data centre","Stretched cluster",["One cluster across sites","Synchronous, no data loss","Needs low latency between sites"],"Mirrored clusters",["Two clusters","Asynchronous copy with MirrorMaker 2","Some loss, and offsets to translate"],["First ask whether you need this at all."],"or","blue","purple"),
VD("Replication is not a backup",[["A broker dies",true,"Replicas cover it.","COVERED","green"],["A disk fails",true,"Replicas cover it.","COVERED","green"],["A topic is deleted by mistake",false,"The deletion is replicated too.","NOT COVERED","red"],["A bad message is produced",false,"Every replica has it.","NOT COVERED","red"]],["Backing up Kafka is hard. Decide whether the source systems can replay instead."],{sw:330}),
RC("16",[["Plan","Before it happens."],["Network","Mostly, wait."],["Broker","Min ISR decides."],["Disk","Never let it fill."],["Site","Stretch or mirror."],["Backup","Not the same as replicas."]])
]});
//@@ ch17-comparison
CH({slug:"ch17-comparison",n:"17",part:"Part IV · Kafka in the real world",sub:"Kafka beside messaging systems, REST and databases.",end:"No cure-alls.",scenes:[
VS("Smart pipes, dumb pipes","Messaging and service buses",["Logic in the middle","Messages removed once read"],"Kafka",["A dumb pipe that keeps data","Logic at the ends"],["Kafka stores, and leaves the thinking to producers and consumers."],"VS","amber","green"),
VS("REST and the distributed monolith","Synchronous calls",["The caller waits","One slow service slows them all"],"Events",["The producer does not wait","Consumers work at their own pace"],["Chains of synchronous calls couple services in time."],"→","red","green"),
VS("“What is?” versus “What was?”","Database",["The current state","Rich queries"],"Kafka",["How the state came about","Read in order"],["They answer different questions, and work well together."],"and","blue","purple"),
VD("Is Kafka the right choice?",[["Many systems need the same data",true,"Write once, read many times.","YES","green"],["History must be replayable",true,"The log keeps it.","YES","green"],["A request needs an immediate answer",false,"Use a synchronous call.","NO","red"],["Ad hoc queries over data",false,"Use a database.","NO","red"]],["It depends on the use case and the non-functional requirements."],{sw:150}),
RC("17",[["No cure-all","Fit matters."],["Inside, outside","Two kinds of data."],["Pipes","Dumb, with storage."],["REST","Couples in time."],["Database","What is."],["Kafka","What was."]])
]});
//@@ ch18-enterprise-architectures
CH({slug:"ch18-enterprise-architectures",n:"18",part:"Part IV · Kafka in the real world",sub:"Where Kafka sits in a large organisation.",end:"A shared stream of data, owned by the teams that produce it.",scenes:[
VS("From a central data team to a data mesh","Central team",["Collects data from everyone","Becomes the bottleneck"],"Data mesh",["Each domain publishes its data as a product","Others subscribe"],["Kafka topics are a natural shape for data products."],"→","amber","green"),
PL("Liberating data from core systems",[["Core system","Decades old."],["Change data capture","Reads its log.","blue"],["Kafka","Every change as a stream.","purple"],["New services","Built beside it.","green"]],["The old system keeps running while new ones use its data."],{tc:"blue"}),
PT("Where Kafka is used",[["Big data","Where it started.","blue"],["Microservices","Events between services.","green"],["Industrial IoT","Machines and sensors.","purple"],["Integration","Between old and new.","amber"]],["The final chapter steps back to look at Kafka in whole organisations."]),
VD("What Kafka is not",[["A request and reply channel",false,"Waiting on a topic for an answer is an anti-pattern.","NO","red"],["A database for ad hoc queries",false,"Read in order, not by question.","NO","red"],["A file transfer service",false,"Messages should be small.","NO","red"]],["Aim for few clusters: each extra one costs effort."],{sw:150}),
RC("18",[["Mesh","Data as a product."],["CDC","Frees old data."],["Big data","The origin."],["IoT","At the edge."],["Clusters","As few as possible."],["Not","Request and reply."]])
]});
