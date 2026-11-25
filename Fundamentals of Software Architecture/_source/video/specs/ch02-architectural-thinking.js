CH({slug:'ch02-architectural-thinking',n:'2',part:P1,sub:'Seeing with an architect’s eyes: breadth, trade-offs and business drivers.',end:'Breadth, trade-offs, and hands on the code.',scenes:[
{type:'versus',title:'Architecture versus design',mid:'→',
 a:{h:'The old picture',c:'red',items:['The architect hands a document down','Then walks away','Nothing flows back from the code']},
 b:{h:'Two-way collaboration',c:'green',items:['Architect and developers work together','Decisions are tested against the code','Feedback changes the architecture']},
 cap:['Decisions do not survive contact with the code when nothing flows back.']},
{type:'stack',title:'Strategic or tactical: a spectrum',levels:[
 {t:'How many people are involved?',c:'blue',w:1,d:'More people points to architecture.'},
 {t:'Long-term or short-term?',c:'amber',w:1,d:'Long-lived decisions are strategic.'},
 {t:'How much effort to decide?',c:'violet',w:1,d:'More effort, more architectural.'}],
 cap:['Renaming a class is tactical. Splitting into microservices is strategic.','Most decisions land <b>somewhere between</b>.']},
{type:'stack',title:'Technical breadth beats depth',levels:[
 {t:'Stuff you know',c:'green',w:.4,d:'Daily expertise. Expensive to keep large.'},
 {t:'Stuff you know you don’t know',c:'amber',w:.7,d:'<b>The architect’s most valuable layer.</b> A wide middle gives more options.'},
 {t:'Stuff you don’t know you don’t know',c:'muted',w:1,d:'The best solution may live here, and you cannot pick it.'}],
 cap:['A developer grows the top of the pyramid. An architect grows the middle.']},
{type:'points',title:'Build a personal technology radar',items:[
 {t:'Adopt',c:'green',d:'Things you are confident in and actively use.'},
 {t:'Trial',c:'blue',d:'Worth real use in a low-risk setting.'},
 {t:'Assess',c:'amber',d:'Worth reading about before committing time.'},
 {t:'Hold',c:'red',d:'Proceed with caution. Stop feeding the hype.'}],
 cap:['Four rings of confidence, so you invest deliberately instead of following hype.']},
{type:'versus',title:'Analysing trade-offs: topic or queues?',
 a:{h:'One topic',c:'amber',items:['Add a consumer without touching the producer','Producer and consumers decoupled','Anyone can listen in','One contract for everyone']},
 b:{h:'A queue per consumer',c:'blue',items:['The producer knows every consumer','Each can have its own contract','Monitor and scale each queue','Adding a consumer changes the producer']},
 cap:['An auction system sends bids to three consumers. Neither option is “best”.','<b>It depends</b> on what the business needs most.']},
{type:'verdicts',title:'Staying hands-on without becoming a bottleneck',yes:'Do',no:'Avoid',items:[
 {t:'Own code on the critical path',ok:false,why:'The team ends up waiting.'},
 {t:'Build proofs of concept',ok:true,why:'Compare options with real code.'},
 {t:'Tackle technical debt and bugs',ok:true,why:'Low risk, keeps you in the code.'},
 {t:'Write automation and fitness functions',ok:true,why:'Helps everyone.'}],
 cap:['Watch for the frozen caveman: one bad experience driving every design.']},
RC(2,[['Collaborate','Architecture and design flow both ways.'],['A spectrum','People, lifespan and effort place a decision.'],['Breadth','Grow what you know you don’t know.'],['Radar','Adopt, trial, assess, hold.'],['Trade-offs','It always depends.'],['Hands-on','Code without blocking the team.']])
]});
