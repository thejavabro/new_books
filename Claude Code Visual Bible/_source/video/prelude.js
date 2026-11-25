/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Claude Code Visual Bible',KICK='Claude Code Visual Bible';
const CREDIT='Based on Claude Code Visual Bible by Mark J. Price · original visual summary';
const ORDER=[['ch00-introduction','Introduction','From Chatting to Building'],['ch01-agent-and-workspace','Chapters 1.1–1.2','Claude Code and Your Workspace'],['ch02-terminal-first-build','Chapters 1.3–1.4','The Terminal and Your First Build'],['ch03-pieces-and-brief','Chapters 1.5–1.6','Software Pieces and the Build Brief'],['ch04-prompts-plans-memory','Chapters 1.7–1.8','Prompts, Plans and Project Memory'],['ch05-git-and-debugging','Chapters 1.9–1.10','Diffs, Git and Calm Debugging'],['ch06-secrets-and-tool-project','Chapters 1.11–1.12','Secrets, Skepticism, a First Tool'],['ch07-plan-site-and-html','Chapters 2.1–2.2','Plan the Website, Structure with HTML'],['ch08-css-system-and-layout','Chapters 2.3–2.4','A Visual System and Layout with CSS'],['ch09-responsive-nav-images','Chapters 2.5–2.7','Responsive Design, Navigation, Images'],['ch10-javascript-and-forms','Chapters 2.8–2.9','JavaScript and a Contact Form'],['ch11-audit-and-publish','Chapters 2.10–2.11','Audit the Site and Publish It'],['ch12-website-project','Chapter 2.12','Project: Your Own Website'],['ch13-app-brief-and-expo','Chapters 3.1–3.2','Define the App, Run It with Expo'],['ch14-project-tour-and-components','Chapters 3.3–3.4','Tour the Project, Build Components'],['ch15-navigation-and-state','Chapters 3.5–3.6','Navigation, Props and State'],['ch16-forms-and-crud','Chapters 3.7–3.8','Validated Forms and CRUD'],['ch17-persistence-reminders-sharing','Chapters 3.9–3.10','Persistence, Reminders and Sharing'],['ch18-test-and-prepare-release','Chapters 3.11–3.12','Test on a Device, Prepare for Release'],['ch19-ship-and-app-project','Chapters 3.13–3.14','Build, Beta Test and Submit'],['ch20-epilogue','Epilogue','Keep Building']];
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
