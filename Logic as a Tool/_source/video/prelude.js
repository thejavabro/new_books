/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Logic as a Tool',KICK='Logic as a Tool';
const CREDIT='Based on Logic as a Tool by Valentin Goranko · original visual summary';
const ORDER=[['ch01-paradoxes','Introduction','Why Logic, and a Taste of Paradox'],['ch02-truth-tables','Section 1.1','Propositions, Connectives, Truth Tables'],['ch03-consequence-equivalence','Sections 1.2–1.3','Logical Consequence and Equivalence'],['ch04-induction','Section 1.4','Inductive Definitions and Recursion'],['ch05-axiomatic-systems','Sections 2.1–2.2','Deductive Systems and Hilbert Axioms'],['ch06-tableaux','Section 2.3','Semantic Tableaux'],['ch07-natural-deduction','Section 2.4','Natural Deduction'],['ch08-resolution-sat','Sections 2.5–2.7','Normal Forms, Resolution and SAT'],['ch09-first-order-languages','Sections 3.1–3.2','First-order Structures and Truth'],['ch10-using-first-order','Sections 3.3–3.4','Using First-order Logic'],['ch11-syllogisms','Section 3.5','Syllogisms'],['ch12-first-order-deduction','Sections 4.1–4.3','Deduction in First-order Logic'],['ch13-first-order-resolution','Sections 4.4–4.5','Unification and Resolution'],['ch14-soundness-completeness','Section 4.6','Soundness and Completeness'],['ch15-proofs-and-sets','Sections 5.1–5.2','Proofs, Sets, Functions and Relations'],['ch16-induction-peano','Section 5.3','Induction and Peano Arithmetic'],['ch17-automated-reasoning','Section 5.4','Automated Reasoning and Prolog']];
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
