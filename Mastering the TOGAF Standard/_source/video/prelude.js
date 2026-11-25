/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Mastering the TOGAF Standard',KICK='Mastering the TOGAF Standard';
const CREDIT='Based on Mastering the TOGAF Standard by Eric Jager · original visual summary';
const ORDER=[['ch01-introduction-history','Chapters 1–2','Why TOGAF, and Where It Came From'],['ch03-standard-and-definition','Chapters 3–4','The Standard and What EA Is'],['ch05-enterprise-metamodel','Chapter 5','Enterprise Metamodel'],['ch06-content-framework','Chapter 6','Content Framework'],['ch07-architecture-repository','Chapter 7','Architecture Repository'],['ch08-architecture-governance','Chapter 8','Architecture Governance'],['ch09-capability-roles','Chapters 9–10','Capability, Roles and Skills'],['ch11-architecture-domains','Chapter 11','Architecture Domains'],['ch12a-adm-preliminary-vision','Chapter 12 · Preliminary and A','The ADM: Preliminary and Vision'],['ch12b-business-architecture','Chapter 12 · Phase B','Phase B: Business Architecture'],['ch12c-is-technology','Chapter 12 · Phases C and D','Phases C and D: Systems and Technology'],['ch12d-opportunities-migration','Chapter 12 · Phases E and F','Phases E and F: From Gaps to a Plan'],['ch12e-governance-change-requirements','Chapter 12 · Phases G and H','Phases G, H and Requirements'],['ch13-applying-the-adm','Chapter 13','Applying the ADM'],['ch14-adm-techniques','Chapter 14','ADM Techniques'],['ch15-maturity-frameworks','Chapters 15–16','Maturity and Other Frameworks'],['ch17-tailoring-agile','Chapters 17–18','Tailoring and Agile Architecture'],['ch19-digital-transformation','Chapter 19','Digital Transformation'],['ch20-case-scenario','Chapter 20','Putting TOGAF into Practice'],['ch21-togaf-on-a-page','Chapters 21–22','TOGAF on a Page']];
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
