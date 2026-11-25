CH({slug:'ch22-analyzing-risk',n:'22',part:P3,sub:'A simple matrix, a shared exercise, and a view stakeholders can read.',end:'Find risk together. Show the trend.',scenes:[
{type:'bars',title:'The risk matrix: impact × likelihood',max:9,lw:520,items:[{l:'Low impact, low likelihood',v:1,c:'green'},{l:'High impact, low likelihood',v:3,c:'amber'},{l:'Medium impact, high likelihood',v:6,c:'red'},{l:'High impact, high likelihood',v:9,c:'red'}],note:'1–2 low · 3–4 medium · 6–9 high',
 cap:['Rate each from 1 to 3, impact first, then multiply.']},
{type:'bars',title:'A risk assessment, totalled',max:20,lw:520,note:'availability + scalability + security + data integrity',items:[{l:'Customer registration',v:13,c:'amber'},{l:'Catalog checkout',v:8,c:'green'},{l:'Order fulfilment',v:19,c:'red'}],
 cap:['Components down one side, characteristics across the top.','For stakeholders, filter to the high risks and show the <b>direction</b>.']},
{type:'pipeline',title:'Risk storming',stages:[{t:'Identify',d:'Each person marks risks on the diagram, alone.'},{t:'Consensus',d:'Compare the notes. Discuss the disagreements.'},{t:'Mitigate',c:'green',d:'Agree changes, and weigh their cost.'}],
 note:'Focus each session on one dimension, such as availability.',
 cap:['No single architect can see every risk.']},
{type:'flow',title:'Case: a nurse-diagnostics hotline',cols:3,rows:2,nodes:[{id:'n',t:'Nurses',c:'blue',col:0,row:0},{id:'d',t:'Diagnostics engine',c:'red',col:1,row:0,big:1},{id:'m',t:'External medical<br>records',c:'amber',col:2,row:0},{id:'f',t:'Cluster or cache it',c:'green',col:1,row:1},{id:'g',t:'Add fallbacks',c:'green',col:2,row:1}],edges:[['n','d'],['d','m'],['f','d'],['g','m']],
 cap:['Risk storming on availability finds a single point of failure.','Then the cost of each fix is weighed against the risk.']},
RC(22,[['Risk matrix','Impact times likelihood.'],['Assessments','Filter and show the trend.'],['Risk storming','Identify, agree, mitigate.'],['Weigh the cost','With stakeholders.']])
]});
