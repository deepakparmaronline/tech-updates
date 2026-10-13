# AI Article Research and Publishing Runbook

This is the source of truth for every scheduled or manual Tech Updates publishing run. Read it with the root `AGENTS.md`, `docs/CONTENT_STYLE.md`, `docs/AUTOMATION.md`, and `docs/SEMRUSH_KEYWORD_BACKLOG.md` before research or publication.

## Required daily outcome

Publish exactly five original English articles per successful day:

1. Three authority articles that answer real search questions in depth.
2. Two commercial discovery articles in the `Alternatives` category. Each must cover a different emerging tool.

The automation starts at 6:00 AM Asia/Kolkata and targets completed live publication by 8:00 AM. Never touch `toolboxcard.tech`, its repository, or its scheduled task.

## Daily category mix

Choose the three authority articles from ChatGPT, Claude, Gemini, Perplexity, OpenAI, AI Tools, Automation, Coding, GitHub, or another current technology category already supported by the site. Prefer three distinct categories in one batch. Rotate fairly so one brand does not dominate the site.

Publish the two commercial articles under `Alternatives`. Do not reuse the same product in a daily batch. Do not publish another alternatives article for a product until meaningful search demand, product changes, or a clearly different intent justifies it.

## Semrush method for authority articles

Use the United States database in Semrush Keyword Magic Tool.

1. Search one exact seed, such as ChatGPT, Claude, Gemini, or Perplexity AI.
2. Select `Questions`.
3. Keep `All Keywords` selected.
4. Review the `Possible` bucket from KD 30 through 49, then `Easy` from 15 through 29, then `Very easy` from 0 through 14.
5. Reject KD 50 or higher unless the repository owner explicitly changes this rule.
6. Prefer meaningful volume, clear informational intent, current usefulness, and a question that the site has not answered.
7. Record the exact keyword, volume, KD, intent, database, and research date in the daily run report.

Never invent a Semrush metric. If Semrush is temporarily unavailable, use only an unused entry already recorded in `docs/SEMRUSH_KEYWORD_BACKLOG.md`. Confirm that its product details are still current before writing.

## Semrush method for alternatives articles

Start with tools that are gaining attention but do not yet have saturated results. Product Hunt recent launches, trending product lists, official changelogs, and credible technology communities are discovery sources, not proof by themselves.

1. Confirm that the product is active through its official site or documentation.
2. Search `[product] alternatives` in Keyword Magic Tool with `All Keywords` selected.
3. Prefer KD 0 through 29. Allow KD 30 through 49 only when the intent is strong and the current results leave a clear content gap.
4. Require measurable search volume. Record the exact keyword, volume, KD, intent, database, and date.
5. Prefer emerging products over broad incumbents such as Shopify or Semrush unless the measured opportunity is unusually strong.
6. Select two different products with clearly different search intents or audiences.

An alternatives article must compare real products using current official evidence. Never promise a ranking, accept payment, or imply that a company paid for inclusion. Future sponsored placement must be disclosed and must not change the editorial assessment.

## Duplicate and cannibalization check

Before selecting any topic, inspect all existing titles, slugs, descriptions, tags, target keywords, and recent commits. Reject a topic that answers the same primary intent as an existing article. A new article may cover a nearby query only when it serves a distinct audience or task and links to the earlier article.

## Query fanout research

Every authority article starts with one primary Semrush question and expands into a complete topic.

1. Identify six to ten supporting questions from Semrush variations, Google style related questions, official documentation, support pages, community discussions, and current search results.
2. Group the supporting questions by intent: definition, setup, use, comparison, troubleshooting, limitations, privacy, cost, and alternatives when relevant.
3. Answer the primary question in the opening section.
4. Answer every useful supporting question in the body or FAQ without repeating the same paragraph.
5. Verify time sensitive claims using current primary sources.

The finished article must satisfy the reader who asks the main question and the natural follow up questions that come next.

## Deep verification

Use at least two current authoritative sources for every article. Prefer official documentation, company announcements, support pages, release notes, status pages, maintainer repositories, standards, and original research. Use credible secondary reporting only when a primary source is unavailable.

Community discussions can reveal wording, pain points, and misconceptions. They are not proof. Clearly separate verified facts, user reports, opinions, and inference. Do not invent features, prices, limits, dates, quotes, test results, or personal experience.

For alternatives articles, verify each included product through its current official product page, pricing page, and documentation when those sources exist. State when pricing or a feature varies by plan or changes frequently.

## Writing and images

Follow `docs/CONTENT_STYLE.md` exactly. Each article must be original, detailed, practical, and at least 1,200 words, with 1,600 to 2,400 words preferred for full topic coverage. Create one distinct 16:9 editorial image per article under `public/images/`.

Use simple human English. Do not use em dashes or en dashes. Avoid hyphens in prose when a natural rewrite is possible. Product names, URLs, code, and required technical syntax may retain their official punctuation.

## Validation, publication, and recovery

Run:

```bash
npm run validate:content
npm run build
```

Fix every failure. Commit only intended files, push to `main`, confirm GitHub Actions succeeds, confirm Hostinger deploys, then open all five live article URLs plus the homepage and relevant category pages.

If a recoverable validation, build, or deployment problem occurs, diagnose and correct it in the same run. Never force push, delete unrelated files, alter hosting, change permissions, or touch another repository. A partial batch is not a successful run. Preserve completed draft work and report the blocker if publication cannot safely finish.

## Required run report

Record the date, start time, completion time, five selected topics, exact Semrush metrics, fanout questions, sources, article and image paths, word counts, commit, push, workflow, deployment, live URL, homepage, category page, and legacy redirect results. Also record rejected duplicates, skipped topics, access problems, and any metric that could not be refreshed.
