CH({slug:'ch18-microservices-architecture',n:'18',part:P2,sub:'Bounded contexts, each with its own data. Duplication over coupling.',end:'Prefer duplication to coupling.',scenes:[
{type:'points',title:'Topology: bounded contexts',items:[
 {t:'Its own code',c:'blue',d:'Each service models one bounded context.'},
 {t:'Its own data',c:'green',d:'Nobody else touches its database.'},
 {t:'Its own deployment',c:'amber',d:'Released independently.'}],
 cap:['Microservices takes domain partitioning to the extreme.','<b>Duplication</b> is preferred over coupling.']},
{type:'flow',title:'Sidecars and the service mesh',cols:3,rows:2,nodes:[{id:'a',t:'Service A',c:'blue',col:0,row:0},{id:'b',t:'Service B',c:'blue',col:1,row:0},{id:'c',t:'Service C',c:'blue',col:2,row:0},{id:'sa',t:'sidecar',c:'amber',col:0,row:1},{id:'sb',t:'sidecar',c:'amber',col:1,row:1},{id:'sc',t:'sidecar',c:'amber',col:2,row:1}],edges:[['a','sa'],['b','sb'],['c','sc'],['sa','sb'],['sb','sc']],
 cap:['Logging, monitoring and circuit breakers live in a sidecar next to each service.','Connected sidecars form a <b>service mesh</b>.']},
{type:'points',title:'How big is a microservice?',items:[
 {t:'Purpose',d:'One significant, cohesive behaviour.'},
 {t:'Transactions',d:'Entities that must commit together suggest one service.'},
 {t:'Choreography',d:'Lots of chatter? Consider bundling.'},
 {t:'Iterate',d:'Expect to merge and split.'}],
 cap:['“Micro” is a label, not a size limit.']},
{type:'versus',title:'Choreography and orchestration',
 a:{h:'Choreography',c:'teal',items:['Services coordinate themselves','Loosely coupled and responsive','Error handling spread around']},
 b:{h:'Orchestration',c:'violet',items:['An orchestrator runs the workflow','State and errors in one place','More coupling, a possible bottleneck']},
 cap:[]},
{type:'quote',title:'Transactions across services',acc:'red',text:'Don’t do transactions in microservices. *Fix granularity instead.*',by:'When you truly need one, a saga coordinates compensating steps.'},
SP(['Scalability and elasticity','Deployability and testability','Fault tolerance','Evolvability'],['Complexity','Cost','Performance: network hops','Distributed data and workflows']),
RC(18,[['Bounded contexts','Own code, data and deployment.'],['Operational reuse','Sidecars and a mesh.'],['Granularity','Purpose, transactions, chatter.'],['Transactions','Avoid them; use sagas when you must.']])
]});
