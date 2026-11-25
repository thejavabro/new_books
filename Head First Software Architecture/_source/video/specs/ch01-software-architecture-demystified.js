CH({slug:'ch01-software-architecture-demystified',n:'1',sub:'Structure versus look, the four dimensions, and who should make which call.',end:'Architecture is the stuff that’s hard to change.',scenes:[
{type:'versus',title:'A house has a <b>structure</b> and a <b>look</b>',mid:'+',
 a:{h:'Architecture: the structure',c:'blue',items:['Outer walls, rooms and floors','Where the stairs and doors go','Expensive to change once built']},
 b:{h:'Design: the look and feel',c:'amber',items:['Paint, rugs, where the bed goes','How it looks and feels inside','You can change it on a weekend']},
 cap:['Software works the same way.','An architecture diagram is lines and boxes for <b>services, databases and how they talk</b>.']},
{type:'flow',title:'<b>Four dimensions</b> describe any architecture',cols:3,rows:3,nodes:[{id:'x',t:'ARCHITECTURE',c:'blue',col:1,row:1,big:1},{id:'a',t:'Architectural<br>characteristics',c:'amber',col:0,row:0},{id:'b',t:'Architectural<br>decisions',c:'green',col:2,row:0},{id:'c',t:'Logical<br>components',c:'violet',col:0,row:2},{id:'d',t:'Architectural<br>style',c:'teal',col:2,row:2}],edges:[['a','x'],['b','x'],['c','x'],['d','x']],
 cap:['A room needs length, width and height. An architecture needs four dimensions.','“We use microservices” describes only <b>one</b> of them.']},
{type:'points',title:'Characteristics: what matters most?',items:[
 {t:'Fast search',c:'blue',d:'Performance is critical, so a graph database may fit best.'},
 {t:'Correct relationships',c:'green',d:'Data integrity is critical, so a relational database fits.'},
 {t:'Huge scale, simple lookups',c:'amber',d:'Scalability is critical, so a key-value store fits.'}],
 cap:['Also called non-functional requirements, quality attributes, or “the -ilities”.','You cannot weigh any choice until you know <b>what you are optimising for</b>.']},
{type:'pipeline',title:'Decisions: rules the whole team builds within',tc:'green',stages:[{t:'Screen',d:'Every user interface…'},{t:'Service',d:'…goes through a service…'},{t:'Database',c:'green',d:'…and never talks to the database directly.'}],
 note:'Each decision becomes a constraint that guides the developers.',
 cap:['Architectural decisions are choices about structure with long-term impact.','Big systems often have <b>dozens</b> of them.']},
{type:'points',title:'Logical components: the rooms of the system',items:[
 {t:'Order Placement',c:'violet',d:'One clear job. Lives in its own directory or namespace.'},
 {t:'Payment Processing',c:'violet',d:'One clear job. Lives in its own directory or namespace.'},
 {t:'Inventory Management',c:'violet',d:'One clear job. Lives in its own directory or namespace.'}],
 cap:['The domain is the <b>what</b>: people want to buy shoes online.','The components are the <b>how</b>.']},
{type:'points',title:'Styles: the overall shape',items:[
 {t:'Layered',d:'Split by technical layer. Simple and cheap.'},
 {t:'Modular monolith',d:'One unit, split by business area.'},
 {t:'Microkernel',d:'A small core plus plug-ins.'},
 {t:'Microservices',d:'Many small services. Scales and changes fast.'},
 {t:'Event-driven',d:'Services react to events. Fast and scalable.'}],
 cap:['Houses come in styles like ranch, Tudor or Victorian. So does software.']},
{type:'curve',title:'Why you want to pick the style <b>early</b>',xl:'on paper → half built → in production',yl:'cost of switching style →',legend:false,
 series:[{c:'red',pts:line(40,x=>.05+.88*Math.pow(x,2.4))}],
 marks:[{x:.1,y:.054,t:'Erase and redraw',c:'green',at:.35,dy:-80,w:400},{x:.9,y:.73,t:'A ranch house becoming a Victorian',c:'amber',at:.7,dx:-640,dy:-50,w:620}],
 cap:['Switching style on paper is cheap.','Halfway through the build, it is not. (Illustrative.)']},
{type:'stack',title:'Most decisions sit on a spectrum',levels:[
 {t:'Strategic or tactical?',c:'blue',w:1,d:'Days of planning and many people is strategic. A quick call made alone is tactical.'},
 {t:'Effort to build or change?',c:'amber',w:1,d:'The harder it is to undo later, the more architectural.'},
 {t:'How big are the trade-offs?',c:'violet',w:1,d:'Big pros and cons need long analysis. Small ones you just decide.'}],
 cap:['Three questions place a decision between design and architecture.','Where it lands tells you <b>who should make the call</b>.']},
{type:'quote',text:'Architecture is the stuff that’s *hard to change.*',by:'Martin Fowler’s short definition, as quoted in the chapter.'},
{type:'recap',title:'Chapter 1 on one screen',items:[{t:'Structure vs. appearance',d:'Architecture is mostly structure.'},{t:'Characteristics',d:'Know them first, or you cannot weigh trade-offs.'},{t:'Decisions',d:'Structural rules with long-term impact.'},{t:'Components',d:'Building blocks, usually a folder of code.'},{t:'Style',d:'The overall shape. Pick it to match.'},{t:'The spectrum',d:'It tells you who owns a decision.'}]}
]});
