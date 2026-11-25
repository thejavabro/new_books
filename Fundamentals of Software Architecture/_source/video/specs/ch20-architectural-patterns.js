CH({slug:'ch20-architectural-patterns',n:'20',part:P3,sub:'Reusable solutions that appear inside many styles, each with its own trade-offs.',end:'Find the pattern first, then the tool.',scenes:[
{type:'points',title:'Styles, patterns, best practices, solutions',items:[
 {t:'Style',c:'blue',d:'The overall topology.'},
 {t:'Pattern',c:'green',d:'A contextualised solution to a recurring problem, with trade-offs.'},
 {t:'“Best practice”',c:'red',d:'Pretends there are no trade-offs. Beware.'},
 {t:'Solution',c:'amber',d:'A product or tool. It may implement several patterns.'}],
 cap:['Find the right pattern first, then pick an implementation.']},
{type:'flow',title:'Hexagonal: ports and adapters',cols:3,rows:3,nodes:[{id:'d',t:'DOMAIN<br>logic',c:'blue',col:1,row:1,big:1},{id:'a',t:'Web adapter',c:'green',col:0,row:0},{id:'b',t:'Messaging adapter',c:'green',col:0,row:2},{id:'c',t:'Database adapter',c:'amber',col:2,row:0},{id:'e',t:'A different database',c:'amber',col:2,row:2}],edges:[['a','d'],['b','d'],['d','c'],['d','e']],
 cap:['Keep domain logic in the centre. Connect it through ports and adapters.','Swap a database <b>without touching the domain</b>. Nothing special about six sides.']},
{type:'versus',title:'Sidecar and orthogonal coupling',
 a:{h:'Without sidecars',c:'red',items:['Every service bundles its own operational code','Logging and monitoring drift apart','Domain and operations tangled']},
 b:{h:'With sidecars',c:'green',items:['Consistent operational behaviour','Clean isolation from domain code','A single control plane','But a sidecar per platform']},
 cap:['Operational concerns cut across every domain at right angles.']},
{type:'bars',title:'Orchestration versus choreography',max:5,lw:480,note:'who does it better',items:[{l:'Workflow control',v:5,txt:'orchestration',c:'violet'},{l:'Error handling',v:5,txt:'orchestration',c:'violet'},{l:'State management',v:5,txt:'orchestration',c:'violet'},{l:'Responsiveness',v:5,txt:'choreography',c:'teal'}],
 cap:['The trade-offs are consistent wherever the pattern appears.']},
{type:'pipeline',title:'CQRS: separate reads from writes',tc:'green',stages:[{t:'Command',d:'An update arrives.'},{t:'Write model',d:'Optimised for changes.'},{t:'Synchronise',d:'Changes flow across.'},{t:'Read model',c:'green',d:'Optimised for queries.'}],
 cap:['Different models, often different stores, for updates and for reads.']},
{type:'versus',title:'The Broker-Domain pattern',
 a:{h:'A single broker',c:'amber',items:['Easy to operate','Everything fails together','Any service can see any message']},
 b:{h:'A broker per domain',c:'green',items:['Better fault isolation','Better security','Independent scaling','More infrastructure to run']},
 cap:['How many message brokers?']},
RC(20,[['Patterns have trade-offs','“Best practices” hide them.'],['Hexagonal','Domain in the centre.'],['Sidecar','Operations at right angles.'],['Communication','Orchestration or choreography.'],['CQRS','Split reads from writes.'],['Broker-Domain','A broker per domain.']])
]});
