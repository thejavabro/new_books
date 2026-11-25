/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Software Architecture: The Hard Parts',KICK='Software Architecture: The Hard Parts';
const CREDIT='Software Architecture: The Hard Parts · Ford, Richards et al. · original visual summary';
const ORDER=[['ch01-no-best-practices','Chapter 1','What Happens When There Are No Best Practices?'],['ch02-discerning-coupling','Chapter 2','Discerning Coupling'],['ch03-architectural-modularity','Chapter 3','Architectural Modularity'],['ch04-architectural-decomposition','Chapter 4','Architectural Decomposition'],['ch05-component-decomposition-patterns','Chapter 5','Component-Based Decomposition Patterns'],['ch06-pulling-apart-operational-data','Chapter 6','Pulling Apart Operational Data'],['ch07-service-granularity','Chapter 7','Service Granularity'],['ch08-reuse-patterns','Chapter 8','Reuse Patterns'],['ch09-data-ownership','Chapter 9','Data Ownership and Distributed Transactions'],['ch10-distributed-data-access','Chapter 10','Distributed Data Access'],['ch11-distributed-workflows','Chapter 11','Managing Distributed Workflows'],['ch12-transactional-sagas','Chapter 12','Transactional Sagas'],['ch13-contracts','Chapter 13','Contracts'],['ch14-analytical-data','Chapter 14','Managing Analytical Data'],['ch15-build-your-own-tradeoff-analysis','Chapter 15','Build Your Own Trade-Off Analysis']];
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
