CH({slug:'ch10-layered-architecture',n:'10',part:P2,sub:'Technical layers, closed and open, and the sinkhole to watch for.',end:'A fine place to start. Know when to leave.',scenes:[
{type:'pipeline',title:'Topology: closed layers',tc:'amber',stages:[{t:'Presentation',d:'The request arrives.'},{t:'Business',d:'Rules are applied.'},{t:'Persistence',d:'Data access.'},{t:'Database',c:'green',d:'And back up again.'}],
 cap:['Layered architecture splits code by technical role.','A closed layer means a request must pass through <b>each layer in turn</b>.']},
{type:'versus',title:'Adding an open layer',
 a:{h:'Closed services layer',c:'red',items:['Business must call through it','Even when it has nothing to do','Becomes a pointless pass-through']},
 b:{h:'Open services layer',c:'green',items:['Business can use it or bypass it','Document which layers are open, and why','Or the team will cut corners everywhere']},
 cap:['Suppose you add a shared services layer below business.']},
{type:'bars',title:'The architecture <b>sinkhole</b>',max:100,lw:520,note:'the 80/20 rule of thumb',items:[{l:'Requests doing real work in each layer',v:80,suf:'%',c:'green'},{l:'Simple pass-throughs',v:20,suf:'%',c:'red'}],
 cap:['A sinkhole: requests pass straight through layers that only forward them.','Past about 20%, open some layers or <b>consider another style</b>.']},
{type:'points',title:'Data, cloud, governance and teams',items:[
 {t:'Data',c:'blue',d:'Usually one relational database. It becomes the scaling limit.'},
 {t:'Cloud',c:'amber',d:'Deployable as a unit, but you must scale the whole thing.'},
 {t:'Governance',c:'green',d:'Layer rules as fitness functions.'},
 {t:'Teams',c:'violet',d:'Fits teams organised by skill: UI, backend, DBA.'}],
 cap:[]},
SP(['Simplicity','Low cost','A good default when you are unsure','Fits skill-based teams'],['A three-line change redeploys everything','Scales only as a whole','Domain changes cross every layer','Ratings drop as the monolith grows']),
{type:'versus',title:'When to use it',mid:'?',
 a:{h:'Use when',c:'green',items:['Small, simple apps or websites','Tight budget and time','Still unsure which style fits']},
 b:{h:'Avoid when',c:'red',items:['High scalability or elasticity','Frequent deployments','Fault tolerance matters']}},
RC(10,[['Technical layers','Presentation, business, persistence, database.'],['Closed and open','Open a layer on purpose, and document it.'],['Sinkhole','Watch the pass-through share.'],['Strengths','Simple and cheap.'],['Weaknesses','Deploys and scales as one.']])
]});
