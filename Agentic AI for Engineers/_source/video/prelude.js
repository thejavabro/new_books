/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Agentic AI for Engineers',KICK='Agentic AI for Engineers';
const CREDIT='Agentic AI for Engineers · Dhivya Nagasubramanian · original visual summary';
const ORDER=[['ch01-ai-and-the-evolution-of-agentic-ai','Chapter 1','AI and the Evolution of Agentic AI'],['ch02-automation-to-autonomy','Chapter 2','Automation to Autonomy'],['ch03-transformers-and-llms','Chapter 3','Transformer Models and LLM Architecture'],['ch04-goals-environments-actions','Chapter 4','Agentic AI Fundamentals'],['ch05-architectural-design-patterns','Chapter 5','Architectural Design Patterns'],['ch06-the-art-of-prompting','Chapter 6','The Art of Prompting'],['ch07-tools-and-frameworks','Chapter 7','Tools and Frameworks'],['ch08-safety-alignment-robustness','Chapter 8','Safety, Alignment and Robustness'],['ch09-real-world-use-cases','Chapter 9','Real-World Use Cases'],['ch10-build-your-first-agent','Chapter 10','Build Your First AI Agent'],['ch11-feedback-loops','Chapter 11','Engineering Agent Feedback Loops'],['ch12-collaborative-agents','Chapter 12','Collaborative Agents'],['ch13-testing-evaluation-deployment','Chapter 13','Testing, Evaluation and Deployment'],['ch14-conclusion-and-the-road-ahead','Chapter 14','Conclusion and the Road Ahead']];
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
