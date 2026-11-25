CH({slug:'ch05-identifying-characteristics',n:'5',part:P1,sub:'Turning business concerns, requirements and domain knowledge into a short list.',end:'About seven candidates. A top three.',scenes:[
{type:'flow',title:'Translate business concerns',cols:2,rows:3,nodes:[{id:'t',t:'“Time to market”',c:'amber',col:0,row:1,big:1},{id:'a',t:'Agility',c:'blue',col:1,row:0},{id:'b',t:'Testability',c:'blue',col:1,row:1},{id:'c',t:'Deployability',c:'blue',col:1,row:2}],edges:[['t','a'],['t','b'],['t','c']],
 cap:['Stakeholders speak in business terms. Architects need “-ilities”.']},
{type:'points',title:'More translations',items:[
 {t:'Mergers and acquisitions',d:'Interoperability, scalability, adaptability, extensibility.'},
 {t:'User satisfaction',d:'Performance, availability, fault tolerance, security.'},
 {t:'Competitive advantage',d:'Agility, testability, deployability, scalability.'},
 {t:'Time and budget',d:'Simplicity, feasibility.'}],
 cap:['Watch for the agility trap: “we need agility” is <b>not one thing</b>.']},
{type:'curve',title:'Domain knowledge reveals hidden load',xl:'the 10-hour registration window →',yl:'students registering →',
 series:[{l:'Assumed: even spread',d:'1,000 students over 10 hours.',c:'blue',dash:1,pts:line(40,x=>.22)},{l:'Real students',d:'Most register in the final hours.',c:'red',pts:line(60,x=>.05+.9*Math.pow(x,5))}],
 cap:['A university registration system: 1,000 students, a 10-hour window.','Anyone who knows students knows the load <b>will not be even</b>.']},
{type:'units',title:'Kata: Silicon Sandwiches',cols:5,groups:[{n:4,l:'explicit',d:'stated in the requirements',c:'blue'},{n:5,l:'implicit',d:'implied by the domain',c:'amber'}],
 cap:['A national sandwich chain adds online ordering.','Step through the requirements and characteristics fall out. (Counts illustrative.)']},
{type:'units',title:'Limit and prioritise',cols:7,groups:[{n:3,l:'the top three',d:'chosen by stakeholders',c:'amber'},{n:4,l:'the rest of the short list',c:'blue'}],
 cap:['Keep a short list of about seven.','Ask for a <b>top three</b>. Ranking everything breeds endless debate.']},
{type:'quote',title:'Case study: the Vasa',acc:'red',text:'Designed to be *everything at once,* it sank minutes into its maiden voyage.',by:'A 17th-century Swedish warship. Maximising every characteristic sinks systems too.'},
RC(5,[['Three sources','Domain concerns, requirements, domain knowledge.'],['Translate','Business terms into -ilities.'],['Katas','Timeboxed practice problems.'],['Keep it short','About seven; pick three.'],['Vasa','Designing for everything sinks the ship.']])
]});
