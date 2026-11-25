/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='The Book of Debugging',KICK='The Book of Debugging';
const CREDIT='Based on The Book of Debugging by Johannes Kuhlmann · original visual summary';
const ORDER=[['ch01-the-workflow','The workflow','The Workflow'],['ch02-reproduce-yourself','Reproduce · Strategy 1','Bug Reports and Reproducing the Bug'],['ch03-shorten-feedback-loop','Reproduce · Strategy 2','Shorten the Feedback Loop'],['ch04-automate-reproduction','Reproduce · Strategy 3','Automate the Reproduction'],['ch05-shortcuts-and-search','Probe','Try Shortcuts and Search the Internet'],['ch06-history-and-debugger','Probe','Version Histories and the Debugger'],['ch07-instrument-and-determinism','Probe','Instrument, and Remove Randomness'],['ch08-colleagues-search-dumps','Probe','Colleagues, Searching and Crash Dumps'],['ch09-step-through-code','Examine','Step Through the Code'],['ch10-read-code-follow-data','Examine','Read the Code and Follow the Data'],['ch11-question-experiment-log','Examine','Question, Experiment, Keep a Log'],['ch12-tools-and-minimal-repros','Examine','Your Own Tools and a Minimal Repro'],['ch13-printf-tools-talk','Examine','printf, Off-the-Shelf Tools, Talking'],['ch14-just-fix-it','Fix','Just Fix It, and Share What You Learned'],['ch15-fix-early-quick-fix','Fix','Fix Early, and Deploy a Quick Fix'],['ch16-start-over-creative','Fix','Start Over, or Find a Creative Solution']];
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
