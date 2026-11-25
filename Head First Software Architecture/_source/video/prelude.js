/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Head First Software Architecture',KICK='Head First Software Architecture';
const CREDIT='Head First Software Architecture · Gandhi, Richards & Ford · original visual summary';
const ORDER=[['ch01-software-architecture-demystified','Chapter 1','Software Architecture Demystified'],['ch02-architectural-characteristics','Chapter 2','Architectural Characteristics'],['ch03-two-laws','Chapter 3','The Two Laws of Software Architecture'],['ch04-logical-components','Chapter 4','Logical Components'],['ch05-architectural-styles','Chapter 5','Architectural Styles'],['ch06-layered','Chapter 6','Layered Architecture'],['ch07-modular-monolith','Chapter 7','Modular Monoliths'],['ch08-microkernel','Chapter 8','Microkernel Architecture'],['ch09-tripez','Chapter 9','Do It Yourself: The TripEZ Travel App'],['ch10-microservices','Chapter 10','Microservices Architecture'],['ch11-event-driven','Chapter 11','Event-Driven Architecture'],['ch12-make-the-grade','Chapter 12','Do It Yourself: Make the Grade'],['appendix-leftovers','Appendix','Leftovers']];
const line=(n,f)=>Array.from({length:n+1},(_,i)=>[i/n,f(i/n)]);
function CH(c){
  const i=ORDER.findIndex(o=>o[0]===c.slug),o=ORDER[i],nx=ORDER[i+1];
  const scenes=[{type:'title',n:c.n,part:c.part||BOOK,title:o[2],sub:c.sub,acc:'blue'}].concat(c.scenes,[{type:'outro',line:c.end,next:nx?nx[1]+' · '+nx[2]:null,acc:'teal'}]);
  window.SPEC={kick:KICK+' · '+o[1],credit:CREDIT,scenes};
}
