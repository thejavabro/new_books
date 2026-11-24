# Spring internals: a visual guide

Interactive, self-contained HTML pages that show how Spring Framework and Spring Boot work inside, for interview preparation. Each page explains one mechanism with diagrams you can step through, toggle and play, and ends with the interview questions for that topic (marked Core, Deeper or Trap).

## How to open

Open `index.html` in any modern browser. Every page is a single file with its CSS and JavaScript inlined and links to the others by relative path, so keep the files together in one folder. Pages work offline (Google Fonts when online, system fonts otherwise) and follow your light or dark theme; the "Theme" button cycles auto, light and dark. `Spring Internals.zip` holds the same pages in one folder.

## Pages

| Page | Topic |
|---|---|
| `ch01-big-picture.html` | 1. Inversion of control, who calls `new`, the container in one picture, Framework vs Boot |
| `ch02-container.html` | 2. BeanDefinitions, the registry and singleton cache filling up, `getBean()`, scopes, the prototype-in-singleton trap, BeanFactory vs ApplicationContext |
| `ch03-dependency-injection.html` | 3. Constructor/setter/field injection, candidate resolution simulator (@Qualifier, @Primary, name), circular dependencies and the three-level cache |
| `ch04-bean-lifecycle.html` | 4. All 13 lifecycle steps with the bean's state and a callback log, BeanFactoryPostProcessor vs BeanPostProcessor |
| `ch05-proxies.html` | 5. JDK dynamic vs CGLIB proxies, building both by hand, a "what breaks" simulator (final, private, inject by class), proxy vs target objects, @Configuration enhancement |
| `ch06-aop.html` | 6. AOP vocabulary on real code, the interceptor-chain "onion" (with exception and denial paths), how @Aspect becomes a proxy, pointcut quiz, Spring AOP vs AspectJ |
| `ch07-transactions.html` | 7. What @Transactional does (ThreadLocal connection), the self-invocation trap animated, five fixes, a propagation simulator (REQUIRED / REQUIRES_NEW / NESTED), rollback rules, pitfall checklist |
| `ch08-auto-configuration.html` | 8. @SpringBootApplication unpacked, the auto-configuration pipeline, a condition simulator (classpath, your beans, properties), the @Conditional family, starters |
| `ch09-boot-startup.html` | 9. `SpringApplication.run()` step by step with the console log and events, the 12 steps of `refresh()`, property precedence, startup hooks |
| `ch10-request-journey.html` | 10. One request through Tomcat, filters, DispatcherServlet, interceptors, argument resolvers, proxies and back (plus the exception path); filter vs interceptor vs aspect |
| `ch11-security.html` | 11. DelegatingFilterProxy → FilterChainProxy → SecurityFilterChain, a request walking the filter list (anonymous, JWT, wrong role, bad token), form login vs JWT authentication, SecurityContextHolder, @PreAuthorize as a proxy, 401 vs 403 |
| `ch12-data-jpa.html` | 12. How an interface becomes a repository (the JDK proxy and SimpleJpaRepository), derived queries parsed into JPQL, the persistence context and dirty checking, N+1 with a query counter and four fixes, Open Session in View |
| `ch13-webflux.html` | 13. Thread-per-request vs event loop simulator (with a blocking-call sabotage switch), Mono/Flux laziness as a marble diagram, backpressure (request(n), buffer, drop), MVC vs WebFlux stack |
| `ch14-actuator.html` | 14. Endpoint explorer (exposed vs sensitive), health aggregation and HTTP 503, liveness vs readiness through a pod's life, the Micrometer metrics and tracing flow, tag cardinality |
| `ch15-exceptions.html` | 15. The HandlerExceptionResolver chain step by step, a "which handler wins?" simulator (local handler, catch-all advice, ResponseEntityExceptionHandler, filter errors), /error and ProblemDetail |
| `ch16-events-async.html` | 16. Event listeners vs @TransactionalEventListener vs @Async on a thread timeline (with rollback and failure switches), how @Async proxies submit to an executor, a thread-pool growth simulator, fixedRate vs fixedDelay |
| `ch17-caching.html` | 17. The CacheInterceptor proxy step by step, a cache simulator (@CacheEvict vs @CachePut vs stale data, self-invocation), a hit-or-miss key quiz, pitfalls |
| `ch18-configuration.html` | 18. Property sources as clickable layers, profiles switching files and beans, @ConfigurationProperties binding (relaxed binding, env vars, validation failures) |
| `ch19-testing.html` | 19. Which beans each test slice starts, a context-cache simulator (@MockitoBean, profiles, @DirtiesContext), MockMvc vs a real port |
| `ch20-spring-cloud.html` | 20. Config server, Eureka, gateway, load balancer and tracing in one stepped diagram, a live circuit breaker state machine, resilience patterns |
| `ch21-virtual-threads.html` | 21. Virtual threads on carrier threads (and pinning), what `spring.threads.virtual.enabled` switches over, a throughput simulator showing the bottleneck moving to the connection pool |
| `resources.html` | Curated videos, talks and visual articles per topic (all 21 pages), with a watch list |
| `interview-drill.html` | All 153 interview questions: random "quiz me" mode, filters by topic, level and text |

## Notes

Explanations, code and drawings are original, written against Spring Framework 6.x/7.x and Spring Boot 3.x/4.x. Class names are real Spring classes so you can look them up in the source; flows are simplified to what interviews ask about. Videos and articles on the resources page belong to their authors.

`_source/` holds the shared CSS/JS (`base.css`, `base.js`), the question bank (`iq.js`, `iq2.js`, `iq3.js`), page sources (`src/`) and `build.py` (`python3 build.py OUT_DIR all`) for regenerating the pages.
