/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Monolith to Microservices',KICK='Monolith to Microservices';
const CREDIT='Monolith to Microservices · Sam Newman · original visual summary';
const ORDER=[['ch01-just-enough-microservices','Chapter 1','Just Enough Microservices'],['ch02-why-microservices','Chapter 2 · part 1','Why Microservices?'],['ch02-planning-the-journey','Chapter 2 · part 2','Planning the Journey'],['ch03-strangler-and-ui','Chapter 3 · part 1','Strangler Fig and UI Composition'],['ch03-abstraction-to-cdc','Chapter 3 · part 2','Branch by Abstraction to CDC'],['ch04-shared-data','Chapter 4 · part 1','Living with Shared Data'],['ch04-splitting-the-database','Chapter 4 · part 2','Splitting the Database'],['ch04-transactions-and-sagas','Chapter 4 · part 3','Transactions and Sagas'],['ch05-growing-pains','Chapter 5','Growing Pains'],['ch06-closing-and-patterns','Chapter 6','Closing Words and Pattern Index']];
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
