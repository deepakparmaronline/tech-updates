# Semrush Inventory Usage

This directory contains the dated keyword inventory for Tech Updates. It is the topic source for the single authorized recurring publisher defined in `docs/AUTOMATION.md` and for explicitly requested manual queue runs.

## Permitted uses

1. On each run of `Tech Updates Daily Publisher`, every `.csv` file directly under `queues/` is one required publishing queue.
2. For an owner-supplied Reddit, alternatives, news, or exact topic request, a matching row may provide dated keyword context. It must not replace or expand the owner's scope.
3. When the owner explicitly invokes `docs/PROMPT_SEMRUSH_QUEUE_PUBLISHING.md`, every `.csv` file directly under `queues/` becomes one required publishing queue for that manual run.

In queue mode, discover files from the directory instead of relying on a hard-coded list. Select one eligible unused keyword from every queue, so the article count equals the queue count. Read `docs/SEMRUSH_KEYWORD_BACKLOG.md` for selection, duplicate, category, ledger, and documentation rules.

## Current files

- `queues/alternatives.csv`: 424 deduplicated alternatives topics
- `queues/chatgpt.csv`: 954 ranked ChatGPT questions
- `queues/claude.csv`: 1,304 ranked Claude questions
- `queues/gemini.csv`: 458 ranked Gemini questions
- `queues/perplexity.csv`: 165 ranked Perplexity questions
- `used-keywords.csv`: append-only selection ledger for queue keywords used by complete, validated publication batches
- `inventory-summary.json`: machine-readable counts for the current generated inventory
- `../semrush-exports/`: complete dated raw exports

This list documents the current snapshot. The filesystem is authoritative during a run. Update the list when a queue is added, removed, or rebuilt.

## Queue run rules

1. Read the repository article instructions, this file, the backlog file, and the full used keyword ledger.
2. Enumerate every queue CSV at preflight and validate its header.
3. Normalize and compare candidate keywords with the ledger and the complete existing article library.
4. Reject duplicate intent, stale or irrelevant queries, unsupported claims, and inactive products.
5. Use the alternatives article template for `alternatives.csv` and the authority question template for standard question queues.
6. Verify current claims with at least two authoritative sources per article.
7. Do not write a partial batch. If any queue cannot supply one eligible topic, stop before article creation and report it.
8. After the entire batch passes content validation, the production build, static page checks, and sitemap checks, append exactly one ledger row per queue article before the publication commit. Include the ledger with the same verified batch. Do not append rows for an incomplete or failing batch.
9. Verify the master sitemap index and every relevant category sitemap.

All metrics remain an October 13, 2026 snapshot unless a newer verified export and provenance record are added. Never fabricate or silently refresh metrics.

Run `npm run build:semrush-inventory` only after adding or correcting verified raw exports. The build may rewrite raw files only to remove exact duplicate keyword rows. It never resets the used keyword ledger.
