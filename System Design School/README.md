# Study Search: one search page over C:\IMPORTANT\sds

`build_search.py` reads every document in your study folder and writes a single
`search.html` into that folder. Open it, type a query, and you get the matching
passages with your words highlighted. Click a passage to open the document at that spot:

- **HTML lessons** open scrolled to the matching sentence, highlighted (Chrome and Edge).
- **PDFs** open on the right page.
- **Word, text and Markdown** files open from the top.

It also reads PowerPoint (.pptx) and shows the slide number. Everything runs on your laptop,
and nothing is uploaded. The page keeps working with no internet.

## One-time setup

You already have Python. In Command Prompt, run this once so PDFs can be read:

```
python -m pip install pypdf
```

(If you only have HTML files you can skip it. Without it, PDFs are skipped with a note.)

## Build the search page

1. Save `build_search.py` anywhere, for example in `Downloads`.
2. Open Command Prompt in that folder and run:

   ```
   python build_search.py
   ```

   It indexes `C:\IMPORTANT\sds` by default and lists each file as it goes.
   For a different folder, put the path in quotes after it:
   `python build_search.py "C:\Users\you\OneDrive\sds"`
3. Open `C:\IMPORTANT\sds\search.html` (double-click it). Bookmark it in your browser for next time.

Run step 2 again whenever you add files. It rebuilds the page from scratch in a few seconds.

## Searching

| Type | Finds |
|---|---|
| `leader election` | passages containing both words (ranked by relevance) |
| `"write-ahead log"` | that exact wording |
| `cache -cdn` | passages about caching that don't mention CDN |
| `shard` | also sharding, shards, sharded (word starts match) |

The dropdown limits results to one file type. Press `/` to jump back to the search box.
The page address remembers your query, so you can bookmark a search.

## If something looks wrong

- **"python is not recognized"**: try `py build_search.py` instead.
- **A PDF is listed under "Skipped… no readable text"**: it's a scanned image with no text layer,
  so there's nothing to search. It needs OCR first.
- **Results show menu or footer text**: tell me which site the pages came from and I'll tune the cleanup.
- **Clicking an HTML result opens the page but doesn't scroll**: the passage was split across
  formatting on that page. The page still opens; use Ctrl+F there.
- **Moving the folder**: links are relative, so copy the whole folder including `search.html`
  and it keeps working anywhere.
