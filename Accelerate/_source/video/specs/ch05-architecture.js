CH({slug:'ch05-architecture',n:'5',part:'Part I · What they found',sub:'It is not the technology. It is whether teams can test and deploy on their own.',end:'Ask about outcomes, not technology.',scenes:[
{type:'verdicts',title:'Does the type of system matter?',yes:'No link',no:'Lower',sw:220,items:[
 {t:'Custom software built by an outsourcing partner',ok:false,why:'Linked to low performance.'},
 {t:'Working on mainframe systems',ok:false,why:'Linked to low performance.'},
 {t:'Integrating with a mainframe',ok:true,why:'Made no difference.'},
 {t:'Systems of record, where consistency is critical',ok:true,why:'Made no difference.'},
 {t:'Packaged software',ok:true,why:'High performance is possible.'}],
 cap:['Can CD work beyond web companies? The team checked many kinds of system.','Almost none of them mattered. <b>Focus on characteristics, not technology.</b>']},
{type:'points',title:'Deployability and testability',items:[
 {t:'Test without an integrated environment',c:'blue',d:'“We can do most of our testing on demand, on our own.”'},
 {t:'Deploy independently',c:'green',d:'“We can release our application regardless of the services it depends on.”'}],
 cap:['Two statements separated high performers from everyone else.','Together they were the <b>biggest contributor</b> to continuous delivery in 2017.']},
{type:'points',title:'A loosely coupled team can…',items:[
 {t:'Change its design',d:'Without permission from anyone outside the team.'},
 {t:'Finish its work',d:'Without coordinating with people outside the team.'},
 {t:'Deploy on demand',d:'Regardless of the services it depends on.'},
 {t:'Test on demand',d:'Without an integrated test environment.'},
 {t:'Deploy in business hours',d:'With negligible downtime.'}],
 cap:['Bigger even than test and deployment automation.']},
{type:'versus',title:'Conway’s law, and the inverse maneuver',mid:'→',
 a:{h:'Teams by skill',c:'amber',items:['A UI team, a backend team, a DBA team','Every feature crosses every team','The system mirrors the handoffs']},
 b:{h:'Cross-functional teams',c:'green',items:['One team per product area','Design, build, test, deploy and run their part','Bounded contexts and APIs between teams']},
 cap:['Systems end up mirroring the communication structure that builds them.','So <b>shape your teams</b> to get the architecture you want.']},
{type:'curve',title:'Loose coupling lets you <b>scale</b>',xl:'number of developers →',yl:'deploys per developer per day →',
 series:[{l:'High performers',d:'Deploy more per developer as they grow.',c:'green',pts:line(40,x=>.3+.6*Math.pow(x,1.6))},{l:'Medium performers',d:'Stay flat.',c:'amber',pts:line(40,x=>.26)},{l:'Low performers',d:'Slow down as people are added.',c:'red',pts:line(40,x=>.22-.16*x)}],
 cap:['Orthodoxy says each added developer lowers everyone’s output.','For high performers the data showed the opposite. (Shape of the finding, not exact data.)']},
{type:'flow',title:'Let teams choose their tools',cols:4,rows:2,nodes:[{id:'a',t:'Loosely coupled<br>architecture',c:'violet',col:0,row:0},{id:'b',t:'Teams choose<br>their tools',c:'violet',col:0,row:1},{id:'c',t:'Continuous<br>delivery',c:'blue',col:1,row:0},{id:'d',t:'Delivery<br>performance',c:'green',col:2,row:0,big:1},{id:'e',t:'Organizational<br>performance',c:'teal',col:3,row:0}],edges:[['a','c'],['b','c'],['c','d'],['b','d'],['d','e']],
 cap:['When teams pick what suits their problem, performance improves.','Standardize by being <b>the best option</b>, not by decree.']},
{type:'verdicts',title:'Architects: right question or wrong question?',yes:'Right',no:'Wrong',items:[
 {t:'“Microservices or serverless? Kubernetes or Mesos?”',ok:false,why:'Says nothing about outcomes.'},
 {t:'“Can team X test and release without waiting on team Y?”',ok:true,why:'Independence is the point.'},
 {t:'“Do engineers find the platform makes work easier?”',ok:true,why:'Serve the people who build and run it.'},
 {t:'“Which deploys still need a weekend outage window?”',ok:true,why:'Finds the coupling to remove.'}]},
{type:'recap',title:'Chapter 5 on one screen',items:[{t:'System type barely matters',d:'Only outsourced custom software and mainframe work lagged.'},{t:'Test and deploy independently',d:'The top contributor to CD in 2017.'},{t:'Teams mirror systems',d:'Use the inverse Conway maneuver.'},{t:'Scale without slowing',d:'High performers deploy more per developer as they grow.'},{t:'Tool choice helps',d:'Teams that pick their tools do better.'},{t:'Outcomes over technology',d:'Architects serve the engineers.'}]}
]});
