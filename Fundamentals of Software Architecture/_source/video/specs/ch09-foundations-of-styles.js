CH({slug:'ch09-foundations-of-styles',n:'9',part:P1,sub:'Basic shapes, partitioning, and the fallacies every distributed system must face.',end:'Going distributed means accepting the network.',scenes:[
{type:'pipeline',title:'Fundamental patterns',stages:[{t:'Big ball of mud',c:'red',d:'No discernible structure. Where systems drift without governance.'},{t:'Unitary',d:'One program on one machine.'},{t:'Client/server',d:'Front end and back end, split.'},{t:'Three-tier',c:'green',d:'Presentation, logic and database on separate tiers.'}],
 cap:['Before named styles, a few basic shapes recur through history.']},
{type:'versus',title:'Technical versus domain partitioning',
 a:{h:'Technical',c:'blue',items:['Grouped by capability: layers','Matches UI, backend and DBA teams','One business change spans every layer']},
 b:{h:'Domain',c:'green',items:['Grouped by business area','Changes stay local','Cross-functional teams','Easier to distribute later']},
 cap:['Conway’s Law: systems mirror the communication structure that builds them.']},
{type:'points',title:'The fallacies of distributed computing',items:[
 {t:'The network is reliable'},{t:'Latency is zero'},{t:'Bandwidth is infinite'},{t:'The network is secure'},{t:'The topology never changes'},{t:'There is only one administrator'},{t:'Transport cost is zero'},{t:'The network is homogeneous'}],
 cap:['Peter Deutsch and colleagues listed eight false assumptions.','The book adds three more: versioning, compensating updates and observability.']},
{type:'versus',title:'Monolithic versus distributed',
 a:{h:'Monolithic',c:'amber',items:['Layered','Modular monolith','Pipeline','Microkernel']},
 b:{h:'Distributed',c:'violet',items:['Service-based','Event-driven','Space-based','Orchestration-driven SOA','Microservices']},
 cap:['Distributed systems also bring distributed logging, transactions and contract versioning.','“Just use microservices” is <b>never free</b>.']},
{type:'points',title:'Team topologies and architecture',items:[
 {t:'Stream-aligned',c:'green',d:'Owns a flow of business work end to end.'},
 {t:'Enabling',c:'blue',d:'Helps teams pick up a missing capability, then steps back.'},
 {t:'Complicated-subsystem',c:'violet',d:'Deep experts in one hard area.'},
 {t:'Platform',c:'amber',d:'Internal services: deployment, observability, infrastructure.'}],
 cap:['Skelton and Pais’s four team types, mapped onto architecture.']},
RC(9,[['Styles vs. patterns','Topology, against reusable solutions.'],['Partitioning','Technical or domain.'],['Fallacies','Eight classics, plus three.'],['Two families','Monolithic and distributed.'],['Teams','Structure follows communication.']])
]});
