CH({slug:'ch06-infosec',n:'6',part:'Part I · What they found',sub:'Shift security left: build it into daily work instead of inspecting at the end.',end:'Security is everybody’s job.',scenes:[
{type:'units',title:'Outnumbered: <b>1 to 10 to 100</b>',cols:15,groups:[{n:1,l:'infosec person',c:'red'},{n:10,l:'infrastructure and operations people',c:'amber'},{n:100,l:'developers',c:'blue'}],
 cap:['One industry estimate for large companies.','One reviewer at the end of the line <b>cannot catch it all</b>.']},
{type:'pipeline',title:'The old way: security as the last gate',acc:'red',stop:3,stopLabel:'found late',stages:[{t:'Design',d:'No security input.'},{t:'Develop',d:'Common risks unknown.'},{t:'Test',d:'Features only.'},{t:'Security review',d:'Problems surface when changes are painful and expensive.'},{t:'Production'}],
 cap:['Security teams are often tiny, and called in only at the end.']},
{type:'pipeline',title:'<b>Shifting left</b>: security at every step',tc:'green',stages:[{t:'Design',c:'green',d:'Infosec helps shape the design.'},{t:'Develop',c:'green',d:'Preapproved libraries and toolchains.'},{t:'Test',c:'green',d:'Security tests run on every commit.'},{t:'Demo',c:'green',d:'Infosec attends and gives feedback.'},{t:'Production',c:'green',d:'No bottleneck at the end.'}],
 cap:['Move security from a separate gate into every step of delivery.','Problems surface early, while they are <b>cheap to fix</b>.']},
{type:'curve',title:'Why end-of-line reviews can’t keep up',xl:'deployments per week →',yl:'changes waiting for review →',
 series:[{l:'Review gate',d:'A fixed-size team reviewing every change. The queue grows with deploy rate.',c:'red',pts:line(40,x=>x<.2?.04:.04+.9*Math.pow((x-.2)/.8,1.5))},{l:'Security built in',d:'Checks are part of the team’s daily work, so nothing queues.',c:'green',pts:line(40,x=>.05)}],
 cap:['Infosec does not have the capacity to review every change when deploys are frequent. (Illustrative.)']},
{type:'bars',title:'Security built in makes teams <b>faster</b>',max:100,lw:440,note:'relative; low performers = 100',items:[{l:'Low performers',v:100,c:'red'},{l:'High performers',v:50,c:'green'}],
 cap:['Time spent fixing security issues.','High performers spent <b>half as much</b>.']},
{type:'units',title:'Case: compliance as a platform',cols:25,nw:190,groups:[{n:269,l:'controls inherited from the platform',c:'teal'},{n:56,l:'left for the app team to implement',c:'amber'}],
 cap:['A US federal system at moderate impact has 325 security controls to document.','On cloud.gov, built by a small team at 18F, most are implemented <b>once, for everyone</b>.']},
{type:'points',title:'What shifting left looks like',items:[
 {t:'Reviews that don’t throttle',d:'Every major feature gets a security review, done without slowing development.'},
 {t:'Infosec across the lifecycle',d:'Experts help with design, attend demos and put security into the automated tests.'},
 {t:'Make the right thing easy',d:'Preapproved libraries, packages, toolchains and processes.'}],
 cap:['The security team turns from <b>inspector</b> into <b>enabler</b>.']},
{type:'verdicts',title:'Shifting left, or not?',yes:'Shift left',no:'Not',sw:240,items:[
 {t:'A security engineer joins the design session for a payments feature',ok:true,why:'In from the start.'},
 {t:'Every release waits in a queue for central sign-off',ok:false,why:'A bottleneck that grows with deploy rate.'},
 {t:'The team uses a preapproved, maintained crypto library',ok:true,why:'The right thing is the easy thing.'},
 {t:'Security tests for authentication run on every commit',ok:true,why:'Part of the pipeline.'}]},
{type:'recap',title:'Chapter 6 on one screen',items:[{t:'The old way',d:'A thin team inspecting nearly finished systems.',c:'red'},{t:'Shift left',d:'Infosec in design, demos and automated tests.'},{t:'Make the right thing easy',d:'Preapproved libraries and toolchains.'},{t:'Inspector to enabler',d:'Developers get the means to build security in.'},{t:'Faster and safer',d:'50% less time on remediation.'},{t:'Everyone’s job',d:'DevSecOps, Rugged DevOps.'}]}
]});
