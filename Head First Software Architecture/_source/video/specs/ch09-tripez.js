CH({slug:'ch09-tripez',n:'9',sub:'A full architecture exercise, from requirements to a physical sketch.',end:'Can you justify your trade-offs?',scenes:[
{type:'pipeline',title:'The architect’s roadmap',stages:[{t:'Characteristics',d:'Pick the driving ones.'},{t:'Components',d:'Actors, actions, building blocks.'},{t:'Style',d:'Choose the best fit.'},{t:'Decision',d:'Write the ADR.'},{t:'Physical sketch',c:'green',d:'Combine all four dimensions.'}],
 cap:['TripEZ is a trip dashboard for frequent travellers, on web and mobile.','There is no checklist, but the <b>four dimensions</b> give you a route.']},
{type:'units',title:'Step 1: pick the driving characteristics',cols:7,groups:[{n:3,l:'your top three',d:'starred',c:'amber'},{n:4,l:'up to four more',c:'blue'}],
 cap:['Choose up to seven, then mark your top three.','Every pick should <b>trace back to a requirement</b>.']},
{type:'points',title:'Step 2: actors, actions and components',items:[
 {t:'Traveller',c:'blue',d:'Views trips and bookings, grouped by trip.'},
 {t:'Travel partners',c:'amber',d:'Airlines, hotels and car hire send booking updates.'},
 {t:'System',c:'green',d:'Collects updates and keeps the dashboard current.'}],
 cap:['Logical components only.','Databases, queues and user interfaces wait for step 5.']},
{type:'points',title:'Step 3: choose a style',items:[
 {t:'Layered',c:'blue',d:'<b>Good:</b> cheap, simple, quick to ship.<br><b>Worry:</b> each partner’s logic is smeared across layers.'},
 {t:'Modular monolith',c:'green',d:'<b>Good:</b> modules like Trips and Reporting match the domain.<br><b>Worry:</b> integration needs its own structure.'},
 {t:'Microkernel',c:'amber',d:'<b>Good:</b> each travel partner becomes a plugin.<br><b>Worry:</b> one bad deploy can affect uptime.'}],
 cap:['Your choices are the three monolithic styles so far.','All three are viable.']},
{type:'stack',title:'Step 4: write the ADR',levels:[
 {t:'Context',c:'amber',w:1,d:'What the system needs, and which styles were considered.'},
 {t:'Decision',c:'green',w:1,d:'The style you chose, and why.'},
 {t:'Consequences',c:'red',w:1,d:'What you gain, and what you give up. There is always something.'}],
 cap:['The record captures the choice, the reasons and the consequences.']},
{type:'flow',title:'Step 5: sketch the physical architecture',cols:3,rows:2,nodes:[{id:'w',t:'Web UI',c:'blue',col:0,row:0},{id:'m',t:'Mobile UI',c:'blue',col:0,row:1},{id:'a',t:'Deployable<br>unit',c:'green',col:1,row:0,big:1},{id:'d',t:'Database',c:'violet',col:2,row:0},{id:'p',t:'Travel partner<br>systems',c:'amber',col:2,row:1}],edges:[['w','a'],['m','a'],['a','d'],['a','p']],
 cap:['Now combine all four dimensions: interfaces, units, databases and connections.']},
{type:'quote',text:'There are no right or wrong answers, only *justified* ones.',by:'Hybrids are normal, as long as the critical characteristics are still met.'},
{type:'recap',title:'Chapter 9 on one screen',items:[{t:'Ask more',d:'Requirements are never complete.'},{t:'Trace it',d:'Every characteristic ties to a need.'},{t:'Logical first',d:'No databases in the logical view.'},{t:'Style fit',d:'Weigh the domain and top characteristics.'},{t:'Hybrids are normal',d:'Mixing styles is fine.'},{t:'Write it down',d:'An ADR records the choice.'}]}
]});
