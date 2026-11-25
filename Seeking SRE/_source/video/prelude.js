/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Seeking SRE',KICK='Seeking SRE';
const CREDIT='Seeking SRE · edited by David N. Blank-Edelman · original visual summary';
const ORDER=[['ch01-03-starting-sre','Chapters 1–3','Starting SRE'],['ch04-05-metrics-third-parties','Chapters 4–5','Incident Metrics and Third Parties'],['ch06-07-sre-without-sre','Chapters 6–7','SRE Without SRE Teams'],['ch08-09-enterprise-sysadmin','Chapters 8–9','SRE in the Enterprise'],['ch10-11-clearing-the-way','Chapters 10–11','Clearing the Way'],['ch12-13-devops-voices-facebook','Chapters 12–13','DevOps Voices and Facebook'],['ch14-15-chaos-privacy','Chapters 14–15','Chaos Engineering and Privacy'],['ch16-17-data-reliability','Chapters 16–17','Database Reliability and Durability'],['ch18-machine-learning','Chapter 18','Machine Learning for SRE'],['ch19-20-docs-learning','Chapters 19–20','Better Docs and Active Learning'],['ch21-22-slo-success','Chapters 21–22','The SLO and a Success Culture'],['ch23-antipatterns','Chapter 23','SRE Antipatterns'],['ch24-25-immutable-load-balancers','Chapters 24–25','Immutable Infrastructure and Load Balancers'],['ch26-service-mesh','Chapter 26','The Service Mesh'],['ch27-29-human-side','Chapters 27–29','The Human Side: Cognitive Work'],['ch30-31-on-call-complexity','Chapters 30–31','Against On-Call and Complex Systems'],['ch32-33-activism-conclusion','Chapters 32–33','Activism and Conclusion']];
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
