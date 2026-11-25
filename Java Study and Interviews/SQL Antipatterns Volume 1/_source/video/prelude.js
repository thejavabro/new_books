/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='SQL Antipatterns, Volume 1',KICK='SQL Antipatterns, Volume 1';
const CREDIT='SQL Antipatterns, Volume 1 · Bill Karwin · original visual summary';
const ORDER=[['ch01-whats-an-antipattern','Chapter 1','What’s an Antipattern?'],['ch02-jaywalking','Chapter 2','Jaywalking'],['ch03-naive-trees','Chapter 3','Naive Trees'],['ch04-id-required','Chapter 4','ID Required'],['ch05-keyless-entry','Chapter 5','Keyless Entry'],['ch06-entity-attribute-value','Chapter 6','Entity-Attribute-Value'],['ch07-polymorphic-associations','Chapter 7','Polymorphic Associations'],['ch08-multicolumn-attributes','Chapter 8','Multicolumn Attributes'],['ch09-metadata-tribbles','Chapter 9','Metadata Tribbles'],['ch10-rounding-errors','Chapter 10','Rounding Errors'],['ch11-31-flavors','Chapter 11','31 Flavors'],['ch12-phantom-files','Chapter 12','Phantom Files'],['ch13-index-shotgun','Chapter 13','Index Shotgun'],['ch14-fear-of-the-unknown','Chapter 14','Fear of the Unknown'],['ch15-ambiguous-groups','Chapter 15','Ambiguous Groups'],['ch16-random-selection','Chapter 16','Random Selection'],['ch17-poor-mans-search-engine','Chapter 17','Poor Man’s Search Engine'],['ch18-spaghetti-query','Chapter 18','Spaghetti Query'],['ch19-implicit-columns','Chapter 19','Implicit Columns'],['ch20-readable-passwords','Chapter 20','Readable Passwords'],['ch21-sql-injection','Chapter 21','SQL Injection'],['ch22-pseudokey-neat-freak','Chapter 22','Pseudokey Neat-Freak'],['ch23-see-no-evil','Chapter 23','See No Evil'],['ch24-diplomatic-immunity','Chapter 24','Diplomatic Immunity'],['ch25-standard-operating-procedures','Chapter 25','Standard Operating Procedures'],['ch26-27-foreign-key-mistakes','Chapters 26–27','Foreign Key Mini-Antipatterns'],['appendix-normalization','Appendix','Rules of Normalization']];
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
