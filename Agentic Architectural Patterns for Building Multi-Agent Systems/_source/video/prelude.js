/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Agentic Architectural Patterns',KICK='Agentic Architectural Patterns';
const CREDIT='Agentic Architectural Patterns for Building Multi-Agent Systems · original visual summary';
const ORDER=[['ch01-genai-in-the-enterprise','Chapter 1','GenAI in the Enterprise'],['ch02-agent-ready-llms','Chapter 2','Agent-Ready LLMs'],['ch03-llm-adaptation-spectrum','Chapter 3','The Spectrum of LLM Adaptation'],['ch04-agentic-architecture','Chapter 4','Agentic AI Architecture'],['ch05-multi-agent-coordination','Chapter 5','Multi-Agent Coordination Patterns'],['ch06-explainability-compliance','Chapter 6','Explainability and Compliance Patterns'],['ch07-robustness-fault-tolerance','Chapter 7','Robustness and Fault Tolerance Patterns'],['ch08-human-agent-interaction','Chapter 8','Human-Agent Interaction Patterns'],['ch09-agent-level-patterns','Chapter 9','Agent-Level Patterns'],['ch10-system-level-patterns','Chapter 10','System-Level Patterns'],['ch11-agents-that-learn','Chapter 11','Building Agents That Learn'],['ch12-practical-roadmap','Chapter 12','A Practical Roadmap by Maturity'],['ch13-single-agent-loan','Chapter 13','Use Case: A Single Agent for Loans'],['ch14-multi-agent-loan','Chapter 14','Use Case: A Multi-Agent Loan System'],['ch15-agent-frameworks','Chapter 15','Agent Frameworks Compared'],['ch16-charting-your-journey','Chapter 16','Charting Your Agentic AI Journey']];
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
