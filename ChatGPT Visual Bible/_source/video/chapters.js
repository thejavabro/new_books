//@@ ch00-introduction
CH({slug:"ch00-introduction",n:"0",part:"Introduction",sub:"How the volume is organised, and how to read it.",end:"Menus change. Habits last.",scenes:[
ST("One volume, four books",[["Book 4","Using it for your career.","purple",0.4],["Book 3","Automating repeated work.","blue",0.6],["Book 2","Doing real work tasks.","green",0.8],["Book 1","The basics.","amber",1.0]],["The volume is built as a staircase. Each book assumes the one below."]),
VS("A book about a fast-moving product","What changes",["Menu names and positions","Plans and limits","Which model is the default"],"What stays",["How to brief it","How to check it","When to keep a person in control"],["The book flags details likely to have changed since it was written."],"→","amber","green"),
VS("Why not just ask ChatGPT?","Asking it",["Quick, and worth doing","May describe features wrongly"],"A structured path",["An order that builds","Checks you would not think to ask for"],["Keep doing both."],"and","blue","green"),
PT("Before you start",[["An account","Free is enough to begin.","blue"],["A real task","Something you actually need done.","green"],["A habit","Check before you rely on it.","purple"]],["Bring your own work. The examples are only examples."]),
RC("Introduction",[["Staircase","Four books."],["Order","Each builds on the last."],["Change","Menus move."],["Habits","Stay."],["Ask it","And verify."],["Start","With a real task."]])
]});
//@@ ch01-what-chatgpt-can-do
CH({slug:"ch01-what-chatgpt-can-do",n:"1",part:"Book 1",sub:"What it is good for, and setting up an account safely.",end:"Use it where you can check the result.",scenes:[
VS("Tasks it handles well","Good tasks",["You can judge the answer","Drafting, explaining, summarising, planning"],"Risky tasks",["You cannot check it","A wrong answer is costly"],["A good task is one where you can tell whether the output is right."],"VS","green","red"),
PT("Where a person must stay in control",[["Facts","It can be confidently wrong.","blue"],["Decisions","With real consequences.","green"],["Private information","Yours and other people’s.","purple"],["Anything you sign","Your name, your responsibility.","amber"]],["A polished answer is not a correct one."]),
VD("Create and protect an account",[["A strong, unique password",true,"And a second factor.","DO","green"],["Go to the site directly",true,"Not through an advert or a search result.","DO","green"],["Review the privacy settings",true,"Several switches, not one.","DO","green"],["Upgrade on impulse",false,"Start free. Pay when you hit a limit that matters.","AVOID","red"]],["Value is a result you can use, not a long response."],{sw:170}),
PT("Privacy is several switches",[["Chat history","What is kept.","blue"],["Model improvement","Whether chats are used for training.","green"],["Memory","What it remembers about you.","purple"],["Temporary chats","For what should not be kept.","amber"]],["Look at each, and decide."]),
RC("Chapters 1.1–1.2",[["Platform","More than chat."],["Checkable","Tasks first."],["Control","Stays with you."],["Account","Protect it."],["Paid","On evidence."],["Privacy","Several settings."]])
]});
//@@ ch02-devices-first-conversation
CH({slug:"ch02-devices-first-conversation",n:"2",part:"Book 1",sub:"Using it on the web, a phone and the desktop.",end:"Whatever the input, the loop is the same.",scenes:[
PT("Three doors into one account",[["Browser","Nothing to install.","blue"],["Phone app","Voice, camera, on the move.","green"],["Desktop app","Close to your other work.","purple"]],["Start on one device and carry on from another."]),
PT("Type, dictate, talk or show",[["Type","The most precise.","blue"],["Dictate","Fast for long thoughts.","green"],["Talk","A spoken conversation.","purple"],["Show","A photo or a screenshot.","amber"]],["The input changes how you give information, not what makes a good request."]),
VS("How hard should it think?","Quick",["Simple questions","Faster"],"Longer thinking",["Multi-step problems","Slower, more careful"],["A thinking control trades speed for depth."],"or","green","purple"),
{type:"cycle",title:"The improvement loop",center:"Loop",items:[{t:"Ask",d:"State what you want."},{t:"Read",d:"Check the answer."},{t:"Refine",d:"Say what to change."},{t:"Verify",d:"Before you use it."}],cap:["A first answer is a draft."]},
RC("Chapters 1.3–1.4",[["Doors","Web, phone, desktop."],["Safe","Go to the real site."],["Continue","Across devices."],["Inputs","Four ways."],["Thinking","Match it to the task."],["Loop","Ask, read, refine, verify."]])
]});
//@@ ch03-prompts
CH({slug:"ch03-prompts",n:"3",part:"Book 1",sub:"What goes into a useful request.",end:"Say who it is for, what you want, and how you will judge it.",scenes:[
PT("A prompt in four parts",[["Goal","What you want done.","blue"],["Context","What it needs to know.","green"],["Format","How the answer should look.","purple"],["Limits","What to avoid, or stay within.","amber"]],["No magic words. Coverage matters more than order."]),
VS("Limits you can check","Vague",["“Keep it short”","“Do not be boring”"],"Checkable",["“Under 150 words”","“No more than three bullet points”"],["A boundary only rules out what you name."],"→","red","green"),
PL("Improve the first answer",[["Read it","Against your goal."],["Name the gap","One thing at a time.","blue"],["Ask for the change","Specifically.","purple"],["Repeat","Until it passes.","green"]],["Refine through conversation instead of starting over."],{tc:"blue"}),
VS("Write the criteria first","Afterwards",["You judge by whether it sounds good"],"Beforehand",["You judge by what you said you needed"],["Criteria written first are harder to fool."],"→","amber","green"),
RC("Chapter 1.5",[["Parts","Goal, context, format, limits."],["Coverage","Over order."],["Limits","Make them checkable."],["Refine","In conversation."],["Criteria","Before the answer."],["Review","Against them."]])
]});
//@@ ch04-learn-and-plan
CH({slug:"ch04-learn-and-plan",n:"4",part:"Book 1",sub:"Using it as a tutor and as a planning aid.",end:"It helps you prepare. You decide.",scenes:[
PL("Learn something new",[["Say your level","What you already know."],["Ask for a path","A subject in steps.","blue"],["Get quizzed","Let it question you.","purple"],["Explain it back","In your own words.","green"]],["Reading an explanation is not the same as learning it."],{tc:"blue"}),
VS("Schoolwork","Substitution",["It writes the work","You learn nothing","It may break the rules"],"Support",["It explains and quizzes","You do the work"],["Read the policy for the specific course first."],"→","red","green"),
PL("Plan a real decision",[["Options","List them first."],["Criteria","What matters to you.","blue"],["Compare","Each option against each criterion.","purple"],["Decide","Yourself.","green"]],["Options first, criteria second, so the criteria are not bent to fit a favourite."],{tc:"blue"}),
VS("As stakes rise","Low stakes",["Use the answer"],"High stakes",["Use it to prepare questions","Take them to a qualified person"],["For health, money and law, it prepares you for the conversation."],"→","green","amber"),
RC("Chapters 1.6–1.7",[["Level","Say what you know."],["Path","Step by step."],["Quiz","Beats rereading."],["School","Support, not substitution."],["Decisions","Options, then criteria."],["Stakes","Prepare, do not delegate."]])
]});
//@@ ch05-search-research-files
CH({slug:"ch05-search-research-files",n:"5",part:"Book 1",sub:"When it needs the web, and working with your own documents.",end:"A citation shows where it looked, not that it is right.",scenes:[
VS("When does a question need the web?","Built-in knowledge",["Stops at a training date","Fine for stable facts"],"Web search",["For anything recent","For prices, news, current versions"],["Ask yourself whether the answer could have changed."],"or","blue","green"),
VS("A citation is where it looked","Tempting",["A number beside a claim looks like proof"],"Better",["Open the source","Check it says what is claimed"],["Read the source for anything that matters."],"→","red","green"),
PL("Deep research",[["Plan","It proposes an approach."],["Search","Many sources.","blue"],["Read","And compare.","purple"],["Report","With citations.","green"]],["A planned investigation takes minutes, not seconds."],{tc:"blue"}),
PT("Add your own material",[["Documents","For summary and questions.","blue"],["Images","For description and reading.","green"],["Data","For analysis.","purple"],["Check","That it used the right file.","amber"]],["Its answer is only as good as what you gave it."]),
RC("Chapters 1.8–1.10",[["Web","For what changes."],["Citations","Open them."],["Deep research","A planned report."],["Files","Yours, attached."],["Sources","Point to the right one."],["Verify","What matters."]])
]});
//@@ ch06-personalize-workbench
CH({slug:"ch06-personalize-workbench",n:"6",part:"Book 1",sub:"Shaping replies before you type a word.",end:"Set it up once, and curate what it keeps.",scenes:[
PT("What shapes a reply",[["Custom instructions","Rules you set once.","blue"],["Memory","Facts it has picked up.","green"],["Project","Files and instructions for one job.","purple"],["This chat","What has been said so far.","amber"]],["Every new chat starts with these already in place."]),
VS("Instructions and memory","Custom instructions",["You write them","Stable facts and preferences"],"Memory",["It collects as you talk","You review and delete"],["One you author. The other you curate."],"and","blue","purple"),
PT("Projects",[["One per ongoing job","Not one for everything.","blue"],["Its own files","The sources it should use.","green"],["Its own instructions","How to work here.","purple"],["Its own chats","Kept together.","amber"]],["A project is a workspace."]),
PL("Build your workbench",[["Instructions","Who you are, how you like answers."],["Memory","Reviewed.","blue"],["A project","For your main job.","purple"],["A test","Does a new chat behave?","green"]],["The Book 1 project ties the chapters together."],{tc:"blue"}),
RC("Chapters 1.11–1.12",[["Before typing","Much is set."],["Instructions","Written once."],["Memory","Curated."],["Projects","One per job."],["Workbench","Your setup."],["Test","With a fresh chat."]])
]});
//@@ ch07-safety-and-modes
CH({slug:"ch07-safety-and-modes",n:"7",part:"Book 2",sub:"Ground rules for work, and choosing how big a job to hand over.",end:"Sort the information before you share it.",scenes:[
PT("Green, amber, red",[["Green","Public or harmless. Share.","blue"],["Amber","Internal. Check the policy first.","green"],["Red","Confidential or personal. Do not share.","purple"]],["Sort before pasting anything."]),
PT("Verify, disclose, approve",[["Verify","Treat every factual claim as a draft.","blue"],["Disclose","Where your workplace expects it.","green"],["Approve","A person signs off the result.","purple"]],["From here on, conversations involve other people’s information."]),
ST("Three sizes of job",[["An agent for code","Longer technical work.","purple",0.5],["A work assignment","A supervised, multi-step task.","blue",0.75],["Chat","Questions and short tasks.","green",1.0]],["Pick the mode by the size of the job."]),
PL("Supervise a long assignment",[["Brief it","Goal, sources, limits."],["Check the plan","Before it starts.","blue"],["Watch for questions","It may need you.","amber"],["Review the result","Against the brief.","green"]],["A stalled assignment is usually waiting for an answer."],{tc:"blue"}),
RC("Chapters 2.1–2.2",[["Sort","Green, amber, red."],["Verify","Claims are drafts."],["Approve","A person signs off."],["Modes","By size of job."],["Effort","Match it to the work."],["Supervise","Long tasks."]])
]});
//@@ ch08-documents-summaries
CH({slug:"ch08-documents-summaries",n:"8",part:"Book 2",sub:"From a brief to a finished document, and from a pile of notes to a summary.",end:"One kind of review at a time.",scenes:[
PL("From brief to document",[["Reader and purpose","Who, and why."],["Outline","Check it before any prose.","blue"],["Draft","Section by section.","purple"],["Review","One kind at a time.","amber"],["Final check","Yours.","green"]],["It can produce a full draft in seconds. The work is in the brief and the review."],{tc:"blue"}),
VS("One kind of review at a time","“Make it better”",["Vague changes everywhere"],"Separate passes",["Accuracy","Structure","Tone and length"],["Name the kind of review you want."],"→","red","green"),
VS("Summarise for a named reader","Generic",["“Summarise this”"],"Specific",["For whom?","What will they do with it?","How long?"],["A summary for a manager differs from one for a customer."],"→","amber","green"),
PT("Compare documents fairly",[["Same questions","Asked of each.","blue"],["A table","One row per criterion.","green"],["Quotes","Where it found each answer.","purple"],["Gaps","What a document does not say.","amber"]],["Scattered notes become something you can decide from."]),
RC("Chapters 2.3–2.4",[["Reader","First."],["Outline","Before prose."],["Passes","One at a time."],["Edit","In place."],["Summaries","For someone."],["Compare","On the same terms."]])
]});
//@@ ch09-spreadsheets
CH({slug:"ch09-spreadsheets",n:"9",part:"Book 2",sub:"A five-step method for working with data.",end:"Validate before you decide.",scenes:[
PL("Five steps",[["Explain","The data and the question."],["Clean","With a change log.","blue"],["Calculate","What answers the question.","purple"],["Check","It yourself.","amber"],["Decide","With the limits stated.","green"]],["It can run real code on your file. The method keeps it honest."],{tc:"blue"}),
VS("Clean with a change log","Guessing",["Silently fixes what looks wrong","You cannot tell what changed"],"Logging",["Lists duplicates, blanks, odd values","Changes only what you approve"],["Never let it tidy the data unseen."],"→","red","green"),
VD("Check it yourself",[["Pick a few rows and do the arithmetic",true,"By hand or in a spreadsheet.","DO","green"],["Ask how many rows were used",true,"And how many were dropped.","DO","green"],["Ask for the formula",true,"Kept visible.","DO","green"],["Trust a chart you cannot trace",false,"To its numbers.","AVOID","red"]],["A result you cannot check is not a result."],{sw:160}),
PT("State the limits",[["What the data covers","And what it does not.","blue"],["What was assumed","Explicitly.","green"],["How sure","It is.","purple"],["What would change the answer","If known.","amber"]],["A decision should carry its caveats."]),
RC("Chapter 2.5",[["Explain","Data and question."],["Clean","With a log."],["Calculate","The specific thing."],["Check","By hand."],["Decide","With limits."],["Method","Over magic."]])
]});
//@@ ch10-images-presentations
CH({slug:"ch10-images-presentations",n:"10",part:"Book 2",sub:"Pictures, diagrams and slides.",end:"Decide what the visual must say before making it.",scenes:[
VS("Exact, or only right in feel?","Feel",["Illustrations and mood","Image generation suits it"],"Exact",["Charts, labels, real products","Needs data or a real photo"],["Generated images are approximate."],"or","green","amber"),
PT("A visual brief",[["Subject","What is shown.","blue"],["Purpose","Where it will be used.","green"],["Style","The look.","purple"],["Composition","Layout and framing.","amber"],["Must not","What to leave out.","red"]],["A useful request names more than the subject."]),
VS("Editing an image","Vague",["“Make it nicer”"],"Precise",["What changes","What must stay the same"],["Say both halves."],"→","red","green"),
PL("Presentations that lead to a decision",[["Decision","What should the audience do?"],["Storyline","One point per slide.","blue"],["Draft","The slides.","purple"],["Inspect","Every slide, yourself.","green"]],["Ask someone unfamiliar with the topic whether they follow it."],{tc:"blue"}),
RC("Chapters 2.6–2.7",[["Exact","Or approximate."],["Brief","Five parts."],["Edit","Change and keep."],["Diagrams","Meaning first."],["Slides","Towards a decision."],["Inspect","Before sending."]])
]});
//@@ ch11-plugins-briefing
CH({slug:"ch11-plugins-briefing",n:"11",part:"Book 2",sub:"Connecting it to your other tools.",end:"Grant the least access that does the job.",scenes:[
PT("How the pieces fit",[["Skill","A written playbook for a task.","blue"],["App or connector","A link to another service.","green"],["Plugin","A bundle of the two.","purple"]],["Names vary. The split between know-how and access does not."]),
VD("Install and grant with care",[["Install only what the task needs",true,"Fewer things to go wrong.","DO","green"],["Grant the narrowest access",true,"Read-only where possible.","DO","green"],["Review what is connected",true,"From time to time.","DO","green"],["Connect everything on day one",false,"You will forget what can see what.","AVOID","red"]],["Connecting lets it read information on your behalf."],{sw:160}),
VS("Point it at the right source","Unclear",["It picks a source for you"],"Clear",["Name the source","Check the citations match"],["When several sources are connected, say which."],"→","amber","green"),
PL("A weekly briefing",[["Sources","Chosen."],["Draft","It compiles.","blue"],["Evidence table","Claim, source, date.","purple"],["You review","Against the sources.","amber"],["Approve","Then send.","green"]],["The Book 2 project: a briefing you approve every week."],{tc:"blue"}),
RC("Chapters 2.8–2.9",[["Pieces","Know-how and access."],["Install","Sparingly."],["Access","The least."],["Source","Name it."],["Briefing","Compiled, then reviewed."],["Approve","Every week."]])
]});
//@@ ch12-automation-scheduling
CH({slug:"ch12-automation-scheduling",n:"12",part:"Book 3",sub:"Choosing what to automate, and running it on a schedule.",end:"Choose the plainest building block that works.",scenes:[
VD("Is it worth automating?",[["It repeats",true,"Often enough to matter.","YES","green"],["It follows the same steps",true,"Each time.","YES","green"],["The result is easy to check",true,"Quickly.","YES","green"],["It needs fresh judgement every time",false,"Keep it manual.","NO","red"]],["A task is a candidate when it repeats, follows a pattern, and can be checked."],{sw:150}),
VS("Choose the plainest block","Plainer",["A saved prompt","A project with files and rules","A tested skill"],"Heavier",["A standing custom assistant","Control of the screen, when nothing else connects"],["The book’s question at every step: what is the plainest thing that works?"],"→","green","amber"),
VS("Scheduled tasks","The work",["What to do","Where to look","What to produce"],"The trigger",["When to run","How often"],["Every scheduled task has two parts."],"and","blue","purple"),
VS("A watch stays quiet","A report",["Arrives every time","Soon ignored"],"A watch",["Speaks only when something has happened"],["Edit, pause or delete tasks that nobody reads."],"→","amber","green"),
RC("Chapters 3.1–3.2",[["Candidates","Repeat, pattern, checkable."],["Plainest","First."],["Screen control","Last resort."],["Schedule","Work plus trigger."],["Watch","Quiet until needed."],["Prune","Unread tasks."]])
]});
//@@ ch13-skills-gpts
CH({slug:"ch13-skills-gpts",n:"13",part:"Book 3",sub:"Packaging a procedure for reuse.",end:"A skill starts as a specification.",scenes:[
PL("Build a skill",[["Specify","Inputs, steps, output."],["Create","Through conversation.","blue"],["Test","A normal case and a hard one.","amber"],["Invoke","By name.","purple"],["Share","Carefully.","green"]],["A skill stores a tested procedure, not a prompt that happened to work once."],{tc:"blue"}),
VS("Skill or custom GPT?","Skill",["One procedure","Called when needed"],"Custom GPT",["A standing assistant","Its own instructions and knowledge files"],["Use the smaller mechanism when it does the job."],"or","blue","purple"),
PT("Configure a GPT",[["Instructions","How it behaves.","blue"],["Knowledge","Files it can consult.","green"],["Capabilities","What it may use.","purple"],["Starters","Examples for users.","amber"]],["Each part has one job."]),
VS("Keep its knowledge current","Stale",["Old files, confident answers"],"Maintained",["A review date","An owner","Files replaced when they change"],["A GPT’s knowledge does not update itself."],"→","red","green"),
RC("Chapters 3.3–3.4",[["Specify","Before building."],["Test","Normal and hard."],["Invoke","By name."],["GPT","A standing assistant."],["Parts","One job each."],["Maintain","Its knowledge."]])
]});
//@@ ch14-workflows
CH({slug:"ch14-workflows",n:"14",part:"Book 3",sub:"Applying the building blocks to whole processes.",end:"Record the baseline before you change anything.",scenes:[
PL("One pattern behind every workflow",[["Trigger","What starts it."],["Gather","The inputs.","blue"],["Draft","The output.","purple"],["Review","By a person.","amber"],["Deliver","And record.","green"]],["The last chapters of Book 3 apply the same few blocks."],{tc:"blue"}),
VS("Research and content","Draft first",["Then look for support","Claims drift from sources"],"Evidence first",["Collect and check sources","Then write from them"],["Evidence before drafting."],"→","red","green"),
VS("Decisions and operations","It decides",["Risky, and unaccountable"],"It prepares",["Options, data, questions","You hold the conversation"],["It gets you ready for the meeting."],"→","red","green"),
PL("Prove it against a baseline",[["Baseline","Time and quality, before."],["Build","The workflow.","blue"],["Measure","The same things, after.","purple"],["Decide","Keep, fix or drop.","green"]],["An improvement without a baseline is a feeling."],{tc:"blue"}),
RC("Chapters 3.5–3.8",[["Pattern","Trigger to delivery."],["Evidence","Before drafting."],["Prepare","Not decide."],["Build","One end to end."],["Baseline","First."],["Measure","Then judge."]])
]});
//@@ ch15-direction-audit-measure
CH({slug:"ch15-direction-audit-measure",n:"15",part:"Book 4",sub:"Deciding what the skills are for.",end:"Pick one improvement: most friction, least risk.",scenes:[
PT("Audit your role",[["List","Each task, for two or three days.","blue"],["Sort","Into kinds of work.","green"],["Mark","What is slow or tedious.","purple"],["Mark","What is risky to hand over.","amber"]],["You cannot improve work you have not looked at."]),
VS("Pick one improvement","Poor choice",["High risk","Hard to check"],"Good choice",["High friction","Low risk","Easy to verify"],["Some tasks should not be automated at all."],"→","red","green"),
PL("Measure honestly",[["Before","Time and errors."],["Change","One thing.","blue"],["After","The same measures.","purple"],["Report","Including what got worse.","green"]],["A claim of improvement without evidence is an opinion."],{tc:"blue"}),
PT("Keep an achievement record",[["What","You changed.","blue"],["Evidence","Before and after.","green"],["Your part","Exactly what you did.","purple"],["When","Dated.","amber"]],["Do not trust memory to carry your evidence."]),
RC("Chapters 4.1–4.3",[["Direction","What is it for?"],["Audit","Your tasks."],["Choose","Friction over risk."],["Measure","Before and after."],["Honest","About the downsides."],["Record","As you go."]])
]});
//@@ ch16-skills-strengths-lead
CH({slug:"ch16-skills-strengths-lead",n:"16",part:"Book 4",sub:"Growing skills, keeping your strengths, and leading a small change.",end:"Never propose a full rollout first.",scenes:[
PL("A plan you will finish",[["Target","What the next role needs."],["Gap","What you lack.","blue"],["Small steps","Weekly.","purple"],["Review","And adjust.","green"]],["An overloaded plan is easy to write and hard to keep."],{tc:"blue"}),
PT("Strengths that stay yours",[["Judgement","Knowing what matters.","blue"],["Relationships","Trust with people.","green"],["Accountability","Owning the outcome.","purple"],["Taste","Knowing what is good.","amber"]],["The book names seven such strengths. These are examples of the kind."]),
VS("Notice skills fading","Delegated entirely",["The skill weakens, quietly"],"Practised",["Do it yourself, now and then"],["Keep in practice the skills you would hate to lose."],"→","amber","green"),
PL("Design a small pilot",[["Scope","One team, one task."],["Measure","Agreed in advance.","blue"],["Stop rule","When to end it.","red"],["Review","Then widen, or not.","green"]],["A pilot needs a way to stop."],{tc:"blue"}),
RC("Chapters 4.4–4.6",[["Next role","Find what it needs."],["Plan","Small enough to finish."],["Strengths","Human ones."],["Practice","Or lose it."],["Pilot","Small."],["Stop rule","Built in."]])
]});
//@@ ch17-promotion-jobs-voice
CH({slug:"ch17-promotion-jobs-voice",n:"17",part:"Book 4",sub:"Making your case, on paper and aloud.",end:"Claim exactly what you did.",scenes:[
PL("Turn an achievement into a case",[["Record","Your evidence."],["Outcome","What changed for the business.","blue"],["Your part","Precisely.","purple"],["Ask","For the specific thing.","green"]],["The achievement record is the raw material."],{tc:"blue"}),
VS("Claim exactly what you did","Overstated",["Easy to challenge","Costs trust"],"Exact",["Your part, named","Stands up to questions"],["An honest claim is a stronger one."],"→","red","green"),
VD("An honest résumé",[["Clearer wording",true,"It can help with that.","FINE","green"],["Skills you do not have",false,"Check every line.","REMOVE","red"],["Numbers you cannot support",false,"You will be asked.","REMOVE","red"]],["It can make a résumé clearer. It must not make it untrue."],{sw:170}),
PL("Rehearse out loud",[["Set the scene","Who, and what is at stake."],["Speak","Your opening.","blue"],["Get questions","Hard ones.","amber"],["Repeat","Until it is steady.","green"]],["Writing the words is one skill. Saying them is another."],{tc:"blue"}),
RC("Chapters 4.7–4.9",[["Case","From evidence."],["Exact","Claims."],["New role","Research it first."],["Résumé","Every line true."],["Rehearse","Aloud."],["Voice","For practice."]])
]});
//@@ ch18-portfolio-product-field
CH({slug:"ch18-portfolio-product-field",n:"18",part:"Book 4",sub:"Showing your work, and turning a skill into an offer.",end:"Start from someone else’s real problem.",scenes:[
PT("A one-page case study",[["Problem","What was wrong.","blue"],["Action","What you did.","green"],["Result","With evidence.","purple"],["Limits","What it does not show.","amber"]],["A short, honest account with proof."]),
VD("Before sharing outside",[["Remove names and figures",true,"Of clients and colleagues.","DO","green"],["Check your contract",true,"And your employer’s policy.","DO","green"],["Ask permission",true,"Where needed.","DO","green"]],["Remove confidential detail first."],{sw:150}),
VS("Service or product","Service",["Starts fast","Paid for your time"],"Product",["Takes longer","Sells without you"],["Either way, begin with a problem someone already has."],"or","blue","purple"),
VS("Will AI take my job?","The task question",["Which tasks can it do?"],"The role question",["Who is accountable?","Who has the relationships?","Who decides?"],["The book splits the worry into two different questions."],"and","amber","green"),
RC("Chapters 4.10–4.13",[["Case study","One page."],["Confidential","Removed."],["Offer","From a real problem."],["Service","Or product."],["Jobs","Tasks versus roles."],["Thirty days","A value project."]])
]});
//@@ ch19-epilogue
CH({slug:"ch19-epilogue",n:"19",part:"Epilogue",sub:"What to keep when the product changes.",end:"The progress came from the habits.",scenes:[
PT("What stays true",[["Brief it well","Goal, context, format, limits.","blue"],["Check it","Before you rely on it.","green"],["Keep control","Of decisions and private data.","purple"],["Measure","What it actually improved.","amber"]],["Menu names, default modes and controls will keep changing."]),
VS("Where the book ends","The book",["Methods and examples"],"Your work",["Real tasks","Real stakes","Your judgement"],["The progress did not come from a clever prompt."],"→","blue","green"),
VS("A second opinion","One assistant",["One set of blind spots"],"Two",["Compare answers","Notice disagreements"],["When you hit limits, the book suggests trying a second AI before a bigger plan."],"→","amber","green"),
PT("One habit per book",[["Book 1","Ask clearly, and verify.","blue"],["Book 2","Sort information before sharing.","green"],["Book 3","Automate the plain way first.","purple"],["Book 4","Keep evidence of your results.","amber"]],["A final check across the whole volume."]),
RC("Epilogue",[["Habits","Outlast menus."],["Brief","Well."],["Check","Always."],["Control","Stays with you."],["Second view","Helps."],["Build","If you want to go further."]])
]});
