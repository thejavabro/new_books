/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='The Software Architect Elevator',KICK='The Software Architect Elevator';
const CREDIT='The Software Architect Elevator · Gregor Hohpe · original visual summary';
const ORDER=[['ch01-03-the-architect-elevator','Chapters 1–3','The Architect Elevator'],['ch04-07-enterprise-decisions','Chapters 4–7','Architects in the Enterprise'],['ch08-10-architecture-options','Chapters 8–10','Architecture and Options'],['ch11-12-code-and-zombies','Chapters 11–12','Code and Zombies'],['ch13-15-automation-and-standards','Chapters 13–15','Automation and Standards'],['ch16-17-flat-world-coffee-shop','Chapters 16–17','Maps and Coffee Shops'],['ch18-20-explaining-and-writing','Chapters 18–20','Explaining and Writing'],['ch21-23-diagrams-and-lines','Chapters 21–23','Diagrams and Lines'],['ch24-25-sketching-and-collaboration','Chapters 24–25','Sketching and Collaboration'],['ch26-28-reverse-engineering-orgs','Chapters 26–28','Organizations as Systems'],['ch29-32-scaling-and-governance','Chapters 29–32','Scaling and Governance'],['ch33-35-pain-change-speed','Chapters 33–35','No Pain, No Change'],['ch36-38-loops-and-culture','Chapters 36–38','Loops and Culture'],['ch39-41-queues-dimensions-truth','Chapters 39–41','Queues, Dimensions and Truth']];
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
