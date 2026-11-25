/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Building Evolutionary Architectures',KICK='Building Evolutionary Architectures';
const CREDIT='Building Evolutionary Architectures, 2nd ed. · Ford, Parsons, Kua & Sadalage · original visual summary';
const ORDER=[['ch01-evolving-architecture','Chapter 1','Evolving Software Architecture'],['ch02-fitness-functions','Chapter 2','Fitness Functions'],['ch03-incremental-change','Chapter 3','Engineering Incremental Change'],['ch04a-code-governance','Chapter 4, part 1','Automating Governance: Code'],['ch04b-stack-governance','Chapter 4, part 2','Governance Across the Stack'],['ch05a-connascence-quanta','Chapter 5, part 1','Connascence and Quanta'],['ch05b-contracts-reuse','Chapter 5, part 2','Contracts, Reuse and Meshes'],['ch06-evolutionary-data','Chapter 6','Evolutionary Data'],['ch07a-principles-migration','Chapter 7, part 1','Principles and Migration'],['ch07b-guidelines','Chapter 7, part 2','Guidelines for Evolvability'],['ch08-pitfalls-antipatterns','Chapter 8','Pitfalls and Antipatterns'],['ch09-into-practice','Chapter 9','Putting It into Practice']];
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
