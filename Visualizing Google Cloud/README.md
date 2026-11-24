# Visualizing Google Cloud: visual companion

Interactive, illustrated learning pages for *Visualizing Google Cloud: 101 Illustrated References for Cloud Engineers and Architects* by Priyanka Vergadia (Wiley, 2022). There is one self-contained HTML page per chapter (the four largest chapters are split in two), plus an index.

## How to open

Open `index.html` in any modern browser. Every page works offline (fonts fall back to system fonts) and links to the others by relative path, so keep the files together in one folder. Each page has light and dark themes (follows your system, or use the Theme button) and works at phone width.

## Pages

| Page | Book chapter | Topics |
|---|---|---|
| ch01-infrastructure.html | 1 Infrastructure | Service models, Compute Engine, autoscaling, containers, GKE, Cloud Run, App Engine, Cloud Functions, VMware Engine, Bare Metal |
| ch02-storage.html | 2 Storage | Object/block/file, Cloud Storage classes and locations, lifecycle, data transfer, Persistent Disk, Filestore |
| ch03-databases.html | 3 Databases | Cloud SQL, Spanner, Firestore, Bigtable, Memorystore, choosing |
| ch04-data-analytics.html | 4 Data Analytics | Pipeline stages, Pub/Sub, IoT Core, Dataflow, Dataproc, Dataprep, BigQuery, Data Catalog, Composer, Datastream, Looker |
| ch05-app-modernization.html | 5 App Development (part 1) | Monolith vs. microservices, migration paths and plays, Anthos, CI/CD |
| ch06-microservices-apis-ops.html | 5 App Development (part 2) | Choreography vs. orchestration, Pub/Sub, Eventarc, Workflows, Tasks, Scheduler, API Gateway, Apigee, Cloud Operations, sample architecture |
| ch07-network-foundations.html | 6 Networking (part 1) | Regions and zones, network tiers, hybrid connectivity, VPC, Shared VPC, peering, Cloud DNS |
| ch08-traffic-delivery.html | 6 Networking (part 2) | Cloud Load Balancing, Cloud CDN, Cloud NAT, Network Intelligence Center, Traffic Director, Service Directory |
| ch09-ml-lifecycle.html | 7 Data Science, ML, AI (part 1) | Data science lifecycle, choosing an ML approach, Vertex AI, AutoML, MLOps, Pipelines, forecasting, BigQuery ML |
| ch10-ai-apis.html | 7 Data Science, ML, AI (part 2) | Vision, Video, Translation, Natural Language, Speech-to-Text, Contact Center AI, Document AI, Recommendations AI |
| ch11-security-layers.html | 8 Security (part 1) | Shared fate, defense in depth, Cloud Armor, supply chain and SLSA, encryption and keys, Cloud DLP |
| ch12-identity-access.html | 8 Security (part 2) | Cloud Identity, Cloud IAM, service accounts, BeyondCorp, Security Command Center |

Each page has diagrams, step-through walkthroughs, small simulations (sliders and toggles), decision trees for choosing a service, a quick-check quiz and a one-screen recap.

## Notes on sources

- All explanations, examples, code snippets and drawings are original summaries, not copies of the book's sketchnotes or text.
- The book is mostly hand-drawn sketchnotes, so text extraction gives headings, captions and running text only. The pages rely on that text plus general knowledge of the Google Cloud services named.
- **Chapter 4 (Data Analytics) is missing from the PDF copy used**: only its table of contents survives (the pages show a "loading" placeholder). That page follows the outline and explains each service from general knowledge, and it says so on the page.
- The book dates from 2022. Where a product has since been renamed or retired (Cloud IoT Core, Anthos → GKE Enterprise, Cloud Functions → Cloud Run functions, BeyondCorp Enterprise → Chrome Enterprise Premium, Data Catalog → Dataplex, Recommendations AI → Vertex AI Search for commerce), the page adds a short "Since the book" note. Prices and quotas in the simulators are illustrative.
- Front matter, copyright, acknowledgments and license pages are skipped.

`_source/` holds the shared CSS/JS (`base.css`, `base.js`), page sources (`src/`) and `build.py`. Run `python3 _source/build.py <output-folder>` to regenerate the pages.
