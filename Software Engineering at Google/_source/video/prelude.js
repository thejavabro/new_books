/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Software Engineering at Google',KICK='Software Engineering at Google';
const CREDIT='Based on Software Engineering at Google by Winters, Manshreck and Wright · original visual summary';
const ORDER=[['ch01-what-is-software-engineering','Chapter 1','What Is Software Engineering?'],['ch02-work-well-on-teams','Chapter 2','How to Work Well on Teams'],['ch03-knowledge-sharing','Chapter 3','Knowledge Sharing'],['ch04-engineering-for-equity','Chapter 4','Engineering for Equity'],['ch05-how-to-lead-a-team','Chapter 5','How to Lead a Team'],['ch06-leading-at-scale','Chapter 6','Leading at Scale'],['ch07-measuring-productivity','Chapter 7','Measuring Engineering Productivity'],['ch08-style-guides-and-rules','Chapter 8','Style Guides and Rules'],['ch09-code-review','Chapter 9','Code Review'],['ch10-documentation','Chapter 10','Documentation'],['ch11-testing-overview','Chapter 11','Testing Overview'],['ch12-unit-testing','Chapter 12','Unit Testing'],['ch13-test-doubles','Chapter 13','Test Doubles'],['ch14-larger-testing','Chapter 14','Larger Testing'],['ch15-deprecation','Chapter 15','Deprecation'],['ch16-version-control','Chapter 16','Version Control and Branch Management'],['ch17-code-search','Chapter 17','Code Search'],['ch18-build-systems','Chapter 18','Build Systems and Build Philosophy'],['ch19-critique','Chapter 19','Critique: The Code Review Tool'],['ch20-static-analysis','Chapter 20','Static Analysis'],['ch21-dependency-management','Chapter 21','Dependency Management'],['ch22-large-scale-changes','Chapter 22','Large-Scale Changes'],['ch23-continuous-integration','Chapter 23','Continuous Integration'],['ch24-continuous-delivery','Chapter 24','Continuous Delivery'],['ch25-compute-as-a-service','Chapter 25','Compute as a Service']];
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
