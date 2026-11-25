/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Building Secure and Reliable Systems',KICK='Building Secure and Reliable Systems';
const CREDIT='Building Secure and Reliable Systems · Adkins, Beyer et al. · original visual summary';
const ORDER=[['ch01-intersection','Chapter 1','Security Meets Reliability'],['ch02-adversaries','Chapter 2','Understanding Adversaries'],['ch03-04-proxies-tradeoffs','Chapters 3 and 4','Safe Proxies and Design Tradeoffs'],['ch05-least-privilege','Chapter 5','Design for Least Privilege'],['ch06-understandability','Chapter 6','Design for Understandability'],['ch07-changing-landscape','Chapter 7','Design for a Changing Landscape'],['ch08-resilience','Chapter 8','Design for Resilience'],['ch09-recovery','Chapter 9','Design for Recovery'],['ch10-dos','Chapter 10','Mitigating Denial of Service'],['ch11-trusted-ca','Chapter 11','Case Study: A Public CA'],['ch12-writing-code','Chapter 12','Writing Code'],['ch13-testing-code','Chapter 13','Testing Code'],['ch14-deploying-code','Chapter 14','Deploying Code'],['ch15-investigating','Chapter 15','Investigating Systems'],['ch16-disaster-planning','Chapter 16','Disaster Planning'],['ch17-crisis-management','Chapter 17','Crisis Management'],['ch18-recovery-aftermath','Chapter 18','Recovery and Aftermath'],['ch19-chrome-security','Chapter 19','Case Study: Chrome Security'],['ch20-roles','Chapter 20','Roles and Responsibilities'],['ch21-culture','Chapter 21','A Culture of Security and Reliability'],['appendix-conclusion-risk-matrix','Conclusion','Conclusion and Risk Matrix']];
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
