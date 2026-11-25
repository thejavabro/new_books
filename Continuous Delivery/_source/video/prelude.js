/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Continuous Delivery',KICK='Continuous Delivery';
const CREDIT='Based on Continuous Delivery by Jez Humble and David Farley · original visual summary';
const ORDER=[['ch01-problem-of-delivering-software','Chapter 1','The Problem of Delivering Software'],['ch02-configuration-management','Chapter 2','Configuration Management'],['ch03-continuous-integration','Chapter 3','Continuous Integration'],['ch04-testing-strategy','Chapter 4','Implementing a Testing Strategy'],['ch05-deployment-pipeline','Chapter 5','Anatomy of the Deployment Pipeline'],['ch06-build-deployment-scripting','Chapter 6','Build and Deployment Scripting'],['ch07-commit-stage','Chapter 7','The Commit Stage'],['ch08-acceptance-testing','Chapter 8','Automated Acceptance Testing'],['ch09-nonfunctional-requirements','Chapter 9','Testing Nonfunctional Requirements'],['ch10-deploying-releasing','Chapter 10','Deploying and Releasing Applications'],['ch11-infrastructure-environments','Chapter 11','Infrastructure and Environments'],['ch12-managing-data','Chapter 12','Managing Data'],['ch13-components-dependencies','Chapter 13','Components and Dependencies'],['ch14-advanced-version-control','Chapter 14','Advanced Version Control'],['ch15-managing-continuous-delivery','Chapter 15','Managing Continuous Delivery']];
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
