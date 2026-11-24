# Head First Python, Drawn Out

A visual companion to *Head First Python* (3rd edition) by Paul Barry (O'Reilly): one self-contained interactive HTML page per chapter, plus an index.

## How to open

Open `index.html` in any modern browser. Every page is a single self-contained file (CSS and JavaScript inlined) and works offline; fonts load from Google Fonts when online and fall back to system fonts otherwise. Pages link to each other by relative paths, so keep them together in one folder. Light and dark themes follow your system, and the Theme button on each page cycles auto, light and dark.

## Chapters

| # | Page | Topics |
|---|------|--------|
| 1 | ch01-why-python.html | Notebooks, BIFs, the Big 4, print dir, the standard library and PyPI |
| 2 | ch02-make-a-splash.html | Strings as objects, split, tracebacks, removesuffix, unpacking |
| 3 | ch03-lists-of-numbers.html | with open, the colon and blocks, time conversion, for vs while, append, mean |
| 4 | ch04-functions-modules.html | def, modules and import, tuples, os.listdir, sort vs sorted, if and in, enumerate |
| 5 | ch05-f-strings-charts.html | SVG bar charts from f-strings, scaling, writing files, format specifiers |
| 6 | ch06-data-structures.html | The list-set-list trick, tuples, list scan vs dict lookup, dictionaries, pprint |
| 7 | ch07-building-a-webapp.html | Flask routes and decorators, __name__, sessions vs globals, Jinja2, forms |
| 8 | ch08-deployment.html | Static CSS and template inheritance, Jinja expressions, PythonAnywhere in ten steps, WSGI |
| 9 | ch09-web-scraping.html | HTML for humans vs code, gazpacho soup, slices, nested loops |
| 10 | ch10-data-manipulation.html | Dict of dicts, lookup tables, filtering, JSON, scheduled tasks |
| 11 | ch11-pandas.html | Dataframes, read_html, boolean filtering, to_dict and set_index |
| 12 | ch12-databases.html | SQLite, schema design, DBcm, SQL placeholders vs injection, fetching rows |
| 13 | ch13-list-comprehensions.html | Comprehensions, query functions, Jinja SVG template, zip |
| 14 | ch14-deployment-revisited.html | SQLite to MariaDB, SQL dialects, credentials by platform, migration |
| A | appendix-top-ten.html | Classes, exceptions, testing, walrus, match, concurrency, type hints, venvs, tools |

Each page has a table of contents, interactive diagrams or simulations, and a short quiz at the end.

## About the content

All explanations, code snippets, sample data and drawings are original summaries written for this companion. Nothing is copied from the book; swimmer names, times and world-record values in the demos are invented or illustrative. The interactive panels imitate what Python would do and run entirely in the browser. The front matter (install instructions) and the chapter crosswords are not covered.

The `_source/` folder (in the project copy, not the zip) holds `build.py`, the shared `base.css`/`base.js` and the per-page sources; run `python3 _source/build.py OUTDIR all` to rebuild.
