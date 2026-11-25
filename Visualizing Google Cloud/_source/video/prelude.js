/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Visualizing Google Cloud',KICK='Visualizing Google Cloud';
const CREDIT='Visualizing Google Cloud · Priyanka Vergadia · original visual summary';
const ORDER=[['ch01-infrastructure','Chapter 1','Infrastructure: Where Your Code Runs'],['ch02-storage','Chapter 2','Storage'],['ch03-databases','Chapter 3','Databases'],['ch04-data-analytics','Chapter 4','Data Analytics'],['ch05-app-modernization','Chapter 5 · part 1','Migrating and Modernizing Apps'],['ch06-microservices-apis-ops','Chapter 5 · part 2','Microservices, APIs and Operations'],['ch07-network-foundations','Chapter 6 · part 1','Networking Foundations'],['ch08-traffic-delivery','Chapter 6 · part 2','Load Balancing, CDN and Service Mesh'],['ch09-ml-lifecycle','Chapter 7 · part 1','Data Science and the ML Lifecycle'],['ch10-ai-apis','Chapter 7 · part 2','Pretrained AI APIs and Solutions'],['ch11-security-layers','Chapter 8 · part 1','Security in Layers'],['ch12-identity-access','Chapter 8 · part 2','Identity, Access and Security Operations']];
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
