/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Grokking Algorithms',KICK='Grokking Algorithms';
const CREDIT='Based on Grokking Algorithms by Aditya Y. Bhargava · original visual summary';
const ORDER=[['ch01-introduction-to-algorithms','Chapter 1','Introduction to Algorithms'],['ch02-selection-sort','Chapter 2','Selection Sort'],['ch03-recursion','Chapter 3','Recursion'],['ch04-quicksort','Chapter 4','Quicksort'],['ch05-hash-tables','Chapter 5','Hash Tables'],['ch06-breadth-first-search','Chapter 6','Breadth-First Search'],['ch07-trees','Chapter 7','Trees'],['ch08-balanced-trees','Chapter 8','Balanced Trees'],['ch09-dijkstras-algorithm','Chapter 9','Dijkstra’s Algorithm'],['ch10-greedy-algorithms','Chapter 10','Greedy Algorithms'],['ch11-dynamic-programming','Chapter 11','Dynamic Programming'],['ch12-k-nearest-neighbors','Chapter 12','k-Nearest Neighbors'],['ch13-where-to-go-next','Chapter 13','Where to Go Next'],['appendix-avl-and-np-hard','Appendix','AVL Performance and NP-Hard Problems']];
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
