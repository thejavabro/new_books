/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Multi-Agent AI Engineering',KICK='Multi-Agent AI Engineering';
const CREDIT='Based on Multi-Agent AI Engineering by Xiao Ma and Chi Wang · original visual summary';
const ORDER=[['ch01-introduction','Chapter 1','Introduction to Multi-Agent Systems'],['ch02-principles','Chapter 2','Principles of Multi-Agent Systems'],['ch03-frameworks','Chapter 3','Frameworks and Mental Models'],['ch04-first-agents','Chapter 4','Constructing Your First Agents'],['ch05-communication','Chapter 5','Agent Communication'],['ch06-patterns','Chapter 6','Design Patterns for Collaboration'],['ch07-memory','Chapter 7','Context and Memory Management'],['ch08-orchestration','Chapter 8','Orchestrating Agent Teams'],['ch09-protocols','Chapter 9','Unified Abstractions and Protocols'],['ch10-framework-survey','Chapter 10','Comparative Survey of Frameworks'],['ch11-evaluation','Chapter 11','Evaluating Performance and Behaviour'],['ch12-observability','Chapter 12','Observability for Agentic AI'],['ch13-self-evolving','Chapter 13','Self-Evolving Multi-Agent Systems'],['ch14-security','Chapter 14','Security and Privacy'],['ch15-deploying','Chapter 15','Deploying and Scaling'],['ch16-case-studies','Chapter 16','Case Studies'],['ch17-trends','Chapter 17','Emerging Research and Trends'],['ch18-conclusions','Chapter 18','Conclusions and Future Outlook']];
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
