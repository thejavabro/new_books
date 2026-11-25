//@@ ch01-the-workflow
CH({slug:"ch01-the-workflow",n:"1",part:"Part I · Reproduce",sub:"A workflow for any bug.",end:"Reproduce, probe, examine, fix.",scenes:[
{type:"cycle",title:"The loop",center:"Bug",items:[{t:"Reproduce",d:"Make it happen on demand."},{t:"Probe",d:"Narrow down where it is."},{t:"Examine",d:"Understand the cause."},{t:"Fix",d:"Remove it, and keep it out."}],cap:["A workflow, with strategies under each step."]},
VS("A rare bug at scale is a daily bug","One user",["One in a million: never seen"],"A million users",["It happens every day"],["Rarity is relative to how often the code runs."],"→","green","red"),
PL("From symptom to root cause",[["Symptom","What the user saw."],["Proximate cause","What went wrong just before.","blue"],["The cause behind that","And the one behind that.","purple"],["Root cause","The first thing that was wrong.","green"]],["Follow the chain one link at a time."],{tc:"blue"}),
PT("Common root causes",[["Uninitialised or stale data","A value nobody set.","blue"],["Off-by-one","Boundaries.","green"],["Wrong assumptions","About input or order.","purple"],["Concurrency","Two things at once.","amber"],["Numeric surprises","Rounding and overflow.","red"]],["After enough bugs, patterns appear."]),
RC("Workflow",[["Loop","Four steps."],["Scale","Makes rare common."],["Chain","Symptom to root."],["Team","Write it down."],["Patterns","Recur."],["Expectations","Manage them."]])
]});
//@@ ch02-reproduce-yourself
CH({slug:"ch02-reproduce-yourself",n:"2",part:"Part I · Reproduce",sub:"Getting from a report to a bug you can trigger.",end:"Symptoms, not theories.",scenes:[
PT("A great bug report",[["What happened","The symptom.","blue"],["What was expected","The difference.","green"],["Steps","To make it happen.","purple"],["Environment","Version, platform, settings.","amber"],["Evidence","Logs, screenshots, dumps.","red"]],["The better the report, the shorter the hunt."]),
VS("Symptoms, not theories","A theory",["“The cache is broken”","Sends you the wrong way"],"A symptom",["“The old price is shown after saving”","Something to verify"],["Record what was seen. Guess later."],"→","red","green"),
PL("Reproduce it",[["Follow the steps","Exactly as reported."],["Match the setup","Version and data.","blue"],["See it yourself","Or find what differs.","purple"],["Vary","One step at a time.","green"]],["Find the step that matters by changing one thing at a time."],{tc:"blue"}),
VS("When it will not reproduce","Give up",["“Works on my machine”"],"Dig",["What is different about their setup?","Ask for more detail"],["A bug that cannot be reproduced is a bug whose conditions are not yet known."],"→","red","green"),
RC("Strategy 1",[["Report","Complete."],["Symptoms","Recorded."],["Emulate","The reporter."],["Vary","One thing."],["Environment","Matters."],["Unreproducible","Means unknown conditions."]])
]});
//@@ ch03-shorten-feedback-loop
CH({slug:"ch03-shorten-feedback-loop",n:"3",part:"Part I · Reproduce",sub:"Making each attempt quicker.",end:"Debugging speed is the speed of one attempt.",scenes:[
PL("Four slices of every attempt",[["Build","Compile and package."],["Deploy","Get it where it runs.","blue"],["Start","Launch and load.","purple"],["Reach","Get to the point of the bug.","amber"]],["Each is time you spend not learning anything."],{tc:"blue"}),
PT("Faster builds and deploys",[["Incremental builds","Only what changed.","blue"],["Smaller changes","Less to rebuild.","green"],["Deploy less","Only the part that changed.","purple"],["Run locally","When you can.","amber"]],["Shave the slices you repeat most."]),
VS("Hot reloading","Without",["Build, deploy, start, reach, every time"],"With",["Change it while it runs","Three slices skipped"],["Loading new code or data into a running program."],"→","red","green"),
PT("Cut the waiting",[["Skip intros and menus","Go straight in.","blue"],["Smaller test data","Loads quicker.","green"],["Start-up options","Jump to the right state.","purple"],["Cache","What does not change.","amber"]],["Everything between launch and the bug is overhead."]),
RC("Strategy 2",[["Loop","Shorten it."],["Slices","Four."],["Incremental","Builds."],["Hot reload","Skips three."],["Shortcuts","To the bug."],["Minutes","Become seconds."]])
]});
//@@ ch04-automate-reproduction
CH({slug:"ch04-automate-reproduction",n:"4",part:"Part I · Reproduce",sub:"Letting the machine trigger the bug.",end:"If you will do it twenty times, automate it.",scenes:[
VS("Is automation worth it?","By hand",["Fine for a bug seen every time"],"Automated",["Worth it for rare bugs","Or long sequences of steps"],["Weigh the effort against the number of attempts ahead."],"or","blue","green"),
PT("Ways to automate",[["A script","That drives the steps.","blue"],["Record and replay","Capture input, play it back.","green"],["Call the function directly","Skip everything around it.","purple"],["Saved state","Start just before the bug.","amber"]],["From simple to thorough."]),
VS("Leave it running overnight","Silent",["You find out in the morning that it stopped at once"],"Telling",["It logs progress","Stops and saves evidence when the bug appears"],["Make it tell you when it has found something."],"→","red","green"),
VS("How recordings break","Recorded input",["Assumes the same timing and state"],"A changed program",["The replay drifts"],["Recordings are fragile across code changes. Saved state survives better."],"→","amber","blue"),
RC("Strategy 3",[["Automate","When repeated."],["Script","The steps."],["Replay","Input."],["Direct call","To the suspect."],["Saved state","Near the bug."],["Overnight","With reporting."]])
]});
//@@ ch05-shortcuts-and-search
CH({slug:"ch05-shortcuts-and-search",n:"5",part:"Part II · Probe",sub:"Quick guesses, and looking it up.",end:"Try the cheap things first.",scenes:[
VS("Shortcuts","A jump",["Straight to the likely cause"],"A rule-out",["Eliminate a whole area quickly"],["Probing starts with the cheapest tests."],"or","green","blue"),
PT("Where educated guesses come from",[["Experience","Of similar symptoms.","blue"],["Recent changes","What is new?","green"],["Known weak spots","Code with a history.","purple"],["The foundations","APIs your domain shares.","amber"]],["Some symptoms map straight to a cause."]),
VS("Suspicious and irrelevant systems","Suspicious",["Poorly understood","Recently changed"],"Irrelevant",["Ruled out, with a reason"],["Beware surprising dependencies: a system you ruled out may still be involved."],"and","amber","muted"),
PT("Search the internet, precisely",[["The exact error text","In quotes.","blue"],["Version numbers","Of what you use.","green"],["Issue trackers","Of the libraries.","purple"],["Specialist forums","For the domain.","amber"]],["Someone has often met the same bug."]),
RC("Strategies 4–5",[["Cheap","First."],["Guess","From experience."],["Recent","Changes."],["Rule out","Carefully."],["Search","The exact text."],["Trackers","Beyond search engines."]])
]});
//@@ ch06-history-and-debugger
CH({slug:"ch06-history-and-debugger",n:"6",part:"Part II · Probe",sub:"Using version control and the debugger to narrow the search.",end:"If it ever worked, the answer is in the history.",scenes:[
VS("Did it ever work?","No",["Search the code"],"Yes",["Search the history","Something changed"],["A regression has a commit behind it."],"or","blue","green"),
PL("Binary search through the commits",[["Mark","A good version and a bad one."],["Test","The middle.","blue"],["Halve","The range.","purple"],["Repeat","To a single commit.","green"]],["A thousand commits need about ten tests."],{tc:"blue"}),
VS("Always run under the debugger","Attach when needed",["The bug has already happened"],"Always attached",["The program stops at the moment it goes wrong"],["Make launching through the debugger the default."],"→","amber","green"),
PT("First breakpoints",[["At the symptom","Where it shows.","blue"],["At the boundary","Between two systems.","green"],["On exceptions","When they are thrown.","purple"],["Then","Step back along the chain.","amber"]],["Most bugs are not where the symptom appears."]),
RC("Strategies 6–7",[["History","Holds regressions."],["Bisect","To one commit."],["Commit","Find the offending part."],["Debugger","Always on."],["Breakpoints","Start at the symptom."],["Fallback","When no debugger fits."]])
]});
//@@ ch07-instrument-and-determinism
CH({slug:"ch07-instrument-and-determinism",n:"7",part:"Part II · Probe",sub:"Making the program report on itself, and behave the same each time.",end:"A random bug has a non-random cause.",scenes:[
VS("Assertions","Without",["A wrong value travels far before anything breaks"],"With",["The program stops where the assumption fails"],["Fail at the cause, not at the symptom."],"→","red","green"),
VS("Assert, or handle the error?","Assert",["For things that must never happen","A bug if they do"],"Handle",["For things that can happen","Bad input, missing files"],["Do not assert on what the outside world controls."],"or","blue","amber"),
PT("Removing randomness",[["Fix the seed","For random numbers.","blue"],["Fix the clock","Use a fixed time step.","green"],["Fix the order","Of threads, where possible.","purple"],["Fix the input","Record it.","amber"]],["Computers are deterministic. Find what varies."]),
VS("Instrumentation can hide the bug","Added logging",["Changes timing","The bug disappears"],"What it tells you",["The bug depends on timing"],["A bug that vanishes when watched is itself a clue."],"→","amber","blue"),
RC("Strategies 8–9",[["Assert","Assumptions."],["Handle","Expected errors."],["Patterns","In memory."],["Determinism","Makes bugs repeat."],["Seed and clock","Fixed."],["Heisenbugs","Point to timing."]])
]});
//@@ ch08-colleagues-search-dumps
CH({slug:"ch08-colleagues-search-dumps",n:"8",part:"Part II · Probe",sub:"Other people, text search and evidence from crashes.",end:"You are not the only one who knows things.",scenes:[
VS("When to ask a colleague","Too early",["You have not looked"],"Too late",["Hours lost on what they know"],["Ask when you have a clear question, and before the cost grows."],"VS","amber","red"),
PT("How much to tell them",[["The symptom","Briefly.","blue"],["What you tried","And ruled out.","green"],["What you suspect","And why.","purple"],["The specific question","You need answered.","amber"]],["Too little, and they cannot help. Too much, and they stop reading."]),
VS("Search everything","Source code only",["Misses data, configuration, scripts"],"All files",["The string may live outside the code"],["The text you see may be assembled from pieces. Search for the parts."],"→","amber","green"),
PL("Crash dumps",[["Capture","Memory and stacks at the crash."],["Collect","From users, automatically.","blue"],["Group","By where they crashed.","purple"],["Prioritise","By frequency.","green"]],["Debug a crash after the fact, and count how often each happens."],{tc:"blue"}),
RC("Strategies 10–12",[["Ask","At the right time."],["Prepare","The question."],["Outside","Go specific first."],["Search","All files."],["Dumps","Post-mortem debugging."],["Count","To prioritise."]])
]});
//@@ ch09-step-through-code
CH({slug:"ch09-step-through-code",n:"9",part:"Part III · Examine",sub:"Watching the program run, line by line.",end:"See what the program does, not what you think it does.",scenes:[
VS("Debug and release builds","Debug build",["Unoptimised","Easy to step through"],"Release build",["Optimised","Variables vanish, lines reorder"],["Some bugs appear only in one. Know which you are running."],"VS","blue","amber"),
PT("Stepping",[["Step over","Run the call, stop after it.","blue"],["Step into","Go inside the call.","green"],["Step out","Finish this function.","purple"],["Run to cursor","Skip ahead.","amber"]],["Three moves cover most of it."]),
PT("Reading the state",[["Call stack","How you got here.","blue"],["Locals","What this function holds.","green"],["Watch","Expressions you care about.","purple"],["Data breakpoint","Stop when this memory changes.","amber"]],["Who wrote to this memory? A data breakpoint answers."]),
VS("The right program","Assumed",["The debugger shows the code you edited"],"Possible",["An old build","The wrong process","Stale symbols"],["Make sure you are debugging what is actually running."],"→","green","red"),
RC("Strategy 13",[["Step","Over, into, out."],["Stack","Tells the story."],["Data","Drives flow."],["Breakpoints","On data too."],["Assembly","When needed."],["Check","It is the right build."]])
]});
//@@ ch10-read-code-follow-data
CH({slug:"ch10-read-code-follow-data",n:"10",part:"Part III · Examine",sub:"Reading carefully, and tracing a bad value to its source.",end:"Follow the data to where it turns bad.",scenes:[
VS("Read the code","Skimming",["You see what you expect"],"Executing it in your head",["Line by line","With real values"],["Become the machine."],"→","red","green"),
PT("Your language’s trapdoors",[["Implicit conversions","Types change silently.","blue"],["Hidden calls","Constructors, operators, properties.","green"],["Undefined behaviour","Anything may happen.","purple"],["Evaluation order","Not what you assumed.","amber"]],["Features that run code you did not write on that line."]),
PL("Follow the data",[["Start","At the bad value."],["Where was it set?","Go back one step.","blue"],["Was it right there?","If so, look later. If not, earlier.","purple"],["The first wrong value","Is next to the cause.","green"]],["Code is only half the program."],{tc:"blue"}),
PT("Suspicious values",[["Zero, or minus one","Defaults and errors.","blue"],["Very large numbers","Overflow, or uninitialised.","green"],["Repeating patterns","Fill values.","purple"],["Nearly right","Rounding, or an off-by-one.","amber"]],["Compare a good sample with a bad one."]),
RC("Strategies 14–15",[["Read","Slowly."],["Readable","Code hides less."],["Trapdoors","Know them."],["Data","Trace it back."],["Suspicious","Values."],["Compare","Good and bad."]])
]});
//@@ ch11-question-experiment-log
CH({slug:"ch11-question-experiment-log",n:"11",part:"Part III · Examine",sub:"When the cause is hiding.",end:"Question everything, and write down what you find.",scenes:[
ST("Question everything, layer by layer",[["Hardware","Rare, and possible.","red",0.4],["Operating system and drivers","Occasionally.","amber",0.55],["Compiler and libraries","Sometimes.","purple",0.7],["Your team’s code","Often.","blue",0.85],["Your own code","Most often.","green",1.0]],["Start with the likeliest layer, and do not exclude the others for ever."]),
PL("Experiment",[["Hypothesis","What might be wrong."],["Prediction","What would follow.","blue"],["Test","The cheapest one that could disprove it.","purple"],["Result","Keep or discard the idea.","green"]],["Speed matters more than elegance."],{tc:"blue"}),
VS("Keep every experiment revertible","Left in",["Hacks pile up","Nobody knows what still matters"],"Revertible",["One change at a time","Undone when it has answered its question"],["Experimental code is not a fix."],"→","red","green"),
PT("Keep a debugging log",[["What you tried","And when.","blue"],["What happened","Exactly.","green"],["What it ruled out","And what it suggests.","purple"],["Next","Idea to test.","amber"]],["Writing stops you from testing the same thing twice."]),
RC("Strategies 16–18",[["Question","Every layer."],["Hypothesis","Then test."],["Cheap","Tests first."],["Revert","Experiments."],["Log","Everything."],["Notes","Outlive memory."]])
]});
//@@ ch12-tools-and-minimal-repros
CH({slug:"ch12-tools-and-minimal-repros",n:"12",part:"Part III · Examine",sub:"Building what helps you see, and shrinking the problem.",end:"Shrink the bug to the smallest program that shows it.",scenes:[
VS("Build tools that know your program","Off the shelf",["Shows bytes and addresses"],"Your own",["Shows your data in your terms"],["A viewer for your own structures finds bugs general tools cannot."],"→","amber","green"),
PT("Integrated or external",[["Integrated","Inside the program. Quick to build.","blue"],["External","A separate tool. Survives crashes.","green"],["Hybrid","The program serves data, a tool shows it.","purple"]],["Choose by how much the tool must survive."]),
PL("A minimal repro",[["Start","From the failing program."],["Remove","A part.","blue"],["Still fails?","Keep it removed.","purple"],["Stops failing?","Put it back.","amber"],["Repeat","Until nothing more can go.","green"]],["Or start from scratch and add until it fails."],{tc:"blue"}),
VS("Why bother","A large program",["Many suspects"],"A tiny one",["Few places for the bug to hide","Easy to share"],["A minimal repro often reveals the cause on the way."],"→","red","green"),
RC("Strategies 19–20",[["Tools","Of your own."],["Domain","Views."],["Integrated","Or external."],["Shrink","The repro."],["Share","It."],["Keep","It as a test."]])
]});
//@@ ch13-printf-tools-talk
CH({slug:"ch13-printf-tools-talk",n:"13",part:"Part III · Examine",sub:"Printing, specialist tools and conversation.",end:"Explaining the bug often finds it.",scenes:[
VS("printf debugging","Crude",["Needs a rebuild","Clutters the code"],"Universal",["Works anywhere","Shows history, not one moment"],["Printing is the one technique every platform supports."],"and","amber","green"),
PT("Messages you can use",[["Say where","File or function.","blue"],["Say what","Values, with names.","green"],["Be searchable","A unique tag.","purple"],["Limit the rate","Not once per frame.","amber"]],["Each rebuild costs time, so make every message count."]),
PT("The specialist toolbox",[["Memory checkers","Leaks and overruns.","blue"],["Profilers","Where time goes.","green"],["Network analysers","What was really sent.","purple"],["Diff tools","What changed between two things.","amber"]],["A diff tool sees what your eyes skip."]),
VS("Talk it through","In your head",["Gaps go unnoticed"],"Out loud",["To a colleague, or a rubber duck","The gap becomes obvious"],["Explaining forces you to state each assumption."],"→","amber","green"),
RC("Strategies 21–23",[["Print","Works everywhere."],["Messages","Useful ones."],["Rate","Limited."],["Tools","For each kind of bug."],["Diff","Sees differences."],["Duck","Listens well."]])
]});
//@@ ch14-just-fix-it
CH({slug:"ch14-just-fix-it",n:"14",part:"Part IV · Fix",sub:"Making the fix, and making it last.",end:"Fix the cause, prove it, and tell people.",scenes:[
PT("A great bug fix",[["Addresses the root cause","Not the symptom.","blue"],["Minimal","Changes only what is needed.","green"],["Revertible","One clean change.","purple"],["Proven","The repro no longer fails.","amber"],["Explained","In the commit message.","red"]],["What separates a fix from a patch."]),
VS("Change the right sources","Fix the output",["A generated file","The fix is overwritten"],"Fix the source",["The generator or the original data"],["Fix it where it is made."],"→","red","green"),
PL("Stop it from coming back",[["Add a test","That fails without the fix."],["Add an assertion","At the broken assumption.","blue"],["Find how it got in","Process, not blame.","purple"],["Share","What you learned.","green"]],["You paid for this knowledge. Spread it."],{tc:"blue"}),
VS("Search for related problems","One bug fixed",["The same mistake elsewhere remains"],"A search",["For the pattern","In similar code"],["A bug rarely exists alone."],"→","amber","green"),
RC("Strategies 24–26",[["Root cause","Fixed."],["Minimal","And revertible."],["Proven","By the repro."],["Test","Guards it."],["Share","The lesson."],["Search","For siblings."]])
]});
//@@ ch15-fix-early-quick-fix
CH({slug:"ch15-fix-early-quick-fix",n:"15",part:"Part IV · Fix",sub:"Timing, priorities and temporary measures.",end:"A bug gets more expensive every week.",scenes:[
{type:'curve',title:'A bug gets more expensive with time',xl:'time since the bug was introduced →',yl:'cost to fix →',legend:false,series:[{c:'red',pts:line(40,x=>.08+.8*Math.pow(x,2.2))}],marks:[{x:.1,y:.09,t:'Fresh: cheap',c:'green',at:.2,dx:20,dy:-110,w:260},{x:.9,y:.72,t:'Old: costly',c:'red',at:.8,dx:-300,dy:-40,w:260}],cap:['Context fades, people move on, and other code comes to depend on the bug.','Fix bugs as soon as you reasonably can. (Illustrative.)']},
PT("Why it grows",[["Context is lost","You forget what you were doing.","blue"],["People leave","Projects and companies.","green"],["Code builds on it","Other things depend on the bug.","purple"],["Data is corrupted","And spreads.","amber"]],["Each makes the eventual fix harder."]),
VS("Assign reasonable priorities","Everything urgent",["Nothing is"],"Ranked",["By impact, frequency and cost to fix"],["You cannot fix everything. Choose on purpose."],"→","red","green"),
VS("A quick fix","A workaround",["Masks the symptom","Ships today"],"A real fix",["Removes the cause","Scheduled, and tracked"],["When the clock wins, deploy the workaround and record the debt."],"and","amber","green"),
RC("Strategies 27–28",[["Early","Is cheaper."],["Context","Fades."],["Dependents","Accumulate."],["Prioritise","Deliberately."],["Workaround","When needed."],["Debt","Tracked."]])
]});
//@@ ch16-start-over-creative
CH({slug:"ch16-start-over-creative",n:"16",part:"Part IV · Fix",sub:"When ordinary fixing is not enough.",end:"Sometimes the answer is to rewrite, or to change the question.",scenes:[
VS("Start over","Keep patching",["A part so tangled each fix breaks something else"],"Rewrite it",["Only the offending part","With the old one beside it for comparison"],["For a particularly mean bug."],"→","red","green"),
PL("Run both, compare",[["Old version","Kept."],["New version","Written.","blue"],["Same input","To both.","purple"],["Differences","Point to the bug, or to a missed requirement.","green"]],["Let the differences talk."],{tc:"blue"}),
VS("When no fix fits in time","Insist on the fix",["Miss the date"],"Get creative",["Change the feature","Disable it","Avoid the trigger"],["Disable, do not delete. With consent, and written down."],"→","red","amber"),
PT("What to carry forward",[["Prevention","Beats fixing.","blue"],["The loop","Reproduce, probe, examine, fix.","green"],["Outside code","It works there too.","purple"],["Notes","What you learned.","amber"]],["The same loop applies to any problem you can observe."]),
RC("Strategies 29–30",[["Rewrite","The part."],["Compare","Old and new."],["Creative","When time is short."],["Disable","Not delete."],["Debt","Recorded."],["Prevent","The next one."]])
]});
