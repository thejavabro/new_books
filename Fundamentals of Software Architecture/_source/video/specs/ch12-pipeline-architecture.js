CH({slug:'ch12-pipeline-architecture',n:'12',part:P2,sub:'Pipes and filters: one-way processing in small, reusable steps.',end:'Each filter does one thing.',scenes:[
{type:'pipeline',title:'Pipes and filters',stages:[{t:'Producer',d:'The starting point. Outbound only.'},{t:'Transformer',d:'Changes the input and forwards it. Like map.'},{t:'Tester',d:'Checks criteria and optionally forwards. Like filter.'},{t:'Consumer',c:'green',d:'The end point: a database or a screen.'}],
 cap:['Filters are self-contained and stateless. Pipes are one-way.','Think of Unix commands chained together.']},
{type:'pipeline',title:'Example: service telemetry',tc:'teal',stages:[{t:'Capture',d:'Services stream telemetry to Kafka.'},{t:'Duration filter',d:'Is this a duration metric?'},{t:'Uptime filter',d:'Or an uptime metric?'},{t:'Calculate',d:'Transform the values.'},{t:'Store',c:'green',d:'Persist the result.'}],
 cap:['Each filter is easy to reuse and recombine.']},
SP(['Simple and cheap','Better modularity than layered','Filters are reusable','Easy to understand'],['Still a monolith: one deployment','No elasticity','One fault can stop the whole pipeline','Poor for back-and-forth interaction']),
{type:'versus',title:'When to use it',mid:'?',
 a:{h:'Use when',c:'green',items:['One-directional processing','ETL, EDI, data ingestion','Compilers, document processing']},
 b:{h:'Avoid when',c:'red',items:['Back-and-forth interaction','High scalability or fault tolerance','Many complex conditional paths']}},
RC(12,[['Pipes and filters','One-way, stateless steps.'],['Four filter types','Producer, transformer, tester, consumer.'],['Strengths','Simple, modular, reusable.'],['Weaknesses','One deployment, no elasticity.']])
]});
