/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Become an Effective Software Engineering Manager',KICK='Become an Effective Software Engineering Manager';
const CREDIT='Based on Become an Effective Software Engineering Manager by James Stanier · original visual summary';
const ORDER=[['ch01-a-new-adventure','Chapter 1','A New Adventure'],['ch02-manage-yourself-first','Chapter 2','Manage Yourself First'],['ch03-interfacing-with-humans','Chapter 3','Interfacing with Humans'],['ch04-one-to-ones','Chapter 4','One-to-Ones'],['ch05-the-right-job-for-the-person','Chapter 5','The Right Job for the Person'],['ch06-performance-reviews','Chapter 6','Performance Reviews'],['ch07-join-us','Chapter 7','Join Us!'],['ch08-game-over','Chapter 8','Game Over'],['ch09-win-friends-influence-people','Chapter 9','Win Friends and Influence People'],['ch10-humans-are-hard','Chapter 10','Humans Are Hard'],['ch11-projects-are-hard','Chapter 11','Projects Are Hard'],['ch12-information-stock-exchange','Chapter 12','The Information Stock Exchange'],['ch13-letting-go-of-control','Chapter 13','Letting Go of Control'],['ch14-good-housekeeping','Chapter 14','Good Housekeeping'],['ch15-dual-ladders','Chapter 15','Dual Ladders'],['ch16-the-modern-workplace','Chapter 16','The Modern Workplace'],['ch17-startups','Chapter 17','Startups'],['ch18-the-crystal-ball','Chapter 18','The Crystal Ball']];
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
