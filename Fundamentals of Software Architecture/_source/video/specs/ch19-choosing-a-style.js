CH({slug:'ch19-choosing-a-style',n:'19',part:P2,sub:'Weighing characteristics, data and teams to pick a style.',end:'It always depends.',scenes:[
{type:'points',title:'Architecture fashion shifts',items:[
 {t:'Observations from the past',d:'New styles fix pain from old ones.'},
 {t:'Ecosystem changes',d:'Tools appear and vanish.'},
 {t:'New capabilities',d:'Containers changed the paradigm.'},
 {t:'Acceleration',d:'Change keeps speeding up.'},
 {t:'Domain changes',d:'Businesses merge and pivot.'},
 {t:'External factors',d:'Licensing, regulations, vendors.'}],
 cap:['Preferred styles change over time. The book names the forces.']},
{type:'stack',title:'Three questions',levels:[
 {t:'One quantum or many?',c:'blue',w:1,d:'One set of characteristics points to a monolith.'},
 {t:'Where does the data live?',c:'amber',w:1,d:'Existing databases shape what is possible.'},
 {t:'Sync or async by default?',c:'green',w:1,d:'Prefer synchronous, and go async when necessary.'}],
 cap:[]},
{type:'points',title:'Decision criteria',items:[
 {t:'Domain',d:'Know which characteristics really matter.'},
 {t:'Characteristics',d:'The analysis drives everything.'},
 {t:'Data architecture',d:'Constraints from existing data.'},
 {t:'Organisational factors',d:'Budget, vendor costs, mergers.'},
 {t:'Process and teams',d:'DevOps maturity, team topology.'},
 {t:'Isomorphism',d:'Some problems fit a style’s shape.'}],
 cap:[]},
{type:'versus',title:'Monolith case study: Silicon Sandwiches',mid:'or',
 a:{h:'Modular monolith',c:'green',items:['One deployment with domain modules','Customisation inside the relevant module','Simple and cheap']},
 b:{h:'Microkernel',c:'blue',items:['The core handles ordering','Plug-ins carry franchise customisations','Fits the domain’s shape']},
 cap:['Both are monoliths: one set of characteristics serves the whole system.']},
{type:'flow',title:'Distributed case study: Going, Going, Gone',cols:3,rows:2,nodes:[{id:'b',t:'Bidder<br>feedback',c:'blue',col:0,row:0},{id:'a',t:'Auctioneer<br>feedback',c:'amber',col:1,row:0},{id:'s',t:'Bid<br>streaming',c:'green',col:2,row:0},{id:'x',t:'Different needs<br>per part',c:'violet',col:1,row:1,big:1}],edges:[['b','x'],['a','x'],['s','x']],
 cap:['Different parts need different levels of scale, reliability and performance.','Several quanta point to a <b>distributed</b> style.']},
RC(19,[['Fashion shifts','Know why styles change.'],['Three questions','Quanta, data, communication.'],['Criteria','Domain, data, organisation, teams.'],['Isomorphism','Match the problem’s shape.']])
]});
