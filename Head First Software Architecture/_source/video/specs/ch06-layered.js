CH({slug:'ch06-layered',n:'6',sub:'Technical layers in one deployment: the fastest way to get a simple system live.',end:'Technical change is easy. Domain change is hard.',scenes:[
{type:'points',title:'Naan & Pop needs a website, <b>fast</b>',items:[
 {t:'Time to market',c:'amber',d:'The restaurant is already open. Every week offline is lost money.'},
 {t:'Separate responsibilities',c:'blue',d:'Part-time specialists: UI designers, database admins.'},
 {t:'Simple, yet extensible',c:'green',d:'Later: a mobile app and delivery-service integrations.'}],
 cap:['A small restaurant wants online ordering, on a small budget.','Feasibility, simplicity, specialisation: that points to a <b>layered monolith</b>.']},
{type:'stack',title:'From MVC to layers',levels:[
 {t:'Presentation',c:'blue',w:1,d:'The view: screens and user interface.'},
 {t:'Workflow',c:'amber',w:1,d:'The controller: business rules and the order of steps.'},
 {t:'Persistence',c:'green',w:1,d:'The model’s data access.'},
 {t:'Database',c:'violet',w:1,d:'One database for the whole application.'}],
 cap:['Developers know Model-View-Controller. Layers are its architectural cousin.','Layers are just packages or namespaces in one deployment.']},
{type:'pipeline',title:'A request’s trip through the layers',tc:'amber',stages:[{t:'Presentation',d:'The customer taps “Place order”.'},{t:'Workflow',d:'Rules are applied.'},{t:'Persistence',d:'The order is saved.'},{t:'Database',c:'green',d:'Then the answer travels all the way back up.'}],
 cap:['Every request starts at the top and travels down through each layer.']},
{type:'verdicts',title:'Two kinds of change',sw:300,items:[
 {t:'Add a mobile user interface',ok:true,lab:'1 layer',why:'Technical change: presentation only.'},
 {t:'Swap the database',ok:true,lab:'1 layer',why:'Technical change: persistence only.'},
 {t:'Add pizza to the menu',ok:false,lab:'Every layer',why:'Domain change: the domain is smeared across layers.'}],
 cap:['Each business component is cut into pieces that live in different layers.','Technical changes are easy. <b>Domain changes are hard.</b>']},
{type:'points',title:'Same layers, different physical shapes',items:[
 {t:'Two-tier',c:'blue',d:'Client/server: an application talking to a database.'},
 {t:'Three-tier',c:'amber',d:'Web: browser, application server, database.'},
 {t:'Embedded or mobile',c:'green',d:'Everything, database included, on one device.'}],
 cap:['The layered monolith is a logical design. It can be deployed several ways.']},
{type:'stack',title:'Adding a layer',levels:[
 {t:'Presentation',c:'blue',w:1,d:''},
 {t:'Integration (new)',c:'red',w:1,d:'Delivery services can now place orders too.'},
 {t:'Workflow',c:'amber',w:1,d:''},
 {t:'Persistence',c:'green',w:1,d:''}],
 cap:['You add a layer when <b>every request</b> needs a new kind of handling.']},
{type:'versus',title:'Superpowers and kryptonite',
 a:{h:'Superpowers',c:'green',items:['Feasibility: nothing is simpler to build','Technical reuse in each layer','Specialists each own a layer','Fast for data-intensive work']},
 b:{h:'Kryptonite',c:'red',items:['Every change redeploys everything','Drifts into a big ball of mud','One resource bucket that fills up','Testing gets harder as it grows']},
 cap:['Keep it lean, and govern it.']},
{type:'recap',title:'Chapter 6 on one screen',items:[{t:'Technical + monolithic',d:'Layers by role, one deployment.'},{t:'Typical layers',d:'Presentation, workflow, persistence.'},{t:'Cousin of MVC',d:'Familiar, so quick to build.'},{t:'Easy technical change',d:'New UI or database: one layer.'},{t:'Hard domain change',d:'Touches every layer.'},{t:'Keep it lean',d:'Or it becomes a ball of mud.'}]}
]});
