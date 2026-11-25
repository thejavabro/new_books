//@@ appendix-ideals
CH({slug:"appendix-ideals",n:"I",part:"The Five Ideals",sub:"The ideals, stated directly.",end:"Ask how your own team scores.",scenes:[
PT("The Five Ideals",[["First","Locality and Simplicity.","blue"],["Second","Focus, Flow and Joy.","green"],["Third","Improvement of Daily Work.","purple"],["Fourth","Psychological Safety.","amber"],["Fifth","Customer Focus.","red"]],["The book’s framework."]),
VD("How does your team score?",[["A change needs only your team",true,"Locality.","FIRST","blue"],["You can work for hours without interruption",true,"Flow.","SECOND","purple"],["Time is reserved to fix what slows you",true,"Daily work.","THIRD","green"],["People report problems without fear",true,"Safety.","FOURTH","amber"]],["And the fifth: is this work something a customer would pay for?"],{sw:170}),
VS("The story in a line","From",["An engineer exiled to a failing project"],"To",["A company that learns faster than its competitors"],["A developer’s view of the same transformation."],"→","red","green"),
PT("Read alongside",[["The Phoenix Project","The same company, seen from Operations.","blue"],["The Three Ways","Flow, feedback, learning.","green"],["The Five Ideals","The developer’s experience.","purple"]],["Two novels, one story."]),
RC("Five Ideals",[["Locality","And simplicity."],["Flow","And joy."],["Daily work","Improved."],["Safety","Psychological."],["Customer","Focus."],["Score","Your team."]])
]});
//@@ ch01-exile
CH({slug:"ch01-exile",n:"1",part:"A novel about developers",sub:"A senior engineer is blamed for an outage and sent to a troubled project.",end:"“Who caused it?” is the wrong question.",scenes:[
VS("The wrong question","Who caused it?",["Find someone to blame","People hide problems"],"What allowed it?",["Find the conditions","Fix the system"],["The story opens with a scapegoat."],"→","red","green"),
PL("The scavenger hunt",[["Day one","Try to build the project."],["Missing","Credentials, licences, dependencies.","amber"],["Tickets","For each one.","red"],["A week later","Still no build.","red"]],["If a new engineer cannot build the code, nobody can work quickly."],{tc:"blue"}),
VS("Why the tickets take so long","The work",["Minutes"],"The wait",["Days in someone’s queue","Then another queue"],["A ticket is slow because of the handoffs."],"→","green","red"),
VS("Hours or outcomes","Measured",["Hours logged on time cards"],"What matters",["Whether customers got something of value"],["Measuring effort hides whether anything was achieved."],"→","red","green"),
RC("To Chapter 2",[["Blame","Hides problems."],["Build","Should take minutes."],["Tickets","Mean queues."],["Hours","Are not outcomes."],["Safety","A precondition of work."],["Clock","Ticking."]])
]});
//@@ ch02-the-build
CH({slug:"ch02-the-build",n:"3–4",part:"A novel about developers",sub:"The fight to get one working build.",end:"Run your program all the time.",scenes:[
VS("Two kinds of coding day","A good day",["Change, build, test, see the result in minutes","In flow"],"A bad day",["Waiting on builds, tickets and other teams","Nothing finished"],["Fast feedback is what makes the work enjoyable."],"VS","green","red"),
VS("Run your program all the time","Rarely",["Long gaps between running the code","Bugs pile up unseen"],"Constantly",["Every small change is run","Mistakes are caught at once"],["Feedback delayed is feedback lost."],"→","red","green"),
PL("Anatomy of a ticket loop",[["Ask","For an environment."],["Wait","Days.","amber"],["Receive","Something incomplete.","red"],["Ask again","And wait again.","red"]],["Getting what you need to work should not need a ticket."],{tc:"blue"}),
VS("Why the big bang fails","One huge release",["Never integrated before","Never rehearsed"],"Small, frequent ones",["Integrated daily","Practised constantly"],["The launch had never worked once before launch night."],"→","red","green"),
RC("Chapters 3–4",[["Feedback","Fast."],["Run","Constantly."],["Tickets","Loop."],["Environments","Self-service."],["Performance","Unknown until launch."],["Big bang","Rarely works."]])
]});
//@@ ch03-launch
CH({slug:"ch03-launch",n:"5–6",part:"A novel about developers",sub:"A group of like-minded engineers, and a painful launch.",end:"The company did it to itself.",scenes:[
PT("The rebellion",[["Engineers from several teams","Who want it to be better.","blue"],["Meeting after hours","Outside the org chart.","green"],["Trading help","Across silos.","purple"],["A shared aim","Make developers productive.","amber"]],["Change starts with people who decide not to wait."]),
VS("The Square","How a decision travels",["Up two levels","Across two departments","Down two levels"],"What that costs",["Weeks","And the context is lost"],["Simple requests routed through the hierarchy."],"→","amber","red"),
VS("Two hundred people, five minutes each","The release",["Hundreds of people on a call"],"The work",["Each waits hours to do minutes of work"],["Coordination, not effort, is what the release consumes."],"→","blue","red"),
VS("Protect the constraint","The expert",["Pulled into every problem"],"Protected",["Others handle what they can","The expert’s time is reserved"],["The same lesson as the companion novel."],"→","red","green"),
RC("Chapters 5–6",[["Rebellion","Of the willing."],["Square","Decisions travel far."],["Launch","Hundreds waiting."],["Coordination","Is the cost."],["Constraint","Protected."],["Self-inflicted","Damage."]])
]});
//@@ ch04-five-ideals
CH({slug:"ch04-five-ideals",n:"7",part:"A novel about developers",sub:"A mentor names five ideals.",end:"Five ideals for technology work.",scenes:[
PT("The Five Ideals",[["Locality and Simplicity","Change one thing in one place.","blue"],["Focus, Flow and Joy","Work without interruption.","green"],["Improvement of Daily Work","Pay down what slows you.","purple"],["Psychological Safety","Safe to speak about problems.","amber"],["Customer Focus","Is this what customers pay for?","red"]],["Named at once, and explained over the rest of the book."]),
VS("Locality","Tangled",["A small change touches many teams and systems"],"Local",["A team changes its own part, alone"],["Simplicity lets teams work independently."],"→","red","green"),
VS("Complexity debt","Taken on",["To ship faster today"],"Comes due",["Every change is slower","Simple things become impossible"],["Technical debt is what you feel the next time you try to change something."],"→","amber","red"),
VS("Testing belongs inside development","Afterwards",["A separate phase, by a separate team","Feedback weeks later"],"Inside",["Automated","Run with every change"],["Quality cannot be inspected in at the end."],"→","red","green"),
RC("Chapter 7",[["Five","Ideals."],["Locality","Change in one place."],["Flow","And joy."],["Daily work","Improved."],["Safety","To speak."],["Customer","Focus."]])
]});
//@@ ch05-data-hub
CH({slug:"ch05-data-hub",n:"8–9",part:"A novel about developers",sub:"A small team begins to work differently.",end:"Fix the thing that slows everyone.",scenes:[
VS("Why features got slower","Years ago",["A change took days"],"Now",["The same change takes months"],["More people, more dependencies, and slower every year."],"→","green","red"),
VS("Pure functions","Shared mutable state",["Two things change it at once","A race condition"],"Pure functions",["Same input, same output","Nothing shared"],["Functional ideas make concurrent code safe."],"→","red","green"),
VS("The Third Ideal and the Andon cord","Push on",["A problem is worked around","It returns"],"Pull the cord",["Stop","Fix it at the source","Everyone learns"],["Improvement of daily work is valued above daily work itself."],"→","red","green"),
VS("The Fourth Ideal","Fear",["Bad news is hidden","Accidents repeat"],"Safety",["Problems are reported","They get fixed"],["The book points to a company that made safety its first priority, and prospered."],"→","red","green"),
RC("Chapters 8–9",[["Slower","Every year."],["Dependencies","Are the cause."],["Pure functions","Tame concurrency."],["Andon cord","Stop and fix."],["Safety","Comes first."],["Testing day","Everyone waits."]])
]});
//@@ ch06-merge-and-deploy
CH({slug:"ch06-merge-and-deploy",n:"10–11",part:"A novel about developers",sub:"Integration pain, and a team that decides to run its own service.",end:"Merge often, or suffer.",scenes:[
VS("Merging","Rarely",["Fifty writers, one script, edited apart for months"],"Often",["Small changes, combined daily"],["The longer the wait, the worse the merge."],"→","red","green"),
VS("The conflict that compiles","Textual conflict",["The tool reports it"],"Semantic conflict",["It compiles","It is wrong"],["Only tests catch a merge that looks fine."],"→","amber","red"),
VS("“They do not trust us”","Operations’ view",["Developers break production"],"The fix",["Earn it: tests, monitoring, on-call"],["Trust between teams is built by sharing the consequences."],"→","red","green"),
VS("Plan B: run it ourselves","Waiting",["For a central team’s queue"],"Owning it",["Build, deploy and operate the service"],["You build it, you run it."],"→","amber","green"),
RC("Chapters 10–11",[["Merge","Daily."],["Semantic","Conflicts hide."],["Trust","Is earned."],["Backlog","Needs a why."],["Decouple","The service."],["Own","What you build."]])
]});
//@@ ch07-value-stream
CH({slug:"ch07-value-stream",n:"12–13",part:"A novel about developers",sub:"Finding where the time goes.",end:"Fix one bottleneck, and the next appears.",scenes:[
PL("Following the value stream",[["Idea","Approved."],["Developed","Quickly.","blue"],["Waiting","For test, review, release.","amber"],["In production","Much later.","green"]],["Pull the dates from the tickets, and see how little of the time is work."],{tc:"blue"}),
VS("The next bottleneck","Fixed",["Development is fast now"],"Revealed",["Testing, then deployment, then approval"],["Improving one stage moves the queue downstream."],"→","green","amber"),
VS("The architecture board","Every change reviewed",["By a committee","At the next meeting"],"Guardrails",["Standards agreed in advance","Teams proceed within them"],["Approval queues are bottlenecks too."],"→","red","green"),
VS("The blameless review","Blame",["Who made the mistake?"],"Learning",["What did we expect?","What happened?","What will we change?"],["The first real deployment goes wrong, and becomes a lesson."],"→","red","green"),
RC("Chapters 12–13",[["Stream","Follow it."],["Waiting","Dominates."],["Bottleneck","Moves."],["Guardrails","Over approvals."],["Rehearse","Deployments."],["Blameless","Reviews."]])
]});
//@@ ch08-unicorn
CH({slug:"ch08-unicorn",n:"14–15",part:"A novel about developers",sub:"A cross-team effort to win the biggest sales day.",end:"A fast layer in front of slow systems.",scenes:[
VS("A fast layer in front of slow systems","Direct",["Every request hits the old systems","They cannot cope"],"A fast layer",["Data copied to a store built for speed","The old systems are shielded"],["Do not rewrite the old system. Put something quick in front."],"→","red","green"),
VS("The one percent rehearsal","All customers at once",["An untested path at full load"],"One percent first",["Find the failures while they are small"],["A trial run reveals the thundering herd before the real day."],"→","red","green"),
PT("Black Friday",[["Dashboards","Everyone watching the same numbers.","blue"],["Fast decisions","By the people closest.","green"],["Features switched off","To protect the core.","purple"],["The site","Stays up.","amber"]],["Many small preparations, used on one day."]),
VS("What it returned","Before",["IT as a cost"],"After",["A promotion that visibly moved revenue"],["Technology shown as a source of income."],"→","amber","green"),
RC("Chapters 14–15",[["Layer","Fast, in front."],["Rehearse","At one percent."],["Herd","Thundering."],["Switches","Protect the core."],["Revenue","Follows."],["Teams","Named and proud."]])
]});
//@@ ch09-horizons
CH({slug:"ch09-horizons",n:"16–17",part:"A novel about developers",sub:"How a company should fund the present and the future.",end:"Core gets investment. Context gets managed.",scenes:[
ST("Three Horizons",[["Horizon 3","New bets. Small, fast, uncertain.","purple",0.5],["Horizon 2","Emerging businesses, growing.","blue",0.75],["Horizon 1","Today’s cash-generating business.","green",1.0]],["Each needs a different way of managing."]),
VS("Why Horizon 3 must be fast","Managed like Horizon 1",["Annual plans","Proof of returns up front"],"Managed as a bet",["Many small experiments","Quick decisions"],["What matters is how fast you learn."],"→","red","green"),
VS("Core or Context?","Core",["What customers pay you for","Creates advantage"],"Context",["Everything else","Must be done, earns nothing extra"],["Move people and money from context to core."],"VS","green","muted"),
PL("Fund bets, decide quarterly",[["Fund","Several small teams."],["Run","For a quarter.","blue"],["Review","The evidence.","purple"],["Decide","Kill, continue or double down.","green"]],["A portfolio, not a single plan."],{tc:"blue"}),
RC("Chapters 16–17",[["Horizons","Three."],["Horizon 3","Fast learning."],["Core","Invest."],["Context","Manage, or shed."],["Bets","Small."],["Quarterly","Decisions."]])
]});
//@@ ch10-innovation
CH({slug:"ch10-innovation",n:"18–19",part:"A novel about developers",sub:"Ideas from the front line, and where the story ends.",end:"The people closest to the work have the best ideas.",scenes:[
PL("Pitch, bet, review",[["Pitch day","Anyone may propose."],["Pick","A few bets.","blue"],["Ninety days","To show evidence.","purple"],["Decide","Kill, continue, double down.","green"]],["Innovation as a routine."],{tc:"blue"}),
VS("When the rulebook becomes a weapon","Rules used to help",["Protect customers and the company"],"Rules used to block",["Stop whatever threatens someone’s position"],["The same process can serve either purpose."],"VS","green","red"),
PT("Rituals that show the culture",[["Teaching Thursday","Everyone teaches and learns.","blue"],["Retiring old systems","Celebrated.","green"],["Demos","Of real work.","purple"],["Open reviews","Of failures.","amber"]],["What a learning organisation does every week."]),
VS("One year later","At the start",["Tickets, blame, waiting"],"At the end",["Teams that build, deploy and learn on their own"],["The Five Ideals, in practice."],"→","red","green"),
RC("Chapters 18–19",[["Ideas","From the front line."],["Bets","Reviewed in ninety days."],["Rules","Can be misused."],["Rituals","Teach."],["Simplify","Twenty-three calls into one."],["Ideals","Lived."]])
]});
