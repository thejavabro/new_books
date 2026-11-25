CH({slug:'ch21-architectural-decisions',n:'21',part:P3,sub:'Three antipatterns, and the record that prevents them.',end:'Write down the why.',scenes:[
{type:'pipeline',title:'Three decision antipatterns',acc:'red',stages:[{t:'Covering your assets',c:'red',d:'Avoiding a decision for fear of being wrong.'},{t:'Groundhog Day',c:'amber',d:'Nobody knows why, so it is discussed again and again.'},{t:'Email-driven',c:'violet',d:'The decision is buried in a thread nobody can find.'}],
 cap:['They tend to happen in order.']},
{type:'points',title:'The fixes',items:[
 {t:'Last responsible moment',c:'green',d:'Decide with enough information, before teams are blocked.'},
 {t:'Justify it',c:'blue',d:'Give technical and business reasons: cost, time to market.'},
 {t:'One system of record',c:'amber',d:'A wiki or repo. Email only a short notice with a link.'}],
 cap:[]},
{type:'points',title:'Is it architecturally significant?',items:[
 {t:'Structure'},{t:'Non-functional characteristics'},{t:'Dependencies'},{t:'Interfaces'},{t:'Construction techniques'}],
 cap:['Michael Nygard’s definition: decisions that affect any of these five.']},
{type:'stack',title:'Anatomy of an ADR',levels:[
 {t:'Title',c:'blue',w:.5,d:'Short, numbered, descriptive.'},
 {t:'Status',c:'blue',w:.58,d:'Proposed, Accepted or Superseded.'},
 {t:'Context',c:'amber',w:.66,d:'The forces at play and the alternatives.'},
 {t:'Decision',c:'green',w:.74,d:'“We will use…”, and above all why.'},
 {t:'Consequences',c:'red',w:.82,d:'Good and bad impacts.'},
 {t:'Compliance',c:'violet',w:.9,d:'How the decision will be measured and governed.'},
 {t:'Notes',c:'muted',w:1,d:'Author, approval date, last modified.'}],
 cap:['An ADR is a short text file, one or two pages, describing one decision.']},
RC(21,[['Three antipatterns','Fear, rehashing, buried emails.'],['Decide in time','The last responsible moment.'],['Justify','Technical and business reasons.'],['ADRs','Seven sections, one decision each.']])
]});
