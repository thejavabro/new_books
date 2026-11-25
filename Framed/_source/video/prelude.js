/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Framed!',KICK='Framed!';
const CREDIT='Based on Framed! by Hari Singh · original visual summary';
const ORDER=[['ch01-fight-or-flight','Chapter 1','Fight or Flight?'],['ch02-thriving-on-stupidity','Chapter 2','Thriving on Stupidity'],['ch03-the-name-of-the-game-is-the-frame','Chapter 3','The Name of the Game is the Frame'],['ch04-rewriting-the-script','Chapter 4','Rewriting the Script'],['ch05-weigh-the-anchor','Chapter 5','Weigh the Anchor without Rancor'],['ch06-cause-and-effect','Chapter 6','Cause and Effect Is Hard to Detect'],['ch07-gravitate-to-your-risk-taste','Chapter 7','Gravitate to Your Own Risk Taste'],['ch08-murder-or-suicide','Chapter 8','Murder or Suicide? You Decide'],['ch09-values-and-facts','Chapter 9','Values and Facts'],['ch10-shortcuts-that-undercut','Chapter 10','Shortcuts that Undercut'],['ch11-dissect-the-suspects','Chapter 11','Dissect the Suspects'],['ch12-track-the-feedback','Chapter 12','Track the Feedback'],['ch13-verify-the-alibi','Chapter 13','Verify the Alibi'],['ch14-negotiate-and-trust','Chapter 14','Negotiate and Trust or Go Bust'],['ch15-wars-that-resolve','Chapter 15','WARS that Resolve'],['ch16-tamper-with-the-anchor','Chapter 16','Tamper with the Anchor'],['ch17-spot-your-blots','Chapter 17','Can You Spot Your Blots?'],['ch18-the-frame-is-the-name-of-the-game','Chapter 18','The Frame is the Name of the Game'],['ch19-what-means-to-what-ends','Chapter 19','What Means to What Ends?'],['ch20-a-look-in-the-mirror','Chapter 20','A Look in the Mirror'],['epilogue-the-heart-of-the-matter','Epilogue','The Heart of the Matter'],['toolkit-checklist-and-glossary','Toolkit','The Decision Toolkit']];
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
