/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Building the Agentic Enterprise',KICK='Building the Agentic Enterprise';
const CREDIT='Based on Building the Agentic Enterprise by Jaroslav Pantsjoha · original visual summary';
const ORDER=[['ch01-why-agentic-systems-fail','Chapter 1','Why Agentic Systems Fail to Go Live'],['ch02-agentic-ai-foundation','Chapter 2','The Agentic AI Foundation'],['ch03-single-and-multi-agent','Chapter 3','Single-Agent and Multi-Agent Systems'],['ch04-core-architectural-patterns','Chapter 4','Core Architectural Patterns'],['ch05-multi-agent-orchestration','Chapter 5','Multi-Agent Orchestration'],['ch06-context-memory-knowledge','Chapter 6','Context, Memory and Knowledge'],['ch07-security-identity-guardrails','Chapter 7','Security, Identity and Guardrails'],['ch08-building-deploying-workflows','Chapter 8','Building and Deploying Workflows'],['ch09-state-memory-persistence','Chapter 9','State, Memory and Decision Persistence'],['ch10-agentops-evalops','Chapter 10','AgentOps and EvalOps'],['ch11-platform-engineering','Chapter 11','Platform Engineering for Agents'],['ch12-operating-models','Chapter 12','Operating Models and Transformation'],['ch13-mrep-reference-architecture','Appendix','The MREP Reference Architecture']];
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
