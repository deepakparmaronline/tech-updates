# Semrush Saved Keyword Inventory

This repository contains a durable, dated Semrush keyword inventory. It never starts work automatically. The queues become a topic source only when the repository owner explicitly invokes `docs/PROMPT_SEMRUSH_QUEUE_PUBLISHING.md` or explicitly requests Semrush research in the current conversation.

For Reddit, owner-named alternatives, and last seven days news runs, follow their own topic-selection rules. Do not use Semrush rows to fill or replace those batches.

## Snapshot provenance

- Captured: October 13, 2026
- Database: United States
- Authority filters: `Questions`, `All Keywords`, KD 0 through 49
- Alternatives filters: `[product] alternatives`, `All Keywords`, KD 0 through 49
- Raw unique records: 10,319
- Metrics are a dated snapshot. Never present them as live data and never invent a replacement value.

## Complete raw exports

All captured rows, including lower relevance semantic suggestions, are preserved under `data/semrush-exports/`.

| Dataset | Unique rows |
| --- | ---: |
| ChatGPT questions | 1,092 |
| Claude AI questions | 1,488 |
| Gemini AI questions | 717 |
| Perplexity AI questions | 596 |
| Base44 alternatives | 469 |
| Bolt.new alternatives | 263 |
| Lovable alternatives | 508 |
| Manus AI alternatives | 1,991 |
| Wispr Flow alternatives | 1,059 |
| Granola AI alternatives | 1,268 |
| Replit alternatives | 868 |

Do not read every raw export during a normal queue run. They are the audit trail and the source for rebuilding queues with `npm run build:semrush-inventory` after a verified export is intentionally added.

## Current publishing queues

Every `.csv` file directly under `data/semrush/queues/` is one publishing queue when the Semrush queue prompt is explicitly invoked. Discover this list from the filesystem at the start of every run. Never assume that only the files listed below exist.

| Queue | Category | Saved topics |
| --- | --- | ---: |
| `data/semrush/queues/alternatives.csv` | Alternatives | 424 |
| `data/semrush/queues/chatgpt.csv` | ChatGPT | 954 |
| `data/semrush/queues/claude.csv` | Claude | 1,304 |
| `data/semrush/queues/gemini.csv` | Gemini | 458 |
| `data/semrush/queues/perplexity.csv` | Perplexity | 165 |

The table is documentation, not the queue discovery mechanism. Update it when a queue is added, removed, rebuilt, or its recorded count changes.

## One article per queue rule

An explicitly invoked queue run is an all-queues batch:

1. Count every valid queue CSV found at preflight.
2. Select exactly one eligible unused keyword from every queue.
3. Create exactly one article for each selected keyword.
4. The required article count must equal the queue count.
5. Never take two topics from one queue to compensate for another queue.
6. If any queue is malformed, has an ambiguous category, or contains no eligible unused intent, stop before creating the batch and report the blocker.

Within each queue, inspect rows in descending `priority_score` order when that column exists. Continue past a row when it is already used, duplicates an existing article intent, is off topic, is obsolete, lacks adequate sources, concerns an inactive product, or would produce a weak or unsafe article. The first high-ranked row is not automatically publishable.

For `alternatives.csv`, treat `canonical_topic` as an additional duplicate key. Other rows for the same product are supporting query ideas, not separate articles.

## Duplicate and eligibility checks

Before accepting a row:

- normalize its primary keyword by trimming it, converting it to lowercase, and collapsing repeated whitespace
- compare it with every normalized `primary_keyword` in `data/semrush/used-keywords.csv`
- compare its canonical topic, when present, with the ledger
- inspect all existing article filenames, slugs, titles, descriptions, tags, and primary intent
- reject exact duplicates and semantic cannibalization, even when the wording differs
- confirm the topic is still current and can be supported by at least two authoritative sources
- treat `volume`, `kd`, `cpc_usd`, and `priority_score` only as October 13, 2026 snapshot data unless a newer verified export is documented

## Queue to category mapping

The current mappings are Alternatives, ChatGPT, Claude, Gemini, and Perplexity. For a future CSV:

1. Use the nonempty `category` column when every eligible row uses the same category.
2. If there is no category column, derive a readable category label from the filename stem.
3. Stop for owner direction if the category is ambiguous or conflicts with an existing label.
4. Add the category to `lib/articles.ts` and `scripts/validate-content.mjs` only when required.
5. Confirm its generated archive route, breadcrumb, static export, master sitemap entry, and `/sitemaps/category-slug/sitemap.xml` file.
6. Do not redesign navigation or the site to add a category.

## Used keyword ledger

`data/semrush/used-keywords.csv` is the append-only selection ledger. It is checked before selection, but the existing article library remains the primary record of article intent.

After the complete queue batch passes content validation, the production build, static page checks, and sitemap checks, append one row per commit-ready queue article with:

- publication date
- article slug
- category
- canonical topic when applicable
- exact primary keyword
- source queue path

Append the ledger rows before the publication commit and include them with the same commit-ready batch. At that point the only remaining publication action should be the owner's commit and push to `main`, which triggers the existing deployment pipeline. Do not add rows for incomplete drafts, rejected topics, Reddit-only articles, or a batch that has not passed every required local check. Never wait for live deployment before recording a fully validated commit-ready queue batch.

## Documentation maintenance

At the end of each queue run, compare this file and `data/semrush/README.md` with the actual filesystem and inventory metadata. Update them only when a queue was added or removed, a category mapping or schema changed, a queue was rebuilt, provenance changed, or a recorded count became inaccurate. A normal ledger append does not require rewriting the backlog documentation.

## Queue maintenance

The current queues are generated by `scripts/build-semrush-inventory.mjs`. Raw exports are immutable research evidence except for removal of exact duplicate rows caused by pagination retries. Run `npm run build:semrush-inventory` only after adding or correcting a verified raw export. Never delete or regenerate the used keyword ledger.
