/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Java Coding Problems',KICK='Java Coding Problems';
const CREDIT='Based on Java Coding Problems, Second Edition, by Anghel Leonard · original visual summary';
const ORDER=[['ch01-text-blocks-strings','Chapter 1 · Strings','Text Blocks and String Templates'],['ch01-locales-numbers-math','Chapter 1 · Numbers','Locales, Numbers and Math'],['ch02-objects-patterns','Chapter 2','Objects, Switch and Pattern Matching'],['ch03-date-time','Chapter 3','Working with Date and Time'],['ch04-records','Chapter 4','Records and Record Patterns'],['ch05-arrays-vector-collections','Chapter 5 · Arrays','Arrays, the Vector API and Collections'],['ch05-data-structures','Chapter 5 · Structures','Classic Data Structures'],['ch06-deserialization-filters','Chapter 6','Java I/O: Deserialization Filters'],['ch07-foreign-memory','Chapter 7','Foreign Function and Memory API'],['ch08-sealed-hidden','Chapter 8','Sealed and Hidden Classes'],['ch09-functional','Chapter 9','Functional Style Programming'],['ch10-virtual-threads','Chapter 10','Virtual Threads and Structured Concurrency'],['ch11-virtual-threads-deep-dive','Chapter 11','Virtual Threads Deep Dive'],['ch12-garbage-collectors','Chapter 12','Garbage Collectors and Dynamic CDS'],['ch13-sockets-sws','Chapter 13','Socket API and Simple Web Server']];
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
