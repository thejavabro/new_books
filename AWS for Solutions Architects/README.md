# AWS for Solutions Architects: visual companion

Interactive visual learning pages for *AWS for Solutions Architects*, Second Edition, by Saurabh Shrivastava, Neelanjali Srivastav, Alberto Artasanchez and Imtiaz Sayed (Packt, 2023). There is one page per chapter, each with diagrams, step-through walkthroughs, small simulations, a quiz and a one-page recap.

## Note on the source file

The source PDF was misnamed **"Kafka The Definitive Guide.pdf"**. Its contents (884 pages) are *AWS for Solutions Architects*, Second Edition, not the Kafka book. These pages cover the AWS book.

## How to open

Open `index.html` in any modern browser. Every page is a single self-contained HTML file: the pages link to each other with relative paths, so keep them in the same folder. The pages work offline, falling back to system fonts when Google Fonts can't be reached. Light and dark themes follow your system setting.

## Chapters

1. Understanding AWS Principles and Key Characteristics (`ch01-aws-principles.html`)
2. The Well-Architected Framework and Getting Certified (`ch02-well-architected.html`)
3. Leveraging the Cloud for Digital Transformation (`ch03-digital-transformation.html`)
4. Networking in AWS (`ch04-networking.html`)
5. Storage in AWS: Choosing the Right Tool for the Job (`ch05-storage.html`)
6. Harnessing the Power of Cloud Computing (`ch06-compute.html`)
7. Selecting the Right Database Service (`ch07-databases.html`)
8. Application Security, Identity, and Compliance (`ch08-security.html`)
9. Driving Efficiency with CloudOps (`ch09-cloudops.html`)
10. Big Data and Streaming Data Processing (`ch10-big-data-streaming.html`)
11. Data Warehouses, Data Queries, and Visualization (`ch11-warehouses-queries.html`)
12. Machine Learning, IoT, and Blockchain (`ch12-ml-iot-blockchain.html`)
13. Containers in AWS (`ch13-containers.html`)
14. Microservice Architectures in AWS (`ch14-microservices.html`)
15. Data Lake Patterns (`ch15-data-lakes.html`)
16. Hands-On Guide to Building an App in AWS (`ch16-hands-on-app.html`)

The front matter (preface, Packt promotions), "Other Books You May Enjoy" and the index were skipped. The five part groupings on the index page are an addition for navigation; the book itself has no parts.

## Missing content

None. All 16 chapters were present and readable in the PDF. A few pages contain only figures, which can't be extracted as text, and some pages are blank separators. No chapter or page range was missing or showed a placeholder.

## About the content

All explanations are original summaries written for this companion, not text copied from the book. Code snippets are short original illustrations, and diagrams and simulations are original drawings. Prices, limits and service counts are illustrative and date from around 2023; check current AWS documentation before relying on them.

The `_source/` folder (in the project copy only) holds `build.py`, the shared `base.css` and `base.js`, and the page sources in `src/`. Run `python3 _source/build.py <outdir>` to rebuild.
