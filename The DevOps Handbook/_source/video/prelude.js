/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='The DevOps Handbook',KICK='The DevOps Handbook';
const CREDIT='The DevOps Handbook · Kim, Humble, Debois et al. · original visual summary';
const ORDER=[['ch00-introduction','Introduction','Imagine a World Where Dev and Ops Become DevOps'],['ch01-three-ways','Chapter 1','Agile, Continuous Delivery and the Three Ways'],['ch02-flow','Chapter 2','The First Way: The Principles of Flow'],['ch03-feedback','Chapter 3','The Second Way: The Principles of Feedback'],['ch04-learning','Chapter 4','The Third Way: Continual Learning'],['ch05-value-stream','Chapter 5','Selecting Which Value Stream to Start With'],['ch06-value-stream-mapping','Chapter 6','Understanding the Work in Our Value Stream'],['ch07-conways-law','Chapter 7','Designing Organizations with Conway in Mind'],['ch08-ops-in-dev','Chapter 8','Integrating Operations into Daily Work'],['ch09-deployment-pipeline','Chapter 9','Foundations of the Deployment Pipeline'],['ch10-automated-testing','Chapter 10','Fast and Reliable Automated Testing'],['ch11-continuous-integration','Chapter 11','Enable and Practice Continuous Integration'],['ch12-low-risk-releases','Chapter 12','Automate and Enable Low-Risk Releases'],['ch13-architecture','Chapter 13','Architect for Low-Risk Releases'],['ch14-telemetry','Chapter 14','Create Telemetry to See and Solve Problems'],['ch15-analyze-telemetry','Chapter 15','Analyze Telemetry to Anticipate Problems'],['ch16-feedback-deploy','Chapter 16','Feedback for Safe Deployment'],['ch17-ab-testing','Chapter 17','Hypothesis-Driven Development'],['ch18-review-coordination','Chapter 18','Review and Coordination Processes'],['ch19-21-learning','Chapters 19–21','The Practices of Continual Learning'],['ch22-infosec','Chapter 22','Information Security Is Everyone’s Job'],['ch23-protect-pipeline','Chapter 23','Protecting the Deployment Pipeline'],['ch24-conclusion-afterword','Conclusion','A Call to Action'],['appendix-reference','Appendices','The Appendices']];
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
