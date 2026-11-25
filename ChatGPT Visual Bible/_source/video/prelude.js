/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='ChatGPT Visual Bible',KICK='ChatGPT Visual Bible';
const CREDIT='Based on ChatGPT Visual Bible by Mark J. Price · original visual summary';
const ORDER=[['ch00-introduction','Introduction','How This Volume Works'],['ch01-what-chatgpt-can-do','Chapters 1.1–1.2','What ChatGPT Can Do, and Your Account'],['ch02-devices-first-conversation','Chapters 1.3–1.4','Devices and a First Conversation'],['ch03-prompts','Chapter 1.5','Write, Refine and Improve Prompts'],['ch04-learn-and-plan','Chapters 1.6–1.7','Learn Something New, Plan Real Choices'],['ch05-search-research-files','Chapters 1.8–1.10','Search, Deep Research and Your Files'],['ch06-personalize-workbench','Chapters 1.11–1.12','Instructions, Memory and Projects'],['ch07-safety-and-modes','Chapters 2.1–2.2','Work Safely, and Pick a Mode'],['ch08-documents-summaries','Chapters 2.3–2.4','Draft Documents, Extract What Matters'],['ch09-spreadsheets','Chapter 2.5','Analyze Spreadsheets and Data'],['ch10-images-presentations','Chapters 2.6–2.7','Images, Diagrams and Presentations'],['ch11-plugins-briefing','Chapters 2.8–2.9','Plugins, Skills and a Weekly Briefing'],['ch12-automation-scheduling','Chapters 3.1–3.2','Automation and Scheduling'],['ch13-skills-gpts','Chapters 3.3–3.4','Reusable Skills and Custom GPTs'],['ch14-workflows','Chapters 3.5–3.8','Workflows for Life, Content, Operations'],['ch15-direction-audit-measure','Chapters 4.1–4.3','Direction, Audit and Measurement'],['ch16-skills-strengths-lead','Chapters 4.4–4.6','Learn, Stay Human, Lead a Pilot'],['ch17-promotion-jobs-voice','Chapters 4.7–4.9','Promotion, a New Job, Rehearsal'],['ch18-portfolio-product-field','Chapters 4.10–4.13','Case Studies, Offers and Your Field'],['ch19-epilogue','Epilogue','What Stays True']];
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
