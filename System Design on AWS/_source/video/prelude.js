/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='System Design on AWS',KICK='System Design on AWS';
const CREDIT='System Design on AWS · Kumar &amp; Singh · original visual summary';
const ORDER=[['ch01-tradeoffs','Chapter 1','System Design Trade-offs'],['ch02-relational','Chapter 2','Storage Types and Relational Stores'],['ch03-nonrelational','Chapter 3','Nonrelational Stores'],['ch04-caching','Chapter 4','Caching Policies and Strategies'],['ch05-load-balancing','Chapter 5','Load Balancing Approaches'],['ch06-networks','Chapter 6','Communication Networks and Protocols'],['ch07-containers','Chapter 7','Containers, Orchestration, Deployment'],['ch08-architecture','Chapter 8','Architectural Designs and Patterns'],['ch09-aws-network','Chapter 9','AWS Network Services'],['ch10-aws-storage','Chapter 10','AWS Storage Services'],['ch11-aws-compute','Chapter 11','AWS Compute Services'],['ch12-aws-messaging','Chapter 12','AWS Messaging and Orchestration'],['ch13-aws-analytics','Chapter 13','Big Data, Analytics and ML on AWS'],['ch14-url-shortener','Chapter 14','Designing a URL Shortener'],['ch15-web-crawler','Chapter 15','Designing a Web Crawler and Search'],['ch16-social-network','Chapter 16','Designing a Social Network'],['ch17-game-leaderboard','Chapter 17','Designing a Game Leaderboard'],['ch18-hotel-reservation','Chapter 18','Designing a Hotel Reservation System'],['ch19-chat','Chapter 19','Designing a Chat Application'],['ch20-video-pipeline','Chapter 20','Designing a Video-Processing Pipeline'],['ch21-stock-trading','Chapter 21','Designing a Stock Trading Platform']];
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
