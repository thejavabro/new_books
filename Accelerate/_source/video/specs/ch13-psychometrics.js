CH({slug:'ch13-psychometrics',n:'13',part:'Part II · The research',sub:'How a survey can measure something you cannot see, and how you know it worked.',end:'All measures are proxies. Test them.',scenes:[
{type:'verdicts',title:'What’s wrong with this survey item?',sw:300,items:[
 {t:'“Don’t you agree our new release process is a big improvement?”',ok:false,lab:'Leading',why:'It pushes toward “yes”.'},
 {t:'“Are failures reported to you by customers and the operations center?”',ok:false,lab:'Two in one',why:'A “yes” could mean either, or both.'},
 {t:'“How mature is your SDLC’s CAB-gated CI posture?”',ok:false,lab:'Jargon',why:'People will read it differently, or not at all.'}],
 cap:['Many people’s only exposure is to push polls, surveys with an obvious agenda.','And many well-meaning surveys are written with <b>no training</b>.']},
{type:'flow',title:'Measuring what you can’t measure directly',cols:2,rows:4,nodes:[{id:'a',t:'Information is actively sought',c:'violet',col:0,row:0},{id:'b',t:'Failures are learning opportunities',c:'violet',col:0,row:1},{id:'c',t:'Responsibilities are shared',c:'violet',col:0,row:2},{id:'d',t:'New ideas are welcomed',c:'violet',col:0,row:3},{id:'x',t:'CULTURE<br>latent construct',c:'green',col:1,row:1,big:1}],edges:[['a','x'],['b','x'],['c','x'],['d','x']],
 cap:['You can read a room’s temperature directly. You can’t take a culture’s.','A <b>latent construct</b> measures something hidden through several survey items.']},
{type:'points',title:'“Is your culture good?” Three hidden problems',items:[
 {t:'“your”',c:'amber',d:'Your team, your department, the whole company?'},
 {t:'“culture”',c:'blue',d:'Trust, fun, information flow, how failure is handled?'},
 {t:'“good”',c:'violet',d:'Good how? And “like” measures your taste, not the culture.'}],
 cap:['Benefit one: a construct <b>forces you to define the thing</b> first.']},
{type:'points',title:'Tests that the items hang together',items:[
 {t:'Convergent validity',c:'blue',d:'Items meant to measure the same concept really are related.'},
 {t:'Discriminant validity',c:'amber',d:'Items not meant to relate to the concept really aren’t.'},
 {t:'Reliability',c:'green',d:'People read and interpret the items the same way.'}],
 cap:['Benefit two: several items allow tests a single question never does.','Pass all three, and the construct can be used in analysis.']},
{type:'versus',title:'When the tests surprise you',mid:'→',
 a:{h:'Pilot, about 20 people',c:'amber',items:['Five items on how teams learn of failures','They load together as one construct']},
 b:{h:'Full dataset',c:'green',items:['The tests say: two constructs','Failures reported by <b>people</b>','Failures reported by <b>systems</b>, which predicts performance']},
 cap:['Surprises are useful: the split revealed something real.']},
{type:'curve',title:'One bad source <b>can’t fool you</b>',xl:'time →',yl:'metric value →',
 series:[{l:'The one number you watch',d:'A bug in the metrics code flattens it. The dashboard says all is well.',c:'blue',pts:line(40,x=>x<.5?.3+.04*Math.sin(x*40):.3)},{l:'Errors',d:'Jumps.',c:'red',pts:line(40,x=>x<.5?.2+.03*Math.sin(x*33):.2+.6*Math.min(1,(x-.5)*5))},{l:'Support tickets',d:'Jumps too. The disagreement exposes the broken metric.',c:'amber',pts:line(40,x=>x<.55?.12+.03*Math.cos(x*29):.12+.5*Math.min(1,(x-.55)*5))}],
 cap:['Benefit three applies to system data too.','Watch several related numbers and the odd one out <b>stands out</b>.']},
{type:'recap',title:'Chapter 13 on one screen',items:[{t:'Bad surveys exist',d:'Leading, double-barrelled and unclear items.',c:'red'},{t:'Latent constructs',d:'A hidden concept, measured through several items.'},{t:'Define first',d:'Say exactly what you mean.'},{t:'Test the measure',d:'Validity and reliability before analysis.'},{t:'Surprises are useful',d:'Failure notification split in two.'},{t:'Applies to logs too',d:'Several metrics catch a broken one.'}]}
]});
