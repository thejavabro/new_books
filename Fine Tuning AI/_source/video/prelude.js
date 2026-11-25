/* Chapter list and helpers shared by every animated page of this book. */
const BOOK='Fine-Tuning AI',KICK='Fine-Tuning AI';
const CREDIT='Based on Fine-Tuning AI by Laurence Moroney · original visual summary';
const ORDER=[['ch01-generalist-to-specialist','Chapter 1','From Generalist to Specialist'],['ch02-model-architectures','Chapter 2','Model Architectures: The DNA of AI'],['ch03-fine-tuners-workshop','Chapter 3','The Fine-Tuner’s Workshop'],['ch04-excavating-data','Chapter 4','Excavating Data'],['ch05-synthetic-data','Chapter 5','Synthetic Data'],['ch06-preparing-dataset','Chapter 6','Preparing Your Dataset'],['ch07-mechanics-of-adaptation','Chapter 7','The Mechanics of Adaptation'],['ch08-training-loop','Chapter 8','The Training Loop'],['ch09-using-the-adapter','Chapter 9','Using the Adapter'],['ch10-alignment-preference','Chapter 10','Alignment and Preference Optimization'],['ch11-vision-language-models','Chapter 11','Vision Language Models'],['ch12-diffusion-models','Chapter 12','Diffusion Models'],['ch13-fine-tuning-diffusion','Chapter 13','Fine-Tuning Diffusion Models'],['ch14-optimization-quantization','Chapter 14','Optimization and Quantization'],['ch15-serving-the-expert','Chapter 15','Serving the Expert']];
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
