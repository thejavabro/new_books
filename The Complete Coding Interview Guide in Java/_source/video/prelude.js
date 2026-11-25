/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='The Complete Coding Interview Guide in Java',KICK='The Complete Coding Interview Guide in Java';
const CREDIT='The Complete Coding Interview Guide in Java · Anghel Leonard · original visual summary';
const ORDER=[['ch01-02-preparing','Chapters 1–2','Preparing for the Interview'],['ch03-05-questions-failures-challenges','Chapters 3–5','Questions, Failures and Coding Challenges'],['ch06-oop','Chapter 6','Object-Oriented Programming'],['ch07-big-o','Chapter 7','Big O Analysis of Algorithms'],['ch08-recursion-dp','Chapter 8','Recursion and Dynamic Programming'],['ch09-bit-manipulation','Chapter 9','Bit Manipulation'],['ch10-arrays-strings','Chapter 10','Arrays and Strings'],['ch11-linked-lists-maps','Chapter 11','Linked Lists and Maps'],['ch12-stacks-queues','Chapter 12','Stacks and Queues'],['ch13-trees-graphs','Chapter 13','Trees and Graphs'],['ch14-sorting-searching','Chapter 14','Sorting and Searching'],['ch15-math-puzzles','Chapter 15','Mathematics and Puzzles'],['ch16-concurrency','Chapter 16','Concurrency'],['ch17-functional','Chapter 17','Functional-Style Programming'],['ch18-unit-testing','Chapter 18','Unit Testing'],['ch19-scalability','Chapter 19','System Scalability']];
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
