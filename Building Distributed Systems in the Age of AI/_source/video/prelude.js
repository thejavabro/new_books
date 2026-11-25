/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Building Distributed Systems in the Age of AI',KICK='Building Distributed Systems in the Age of AI';
const CREDIT='Based on Building Distributed Systems in the Age of AI by Max Hopei · original visual summary';
const ORDER=[['ch01-setting-the-focus','Chapter 1','Setting the Focus on the Right Things'],['ch02-revising-microservices','Chapter 2','Revising Microservice Architecture'],['ch03-message-driven','Chapter 3','Message-Driven Architecture'],['ch04-streaming','Chapter 4','Streaming Architecture'],['ch05-agentic','Chapter 5','Agentic Architecture'],['ch06-real-world-example','Chapter 6','Real-World System Example'],['ch07-observability','Chapter 7','Observability in Unpredictable Systems'],['ch08-systems-powered-by-ai','Chapter 8','Systems Powered by AI'],['ch09-using-ai-to-build','Chapter 9','Using AI to Build Systems'],['ch10-code-for-ai','Chapter 10','From Code for People to Code for AI'],['ch11-programming-language-for-ai','Chapter 11','Programming Language for AI'],['ch12-full-stack-team','Chapter 12','A Full-Stack Team'],['ch13-approachable','Chapter 13','Making Systems Approachable'],['ch14-privacy','Chapter 14','Growing Privacy Pressure'],['ch15-expectations','Chapter 15','Changing Expectations']];
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
