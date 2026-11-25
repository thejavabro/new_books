/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Visualizing Generative AI',KICK='Visualizing Generative AI';
const CREDIT='Visualizing Generative AI · Vergadia & Lakshmanan · original visual summary';
const ORDER=[['ch01a-what-is-genai','Chapter 1 · part 1','What Generative AI Is'],['ch01b-how-genai-works','Chapter 1 · part 2','How GenAI Paints and Writes'],['ch01c-transformers-to-chatgpt','Chapter 1 · part 3','From Transformers to ChatGPT'],['ch02a-prompting','Chapter 2 · part 1','Great First Drafts and Prompting'],['ch02b-building-with-genai','Chapter 2 · part 2','Building Products with GenAI'],['ch03a-support-and-code','Chapter 3 · part 1','Use Cases: Support and Code'],['ch03b-knowledge-data-marketing','Chapter 3 · part 2','Use Cases: Knowledge, Data, Marketing'],['ch04a-agentic-systems','Chapter 4 · part 1','Why and How to Build Agents'],['ch04b-rag-agents','Chapter 4 · part 2','RAG Agents'],['ch04c-sql-and-architectures','Chapter 4 · part 3','SQL Agents and Architectures'],['ch05a-architecting','Chapter 5 · part 1','Choosing Models and Architectures'],['ch05b-fine-tuning','Chapter 5 · part 2','Fine-Tuning a Model'],['ch06a-responsible-genai','Chapter 6 · part 1','Responsible GenAI'],['ch06b-llmops','Chapter 6 · part 2','LLMOps, Evaluation and Guardrails']];
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
