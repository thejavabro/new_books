CH({slug:'ch26-architectural-intersections',n:'26',part:P3,sub:'New in the second edition: everything architecture has to line up with.',end:'Architecture never lives alone.',scenes:[
{type:'points',title:'Architecture touches everything',items:[
 {t:'Implementation',d:'Does the code follow it?'},{t:'Infrastructure',d:'Elastic scale is an architecture decision.'},{t:'Data topologies',d:'Database shape must align.'},{t:'Engineering practices',d:'Delivery enables agility.'},{t:'Team topologies',d:'Conway’s Law in action.'},{t:'Systems integration',d:'Coupling between systems.'},{t:'The enterprise',d:'Standards limit choices.'},{t:'Business environment',d:'Mergers, budgets, timing.'}],
 cap:['Architecture doesn’t live in isolation.','A ninth intersection: <b>generative AI</b>.']},
{type:'points',title:'Implementation: three things to watch',items:[
 {t:'Operational concerns',c:'green',d:'Does the code actually deliver the characteristics?'},
 {t:'Structural integrity',c:'blue',d:'Does it keep the intended structure?'},
 {t:'Architectural constraints',c:'amber',d:'Are the decisions followed?'}],
 cap:['Architecture only matters if the code follows it. Fitness functions bridge the gap.']},
{type:'points',title:'Aligning data with architecture',items:[
 {t:'Characteristics',c:'blue',d:'The same scale, availability and consistency as the architecture.'},
 {t:'Structure',c:'green',d:'Relational, key-value, document, graph: pick by data shape.'},
 {t:'Read/write priority',c:'amber',d:'Heavy reads, heavy writes, or both.'}],
 cap:['One database, domain databases, or one per service: does it fit the style?']},
{type:'curve',title:'Implementation drift',xl:'time →',yl:'distance from the intended architecture →',
 series:[{l:'No governance',d:'Small shortcuts add up.',c:'red',pts:line(40,x=>.05+.85*Math.pow(x,1.4))},{l:'With fitness functions',d:'Each violation is caught and pulled back.',c:'green',pts:line(60,x=>.05+.14*((x*5)%1))}],
 cap:['The architecture says one thing. The code slowly does another. (Illustrative.)']},
{type:'versus',title:'Generative AI',mid:'+',
 a:{h:'What it can do',c:'green',items:['Help with code','Help with documentation and analysis','Become a component in the system']},
 b:{h:'What it brings',c:'amber',items:['Non-deterministic behaviour to design around','No context-rich trade-off decisions','Those are still yours']},
 cap:[]},
RC(26,[['Nine intersections','From implementation to AI.'],['Implementation','Verify with fitness functions.'],['Data','Topology, structure, read/write.'],['Drift','Catch it early.'],['AI','A tool and a component, not the decider.']])
]});
