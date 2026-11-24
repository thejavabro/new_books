# System Design on AWS: a visual companion

A set of interactive web pages, one for each of the 21 chapters of *System Design on AWS: Building and Scaling Enterprise Solutions* by Jayanth Kumar and Mandeep Singh (O'Reilly, 2025). Each page has diagrams, calculators and simulations you can play with, step-through architecture walkthroughs, and a short quiz at the end.

## How to open it

Unzip the folder and open `index.html` in any modern browser. Everything works offline. The pages are plain HTML files with their styles and scripts built in; the only thing loaded from the web is Google Fonts, and the pages fall back to system fonts without it. Light and dark themes follow your system setting, and the button in the header switches between them. The pages work on phones.

## Chapters

**Part I: System design basics**
1. System Design Trade-offs and Guidelines (`ch01-tradeoffs.html`)
2. Storage Types and Relational Stores (`ch02-relational.html`)
3. Nonrelational Stores (`ch03-nonrelational.html`)
4. Caching Policies and Strategies (`ch04-caching.html`)
5. Load Balancing Approaches and Techniques (`ch05-load-balancing.html`)
6. Communication Networks and Protocols (`ch06-networks.html`)
7. Containerization, Orchestration and Deployment (`ch07-containers.html`)
8. Architectural Designs and Patterns (`ch08-architecture.html`)

**Part II: Diving deep into AWS services**
9. AWS Network Services (`ch09-aws-network.html`)
10. AWS Storage Services (`ch10-aws-storage.html`)
11. AWS Compute Services (`ch11-aws-compute.html`)
12. AWS Messaging, Orchestration and Monitoring (`ch12-aws-messaging.html`)
13. Big Data, Analytics and Machine Learning Services (`ch13-aws-analytics.html`)

**Part III: System design use cases**
14. Designing a URL Shortener (`ch14-url-shortener.html`)
15. Designing a Web Crawler and Search Engine (`ch15-web-crawler.html`)
16. Designing a Social Network and Newsfeed (`ch16-social-network.html`)
17. Designing an Online Game Leaderboard (`ch17-game-leaderboard.html`)
18. Designing a Hotel Reservation System (`ch18-hotel-reservation.html`)
19. Designing a Chat Application (`ch19-chat.html`)
20. Designing a Video-Processing Pipeline (`ch20-video-pipeline.html`)
21. Designing an Online Stock-Trading Platform (`ch21-stock-trading.html`)

## A note on the content

All explanations, diagrams and interactive pieces are original summaries written for this companion. They are not text or figures copied from the book. Read them alongside the book, not instead of it. AWS prices, quotas and service limits change often. The figures used in the calculators are illustrative, so check current AWS documentation before relying on them.

## Rebuilding

The `_source/` folder (included in the working folder, not in the zip) has `build.py`, the shared `base.css` and `base.js`, and one source file per page in `src/`. To rebuild every page into an output folder, run `python3 build.py <out-dir>`.
