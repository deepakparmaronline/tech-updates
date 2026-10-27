# Daily AI News Publishing Runbook

Use this runbook only inside the existing recurring task named `Tech Updates Daily Publisher`. It extends that task by exactly two AI News articles per daily run. It does not create a second schedule, branch, commit, or deployment flow, and it does not change the separate manual workflow in `docs/LAST_SEVEN_DAYS_NEWS_PUBLISHING.md`.

Read `AGENTS.md`, `docs/ARTICLE_RESEARCH_AND_PUBLISHING.md`, `docs/CONTENT_STYLE.md`, `docs/AUTOMATION.md`, and `docs/SEMRUSH_KEYWORD_BACKLOG.md` completely before starting.

## Exact 24-hour window

At preflight, record the current Asia/Kolkata date and time. The eligible window begins exactly 24 hours earlier and ends at the recorded run time. Use the time when the material event happened or was first officially announced, not the time when another site later repeated it. Verify the announcement time when the boundary is close or unclear.

Do not backfill an older story merely to fill the quota. If fewer than two distinct stories can be verified inside the window, stop before the first repository write and report the exact shortfall.

## Required output

Select exactly two distinct stories in addition to all Semrush queue topics. Each story receives its own original Markdown article and distinct 16:9 editorial image.

Both articles must set:

- `category: AI News`
- `contentType: news`

This guarantees that both appear in the canonical AI News archive at `/ai-news/` and use the news validation template. Their public URLs remain date-free under `/articles/topic-slug/`.

The two AI News articles are not Semrush queue articles. Do not append ledger rows for them. The daily used-keyword ledger receives exactly one current-date row per Semrush queue article and no news-only rows.

## Coverage

Search broadly across the AI industry. Eligible stories include material developments involving:

- AI models, model providers, clouds, APIs, inference, and infrastructure
- AI tools such as coding assistants, creative tools, search products, and productivity systems
- AI agents, agentic workflows, orchestration, automation platforms, and integrations
- major product launches, feature releases, access changes, pricing changes, and availability changes
- AI security, hacking, vulnerabilities, privacy, safety, reliability, misuse, and incident response
- significant AI research, model cards, benchmarks, standards, policy, regulation, and legal developments
- substantive public statements from AI company leaders or researchers about a newly announced plan, product, model, safety action, or industry direction
- practical AI guides only when they explain how to use or respond to a concrete change first announced inside the 24-hour window

Coverage is not limited to ChatGPT, OpenAI, Claude, Anthropic, Gemini, Google, or Perplexity. Other credible companies, open-source projects, models, tools, and ecosystems are eligible.

## Selection standard

Choose the two highest-value stories that are new, independently verifiable, useful to Tech Updates readers, and materially change capability, access, cost, workflow, security, privacy, reliability, policy, or market direction.

Exclude rumors, unconfirmed leaks, recycled announcements, routine promotional posts, trivial interface experiments, unsupported benchmark claims, speculative executive commentary, and stories that duplicate an existing Tech Updates article or the other story selected for the same run.

Before selection, inspect existing titles, slugs, descriptions, tags, primary intents, and recent publication history. A follow-up is allowed only when the new event materially changes the facts and the article clearly explains what is new.

## Sources and fact checking

Use at least two current authoritative sources per article. Prefer the primary source that establishes the event—such as an official newsroom, product blog, documentation page, changelog, status page, model card, research paper, filing, regulator publication, standards body, or maintainer repository—plus a reputable independent report or second authoritative source that confirms the facts or explains impact.

Open and read every source. Search snippets, social posts, reposts, Reddit comments, and AI summaries are discovery aids, not sufficient evidence. Verify names, dates, times, regions, plans, prices, versions, availability, limitations, benchmark conditions, and quotations. Distinguish confirmed facts, company claims, early results, user reports, expert opinion, and editorial inference. Never claim hands-on testing unless the run actually performed and documented it.

## Writing and publication

Follow the AI News and breaking news template in `docs/CONTENT_STYLE.md`. Put the main answer and news value in the first 100 words, explain who is affected and what they should do, cite important claims in the prose, include the required FAQ section and frontmatter, and meet the repository's originality and word-count rules.

Create both news articles and their images as part of the same complete `daily-publisher-YYYY-MM-DD-standalone` batch as the Semrush queue articles. Prepare the entire batch before the first GitHub write. Never publish a news-only partial batch and never create a second branch, pull request, schedule, or deployment path.

After validation and deployment, verify both article pages, `/ai-news/`, the homepage, `/sitemap.xml`, and `/sitemaps/ai-news/sitemap.xml`, along with every other URL required by `docs/AUTOMATION.md`.
