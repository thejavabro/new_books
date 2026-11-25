CH({slug:'ch12-make-the-grade',n:'12',sub:'A second full exercise: a testing system for 200,000 students.',end:'Find the crunch. Justify the choice.',scenes:[
{type:'stats',title:'The crunch',items:[{v:200000,l:'students may submit answers at the same moment',c:'red'},{v:300,l:'database connections allowed',c:'amber'}],
 cap:['Students take a timed, two-hour test. Each answer is graded and stored centrally.','Look for the numbers that <b>don’t fit</b>.']},
{type:'versus',title:'Write directly, or queue it?',
 a:{h:'Write directly',c:'red',items:['Every answer needs a connection','300 are available','Answers pile up and get lost']},
 b:{h:'Persistent queue',c:'green',items:['Answers wait safely in the queue','Grading drains it at its own pace','Acknowledge only after saving: nothing is lost']},
 cap:['If the grading service crashes mid-test, the queue still holds the answers.']},
{type:'pipeline',title:'An answer’s journey',tc:'green',stages:[{t:'Student submits',d:'And moves straight to the next question.'},{t:'Persistent queue',d:'Holds the answer.'},{t:'Grading',d:'Marks it automatically.'},{t:'Database',c:'green',d:'Saved, then acknowledged.'}],
 cap:['The student never waits for the database.']},
{type:'points',title:'Three questions: microservices or event-driven?',items:[
 {t:'Many events?',c:'blue',d:'Few things here “just happen”. That leans away from event-driven.'},
 {t:'Is data shared?',c:'amber',d:'Answers, tests and students split cleanly. That suits microservices.'},
 {t:'Sync or async?',c:'green',d:'Much of it is request and response. That suits microservices.'}],
 cap:['Test-taking must be fast and elastic. Admin and reporting don’t.','So a <b>distributed</b> style makes sense.']},
{type:'versus',title:'The two candidates',
 a:{h:'Microservices',c:'blue',items:['Scale the test-taking services alone','Fits the request/response workflow','Small test scopes','Sync calls add latency: needs caching']},
 b:{h:'Event-driven',c:'amber',items:['Scale event processors alone','Async and fast','Few real events in this domain','Async flows are hard to test']},
 cap:['One reasonable choice: <b>microservices</b>, with async pieces where they help.']},
{type:'points',title:'The decision has consequences',items:[
 {t:'Teams must reorganise',c:'red',d:'Cross-functional teams, working in parallel.'},
 {t:'In-memory caching',c:'amber',d:'Student lists, questions and answer keys, for speed.'},
 {t:'More infrastructure',c:'violet',d:'A container orchestrator and a stronger pipeline.'}],
 cap:['An ADR with real consequences.']},
{type:'quote',text:'No right or wrong answers, only *justified* ones.',by:'Chose event-driven, and can explain the sync parts and testing? That is valid too.'},
{type:'recap',title:'Chapter 12 on one screen',items:[{t:'Find the crunch',d:'200,000 against 300.'},{t:'Implicit can drive',d:'Security, with answer keys at stake.'},{t:'Logical first',d:'Components before services.'},{t:'Count sync vs. async',d:'It points toward or away from EDA.'},{t:'Hybrids are fine',d:'Microservices with async queues.'},{t:'Record it',d:'An ADR with consequences.'}]}
]});
