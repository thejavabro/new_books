/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='The Effective Software Engineer',KICK='The Effective Software Engineer';
const CREDIT='The Effective Software Engineer · Addy Osmani · original visual summary';
const ORDER=[['ch01-foundations','Chapter 1','The Foundations of Effectiveness'],['ch02-fundamentals','Chapter 2','Understanding the Fundamentals'],['ch03-depth-breadth','Chapter 3','Technical Depth Versus Breadth'],['ch04-collaboration','Chapter 4','Collaboration and Cross-Functional Work'],['ch05-individual-antipatterns','Chapter 5','Anti-Patterns of Individual Engineers'],['ch06-career-growth','Chapter 6','Career Growth and Leveling Up'],['ch07-leadership-ic','Chapter 7','Leadership as an Individual Contributor'],['ch08-strategic-thinking','Chapter 8','Strategic Thinking'],['ch09-burnout','Chapter 9','Avoiding Burnout'],['ch10-team-antipatterns','Chapter 10','Team-Level Anti-Patterns'],['ch11-modern-work','Chapter 11','Thriving in Modern Work'],['ch12-future-ic','Chapter 12','The Future of Individual Contributors'],['ch13a-ai-workflow','Chapter 13 · part 1','Practical AI: The Daily Workflow'],['ch13b-ai-guardrails','Chapter 13 · part 2','Practical AI: Guardrails'],['ch13c-ai-measure-rollout','Chapter 13 · part 3','Practical AI: Measure and Roll Out']];
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
