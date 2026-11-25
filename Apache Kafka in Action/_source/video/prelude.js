/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Apache Kafka in Action',KICK='Apache Kafka in Action';
const CREDIT='Based on Apache Kafka in Action by Anatoly Zelenin and Alexander Kropp · original visual summary';
const ORDER=[['ch01-getting-started','Chapters 1–2','Introduction and First Steps'],['ch03-topics-messages','Chapter 3','Topics and Messages'],['ch04-distributed-log','Chapter 4','Kafka as a Distributed Log'],['ch05-reliability','Chapter 5','Reliability'],['ch06-performance','Chapter 6','Performance'],['ch07-cluster-management','Chapter 7','Cluster Management'],['ch08-producing-persisting','Chapter 8','Producing and Persisting Messages'],['ch09-consuming','Chapter 9','Consuming Messages'],['ch10-cleaning-up','Chapter 10','Cleaning Up Messages'],['ch11-kafka-connect','Chapter 11','Kafka Connect'],['ch12-stream-processing','Chapter 12','Stream Processing'],['ch13-governance','Chapter 13','Governance'],['ch14-reference-architecture','Chapter 14','Kafka Reference Architecture'],['ch15-monitoring','Chapter 15','Monitoring and Alerting'],['ch16-disaster-management','Chapter 16','Disaster Management'],['ch17-comparison','Chapter 17','Comparison with Other Technologies'],['ch18-enterprise-architectures','Chapter 18','Kafka in Enterprise Architectures'],['appendix-setup-monitoring','Appendix','Test Environment and Monitoring Setup']];
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
