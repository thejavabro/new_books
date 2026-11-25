//@@ appendix-top-ten
CH({slug:"appendix-top-ten",n:"A",part:"Appendix",sub:"What the book left out, on purpose.",end:"Enough to build something. More to learn.",scenes:[
PT("Left out on purpose",[["Classes","You built a webapp without one.","blue"],["Exceptions","Catch errors instead of coding around them.","green"],["Testing","Automated checks.","purple"],["Concurrency","Doing several things at once.","amber"]],["A beginner’s book has to stop somewhere."]),
VS("Catch errors","Coding around",["Check everything before trying"],"try and except",["Try it","Handle the failure if it comes"],["Easier to ask forgiveness than permission."],"→","amber","green"),
PT("Newer syntax",[["The walrus operator","Assign inside an expression.","blue"],["match","Structural pattern matching.","green"],["Type hints","Say what a function expects.","purple"]],["Worth knowing once the basics are solid."]),
PT("Tools",[["Virtual environments","Separate packages per project.","blue"],["Linters and formatters","Consistent code.","green"],["An editor or IDE","Beyond the notebook.","purple"]],["What a working programmer adds next."]),
RC("Top ten",[["Classes","Later."],["Exceptions","try and except."],["Tests","Automate."],["Concurrency","When needed."],["Type hints","Help readers."],["Environments","Per project."]])
]});
//@@ ch01-why-python
CH({slug:"ch01-why-python",n:"1",part:"Part I · The basics",sub:"What makes Python different, and how the book runs code.",end:"Similar to other languages, and pleasantly different.",scenes:[
PT("Why people pick Python",[["Readable","Code that looks like what it does.","blue"],["Batteries included","A large standard library.","green"],["A huge ecosystem","Packages for most jobs.","purple"],["Interactive","Try things as you go.","amber"]],["Python does the usual things, with less ceremony."]),
PT("The Big 4 data structures",[["List","Ordered, changeable.","blue"],["Tuple","Ordered, fixed.","green"],["Dictionary","Keys to values.","purple"],["Set","Unique items, no order.","amber"]],["Much of Python’s appeal is built in."]),
VS("A set models a deck better","A list of cards",["Duplicates possible","Removing means searching"],"A set of cards",["Each card once","Draw, and it is gone"],["Pick the structure that matches the thing."],"→","amber","green"),
VS("Run code one cell at a time","A script",["Edit, save, run the whole thing"],"A notebook",["Run a cell","See the result","Change it and run again"],["The book works mostly in notebooks."],"→","blue","green"),
RC("1",[["Python","Readable."],["Notebooks","Cell by cell."],["Big 4","List, tuple, dict, set."],["Objects","Everything is one."],["dir and help","Ask what it can do."],["Library","Standard, then PyPI."]])
]});
//@@ ch02-make-a-splash
CH({slug:"ch02-make-a-splash",n:"2",part:"Part I · The basics",sub:"The book’s project: a swim coach and a folder of timing files.",end:"A string is an object full of methods.",scenes:[
PT("The coach’s problem",[["Stopwatch files","One per swimmer and event.","blue"],["The filename","Holds name, age, distance, stroke.","green"],["The contents","Hold the times.","purple"],["The goal","Charts the coach can read.","amber"]],["The whole book builds this one application."]),
PL("Taking a filename apart",[["Remove the extension","With a string method."],["Split","On the separator.","blue"],["A list","Of four parts.","purple"],["Unpack","Into four variables.","green"]],["Multiple assignment gives each part a name in one line."],{tc:"blue"}),
VS("Read errors from the bottom up","Top",["Where the call started"],"Bottom",["What actually went wrong, and the line"],["The last line of a traceback is the first thing to read."],"→","amber","green"),
VS("Chaining methods","Separate steps",["A temporary variable for each"],"Chained",["One method’s result feeds the next","Order matters"],["Each method returns a new string."],"→","blue","green"),
RC("2",[["Project","Swim times."],["Filename","Carries data."],["Methods","On strings."],["Split","Makes a list."],["Unpack","Into names."],["Traceback","Read the bottom."]])
]});
//@@ ch03-lists-of-numbers
CH({slug:"ch03-lists-of-numbers",n:"3",part:"Part I · The basics",sub:"Reading a file and turning times into numbers.",end:"Open, process, close: let “with” handle it.",scenes:[
VS("The with statement","By hand",["Open the file","Remember to close it","Even on error"],"With",["Open it in a with block","Closed for you, always"],["A context manager cleans up after itself."],"→","red","green"),
PL("From “m:ss.hh” to a number",[["Split","Minutes from the rest."],["Split again","Seconds from hundredths.","blue"],["Convert","Each to an integer.","purple"],["Combine","Into hundredths of a second.","green"]],["Text that looks like a time has to become a number before you can average it."],{tc:"blue"}),
VS("for loops and while loops","while",["You manage the counter","Easy to get wrong"],"for",["Python hands you each item"],["Use a for loop when you have a collection."],"VS","amber","green"),
PT("Colons and indentation",[["A colon","Starts a block.","blue"],["Indentation","Shows what is inside it.","green"],["No braces","The layout is the structure.","purple"]],["The colon is your new best friend."]),
RC("3",[["with","Opens and closes."],["Convert","Text to numbers."],["for","Over a collection."],["Append","Grow a list."],["statistics","For the mean."],["Back","To a time string."]])
]});
//@@ ch04-functions-modules
CH({slug:"ch04-functions-modules",n:"4",part:"Part I · The basics",sub:"Packaging code for reuse.",end:"Write it once, import it everywhere.",scenes:[
PL("From cells to a module",[["Working cells","In a notebook."],["A function","With a name and arguments.","blue"],["A file","Saved as a module.","purple"],["Import","From anywhere.","green"]],["Everything from the earlier chapters becomes one function."],{tc:"blue"}),
VS("Functions return one thing","One value",["Returned directly"],"Several values",["Returned as a tuple","Unpacked by the caller"],["A tuple is often the one thing."],"or","blue","green"),
VS("sort and sorted","sort",["A list method","Changes the list in place"],"sorted",["A function","Returns a new sorted list"],["One mutates. The other copies."],"VS","amber","green"),
PT("Decisions",[["if","Test a condition.","blue"],["elif","Another case.","green"],["else","Everything else.","purple"],["in","Is this item present?","amber"]],["One file’s times had no minutes. An if handles both shapes."]),
RC("4",[["Function","Named, reusable."],["Module","A file of functions."],["Import","To use it."],["Tuple","Several results."],["sorted","Makes a copy."],["if","Handles the odd case."]])
]});
//@@ ch05-f-strings-charts
CH({slug:"ch05-f-strings-charts",n:"5",part:"Part I · The basics",sub:"Building a bar chart out of text.",end:"A bar chart is just a string.",scenes:[
VS("Concatenation versus f-strings","Concatenation",["Quotes and plus signs","Convert numbers by hand"],"f-string",["Values placed inside braces","Formatting built in"],["Formatted string literals read like the output they produce."],"→","red","green"),
PL("Generating the chart",[["Read","The times."],["Scale","Each to a bar width.","blue"],["Format","A line of SVG per bar.","purple"],["Join","Into one document.","amber"],["Write","To a file.","green"]],["Then open it in the browser."],{tc:"blue"}),
VS("Scaling","Raw values",["Times in hundredths of a second","Thousands"],"Scaled",["Mapped into a pixel range"],["A small function converts one range to another."],"→","amber","green"),
VS("round() does not format","round",["Changes the number"],"A format specifier",["Changes how it is shown","Keeps trailing zeros"],["Format for display. Round for arithmetic."],"VS","amber","green"),
RC("5",[["f-strings","Values in braces."],["SVG","Is text."],["Scale","To pixels."],["Loop","One bar each."],["Write","The file."],["Format","For display."]])
]});
//@@ ch06-data-structures
CH({slug:"ch06-data-structures",n:"6",part:"Part I · The basics",sub:"Choosing between lists and dictionaries.",end:"Lists for order. Dictionaries for lookup.",scenes:[
VS("Searching versus looking up","List",["Walk it to find a match"],"Dictionary",["Go straight to the key"],["If you keep searching a list for the same thing, you want a dictionary."],"→","amber","green"),
PT("A dictionary",[["Keys","Unique.","blue"],["Values","Anything.","green"],["Square brackets","To read and to assign.","purple"],["Insertion order","Is kept.","amber"]],["Key and value rows."]),
VS("The list-set-list trick","A list of names",["With duplicates"],"Through a set and back",["Duplicates removed","Sorted for display"],["It works until you need to remember which file each name came from."],"→","blue","amber"),
VS("Best friends","A dictionary of lists",["Each swimmer maps to their files"],"A list of dictionaries",["Each row is a record"],["Combine them to match the shape of the data."],"and","blue","purple"),
RC("6",[["List","Ordered."],["Set","Unique."],["Dictionary","Lookup by key."],["Brackets","Read and write."],["Combine","Structures."],["Choose","By use."]])
]});
//@@ ch07-building-a-webapp
CH({slug:"ch07-building-a-webapp",n:"7",part:"Part II · To the web",sub:"Putting the coach’s charts behind a web page.",end:"A webapp in a handful of lines.",scenes:[
PL("A request",[["Browser","Asks for a URL."],["Flask","Finds the matching function.","blue"],["Function","Builds a response.","purple"],["Template","Fills in the HTML.","amber"],["Browser","Shows it.","green"]],["A decorator maps each URL to a function."],{tc:"blue"}),
VS("Templates","HTML in Python",["Strings everywhere","Hard to change"],"Jinja templates",["HTML in its own file","Placeholders for data","Loops and conditions"],["Keep the markup out of the code."],"→","red","green"),
VS("Global variables on a server","One user",["A global seems to work"],"Many users",["Requests interleave","Each sees another’s data"],["Keep per-user state in the session, not in a global."],"→","green","red"),
PT("Form data",[["A form","Posts to a URL.","blue"],["Flask","Offers the fields as a dictionary.","green"],["Read","By field name.","purple"],["Then","Render the next page.","amber"]],["The swimmer chosen in a drop-down arrives as form data."]),
RC("7",[["Flask","Small."],["Decorators","Map URLs."],["Templates","Hold HTML."],["Session","Not globals."],["Forms","Arrive as a dictionary."],["App","The charts, online."]])
]});
//@@ ch08-deployment
CH({slug:"ch08-deployment",n:"8",part:"Part II · To the web",sub:"From your laptop to the cloud.",end:"Code that only runs on your machine helps nobody else.",scenes:[
VS("Template inheritance","Copied",["The same header in every page"],"Inherited",["A base template","Pages fill in blocks"],["One stylesheet and one layout for the whole app."],"→","red","green"),
PL("To the cloud",[["Account","On a hosting service."],["Upload","Code and data.","blue"],["Configure","The web app.","purple"],["Reload","And visit.","green"]],["The book walks through it in ten steps."],{tc:"blue"}),
VS("WSGI","Locally",["app.run() starts a development server"],"In production",["A real web server","WSGI is the plug between it and your app"],["The same application, behind a different server."],"→","amber","green"),
PT("Tidy the output",[["Expressions","Inside the template braces.","blue"],["Filters","Change how a value is shown.","green"],["Labels","Readable, not raw filenames.","purple"]],["Small touches before anyone else sees it."]),
RC("8",[["Inherit","Templates."],["Stylesheet","One."],["Upload","The app."],["WSGI","The plug."],["Reload","To publish."],["Polish","The labels."]])
]});
//@@ ch09-web-scraping
CH({slug:"ch09-web-scraping",n:"9",part:"Part II · To the web",sub:"Getting data out of a web page.",end:"The data was built for eyes, not for code.",scenes:[
PL("A plan for scraping",[["Get","The page."],["Parse","The HTML.","blue"],["Find","The tables you need.","purple"],["Extract","Rows and cells.","amber"],["Keep","Only what matters.","green"]],["Scraping is a pipeline."],{tc:"blue"}),
PT("Slices",[["start","Where to begin.","blue"],["stop","Where to end, exclusive.","green"],["step","How far to jump.","purple"],["Negative","Counts from the end.","amber"]],["Slicing lets you peek at a huge string, or take part of a list."]),
VS("Find, then search inside","One search",["The whole page at once","Too many matches"],"Narrowing",["Find the table","Then the rows in it","Then the cells"],["Work from the outside in."],"→","amber","green"),
VS("A caution","Works today",["The page’s layout is fixed"],"Breaks tomorrow",["When the site changes its markup"],["A scraper depends on something you do not control. Check the site’s terms too."],"→","green","amber"),
RC("9",[["Scraping","Page to data."],["Parse","The HTML."],["Find","Tags."],["Slices","Start, stop, step."],["Loops","Over tables and rows."],["Fragile","By nature."]])
]});
//@@ ch10-data-manipulation
CH({slug:"ch10-data-manipulation",n:"10",part:"Part II · To the web",sub:"Reshaping scraped data into something useful.",end:"Shape the data to fit the question.",scenes:[
PL("Reshape",[["A list of rows","From the scrape."],["Group","By course, stroke, distance.","blue"],["A dictionary of dictionaries","Keyed for lookup.","purple"],["Filter","Drop what is not needed.","green"]],["The records become something the app can look up directly."],{tc:"blue"}),
VS("A translation table","If and elif chains",["One branch per case"],"A small dictionary",["One code maps to one name"],["Data in place of logic."],"→","red","green"),
PL("Save and reuse",[["Dictionary","In memory."],["JSON","Written to a file.","blue"],["Load","When the app starts.","purple"],["Refresh","By a scheduled script.","green"]],["Records change, so a small utility updates the file."],{tc:"blue"}),
VS("Integration","A separate feature",["Lives in its own notebook"],"Integrated",["The record shown under each chart"],["Useful data is data in the right place."],"→","amber","green"),
RC("10",[["Reshape","Rows to lookups."],["Dictionary","As a table."],["Filter","The extra."],["JSON","Saves it."],["Refresh","On a schedule."],["Integrate","Into the app."]])
]});
//@@ ch11-pandas
CH({slug:"ch11-pandas",n:"11",part:"Part III · With data",sub:"Tables as a first-class object.",end:"Fewer lines is not automatically better.",scenes:[
PT("The dataframe",[["Rows","Records.","blue"],["Columns","Named fields.","green"],["An index","Labels the rows.","purple"],["Operations","Apply to whole columns.","amber"]],["Tabular data is everywhere, and pandas is built for it."]),
VS("Scraping with pandas","By hand",["Fetch, parse, find, loop"],"pandas",["One call reads every table on a page"],["Hours of the previous chapters, in a line."],"→","amber","green"),
PT("Selecting and filtering",[["A column","By name.","blue"],["Several columns","By a list of names.","green"],["Rows","By a condition.","purple"],["Both","Combined.","amber"]],["Ask for what you want, in place of looping."]),
VS("Which version to keep","pandas",["Short","A large dependency","Another thing to learn"],"Plain Python",["Longer","Nothing extra to install"],["Choose by what the team can maintain."],"or","blue","green"),
RC("11",[["Dataframe","A table."],["Read","Tables in one call."],["Select","Columns."],["Filter","Rows."],["Convert","Back to a dictionary."],["Short","Is not always better."]])
]});
//@@ ch12-databases
CH({slug:"ch12-databases",n:"12",part:"Part III · With data",sub:"When files stop being enough.",end:"Never build SQL with f-strings.",scenes:[
VS("When files stop being enough","Files",["Easy to lose or overwrite","Hard to query"],"A database",["One organised store","Ask questions with SQL"],["A small disaster prompts the move."],"→","red","green"),
PT("Three tables",[["Swimmers","Who.","blue"],["Events","What.","green"],["Times","Which swimmer swam which event, and how fast.","purple"]],["Plan the tables on a napkin before writing code."]),
VS("Parameters","An f-string",["Values pasted into the SQL text","Open to injection"],"Placeholders",["Values passed separately","The database keeps them as data"],["Always pass values as parameters."],"→","red","green"),
PL("Connect, execute, commit, close",[["with","Opens a connection."],["Execute","The SQL.","blue"],["Fetch","One, many or all rows.","purple"],["Commit and close","Done for you.","green"]],["A context manager again. Put the loop inside it, not around it."],{tc:"blue"}),
RC("12",[["Database","Beats files."],["Tables","Planned first."],["with","Handles the connection."],["Parameters","Never f-strings."],["Fetch","One, many, all."],["Loop","Inside the block."]])
]});
//@@ ch13-list-comprehensions
CH({slug:"ch13-list-comprehensions",n:"13",part:"Part III · With data",sub:"A compact way to build lists, and wiring the app to the database.",end:"Five lines of loop become one.",scenes:[
VS("Loop and comprehension","Loop",["Create an empty list","Loop","Test","Append"],"Comprehension",["One line: expression, for, optional if"],["The same result, stated as what you want."],"→","amber","green"),
PT("Reading a comprehension",[["Expression","What goes into the new list.","blue"],["for","Where the items come from.","green"],["if","Which ones to keep.","purple"]],["Read it from the middle outwards."]),
PT("Four queries, four functions",[["One function","Per question.","blue"],["SQL inside","With parameters.","green"],["Returns","Plain Python data.","purple"],["The app","Calls functions, not SQL.","amber"]],["The web code no longer knows where the data lives."]),
VS("Pairing two lists","Two lists",["Labels, and values"],"zip",["Pairs them item by item"],["The chart template wants pairs."],"→","blue","green"),
RC("13",[["Comprehension","One line."],["Parts","Expression, for, if."],["Functions","Wrap queries."],["Template","Draws the chart."],["zip","Pairs lists."],["Separation","Web from data."]])
]});
//@@ ch14-deployment-revisited
CH({slug:"ch14-deployment-revisited",n:"14",part:"Part III · With data",sub:"Moving to a database server, and finishing the app.",end:"One codebase, two databases.",scenes:[
VS("From a file to a server","SQLite",["A single file","Perfect for learning and small apps"],"A database server",["Many users at once","Runs as a service"],["The cloud deployment needs the second."],"→","blue","purple"),
VS("Same SQL, different dialect","In common",["Most queries"],"Different",["Placeholders","Some functions and types"],["Each engine speaks SQL with its own accent."],"and","green","amber"),
PL("Moving",[["Export","The data."],["Create","The tables on the server.","blue"],["Import","The data.","purple"],["Switch","The app’s configuration.","amber"],["Test","Everything.","green"]],["Configuration decides which database the code talks to."],{tc:"blue"}),
VS("Code never lives in isolation","The code",["Was the easy part"],"Around it",["Data, servers, configuration, users"],["The last chapter’s point."],"and","blue","amber"),
RC("14",[["Server","For many users."],["Dialects","Differ slightly."],["Config","Chooses the database."],["Migrate","Data and app."],["Test","After the move."],["Context","Around the code."]])
]});
