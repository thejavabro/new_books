/* Shared helpers for every chapter page. */
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const NS='http://www.w3.org/2000/svg';
function el(tag,attrs,txt){const e=document.createElementNS(NS,tag);for(const k in (attrs||{}))e.setAttribute(k,attrs[k]);if(txt!=null)e.textContent=txt;return e}
function press(group,btn){group.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===btn?'true':'false'))}
function seg(sel,fn){$$(sel).forEach(b=>b.addEventListener('click',()=>{press(b.parentNode,b);fn(b)}))}
const store={get(k,d){try{const v=localStorage.getItem('acc:'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('acc:'+k,JSON.stringify(v))}catch(e){}}};
function quiz(root,scoreEl,items,labels){
  let right=0;root=typeof root==='string'?$(root):root;scoreEl=typeof scoreEl==='string'?$(scoreEl):scoreEl;
  items.forEach(it=>{const L=it.o||labels;
    const row=document.createElement('div');row.className='q';
    row.innerHTML=`<span>${it.q}</span><div class="opts">${L.map((l,i)=>`<button data-i="${i}">${l}</button>`).join('')}</div>`;
    const fb=document.createElement('div');fb.className='fb';fb.hidden=true;row.appendChild(fb);
    row.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
      if(row.dataset.done)return;row.dataset.done=1;const ok=+b.dataset.i===it.a;if(ok)right++;
      b.classList.add(ok?'right':'wrong');if(!ok)row.querySelector(`[data-i="${it.a}"]`).classList.add('right');
      fb.hidden=false;fb.className='fb '+(ok?'good':'badf');fb.textContent=(ok?'Right. ':'Not quite. ')+it.why;
      scoreEl.textContent=`${right} / ${items.length}`;}));
    root.appendChild(row);});
  scoreEl.textContent=`0 / ${items.length}`;
}
/* stepper: root holds .step-cap, .dots, [data-prev], [data-next]; apply(i) updates the drawing */
function stepper(id,steps,apply){
  const r=$(id);let i=0;const cap=r.querySelector('.step-cap'),dots=r.querySelector('.dots'),prev=r.querySelector('[data-prev]'),next=r.querySelector('[data-next]');
  dots.innerHTML=steps.map(()=>'<i></i>').join('');
  function go(n){i=Math.max(0,Math.min(steps.length-1,n));cap.innerHTML=`<b>Step ${i+1} of ${steps.length}.</b> ${steps[i]}`;dots.querySelectorAll('i').forEach((d,k)=>d.classList.toggle('on',k<=i));prev.disabled=i===0;next.textContent=i===steps.length-1?'Replay':'Next step';apply(i)}
  prev.addEventListener('click',()=>go(i-1));next.addEventListener('click',()=>go(i===steps.length-1?0:i+1));go(0);return go;
}
function stepHTML(){return '<div class="step-cap"></div><div class="row between"><div class="dots"></div><div class="row"><button class="btn" data-prev>Back</button><button class="btn primary" data-next>Next step</button></div></div>'}
/* cards: [{t,d}] into a grid of tap-to-open cards */
function cards(sel,list){const r=$(sel);r.innerHTML=list.map(c=>`<button class="flip" aria-expanded="false"${c.c?` style="border-top:4px solid var(--${c.c})"`:''}><b>${c.t}</b><span class="more">${c.d}</span></button>`).join('');
  r.querySelectorAll('.flip').forEach(f=>f.addEventListener('click',()=>f.setAttribute('aria-expanded',f.getAttribute('aria-expanded')==='true'?'false':'true')))}
/* html bars: [{l,v,c,txt}] with max */
function bars(sel,data,max,fmt){const r=typeof sel==='string'?$(sel):sel;fmt=fmt||(v=>v);
  r.innerHTML=data.map(d=>`<div class="bar"><span>${d.l}</span><div class="track"><div class="fill" style="background:var(--${d.c||'blue'})"></div></div><span class="val">${d.txt!=null?d.txt:fmt(d.v)}</span></div>`).join('');
  requestAnimationFrame(()=>requestAnimationFrame(()=>r.querySelectorAll('.fill').forEach((f,i)=>f.style.width=Math.max(0,Math.min(100,data[i].v/max*100))+'%')))}
/* likert: statements -> 1..7 buttons, cb(mean, answers) */
function likert(sel,items,cb,init){const r=$(sel);const ans=items.map((_,i)=>init?init[i]:4);
  r.innerHTML=items.map((t,i)=>`<div class="it"><span>${t}</span><div class="sc" role="group" aria-label="Agreement 1 to 7">${[1,2,3,4,5,6,7].map(n=>`<button data-i="${i}" data-n="${n}" aria-pressed="${ans[i]===n}">${n}</button>`).join('')}</div></div>`).join('');
  r.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{ans[+b.dataset.i]=+b.dataset.n;press(b.parentNode,b);cb(ans.reduce((a,b)=>a+b,0)/ans.length,ans)}));
  cb(ans.reduce((a,b)=>a+b,0)/ans.length,ans);}
/* box-and-arrow research model. spec {nodes:[{id,x,y,w,h,t,c}], edges:[[from,to,neg]], info:{id:html}, start} */
function graph(svgSel,spec,infoSel){
  const svg=$(svgSel),info=infoSel?$(infoSel):null;svg.innerHTML='';
  const N={};spec.nodes.forEach(n=>{n.w=n.w||150;n.h=n.h||52;N[n.id]=n});
  const gE=el('g'),gN=el('g');svg.appendChild(gE);svg.appendChild(gN);
  function clip(n,dx,dy){const hw=n.w/2+5,hh=n.h/2+5;const t=Math.min(dx?hw/Math.abs(dx):1e9,dy?hh/Math.abs(dy):1e9);return[n.x+dx*t,n.y+dy*t]}
  const edges=spec.edges.map(([f,t,neg])=>{const a=N[f],b=N[t];const dx=b.x-a.x,dy=b.y-a.y;const L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L;
    const p=clip(a,ux,uy),q=clip(b,-ux,-uy);const col=neg?'var(--bad)':'var(--muted)';
    const g=el('g',{class:'gedge'});const ln=el('line',{x1:p[0],y1:p[1],x2:q[0]-ux*6,y2:q[1]-uy*6,stroke:col,'stroke-width':2});
    if(neg)ln.setAttribute('stroke-dasharray','5 4');
    const hx=q[0],hy=q[1],px=-uy,py=ux;const head=el('polygon',{points:`${hx},${hy} ${hx-ux*11+px*5.5},${hy-uy*11+py*5.5} ${hx-ux*11-px*5.5},${hy-uy*11-py*5.5}`,fill:col});
    g.appendChild(ln);g.appendChild(head);
    if(neg){const m=el('text',{x:(p[0]+q[0])/2+px*10,y:(p[1]+q[1])/2+py*10+4,'text-anchor':'middle','font-size':13,'font-weight':700,fill:'var(--bad)'},'−');g.appendChild(m)}
    gE.appendChild(g);return{f,t,g,ln}});
  const nodes=spec.nodes.map(n=>{const g=el('g',{class:'gnode',tabindex:0,role:'button'});const c=n.c||'blue';
    g.appendChild(el('rect',{x:n.x-n.w/2,y:n.y-n.h/2,width:n.w,height:n.h,rx:8,fill:`var(--surface)`,stroke:`var(--${c})`,'stroke-width':1.6}));
    g.appendChild(el('rect',{x:n.x-n.w/2,y:n.y-n.h/2,width:5,height:n.h,rx:2,fill:`var(--${c})`}));
    const lines=n.t.split('\n');lines.forEach((l,i)=>g.appendChild(el('text',{x:n.x+2,y:n.y+(i-(lines.length-1)/2)*15+4.5,'text-anchor':'middle','font-size':12.5,'font-weight':600,fill:'var(--ink)'},l)));
    g.addEventListener('click',()=>sel(n.id));g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();sel(n.id)}});
    gN.appendChild(g);return{id:n.id,g}});
  function sel(id){const on=new Set([id]);edges.forEach(e=>{const hit=e.f===id||e.t===id;if(hit){on.add(e.f);on.add(e.t)}e.g.classList.toggle('gdim',!hit);e.ln.classList.toggle('flow',hit)});
    nodes.forEach(n=>{n.g.classList.toggle('gdim',!on.has(n.id));n.g.classList.toggle('sel',n.id===id)});
    if(info){const n=N[id];info.style.borderLeftColor=`var(--${n.c||'blue'})`;info.innerHTML=`<span class="eyebrow">${spec.kind||'Construct'}</span><h3 style="color:var(--${n.c||'blue'})">${n.t.replace(/\n/g,' ')}</h3><p>${(spec.info||{})[id]||''}</p>`}}
  function clear(){edges.forEach(e=>{e.g.classList.remove('gdim');e.ln.classList.remove('flow')});nodes.forEach(n=>n.g.classList.remove('gdim','sel'))}
  if(spec.start)sel(spec.start);return{sel,clear};
}
function fmtPct(v){return Math.round(v)+'%'}
