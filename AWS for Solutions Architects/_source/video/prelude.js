/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='AWS for Solutions Architects',KICK='AWS for Solutions Architects';
const CREDIT='Based on AWS for Solutions Architects by Shrivastava, Srivastav, Artasanchez and Sayed · original visual summary';
const ORDER=[['ch01-aws-principles','Chapter 1','AWS Principles and Key Characteristics'],['ch02-well-architected','Chapter 2','The Well-Architected Framework'],['ch03-digital-transformation','Chapter 3','The Cloud for Digital Transformation'],['ch04-networking','Chapter 4','Networking in AWS'],['ch05-storage','Chapter 5','Storage in AWS'],['ch06-compute','Chapter 6','Cloud Computing Power'],['ch07-databases','Chapter 7','Selecting the Right Database'],['ch08-security','Chapter 8','Security, Identity and Compliance'],['ch09-cloudops','Chapter 9','Driving Efficiency with CloudOps'],['ch10-big-data-streaming','Chapter 10','Big Data and Streaming'],['ch11-warehouses-queries','Chapter 11','Warehouses, Queries and Visualization'],['ch12-ml-iot-blockchain','Chapter 12','Machine Learning, IoT and Blockchain'],['ch13-containers','Chapter 13','Containers in AWS'],['ch14-microservices','Chapter 14','Microservice Architectures'],['ch15-data-lakes','Chapter 15','Data Lake Patterns'],['ch16-hands-on-app','Chapter 16','Building an App in AWS']];
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
