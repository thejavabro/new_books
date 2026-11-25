/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Clean Architecture',KICK='Clean Architecture';
const CREDIT='Clean Architecture · Robert C. Martin · original visual summary';
const ORDER=[['ch01-design-and-value','Chapters 1–2','Design, Architecture and Two Values'],['ch03-paradigms-structured','Chapters 3–4','Paradigms and Structured Programming'],['ch05-object-oriented','Chapter 5','Object-Oriented Programming'],['ch06-functional','Chapter 6','Functional Programming'],['ch07-srp','Chapter 7','The Single Responsibility Principle'],['ch08-ocp','Chapter 8','The Open-Closed Principle'],['ch09-lsp-isp','Chapters 9–10','Liskov and Interface Segregation'],['ch11-dip','Chapter 11','The Dependency Inversion Principle'],['ch12-components-cohesion','Chapters 12–13','Components and Cohesion'],['ch14-component-coupling','Chapter 14','Component Coupling'],['ch15-what-is-architecture','Chapter 15','What Is Architecture?'],['ch16-independence','Chapter 16','Independence'],['ch17-boundaries','Chapters 17–18','Boundaries and Their Anatomy'],['ch19-policy-business-rules','Chapters 19–20','Policy, Level and Business Rules'],['ch21-screaming-clean','Chapters 21–22','Screaming and Clean Architecture'],['ch23-humble-partial','Chapters 23–24','Humble Objects, Partial Boundaries'],['ch25-layers-main','Chapters 25–26','Layers, Boundaries and Main'],['ch27-services-tests','Chapters 27–28','Services and the Test Boundary'],['ch29-clean-embedded','Chapter 29','Clean Embedded Architecture'],['ch30-details','Chapters 30–32','Database, Web and Frameworks'],['ch33-case-study-missing','Chapters 33–34','Case Study and the Missing Chapter'],['appendix-a-archaeology','Appendix A','Architecture Archaeology']];
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
