CH({slug:'ch27-laws-of-software-architecture',n:'27',part:P3,sub:'The three laws once more, applied to real decisions.',end:'Great designers design.',scenes:[
{type:'bars',title:'First law: shared library or shared service?',max:5,lw:480,note:'who has the advantage',items:[{l:'Mixed languages',v:5,txt:'service',c:'blue'},{l:'Performance',v:5,txt:'library',c:'green'},{l:'Scalability',v:5,txt:'service',c:'blue'},{l:'Fault tolerance',v:5,txt:'library',c:'green'},{l:'Change risk',v:5,txt:'library',c:'green'},{l:'Versioning',v:5,txt:'service',c:'blue'}],
 cap:['Everything is a trade-off.','And you <b>can’t do the analysis once</b> and reuse it everywhere.']},
{type:'versus',title:'Synchronous versus asynchronous',
 a:{h:'Synchronous',c:'blue',items:['Simple and consistent','Immediate errors','Couples availability of both sides','Slower responsiveness']},
 b:{h:'Asynchronous',c:'green',items:['Responsive and fault tolerant','Independent scaling','Harder error handling','Eventual consistency']},
 cap:[]},
{type:'bars',title:'Second law: weigh it for <b>your</b> context',max:10,lw:480,note:'example weights for a pricing-rules module',items:[{l:'Performance',v:9,c:'green'},{l:'Fault tolerance',v:8,c:'green'},{l:'Mixed languages',v:2,c:'blue'},{l:'Versioning',v:3,c:'blue'}],
 cap:['The out-of-context antipattern: listing trade-offs without weighing them.','Change the weights, and <b>the decision flips</b>. Here, the library wins.']},
{type:'curve',title:'Third law: decisions live on a spectrum',xl:'orchestration ← → choreography',yl:'',legend:false,
 series:[{c:'violet',pts:line(20,x=>.5)}],
 marks:[{x:.3,y:.5,t:'this workflow',c:'amber',at:.4,dy:-90,w:300},{x:.72,y:.5,t:'that workflow',c:'green',at:.65,dy:40,w:300}],
 cap:['Most decisions aren’t binary.','Each one sits where <b>its own context</b> puts it.']},
{type:'quote',title:'Parting advice',text:'How do we get great designers? *Great designers design.*',by:'The authors close with a thought from Fred Brooks. Practise, and never stop asking why.'},
RC(27,[['First law','Everything is a trade-off.'],['Second law','Why beats how.'],['Third law','A spectrum, not a switch.'],['Keep practising','Katas, side projects, real systems.']])
]});
