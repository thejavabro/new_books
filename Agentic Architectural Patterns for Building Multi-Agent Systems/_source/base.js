/* shared helpers: DOM, widgets, and a tiny SVG drawing kit */
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
function press(group,btn){group.querySelectorAll(':scope > button').forEach(b=>b.setAttribute('aria-pressed',b===btn?'true':'false'))}
function seg(sel,fn){$$(sel+' > button').forEach(b=>b.addEventListener('click',()=>{press(b.parentNode,b);fn(b.dataset.v,b)}))}
function segBuild(sel,opts,fn,start){const r=$(sel);r.classList.add('seg');r.setAttribute('role','group');r.innerHTML=opts.map((o,i)=>`<button data-v="${i}" aria-pressed="${i===(start||0)}">${o}</button>`).join('');seg(sel,v=>fn(+v));fn(start||0)}
function chips(list,cls){return '<span class="chips">'+list.map(c=>`<span class="chip ${cls||''}">${c}</span>`).join('')+'</span>'}
/* quiz: root is an empty div; builds title, score and rows */
function quiz(sel,title,items,labels){
  const r=$(sel);r.classList.add('sheet');r.innerHTML=`<div class="row between"><h3>${title}</h3><span class="score"></span></div><div class="quiz"></div>`;
  const root=r.querySelector('.quiz'),scoreEl=r.querySelector('.score');let right=0,done=0;
  items.forEach(it=>{const L=it.o||labels;const row=document.createElement('div');row.className='q'+(L.join('').length>60?' long':'');
    row.innerHTML=`<span>${it.q}</span><div class="opts">${L.map((l,i)=>`<button data-i="${i}">${l}</button>`).join('')}</div>`;
    const fb=document.createElement('div');fb.className='fb';fb.hidden=true;row.appendChild(fb);
    row.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
      if(row.dataset.done)return;row.dataset.done=1;done++;const ok=+b.dataset.i===it.a;if(ok)right++;
      b.classList.add(ok?'right':'wrong');if(!ok)row.querySelector(`[data-i="${it.a}"]`).classList.add('right');
      fb.hidden=false;fb.className='fb '+(ok?'good':'badf');fb.textContent=(ok?'Right. ':'Not quite. ')+it.why;
      scoreEl.textContent=`${right} / ${items.length}`+(done===items.length?(right===items.length?' · perfect':' · try the misses again after rereading'):'');}));
    root.appendChild(row);});
  scoreEl.textContent=`0 / ${items.length}`;
}
/* flip cards from data: [title, subtitle, back] */
function cards(sel,list,hint){const r=$(sel);r.classList.add('cardgrid');r.innerHTML=list.map(c=>`<button class="flip" aria-expanded="false"><b>${c[0]}</b>${c[1]?`<span>${c[1]}</span>`:''}<span class="front-hint">${hint||'tap to reveal'}</span><span class="back">${c[2]}</span></button>`).join('');
  r.querySelectorAll('.flip').forEach(f=>f.addEventListener('click',()=>f.setAttribute('aria-expanded',f.getAttribute('aria-expanded')==='true'?'false':'true')))}
/* storyboard: steps [{cap, svg:string|fn()}] rendered into a fresh svg each step so animations restart */
function story(sel,steps,o){o=o||{};const r=$(sel);r.classList.add('story');
  r.innerHTML=`<div class="svgbox ${o.narrow?'narrow':''}"></div><div class="step-cap" aria-live="polite"></div><div class="row"><button class="btn" data-prev>Back</button><button class="btn primary" data-next>Next step</button><button class="btn" data-play aria-pressed="false">Autoplay</button><span class="dots">${steps.map((_,k)=>`<i data-k="${k}" title="Step ${k+1}"></i>`).join('')}</span></div>`;
  const box=r.querySelector('.svgbox'),cap=r.querySelector('.step-cap'),prev=r.querySelector('[data-prev]'),next=r.querySelector('[data-next]'),play=r.querySelector('[data-play]');let i=0,tm=null;
  function go(n){i=(n+steps.length)%steps.length;const s=steps[i];box.innerHTML=typeof s.svg==='function'?s.svg(i):s.svg;
    cap.innerHTML=`<b>${s.t||('Step '+(i+1))}.</b> ${s.cap}`;r.querySelectorAll('.dots i').forEach((d,k)=>d.classList.toggle('on',k<=i));
    prev.disabled=i===0;next.textContent=i===steps.length-1?'Replay':'Next step';if(o.on)o.on(i)}
  prev.onclick=()=>go(i-1);next.onclick=()=>go(i+1);r.querySelectorAll('.dots i').forEach(d=>d.onclick=()=>go(+d.dataset.k));
  play.onclick=()=>{if(tm){clearInterval(tm);tm=null;play.setAttribute('aria-pressed','false');play.textContent='Autoplay'}else{play.setAttribute('aria-pressed','true');play.textContent='Pause';tm=setInterval(()=>go(i+1),o.ms||3600)}};
  go(0);return go}
/* pattern explorer: list [{n,tag,ctx,prob,sol,ex,pro:[],con:[],use,svg}] */
function patterns(sel,list,o){o=o||{};const r=$(sel);r.classList.add('stack');
  r.innerHTML=`<div class="pgrid" role="group" aria-label="Patterns">${list.map((p,i)=>`<button class="pbtn" data-i="${i}" aria-pressed="false"><b>${p.n}</b><span>${p.tag||''}</span></button>`).join('')}</div><div class="sheet pslot" aria-live="polite"></div>`;
  const slot=r.querySelector('.pslot');
  function show(i){const p=list[i];r.querySelectorAll('.pbtn').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.i===i?'true':'false'));
    slot.innerHTML=`<div class="pcard"><div class="row between"><h3>${p.n}</h3>${p.tag?`<span class="chip">${p.tag}</span>`:''}</div>
    ${p.svg?`<div class="svgbox">${typeof p.svg==='function'?p.svg():p.svg}</div>`:''}
    <div class="pair">${p.ctx?`<b>Context</b><span>${p.ctx}</span>`:''}<b>Problem</b><span>${p.prob}</span><b>Solution</b><span>${p.sol}</span>${p.ex?`<b>Book example</b><span>${p.ex}</span>`:''}
    <b>Trade-offs</b><div class="two"><ul class="pro">${(p.pro||[]).map(x=>`<li>${x}</li>`).join('')}</ul><ul class="con">${(p.con||[]).map(x=>`<li>${x}</li>`).join('')}</ul></div>
    ${p.use?`<b>Reach for it</b><span>${p.use}</span>`:''}</div></div>`;if(o.on)o.on(i)}
  r.querySelectorAll('.pbtn').forEach(b=>b.onclick=()=>show(+b.dataset.i));show(o.start||0);return show}
/* scripted chat: lines [[who,text]], who in names {a:'Name',b:'Name',c:'Name'} */
function chat(sel,lines,names,start){const r=$(sel);r.classList.add('stack');r.innerHTML=`<div class="chat"></div><div class="row"><button class="btn primary" data-n>Next line</button><button class="btn" data-all>Show all</button><button class="btn" data-r>Restart</button></div>`;
  const box=r.querySelector('.chat'),nb=r.querySelector('[data-n]');let ci=start==null?1:start;
  function ren(){box.innerHTML=lines.slice(0,ci).map(c=>`<div class="bub ${c[0]}"><b>${names[c[0]]}</b>${c[1]}</div>`).join('')||'<p class="small">Press "Next line" to start.</p>';nb.disabled=ci>=lines.length}
  nb.onclick=()=>{ci++;ren()};r.querySelector('[data-all]').onclick=()=>{ci=lines.length;ren()};r.querySelector('[data-r]').onclick=()=>{ci=0;ren()};ren()}
/* sort game: items [{t, z}] zones [names] */
function sorter(sel,title,items,zones,whys){const r=$(sel);r.classList.add('sheet');
  r.innerHTML=`<div class="row between"><h3>${title}</h3><span class="score"></span></div><p class="small">Pick a card, then pick the box it belongs in.</p><div class="deck"></div><div class="zones">${zones.map((z,i)=>`<button class="zone" data-z="${i}"><h3>${z}</h3></button>`).join('')}</div><p class="small fbk" aria-live="polite"></p>`;
  const deck=r.querySelector('.deck'),sc=r.querySelector('.score'),fbk=r.querySelector('.fbk');let sel_=null,ok=0,n=0;
  items.slice().sort(()=>Math.random()-.5).forEach(it=>{const b=document.createElement('button');b.className='card';b.textContent=it.t;b._it=it;b.setAttribute('aria-pressed','false');
    b.onclick=()=>{if(b.parentNode!==deck)return;deck.querySelectorAll('.card').forEach(c=>c.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');sel_=b};deck.appendChild(b)});
  r.querySelectorAll('.zone').forEach(z=>z.onclick=()=>{if(!sel_)return;const it=sel_._it,good=+z.dataset.z===it.z;n++;if(good)ok++;sel_.setAttribute('aria-pressed','false');sel_.classList.add(good?'ok':'no');
    (good?z:r.querySelector(`[data-z="${it.z}"]`)).appendChild(sel_);fbk.textContent=(good?'Right: ':'It belongs in '+zones[it.z]+': ')+(it.why||'');sel_=null;sc.textContent=`${ok} / ${items.length}`});
  sc.textContent=`0 / ${items.length}`}
function bars(sel,rows,max){$(sel).classList.add('bars');$(sel).innerHTML=rows.map(r=>`<div class="bar-row"><span>${r[0]}</span><span class="track"><i style="width:${Math.max(0,Math.min(100,r[1]/(max||100)*100))}%;background:${r[2]||'var(--blue)'}"></i></span><span>${r[3]!=null?r[3]:r[1]}</span></div>`).join('')}
function logLine(el,cls,txt){const d=document.createElement('div');d.className=cls;d.textContent=txt;el.appendChild(d);el.scrollTop=el.scrollHeight}
function slider(sel,fn){const el=$(sel),out=el.parentNode.querySelector('output');const u=()=>{if(out)out.textContent=fn?fn(+el.value):el.value};el.addEventListener('input',u);u();return el}

/* ---- SVG kit. Colours are token names: blue, pencil, ok, bad, d2, d3, d4, muted, ink ---- */
function wrapT(s,w,fs){s=String(s);if(!w||s.includes('\n'))return s;const max=Math.max(4,Math.floor(w/(fs*0.54)));if(s.length<=max)return s;const out=[];let cur='';s.split(' ').forEach(word=>{if((cur+' '+word).trim().length>max&&cur){out.push(cur);cur=word}else cur=(cur+' '+word).trim()});if(cur)out.push(cur);return out.join('\n')}
const S={
 soft:c=>({blue:'var(--blue-soft)',pencil:'var(--pencil-soft)',ok:'var(--ok-soft)',bad:'var(--bad-soft)',d2:'var(--d2-soft)',d3:'var(--d3-soft)',d4:'var(--d4-soft)',muted:'var(--paper)',ink:'var(--paper)'}[c]||'var(--surface)'),
 col:c=>`var(--${c||'blue'})`,
 svg:(vb,inner,label)=>`<svg viewBox="${vb}" role="img" aria-label="${esc(label||'diagram')}">${inner}</svg>`,
 txt:(x,y,s,o={})=>{const lines=String(s).split('\n'),fs=o.fs||13,lh=fs*1.25;const y0=y-(lines.length-1)*lh/2;
   return `<text x="${x}" y="${y0}" text-anchor="${o.a||'middle'}" dominant-baseline="middle" font-size="${fs}" ${o.w?`font-weight="${o.w}"`:''} fill="${o.c?S.col(o.c):'var(--ink)'}" ${o.mono?'class="t-mono"':''} ${o.op!=null?`opacity="${o.op}"`:''}>${lines.map((l,i)=>`<tspan x="${x}" dy="${i?lh:0}">${esc(l)}</tspan>`).join('')}</text>`},
 box:(x,y,w,h,t,o={})=>{const c=o.c||'blue';return `<g ${o.id?`id="${o.id}"`:''} class="${o.cls||''}" ${o.op!=null?`opacity="${o.op}"`:''}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r!=null?o.r:8}" fill="${o.fill||(o.solid?S.col(c):S.soft(c))}" stroke="${S.col(c)}" stroke-width="${o.sw||1.6}" ${o.dash?'stroke-dasharray="5 4"':''}/>`+
   (t!==''&&t!=null?S.txt(x+w/2,y+(o.sub?h/2-7:h/2),wrapT(t,w-12,o.fs||13),{fs:o.fs||13,w:o.w||600,c:o.solid?'surface':(o.tc||'ink')}):'')+(o.sub?S.txt(x+w/2,y+h/2+10,o.sub,{fs:o.sfs||11,c:o.solid?'surface':'muted'}):'')+'</g>'},
 agent:(x,y,t,o={})=>{const c=o.c||'blue',r=o.r||22;return `<g class="${o.cls||''}" ${o.op!=null?`opacity="${o.op}"`:''}><line x1="${x}" y1="${y-r}" x2="${x}" y2="${y-r-7}" stroke="${S.col(c)}" stroke-width="2"/><circle cx="${x}" cy="${y-r-9}" r="3" fill="${S.col(c)}"/><rect x="${x-r}" y="${y-r}" width="${2*r}" height="${2*r}" rx="${r*.45}" fill="${o.solid?S.col(c):S.soft(c)}" stroke="${S.col(c)}" stroke-width="2"/><circle cx="${x-r*.36}" cy="${y-r*.12}" r="${r*.13}" fill="${o.solid?'var(--surface)':S.col(c)}"/><circle cx="${x+r*.36}" cy="${y-r*.12}" r="${r*.13}" fill="${o.solid?'var(--surface)':S.col(c)}"/><path d="M${x-r*.35},${y+r*.38} h${r*.7}" stroke="${o.solid?'var(--surface)':S.col(c)}" stroke-width="2" stroke-linecap="round"/>${o.badge?`<circle cx="${x+r}" cy="${y-r}" r="9" fill="${S.col(o.bc||'pencil')}"/>`+S.txt(x+r,y-r+.5,o.badge,{fs:10,w:700,c:'surface'}):''}`+(t?S.txt(x,y+r+(o.ly||14),t,{fs:o.fs||12,w:600}):'')+'</g>'},
 human:(x,y,t,o={})=>{const c=o.c||'pencil';return `<g class="${o.cls||''}"><circle cx="${x}" cy="${y-12}" r="9" fill="${S.soft(c)}" stroke="${S.col(c)}" stroke-width="2"/><path d="M${x-16},${y+16} q0,-18 16,-18 q16,0 16,18 z" fill="${S.soft(c)}" stroke="${S.col(c)}" stroke-width="2"/>`+(t?S.txt(x,y+30,t,{fs:o.fs||12,w:600}):'')+'</g>'},
 db:(x,y,w,h,t,o={})=>{const c=o.c||'d2',e=8;return `<g class="${o.cls||''}"><path d="M${x},${y+e} v${h-2*e} a${w/2},${e} 0 0 0 ${w},0 v${-(h-2*e)}" fill="${S.soft(c)}" stroke="${S.col(c)}" stroke-width="1.6"/><ellipse cx="${x+w/2}" cy="${y+e}" rx="${w/2}" ry="${e}" fill="${S.soft(c)}" stroke="${S.col(c)}" stroke-width="1.6"/>`+(t?S.txt(x+w/2,y+h/2+4,t,{fs:o.fs||12,w:600}):'')+'</g>'},
 tool:(x,y,t,o={})=>{const c=o.c||'d3',r=o.r||16;const pts=[0,1,2,3,4,5].map(k=>`${x+r*Math.cos(Math.PI/3*k)},${y+r*Math.sin(Math.PI/3*k)}`).join(' ');return `<g class="${o.cls||''}"><polygon points="${pts}" fill="${S.soft(c)}" stroke="${S.col(c)}" stroke-width="1.8"/><circle cx="${x}" cy="${y}" r="${r*.33}" fill="none" stroke="${S.col(c)}" stroke-width="1.8"/>`+(t?S.txt(x,y+r+12,t,{fs:o.fs||11,w:600}):'')+'</g>'},
 doc:(x,y,w,h,t,o={})=>{const c=o.c||'muted',f=10;return `<g class="${o.cls||''}"><path d="M${x},${y} h${w-f} l${f},${f} v${h-f} h${-w} z" fill="var(--surface)" stroke="${S.col(c)}" stroke-width="1.5"/>${[0.35,0.55,0.75].map(k=>`<line x1="${x+6}" x2="${x+w-8}" y1="${y+h*k}" y2="${y+h*k}" stroke="var(--line)" stroke-width="2"/>`).join('')}`+(t?S.txt(x+w/2,y+h+12,t,{fs:o.fs||11}):'')+'</g>'},
 shield:(x,y,s,o={})=>{const c=o.c||'ok';s=s||18;return `<path d="M${x},${y-s} l${s*.85},${s*.35} v${s*.5} q0,${s*.75} ${-s*.85},${s*1.15} q${-s*.85},${-s*.4} ${-s*.85},${-s*1.15} v${-s*.5} z" fill="${S.soft(c)}" stroke="${S.col(c)}" stroke-width="1.8"/>`},
 arrow:(x1,y1,x2,y2,o={})=>{const c=o.c||'muted';let d;if(o.bend){const mx=(x1+x2)/2,my=(y1+y2)/2,dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy)||1;d=`M${x1},${y1} Q${mx-dy/L*o.bend},${my+dx/L*o.bend} ${x2},${y2}`}else d=`M${x1},${y1} L${x2},${y2}`;
   return `<path ${o.id?`id="${o.id}"`:''} d="${d}" fill="none" stroke="${S.col(c)}" stroke-width="${o.sw||1.8}" ${o.flow&&!RM?'class="flow"':''} ${o.dash?'stroke-dasharray="5 5"':''} ${o.noHead?'':`marker-end="url(#ah-${c})"`} ${o.both?`marker-start="url(#ah-${c})"`:''} ${o.op!=null?`opacity="${o.op}"`:''}/>`+(o.label?S.txt((x1+x2)/2+(o.lx||0),(y1+y2)/2+(o.ly||-9),o.label,{fs:o.lfs||11,c:o.lc||'muted'}):'')+(o.pkt?S.pkt(d,o.pkt===true?{c:o.pc||'pencil'}:o.pkt):'')},
 path:(x1,y1,x2,y2,bend)=>{if(!bend)return `M${x1},${y1} L${x2},${y2}`;const mx=(x1+x2)/2,my=(y1+y2)/2,dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy)||1;return `M${x1},${y1} Q${mx-dy/L*bend},${my+dx/L*bend} ${x2},${y2}`},
 pkt:(d,o={})=>{if(RM)return '';const c=o.c||'pencil';return `<circle r="${o.r||5.5}" fill="${S.col(c)}" opacity="0"><animateMotion dur="${o.dur||1.8}s" begin="${o.delay||0}s" ${o.once?'fill="freeze"':'repeatCount="indefinite"'} path="${d}"/><set attributeName="opacity" to="1" begin="${o.delay||0}s"/></circle>`},
 pill:(x,y,t,o={})=>{const c=o.c||'blue',w=o.w||(String(t).length*7+18),h=o.h||22;return `<g><rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="${h/2}" fill="${o.solid?S.col(c):S.soft(c)}" stroke="${S.col(c)}" stroke-width="1.4"/>`+S.txt(x,y+.5,t,{fs:o.fs||11,w:600,c:o.solid?'surface':c,mono:o.mono})+'</g>'},
 tick:(x,y,ok,o={})=>`<g><circle cx="${x}" cy="${y}" r="${o.r||10}" fill="${ok?'var(--ok)':'var(--bad)'}"/>`+S.txt(x,y+1,ok?'✓':'✕',{fs:o.fs||12,w:700,c:'surface'})+'</g>',
 g:(inner,o={})=>`<g ${o.cls?`class="${o.cls}"`:''} ${o.op!=null?`opacity="${o.op}"`:''} ${o.tf?`transform="${o.tf}"`:''}>${inner}</g>`,
 ring:(cx,cy,r,o={})=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${S.col(o.c||'line')}" stroke-width="${o.sw||1.5}" ${o.dash?'stroke-dasharray="4 5"':''} ${o.flow&&!RM?'class="flow"':''}/>`,
};
