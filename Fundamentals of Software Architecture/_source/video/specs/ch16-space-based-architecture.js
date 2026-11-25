CH({slug:'ch16-space-based-architecture',n:'16',part:P2,sub:'Take the database out of the request path, and scale with the crowd.',end:'Memory first. Database later.',scenes:[
{type:'pipeline',title:'Take the database out of the path',tc:'green',stages:[{t:'Request',d:'Routed by the messaging grid.'},{t:'Processing unit',d:'App code plus an in-memory data grid.'},{t:'Data pump',d:'Sends updates asynchronously, via a queue.'},{t:'Database',c:'amber',d:'Written later, off the request path.'}],
 cap:['Most systems scale their web servers fine, then choke on the database.','Here data lives in <b>replicated in-memory grids</b>.']},
{type:'points',title:'The parts',items:[
 {t:'Processing unit',d:'Many copies, each holding its data in memory.'},
 {t:'Messaging grid',d:'Routes requests, like a smart load balancer.'},
 {t:'Data grid',d:'The replicated cache. The heart of the style.'},
 {t:'Processing grid',d:'Optional orchestrator across unit types.'},
 {t:'Deployment manager',d:'Starts and stops units: the source of elasticity.'},
 {t:'Data pumps',d:'Carry cache updates to writers and readers.'}],
 cap:[]},
{type:'curve',title:'Elasticity: scale with the crowd',xl:'time →',yl:'load and processing units →',
 series:[{l:'Load',d:'Concert tickets go on sale.',c:'red',pts:line(60,x=>.1+.8*Math.exp(-Math.pow((x-.5)/.13,2)))},{l:'Processing units',d:'Added as load rises, removed as it falls.',c:'green',pts:line(60,x=>.14+.8*Math.exp(-Math.pow((x-.53)/.15,2)))}],
 cap:['No unit waits on a database, so the system absorbs <b>sudden spikes</b>.']},
{type:'bars',title:'Data collisions',max:500,lw:560,note:'inventory, starting at 500',items:[{l:'Unit A sells 10, then replicates',v:490,c:'amber'},{l:'Unit B sells 5, then replicates',v:495,c:'amber'},{l:'What it should be',v:485,c:'green'}],
 cap:['Two units update the same row before replication finishes. Both end up wrong.','The book’s estimate: collisions = N × (UR² / S) × RL.']},
{type:'versus',title:'Replicated or distributed cache?',
 a:{h:'Replicated',c:'green',items:['Local memory: extremely fast','Fault tolerant','Limited by memory per unit','Collisions with high update rates']},
 b:{h:'Distributed',c:'blue',items:['One external cache: consistent','Handles large volumes','Slower: remote calls','A fault-tolerance concern']},
 cap:[]},
SP(['Elasticity','Scalability','Performance','Handles unpredictable spikes'],['Complexity','Cost','Hard to test at scale','Data collisions and eventual consistency']),
RC(16,[['No database in the path','Data lives in memory.'],['Processing units','App code plus a data grid.'],['Elastic','Units come and go with load.'],['Collisions','The price of replication.']])
]});
