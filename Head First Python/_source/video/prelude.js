/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Head First Python',KICK='Head First Python';
const CREDIT='Based on Head First Python by Paul Barry · original visual summary';
const ORDER=[['ch01-why-python','Chapter 1','Why Python? Similar but Different'],['ch02-make-a-splash','Chapter 2','Diving In: Let’s Make a Splash'],['ch03-lists-of-numbers','Chapter 3','Lists of Numbers'],['ch04-functions-modules','Chapter 4','Functions, Modules and Files'],['ch05-f-strings-charts','Chapter 5','Formatted Strings: Charts from Data'],['ch06-data-structures','Chapter 6','Data Structure Choices'],['ch07-building-a-webapp','Chapter 7','Building a Webapp with Flask'],['ch08-deployment','Chapter 8','Deployment: Run Your Code Anywhere'],['ch09-web-scraping','Chapter 9','Working with HTML: Web Scraping'],['ch10-data-manipulation','Chapter 10','Working with Data'],['ch11-pandas','Chapter 11','Working with Dataframes'],['ch12-databases','Chapter 12','Databases: Getting Organized'],['ch13-list-comprehensions','Chapter 13','List Comprehensions'],['ch14-deployment-revisited','Chapter 14','Deployment Revisited'],['appendix-top-ten','Appendix','The Top Ten Things Not Covered']];
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
