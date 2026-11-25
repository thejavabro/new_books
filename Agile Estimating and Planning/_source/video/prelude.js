/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Agile Estimating and Planning',KICK='Agile Estimating and Planning';
const CREDIT='Based on Agile Estimating and Planning by Mike Cohn · original visual summary';
const ORDER=[['ch01-the-purpose-of-planning','Chapter 1','The Purpose of Planning'],['ch02-why-planning-fails','Chapter 2','Why Planning Fails'],['ch03-an-agile-approach','Chapter 3','An Agile Approach'],['ch04-estimating-size-with-story-points','Chapter 4','Estimating Size with Story Points'],['ch05-estimating-in-ideal-days','Chapter 5','Estimating in Ideal Days'],['ch06-techniques-for-estimating','Chapter 6','Techniques for Estimating'],['ch07-re-estimating','Chapter 7','Re-Estimating'],['ch08-choosing-points-or-ideal-days','Chapter 8','Story Points or Ideal Days'],['ch09-prioritizing-themes','Chapter 9','Prioritizing Themes'],['ch10-financial-prioritization','Chapter 10','Financial Prioritization'],['ch11-prioritizing-desirability','Chapter 11','Prioritizing Desirability'],['ch12-splitting-user-stories','Chapter 12','Splitting User Stories'],['ch13-release-planning-essentials','Chapter 13','Release Planning Essentials'],['ch14-iteration-planning','Chapter 14','Iteration Planning'],['ch15-selecting-an-iteration-length','Chapter 15','Selecting an Iteration Length'],['ch16-estimating-velocity','Chapter 16','Estimating Velocity'],['ch17-buffering-plans-for-uncertainty','Chapter 17','Buffering Plans for Uncertainty'],['ch18-planning-the-multi-team-project','Chapter 18','Planning the Multi-Team Project'],['ch19-monitoring-the-release-plan','Chapter 19','Monitoring the Release Plan'],['ch20-monitoring-the-iteration-plan','Chapter 20','Monitoring the Iteration Plan'],['ch21-communicating-about-plans','Chapter 21','Communicating About Plans'],['ch22-why-agile-planning-works','Chapter 22','Why Agile Planning Works'],['ch23-case-study-bomb-shelter-studios','Chapter 23','Case Study: Bomb Shelter Studios']];
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
