# Head First Design Patterns: visual companion

Interactive visual learning pages for *Head First Design Patterns* (2nd edition, 2020) by Eric Freeman and Elisabeth Robson, with Kathy Sierra and Bert Bates (O'Reilly).

One self-contained HTML page per chapter, with inline SVG diagrams, step-through class diagrams, small simulations you can run in the page, and a quick-check quiz at the end of each page.

## How to open

Open `index.html` in any modern browser. Every page is self-contained (CSS and JavaScript inlined) and pages link to each other by relative paths, so the folder works offline. Fonts load from Google Fonts when online and fall back to system fonts otherwise. Light and dark themes follow your system setting.

## Chapters

| Page | Chapter | Patterns and principles |
|---|---|---|
| ch01-intro-strategy.html | 1. Welcome to Design Patterns | Strategy; encapsulate what varies, program to an interface, favor composition |
| ch02-observer.html | 2. Keeping Your Objects in the Know | Observer; loose coupling; push vs pull |
| ch03-decorator.html | 3. Decorating Objects | Decorator; Open-Closed Principle; java.io |
| ch04-factory.html | 4. Baking with OO Goodness | Simple Factory, Factory Method, Abstract Factory; Dependency Inversion |
| ch05-singleton.html | 5. One-of-a-Kind Objects | Singleton; multithreading fixes; enum |
| ch06-command.html | 6. Encapsulating Invocation | Command; undo, macros, queues, logging |
| ch07-adapter-facade.html | 7. Being Adaptive | Adapter, Facade; Principle of Least Knowledge |
| ch08-template-method.html | 8. Encapsulating Algorithms | Template Method, hooks; Hollywood Principle |
| ch09-iterator-composite.html | 9. Well-Managed Collections | Iterator, Composite; Single Responsibility |
| ch10-state.html | 10. The State of Things | State; State vs Strategy |
| ch11-proxy.html | 11. Controlling Object Access | Remote, virtual, protection and dynamic proxies |
| ch12-compound-mvc.html | 12. Patterns of Patterns | Compound patterns; Model-View-Controller |
| ch13-real-world.html | 13. Patterns in the Real World | Definition, categories, thinking in patterns, anti-patterns |
| appendix-leftover-patterns.html | Appendix: Leftover Patterns | Bridge, Builder, Chain of Responsibility, Flyweight, Interpreter, Mediator, Memento, Prototype, Visitor |

## About the content

All explanations are original summaries written for this companion, not text from the book; pattern definitions and principle names are quoted briefly. Code examples and scenarios are original on purpose (game characters, match-score feeds, phone plans, report exporters, media players and so on) instead of the book's ducks, pizzas and coffee.

Skipped: the book's introduction ("how to use this book"), crossword puzzles and exercise solutions, and the index.

Missing content: none. Every chapter in the PDF was present and readable. Some pages in the PDF are image-only (crosswords, illustrations); they are part of the book's design, not missing pages.

## Rebuilding

`_source/` holds `build.py`, the shared `base.css` and `base.js`, and one source file per page in `src/`. Run `python3 _source/build.py <output-dir> all` to regenerate the pages.
