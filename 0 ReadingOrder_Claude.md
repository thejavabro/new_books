# Book Reading Order

Recommended reading order for 61 books across 7 categories, each building on the last. Books marked **(new)** were added in this latest update.

---

## Category 1 · Foundations
*Start here — timeless craft*

| # | Book | Note |
|---|------|------|
| 1 | Head First Python | if Python isn't your language yet |
| 2 | Grokking Algorithms **(new)** | illustrated algorithms intro — start DS&A here |
| 3 | Head First Algorithms and Data Structures | gentle, visual DS&A refresher |
| 4 | Fabulous Adventures in Data Structures and Algorithms | deeper, more playful DS&A follow-up |
| 5 | Java Coding Problems (2nd Edition) **(new)** | modern Java practice, problem by problem |
| 6 | The Pragmatic Programmer | mindset and craft |
| 7 | The Effective Software Engineer | day-to-day habits |
| 8 | Refactoring | code-level quality |
| 9 | The Book of Debugging | systematic debugging technique |
| 10 | Clean Architecture | design principles |

---

## Category 2 · Software Architecture
*Systems thinking at scale*

| # | Book | Note |
|---|------|------|
| 1 | Fundamentals of Software Architecture | vocabulary + patterns |
| 2 | Software Architecture: The Hard Parts | trade-off analysis |
| 3 | Building Evolutionary Architectures | change over time |
| 4 | The Software Architect Elevator | org + technical bridge |
| 5 | Cloud Application Architecture Patterns | cloud-native patterns |
| 6 | System Design on AWS **(new)** | system design applied to AWS building blocks |
| 7 | Visualizing Google Cloud | illustrated GCP services + reference architectures |
| 8 | Mastering the TOGAF Standard | enterprise architecture framework — read last |

---

## Category 3 · Distributed Systems & Data
*Internals, concurrency, data at scale*

| # | Book | Note |
|---|------|------|
| 1 | Java Concurrency in Practice | threading fundamentals |
| 2 | Virtual Threads, Structured Concurrency and Scoped Values **(new)** | Java's new threading model — right after JCIP |
| 3 | Designing Data-Intensive Applications | essential — read cover to cover |
| 4 | Database Internals | storage engine depth |
| 5 | Designing Distributed Systems | patterns + hands-on |
| 6 | Java Performance **(new)** | JVM tuning, GC and profiling |
| 7 | Latency: Reduce Delay in Software Systems | performance across the stack |
| 8 | Software Engineering at Google | at-scale practices |

---

## Category 4 · Microservices & Event-Driven
*Service decomposition*

| # | Book | Note |
|---|------|------|
| 1 | Building Microservices | the definitive guide |
| 2 | Microservices Patterns | concrete patterns + sagas |
| 3 | Apache Kafka in Action **(new)** | hands-on Kafka intro |
| 4 | Kafka: The Definitive Guide **(new)** | Kafka internals and operations |
| 5 | Building Event Driven Microservices | async + event sourcing |
| 6 | Kafka for Architects **(new)** | designing Kafka-based platforms |
| 7 | Platform Engineering | internal developer platforms |

---

## Category 5 · DevOps, SRE & Reliability
*Delivery, operations, production*

| # | Book | Note |
|---|------|------|
| 1 | The Phoenix Project | narrative intro — read as a novel |
| 2 | The DevOps Handbook | the practice guide |
| 3 | Continuous Delivery | pipelines and automation |
| 4 | Terraform: Up & Running **(new)** | infrastructure as code |
| 5 | Accelerate | data-backed DORA metrics |
| 6 | Release It! | production stability patterns |
| 7 | Building Secure and Reliable Systems | security + SRE together |
| 8 | Seeking SRE | SRE in practice, varied perspectives |
| 9 | The DevOps Solutions Handbook | tooling and implementation |

---

## Category 6 · AI Engineering & Agents
*Build from fundamentals to multi-agent systems*

| # | Book | Note |
|---|------|------|
| 1 | AI Engineering — Chip Huyen | start here, strong foundation |
| 2 | Visualizing Generative AI | quick visual primer on GenAI concepts |
| 3 | An Illustrated Guide to AI Agents | visual intuition |
| 4 | AI Agents in Action | hands-on first agents |
| 5 | AI Agents: The Definitive Guide | comprehensive reference |
| 6 | Building Applications with AI Agents | practical patterns |
| 7 | Agentic AI for Engineers: Architecting Goal-Driven Systems **(new)** | goal-driven agent design |
| 8 | Multi Agent AI Engineering | multi-agent systems |
| 9 | Agentic Architectural Patterns for Building Multi-Agent Systems **(new)** | multi-agent pattern catalogue |
| 10 | AI Native Software Engineering | AI in the SDLC |
| 11 | Architecting AI Software Systems | architecture for AI-heavy systems |
| 12 | Building Distributed Systems in the Age of AI | infra for AI workloads |
| 13 | Building the Agentic Enterprise | org-level deployment |
| 14 | Transformation Enterprise Architecture with Agentic AI | architecture strategy |

---

## Category 7 · Engineering Leadership
*When you're managing people and teams*

| # | Book | Note |
|---|------|------|
| 1 | Team Topologies | team structures and cognitive load |
| 2 | Become an Effective Software Engineering Manager | first-time manager guide |
| 3 | Think Like a Software Engineering Manager | mental models |
| 4 | Leading Effective Engineering Teams | team performance |
| 5 | The Engineering Executive Primer | VP/director level |

---

## Cross-Category Notes

- **The Phoenix Project** (DevOps #1) is a novel — read it early, even before Category 2, to get the "why" behind all the process work.
- **Designing Data-Intensive Applications** (Distributed #3) is the single most important technical book on the list. Don't skip it.
- **Accelerate** (DevOps #5) is short and data-driven — pairs well right after The DevOps Handbook.
- **Latency** (Distributed #7) reads best after DDIA and Database Internals, once you know where the time actually goes.
- **Mastering the TOGAF Standard** (Architecture #8) is enterprise-architecture process, not system design. Read it only if you're heading toward an EA or principal-architect role; it also sets up Transformation Enterprise Architecture with Agentic AI (AI #14).
- **Kafka** appears three times in Category 4: Kafka in Action to learn it, The Definitive Guide for depth, then Kafka for Architects once you've read Building Event Driven Microservices.
- **Java track** if Java is your main language, read JCIP → Virtual Threads (Distributed #1–2) back to back, and save Java Performance (Distributed #6) for when you're tuning real services.
- **Category 6 (AI)** assumes you've read the architecture and distributed systems categories first, since agentic systems are just distributed systems with LLMs inside them.
- **Category 7 (Leadership)** can be read in parallel with anything once you're managing a team — it's not a prerequisite for the technical books.

---

## Skipped (non-technical)

Left out of the reading order. Tell me if you want any of them added back.

| Book | Why skipped |
|------|-------------|
| Art of Visual Notetaking | sketchnoting / note-taking skill |
| Storytelling with You | presentation and communication skills |
| Framed! Solve an Intriguing Mystery and Master How to Make Smart Choices | general decision-making, told as a mystery |
| Visual Language for Designers | graphic design |
| ChatGPT Visual Bible | end-user guide to a chat tool |
| Claude Visual Bible | end-user guide to a chat tool |
| Claude Code Visual Bible | tool usage guide; better learned hands-on than as part of a reading order |
| Logic as a Tool | formal mathematical logic textbook; worthwhile but outside the software-engineering track |
