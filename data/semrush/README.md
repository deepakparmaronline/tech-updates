# Semrush Inventory Usage

This directory is the durable keyword memory for the scheduled publisher.

## Normal daily run

1. Read `docs/SEMRUSH_KEYWORD_BACKLOG.md` and `data/semrush/used-keywords.csv`.
2. Choose three different authority categories and read only their files in `data/semrush/queues/`.
3. Choose two different canonical topics from `data/semrush/queues/alternatives.csv`.
4. Reject existing or closely overlapping article intents.
5. Verify current product facts through official sources.
6. Publish and verify all five live URLs.
7. Append five rows to `used-keywords.csv` only after successful deployment.

Queue order is a research priority signal, not permission to publish blindly. Current relevance, product status, search intent, site duplication, and editorial quality still control the final choice.

## Files

- `queues/chatgpt.csv`: 954 ranked ChatGPT questions
- `queues/claude.csv`: 1,304 ranked Claude questions
- `queues/gemini.csv`: 458 ranked Gemini questions
- `queues/perplexity.csv`: 165 ranked Perplexity questions
- `queues/alternatives.csv`: 424 deduplicated alternatives topics
- `used-keywords.csv`: append only publication ledger
- `inventory-summary.json`: machine readable counts
- `../semrush-exports/`: complete dated raw exports

Run `npm run build:semrush-inventory` only after adding or correcting raw exports. The build may rewrite raw files only to remove exact duplicate keyword rows. It never resets the used keyword ledger.
