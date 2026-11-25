CH({slug:'ch11-leaders-managers',n:'11',part:'Part I · What they found',sub:'Transformational leadership amplifies good practices. It cannot replace them.',end:'Leaders enable. Teams deliver.',scenes:[
{type:'points',title:'Transformational leadership in <b>five dimensions</b>',items:[
 {t:'Vision',d:'Knows where the team and organization are going.'},
 {t:'Inspirational communication',d:'Motivates and inspires, even when things are uncertain.'},
 {t:'Intellectual stimulation',d:'Challenges people to think about old problems in new ways.'},
 {t:'Supportive leadership',d:'Shows care for people’s needs and feelings.'},
 {t:'Personal recognition',d:'Commends good work, in person.'}],
 cap:['Leadership is not about who reports to you.','It is about <b>inspiring and motivating</b> the people around you.']},
{type:'curve',title:'Leaders <b>amplify</b>; they can’t replace',xl:'team practices in place: architecture, CD, Lean →',yl:'chance of high performance →',
 series:[{l:'Strong leadership',d:'Good practices, amplified.',c:'green',pts:line(30,x=>.08+.82*x)},{l:'Weak leadership',d:'The same practices, muted.',c:'red',pts:line(30,x=>.05+.36*x)}],
 marks:[{x:.06,y:.13,t:'Great leader, no practices: still stuck',c:'amber',at:.75,dx:30,dy:-120,w:560}],
 cap:['Leadership and practices multiply each other. (Illustrative model.)','A great leader <b>cannot do it alone</b>.']},
{type:'verdicts',title:'True or false?',yes:'True',no:'False',items:[
 {t:'You need people reporting to you to be a leader',ok:false,why:'Leadership is inspiring those around you.'},
 {t:'Teams in the bottom third for leadership were half as likely to be high performers',ok:true,why:'Weak leadership mutes good practices.'},
 {t:'The top 10% of leaders are guaranteed high performers',ok:false,why:'No more likely than average.'},
 {t:'Leadership works through technical and Lean practices',ok:true,why:'Its effect is indirect.'}]},
{type:'flow',title:'How leadership reaches the bottom line',cols:4,rows:2,nodes:[{id:'l',t:'Transformational<br>leadership',c:'violet',col:0,row:0,big:1},{id:'t',t:'Technical<br>practices',c:'blue',col:1,row:0},{id:'p',t:'Lean product<br>management',c:'blue',col:1,row:1},{id:'d',t:'Delivery<br>performance',c:'green',col:2,row:0},{id:'o',t:'Organizational<br>performance',c:'teal',col:3,row:0}],edges:[['l','t'],['l','p'],['t','d'],['p','d'],['d','o']],
 cap:['Leaders enable teams to re-architect and adopt CD and Lean.','Their influence <b>flows through</b> those practices.']},
{type:'points',title:'What investment can look like',items:[
 {t:'A training budget',d:'With latitude to choose what interests people, and time in the day to use it.'},
 {t:'Internal mini-conferences',d:'Prepared talks plus self-organized open spaces.'},
 {t:'Internal hack days',d:'Teams get together to pay down technical debt.'},
 {t:'Dedicated time',d:'20% time, or days after a release, for new tools and technologies.'}],
 cap:['Managers hold people, budgets and resources.','Investment in DevOps was highly correlated with delivery performance.']},
{type:'points',title:'Three levers for team culture',items:[
 {t:'Cross-functional collaboration',c:'blue',d:'Build trust between teams through kept promises. Encourage lateral moves.'},
 {t:'A climate for learning',c:'green',d:'Blameless post-mortems, so people feel safe trying things.'},
 {t:'Effective use of tools',c:'amber',d:'Let practitioners pick their tools. Monitor the right data and act on it.'}],
 cap:['Game days make teams that rarely meet restore service together.','When a real disaster strikes, they <b>already trust each other</b>.']},
{type:'recap',title:'Chapter 11 on one screen',items:[{t:'Five dimensions',d:'Vision, communication, stimulation, support, recognition.'},{t:'An amplifier',d:'Leadership multiplies good practices.'},{t:'Half as likely',d:'Weak leadership halves the odds of high performance.'},{t:'Not alone',d:'The top 10% of leaders are no likelier to lead high performers.'},{t:'Invest',d:'Training, hack days, mini-conferences, dedicated time.'},{t:'Three levers',d:'Collaboration, learning, tools.'}]}
]});
