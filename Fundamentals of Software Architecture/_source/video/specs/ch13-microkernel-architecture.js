CH({slug:'ch13-microkernel-architecture',n:'13',part:P2,sub:'A minimal core system, and plug-ins for everything that varies.',end:'Variation lives in plug-ins.',scenes:[
{type:'flow',title:'Core system plus plug-ins',cols:3,rows:3,nodes:[{id:'c',t:'CORE<br>general flow',c:'blue',col:1,row:1,big:1},{id:'a',t:'California rules',c:'green',col:0,row:0},{id:'b',t:'New York rules',c:'green',col:2,row:0},{id:'d',t:'Texas rules',c:'green',col:0,row:2},{id:'e',t:'Next state…',c:'amber',col:2,row:2}],edges:[['c','a'],['c','b'],['c','d'],['c','e']],
 cap:['Insurance claims: the core does the general flow.','Each state’s rules live in <b>their own plug-in</b>.']},
{type:'versus',title:'Moving complexity out of the core',mid:'→',
 a:{h:'Without plug-ins',c:'red',items:['A big if/else block per state','Cyclomatic complexity explodes','Every change retests everything']},
 b:{h:'With plug-ins',c:'green',items:['Look up the plug-in in the registry','Call it through the contract','The core stays tiny and stable']},
 cap:[]},
{type:'points',title:'Registry, contracts and connections',items:[
 {t:'Registry',c:'blue',d:'Which plug-ins exist and how to reach them. A map, or an external store.'},
 {t:'Contracts',c:'green',d:'A standard interface every plug-in implements.'},
 {t:'Point-to-point',c:'amber',d:'In-process plug-ins: a method call.'},
 {t:'Remote plug-ins',c:'violet',d:'Reached over REST or messaging, as separate services.'}],
 cap:[]},
SP(['Customisation and extensibility','Simple and low cost','Plug-ins tested in isolation','Fits rule-heavy domains'],['The core can become a bottleneck','Usually one deployment','Limited scalability and fault tolerance','Plug-in dependencies get messy']),
RC(13,[['Two parts','A minimal core and plug-ins.'],['Registry','How the core finds plug-ins.'],['Contracts','One interface for all.'],['Best for','Customisation and product-style software.']])
]});
