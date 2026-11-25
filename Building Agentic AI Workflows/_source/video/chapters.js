//@@ ch01-ai-llms-agents
CH({slug:"ch01-ai-llms-agents",n:"1",part:"Part I · Getting started",sub:"How language models work, and the habits that make them useful.",end:"Workflows follow rails. Agents choose a path.",scenes:[
PT("A language model fills in blanks",[["Tokens","Text in pieces.","blue"],["Next token","Predicted from all before it.","green"],["Parameters","The size of the model.","purple"],["Context window","Its short-term memory.","amber"]],["One token at a time, left to right."]),
{type:'curve',title:'Lost in the middle',xl:'position of the fact in the prompt →',yl:'chance it is used →',legend:false,series:[{c:'amber',pts:line(40,x=>.4+.45*Math.pow(2*x-1,2))}],marks:[{x:.03,y:.82,t:'Start: used',c:'green',at:.25,dx:60,dy:-60,w:240},{x:.5,y:.4,t:'Middle: missed',c:'red',at:.5,dx:-150,dy:40,w:300},{x:.97,y:.82,t:'End: used',c:'green',at:.75,dx:-260,dy:-70,w:240}],cap:['Bigger windows created a new problem: positional bias.','Put what matters first or last. (Illustrative shape.)']},
PT("Inference settings",[["Temperature","Flattens or sharpens the choice.","blue"],["Top k","Keep the k likeliest tokens.","green"],["Top p","Keep tokens up to a probability mass.","purple"],["Structured output","Nudge the answer into a schema.","amber"]],["They reshape the next-token distribution at generation time."]),
VS("Workflows and agents","LLM workflow",["Steps fixed in code","Predictable","Cheaper"],"Agent",["The model chooses the steps","Flexible","Less predictable"],["Use rails when the path is known."],"VS","blue","purple"),
RC("1",[["Tokens","One at a time."],["Window","Short-term memory."],["Position","Start and end win."],["Order","Stable text first, for the cache."],["Settings","Shape the sampling."],["Rails","Or choice."]])
]});
//@@ ch02-llm-workflows
CH({slug:"ch02-llm-workflows",n:"2",part:"Part I · Getting started",sub:"Retrieval, and a first case study that writes SQL.",end:"Retrieve what is needed, then generate.",scenes:[
PL("Retrieval augmented generation",[["Index","Embed and store the documents."],["Retrieve","Find the closest to the question.","blue"],["Augment","Put them in the prompt.","purple"],["Generate","An answer from them.","green"]],["The model does not know your data. Hand it the relevant part."],{tc:"blue"}),
{type:'flow',title:'A text-to-SQL workflow',cols:5,rows:1,nodes:[{id:'a',t:'Question',c:'muted',col:0,row:0},{id:'b',t:'Retrieve hints',c:'blue',col:1,row:0},{id:'c',t:'Write SQL',c:'purple',col:2,row:0},{id:'d',t:'Run it',c:'amber',col:3,row:0},{id:'e',t:'Answer',c:'green',col:4,row:0}],edges:[['a','b'],['b','c'],['c','d'],['d','e']],cap:['Each node does one job, in a fixed order.','The model gets the question, the schema and the retrieved evidence.']},
PT("Measuring closeness",[["Cosine similarity","The angle between two vectors.","blue"],["Dot product","Angle and length.","green"],["Euclidean distance","Straight-line distance.","purple"]],["Embedders are trained so similar texts land near each other."]),
VS("Stateless versus stateful","Stateless",["Forgets between calls","A follow-up question fails"],"Stateful",["Keeps the conversation","“And the year before?” works"],["Memory is something you add."],"→","amber","green"),
RC("2",[["RAG","Three parts."],["Workflow","Node by node."],["Evidence","Indexed and retrieved."],["Similarity","Cosine and cousins."],["Generate","Then execute."],["State","Add it on purpose."]])
]});
//@@ ch03-evaluation
CH({slug:"ch03-evaluation",n:"3",part:"Part I · Getting started",sub:"Choosing metrics and running experiments.",end:"Decide what good means before you tune anything.",scenes:[
PT("Bucket the task first",[["Classification","Accuracy, precision, recall.","blue"],["Retrieval","Was the right document found, and how high?","green"],["Generation, checkable","Compare with a known answer.","purple"],["Generation, open","A rubric or a judge.","amber"]],["The kind of task decides the metric."]),
PT("Retrieval metrics",[["Precision","Of what was returned, how much was relevant?","blue"],["Recall","Of what was relevant, how much was returned?","green"],["Reciprocal rank","How high was the first right result?","purple"]],["Test retrieval on its own, before blaming the generator."]),
PL("Running an experiment",[["Fix a test set","Representative questions."],["Change one thing","A model, a prompt, an embedder.","blue"],["Measure","The same metric each time.","purple"],["Compare","Quality, cost and speed.","green"]],["The chapter compares models, few-shot choices and embedders this way."],{tc:"blue"}),
VS("Judging a summary","Hard",["No single right answer","Overlap scores miss meaning"],"Workable",["A rubric with named criteria","A judge model, checked against people"],["Open-ended output needs a rubric."],"→","amber","green"),
RC("3",[["Bucket","The task."],["Metric","Follows the bucket."],["Retrieval","Precision, recall, rank."],["Experiment","One change at a time."],["Cost","Counts too."],["Rubrics","For open output."]])
]});
//@@ ch04-agents-multi-agent
CH({slug:"ch04-agents-multi-agent",n:"4",part:"Part II · Agents",sub:"From a fixed workflow to an agent, and then to several.",end:"Give the model tools, and measure what it does with them.",scenes:[
PT("What an agent is",[["A model","The decision-maker.","blue"],["A prompt","How to behave.","green"],["Tools","What it can do.","purple"],["A loop","Until the task is done.","amber"]],["The SQL workflow becomes an agent that decides its own steps."]),
VS("Agent versus workflow","Workflow",["Cheaper and faster","Limited to the path you built"],"Agent",["Handles questions you did not plan for","More tokens, more variance"],["Same model, same questions: compare them on accuracy and cost."],"VS","blue","purple"),
VD("When to use which",[["The steps are always the same",true,"No decisions to make.","WORKFLOW","blue"],["The path depends on what is found",true,"The model must choose.","AGENT","purple"],["Cost and latency are tight",true,"Fewer calls.","WORKFLOW","blue"],["Tasks vary widely",true,"Flexibility pays.","AGENT","purple"]],["Answer for your own task."],{sw:240}),
PT("Four lenses for evaluating agents",[["The answer","Was it right?","blue"],["The tools","Were the right ones called?","green"],["The cost","Tokens and time.","purple"],["The trace","What happened, step by step.","amber"]],["MCP standardises how tools are plugged in. Tracing shows how they were used."]),
RC("4",[["Agent","Model, prompt, tools, loop."],["Tools","With arguments to fill."],["Judge","Free text with a rubric."],["Notebook","External memory."],["Several agents","Split the roles."],["Trace","Everything."]])
]});
//@@ ch05-enhancing-agents
CH({slug:"ch05-enhancing-agents",n:"5",part:"Part II · Agents",sub:"Better prompts, better retrieval and better structure.",end:"Small changes to the prompt can outweigh a bigger model.",scenes:[
VS("Keyword search still works","Embeddings",["Match on meaning","Can miss exact terms"],"BM25",["Matches on words","Good for names, codes and policy numbers"],["The support agent’s policy tool uses keyword search."],"and","blue","amber"),
VS("What one sentence is worth","Without",["The agent answers from memory"],"With",["“Always look up the policy first”","The agent checks before answering"],["A single instruction changes how often the tool is used."],"→","red","green"),
PT("Ways to connect agents",[["Agentic workflow","Fixed steps, some of them agents.","blue"],["Network","Agents hand off to each other.","green"],["Supervisor","One agent directs the others.","purple"]],["First ask whether the agents need each other at all."]),
VS("Does the agent pick the right tool?","Few, distinct tools",["Easy to choose"],"Many, similar tools",["Wrong picks rise","Descriptions matter more"],["Test tool selection directly, with questions that have a known right tool."],"→","green","amber"),
RC("5",[["Prompt","One sentence matters."],["BM25","Old and useful."],["Agentic workflow","Rails with agents."],["Handoffs","Between peers."],["Supervisor","Ties a team together."],["Selection","Test it."]])
]});
//@@ ch06-multimodal-coding
CH({slug:"ch06-multimodal-coding",n:"6",part:"Part II · Agents",sub:"Images, audio and code as inputs and outputs.",end:"Most of the world is not text.",scenes:[
PT("Combining modalities",[["Grounding","Convert everything to one modality.","blue"],["Joint fusion","Train on them together.","green"],["Separate","Keep encoders apart, combine results.","purple"]],["Three broad designs for a multimodal system."]),
VS("A shared vector space","Before",["Image and text encoders trained apart"],"After",["Trained on image and caption pairs","Matching pairs land together"],["This is what makes searching photos with words possible."],"→","amber","green"),
PL("Searching a camera roll",[["Embed","Every photo, once."],["Query","Embed the text.","blue"],["Retrieve","The nearest photos.","purple"],["Re-rank","With a stronger model.","green"]],["A fast first pass, then a careful second one."],{tc:"blue"}),
VS("A coding agent","Tool-calling agent",["Picks from fixed tools"],"Coding agent",["Writes and runs code as its action","Can draw a chart, then look at it"],["Code is the most general tool."],"→","blue","purple"),
RC("6",[["Modalities","Beyond text."],["Shared space","Images and text."],["Denoising","How images are generated."],["Search","Retrieve, then re-rank."],["Visual Q and A","Small models can do it."],["Code","As the action."]])
]});
//@@ ch07-reasoning-computer-use
CH({slug:"ch07-reasoning-computer-use",n:"7",part:"Part III · Optimisation",sub:"When thinking helps, and agents that operate a screen.",end:"Pay for reasoning where it changes the answer.",scenes:[
VS("What a reasoning model is","Standard model",["Answers directly"],"Reasoning model",["Produces thinking tokens first","Then the answer"],["The thinking costs tokens and time."],"→","amber","blue"),
VD("When reasoning helps",[["Multi-step problems",true,"Each step depends on the last.","HELPS","green"],["Agents choosing among tools",true,"Better plans.","HELPS","green"],["Simple lookups",false,"Slower, no more accurate.","SKIP","muted"],["Tight latency budgets",false,"The wait is the cost.","SKIP","muted"]],["More thinking does not always score more. Test it on your task."],{sw:170}),
VS("Computer use","Seeing the screen",["A screenshot goes to the model","It returns where to click"],"Reading the screen",["The page’s structure as text","Cheaper, where available"],["Mind what you send: a screenshot can contain anything on your screen."],"or","purple","green"),
PL("A computer-use loop",[["Look","Capture the screen."],["Decide","The next action.","blue"],["Act","Click or type.","amber"],["Repeat","Until done.","green"]],["Click accuracy is scored by how well the predicted target overlaps the real one."],{tc:"blue"}),
RC("7",[["Context","Engineer it."],["Reasoning","Thinking tokens."],["Helps","On multi-step work."],["Skip","For simple tasks."],["Computer use","See, decide, act."],["Privacy","Watch the screenshots."]])
]});
//@@ ch08-fine-tuning
CH({slug:"ch08-fine-tuning",n:"8",part:"Part III · Optimisation",sub:"Changing the weights, and making confidence mean something.",end:"Teach the weights, not the prompt.",scenes:[
VS("Fine-tuning","Prompting",["Instructions and examples every call","Longer, costlier prompts"],"Fine-tuning",["Behaviour stored in the weights","Short prompts","Needs data and training"],["When the same task runs millions of times, tuning pays."],"→","amber","green"),
VS("Calibration","Miscalibrated",["Says 80% sure","Right 55% of the time"],"Calibrated",["Says 80% sure","Right about 80% of the time"],["A confidence you can act on."],"→","red","green"),
PT("Same accuracy, different bills",[["A large model with few-shot","Accurate, costly per call.","blue"],["A small tuned model","As accurate, far cheaper.","green"],["Compare","Accuracy, calibration and cost together.","purple"]],["The cheapest model that meets the bar wins."]),
PT("Making it fit",[["LoRA","Train small added matrices.","blue"],["Quantised weights","Fewer bits each.","green"],["Domain adaptation","Tune on your own documents.","purple"]],["Tuning a reasoning model on a single GPU becomes possible."]),
RC("8",[["Weights","Not prompts."],["Classify","A common need."],["Calibration","Confidence that means it."],["Cost","Compare the bills."],["Free text","Harder to calibrate."],["LoRA","Cheap tuning."]])
]});
//@@ ch09-optimizing-production
CH({slug:"ch09-optimizing-production",n:"9",part:"Part III · Optimisation",sub:"Smaller, faster and cheaper models.",end:"Shrink it, speed it up, then measure again.",scenes:[
PT("Three ways to optimise",[["Quantisation","Fewer bits per weight.","blue"],["Distillation","A small student copies a big teacher.","green"],["Speculative decoding","A small model drafts, the big one checks.","purple"]],["Production needs speed and cost, as well as accuracy."]),
BR("Quantisation: bits per weight",[["32-bit",100,"Full size","muted"],["16-bit",50,"Half","blue"],["8-bit",25,"A quarter","purple"],["4-bit",12.5,"An eighth","green"]],["Memory falls in proportion to the bits. Accuracy falls a little."],{max:100,lw:200}),
PL("Speculative decoding",[["Draft","A small model writes several tokens."],["Verify","The large model checks them at once.","blue"],["Accept","The ones it agrees with.","green"],["Correct","From the first mismatch.","amber"]],["The output matches the large model’s, and arrives sooner."],{tc:"blue"}),
VS("Matryoshka embeddings","Normal",["Always the full vector"],"Matryoshka",["The first part of the vector is useful alone","Truncate for speed, keep all for accuracy"],["One embedding, several sizes."],"→","amber","green"),
RC("9",[["Memory","Parameters times bits."],["Quantise","Fewer bits."],["Distil","Teacher to student."],["Speculate","Draft and verify."],["Voice","Under a second needs care."],["Embeddings","Truncatable."]])
]});
