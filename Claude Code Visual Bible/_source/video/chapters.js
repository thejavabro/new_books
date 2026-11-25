//@@ ch00-introduction
CH({slug:"ch00-introduction",n:"0",part:"Introduction",sub:"What the volume covers, and how it is laid out.",end:"You bring judgement. Claude brings code.",scenes:[
VS("From chatting to building","Chat",["You ask, it answers","You copy the result somewhere"],"Building",["It reads and edits files in your project","It runs commands and checks the result"],["The same assistant, working inside a project folder."],"→","blue","green"),
ST("Three books, one destination",[["Book 3","A mobile app.","purple",0.5],["Book 2","A public website.","blue",0.75],["Book 1","Foundations, and a command-line tool.","green",1.0]],["Each book ends with a project you build yourself."]),
VS("A fast-changing product","Will change",["Menus and buttons","Install steps","Plans and prices"],"Will not",["Brief clearly","Review every change","Keep checkpoints"],["The book flags details that may have changed since publication."],"→","amber","green"),
VS("The partnership","You",["Decide what to build","Judge whether it is right"],"Claude Code",["Plans, writes and tests","Explains what it did"],["This is not a programming course. It is a course in directing the work."],"and","blue","purple"),
RC("Introduction",[["Building","Not just chatting."],["Three books","Tool, site, app."],["Projects","One per book."],["Change","Menus move."],["Habits","Stay."],["Judgement","Yours."]])
]});
//@@ ch01-agent-and-workspace
CH({slug:"ch01-agent-and-workspace",n:"1",part:"Book 1 · Foundations",sub:"What a coding agent is, and where it works.",end:"Pick an idea small enough to picture finished.",scenes:[
{type:"cycle",title:"The loop every task follows",center:"Task",items:[{t:"Brief",d:"Say what you want."},{t:"Plan",d:"Agree the approach."},{t:"Build",d:"It writes the code."},{t:"Check",d:"Run it and look."},{t:"Commit",d:"Save a checkpoint."}],cap:["The book describes six stages. These are the essentials, and they repeat for every task."]},
PT("What still needs human judgement",[["What to build","And for whom.","blue"],["Whether it is right","Not just running.","green"],["What is safe","To run and to share.","purple"],["When to stop","Good enough is a decision.","amber"]],["It plans, writes and tests faster than you. It does not know what you meant."]),
VS("Give every project its own folder","One shared folder",["It can read and edit everything there","Changes land in the wrong place"],"One folder per project",["A clear boundary","Easy to back up and to delete"],["Claude Code works in the folder you open."],"→","red","green"),
PT("Three ways to use it",[["Editor extension","Inside the code editor.","blue"],["Terminal","The command-line program.","green"],["Desktop app","A separate window.","purple"]],["The book works mostly in the editor extension."]),
RC("Chapters 1.1–1.2",[["Agent","Acts in your files."],["Direct","You set the goal."],["Loop","Brief to commit."],["Judgement","Stays human."],["Small","First idea."],["Folder","One per project."]])
]});
//@@ ch02-terminal-first-build
CH({slug:"ch02-terminal-first-build",n:"2",part:"Book 1 · Foundations",sub:"Enough terminal to get by, and a first tiny build.",end:"A file existing is not the same as a working result.",scenes:[
PT("Reading the terminal",[["Prompt","Where you type.","blue"],["Path","Where you are.","green"],["Current folder","What commands act on.","purple"],["A handful of commands","Move, list, make a folder.","amber"]],["A terminal is a window where you type commands."]),
VS("Ask for something tiny and specific","Too big",["“Build me a website”"],"Right-sized",["One page","One heading","One button that does one thing"],["Your first request should be finished in minutes."],"→","red","green"),
ST("How much it checks with you",[["Acts on its own","Within limits you set.","purple",0.5],["Edits, then asks before commands","A middle setting.","blue",0.75],["Asks before each change","The most cautious.","green",1.0]],["Start cautious. Loosen it as you learn what it does."]),
PL("Prove it works",[["Open","The result."],["Use it","As a visitor would.","blue"],["Compare","With what you asked for.","purple"],["Then","Say it is done.","green"]],["Look at the thing, not at the message saying it succeeded."],{tc:"blue"}),
RC("Chapters 1.3–1.4",[["Terminal","A few commands."],["Path","Know where you are."],["Tiny","First request."],["Permissions","Start cautious."],["Open it","And look."],["Working","Means checked."]])
]});
//@@ ch03-pieces-and-brief
CH({slug:"ch03-pieces-and-brief",n:"3",part:"Book 1 · Foundations",sub:"The parts of a program, and how to describe what you want.",end:"Start the brief with a person and a problem.",scenes:[
PT("The pieces of software",[["Interface","What people see and touch.","blue"],["Logic","The rules.","green"],["Data","What is stored.","purple"],["Services","Other systems it talks to.","amber"]],["You will not write them. Recognising them helps you direct."]),
PT("Packages, frameworks and APIs",[["Package","Code someone else wrote.","blue"],["Framework","A structure to build inside.","green"],["API","A way to ask another service.","purple"]],["Claude Code chooses most of these. Ask why."]),
PL("The build brief",[["Person","Who is it for?"],["Problem","What do they need?","blue"],["Smallest version","Still useful.","purple"],["Acceptance criteria","How you will know.","green"]],["Saved as a plain text file in the project."],{tc:"blue"}),
VS("Acceptance criteria","Vague",["“It should work well”"],"Specific",["“Typing a name and pressing Add shows it in the list”","Could be handed to a stranger"],["Criteria are checks anyone could run."],"→","red","green"),
RC("Chapters 1.5–1.6",[["Pieces","Interface, logic, data, services."],["Languages","Recognise by shape."],["Brief","Person and problem."],["Smallest","Useful version."],["Criteria","A stranger could check."],["Markdown","Plain text."]])
]});
//@@ ch04-prompts-plans-memory
CH({slug:"ch04-prompts-plans-memory",n:"4",part:"Book 1 · Foundations",sub:"Asking well, planning first, and giving the project a memory.",end:"Ask for a plan before any file changes.",scenes:[
PT("A prompt in four parts",[["Context","Where things stand.","blue"],["Task","What to do.","green"],["Constraints","What not to touch.","purple"],["Checks","How to verify.","amber"]],["A prompt that gets a useful result usually has all four."]),
VS("Swap vague for testable","Vague",["“Make the page look better”"],"Testable",["“Make the heading larger and centre it on phones”"],["If you cannot check it, it cannot be done right."],"→","red","green"),
PL("Plan first",[["Ask for a plan","No changes yet."],["Read it","Does it match the brief?","blue"],["Adjust","Before work starts.","amber"],["Approve","Then build.","green"]],["For anything bigger than a one-file tweak."],{tc:"blue"}),
PT("Project memory",[["What it is","A file of standing instructions.","blue"],["Why","Every new session starts without memory.","green"],["Good contents","Structure, commands, conventions.","purple"],["Keep it","Short, and checked before committing.","amber"]],["The CLAUDE.md file is read at the start of each session."]),
RC("Chapters 1.7–1.8",[["Four parts","Context, task, constraints, checks."],["Level","Ask for your own."],["Testable","Requests."],["Plan","Before changes."],["Increments","Small and safe."],["Memory","In a file."]])
]});
//@@ ch05-git-and-debugging
CH({slug:"ch05-git-and-debugging",n:"5",part:"Book 1 · Foundations",sub:"Reviewing changes, saving checkpoints and fixing problems.",end:"Debug one cause at a time.",scenes:[
VS("Read a diff","Accept blindly",["Changes you have not seen","Surprises later"],"Review",["What was added","What was removed","Accept or reject each part"],["A diff shows exactly what changed."],"→","red","green"),
PL("Git checkpoints",[["Initialise","A repository."],["Stage","Choose what to save.","blue"],["Commit","With a message.","purple"],["Repeat","After each working step.","green"]],["A commit is a saved checkpoint you can return to."],{tc:"blue"}),
PL("Debug calmly",[["Reproduce","Make it fail again."],["Read the error","The exact text.","blue"],["One hypothesis","One change.","amber"],["Check","Did it fix it?","green"]],["Do not ask for five fixes at once."],{tc:"blue"}),
VS("Most of an error message is context","Skim",["See “error”, panic"],"Read",["Find the file and line","Find the one sentence that says what"],["Copy the exact error into the conversation."],"→","amber","green"),
RC("Chapters 1.9–1.10",[["Diff","Read before accepting."],["Commit","A checkpoint."],["Often","After each step."],["One cause","At a time."],["Exact error","Copied in."],["Practice","Break it on purpose."]])
]});
//@@ ch06-secrets-and-tool-project
CH({slug:"ch06-secrets-and-tool-project",n:"6",part:"Book 1 · Foundations",sub:"Staying safe, staying sceptical, and a first project.",end:"Keep keys out of your code and out of Git.",scenes:[
VS("What a permission request protects","Approving everything",["It can run any command","Mistakes run too"],"Reading each request",["You see what it will do","You can say no"],["A request is a chance to stop something."],"→","red","green"),
VD("Handling secrets",[["An API key in the source code",false,"Anyone with the code has it.","NEVER","red"],["A key in a file Git ignores",true,"Kept out of history.","DO","green"],["A committed key",false,"Treat it as leaked, and replace it.","ROTATE","amber"]],["An API key is a password for a service."],{sw:170}),
PT("Question everything",[["Packages","Is it real, and maintained?","blue"],["Claims","“It works” needs proof.","green"],["Your prompts","Did you ask for the right thing?","purple"]],["Scepticism is part of the job."]),
PL("Book 1 project",[["Brief","A small command-line tool."],["Plan","Reviewed.","blue"],["Build","One step at a time.","purple"],["Test","Against the criteria.","amber"],["History","Reads like a story.","green"]],["A tool you would actually use."],{tc:"blue"}),
RC("Chapters 1.11–1.12",[["Permissions","Read them."],["Keys","Never in code."],["Packages","Check them."],["Project","A real tool."],["Criteria","Run against them."],["History","Tells the story."]])
]});
//@@ ch07-plan-site-and-html
CH({slug:"ch07-plan-site-and-html",n:"7",part:"Book 2 · Websites",sub:"Planning a small site and giving it structure.",end:"Plan around visitors, and the one action each needs.",scenes:[
PL("Plan the site",[["Visitors","Who comes?"],["Action","What should each do?","blue"],["Site map","A few pages.","purple"],["Content","Per page.","amber"],["Criterion","Per page.","green"]],["Book 2 builds a public website for the running example."],{tc:"blue"}),
PT("Meaningful regions",[["Header","Identity.","blue"],["Nav","Ways to move.","green"],["Main","The content.","purple"],["Footer","The small print.","amber"]],["Semantic HTML uses tags that say what a region is."]),
VS("Check the outline before styling","Skipped levels",["Headings chosen for size","Confusing to assistive tools"],"In order",["One main heading","Sub-headings nested beneath"],["Structure first. Looks later."],"→","red","green"),
PT("Project and preview",[["Plain files","HTML, CSS, JavaScript.","blue"],["No build step","Nothing to configure.","green"],["Local preview","See changes at once.","purple"]],["Keep the setup as simple as the site."]),
RC("Chapters 2.1–2.2",[["Visitors","First."],["Site map","In words."],["Criteria","Per page."],["Semantic","Regions."],["Outline","Headings in order."],["Preview","Locally."]])
]});
//@@ ch08-css-system-and-layout
CH({slug:"ch08-css-system-and-layout",n:"8",part:"Book 2 · Websites",sub:"A small design system, and laying out the page.",end:"Decide once, reuse everywhere.",scenes:[
PT("Design tokens",[["Colours","A few, named.","blue"],["Type","Sizes and fonts.","green"],["Spacing","A scale.","purple"],["Use","Everywhere, by name.","amber"]],["A design token is a named, reusable value."]),
VS("Name your own choices","Left alone",["The same familiar fonts and colours","Looks like every other generated site"],"Directed",["You name the pairing","The site has a character"],["Give it a direction."],"→","amber","green"),
VS("Flexbox and Grid","Flexbox",["One direction","A row or a column"],"Grid",["Two directions","Rows and columns together"],["Layout is about how boxes relate."],"and","blue","purple"),
VS("Relationships, not coordinates","Pixel positions",["Break on another screen"],"Relationships",["“Beside”, “below”, “fill the space”","Adapts"],["Use the browser’s developer tools to see the layout."],"→","red","green"),
RC("Chapters 2.3–2.4",[["Tokens","Named values."],["System","Small."],["Fonts","Chosen on purpose."],["Flexbox","One direction."],["Grid","Two."],["Relations","Not pixels."]])
]});
//@@ ch09-responsive-nav-images
CH({slug:"ch09-responsive-nav-images",n:"9",part:"Book 2 · Websites",sub:"Making the site work on any screen, for anyone.",end:"Responsive means rearranging, not shrinking.",scenes:[
VS("Responsive design","Shrinking",["The desktop page, made tiny"],"Rearranging",["Columns stack","Menus collapse","Text stays readable"],["Design for the narrow screen first, then add."],"→","red","green"),
VD("Navigation anyone can use",[["Works with the keyboard alone",true,"Tab, Enter, Escape.","CHECK","blue"],["Shows where the focus is",true,"A visible outline.","CHECK","blue"],["Says which page you are on",true,"To eyes and to screen readers.","CHECK","blue"]],["Navigation must work for someone who cannot use a mouse."],{sw:160}),
VD("Images",[["An image you made, or licensed",true,"Legally yours to use.","FINE","green"],["One found by searching",false,"Not automatically free.","CHECK","amber"],["Alt text that says what matters",true,"Not “image of”.","DO","green"]],["Images should scale with the layout."],{sw:150}),
PT("Familiar sections",[["Testimonials","Real ones only.","blue"],["FAQ","Actual questions.","green"],["A clear call to action","One per page.","purple"],["Support and privacy","Specific content.","amber"]],["Fill pages with real content, not filler."]),
RC("Chapters 2.5–2.7",[["Rearrange","Not shrink."],["Small first","Then wider."],["Keyboard","Works."],["Images","Yours."],["Alt text","That helps."],["Content","Real."]])
]});
//@@ ch10-javascript-and-forms
CH({slug:"ch10-javascript-and-forms",n:"10",part:"Book 2 · Websites",sub:"Adding behaviour to the page.",end:"Select, listen, change, update.",scenes:[
PL("The pattern behind interactivity",[["Select","An element."],["Listen","For an event.","blue"],["Change","Some state.","purple"],["Update","The page.","green"]],["Nearly every interaction follows these four steps."],{tc:"blue"}),
PT("Three small features",[["A menu","Opens and closes.","blue"],["An FAQ","Expands on a click.","green"],["A theme","Remembered between visits.","purple"]],["Ask for each separately, and test each."]),
VD("A contact form that fails gracefully",[["Says what is wrong, next to the field",true,"Not just “error”.","DO","green"],["Keeps what was typed",true,"After a failed attempt.","DO","green"],["Confirms when it is sent",true,"Clearly.","DO","green"],["Fails silently",false,"The visitor thinks it worked.","AVOID","red"]],["A form posts data to a server, which needs a service behind it."],{sw:160}),
VS("Or skip the form","A form",["Needs somewhere to send to","More to maintain"],"An email link",["Opens the visitor’s mail app","Nothing to run"],["The simplest thing that works."],"or","blue","green"),
RC("Chapters 2.8–2.9",[["Pattern","Four steps."],["Small","Features, one by one."],["Remember","A preference."],["Form","Fails kindly."],["Simple","A mail link."],["Test","Each piece."]])
]});
//@@ ch11-audit-and-publish
CH({slug:"ch11-audit-and-publish",n:"11",part:"Book 2 · Websites",sub:"Checking the site, then putting it online.",end:"Check it the way a stranger would.",scenes:[
PT("One page, three readers",[["People","Is it clear?","blue"],["Assistive technology","Can it be read aloud?","green"],["Search engines","Can it be understood?","purple"]],["Before publishing, stop adding and audit."]),
PT("What decides a first impression",[["Speed","Slow pages lose visitors.","blue"],["Title","What shows in the tab and in search.","green"],["Description","The line beneath it.","purple"],["Social card","What appears when shared.","amber"]],["Small things in the page’s head."]),
PL("From folder to public address",[["Final pass","Every page, every link."],["Push","To a repository.","blue"],["Connect","A hosting service.","purple"],["Publish","A public address.","green"]],["Free static hosts turn a repository into a site."],{tc:"blue"}),
VD("After it is public",[["Open it on a phone",true,"On mobile data.","DO","green"],["Ask someone else to try it",true,"Without help.","DO","green"],["Check for anything private",true,"It may be indexed.","DO","green"]],["Once public, anyone can find it."],{sw:150}),
RC("Chapters 2.10–2.11",[["Audit","Before publishing."],["Three readers","People, tools, search."],["Speed","Matters."],["Head","Title and card."],["Publish","From a repository."],["Stranger","Test."]])
]});
//@@ ch12-website-project
CH({slug:"ch12-website-project",n:"12",part:"Book 2 · Websites",sub:"Building a site of your own.",end:"Publish, then look with a stranger’s eyes.",scenes:[
PL("The project",[["A real person","And a reason to visit."],["Plan","Visitors, pages, criteria.","blue"],["Build","In small increments.","purple"],["Commit","After each.","amber"],["Publish","And review.","green"]],["Plan it the way the book’s example was planned."],{tc:"blue"}),
VS("Which chapters does your idea need?","Every technique",["Applied because it was taught"],"The ones that fit",["A form only if you need one","Scripts only where they help"],["Recognising what to leave out is part of the skill."],"→","amber","green"),
PT("Build in committed increments",[["Start Git early","Before there is anything to lose.","blue"],["One change","One commit.","green"],["Working state","At every checkpoint.","purple"]],["Small steps make mistakes cheap."]),
PT("Before going public",[["Every page","Opened.","blue"],["Every link","Clicked.","green"],["Every claim","True.","purple"],["Nothing private","Left in.","amber"]],["Then ask someone else."]),
RC("Chapter 2.12",[["Real","Person and reason."],["Plan","First."],["Select","What the idea needs."],["Increments","Committed."],["Publish","Then review."],["Stranger","Eyes."]])
]});
//@@ ch13-app-brief-and-expo
CH({slug:"ch13-app-brief-and-expo",n:"13",part:"Book 3 · Mobile apps",sub:"Defining a small app and running it on a phone.",end:"Design around one person and one repeated habit.",scenes:[
PL("From idea to a running app",[["One person","One habit."],["Three screens","And their data.","blue"],["Starter project","Created.","purple"],["On your phone","Through a development app.","green"]],["Book 3 turns the running example into a mobile app."],{tc:"blue"}),
VS("Your computer runs it, your phone shows it","Computer",["Runs the development server","Holds the code"],"Phone",["Shows the app","Updates when you save"],["Change a line and see it on the phone."],"and","blue","green"),
VS("Pinned versions","Latest of everything",["May differ from the book","Steps stop matching"],"A pinned version",["Matches the instructions","Upgrade later, on purpose"],["Version-specific details may have changed since publication."],"→","amber","green"),
PT("Map the screens",[["Home","The list.","blue"],["Detail","One item.","green"],["Add","A form.","purple"],["Data","What each needs.","amber"]],["Decide the data before the screens."]),
RC("Chapters 3.1–3.2",[["One person","One habit."],["Screens","Three."],["Data","First."],["Phone","Shows it live."],["Versions","Pinned."],["Stop","Cleanly."]])
]});
//@@ ch14-project-tour-and-components
CH({slug:"ch14-project-tour-and-components",n:"14",part:"Book 3 · Mobile apps",sub:"Finding your way around the project, and building reusable pieces.",end:"Build the card once, and reuse it everywhere.",scenes:[
PT("Tour the project first",[["Screens","One file each.","blue"],["Components","Reusable pieces.","green"],["Assets","Images and fonts.","purple"],["Configuration","Name, icon, settings.","amber"]],["Know where things are before changing them."]),
VS("Web and native","Web",["Elements such as headings and paragraphs"],"Native",["View for a box","Text for words","Pressable for a tap"],["Different names for similar ideas."],"→","blue","purple"),
VS("One component, reused","Copied",["Three versions that drift apart"],"Shared",["One file","Change it once"],["A component is a piece of interface with a name."],"→","red","green"),
VD("Designed for a hand",[["Targets big enough for a fingertip",true,"Not a mouse pointer.","DO","green"],["Content clear of the notch and gesture bar",true,"Use the safe area.","DO","green"],["Tiny links close together",false,"Easy to mis-tap.","AVOID","red"]],["A phone is touched, not clicked."],{sw:160}),
RC("Chapters 3.3–3.4",[["Tour","Before changing."],["Imports","Follow one."],["Native","View, Text, Pressable."],["Reuse","One component."],["Fingers","Need room."],["Safe area","Respect it."]])
]});
//@@ ch15-navigation-and-state
CH({slug:"ch15-navigation-and-state",n:"15",part:"Book 3 · Mobile apps",sub:"Moving between screens and keeping data in step.",end:"Calculate what you can. Store only what you must.",scenes:[
VS("Tabs and stacks","Tabs",["A few top-level destinations","Always visible"],"Stack",["Drilling into detail","Back returns"],["Most apps combine the two."],"and","blue","purple"),
PT("Props, events and state",[["Props","Data handed down.","blue"],["Events","Messages sent up.","green"],["State","Data that changes.","purple"]],["Data flows down. Events flow up."]),
VS("Calculate the streak","Stored",["A separate number to keep in step","Goes wrong"],"Calculated",["Worked out from the history","Always right"],["Derived values should be derived."],"→","red","green"),
VS("One shared list","Per screen",["Each has its own copy","They disagree"],"Shared",["One source","Every screen reads it"],["All three screens need the same data."],"→","red","green"),
RC("Chapters 3.5–3.6",[["Routes","Real screens."],["Tabs","Destinations."],["Stack","Detail."],["Props","Down."],["Events","Up."],["Derive","Do not store."]])
]});
//@@ ch16-forms-and-crud
CH({slug:"ch16-forms-and-crud",n:"16",part:"Book 3 · Mobile apps",sub:"Adding, editing and deleting data safely.",end:"Slow deletion down on purpose.",scenes:[
PT("Create, read, update, delete",[["Create","Add an item.","blue"],["Read","Show the list.","green"],["Update","Edit one.","purple"],["Delete","Remove one.","amber"]],["Any real list of data needs all four."]),
VD("A trustworthy form",[["Rejects an empty name",true,"Before saving.","DO","green"],["Says what is wrong",true,"Beside the field.","DO","green"],["Keeps what was typed",true,"On error.","DO","green"],["Saves duplicates silently",false,"Check first.","AVOID","red"]],["Validation happens before the data changes."],{sw:160}),
VS("Edit reuses add","Two forms",["Twice the code","Twice the bugs"],"One form",["Used for both","Filled in when editing"],["Reuse the form."],"→","amber","green"),
PL("Slow down deletion",[["Tap delete","Nothing happens yet."],["Confirm","Name what will go.","amber"],["Delete","Then.","red"],["Undo","Where possible.","green"]],["Destructive actions deserve a pause."],{tc:"blue"}),
RC("Chapters 3.7–3.8",[["CRUD","Four operations."],["Validate","Before saving."],["Messages","Specific."],["Reuse","The form."],["Confirm","Deletion."],["Try","To break it."]])
]});
//@@ ch17-persistence-reminders-sharing
CH({slug:"ch17-persistence-reminders-sharing",n:"17",part:"Book 3 · Mobile apps",sub:"Keeping data, reminding the user, and sharing.",end:"Plan for more than the happy path.",scenes:[
VS("Make data survive","In memory",["Gone when the app closes"],"On the device",["Saved on change","Loaded on start"],["So far the data lived only while the app was open."],"→","red","green"),
PT("Three states to plan for",[["Empty","Nothing saved yet.","blue"],["Loading","Not ready yet.","green"],["Corrupted","Saved data cannot be read.","purple"]],["A real app handles all three."]),
VS("Ask for permission when it makes sense","On first launch",["No context","Often refused"],"At the moment of need",["The user has just asked for a reminder","The reason is obvious"],["Timing changes the answer."],"→","red","green"),
PT("Reminders and sharing",[["Local notifications","Generated on the phone.","blue"],["Kept in step","Change the item, change the reminder.","green"],["Share sheet","The phone’s own.","purple"],["Nothing to build","For each destination.","amber"]],["Use what the phone already provides."]),
RC("Chapters 3.9–3.10",[["Persist","On the device."],["States","Empty, loading, corrupted."],["Permission","At the right moment."],["Reminders","Local."],["In step","With the data."],["Share","Built in."]])
]});
//@@ ch18-test-and-prepare-release
CH({slug:"ch18-test-and-prepare-release",n:"18",part:"Book 3 · Mobile apps",sub:"A deliberate test pass, and what a store listing needs.",end:"Walk the edges.",scenes:[
PT("A deliberate test pass",[["Every screen","Every button.","blue"],["The edges","Empty, long, odd input.","green"],["No network","Airplane mode.","purple"],["Interruptions","Calls, and locking the phone.","amber"]],["The easy path rarely breaks. Bugs hide at the edges."]),
PT("Listen to it",[["Screen reader on","Does each control say what it is?","blue"],["Order","Does it read sensibly?","green"],["Labels","On icons.","purple"]],["Hear the app the way a screen reader user does."]),
PT("The app’s identity",[["Display name","What people see.","blue"],["Identifier","Permanent, chosen once.","green"],["Icon and splash","First impressions.","purple"],["Screenshots","Honest ones.","amber"]],["Some choices cannot be changed later."]),
VS("Does the privacy page match the app?","Mismatch",["Says “no data collected”","The app stores and sends data"],"Match",["Lists what is kept, and where","Updated with the app"],["Both stores require a privacy policy."],"→","red","green"),
RC("Chapters 3.11–3.12",[["Test","On purpose."],["Edges","And airplane mode."],["Logs","Read them."],["Screen reader","Try it."],["Identity","Permanent."],["Privacy","Must match."]])
]});
//@@ ch19-ship-and-app-project
CH({slug:"ch19-ship-and-app-project",n:"19",part:"Book 3 · Mobile apps",sub:"From your phone to anyone’s phone.",end:"Decide how far to ship it.",scenes:[
VS("Development app versus a signed build","Development app",["Runs your project from your computer","Only while you are developing"],"Signed build",["A real, installable app","Works without your computer"],["Until now the app ran inside a development tool."],"→","amber","green"),
PL("From build to store",[["Build","A signed app."],["Testers","A few real people.","blue"],["Fix","What they find.","amber"],["Submit","For review.","purple"],["Release","To the public.","green"]],["Both platforms let you share a build with testers first."],{tc:"blue"}),
PL("Book 3 project",[["Decide","A small app you would use."],["Brief","One person, one habit.","blue"],["Build","The same way as the example.","purple"],["Test","Each increment.","green"]],["The capstone project."],{tc:"blue"}),
ST("How far to ship",[["Public release","In the stores.","purple",0.4],["Testers","A few people.","blue",0.7],["Your own phone","Finished, and enough.","green",1.0]],["A finished app on your own phone is a real result."]),
RC("Chapters 3.13–3.14",[["Signed","A real build."],["Testers","Before the public."],["Submit","For review."],["Project","Your own app."],["Method","Same loop."],["Ship","As far as you choose."]])
]});
//@@ ch20-epilogue
CH({slug:"ch20-epilogue",n:"20",part:"Epilogue",sub:"What you built, and what to do next.",end:"Run the loop again on your own idea.",scenes:[
PT("What you built",[["A command-line tool","Book 1.","blue"],["A public website","Book 2.","green"],["A mobile app","Book 3.","purple"]],["You started with no setup at all."]),
{type:"cycle",title:"The loop, again",center:"Idea",items:[{t:"Brief",d:"What and for whom."},{t:"Plan",d:"Before changes."},{t:"Build",d:"In increments."},{t:"Check",d:"Against the criteria."}],cap:["Every chapter followed the same loop."]},
VS("What stays true","Changes",["Menus, default modes, exact controls"],"Stays",["Small steps","Reviewed changes","Checkpoints","Your judgement"],["The tool will keep changing."],"→","amber","green"),
VD("Sensible precautions",[["Keep your own copy of your work",true,"Not only inside one account.","DO","green"],["Try a second assistant",true,"When you keep hitting limits.","CONSIDER","blue"],["Learn more of the code",true,"If you want to go further.","CONSIDER","blue"]],["Your projects should outlive any one service."],{sw:210}),
RC("Epilogue",[["Built","Three things."],["Loop","Reuse it."],["Habits","Outlast menus."],["Copies","Keep your own."],["Second view","Can help."],["Next","Your own idea."]])
]});
