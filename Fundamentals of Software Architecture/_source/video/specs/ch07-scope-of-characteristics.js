CH({slug:'ch07-scope-of-characteristics',n:'7',part:P1,sub:'The architecture quantum: the smallest piece that can have its own characteristics.',end:'One set of characteristics, or several?',scenes:[
{type:'points',title:'The architecture quantum',items:[
 {t:'Independently deployable',c:'blue',d:'It ships on its own.'},
 {t:'High functional cohesion',c:'green',d:'It does one meaningful thing.'},
 {t:'High static coupling',c:'amber',d:'Everything it needs to run is wired in.'},
 {t:'Synchronous dynamic coupling',c:'violet',d:'Sync calls bind it to whatever it waits on.'}],
 cap:['In practice: the smallest piece that can have <b>its own set</b> of characteristics.']},
{type:'bars',title:'How many quanta?',max:3,lw:560,items:[{l:'Monolith, one database',v:1,c:'amber'},{l:'Three services, one shared database',v:1,c:'red'},{l:'Three services, each with its own data',v:3,c:'green'}],
 cap:['Services deployed separately but sharing a database go down together.','Static coupling to the shared database makes them <b>one quantum</b>.']},
{type:'versus',title:'Static and dynamic coupling',
 a:{h:'Synchronous call',c:'red',items:['Bid Capture waits for Bid Tracker','They share availability and performance','For the call, they behave as one quantum']},
 b:{h:'Asynchronous message',c:'green',items:['Bid Capture fires and forgets','A queue decouples them','Each keeps its own characteristics']},
 cap:['Static coupling is how things are wired. Dynamic coupling is how they call each other.']},
{type:'points',title:'Kata: Going Green',items:[
 {t:'Public-facing',c:'blue',d:'Kiosks and website at unpredictable times: scale and stay up.'},
 {t:'Device assessment',c:'green',d:'New phone models constantly: agility is the driver.'},
 {t:'Back office',c:'amber',d:'Money and audit trails: security and data integrity.'}],
 cap:['Three clusters with different needs strongly suggest <b>three quanta</b>.']},
{type:'versus',title:'Scope drives the first big choice',mid:'?',
 a:{h:'One set of characteristics',c:'amber',items:['The whole system needs the same things','A monolith can serve it','Simpler and cheaper']},
 b:{h:'Several sets',c:'violet',items:['Parts need different things','One set would over- or under-serve','Points to a distributed architecture']},
 cap:['Quantum analysis gives you a simple first decision.']},
RC(7,[['Quantum','Smallest unit with its own characteristics.'],['Static coupling','Shared databases, libraries, infrastructure.'],['Dynamic coupling','Sync binds; async loosens.'],['Scope first','One set: monolith. Several: distributed.']])
]});
