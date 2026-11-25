/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='The Phoenix Project',KICK='The Phoenix Project';
const CREDIT='Based on The Phoenix Project by Gene Kim, Kevin Behr and George Spafford · original visual summary';
const ORDER=[['ch01-03-a-promotion','Chapters 1–3','A Promotion Nobody Wanted'],['ch04-07-the-catwalk','Chapters 4–7','Changes, Brent and a Stranger'],['ch08-10-making-work-visible','Chapters 8–10','Making Work Visible'],['ch11-13-phoenix-launch','Chapters 11–13','WIP and the Phoenix Launch'],['ch14-16-unplanned-work','Chapters 14–16','The Fourth Type of Work'],['ch17-19-the-off-site','Chapters 17–19','Trust, Technical Debt and the Freeze'],['ch20-22-work-centers','Chapters 20–22','Work Centers, Audits and Kanban'],['ch23-25-handoffs-and-value','Chapters 23–25','Handoffs and the Business'],['ch26-29-the-second-way','Chapters 26–29','Batch Size and the Second Way'],['ch30-33-project-unicorn','Chapters 30–33','Project Unicorn'],['ch34-35-the-third-way','Chapters 34–35','Black Friday and the Third Way'],['appendix-resource-guide','Resource guide','The Resource Guide']];
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
