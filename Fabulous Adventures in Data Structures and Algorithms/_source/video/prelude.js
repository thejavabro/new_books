/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Fabulous Adventures in Data Structures and Algorithms',KICK='Fabulous Adventures in Data Structures and Algorithms';
const CREDIT='Based on Fabulous Adventures in Data Structures and Algorithms by Eric Lippert · original visual summary';
const ORDER=[['ch01-starting','Chapter 1','Starting a Fabulous Adventure'],['ch02-stacks-queues','Chapter 2','Immutable Stacks and Queues'],['ch03-deque','Chapter 3','An Immutable Deque'],['ch04-hashlife','Chapter 4','Memoizing Quadtrees for a Better Life'],['ch05-dawg','Chapter 5','The Directed Acyclic Word Graph'],['ch06-combinatorics','Chapter 6','Combinatorial Algorithms'],['ch07-category-theory','Chapter 7','Interlude: Category Theory'],['ch08-graph-coloring','Chapter 8','Coloring Graphs with Backtracking'],['ch09-pretty-printing','Chapter 9','Greedy Iterative Pretty Printing'],['ch10-unification','Chapter 10','Unification and Anti-unification'],['ch11-monads','Chapter 11','Interlude: Monads'],['ch12-randomness','Chapter 12','A Better Abstraction for Randomness'],['ch13-bayes','Chapter 13','Conditional Probability with Bayes'],['ch14-probability-monad','Chapter 14','Interlude: The Probability Monad'],['ch15-continuous','Chapter 15','Sampling Continuous Distributions'],['ch16-markov-metropolis','Chapter 16','Markov Processes and Metropolis'],['appendix-csharp','Appendix','Notes on C# and Further Reading']];
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
