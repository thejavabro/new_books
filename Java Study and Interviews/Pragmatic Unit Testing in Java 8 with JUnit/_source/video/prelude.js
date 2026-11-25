/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Pragmatic Unit Testing in Java',KICK='Pragmatic Unit Testing in Java';
const CREDIT='Pragmatic Unit Testing in Java 8 with JUnit · Jeff Langr · original summary, shown with JUnit 5';
const ORDER=[['ch01-first-junit-test','Chapter 1','Building Your First JUnit Test'],['ch02-getting-real','Chapter 2','Getting Real with JUnit'],['ch03-assertions','Chapter 3','Digging Deeper into Assertions'],['ch04-organizing-tests','Chapter 4','Organizing Your Tests'],['ch05-first','Chapter 5','FIRST Properties of Good Tests'],['ch06-right-bicep','Chapter 6','What to Test: The Right-BICEP'],['ch07-correct','Chapter 7','Boundary Conditions: CORRECT'],['ch08-refactoring','Chapter 8','Refactoring to Cleaner Code'],['ch09-bigger-design','Chapter 9','Bigger Design Issues'],['ch10-mock-objects','Chapter 10','Using Mock Objects'],['ch11-refactoring-tests','Chapter 11','Refactoring Tests'],['ch12-tdd','Chapter 12','Test-Driven Development'],['ch13-tough-stuff','Chapter 13','Testing Some Tough Stuff'],['ch14-on-a-project','Chapter 14','Testing on a Project']];
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
