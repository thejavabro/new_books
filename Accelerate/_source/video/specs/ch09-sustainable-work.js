CH({slug:'ch09-sustainable-work',n:'9',part:'Part I · What they found',sub:'Deployment pain and burnout: where they come from, and how to remove them.',end:'Fix the environment, not the person.',scenes:[
{type:'points',title:'Why deployments <b>hurt</b>',items:[
 {t:'Not built to deploy',c:'red',d:'Software expects its environment set up just so, and breaks on any deviation.'},
 {t:'Manual changes to production',c:'amber',d:'Typos, stale runbooks and configuration drift turn deploy day into debugging day.'},
 {t:'Handoffs between silos',c:'violet',d:'DBAs, network, sysadmins, infosec, QA and developers: each one a handoff and a wait.'}],
 cap:['The fear engineers feel when pushing to production tells you a lot.','Where deploys hurt most, delivery, business results and culture are <b>all poorest</b>.']},
{type:'stack',title:'The cure',up:1,levels:[
 {t:'One team, smart platform',c:'green',w:.6,d:'Build intelligence into the application and platform so deploying is as simple as possible.'},
 {t:'Reproducible production',c:'blue',w:.8,d:'Rebuild the state of production automatically from version control. No hand edits.'},
 {t:'Design for deployability',c:'violet',w:1,d:'Systems that deploy easily into many environments, tolerate failure and update independently.'}],
 cap:['Each root cause has a matching fix.']},
{type:'quote',text:'If deploys must happen *outside business hours,* the *architecture* has a problem.',by:'With enough investment, even large distributed systems can deploy with zero downtime.'},
{type:'bars',title:'Case: continuous delivery at <b>Bing</b>',max:100,lw:520,items:[{l:'Before continuous delivery',v:38,suf:'%',c:'red'},{l:'After continuous delivery',v:75,suf:'%',c:'green'}],note:'engineers satisfied with work/life balance',
 cap:['No more manual deployment rituals.','Work stress <b>stayed at work</b>.']},
{type:'points',title:'Six risk factors for burnout',items:[
 {t:'Work overload',d:'Demands exceed human limits.'},
 {t:'Lack of control',d:'No influence over decisions that affect your job.'},
 {t:'Insufficient rewards',d:'Too little financial, institutional or social reward.'},
 {t:'Breakdown of community',d:'An unsupportive workplace.'},
 {t:'Absence of fairness',d:'Decisions that are not transparent or even-handed.'},
 {t:'Value conflicts',d:'Your values clash with the organization’s.'}],
 cap:['Christina Maslach found six organizational risk factors that predict burnout.','<b>Every one</b> is something management can change.']},
{type:'versus',title:'Burnout: where to aim the fix',
 a:{h:'Fix the person',c:'red',items:['A resilience workshop and a yoga app','The job stays exactly as it was','The stress comes straight back']},
 b:{h:'Fix the environment',c:'green',items:['Respect and learning, not blame','A clear sense of purpose','Time and room to learn and experiment','Authority over their own work']},
 cap:['Managers often try to fix the individual and leave the job alone.','Maslach’s research: fixing the <b>environment</b> is much more likely to work.']},
{type:'flow',title:'The five factors most linked to burnout',cols:2,rows:5,nodes:[{id:'a',t:'Pathological culture',c:'red',col:0,row:0},{id:'b',t:'Deployment pain',c:'red',col:0,row:1},{id:'c',t:'Effective leaders',c:'green',col:0,row:2},{id:'d',t:'Investment in DevOps',c:'green',col:0,row:3},{id:'e',t:'Organizational performance',c:'green',col:0,row:4},{id:'x',t:'BURNOUT',c:'amber',col:1,row:2,big:1}],edges:[['a','x'],['b','x'],['c','x',1],['d','x',1],['e','x',1]],
 cap:['Two push burnout <b>up</b>. Three push it <b>down</b> (dashed, with a minus).']},
{type:'verdicts',title:'Reduces burnout, or feeds it?',yes:'Reduces',no:'Feeds',items:[
 {t:'Releases every other Saturday night, all hands on call',ok:false,why:'After-hours, high-stakes deploys.'},
 {t:'A lead who caps work in progress and chases blockers',ok:true,why:'Effective leaders lower burnout.'},
 {t:'A blameless review after an outage',ok:true,why:'Learning instead of blame.'},
 {t:'Telling a stressed engineer to “build resilience”',ok:false,why:'Ignores the environment.'},
 {t:'“People first” on the wall; overtime every week',ok:false,why:'Stated and lived values don’t match.'}]},
{type:'recap',title:'Chapter 9 on one screen',items:[{t:'Deployment pain',d:'Goes with poor delivery, results and culture.',c:'red'},{t:'Three roots',d:'Not deployable, manual changes, siloed handoffs.'},{t:'The cure',d:'Deployable systems, reproducible production, smart platforms.'},{t:'Burnout',d:'Six risk factors, all within management’s power.'},{t:'Top correlates',d:'Culture and deploy pain raise it; leaders and investment lower it.'},{t:'Lived values',d:'Alignment counters burnout.'}]}
]});
