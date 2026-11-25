//@@ ch01-big-picture
CH({slug:"ch01-big-picture",n:"1",part:"Part I · The core container",sub:"What the container does, and how the rest builds on it.",end:"Spring creates your objects, so you do not call new.",scenes:[
VS("Who calls new?","You do",["Each class builds its own collaborators","Hard to swap, hard to test"],"The container does",["Classes declare what they need","Spring supplies it"],["Inversion of control: the framework builds and wires the objects."],"→","red","green"),
PT("The four jobs of the container",[["Find","Bean definitions.","blue"],["Create","Instances.","green"],["Wire","Dependencies together.","purple"],["Manage","Their lifecycle.","amber"]],["Every Spring feature is one of these, or a proxy added along the way."]),
VS("Spring Framework and Spring Boot","Spring Framework",["The container, AOP, MVC, data access","You configure it"],"Spring Boot",["Auto-configuration, starters, an embedded server","Sensible defaults"],["Boot configures the framework for you. It does not replace it."],"and","blue","green"),
PL("The whole container, in order",[["Scan","Find components."],["Define","Record a recipe per bean.","blue"],["Post-process","Adjust the recipes.","purple"],["Instantiate","Create and inject.","amber"],["Proxy","Wrap where needed.","green"]],["The picture the rest of the guide fills in."],{tc:"blue"}),
RC("Page 1",[["IoC","The container calls new."],["Four jobs","Find, create, wire, manage."],["Proxies","Add behaviour."],["Framework","The engine."],["Boot","The defaults."],["Order","Definitions before instances."]])
]});
//@@ ch02-container
CH({slug:"ch02-container",n:"2",part:"Part I · The core container",sub:"Bean definitions, the singleton cache and scopes.",end:"A definition is the recipe. A bean is the dish.",scenes:[
VS("The recipe and the dish","BeanDefinition",["Class, scope, dependencies, init method","Metadata only"],"Bean",["An actual object, created from it"],["Spring gathers all the recipes before cooking anything."],"→","blue","green"),
PL("What getBean() does",[["Check","The singleton cache."],["Miss?","Find the definition.","blue"],["Create","Resolve dependencies first.","purple"],["Initialise","Callbacks and post-processors.","amber"],["Cache","And return.","green"]],["Every injection point is, underneath, a lookup like this."],{tc:"blue"}),
PT("Scopes",[["Singleton","One per container. The default.","blue"],["Prototype","A new one each time it is asked for.","green"],["Request","One per HTTP request.","purple"],["Session","One per HTTP session.","amber"]],["A scope decides how many instances exist, and for how long."]),
VS("The prototype-in-a-singleton trap","Injected directly",["The singleton gets one prototype, once","It is reused for ever"],"Fixed",["Inject an ObjectProvider, or use a lookup method or a scoped proxy"],["Injection happens once, at creation."],"→","red","green"),
RC("Page 2",[["Definition","Recipe."],["Bean","Instance."],["Cache","Of singletons."],["Scopes","Four common ones."],["Prototype trap","Use a provider."],["ApplicationContext","BeanFactory plus more."]])
]});
//@@ ch03-dependency-injection
CH({slug:"ch03-dependency-injection",n:"3",part:"Part I · The core container",sub:"How dependencies arrive, and which candidate wins.",end:"Prefer constructor injection.",scenes:[
VD("Three ways to receive a dependency",[["Constructor",true,"Required, final, visible in the signature.","PREFER","green"],["Setter",true,"For optional dependencies.","OPTIONAL","blue"],["Field",false,"Hidden, and awkward to test.","AVOID","amber"]],["Constructor injection makes a class honest about what it needs."],{sw:200}),
PL("Which bean gets injected?",[["By type","Find all candidates."],["@Qualifier","Narrows by name.","blue"],["@Primary","Breaks a tie.","purple"],["By name","Parameter name as a fallback.","amber"],["Still several?","Startup fails.","red"]],["Ambiguity is an error, not a guess."],{tc:"blue"}),
VS("Circular dependencies","Setter or field injection",["An early reference is exposed from a three-level cache","The cycle resolves"],"Constructor injection",["Neither can be built first","Startup fails"],["Recent Spring Boot versions reject cycles by default. Redesign instead."],"VS","amber","red"),
PT("Optional and lazy",[["Optional or ObjectProvider","The dependency may be absent.","blue"],["@Lazy","Inject a proxy, create on first use.","green"],["Collections","Inject every bean of a type.","purple"],["@Value","Inject a property.","amber"]],["Ways to soften a hard requirement."]),
RC("Page 3",[["Constructor","First choice."],["Type","Then qualifier, then primary."],["Ambiguity","Fails fast."],["Cycles","Redesign."],["Lazy","Via a proxy."],["Collections","All beans of a type."]])
]});
//@@ ch04-bean-lifecycle
CH({slug:"ch04-bean-lifecycle",n:"4",part:"Part I · The core container",sub:"What happens to one bean from creation to shutdown.",end:"Proxies are created at the end of initialisation.",scenes:[
PL("One bean, start to finish",[["Instantiate","Call the constructor."],["Populate","Inject dependencies.","blue"],["Aware callbacks","Name, factory, context.","purple"],["Before init","Post-processors, then @PostConstruct.","amber"],["After init","Post-processors may return a proxy.","green"]],["At shutdown, @PreDestroy runs for singletons."],{tc:"blue"}),
VS("Two kinds of post-processor","BeanFactoryPostProcessor",["Runs once","Changes definitions, before any bean exists"],"BeanPostProcessor",["Runs for every bean","Changes or wraps the instance"],["One edits recipes. The other edits dishes."],"VS","blue","purple"),
VD("Pick the right hook",[["Validate that injection is complete",true,"@PostConstruct.","INIT","blue"],["Release a resource",true,"@PreDestroy.","DESTROY","purple"],["Run code once the application is ready",true,"An ApplicationRunner or a ready event.","READY","green"],["Work in the constructor that needs dependencies",false,"They may not be injected yet.","AVOID","amber"]],["Each job has a proper place."],{sw:240}),
VS("What you get back","You wrote",["A plain class"],"The container holds",["Possibly a proxy around it"],["That proxy is what gets injected into other beans."],"→","blue","green"),
RC("Page 4",[["Order","Instantiate, populate, initialise."],["PostConstruct","After injection."],["Post-processors","Two kinds."],["Proxy","After initialisation."],["PreDestroy","At shutdown."],["Prototype","No destroy callback."]])
]});
//@@ ch05-proxies
CH({slug:"ch05-proxies",n:"5",part:"Part II · Proxies and AOP",sub:"The mechanism behind most Spring annotations.",end:"What you inject is a stand-in.",scenes:[
VS("Two ways to build a stand-in","JDK dynamic proxy",["Implements the bean’s interfaces","Needs an interface"],"CGLIB proxy",["Generates a subclass","Works on classes"],["Spring Boot uses class-based proxies by default."],"or","blue","purple"),
VD("What a class-based proxy cannot do",[["Intercept a final method",false,"It cannot be overridden.","NO","red"],["Proxy a final class",false,"It cannot be subclassed.","NO","red"],["Intercept a private method",false,"Not visible to the subclass.","NO","red"],["Intercept a call made through this",false,"It never reaches the proxy.","NO","red"]],["Know the limits, and the surprises disappear."],{sw:130}),
VS("Two objects in memory","The proxy",["What everyone else holds","Runs the extra behaviour"],"The target",["Your real object","Does the work"],["A call must go through the proxy for the annotation to apply."],"and","blue","green"),
VS("@Configuration classes are proxied too","Without",["Calling one @Bean method from another creates a second instance"],"With",["The call is intercepted","The existing singleton is returned"],["That is why @Bean methods can call each other safely."],"→","red","green"),
RC("Page 5",[["Proxy","A stand-in."],["JDK","Interface-based."],["CGLIB","Subclass-based."],["Final","Cannot be proxied."],["Self-call","Bypasses it."],["Configuration","Also proxied."]])
]});
//@@ ch06-aop
CH({slug:"ch06-aop",n:"6",part:"Part II · Proxies and AOP",sub:"Applying behaviour across many methods.",end:"An onion of interceptors around your method.",scenes:[
PT("Five words",[["Aspect","A module of cross-cutting behaviour.","blue"],["Advice","The code that runs.","green"],["Pointcut","Which methods it applies to.","purple"],["Join point","One matched method call.","amber"],["Weaving","Attaching advice to code.","red"]],["The vocabulary, in one go."]),
PL("The interceptor chain",[["Call","Arrives at the proxy."],["Advice one","Before.","blue"],["Advice two","Before.","purple"],["Target","Your method runs.","green"],["Unwind","Each advice finishes in reverse.","amber"]],["Each advice wraps the next, like layers of an onion."],{tc:"blue"}),
PT("Kinds of advice",[["Before","Runs first.","blue"],["After returning","On success.","green"],["After throwing","On exception.","purple"],["After","Either way.","amber"],["Around","Wraps the call, and decides whether to proceed.","red"]],["Around is the most powerful, and the easiest to misuse."]),
VS("Spring AOP and AspectJ","Spring AOP",["Proxies, at run time","Public methods on Spring beans"],"AspectJ",["Bytecode weaving","Any method, any object, even self-calls"],["Spring AOP covers most needs. AspectJ covers the rest."],"VS","blue","purple"),
RC("Page 6",[["Aspect","Cross-cutting."],["Pointcut","Selects methods."],["Advice","Runs around them."],["Chain","Like an onion."],["Order","Can be set."],["AspectJ","For what proxies cannot do."]])
]});
//@@ ch07-transactions
CH({slug:"ch07-transactions",n:"7",part:"Part II · Proxies and AOP",sub:"How @Transactional works, and why it sometimes does not.",end:"The proxy starts the transaction. Your method never sees it.",scenes:[
PL("What @Transactional does",[["Call","Reaches the proxy."],["Begin","Get a connection, start a transaction.","blue"],["Invoke","Your method.","purple"],["Commit","If it returns normally.","green"],["Roll back","On a runtime exception.","red"]],["The connection is bound to the current thread for the duration."],{tc:"blue"}),
VS("Why this.method() skips the proxy","Call from outside",["Goes through the proxy","Transaction starts"],"Call from the same class",["Goes straight to the target","No transaction"],["The most common @Transactional surprise."],"VS","green","red"),
PT("Propagation",[["REQUIRED","Join the current one, or start one. The default.","blue"],["REQUIRES_NEW","Suspend the current, start another.","green"],["NESTED","A savepoint inside the current one.","purple"],["SUPPORTS","Join if there is one.","amber"]],["One transaction, or two?"]),
VD("Does it roll back?",[["An unchecked exception leaves the method",true,"Yes, by default.","ROLLBACK","red"],["A checked exception leaves the method",false,"No, unless rollbackFor says so.","COMMIT","amber"],["The exception is caught inside the method",false,"The proxy never sees it.","COMMIT","amber"],["The method is private",false,"The proxy does not intercept it.","NO TX","muted"]],["Check each before blaming the database."],{sw:230}),
RC("Page 7",[["Proxy","Runs the transaction."],["Self-call","No transaction."],["Fix","Move the method to another bean."],["Propagation","Decides one or two."],["Rollback","Unchecked by default."],["Private","Not intercepted."]])
]});
//@@ ch08-auto-configuration
CH({slug:"ch08-auto-configuration",n:"8",part:"Part III · Spring Boot",sub:"How Boot decides which beans to create.",end:"Auto-configuration is ordinary configuration, with conditions.",scenes:[
VD("@SpringBootApplication, unpacked",[["@SpringBootConfiguration",true,"This class is configuration.","ONE","blue"],["@EnableAutoConfiguration",true,"Import the auto-configurations.","TWO","purple"],["@ComponentScan",true,"Scan this package and below.","THREE","green"]],["Three annotations in one."],{sw:200}),
PL("From jars to beans",[["Read","The list of auto-configuration classes in each jar."],["Filter","By conditions.","blue"],["Order","After your own configuration.","purple"],["Register","The beans that survive.","green"]],["Each candidate is a @Configuration class guarded by conditions."],{tc:"blue"}),
PT("The @Conditional family",[["OnClass","A class is on the classpath.","blue"],["OnMissingBean","You have not defined one yourself.","green"],["OnProperty","A property has a given value.","purple"],["OnWebApplication","It is a web app.","amber"]],["Your bean wins: Boot backs off when you define your own."]),
VS("Starters","A starter",["Contains no code","Only dependencies"],"What it does",["Puts the right classes on the classpath","Which satisfies the conditions"],["Starters and auto-configuration are two halves of one idea."],"→","blue","green"),
RC("Page 8",[["Three in one","SpringBootApplication."],["Candidates","Listed in jars."],["Conditions","Filter them."],["Back off","When you define a bean."],["Starters","Supply the classpath."],["Report","Shows what matched."]])
]});
//@@ ch09-boot-startup
CH({slug:"ch09-boot-startup",n:"9",part:"Part III · Spring Boot",sub:"What happens between main() and “Started”.",end:"refresh() is where the container comes alive.",scenes:[
PL("SpringApplication.run()",[["Prepare","The Environment."],["Create","The application context.","blue"],["Load","Bean definitions.","purple"],["Refresh","Instantiate singletons, start the web server.","amber"],["Runners","Then the ready event.","green"]],["Listeners are notified at each step."],{tc:"blue"}),
PL("Inside refresh()",[["Factory post-processors","Edit definitions."],["Bean post-processors","Registered.","blue"],["Singletons","Instantiated.","purple"],["Web server","Started.","amber"],["Finish","Publish the refreshed event.","green"]],["The container’s own startup sequence."],{tc:"blue"}),
ST("Which value wins?",[["Command-line arguments","Highest.","green",0.4],["Environment variables","Above files.","blue",0.6],["Profile-specific properties","Above the base file.","purple",0.8],["application.properties","The base.","muted",1.0]],["The Environment is a stack of property sources. Higher ones override lower ones."]),
PT("Where to plug in your code",[["ApplicationRunner","After the context is ready.","blue"],["@EventListener","For lifecycle events.","green"],["@PostConstruct","Per bean, during creation.","purple"],["SmartLifecycle","Ordered start and stop.","amber"]],["Choose by when it must run."]),
RC("Page 9",[["run()","Environment, context, refresh."],["refresh()","Builds the beans."],["Server","Starts inside refresh."],["Properties","Layered."],["Runners","After startup."],["Events","At each phase."]])
]});
//@@ ch10-request-journey
CH({slug:"ch10-request-journey",n:"10",part:"Part III · Spring Boot",sub:"One HTTP request, from socket to response.",end:"Filters first, then the dispatcher.",scenes:[
PL("Follow one request",[["Filters","Servlet level."],["DispatcherServlet","The front controller.","blue"],["Handler mapping","Find the controller method.","purple"],["Interceptors","Before and after.","amber"],["Controller","Runs, and returns.","green"]],["A message converter turns the return value into the response body."],{tc:"blue"}),
VD("Filter, interceptor or aspect?",[["Needs the raw request, before Spring MVC",true,"Authentication, logging, CORS.","FILTER","blue"],["Needs to know which handler was chosen",true,"Per-controller concerns.","INTERCEPTOR","purple"],["Needs method arguments and return values",true,"Around any bean method.","ASPECT","green"]],["All three wrap code, at different depths."],{sw:250}),
VS("Argument resolution and conversion","Before the method",["JSON becomes an object","Path and query values are bound","Validation runs"],"After the method",["The object becomes JSON","Status and headers are set"],["The controller sees objects, not bytes."],"and","blue","green"),
VS("One thread per request","What it means",["The whole request runs on one thread"],"What follows",["ThreadLocal state works: security, transactions","A blocked thread serves nobody else"],["This is the model WebFlux and virtual threads change."],"→","blue","amber"),
RC("Page 10",[["Filters","Outermost."],["Dispatcher","Routes."],["Mapping","Finds the method."],["Converters","Bytes to objects."],["Interceptors","Around handlers."],["Thread","One per request."]])
]});
//@@ ch11-security
CH({slug:"ch11-security",n:"11",part:"Part IV · The ecosystem",sub:"How requests are authenticated and authorised.",end:"Security is a chain of filters in front of everything.",scenes:[
PL("A request through the filters",[["Filter chain proxy","Picks a security filter chain."],["Authentication filters","Read credentials or a token.","blue"],["Authentication manager","Verifies them.","purple"],["Security context","Stores the result.","amber"],["Authorization","Checks the rules.","green"]],["Only then does the request reach the dispatcher."],{tc:"blue"}),
PL("Inside authentication",[["Token","An unauthenticated request object."],["Manager","Delegates to providers.","blue"],["Provider","Checks credentials, loads the user.","purple"],["Result","An authenticated object with authorities.","green"]],["Add a provider to support another way of logging in."],{tc:"blue"}),
VS("401 or 403?","401",["Who are you?","No valid authentication"],"403",["I know who you are","You may not do this"],["Unauthenticated, and unauthorised, are different failures."],"VS","amber","red"),
VS("Method security is another proxy","URL rules",["Applied in the filter chain"],"@PreAuthorize",["Applied by a proxy around the bean method"],["So the usual proxy rules apply, including self-invocation."],"and","blue","purple"),
RC("Page 11",[["Filters","In front."],["Chains","Matched by request."],["Providers","Authenticate."],["Context","Held per thread."],["401","Not authenticated."],["403","Not allowed."]])
]});
//@@ ch12-data-jpa
CH({slug:"ch12-data-jpa",n:"12",part:"Part IV · The ecosystem",sub:"Repositories, the persistence context and common traps.",end:"The repository you inject is a generated proxy.",scenes:[
VS("Where the implementation comes from","You write",["An interface"],"Spring provides",["A proxy backed by a generic repository class","Queries derived from method names"],["No implementation class is written by hand."],"→","blue","green"),
PT("The persistence context",[["A map","Of entities already loaded, by ID.","blue"],["A to-do list","Of changes to flush.","green"],["Dirty checking","Changed entities are saved automatically.","purple"],["Scope","Usually one transaction.","amber"]],["Why loading the same entity twice gives the same object."]),
VS("The N+1 select problem","What happens",["One query for ten orders","Then one more per order for its items"],"Fixes",["A join fetch","An entity graph","Batch fetching"],["Lazy associations loaded in a loop."],"→","red","green"),
VS("LazyInitializationException","The cause",["A lazy association touched after the session closed"],"Options",["Fetch what you need inside the transaction","Return DTOs"],["Open Session in View hides it by keeping the session open during rendering, at a cost."],"→","red","green"),
RC("Page 12",[["Repository","A proxy."],["Derived queries","From names."],["Context","Map plus to-do list."],["Dirty checking","Automatic."],["N+1","Fetch deliberately."],["Lazy","Inside the transaction."]])
]});
//@@ ch13-webflux
CH({slug:"ch13-webflux",n:"13",part:"Part IV · The ecosystem",sub:"The reactive web stack.",end:"Nothing happens until you subscribe.",scenes:[
VS("Thread-per-request and event loop","Thread-per-request",["A thread waits during each I/O call","Many threads"],"Event loop",["A few threads","Never block","Callbacks when I/O completes"],["The reactive model serves many connections with few threads."],"VS","blue","purple"),
PT("Mono and Flux",[["Mono","Zero or one item.","blue"],["Flux","Zero to many.","green"],["Lazy","A pipeline is only a description.","purple"],["Subscribe","Starts the work.","amber"]],["Forgetting to return or subscribe is the classic bug."]),
VS("Backpressure","Push",["The producer sends as fast as it can","The consumer is overwhelmed"],"Pull",["The consumer requests n items","The producer sends no more"],["In Reactive Streams, the consumer sets the pace."],"→","red","green"),
VD("When to choose it",[["Many slow, concurrent connections",true,"Streaming, gateways.","FITS","green"],["A blocking driver in the call path",false,"It blocks the event loop.","AVOID","red"],["A simple CRUD application",false,"The servlet stack is simpler.","SKIP","muted"],["Virtual threads available",false,"Often enough, with blocking code.","CONSIDER","blue"]],["The same container, with a different web stack."],{sw:200}),
RC("Page 13",[["Event loop","Few threads."],["Never block","On it."],["Mono, Flux","Lazy publishers."],["Subscribe","To run."],["Backpressure","Consumer-led."],["Choose","Only when it fits."]])
]});
//@@ ch14-actuator
CH({slug:"ch14-actuator",n:"14",part:"Part IV · The ecosystem",sub:"Seeing inside a running application.",end:"Health for the platform. Metrics for people.",scenes:[
PT("A window into the app",[["Health","Up or down, with details.","blue"],["Metrics","Counters, timers, gauges.","green"],["Info and environment","What is deployed and configured.","purple"],["Loggers","Change levels at run time.","amber"]],["Expose only what you need, and secure the rest."]),
PL("How /health decides",[["Each indicator","Reports a status."],["Aggregate","The worst wins.","blue"],["Groups","Liveness and readiness.","purple"],["Result","Up, down, or out of service.","green"]],["Database, disk and other checks contribute."],{tc:"blue"}),
VS("Liveness and readiness","Liveness",["Is the process broken?","If not live, restart it"],"Readiness",["Can it take traffic?","If not ready, stop routing to it"],["Do not put a database check in liveness, or an outage restarts every instance."],"VS","red","blue"),
VS("The tag that takes down your monitoring","Low cardinality",["Status, method, route template"],"High cardinality",["User ID, full URL","Millions of time series"],["Every unique combination of tag values is a separate series."],"→","green","red"),
RC("Page 14",[["Actuator","Operational endpoints."],["Health","Worst status wins."],["Live","Restart if not."],["Ready","Route if so."],["Micrometer","Metrics facade."],["Tags","Keep cardinality low."]])
]});
//@@ ch15-exceptions
CH({slug:"ch15-exceptions",n:"15",part:"Part V · Everyday mechanisms",sub:"Where a thrown exception goes.",end:"The nearest handler wins.",scenes:[
PL("Where an exception goes",[["Thrown","From the controller."],["Local handler","@ExceptionHandler in the same controller.","blue"],["Global handler","@ControllerAdvice.","purple"],["Default resolvers","Standard Spring MVC exceptions.","amber"],["/error","The last stop.","red"]],["Each level is tried in turn."],{tc:"blue"}),
VS("Which handler wins?","More specific exception type",["Beats a more general one"],"Controller-local",["Beats a global advice"],["Specific over general, and local over global."],"and","blue","green"),
VS("ProblemDetail","Ad hoc error bodies",["Every API invents its own shape"],"A standard shape",["Type, title, status, detail, instance"],["A standard format for HTTP API errors, supported since Spring 6."],"→","amber","green"),
VD("Outside the dispatcher",[["An exception in a filter",false,"Controller advice never sees it.","NOT CAUGHT","red"],["An exception in an @Async method",false,"It is on another thread.","NOT CAUGHT","red"],["An exception in a controller",true,"Handled by the advice.","CAUGHT","green"]],["Advice only covers what runs inside Spring MVC’s handling."],{sw:260}),
RC("Page 15",[["Order","Local, global, default, /error."],["Specific","Beats general."],["Advice","For controllers."],["Filters","Are outside it."],["ProblemDetail","Standard body."],["Status","Set deliberately."]])
]});
//@@ ch16-events-async
CH({slug:"ch16-events-async",n:"16",part:"Part V · Everyday mechanisms",sub:"In-process events, background methods and schedules.",end:"By default, an event listener runs in your thread.",scenes:[
VS("Publishing an event","By default",["Listeners run synchronously","Same thread","Same transaction"],"Options",["@Async listener: another thread","@TransactionalEventListener: after commit"],["A slow or failing listener affects the publisher unless you say otherwise."],"→","amber","green"),
PL("@Async",[["Call","Reaches the proxy."],["Submit","The method to an executor.","blue"],["Return","Immediately, with a future or nothing.","purple"],["Run","Later, on a pool thread.","green"]],["A proxy again, so self-invocation does not work."],{tc:"blue"}),
PL("How a thread pool executor grows",[["Core threads","Created first."],["Queue","Then tasks wait.","blue"],["Max threads","Only when the queue is full.","amber"],["Reject","When both are full.","red"]],["With an unbounded queue, the pool never grows past its core size."],{tc:"blue"}),
VS("@Scheduled","fixedRate",["Starts every n, measured start to start"],"fixedDelay",["Waits n after the previous run ends"],["By default all scheduled tasks share one thread, so a slow one delays the rest."],"VS","blue","purple"),
RC("Page 16",[["Events","Synchronous by default."],["After commit","Transactional listener."],["Async","Proxy plus executor."],["Pool","Core, queue, max."],["Scheduled","One thread by default."],["Self-call","Still bypasses."]])
]});
//@@ ch17-caching
CH({slug:"ch17-caching",n:"17",part:"Part V · Everyday mechanisms",sub:"Method-level caching, and its pitfalls.",end:"@Cacheable is a proxy in front of your method.",scenes:[
PL("@Cacheable",[["Call","Reaches the proxy."],["Compute the key","From the arguments.","blue"],["Hit","Return the cached value. The method does not run.","green"],["Miss","Run the method, store the result.","amber"]],["The method body is skipped on a hit."],{tc:"blue"}),
PT("Three annotations",[["@Cacheable","Read through the cache.","blue"],["@CachePut","Always run, and update the cache.","green"],["@CacheEvict","Remove entries.","purple"]],["Reading, writing and removing."]),
VS("Keys","Default",["Built from all the arguments"],"Custom",["A SpEL expression picks the parts that matter"],["Arguments must have sound equals and hashCode, or nothing ever hits."],"or","blue","green"),
VD("Where caching goes wrong",[["A call from within the same class",false,"Bypasses the proxy.","NO CACHE","red"],["A mutable object returned from the cache",false,"Callers change the cached copy.","STALE","amber"],["No eviction or expiry",false,"Stale data, growing memory.","STALE","amber"],["A local cache with several instances",false,"Each instance has its own copy.","DIFFERS","amber"]],["The usual proxy limits, plus cache-specific ones."],{sw:210}),
RC("Page 17",[["Proxy","Checks the cache."],["Hit","Skips the method."],["Put","And evict."],["Keys","From arguments."],["Expiry","Configure it."],["Self-call","Bypasses."]])
]});
//@@ ch18-configuration
CH({slug:"ch18-configuration",n:"18",part:"Part V · Everyday mechanisms",sub:"Where configuration values come from.",end:"One Environment, many layers.",scenes:[
PT("One Environment",[["Property sources","Stacked in priority order.","blue"],["Lookup","Top to bottom, first match wins.","green"],["Placeholders","Resolved from it.","purple"],["Everything","@Value and typed properties read from it.","amber"]],["A single place to ask for a value."]),
VS("Profiles","What a profile does",["Activates extra property files","Activates beans marked for it"],"How it is chosen",["A property, an environment variable or a flag"],["A profile switches both files and beans."],"and","blue","green"),
VS("@Value and @ConfigurationProperties","@Value",["One property at a time","Strings scattered through the code"],"@ConfigurationProperties",["A typed class","Relaxed binding","Validated at startup"],["Prefer the typed class for anything beyond a single value."],"→","amber","green"),
VS("Secrets","In the repository",["Committed for ever"],"Outside",["Environment variables, mounted files or a secret store"],["Configuration is layered so that secrets can come from elsewhere."],"→","red","green"),
RC("Page 18",[["Environment","One."],["Sources","Layered."],["Profiles","Files and beans."],["Typed","Properties."],["Validate","At startup."],["Secrets","External."]])
]});
//@@ ch19-testing
CH({slug:"ch19-testing",n:"19",part:"Part V · Everyday mechanisms",sub:"How much of the application a test starts.",end:"Load as little as the test needs.",scenes:[
ST("How much does the test start?",[["@SpringBootTest","The whole application.","red",1.0],["A test slice","One layer: web, or data.","amber",0.7],["Plain unit test","No Spring at all.","green",0.4]],["The less it starts, the faster it runs."]),
PT("Test slices",[["@WebMvcTest","Controllers, with MockMvc.","blue"],["@DataJpaTest","Repositories and an embedded database.","green"],["@JsonTest","Serialisation only.","purple"],["Mocked collaborators","For everything outside the slice.","amber"]],["Each loads one layer."]),
VS("The context cache","Same configuration",["The context is reused across test classes","Fast"],"Different configuration",["A new context is built","Slow"],["Each distinct set of mocked beans or properties creates another context."],"VS","green","red"),
VS("MockMvc","What it is",["The real dispatcher and your controllers","No network, no server"],"What it is not",["A full end-to-end test"],["For a real port, start the server on a random port and call it."],"and","blue","amber"),
RC("Page 19",[["Scope","Start less."],["Slices","Per layer."],["Cache","Contexts are reused."],["Mocks","Change the cache key."],["MockMvc","No network."],["Full test","Sparingly."]])
]});
//@@ ch20-spring-cloud
CH({slug:"ch20-spring-cloud",n:"20",part:"Part V · Everyday mechanisms",sub:"The pieces that support a system of services.",end:"Each piece answers one distributed-systems question.",scenes:[
PT("What each piece does",[["Gateway","One entry point, with routing and filters.","blue"],["Config server","Central configuration.","green"],["Service discovery","Who is running, and where.","purple"],["Load balancer","Client-side choice of instance.","amber"],["Circuit breaker","Stop calling what is failing.","red"],["Declarative HTTP clients","Interfaces for remote calls.","blue"]],["Use the ones your system needs."]),
PL("A circuit breaker",[["Closed","Calls pass. Failures are counted."],["Open","Past a threshold, calls fail fast.","red"],["Half-open","After a wait, a few trial calls.","amber"],["Closed","If they succeed.","green"]],["It protects the caller and the struggling service."],{tc:"blue"}),
PT("Resilience patterns",[["Retry","For transient faults.","blue"],["Circuit breaker","For persistent ones.","green"],["Bulkhead","Limit concurrent calls.","purple"],["Rate limiter","Limit calls per period.","amber"],["Time limiter","Bound how long to wait.","red"]],["They are combined, in a deliberate order."]),
VS("Retry with care","Blind retry",["Multiplies load on a struggling service","Repeats non-idempotent calls"],"Careful retry",["Backoff and jitter","Only for idempotent operations","A limit"],["A retry storm can turn a blip into an outage."],"→","red","green"),
RC("Page 20",[["Gateway","Entry point."],["Config","Central."],["Discovery","Find instances."],["Breaker","Fail fast."],["Bulkhead","Isolate."],["Retry","With backoff."]])
]});
//@@ ch21-virtual-threads
CH({slug:"ch21-virtual-threads",n:"21",part:"Part V · Everyday mechanisms",sub:"What virtual threads change in a Boot application.",end:"More threads do not give you more database.",scenes:[
VS("Virtual threads","Platform thread",["One OS thread each","Costly"],"Virtual thread",["Runs on a small pool of carrier threads","Parks when it blocks"],["Blocking code stays simple, and scales much further."],"→","amber","green"),
PT("What one property switches over",[["Request handling","Each request on a virtual thread.","blue"],["@Async","Tasks on virtual threads.","green"],["Scheduling and messaging","Listeners too.","purple"],["Your code","Unchanged.","amber"]],["A single setting in recent Spring Boot versions."]),
VS("The new bottleneck","Before",["Threads ran out first"],"After",["Threads are plentiful","The connection pool runs out first"],["Size and protect the scarce resources: database connections and downstream services."],"→","blue","red"),
VD("Things to watch",[["Blocking inside synchronized on older JDKs",false,"The carrier thread is pinned.","WATCH","amber"],["Heavy use of ThreadLocal",false,"Multiplied by many threads.","WATCH","amber"],["CPU-bound work",false,"No gain from virtual threads.","NO GAIN","muted"],["Blocking I/O with simple code",true,"The ideal case.","GOOD","green"]],["Measure before and after."],{sw:180}),
RC("Page 21",[["Virtual","Cheap threads."],["Property","Turns them on."],["Code","Stays blocking."],["Pool","The database is the limit."],["Pinning","On older JDKs."],["CPU work","Unchanged."]])
]});
