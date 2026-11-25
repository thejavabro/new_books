CH({slug:'ch14-service-based-architecture',n:'14',part:P2,sub:'A pragmatic distributed style: a few coarse domain services.',end:'Distributed, without the microservices bill.',scenes:[
{type:'stats',title:'Topology: a few coarse domain services',items:[{v:1,l:'separately deployed user interface',c:'blue'},{v:12,pre:'4–',l:'coarse-grained domain services',c:'green'},{v:1,l:'shared database, usually',c:'amber'}],
 cap:['The book uses Going Green, the electronics recycler.','Independent deployments, while keeping SQL joins and ACID transactions.']},
{type:'points',title:'Topology variants',items:[
 {t:'Shared database',c:'amber',d:'The classic form. Simple, with transactions inside a service.'},
 {t:'API gateway',c:'blue',d:'Handles security and metrics, and hides the services.'},
 {t:'Partitioned data',c:'green',d:'Domain-scoped databases when services don’t share tables.'}],
 cap:[]},
{type:'versus',title:'Coarse services keep transactions simple',
 a:{h:'One coarse service',c:'green',items:['The workflow happens inside it','A local ACID transaction','Commit or roll back together']},
 b:{h:'Many fine-grained services',c:'red',items:['The same workflow crosses services','Needs a distributed transaction','Compensation when a step fails']},
 cap:['Because each service is a whole domain.']},
{type:'points',title:'User interface options',items:[
 {t:'Single UI',c:'blue',d:'Simplest. One deployment for all screens.'},
 {t:'Domain UIs',c:'amber',d:'One customer-facing, one internal.'},
 {t:'Per-service UIs',c:'green',d:'Maximum independence, more deployments.'}],
 cap:[]},
SP(['Deployability and testability','Fault tolerance and reliability','Modularity by domain','ACID inside a domain'],['Scalability is moderate: services are coarse','Low elasticity','Shared schema changes ripple','Can creep toward a distributed monolith']),
RC(14,[['Shape','UI, 4 to 12 services, one database.'],['Variants','Gateway, or partitioned data.'],['Transactions','Local and ACID.'],['Pragmatic','Good ratings in many vital areas.']])
]});
