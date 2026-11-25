/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='The Engineering Executive’s Primer',KICK='The Engineering Executive’s Primer';
const CREDIT='Based on The Engineering Executive’s Primer by Will Larson · original visual summary';
const ORDER=[['ch01-getting-the-job','Chapter 1','Getting the Job'],['ch02-first-90-days','Chapter 2','Your First 90 Days'],['ch03-engineering-strategy','Chapter 3','Writing Your Engineering Strategy'],['ch04-how-to-plan','Chapter 4','How to Plan'],['ch05-organizational-values','Chapter 5','Creating Useful Organizational Values'],['ch06-measuring-engineering','Chapter 6','Measuring Engineering Organizations'],['ch07-mergers-acquisitions','Chapter 7','Mergers and Acquisitions'],['ch08-leadership-styles','Chapter 8','Developing Leadership Styles'],['ch09-priorities-energy','Chapter 9','Managing Your Priorities and Energy'],['ch10-meetings','Chapter 10','Meetings for an Effective Organization'],['ch11-internal-communications','Chapter 11','Internal Communications'],['ch12-prestige','Chapter 12','Building Prestige'],['ch13-ceo-peers-team','Chapter 13','Working with Your CEO, Peers and Team'],['ch14-gelling-team','Chapter 14','Gelling Your Leadership Team'],['ch15-building-network','Chapter 15','Building Your Network'],['ch16-onboarding-peers','Chapter 16','Onboarding Peer Executives'],['ch17-inspected-trust','Chapter 17','Inspected Trust'],['ch18-calibrating-standards','Chapter 18','Calibrating Your Standards'],['ch19-engineering-processes','Chapter 19','How to Run Engineering Processes'],['ch20-hiring','Chapter 20','Hiring'],['ch21-onboarding','Chapter 21','Engineering Onboarding'],['ch22-performance-compensation','Chapter 22','Performance and Compensation'],['ch23-cultural-surveys','Chapter 23','Using Cultural Survey Data'],['ch24-leaving-the-job','Chapter 24','Leaving the Job'],['appendix-bc-interviewing-pnl','Appendices B and C','Interviewing Executives, and the P&L'],['appendix-de-hubs-exploration','Appendices D and E','Engineering Hubs and Exploration']];
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
