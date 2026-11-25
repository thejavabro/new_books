CH({slug:'ch08-component-based-thinking',n:'8',part:P1,sub:'Designing the logical building blocks before deciding how they deploy.',end:'Logical first. Then iterate.',scenes:[
{type:'versus',title:'Logical versus physical architecture',mid:'→',
 a:{h:'Logical',c:'violet',items:['What the system does','Components as namespaces or directories','Design this view first']},
 b:{h:'Physical',c:'blue',items:['How it is deployed','Services, databases, messaging','The style decides this mapping later']},
 cap:['Many teams skip the logical view and get lost.']},
{type:'cycle',title:'The component identification loop',center:'repeat',items:[
 {t:'Identify',d:'Find initial components.'},
 {t:'Assign',d:'Map requirements to them.'},
 {t:'Analyse roles',d:'Check responsibilities.'},
 {t:'Analyse characteristics',d:'Apply the -ilities.'},
 {t:'Restructure',d:'Split or merge, then go again.'}],
 cap:['You don’t get components right the first time.']},
{type:'versus',title:'The entity trap',
 a:{h:'One component per table',c:'red',items:['Each one called a Manager','Placing an order calls four managers','Business logic leaks everywhere','Really an ORM, not an architecture']},
 b:{h:'Workflow-based',c:'green',items:['Components named after what they do','Cohesion is about behaviour','A workflow change stays in one component']},
 cap:['A tempting shortcut that gives you a CRUD layer, not an architecture.']},
{type:'bars',title:'Coupling and the Law of Demeter',max:4,lw:620,note:'efferent coupling of Order Placement',items:[{l:'Order Placement reorders stock itself',v:4,c:'red'},{l:'Inventory decides on reordering',v:3,c:'green'}],
 cap:['A component should know as little as possible about others.','Total coupling did not change, only <b>who holds it</b>. Still a trade-off.']},
{type:'points',title:'Case study: Going, Going, Gone',items:[
 {t:'Bidder',c:'blue',d:'Views the live video stream. Places a bid.'},
 {t:'Auctioneer',c:'amber',d:'Enters live bids. Marks an item as sold.'},
 {t:'System',c:'green',d:'Starts the auction. Takes payment. Tracks bidder activity.'}],
 cap:['An online auction with live video. Components come from actors and their actions.','The result: Bid Capture, Bid Tracker, Auction Session, Video Streamer, Payment…']},
RC(8,[['Logical first','What it does, before how it deploys.'],['Iterate','Identify, assign, analyse, restructure.'],['Avoid the entity trap','Name behaviour, not tables.'],['Least knowledge','Reduce what each component knows.']])
]});
