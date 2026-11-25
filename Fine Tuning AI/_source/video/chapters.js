//@@ ch01-generalist-to-specialist
CH({slug:"ch01-generalist-to-specialist",n:"1",part:"Part I · Foundations",sub:"Why teams move from a hosted generalist to a small specialist.",end:"A specialist does one job, cheaply and fast.",scenes:[
PT("The API wall",[["Token cost","Paid on every call.","blue"],["Instruction tax","The same long prompt, every time.","green"],["Latency","Time to first token, and tokens per second.","purple"],["Data","Leaves your network.","amber"],["Drift","The model changes under you.","red"]],["Most teams start with an API key and a clever prompt. Then they hit these."]),
VS("Why agents burn tokens","A single call",["One prompt, one answer"],"An agent",["A loop of calls","The whole history resent each turn","Cost grows with every step"],["An agent is a loop, so its bill is a multiple."],"→","blue","red"),
VS("The instruction tax","Generalist",["Knows nothing of your task","Told everything in each prompt"],"Specialist",["The task is in the weights","A short prompt is enough"],["Fine-tuning moves instructions from the prompt into the model."],"→","amber","green"),
VS("The specialist revolution","Old rule",["Bigger is better"],"New rule",["A small model, tuned for one job","Runs on hardware you control"],["Small open models became good enough to specialise."],"→","muted","green"),
RC("1",[["Honeymoon","Then the wall."],["Tokens","Cost adds up."],["Agents","Multiply it."],["Instructions","Move into weights."],["Latency","A user problem."],["Specialist","Small and tuned."]])
]});
//@@ ch02-model-architectures
CH({slug:"ch02-model-architectures",n:"2",part:"Part I · Foundations",sub:"What is inside a transformer, and how to choose a base model.",end:"Know the engine before you tune it.",scenes:[
PL("How text flows through a transformer",[["Tokenise","Text to token IDs."],["Embed","IDs to vectors.","blue"],["Attention","Gather context.","purple"],["Feed-forward","Apply stored knowledge.","amber"],["Predict","The next token.","green"]],["Attention and feed-forward repeat, layer after layer."],{tc:"blue"}),
PT("Attention",[["A highlighter","For each token, which others matter?","blue"],["Many heads","Each finds a different relationship.","green"],["Many layers","From syntax up to meaning.","purple"],["Causal mask","A decoder cannot look ahead.","amber"]],["Attention gathers. The feed-forward network stores."]),
PT("Efficiency tricks",[["KV cache","Reuse keys and values while generating.","blue"],["Grouped query attention","Share keys and values across heads.","green"],["Sliding windows","Attend locally in some layers.","purple"],["Mixture of experts","Run only part of the model per token.","amber"]],["Each cuts memory or compute."]),
PT("Choosing a base model",[["Instruction following","Start from a tuned variant.","blue"],["Size","That fits your hardware.","green"],["Licence","That fits your use.","purple"],["Tokenizer and context","That fit your data.","amber"]],["Architecture is only one of the criteria."]),
RC("2",[["Flow","Tokens to prediction."],["Attention","Gathers context."],["Feed-forward","Stores knowledge."],["Decoder-only","With a causal mask."],["Efficiency","Cache and sparsity."],["Base model","Chosen with care."]])
]});
//@@ ch03-fine-tuners-workshop
CH({slug:"ch03-fine-tuners-workshop",n:"3",part:"Part I · Foundations",sub:"The hardware and software you need.",end:"Training is a memory problem.",scenes:[
VS("Training is a memory problem","Inference",["Weights and a little working memory"],"Training",["Weights","Activations for every layer","Gradients and optimiser state"],["The same model needs several times the memory to train."],"→","green","red"),
PT("VRAM decides",[["The limit","The GPU’s own memory.","blue"],["Too little","The run fails outright.","green"],["Quantise the base","To fit.","purple"],["Small batches","With accumulation.","amber"]],["One number rules what you can train."]),
VS("Local or cloud?","Notebook services",["Free or cheap GPUs","Session limits"],"Rented or owned GPUs",["More memory, no time limit","Cost and setup"],["Start where it is free. Move when you outgrow it."],"or","green","blue"),
PL("Diagnose a broken environment",[["Driver","Does the GPU show up?"],["Framework","Does it see the GPU?","blue"],["Tiny model","Load it in 4-bit.","purple"],["One step","Of training.","green"]],["Check the stack from the bottom up before blaming your code."],{tc:"blue"}),
RC("3",[["Memory","The constraint."],["VRAM","One number."],["GPU","Pick by memory."],["Many GPUs","Two ways to pool."],["Stack","Keep it standard."],["Check","Bottom up."]])
]});
//@@ ch04-excavating-data
CH({slug:"ch04-excavating-data",n:"4",part:"Part II · Data and training",sub:"Finding and cleaning the data that makes a specialist.",end:"Data is the moat.",scenes:[
VS("Data is the moat","Available to everyone",["Architectures","Training recipes","Base models"],"Only yours",["Your examples","Your corrections","Your domain"],["What you train on is the one thing competitors cannot download."],"→","muted","green"),
PL("Four cleaning steps",[["Normalise","Encoding, whitespace, markup."],["Filter","Drop what does not belong.","blue"],["Deduplicate","Exact and near.","purple"],["Remove personal data","Before training.","red"]],["Garbage in, garbage out is worse for fine-tuning: the model learns the garbage."],{tc:"blue"}),
PT("Audit before you train",[["Profile","Lengths, in tokens.","blue"],["Sample","Read examples by eye.","green"],["Balance","Across categories.","purple"],["Flag","Outliers and oddities.","amber"]],["An hour of reading saves a day of retraining."]),
VS("A reproducible pipeline","Ad hoc",["Scripts run by hand","Nobody can repeat it"],"Config-driven",["Each stage reads the last","Settings in one file","Rerun end to end"],["You will rebuild the dataset more than once."],"→","red","green"),
RC("4",[["Moat","Your data."],["Sources","Public and private."],["Clean","Four steps."],["Privacy","Remove before training."],["Audit","Read it."],["Pipeline","Reproducible."]])
]});
//@@ ch05-synthetic-data
CH({slug:"ch05-synthetic-data",n:"5",part:"Part II · Data and training",sub:"Using a strong model to write training data for a small one.",end:"Quality control is most of the work.",scenes:[
VS("The teacher-student idea","Teacher",["A large, capable model","Writes examples"],"Student",["A small model","Learns from them"],["For when there is not enough real data."],"→","purple","green"),
VS("Why “generate ten pairs” fails","Bare request",["Generic, repetitive, shallow"],"Seeded request",["A topic","A persona","A difficulty","A format"],["Variety has to be designed in."],"→","red","green"),
PL("Grow harder questions",[["Seed","A simple question."],["Deepen","Add a constraint.","blue"],["Broaden","Change the scenario.","purple"],["Filter","Drop the broken ones.","green"]],["Evolving instructions spreads difficulty beyond the teacher’s default."],{tc:"blue"}),
VD("Quality control",[["Check facts against a source",true,"Teachers hallucinate.","DO","green"],["Remove near-duplicates",true,"They teach phrasing, not knowledge.","DO","green"],["Mix in real data",true,"Synthetic multiplies. It does not replace.","DO","green"],["Train on unreviewed output",false,"Errors become the model’s beliefs.","AVOID","red"]],["Synthetic data is a force multiplier."],{sw:160}),
RC("5",[["Teacher","Writes."],["Student","Learns."],["Seeds","Create variety."],["Evolve","Difficulty."],["Check","Everything."],["Mix","With real data."]])
]});
//@@ ch06-preparing-dataset
CH({slug:"ch06-preparing-dataset",n:"6",part:"Part II · Data and training",sub:"Turning examples into exactly what the model expects.",end:"Models read templates, not text.",scenes:[
VS("Models read templates","Plain text",["What you wrote"],"Templated",["Special tokens for roles and turns","Exactly as in the model’s own training"],["Use the wrong template and the model is reading a foreign format."],"→","amber","green"),
VS("Store simple, convert late","Stored",["A plain record: instruction, input, output"],"Converted",["Into the chat template","At training time"],["The same data can then serve any model."],"→","blue","green"),
VS("Loss masking","Train on everything",["The model learns to write questions too"],"Mask the prompt",["Loss only on the answer","It learns what to say"],["Learn the answer, not the question."],"→","amber","green"),
PT("Splits and checks",[["Train","What it learns from.","blue"],["Validation","Watched during training.","green"],["Test","Touched once, at the end.","purple"],["Validate","Lengths and formats, before you start.","amber"]],["Filtering is cheap. Retraining is not."]),
RC("6",[["Templates","Matter."],["Chat format","Roles and turns."],["Store","Simply."],["Mask","The prompt."],["Splits","Three."],["Validate","First."]])
]});
//@@ ch07-mechanics-of-adaptation
CH({slug:"ch07-mechanics-of-adaptation",n:"7",part:"Part II · Data and training",sub:"How LoRA and its relatives change a model cheaply.",end:"Freeze the base. Train a small update.",scenes:[
VS("Why not retrain everything?","Full fine-tuning",["Every weight updated","Huge memory","A full copy per task"],"Parameter-efficient",["Base frozen","A tiny set of new weights","A small file per task"],["The update is small because the change needed is small."],"→","red","green"),
PT("LoRA: a low-rank update",[["Freeze","The original matrix.","blue"],["Add","Two small matrices, multiplied.","green"],["Rank","Sets how much they can express.","purple"],["Alpha","Scales the update.","amber"]],["Train thousands of parameters where the layer has millions."]),
VS("Merge, or keep separate","Merged",["Added into the base weights","No extra cost at inference"],"Separate",["Swap adapters on one base","Many specialists, one model"],["After training, the update is plain arithmetic."],"or","blue","purple"),
PT("Relatives",[["QLoRA","A 4-bit base under the adapter.","blue"],["DoRA","Splits magnitude from direction.","green"],["Target modules","Where adapters attach.","purple"]],["QLoRA shrinks what you load. LoRA shrinks what you train."]),
RC("7",[["Freeze","The base."],["PEFT","Train a little."],["LoRA","Low rank."],["Knobs","Rank and alpha."],["QLoRA","4-bit base."],["Merge","Or swap."]])
]});
//@@ ch08-training-loop
CH({slug:"ch08-training-loop",n:"8",part:"Part II · Data and training",sub:"Running the training, and reading what it tells you.",end:"Watch two curves.",scenes:[
{type:'curve',title:'Read the loss curves',xl:'training steps →',yl:'loss →',series:[{l:'Validation loss',c:'amber',pts:line(40,x=>.28+.5*Math.exp(-5*x)+.32*Math.pow(Math.max(0,x-.5),2)*2)},{l:'Training loss',c:'blue',pts:line(40,x=>.1+.7*Math.exp(-4*x))}],marks:[{x:.5,y:.32,t:'Best checkpoint',c:'green',at:.55,dx:-120,dy:-150,w:300}],cap:['Both fall at first. Then validation turns up while training keeps falling.','That gap is overfitting. Keep the checkpoint before it. (Illustrative.)']},
PT("The knobs that matter",[["Learning rate","The most important.","blue"],["Schedule","Warm up, then decay.","green"],["Batch size","Limited by memory.","purple"],["Gradient accumulation","A bigger batch, in pieces.","amber"],["Clipping","Caps a runaway step.","red"]],["Change one at a time."]),
PT("The memory budget",[["Base weights","Quantised, to fit.","blue"],["Activations","Grow with sequence length.","green"],["Gradients","Only for the adapter.","purple"],["Batch","The last dial to turn.","amber"]],["Shorten sequences before you shrink the batch to one."]),
PL("A practical workflow",[["Tiny run","Does it train at all?"],["Baseline","Default settings.","blue"],["Read the curves","What is wrong?","purple"],["One change","Then rerun.","amber"],["Checkpoint","The best validation.","green"]],["Small, fast experiments before the long run."],{tc:"blue"}),
RC("8",[["Assemble","Data, model, adapter."],["Curves","Training and validation."],["Learning rate","First."],["Batch","By memory."],["Clip","Gradients."],["Checkpoint","The best."]])
]});
//@@ ch09-using-the-adapter
CH({slug:"ch09-using-the-adapter",n:"9",part:"Part II · Data and training",sub:"Loading the result, and finding out whether it worked.",end:"Five good prompts prove nothing.",scenes:[
PT("What is in the adapter folder",[["Adapter weights","A small file.","blue"],["Adapter config","Rank, alpha, targets.","green"],["Tokenizer files","If changed.","purple"],["Not the base","That is loaded separately.","amber"]],["Copy it off the training machine first."]),
PL("Loading",[["Base model","Load it."],["Tokenizer","Load it.","blue"],["Adapter","Attach it.","purple"],["Generate","And compare.","green"]],["The safetensors format holds only tensors, so loading it cannot run code."],{tc:"blue"}),
VS("Beyond eyeballing","Hand-picked prompts",["Shine on five examples","Fail on the sixth"],"A held-out test set",["Hundreds of cases","Scored the same way each time"],["Compare base and tuned on the same questions."],"→","red","green"),
PT("Ways to measure",[["Perplexity","How surprised by the right answer.","blue"],["A judge model","Which answer is better?","green"],["Domain benchmarks","Written by experts.","purple"],["Regression checks","What got worse?","amber"]],["Each catches what the others miss."]),
RC("9",[["Folder","Small."],["Load","Base, then adapter."],["Compare","With the base."],["Test set","Held out."],["Perplexity","Surprise."],["Judge","And experts."]])
]});
//@@ ch10-alignment-preference
CH({slug:"ch10-alignment-preference",n:"10",part:"Part II · Data and training",sub:"Teaching a model how to answer, not just what.",end:"Show it which answer you prefer.",scenes:[
VS("What to say versus how","After supervised tuning",["It knows the terminology","The manner may be wrong"],"After preference tuning",["It answers the way you want","Tone, caution, format"],["Knowledge and behaviour are tuned separately."],"→","amber","green"),
VS("RLHF and its shortcut","RLHF",["Train a reward model","Then reinforcement learning","Complex and unstable"],"DPO",["Pairs of better and worse answers","One ordinary training run"],["Direct preference optimisation skips the reward model."],"→","amber","green"),
PT("A preference dataset",[["Prompt","The question.","blue"],["Chosen","The answer you want.","green"],["Rejected","The answer you do not.","purple"]],["The rejected answer should be plausible, and worse in the way you care about."]),
VS("Why the reference model matters","Without it",["The model drifts far to please the loss"],"With it",["A frozen copy to stay close to","Preferences change, knowledge stays"],["The reference is an anchor."],"→","red","green"),
RC("10",[["Manner","Not just knowledge."],["RLHF","Three stages."],["DPO","The shortcut."],["Triples","Prompt, chosen, rejected."],["Reference","Keeps it anchored."],["Fit","When behaviour is the gap."]])
]});
//@@ ch11-vision-language-models
CH({slug:"ch11-vision-language-models",n:"11",part:"Part III · Beyond text",sub:"Teaching a model to read images.",end:"Check that it is actually looking.",scenes:[
PL("The two-tower design",[["Image encoder","Patches to vectors."],["Projector","Into the language model’s space.","blue"],["Language model","Reads image and text tokens.","purple"],["Answer","In text.","green"]],["Every modern vision language model follows this blueprint."],{tc:"blue"}),
PT("Patches and the token budget",[["An image","Is cut into patches.","blue"],["Each patch","Becomes a token.","green"],["More detail","More tokens.","purple"],["Pooling","Trades detail for budget.","amber"]],["Images compete with text for the context window."]),
VS("What to tune, what to freeze","Base already describes the image well",["Freeze the vision side","Tune the language side"],"Base misreads the image",["Tune the projector, or the encoder too"],["Ask the base model to describe an image, and see."],"or","green","amber"),
VS("Is it actually looking?","Answering from the question",["Right, without the image"],"Answering from the image",["Wrong when the image is swapped"],["Test with the image removed or replaced."],"→","red","green"),
RC("11",[["See","As well as read."],["Towers","Encoder and language model."],["Patches","Are tokens."],["Freeze","What already works."],["Dataset","Image and target."],["Verify","It looks."]])
]});
//@@ ch12-diffusion-models
CH({slug:"ch12-diffusion-models",n:"12",part:"Part III · Beyond text",sub:"How image generators work.",end:"Learn to undo a little noise, many times.",scenes:[
PL("Controlled destruction, then repair",[["Image","Clean."],["Add noise","Step by step.","amber"],["Pure noise","At the end.","red"],["Learn","To predict the noise added.","blue"],["Generate","By removing it, step by step.","green"]],["The forward process destroys. The model learns the reverse."],{tc:"blue"}),
PT("The parts",[["Text encoder","Turns the prompt into vectors.","blue"],["UNet","Predicts the noise.","green"],["Autoencoder","Compresses to a small latent, and back.","purple"],["Scheduler","Sets the steps. No weights.","amber"]],["Working in the latent makes it affordable."]),
VS("Classifier-free guidance","Low guidance",["Varied, loosely follows the prompt"],"High guidance",["Follows the prompt closely","Can look harsh"],["A dial between freedom and obedience."],"→","blue","purple"),
PT("Where the LoRA goes",[["Attention layers","Of the UNet.","blue"],["Text meets image","That is where concepts bind.","green"],["Small adapters","A few megabytes.","purple"]],["Almost every diffusion fine-tune attaches there."]),
RC("12",[["Denoise","A bit at a time."],["Forward","Add noise."],["Reverse","Learn to remove it."],["Latent","A compressed space."],["Guidance","A dial."],["LoRA","On attention."]])
]});
//@@ ch13-fine-tuning-diffusion
CH({slug:"ch13-fine-tuning-diffusion",n:"13",part:"Part III · Beyond text",sub:"Teaching a subject or a style.",end:"Two recipes, one architecture.",scenes:[
VS("Two recipes","Subject",["A specific thing: your dog, your product","A handful of images"],"Style",["A look: a way of drawing","Many varied subjects in that look"],["It will not draw your subject, or not in your style."],"and","blue","purple"),
PT("Teaching a subject",[["A rare trigger word","Bound to the subject.","blue"],["A class word","“Dog”, so it knows the kind.","green"],["Prior images","Of the class, to keep it general.","purple"]],["The DreamBooth approach."]),
VS("Diffusion loss is noisy","Text training",["The loss falls smoothly"],"Diffusion",["Each step draws a random noise level","The curve jumps about"],["Judge by sample images at checkpoints, not by the curve."],"→","blue","amber"),
VD("Failure modes",[["A generic subject instead of yours",false,"Under-trained.","MORE","amber"],["The subject in every image, whatever you ask",false,"Over-trained.","LESS","red"],["The style leaks into everything",false,"Lower the adapter scale.","DIAL","blue"]],["The trigger is not a switch. The scale is a dial."],{sw:160}),
RC("13",[["Subject","Or style."],["Trigger","A rare word."],["Loss","Noisy."],["Samples","Are the test."],["Scale","A dial."],["Combine","Adapters by weight."]])
]});
//@@ ch14-optimization-quantization
CH({slug:"ch14-optimization-quantization",n:"14",part:"Part IV · Shipping",sub:"Making the model small enough to run.",end:"From “it trains” to “it ships”.",scenes:[
BR("Fewer bits per weight",[["16-bit",100,"Full size","muted"],["8-bit",50,"Half","blue"],["4-bit",25,"A quarter","green"]],["Quantisation stores each weight in fewer bits.","Quality falls slowly at first, then sharply."],{max:100,lw:200}),
VS("The 4-bit trap","Merge into a 4-bit base",["Rounding errors baked in"],"Merge into full precision",["Then quantise once"],["Merge first, at full precision. Quantise afterwards."],"→","red","green"),
VS("After or during training","Post-training quantisation",["Compress finished weights","Simple"],"Quantisation-aware training",["Train knowing the weights will be rounded","Better at low bit widths"],["Two routes to a small model."],"or","blue","purple"),
PL("A gated pipeline",[["Merge","Adapter into base."],["Quantise","To the target format.","blue"],["Evaluate","Against the full model.","amber"],["Ship","Only if it passes.","green"]],["Quantised files are one-way. Keep the original."],{tc:"blue"}),
RC("14",[["Ship","Not just train."],["Merge","At full precision."],["Bits","Fewer."],["Formats","By where it runs."],["QAT","Train for it."],["Gate","With evaluation."]])
]});
//@@ ch15-serving-the-expert
CH({slug:"ch15-serving-the-expert",n:"15",part:"Part IV · Shipping",sub:"Turning a file into a service.",end:"A file on disk is not a product.",scenes:[
VS("Two ways to serve","Local runner",["One user, one machine","Simple to start"],"Throughput server",["Many users at once","Batches requests together"],["Pick by how many people will call it."],"or","green","blue"),
VS("One contract, many backends","Without",["Each server has its own API"],"With",["The same chat completions shape","Swap the backend freely"],["Clients do not need to know what is behind the endpoint."],"→","amber","green"),
VS("Many experts from one base","A model per task",["Memory for each"],"One base, many adapters",["Loaded once","The adapter is chosen per request"],["Specialists become cheap to add."],"→","red","green"),
PT("In production",[["Structured output","Constrained to a schema.","blue"],["A gateway","Keys, limits, routing.","green"],["Time to first token","What users feel.","purple"],["Tokens per second","What capacity costs.","amber"]],["Two numbers to watch."]),
RC("15",[["Product","Not a file."],["Local","For one."],["Server","For many."],["Contract","One API shape."],["Adapters","Per request."],["Measure","Latency and throughput."]])
]});
