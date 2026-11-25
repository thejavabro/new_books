CH({slug:'ch03-measuring-culture',n:'3',part:'Part I · What they found',sub:'Westrum’s three culture types, how to measure them, and how practices change them.',end:'Change what people do, and culture follows.',scenes:[
{type:'stack',title:'Three levels of organizational culture',levels:[
 {t:'Artifacts',w:.5,c:'violet',d:'The visible layer: mission statements, technology, procedures, rituals. Easy to see, easy to fake.'},
 {t:'Values',w:.75,c:'blue',d:'Shared norms the group can talk about. <b>This is the level the research measures.</b>'},
 {t:'Basic assumptions',w:1,c:'teal',d:'Things you “just know” after a while on a team and struggle to put into words.'}],
 cap:['Edgar Schein describes culture from the visible tip to the hidden base.','The research zooms in on the middle: <b>values</b>.']},
{type:'points',title:'Westrum’s <b>three culture types</b>',items:[
 {t:'Pathological',c:'red',n:'P',d:'Power-oriented. Fear, hoarded information, messengers shot. Failure means scapegoats.'},
 {t:'Bureaucratic',c:'amber',n:'B',d:'Rule-oriented. Turf, narrow duties, messengers ignored. Failure means “justice”.'},
 {t:'Generative',c:'green',n:'G',d:'Performance-oriented. Mission first, cooperation, shared risk. Failure means inquiry.'}],
 cap:['Ron Westrum studied safety in aviation and healthcare.','What an organization rewards predicts <b>how information flows</b>.']},
{type:'pipeline',title:'Send the bad news up',tc:'amber',stages:[{t:'Engineer spots a risk',c:'blue',d:'Something looks wrong before the release.'},{t:'Tells the team lead',c:'blue',d:'Is it safe to say so?'},{t:'Reaches a decision maker',c:'blue',d:'In time to act on it?'},{t:'Fixed before it hurts',c:'green',d:'In a generative culture the messenger is trained and thanked.'}],
 note:'Good information is relevant, timely and usable.',
 cap:['In high-tempo, high-consequence work, information flow <b>is</b> safety and performance.']},
{type:'stats',title:'Measure your team’s culture',items:[{v:7,l:'statements about your team',c:'blue'},{v:7,pre:'1–',l:'agreement scale for each',c:'amber'},{v:1,l:'averaged culture score',c:'green'}],
 cap:['Westrum’s types sit on a continuum, so agreement scales fit.','The measure has repeatedly tested <b>valid and reliable</b>.']},
{type:'flow',title:'What drives culture, and what culture <b>predicts</b>',cols:3,rows:3,nodes:[{id:'l',t:'Lean management',c:'violet',col:0,row:0},{id:'c',t:'Continuous delivery',c:'violet',col:0,row:2},{id:'w',t:'Generative<br>culture',c:'green',col:1,row:1,big:1},{id:'d',t:'Software delivery<br>performance',c:'blue',col:2,row:0},{id:'o',t:'Organizational<br>performance',c:'blue',col:2,row:1},{id:'j',t:'Job satisfaction',c:'blue',col:2,row:2}],edges:[['l','w'],['c','w'],['w','d'],['w','o'],['w','j']],
 cap:['A generative culture predicts delivery, business results and job satisfaction.','And culture is not fixed: <b>practices change it</b>.']},
{type:'versus',title:'How each culture handles an outage',
 a:{h:'Pathological: find the culprit',c:'red',items:['“Who pushed that change? I want a name.”','Human error is where the inquiry ends','Fear grows, information gets hidden']},
 b:{h:'Generative: find the conditions',c:'green',items:['“Why did our checks miss it?”','Human error is where the inquiry starts','Failure becomes a chance to improve the system']},
 cap:['Complex systems fail through an interplay of factors, not one careless person.']},
{type:'versus',title:'Act your way to a better culture',mid:'→',
 a:{h:'Change minds first',c:'amber',items:['Start with values and attitudes','Hope that behaviour follows','Slow, and easy to resist']},
 b:{h:'Change practices first',c:'green',items:['Change what people do','The thinking follows the doing','CD and Lean management measurably improve culture']},
 cap:['John Shook’s lesson from the car plant in Fremont, California.','<b>Change what people do</b>, and how they think follows.']},
{type:'quote',text:'Who is on the team matters less than *how the team works together.*',by:'The finding of Google’s two-year study of 180+ teams, paraphrased.'},
{type:'recap',title:'Chapter 3 on one screen',items:[{t:'Values level',d:'The research measures norms people can discuss.'},{t:'Pathological',d:'Power-oriented: fear and scapegoats.',c:'red'},{t:'Bureaucratic',d:'Rule-oriented: turf and “justice”.',c:'amber'},{t:'Generative',d:'Performance-oriented: mission and inquiry.',c:'green'},{t:'Measurable',d:'Seven 1–7 items, averaged into one valid score.'},{t:'Practices shape culture',d:'CD and Lean management improve it.'}]}
]});
