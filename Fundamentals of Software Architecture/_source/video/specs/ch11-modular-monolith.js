CH({slug:'ch11-modular-monolith',n:'11',part:P2,sub:'One deployment, partitioned by domain.',end:'Domain modules. One deployment.',scenes:[
{type:'points',title:'Topology: modules by domain',items:[
 {t:'Order',c:'blue',d:'Everything for order behaviour.'},
 {t:'Payment',c:'amber',d:'Everything for payment behaviour.'},
 {t:'Inventory',c:'green',d:'Everything for inventory behaviour.'},
 {t:'Shipping',c:'violet',d:'Everything for shipping behaviour.'}],
 cap:['The simplicity of one deployment, partitioned by <b>domain</b> instead of layer.','A change to order rules usually stays inside the Order module.']},
{type:'versus',title:'Monolithic or modular structure',
 a:{h:'Monolithic structure',c:'amber',items:['One repo, modules as namespaces','Easiest to start','Boundaries held by discipline and fitness functions']},
 b:{h:'Modular structure',c:'blue',items:['Each module built as its own artifact','Stronger boundaries, own versions','More build and dependency management']},
 cap:['Two ways to build the modules.']},
{type:'points',title:'How modules talk to each other',items:[
 {t:'Direct calls',c:'red',d:'Fast to write, slow to untangle. A ball of mud with good intentions.'},
 {t:'Interface or API',c:'green',d:'Each module exposes a narrow contract. Internals stay hidden.'},
 {t:'Mediator',c:'blue',d:'A coordinator calls the modules, so they never call each other.'}],
 cap:['The danger: modules quietly reach into each other.']},
SP(['Domain partitioning','Simple and cheap to run','Changes stay inside a module','A stepping stone to distributed styles'],['Boundaries erode without governance','One set of operational characteristics','Scales only as a whole','Code reuse across modules is harder']),
RC(11,[['Domain + monolithic','Modules by business area.'],['Two structures','Namespaces, or separate artifacts.'],['Communication','Prefer contracts to direct calls.'],['Governance','Guard the boundaries.']])
]});
