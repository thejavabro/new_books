CH({slug:'ch04-technical-practices',n:'4',part:'Part I · What they found',sub:'Continuous delivery: what it is, what drives it, and what it gives back.',end:'Releasing becomes a routine, on-demand event.',scenes:[
{type:'quote',title:'What continuous delivery is',text:'Get changes of every kind into users’ hands *safely, quickly and sustainably.*',by:'Features, configuration, bug fixes and experiments alike.'},
{type:'points',title:'Five principles at the heart of CD',items:[
 {t:'Build quality in',d:'Stop relying on inspection. Catch problems while they are cheap to fix.'},
 {t:'Work in small batches',d:'Measurable outcomes in small chunks, so nothing worthless gets built.'},
 {t:'Computers do repetition',d:'Automate regression tests and deploys. People solve problems.'},
 {t:'Relentless improvement',d:'High performers are never satisfied. Improvement is part of daily work.'},
 {t:'Everyone is responsible',d:'Throughput, quality and stability are system outcomes, owned together.'}],
 cap:['As Scrum overtook Extreme Programming, many teams dropped the hard technical practices.','The research says that was <b>a mistake</b>.']},
{type:'stack',title:'Three foundations to build first',up:1,levels:[
 {t:'Continuous testing',c:'green',w:.6,d:'Automated tests run all the time, as part of development, not a phase after it.'},
 {t:'Continuous integration',c:'blue',w:.8,d:'Short-lived branches, under a day each. Every merge is built and tested.'},
 {t:'Comprehensive configuration management',c:'violet',w:1,d:'Environments, builds and deploys come entirely from version control.'}],
 cap:['Everything needed to reproduce production lives in version control.']},
{type:'pipeline',title:'The deployment pipeline: a clean commit',stages:[{t:'Commit',d:'A small change enters version control.'},{t:'Build and unit tests',d:'Minutes.'},{t:'Acceptance tests',d:'User journeys checked automatically.'},{t:'Performance tests',d:'Slow queries show up here.'},{t:'Production',c:'green',d:'A routine event, in business hours.'}],
 note:'All green: released in about two hours.',
 cap:['CD links its feedback loops in a row. Every commit flows through.']},
{type:'pipeline',title:'The same pipeline, <b>with a bug</b>',acc:'red',stop:2,stopLabel:'caught here',stages:[{t:'Commit',d:'This one breaks a user journey.'},{t:'Build and unit tests',d:'Passes.'},{t:'Acceptance tests',d:'Fails. The line stops and the developer hears straight away.'},{t:'Performance tests'},{t:'Production',d:'The bug never arrives.'}],
 cap:['Any failure stops the line and goes straight back to the developer.','Fast feedback keeps problems <b>small and cheap</b>.']},
{type:'flow',title:'What drives CD, and what CD <b>drives</b>',cols:3,rows:5,nodes:[{id:'a',t:'Version control',c:'violet',col:0,row:0},{id:'b',t:'Test automation and data',c:'violet',col:0,row:1},{id:'c',t:'Trunk-based development',c:'violet',col:0,row:2},{id:'d',t:'Shift-left security',c:'violet',col:0,row:3},{id:'e',t:'Loose coupling, tool choice',c:'violet',col:0,row:4},{id:'cd',t:'Continuous<br>delivery',c:'blue',col:1,row:2,big:1},{id:'p',t:'Delivery performance',c:'green',col:2,row:0},{id:'q',t:'Generative culture',c:'green',col:2,row:1},{id:'r',t:'Stronger identity',c:'green',col:2,row:2},{id:'s',t:'Deployment pain',c:'red',col:2,row:3},{id:'t',t:'Burnout',c:'red',col:2,row:4}],
 edges:[['a','cd'],['b','cd'],['c','cd'],['d','cd'],['e','cd'],['cd','p'],['cd','q'],['cd','r'],['cd','s',1],['cd','t',1]],
 cap:['The ingredients on the left predict continuous delivery.','CD in turn lifts performance and culture, and <b>reduces</b> pain and burnout.']},
{type:'bars',title:'Less rework, more new work',max:60,items:[{l:'High performers · new work',v:49,suf:'%',c:'green'},{l:'High performers · unplanned work and rework',v:21,suf:'%',c:'green'},{l:'Low performers · new work',v:38,suf:'%',c:'red'},{l:'Low performers · unplanned work and rework',v:27,suf:'%',c:'red'}],lw:640,
 cap:['Unplanned work is failure demand: not doing it right the first time.','CD predicts <b>less of it</b>.']},
{type:'stats',title:'Trunk-based development, in numbers',items:[{v:3,pre:'<',l:'active branches at a time',c:'blue'},{v:1,pre:'<',suf:' day',l:'branch lifetime before merging',c:'amber'},{v:0,l:'code freezes',c:'green'}],
 cap:['This held regardless of team or company size.','Long-lived branches discourage refactoring and communication.']},
{type:'verdicts',title:'Helps or hurts continuous delivery?',yes:'Helps',no:'Hurts',items:[
 {t:'Feature branches that live three weeks',ok:false,why:'Big merges, late feedback.'},
 {t:'System and application config in version control',ok:true,why:'Config mattered even more than code.'},
 {t:'Production settings changed by hand over SSH',ok:false,why:'Nothing is reproducible.'},
 {t:'Reliable tests created and maintained by developers',ok:true,why:'Run on every commit.'}]},
{type:'recap',title:'Chapter 4 on one screen',items:[{t:'CD is a capability',d:'Changes reach users safely, quickly, sustainably.'},{t:'Five principles',d:'Quality in, small batches, automation, improvement, shared responsibility.'},{t:'Foundations',d:'Version control, CI and continuous testing.'},{t:'Payoffs',d:'Better delivery and culture, less pain and burnout.'},{t:'Less rework',d:'49% new work for high performers, 38% for low.'},{t:'Nuances',d:'Config in version control; under 3 branches, under a day.'}]}
]});
