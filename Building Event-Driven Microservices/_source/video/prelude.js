/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Building Event-Driven Microservices',KICK='Building Event-Driven Microservices';
const CREDIT='Building Event-Driven Microservices, 2nd ed. · Adam Bellemare · original visual summary';
const ORDER=[['ch01-why-event-driven','Chapter 1','Why Event-Driven Microservices'],['ch02-events-and-streams','Chapter 2','Events and Event Streams'],['ch03-event-driven-microservices','Chapter 3','Event-Driven Microservice Basics'],['ch04-schemas-contracts','Chapter 4','Schemas and Data Contracts'],['ch05-designing-events','Chapter 5','Designing Events'],['ch06-integrating-existing','Chapter 6','Integrating with Existing Systems'],['ch07-denormalization','Chapter 7','Denormalization and Eventification'],['ch08-stateful','Chapter 8','Stateful Microservices'],['ch09-deterministic','Chapter 9','Deterministic Stream Processing'],['ch10-workflows','Chapter 10','Building Workflows'],['ch11-basic-producer-consumer','Chapter 11','Basic Producer and Consumer'],['ch12-heavyweight','Chapter 12','Heavyweight Frameworks'],['ch13-lightweight','Chapter 13','Lightweight Frameworks'],['ch14-streaming-sql','Chapter 14','Streaming SQL'],['ch15-faas','Chapter 15','Functions as a Service'],['ch16-eventual-consistency','Chapter 16','Eventual Consistency'],['ch17-request-response','Chapter 17','Integrating with Request-Response'],['ch18-bad-data','Chapter 18','Handling Bad Data'],['ch19-tooling','Chapter 19','Supportive Tooling'],['ch20-testing','Chapter 20','Testing'],['ch21-deploying','Chapter 21','Deploying'],['ch22-conclusion','Chapter 22','Conclusion']];
const line=(n,f)=>Array.from({length:n+1},(_,i)=>[i/n,f(i/n)]);
const SP=(g,b,t)=>({type:'versus',title:t||'Strengths and weaknesses',a:{h:'Strengths',c:'green',items:g},b:{h:'Weaknesses',c:'red',items:b}});
const VS=(title,ah,ai,bh,bi,cap,mid,ac,bc)=>({type:'versus',title,mid:mid||'VS',a:{h:ah,c:ac||'red',items:ai},b:{h:bh,c:bc||'green',items:bi},cap:cap||[]});
const PT=(title,items,cap)=>({type:'points',title,items:items.map(x=>({t:x[0],d:x[1]||'',c:x[2]})),cap:cap||[]});
const PL=(title,stages,cap,o)=>Object.assign({type:'pipeline',title,stages:stages.map(x=>({t:x[0],d:x[1]||'',c:x[2]})),cap:cap||[]},o||{});
const ST=(title,levels,cap,o)=>Object.assign({type:'stack',title,levels:levels.map(x=>({t:x[0],d:x[1]||'',c:x[2],w:x[3]||1})),cap:cap||[]},o||{});
const BR=(title,items,cap,o)=>Object.assign({type:'bars',title,items:items.map(x=>({l:x[0],v:x[1],txt:x[2],c:x[3],suf:x[4]})),cap:cap||[]},o||{});
const VD=(title,items,cap,o)=>Object.assign({type:'verdicts',title,items:items.map(x=>({t:x[0],ok:x[1],why:x[2],lab:x[3],c:x[4]})),cap:cap||[]},o||{});
const QT=(title,text,by,acc)=>({type:'quote',title,text,by,acc});
const RC=(n,items)=>({type:'recap',title:(/^[0-9]/.test(n)?'Chapter '+n:n)+' on one screen',items:items.map(x=>({t:x[0],d:x[1]}))});
function CH(c){
  const i=ORDER.findIndex(o=>o[0]===c.slug),o=ORDER[i],nx=ORDER[i+1];
  const scenes=[{type:'title',n:c.n,part:c.part||BOOK,title:o[2],sub:c.sub,acc:'blue'}].concat(c.scenes,[{type:'outro',line:c.end,next:nx?nx[1]+' \u00b7 '+nx[2]:null,acc:'teal'}]);
  window.SPEC={kick:KICK+' \u00b7 '+o[1],credit:CREDIT,scenes};
}
