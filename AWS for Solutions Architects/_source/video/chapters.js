//@@ ch01-aws-principles
CH({slug:"ch01-aws-principles",n:"1",part:"Cloud foundations",sub:"What the cloud is, and the properties architects rely on.",end:"Rent capacity, and let it follow the load.",scenes:[
VS("Renting, not buying","Own data centre",["Buy hardware up front","Guess capacity years ahead","Pay whether it is used or not"],"Cloud",["Rent by the hour or second","Add capacity in minutes","Pay for what runs"],["Cloud computing hands the hardware, and much of the software, to a provider."],"→","amber","green"),
VS("Scalability and elasticity","Scalability",["Keeps working as load grows","Capacity can be added"],"Elasticity",["Capacity follows demand up and down","Automatically, and quickly"],["Elastic systems stop paying for the peak when the peak has passed."],"and","blue","green"),
VS("Scaling up versus scaling out","Scale up",["A bigger machine","Simple, with a hard ceiling","One machine to lose"],"Scale out",["More machines","Needs a load balancer","Survives the loss of one"],["Cloud designs favour scaling out."],"VS","amber","green"),
BR("Availability, measured",[["99%",100,"About 3.65 days a year","red"],["99.9%",35,"About 8.8 hours","amber"],["99.99%",12,"About 53 minutes","blue"],["99.999%",4,"About 5 minutes","green"]],["Availability is uptime divided by total time.","Each extra nine cuts the allowed downtime tenfold. (Bars not to scale.)"],{max:100,lw:220}),
RC("1",[["Cloud","Rented capacity."],["Public, private","Shared or dedicated."],["Scalable","Grows with load."],["Elastic","Shrinks again."],["Scale out","More, not bigger."],["Nines","Measure availability."]])
]});
//@@ ch02-well-architected
CH({slug:"ch02-well-architected",n:"2",part:"Cloud foundations",sub:"Six pillars for judging an architecture, and the certification path.",end:"Review every workload against the same six questions.",scenes:[
PT("The six pillars",[["Operational excellence","Run and improve.","blue"],["Security","Protect data and systems.","green"],["Reliability","Recover and keep working.","purple"],["Performance efficiency","Use resources well.","amber"],["Cost optimization","Avoid needless spend.","red"],["Sustainability","Reduce the footprint.","blue"]],["The framework turns recurring questions into a checklist."]),
VS("Reliability: MTBF and MTTR","MTBF",["Mean time between failures","Make failures rarer"],"MTTR",["Mean time to repair","Make recovery faster"],["Availability improves from either side. Fast recovery is often cheaper."],"and","blue","green"),
PL("A Well-Architected Review",[["Pick a workload","One at a time."],["Answer the questions","Pillar by pillar.","blue"],["Find the risks","High and medium.","amber"],["Plan improvements","Prioritised.","purple"],["Repeat","As the workload changes.","green"]],["A review is a conversation, not an audit."],{tc:"blue"}),
ST("The certification map",[["Specialty","Deep in one area.","purple",0.45],["Professional","Architect and DevOps engineer.","blue",0.65],["Associate","Architect, developer, operations.","green",0.85],["Foundational","Cloud Practitioner.","amber",1.0]],["Lenses extend the framework for particular kinds of workload."]),
RC("2",[["Pillars","Six of them."],["Principles","Under each pillar."],["MTBF","Fail less often."],["MTTR","Recover sooner."],["Lenses","Workload-specific."],["Certification","Four levels."]])
]});
//@@ ch03-digital-transformation
CH({slug:"ch03-digital-transformation",n:"3",part:"Cloud foundations",sub:"Service models, migration strategies and planning for failure.",end:"Move each application the way that suits it.",scenes:[
ST("Three service models",[["SaaS","You use the application.","green",0.4],["PaaS","You bring code and data.","blue",0.7],["IaaS","You manage the OS upwards.","purple",1.0]],["The higher the model, the less you manage."]),
PL("Migration in three phases",[["Assess","The case and readiness."],["Mobilize","Landing zone, skills, a plan.","blue"],["Migrate and modernize","Application by application.","green"]],["Modernisation is folded into the move, not left for later."],{tc:"blue"}),
PT("The 7 Rs",[["Rehost","Lift and shift.","blue"],["Replatform","Lift and tweak.","green"],["Repurchase","Move to SaaS.","purple"],["Refactor","Re-architect for the cloud.","amber"],["Retire","Switch it off.","red"],["Retain","Leave it for now.","blue"]],["The seventh is relocate: move the platform as it is. One strategy per application."]),
BR("Four architectures for availability",[["Backup and restore",25,"Hours to recover, lowest cost","amber"],["Pilot light",50,"Core running, the rest off","blue"],["Warm standby",75,"A scaled-down copy running","purple"],["Multi-site active-active",100,"Near zero downtime, highest cost","green"]],["RTO is how long you can be down. RPO is how much data you can lose.","The bars show relative cost. (Illustrative.)"],{max:100,lw:380}),
RC("3",[["Models","IaaS, PaaS, SaaS."],["Phases","Assess, mobilize, migrate."],["7 Rs","A strategy per app."],["CAF","A shared adoption map."],["DR","Four cost levels."],["RTO, RPO","Time and data targets."]])
]});
//@@ ch04-networking
CH({slug:"ch04-networking",n:"4",part:"Core services",sub:"Regions, VPCs, DNS, the edge and firewalls.",end:"Build the network in layers, and deny by default.",scenes:[
ST("Regions, zones and edges",[["Edge locations","Close to users.","green",0.4],["Availability Zones","Separate data centres in a Region.","blue",0.7],["Regions","Separate geographic areas.","purple",1.0]],["The footprint nests like Russian dolls."]),
PT("Your own network: the VPC",[["Subnets","Public and private, one per zone.","blue"],["Route tables","Where traffic may go.","green"],["Internet gateway","The public door.","purple"],["NAT gateway","Outbound only, for private subnets.","amber"]],["A Virtual Private Cloud is a private network inside one Region."]),
VS("Many VPCs","Peering mesh",["Each pair linked directly","Not transitive","Links grow with the square of VPCs"],"Transit Gateway",["A hub that every VPC attaches to","One place for routing"],["Past a handful of VPCs, use a hub."],"→","amber","green"),
VS("Security groups versus network ACLs","Security group",["Wraps an instance","Stateful: replies are allowed","Allow rules only"],"Network ACL",["Wraps a subnet","Stateless: both directions need rules","Allow and deny rules"],["Two firewalls at two levels."],"VS","blue","purple"),
RC("4",[["Regions","Zones inside them."],["VPC","Your private network."],["Hub","Transit Gateway."],["Route 53","Managed DNS."],["Edge","CloudFront, Global Accelerator."],["Firewalls","Groups and ACLs."]])
]});
//@@ ch05-storage
CH({slug:"ch05-storage",n:"5",part:"Core services",sub:"Block, file and object storage, and how to choose.",end:"Match the storage to how the data is read.",scenes:[
PT("Three kinds of storage",[["Block","A disk for one instance: EBS.","blue"],["File","A shared file system: EFS, FSx.","green"],["Object","Whole objects over an API: S3.","purple"]],["Every storage service fits one of these shapes."]),
ST("S3 storage classes",[["Glacier Deep Archive","Rarely read, hours to restore.","purple",0.4],["Glacier","Archives.","blue",0.55],["Infrequent Access","Cheaper to store, a fee to read.","amber",0.75],["Standard","Frequent access.","green",1.0]],["Colder classes cost less to store and more to read."]),
PL("Lifecycle rules",[["Standard","New data."],["Infrequent Access","After a set number of days.","amber"],["Glacier","When rarely read.","blue"],["Expire","When no longer needed.","muted"]],["If the access pattern is unknown, Intelligent-Tiering moves objects for you."],{tc:"blue"}),
VD("Protecting data in S3",[["Block public access",true,"On by default","","green"],["leave it on.",true,"","","green"],["Encrypt at rest and in transit",true,"With managed keys.","DO","green"],["Versioning",true,"Recover from overwrites and deletes.","DO","green"],["Least-privilege bucket policies",true,"Grant only what is needed.","DO","green"]],["Most S3 breaches are configuration mistakes, not hacks."],{sw:150}),
RC("5",[["Shapes","Block, file, object."],["EBS","Disks for EC2."],["S3","Objects in buckets."],["Classes","Hot to cold."],["Lifecycle","Age data down."],["Protect","Private by default."]])
]});
//@@ ch06-compute
CH({slug:"ch06-compute",n:"6",part:"Core services",sub:"Instances, pricing models, load balancers and serverless.",end:"Choose the least infrastructure that does the job.",scenes:[
ST("From servers to functions",[["Lambda","Just a function.","green",0.4],["Fargate","Containers without servers.","blue",0.6],["Containers","On ECS or EKS.","purple",0.8],["EC2","Virtual machines you manage.","amber",1.0]],["The higher you go, the less you operate."]),
PT("Paying for EC2",[["On-Demand","Pay by the second, no commitment.","blue"],["Savings Plans, Reserved","Commit for a discount.","green"],["Spot","Spare capacity, can be reclaimed.","purple"],["Dedicated","Hardware for you alone.","amber"]],["Cover the steady baseline with a commitment, and the peaks on demand."]),
PT("Elastic Load Balancing",[["Application","HTTP, routes by path and host.","blue"],["Network","TCP and UDP, very high throughput.","green"],["Gateway","In front of network appliances.","purple"]],["A load balancer spreads traffic over healthy targets in several zones."]),
VS("Serverless compute","Lambda",["Event-driven functions","Short-lived","Scales to zero"],"Fargate",["Whole containers","Long-running services","No instances to patch"],["No servers to provision, and you pay only while code runs."],"and","green","blue"),
RC("6",[["Compute","Not just servers."],["Families","Named by purpose."],["Burstable","T instances use credits."],["Pricing","Mix the models."],["ELB","Three kinds."],["Serverless","Lambda and Fargate."]])
]});
//@@ ch07-databases
CH({slug:"ch07-databases",n:"7",part:"Core services",sub:"Purpose-built databases, and how to pick one.",end:"Use the right database for each job.",scenes:[
VS("ACID and BASE","ACID",["Atomic, consistent, isolated, durable","Correct at every step","Harder to scale out"],"BASE",["Basically available, soft state","Eventually consistent","Scales out easily"],["Relational stores lean one way, and many NoSQL stores the other."],"VS","blue","amber"),
VS("OLTP and OLAP","OLTP",["Many small, fast transactions","Rows","The live application"],"OLAP",["A few large analytical queries","Columns","Reports and dashboards"],["Two workloads, two kinds of engine."],"VS","green","purple"),
PT("Pick the purpose-built database",[["Relational","RDS and Aurora.","blue"],["Key-value","DynamoDB.","green"],["In-memory","ElastiCache.","purple"],["Document","DocumentDB.","amber"],["Graph","Neptune.","red"],["Warehouse","Redshift.","blue"]],["One oversized database rarely suits every job."]),
PL("The cache-aside pattern",[["Read the cache","Is it there?"],["Hit","Return it.","green"],["Miss","Read the database.","amber"],["Fill the cache","For next time.","blue"]],["When single-digit milliseconds is still too slow, add a cache."],{tc:"blue"}),
RC("7",[["Many","Not one database."],["ACID","Strict consistency."],["BASE","Eventual consistency."],["OLTP, OLAP","Rows and columns."],["Managed","Less to operate."],["Migrate","Convert, then move."]])
]});
//@@ ch08-security
CH({slug:"ch08-security",n:"8",part:"Operations and security",sub:"Shared responsibility, IAM, and layers of defence.",end:"Deny by default, and grant the least that works.",scenes:[
VS("The shared responsibility model","AWS: security of the cloud",["Facilities and hardware","The network and hypervisor"],"You: security in the cloud",["Your data and identities","Operating systems and configuration","Encryption choices"],["The line moves with the service: more managed, less for you to secure."],"and","blue","amber"),
PT("IAM building blocks",[["User","A person or application.","blue"],["Group","Users who share permissions.","green"],["Role","Temporary, assumed identity.","purple"],["Policy","A document of allows and denies.","amber"]],["Prefer roles to long-lived keys."]),
PL("How AWS decides",[["Start: deny","Everything."],["Explicit deny?","Then denied, always.","red"],["Explicit allow?","Then allowed.","green"],["Otherwise","Still denied.","muted"]],["An explicit deny beats any allow."],{tc:"blue"}),
PT("Detect, protect, encrypt",[["GuardDuty","Detects threats.","blue"],["Inspector","Finds vulnerabilities.","green"],["WAF and Shield","Protect web applications.","purple"],["KMS","Manages encryption keys.","amber"],["Macie","Finds sensitive data.","red"]],["AWS groups its security services by the job they do."]),
RC("8",[["Shared","Two halves."],["IAM","Users, groups, roles."],["Deny","Wins."],["Accounts","Many, governed centrally."],["Services","Detect and protect."],["Encrypt","With managed keys."]])
]});
//@@ ch09-cloudops
CH({slug:"ch09-cloudops",n:"9",part:"Operations and security",sub:"Auditing, monitoring, infrastructure as code and cost.",end:"Operations do not disappear in the cloud. They become code.",scenes:[
PT("Know what happened",[["CloudTrail","Records every API call.","blue"],["Config","Records resource configuration.","green"],["CloudWatch","Metrics, logs and alarms.","purple"],["EventBridge","Routes events to targets.","amber"]],["Who did what, what it looks like now, and how it is behaving."]),
PL("A CloudWatch alarm in action",[["Metric","CPU, errors, latency."],["Threshold","Crossed for a period.","amber"],["Alarm state","Changes.","red"],["Action","Notify or scale.","green"]],["An alarm watches one metric and acts when it leaves its range."],{tc:"blue"}),
VS("Provisioning: from wikis to code","By hand",["Follow a runbook","Slow, and different each time"],"Infrastructure as code",["A template describes the stack","Reviewed and versioned","Repeatable"],["CloudFormation and the CDK build environments from a description."],"→","amber","green"),
PL("Cloud financial management",[["Plan and evaluate","Budgets and forecasts."],["Manage and control","Tags, accounts, guardrails.","blue"],["Track and allocate","Who spends what.","purple"],["Optimize and save","Right-size, commit.","green"]],["The cost pillar runs as a four-step loop."],{tc:"blue"}),
RC("9",[["CloudOps","Operations as code."],["Audit","CloudTrail and Config."],["Monitor","CloudWatch."],["Events","EventBridge."],["IaC","Templates, not clicks."],["Cost","Plan, control, track, save."]])
]});
//@@ ch10-big-data-streaming
CH({slug:"ch10-big-data-streaming",n:"10",part:"Data and analytics",sub:"Batch processing, serverless ETL and streams.",end:"Batch for depth, streaming for speed.",scenes:[
PT("Three services",[["EMR","Managed Hadoop and Spark clusters.","blue"],["Glue","Serverless ETL and a data catalog.","green"],["Kinesis","Managed streaming.","purple"]],["Process data where it is cheap to store, and pay only for the processing."]),
VS("Partitions and predicate pushdown","Without",["Scan every file","Pay for all of it"],"With",["Folders named by date or region","Read only the matching ones"],["Partition on a column with few distinct values."],"→","red","green"),
VS("Batch and streaming","Batch",["Hours of data at once","High throughput","Results arrive late"],"Streaming",["Record by record","Results in seconds","Fraud checks, live dashboards"],["A batch result is too late to stop a fraudulent payment."],"VS","blue","green"),
VS("Kinesis or MSK","Kinesis",["AWS-native","Less to operate"],"Amazon MSK",["Managed Apache Kafka","Open-source APIs and tools"],["Choose MSK if you already run Kafka, or need its ecosystem."],"or","blue","purple"),
RC("10",[["Data","An asset."],["EMR","Spark at scale."],["Glue","ETL and catalog."],["Partitions","Read less."],["Kinesis","Streams."],["MSK","Managed Kafka."]])
]});
//@@ ch11-warehouses-queries
CH({slug:"ch11-warehouses-queries",n:"11",part:"Data and analytics",sub:"Redshift, Athena and QuickSight.",end:"Store once in S3, and query it several ways.",scenes:[
VS("Why columnar storage wins","Row storage",["Reads whole rows","Good for transactions"],"Column storage",["Reads only the columns asked for","Compresses well","Good for analytics"],["An analytical query touches a few columns of many rows."],"VS","amber","green"),
VS("Athena or Redshift","Athena",["Serverless SQL on files in S3","Pay per query","Ad hoc questions"],"Redshift",["A cluster or serverless warehouse","Fast, repeated, complex queries","Spectrum reaches into S3"],["Both speak SQL."],"or","blue","purple"),
PT("Tuning Athena",[["Columnar formats","Parquet or ORC.","blue"],["Compression","Less to scan.","green"],["Partitions","Skip whole folders.","purple"],["Min and max statistics","Skip whole blocks.","amber"]],["You pay for the data scanned, so scan less."]),
PL("An analytics pipeline",[["Ingest","Kinesis, DMS, Glue."],["Store","An S3 data lake.","blue"],["Catalog","The Glue Data Catalog.","purple"],["Query","Athena or Redshift.","amber"],["Visualize","QuickSight.","green"]],["Each stage is a managed service."],{tc:"blue"}),
RC("11",[["Redshift","The warehouse."],["Columnar","Read less."],["Athena","SQL on S3."],["Pushdown","Skip blocks."],["QuickSight","Serverless BI."],["Pipeline","Ingest to dashboard."]])
]});
//@@ ch12-ml-iot-blockchain
CH({slug:"ch12-ml-iot-blockchain",n:"12",part:"Data and analytics",sub:"Machine learning at three levels, plus IoT and ledgers.",end:"Start at the highest layer that solves the problem.",scenes:[
PT("Three ways to learn",[["Supervised","From labelled examples.","blue"],["Unsupervised","Finds structure without labels.","green"],["Reinforcement","Learns from reward.","purple"]],["Machine learning finds patterns in data instead of following written rules."]),
ST("Three layers of ML on AWS",[["AI services","Call an API. No ML skill needed.","green",0.4],["SageMaker","Build, train and deploy models.","blue",0.7],["Frameworks and infrastructure","Full control.","purple",1.0]],["The higher the layer, the less expertise it needs."]),
PL("Building a model",[["Prepare data","Clean and label."],["Train","Choose an algorithm.","blue"],["Tune and evaluate","Against held-out data.","purple"],["Deploy","An endpoint.","amber"],["Monitor","For drift.","green"]],["A model decays as the world changes, so the pipeline never ends."],{tc:"blue"}),
PT("IoT and blockchain",[["IoT Core","Connects devices to the cloud.","blue"],["Greengrass","Runs logic at the edge.","green"],["Managed Blockchain","Shared ledgers.","purple"],["Ledger databases","A history that cannot be altered.","amber"]],["Devices produce data, and ledgers make its history tamper-evident."]),
RC("12",[["Learning","Three kinds."],["Layers","Services to frameworks."],["SageMaker","The whole pipeline."],["MLOps","Models decay."],["IoT","Devices to cloud."],["Ledgers","Tamper-evident."]])
]});
//@@ ch13-containers
CH({slug:"ch13-containers",n:"13",part:"Modern architectures",sub:"Containers, Docker, ECS and EKS.",end:"Package once, and run the same thing everywhere.",scenes:[
VS("Containers versus virtual machines","Virtual machine",["Virtualises hardware","Carries a full guest OS","Minutes to start"],"Container",["Shares the host kernel","Carries only the app and libraries","Seconds to start"],["A container ships the whole kitchen, not the whole house."],"VS","amber","green"),
PL("From Dockerfile to container",[["Dockerfile","The recipe."],["Build","An image.","blue"],["Push","To a registry: ECR.","purple"],["Run","A container.","green"]],["The image is the same on a laptop and in production."],{tc:"blue"}),
VS("ECS and EKS","ECS",["AWS’s own orchestrator","Simpler, deeply integrated"],"EKS",["Managed Kubernetes","Portable, with a large ecosystem"],["Either can run on EC2 or on Fargate."],"or","blue","purple"),
PL("Kubernetes: desired state",[["Declare","What should be running."],["Observe","What is running.","blue"],["Compare","Find the difference.","amber"],["Act","Start or stop pods.","green"]],["The control loop never stops reconciling."],{tc:"blue"}),
RC("13",[["Container","App plus dependencies."],["Lighter","Than a VM."],["Docker","Build, push, run."],["ECS","AWS-native."],["EKS","Kubernetes."],["Fargate","No nodes to manage."]])
]});
//@@ ch14-microservices
CH({slug:"ch14-microservices",n:"14",part:"Modern architectures",sub:"Monoliths, layers, events and domain-driven design.",end:"Draw the service boundaries around the business.",scenes:[
VS("From monolith to microservices","Monolith",["One deployable unit","Simple at first","Every change ships everything"],"Microservices",["Small, independently deployable","Each owns its data","More to operate"],["A microservice is built around one business capability."],"→","amber","green"),
PT("Layered architecture",[["Presentation","What users see.","blue"],["Business logic","The rules.","green"],["Data","Storage.","purple"]],["Each tier does one job, and can be secured and scaled on its own."]),
PL("Event-driven architecture",[["Producer","Emits an event."],["Router","A bus or a topic.","blue"],["Consumers","React independently.","green"]],["An event is a fact that something happened. Producers do not know who listens."],{tc:"blue"}),
PT("Practices that keep services healthy",[["One capability each","Small and focused.","blue"],["Own your data","No shared database.","green"],["Design for failure","Timeouts and retries.","purple"],["Automate","Build, test, deploy.","amber"],["Observe","Logs, metrics, traces.","red"]],["The book lists seventeen. Domain-driven design supplies the boundaries."]),
RC("14",[["Monolith","One unit."],["Microservices","Many small ones."],["Layers","Separate concerns."],["Events","Decouple services."],["Practices","Seventeen in the book."],["DDD","Finds the boundaries."]])
]});
//@@ ch15-data-lakes
CH({slug:"ch15-data-lakes",n:"15",part:"Modern architectures",sub:"Zones, governance, and the patterns that followed.",end:"A lake is only useful if people trust what is in it.",scenes:[
PL("Zones: from raw ore to gold bars",[["Raw","As it arrived."],["Cleaned","Validated and standardised.","blue"],["Curated","Modelled for use.","green"]],["Data becomes more refined, and more trusted, as it moves through."],{tc:"blue"}),
PT("Building with Lake Formation",[["Ingest","From databases and streams.","blue"],["Catalog","What exists and where.","green"],["Secure","Table and column permissions.","purple"],["Share","Across accounts.","amber"]],["It sets up a governed lake on S3."]),
VD("Data lake best practices",[["Catalog everything",true,"Unfindable data is unused data.","DO","green"],["Govern access",true,"By table and column.","DO","green"],["Track lineage",true,"Know where data came from.","DO","green"],["Dump data with no owner",false,"That is how a lake becomes a swamp.","AVOID","red"]],["Technology is the easy part. Culture is harder."],{sw:180}),
PT("Lake, lakehouse or mesh?",[["Data lake","Everything in one store.","blue"],["Lakehouse","Adds warehouse structure and transactions.","green"],["Data mesh","Domains own data as products.","purple"]],["Three answers to the same question: who owns the data, and in what shape?"]),
RC("15",[["Lake","All data, one place."],["Zones","Raw to curated."],["Lake Formation","Governed setup."],["Practices","Catalog and govern."],["Metrics","Measure use."],["Patterns","Lakehouse and mesh."]])
]});
//@@ ch16-hands-on-app
CH({slug:"ch16-hands-on-app",n:"16",part:"Modern architectures",sub:"A serverless online store, built end to end.",end:"Finish where the book began: with a Well-Architected review.",scenes:[
{type:'flow',title:'Follow one order',cols:5,rows:1,nodes:[{id:'a',t:'Browser',c:'muted',col:0,row:0},{id:'b',t:'CloudFront',c:'blue',col:1,row:0},{id:'c',t:'API Gateway',c:'purple',col:2,row:0},{id:'d',t:'Lambda',c:'amber',col:3,row:0},{id:'e',t:'DynamoDB',c:'green',col:4,row:0}],edges:[['a','b'],['b','c'],['c','d'],['d','e']],cap:['A static front end, an API, functions and a table.','Cognito signs the customer in along the way.']},
VD("Setting up the account safely",[["A budget alarm",true,"Before any code.","FIRST","green"],["Multi-factor on the root user",true,"Then stop using it.","FIRST","green"],["Least-privilege identities",true,"For people and for code.","FIRST","green"]],["Safety comes before the first resource."],{sw:170}),
VS("Creating the infrastructure","By CLI",["One command per resource","Good for learning"],"By CloudFormation",["One template for the stack","Repeatable, and easy to delete"],["The book does it by hand first, then as a template."],"→","amber","green"),
PL("A pipeline with a rollback plan",[["Commit","To the repository."],["Build and test","Automatically.","blue"],["Deploy","A small share of traffic first.","amber"],["Watch","Alarms and traces.","purple"],["Roll back","If they fire.","green"]],["Logs go to CloudWatch, and X-Ray traces each request."],{tc:"blue"}),
RC("16",[["Store","Serverless."],["Path","Edge, API, function, table."],["Account","Secured first."],["Template","Infrastructure as code."],["Pipeline","With rollback."],["Review","Against six pillars."]])
]});
