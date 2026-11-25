CH({slug:'ch07-management-practices',n:'7',part:'Part I · What they found',sub:'Lean management, and the surprising result about change approval.',end:'Govern outcomes. Don’t inspect changes.',scenes:[
{type:'points',title:'Lean management: <b>three components</b>',items:[
 {t:'Limit work in progress',c:'blue',d:'Limits that expose obstacles to flow, and lead the team to remove them.'},
 {t:'Visual management',c:'amber',d:'Quality, productivity and work status on display for engineers and leaders alike.'},
 {t:'Monitoring for decisions',c:'green',d:'Application and infrastructure data informs business decisions every day.'}],
 cap:['Lean grew out of Toyota’s approach and its relentless improvement.','The Poppendiecks adapted it to software.']},
{type:'bars',title:'The pieces work <b>together</b>',max:100,lw:560,note:'schematic strength of the link to delivery performance',items:[{l:'WIP limits alone',v:18,txt:'weak',c:'red'},{l:'WIP limits + visual displays',v:52,txt:'better',c:'amber'},{l:'All three, feeding back to teams',v:94,txt:'strong',c:'green'}],
 cap:['WIP limits alone don’t strongly predict delivery performance.','The effect appears when the practices are <b>combined</b>.']},
{type:'versus',title:'WIP limits make obstacles visible',
 a:{h:'No limit',c:'red',items:['Lots started, little finished','The blocked card is easy to ignore','Lead times quietly stretch']},
 b:{h:'Tight WIP limit',c:'green',items:['The board jams at the blocker','The team swarms on the obstacle','The root cause is fixed and flow returns']},
 cap:['The survey asked whether limits <b>expose obstacles</b>, and whether teams remove them.']},
{type:'flow',title:'What Lean management predicts',cols:3,rows:3,nodes:[{id:'a',t:'WIP limits',c:'violet',col:0,row:0},{id:'b',t:'Visual management',c:'violet',col:0,row:1},{id:'c',t:'Monitoring',c:'violet',col:0,row:2},{id:'l',t:'Lean<br>management',c:'blue',col:1,row:1,big:1},{id:'d',t:'Delivery performance',c:'green',col:2,row:0},{id:'e',t:'Generative culture',c:'green',col:2,row:1},{id:'f',t:'Burnout',c:'red',col:2,row:2}],edges:[['a','l'],['b','l'],['c','l'],['l','d'],['l','e'],['l','f',1]],
 cap:['Better delivery, a more generative culture, and <b>less burnout</b>.']},
{type:'verdicts',title:'Change approval: the surprising result',sw:300,items:[
 {t:'External approval: a change board or a manager',ok:false,lab:'Slower',why:'Worse lead time, deploys and recovery. No gain in stability.'},
 {t:'Approval only for high-risk changes',ok:false,lab:'No link',why:'Not correlated either way.'},
 {t:'Peer review: pairing or code review in the team',ok:true,lab:'Faster',why:'The recommended approach.'},
 {t:'No approval process at all',ok:true,lab:'Faster',why:'Still beats external approval.'}],
 cap:['External approval slows everything and makes nothing safer.','The book calls it <b>risk management theater</b>.']},
{type:'pipeline',title:'Segregation of duties, <b>without a change board</b>',tc:'teal',stages:[{t:'Commit',d:'A developer commits a change.'},{t:'Peer review',d:'Someone else approves it. The approval is recorded.'},{t:'Automated pipeline',d:'Built, tested and deployed with no manual edits.'},{t:'Production',c:'green',d:'Auditors get the full trail.'}],
 note:'change ID · source commit · tests run · approver · timestamp',
 cap:['Regulations often require that the author is not the only approver.','Peer review plus an automated pipeline satisfies <b>the letter and the spirit</b>.']},
{type:'verdicts',title:'Lean management, or theater?',yes:'Lean',no:'Theater',items:[
 {t:'A weekly board meeting reviews every production change',ok:false,why:'Delay with no stability gain.'},
 {t:'The WIP limit is hit, so the team swarms on the blocker',ok:true,why:'The limit did its job.'},
 {t:'Error rates and lead time on a screen everyone can see',ok:true,why:'Visual management.'},
 {t:'A manager signs off deploys they have no time to read',ok:false,why:'Box-ticking.'},
 {t:'Product rolls back a feature after seeing latency data',ok:true,why:'Monitoring informs decisions.'}]},
{type:'recap',title:'Chapter 7 on one screen',items:[{t:'Three components',d:'WIP limits, visual displays, monitoring for decisions.'},{t:'Together, not alone',d:'Combined, the effect is strong.'},{t:'Payoffs',d:'Delivery, culture, less burnout.'},{t:'External approval hurts',d:'Slower, and no more stable.',c:'red'},{t:'Do this instead',d:'Peer review plus a deployment pipeline.'},{t:'Auditors are satisfied',d:'Recorded approval and automated deploys.'}]}
]});
