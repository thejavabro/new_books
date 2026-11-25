CH({slug:'ch04-architectural-characteristics',n:'4',part:P1,sub:'What counts as an architectural characteristic, and why you want as few as possible.',end:'Aim for the least worst architecture.',scenes:[
{type:'points',title:'Three criteria, all at once',items:[
 {t:'Non-domain',c:'blue',d:'Not what the system does, but how well it must operate.'},
 {t:'Influences structure',c:'amber',d:'Ordinary design inside one component cannot satisfy it.'},
 {t:'Critical to success',c:'green',d:'Each one adds complexity, so support as few as possible.'}],
 cap:['“Calculate tax” is domain. “Respond in 200 ms” is a characteristic.']},
{type:'versus',title:'Explicit and implicit',mid:'+',
 a:{h:'Explicit',c:'blue',items:['Appear in requirement documents','Someone asked for them']},
 b:{h:'Implicit',c:'violet',items:['Never written down','Everyone assumes them','“The site should not leak card numbers”']},
 cap:['Many more characteristics are assumed than are ever written.']},
{type:'points',title:'Four families of characteristics',items:[
 {t:'Operational',c:'green',d:'How it runs: availability, performance, scalability.'},
 {t:'Structural',c:'amber',d:'Code quality and structure: maintainability, extensibility.'},
 {t:'Cloud',c:'blue',d:'New in the second edition: elasticity, on-demand scale.'},
 {t:'Cross-cutting',c:'violet',d:'Spans the others: security, accessibility, privacy.'}],
 cap:['There is no standard list.']},
{type:'flow',title:'Characteristics <b>fight each other</b>',cols:3,rows:2,nodes:[{id:'s',t:'More security',c:'green',col:0,row:0},{id:'p',t:'Performance',c:'red',col:1,row:0},{id:'a',t:'More availability',c:'green',col:0,row:1},{id:'x',t:'Simplicity',c:'red',col:1,row:1},{id:'c',t:'Complexity<br>budget',c:'amber',col:2,row:0,big:1}],edges:[['s','p',1],['a','x',1],['p','c'],['x','c']],
 cap:['Encryption and extra hops slow things down. Redundancy adds moving parts.','The goal is not the best architecture, but the <b>least worst</b> one.']},
{type:'bars',title:'Words mean different things: “available”',max:8.8,lw:420,note:'downtime per year',items:[{l:'99.9% uptime',v:8.8,dec:1,suf:' hours',c:'red'},{l:'99.99% uptime',v:.9,txt:'53 minutes',c:'green'}],
 cap:['Performance: response time, or throughput? Agility: which parts?','Agree on a <b>ubiquitous language</b>, so teams argue about trade-offs, not words.']},
RC(4,[['Three criteria','Non-domain, structural, critical.'],['Implicit','Most are assumed, not written.'],['Four families','Operational, structural, cloud, cross-cutting.'],['Least worst','They trade off against each other.'],['Define terms','One word, many meanings.']])
]});
