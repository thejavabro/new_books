/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Claude Visual Bible',KICK='Claude Visual Bible';
const CREDIT='Based on Claude Visual Bible · original visual summary';
const ORDER=[['ch00-introduction','Introduction','How This Volume Works'],['ch01-what-claude-can-do','Chapters 1.1–1.2','What Claude Can Do'],['ch02-apps-first-conversation','Chapters 1.3–1.4','Apps and a First Useful Conversation'],['ch03-prompts-through-conversation','Chapter 1.5','Write, Refine and Improve Prompts'],['ch04-learn-and-plan','Chapters 1.6–1.7','Learn Something New, Plan Everyday Life'],['ch05-search-and-research','Chapters 1.8–1.9','Search, Verify and Research'],['ch06-files-memory-projects','Chapters 1.10–1.12','Files, Memory and Projects'],['ch07-safety-and-modes','Chapters 2.1–2.2','Work Safely, Choose the Right Mode'],['ch08-documents-and-summaries','Chapters 2.3–2.4','Draft Documents, Summarize, Extract'],['ch09-spreadsheets-and-data','Chapter 2.5','Analyze Spreadsheets and Data'],['ch10-visuals-and-presentations','Chapters 2.6–2.7','Visuals and Presentations'],['ch11-plugins-connectors-skills','Chapter 2.8','Plugins, Connectors and Skills'],['ch12-weekly-briefing-project','Chapter 2.9','Project: A Useful Weekly Briefing'],['ch13-blocks-and-schedules','Chapters 3.1–3.2','Building Blocks and Scheduled Work'],['ch14-procedure-to-skill','Chapter 3.3','Turn a Procedure into a Skill'],['ch15-skill-library','Chapter 3.4','Build a Library of Skills'],['ch16-mcp-connections','Chapter 3.5','Connect Tools with MCP'],['ch17-computer-use','Chapter 3.6','Control Software with Computer Use'],['ch18-personal-workflows','Chapters 3.7–3.8','Personal Workflows and a Project'],['ch19-better-work','Chapters 4.1–4.3','Choose, Audit and Measure Better Work'],['ch20-skills-and-strengths','Chapters 4.4–4.5','New Skills and Human Strengths'],['ch21-lead-and-promotion','Chapters 4.6–4.7','Lead an Improvement, Build a Case'],['ch22-career-portfolio','Chapters 4.8–4.9','Career Change and a Portfolio'],['ch23-service-and-30-days','Chapters 4.10–4.11','A Service, and a 30-Day Project'],['ch24-epilogue','Epilogue','Beyond One AI']];
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
