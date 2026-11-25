CH({slug:'ch23-diagramming-architecture',n:'23',part:P3,sub:'Sketch first, zoom deliberately, and label everything.',end:'Start rough. Label everything.',scenes:[
{type:'curve',title:'Start low-fidelity',xl:'time spent on the diagram →',yl:'attachment to it →',legend:false,
 series:[{c:'red',pts:line(30,x=>.08+.84*Math.pow(x,.6))}],
 marks:[{x:.1,y:.29,t:'Whiteboard sketch: easy to throw away',c:'green',at:.4,dx:30,dy:20,w:560},{x:.9,y:.87,t:'Polished: hard to change',c:'amber',at:.72,dx:-420,dy:30,w:400}],
 cap:['Irrational artifact attachment: the longer you polish, the less willing you are to change it.']},
{type:'points',title:'What a good tool needs',items:[
 {t:'Layers',c:'blue',d:'Show or hide related items. Use them by meaning.'},
 {t:'Stencils',c:'amber',d:'A shared shape library, so diagrams look consistent.'},
 {t:'Magnets',c:'green',d:'Lines stay attached when you move shapes.'}],
 cap:[]},
{type:'stack',title:'C4: zoom in at four levels',levels:[
 {t:'Context',c:'blue',w:1,d:'The whole system as one box, with users and neighbours.'},
 {t:'Container',c:'green',w:.82,d:'Deployable units: web app, API, database, queue.'},
 {t:'Component',c:'amber',w:.64,d:'Components inside one container.'},
 {t:'Class',c:'muted',w:.46,d:'Code-level detail. Rarely worth drawing.'}],
 cap:['UML lives on in class and sequence diagrams. ArchiMate targets the enterprise.','C4, by Simon Brown, zooms in.']},
{type:'points',title:'Diagram guidelines',items:[
 {t:'Titles',d:'On everything.'},{t:'Directional lines',d:'Arrows show which way.'},{t:'Consistent shapes',d:'Same thing, same shape.'},{t:'Labels',d:'On every item.'},{t:'Meaningful colour',d:'To distinguish, not decorate.'},{t:'A key',d:'When anything is ambiguous.'}],
 cap:[]},
RC(23,[['Low-fidelity first','Don’t get attached.'],['Tools','Layers, stencils, magnets.'],['C4','Context, container, component, class.'],['Guidelines','Titles, arrows, labels, a key.']])
]});
