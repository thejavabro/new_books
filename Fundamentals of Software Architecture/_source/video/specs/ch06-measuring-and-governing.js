CH({slug:'ch06-measuring-and-governing',n:'6',part:P1,sub:'Turning vague “-ilities” into numbers, and keeping them true with fitness functions.',end:'If you can measure it, you can govern it.',scenes:[
{type:'points',title:'Three kinds of measures',items:[
 {t:'Operational',c:'green',d:'Measured on the running system. Use statistics, not single numbers.'},
 {t:'Structural',c:'amber',d:'Countable code quality: complexity, coupling, cohesion.'},
 {t:'Process',c:'blue',d:'Test coverage, deployment frequency, lead time for changes.'}],
 cap:['Vague characteristics need objective definitions.']},
{type:'stats',title:'Cyclomatic complexity',items:[{v:10,pre:'<',l:'generally acceptable',c:'amber'},{v:5,pre:'<',l:'better',c:'green'}],
 cap:['It counts independent paths through a function: decisions + 1.','Every “if” and every loop adds a path.']},
{type:'pipeline',title:'Governance with <b>fitness functions</b>',acc:'red',stop:2,stopLabel:'build fails',stages:[{t:'Commit',d:'Presentation code calls persistence directly.'},{t:'Unit tests',d:'Pass.'},{t:'Fitness functions',d:'The layer rule is broken. The pipeline stops.'},{t:'Deploy'}],
 cap:['A fitness function is any mechanism that objectively assesses a characteristic.','Wire them into the pipeline and decisions are <b>enforced automatically</b>.']},
{type:'points',title:'Fitness functions in the wild',items:[
 {t:'Cyclic dependencies',d:'Fail if packages depend on each other in a loop.'},
 {t:'Main sequence',d:'Alert when a component drifts into the zone of pain.'},
 {t:'Layer access',d:'Presentation may only depend on business.'},
 {t:'Chaos engineering',d:'Break things on purpose to verify resilience.'},
 {t:'Checklists',d:'A manual check for what you can’t automate yet.'}],
 cap:['They come in many shapes. Not all of them are code.']},
RC(6,[['Define objectively','Turn -ilities into numbers.'],['Three measure types','Operational, structural, process.'],['Fitness functions','Automated governance.'],['Not only code','Monitors, chaos, checklists.']])
]});
