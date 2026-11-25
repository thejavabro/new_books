/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Spring Internals',KICK='Spring Internals';
const CREDIT='Spring Internals · original visual summary';
const ORDER=[['ch01-big-picture','Page 1','The Big Picture'],['ch02-container','Page 2','The Container'],['ch03-dependency-injection','Page 3','Dependency Injection'],['ch04-bean-lifecycle','Page 4','The Bean Lifecycle'],['ch05-proxies','Page 5','Proxies: JDK Dynamic vs CGLIB'],['ch06-aop','Page 6','AOP: Aspects, Pointcuts, Advice'],['ch07-transactions','Page 7','@Transactional and Self-Invocation'],['ch08-auto-configuration','Page 8','Spring Boot Auto-Configuration'],['ch09-boot-startup','Page 9','Spring Boot Startup'],['ch10-request-journey','Page 10','A Request’s Journey'],['ch11-security','Page 11','Spring Security Internals'],['ch12-data-jpa','Page 12','Spring Data JPA'],['ch13-webflux','Page 13','WebFlux and Reactive'],['ch14-actuator','Page 14','Actuator and Observability'],['ch15-exceptions','Page 15','Exception Handling'],['ch16-events-async','Page 16','Events, @Async and @Scheduled'],['ch17-caching','Page 17','Caching'],['ch18-configuration','Page 18','Configuration and Profiles'],['ch19-testing','Page 19','Testing Spring Boot'],['ch20-spring-cloud','Page 20','Microservices with Spring Cloud'],['ch21-virtual-threads','Page 21','Virtual Threads in Boot']];
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
