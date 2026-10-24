# Last Seven Days News Research and Publishing Runbook

Use this runbook only when the repository owner explicitly asks an AI agent to read this file or to run the last seven days news workflow. This is a manual workflow. It must never create or reactivate a recurring, scheduled, or unattended publishing task.

For a ready-to-use prompt for ChatGPT, Codex, VS Code, or a GitHub-connected agent, see `docs/PROMPT_LAST_SEVEN_DAYS_NEWS.md`.

Read `AGENTS.md`, `docs/ARTICLE_RESEARCH_AND_PUBLISHING.md`, `docs/CONTENT_STYLE.md`, `docs/AUTOMATION.md`, and `docs/SEMRUSH_KEYWORD_BACKLOG.md` completely before starting. This file adds a news discovery mode. It does not replace the site's safety, writing, validation, or deployment rules.

## Interpret the owner's command

The owner's wording controls the endpoint:

1. If asked to **research**, search the required date window and return the qualified story list with sources. Do not create article files.
2. If asked to **write** or **draft**, research the window, create the qualified articles and images, validate, build, and inspect the static export and sitemaps, then stop before git add, commit, push, or deployment.
3. If asked to use `docs/PROMPT_LAST_SEVEN_DAYS_NEWS.md` or to **publish**, research the window, create the qualified articles and images, validate, build, commit the intended files, push to `main`, monitor deployment, and verify every live page.

Do not treat the existence of this file, a new day, or an earlier run as permission to begin.

## Exact seven day window

At the start of the run, record the current date and time in Asia/Kolkata. Search the seven calendar days ending on that date, inclusive. State the exact start and end dates in the run report.

Use the date when the event or announcement happened, not merely the date when a later article repeated it. A story qualifies only when the material event occurred or was first officially announced within the window. If the date is unclear, verify it before selection.

## Coverage to search

Search broadly enough to find major developments in:

- ChatGPT and OpenAI
- Claude and Anthropic
- Gemini, Google AI, and Google DeepMind
- Perplexity
- other important AI models and model providers
- newly launched AI tools with meaningful capabilities or adoption
- major AI safety, security, policy, infrastructure, and research developments
- genuinely important technology breakthroughs outside AI when they materially affect ordinary users, developers, or businesses

Use current web research for every run. Search official newsrooms, product blogs, documentation, changelogs, status pages, model cards, research papers, standards bodies, regulator publications, and maintainer repositories. Use reputable technology reporting to discover stories and provide independent context.

## What counts as major news

A story qualifies when it is new within the window, independently verifiable, relevant to Tech Updates readers, and materially changes at least one of the following:

- what a widely used product or model can do
- who can access it, where it is available, or what it costs
- a meaningful workflow for users, developers, creators, or businesses
- security, privacy, reliability, safety, or regulatory risk
- the competitive direction of an important technology market
- the state of credible technical or scientific knowledge

Exclude rumors, leaks without confirmation, recycled announcements, minor interface experiments, routine promotional posts, small wording changes, unsupported benchmark claims, and stories that differ only superficially from an existing Tech Updates article.

There is no fixed article quota. Publish every distinct story that clearly passes the significance, freshness, duplication, and verification tests. If no story qualifies, report that result and publish nothing. Never lower the standard to fill a batch.

## Source and fact checking standard

Use at least two current authoritative sources for every article. Whenever possible, use:

1. the primary source that establishes the announcement or event, such as an official release, documentation page, research paper, filing, status page, or repository; and
2. a second authoritative source or reputable independent report that confirms the facts or explains their impact.

Open and read the sources. Search snippets, social posts, Reddit comments, reposts, and AI summaries are not sufficient evidence. Attribute claims precisely and distinguish confirmed facts, company claims, early results, user reports, expert opinion, and editorial inference.

Verify names, dates, availability, regions, plans, prices, version numbers, limitations, benchmarks, and quotations. Do not claim hands on testing unless the run actually performed and documented the test. Do not publish a rumor as news.

## Topic selection and duplication

Before selecting a story, inspect existing article titles, slugs, descriptions, tags, primary intents, and recent publication history. Do not publish a second article that answers the same intent or repeats the same event.

Combine several announcements only when they form one coherent story for the same reader. Split them when each event has a distinct search intent and enough verified substance for a complete article. Do not turn several brands into a thin roundup merely to increase article count.

Record every selected and rejected candidate with its event date, sources, category, significance reason, and duplication decision.

## Category rules

Use the narrowest accurate existing category:

- Use `ChatGPT` for news centered on ChatGPT.
- Use `OpenAI` for broader OpenAI company, API, research, or model news that is not mainly a ChatGPT story.
- Use `Claude` for Claude or Anthropic news.
- Use `Gemini` for Gemini news.
- Use `Perplexity` for Perplexity news.
- Use `AI News` for cross-industry AI developments, other important models, major new AI tools, AI research breakthroughs, and AI stories without a more accurate dedicated category.
- Use another existing technology category when a major non-AI story clearly belongs there.
- Use `Alternatives` only for a requested alternatives comparison, never for a normal product launch or breaking-news article.

The public AI News category URL is `/ai-news/`. New articles continue to use date-free URLs under `/articles/topic-slug/`.

## News article contract

Every selected story receives its own original Markdown file and distinct 16:9 editorial image. Follow the shared frontmatter and image contracts in `AGENTS.md` and the `AI News and breaking news template` in `docs/CONTENT_STYLE.md`.

Set `contentType: news` in frontmatter for every article created through this workflow, including stories assigned to ChatGPT, OpenAI, Claude, Gemini, Perplexity, or another brand category. This tells the content validator to require the news heading structure. `AI News` articles also use that structure automatically.

Before the first H2 heading, write a concise opening summary that states what happened, when it happened, who is affected, and why it matters. The frontmatter description must also work as a clear search summary rendered beneath the headline.

Use these H2 sections in the exact order required by `docs/CONTENT_STYLE.md` so the site can build the table of contents automatically. Do not hand-code a second table of contents.

Include all of the following:

- at least three useful frontmatter key takeaways
- at least six frontmatter FAQs for structured data
- the matching readable FAQ section in the article body
- a `Related Reading` section near the end with two to four relevant existing internal links when available
- clear source links in the prose beside the factual claims they support
- practical implications rather than announcement paraphrasing
- important limitations, unknowns, and what readers should watch next

The page template automatically renders the description, key takeaways, table of contents, related article cards, FAQ schema, NewsArticle schema, and sitemap entry. The Markdown must supply accurate content for those systems.

## Human writing and editorial SEO

Apply senior editorial SEO judgment without claiming personal experience or a specific number of years. Write for the reader first, then make the page easy for search engines to understand.

- Match one clear primary search intent per article.
- Use a specific, factual title of roughly 55 to 65 characters when natural.
- Write a useful description of roughly 145 to 160 characters.
- Put the main answer and news value in the first 100 words.
- Use natural keyword variants in headings and prose without repetition or stuffing.
- Prefer concrete nouns, dates, products, and consequences over hype.
- Avoid clickbait, vague superlatives, generic introductions, AI clichés, and copied press-release language.
- Use short paragraphs, active voice, varied sentence rhythm, and simple human English.
- Do not use underscore characters in reader-facing titles, descriptions, headings, or prose.
- Do not use em dashes or en dashes. Avoid ordinary hyphens in prose by rewriting the sentence. Keep a hyphen only when an official product name, URL, filename, code, or required technical syntax needs it.
- Do not invent experience, quotes, traffic claims, rankings, test results, or certainty.

## Validation and publication

Run:

```bash
npm run validate:content
npm run build
```

Fix every failure. Confirm that each selected category route builds, `/sitemap.xml` is a sitemap index, and each new article appears in its generated category sitemap under `/sitemaps/category-slug/sitemap.xml`. For the full prompt or a publish request, commit only intended files, push to `main`, confirm GitHub Actions succeeds, confirm Hostinger deploys, then open every new article URL, `/ai-news/` when used, the homepage, relevant brand category pages, the master sitemap index, and each relevant category sitemap.

Do not report an article as published until the commit, push, workflow, deployment, and live checks have succeeded.

## Required run report

Report:

- the exact Asia/Kolkata seven day window
- every candidate considered and why it was selected or rejected
- the event date and primary search intent for each selected story
- primary and independent sources
- category, title, slug, article path, image path, and word count
- internal links and FAQ coverage
- validation and build results
- for a draft batch, the complete intended file manifest and confirmation that no files were staged, committed, pushed, or deployed
- for publication, the commit, push, workflow, deployment, article URLs, category URLs, homepage, and sitemap checks

Clearly report access problems, unresolved facts, duplicate conflicts, and any story withheld because it did not meet the evidence standard.
