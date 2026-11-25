CH({slug:'ch17-orchestration-driven-soa',n:'17',part:P2,sub:'Enterprise-level reuse, and the lessons it left behind.',end:'Reuse couples. Choose it carefully.',scenes:[
{type:'stack',title:'A strict taxonomy of services',levels:[
 {t:'Business services',c:'blue',w:1,d:'Coarse entry points with no code, like PlaceOrder.'},
 {t:'Orchestration engine',c:'red',w:.9,d:'The enterprise service bus. The heart, and the bottleneck.'},
 {t:'Enterprise services',c:'green',w:.8,d:'Fine-grained shared building blocks, like CreateCustomer.'},
 {t:'Application services',c:'amber',w:.7,d:'One-off services not worth reusing.'},
 {t:'Infrastructure services',c:'violet',w:.6,d:'Monitoring, logging, authentication.'}],
 cap:['It appeared in the late 1990s, when companies were merging and software was expensive.','The driving philosophy: <b>enterprise-level reuse</b>.']},
{type:'flow',title:'Reuse… and coupling',cols:3,rows:3,nodes:[{id:'a',t:'Division A',c:'blue',col:0,row:0},{id:'b',t:'Division B',c:'blue',col:0,row:1},{id:'c',t:'Division C',c:'blue',col:0,row:2},{id:'s',t:'Shared Customer<br>service',c:'red',col:1,row:1,big:1},{id:'x',t:'One change<br>affects everyone',c:'amber',col:2,row:1}],edges:[['a','s'],['b','s'],['c','s'],['s','x']],
 cap:['One shared Customer service for every division sounds efficient.','Then one division needs a change.']},
{type:'points',title:'Lessons that still matter',items:[
 {t:'Reuse has a cost',c:'red',d:'The more something is shared, the more it couples.'},
 {t:'Technical partitioning hurts',c:'amber',d:'A domain concept gets sliced across layers and teams.'},
 {t:'Central engines become bottlenecks',c:'violet',d:'Every change and every request goes through the bus.'},
 {t:'Context changed',c:'green',d:'Open source and cloud made duplication cheaper than coupling.'}],
 cap:['The book treats it mostly as history worth learning from.']},
RC(17,[['Goal','Enterprise-level reuse.'],['Taxonomy','Business, enterprise, application, infrastructure.'],['The engine','Heart and bottleneck.'],['Lesson','Reuse only what rarely changes.']])
]});
