CH({slug:'ch15-event-driven-architecture',n:'15',part:P2,sub:'Processors that react to what already happened, and announce what they did.',end:'React, then announce.',scenes:[
{type:'flow',title:'Events ripple through processors',cols:3,rows:3,nodes:[{id:'o',t:'order placed',c:'amber',col:0,row:1,big:1},{id:'p',t:'Payment',c:'blue',col:1,row:0},{id:'i',t:'Inventory',c:'blue',col:1,row:1},{id:'n',t:'Notification',c:'blue',col:1,row:2},{id:'pa',t:'payment applied',c:'green',col:2,row:0},{id:'ia',t:'inventory updated',c:'green',col:2,row:1},{id:'ns',t:'customer notified',c:'green',col:2,row:2}],edges:[['o','p'],['o','i'],['o','n'],['p','pa'],['i','ia'],['n','ns']],
 cap:['Each processor does its work and publishes a new event.','<b>Nobody</b> coordinates the whole workflow.']},
{type:'versus',title:'Events versus messages',mid:'≠',
 a:{h:'Event',c:'green',items:['Something already happened','“I just placed an order”','The sender doesn’t know the receivers']},
 b:{h:'Message',c:'blue',items:['A command or a query','“Apply the payment for this order”','Aimed at one receiver']}},
{type:'versus',title:'Broker versus mediator',
 a:{h:'Broker: choreography',c:'teal',items:['Responsive and scalable','Extensible and fault tolerant','No workflow control','Hard error handling, no restart']},
 b:{h:'Mediator: orchestration',c:'violet',items:['Workflow control and state','Error handling and restart','Coupled to the mediator','Lower scalability and performance']},
 cap:['The default is choreography through a broker.','Complex workflows may need a <b>mediator</b>.']},
{type:'curve',title:'How much should an event carry?',xl:'key only → full data',yl:'cost →',
 series:[{l:'Callbacks for data',d:'Anemic events force every receiver to call back.',c:'red',pts:line(30,x=>.9-.8*x)},{l:'Payload and contract size',d:'Fat events are heavy and harder to version.',c:'amber',pts:line(30,x=>.1+.8*x)}],
 cap:['Key-based or data-based: it’s a spectrum. (Illustrative.)','Beware the <b>swarm of gnats</b>: too many tiny derived events.']},
{type:'pipeline',title:'Preventing data loss',tc:'green',stages:[{t:'Send',d:'Persistent queues and a synchronous send.'},{t:'Receive',d:'Acknowledge only after processing.'},{t:'Save',c:'green',d:'Commit to the database, then remove the message.'}],
 cap:['An event can disappear in three places. Each has a fix.']},
SP(['Performance and responsiveness','Scalability','Extensibility','Fault tolerance'],['Complexity','Hard to test','Eventual consistency','Error handling and workflow visibility']),
RC(15,[['Events','What happened, not what to do.'],['Two topologies','Broker or mediator.'],['Payload','Between key-only and full data.'],['No data loss','Guard send, receive and save.']])
]});
