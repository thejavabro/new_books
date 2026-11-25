/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='The Art of Visual Notetaking',KICK='The Art of Visual Notetaking';
const CREDIT='Based on The Art of Visual Notetaking by Emily Mills · original visual summary';
const ORDER=[['ch01-start-here','Chapters 1–2','Start Here: What Visual Notes Are'],['ch03-tools','Chapter 3','Tools: Your Notetaking Arsenal'],['ch04-prep-listening','Chapters 4–5','Prep Work and Listening'],['ch06-writing-hierarchy','Chapters 6–7','Writing, Lettering and Hierarchy'],['ch08-drawing','Chapter 8 · Drawing','Drawing: Dots, Lines, Shapes and People'],['ch08-cartoon-faces','Chapter 8 · Faces','Cartoon-Style Faces'],['ch09-direction-finding','Chapters 9–10','Visual Direction and Finding Things'],['ch11-diagrams','Chapter 11','Visualizing Information in Diagrams'],['ch12-library-metaphors','Chapters 12–13','Visual Library and Visual Metaphors'],['ch14-headers-layouts','Chapters 14–15','Headers, Layouts and Time Blocking'],['ch16-refining-good','Chapters 16–17','Refining, and What Makes Notes Good'],['ch18-sharing-growing','Chapters 18–20','Sharing, Improving and Going Pro']];
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
