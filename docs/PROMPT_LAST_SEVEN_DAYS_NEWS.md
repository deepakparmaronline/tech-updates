# Copy and Paste Prompt for Last Seven Days News Publishing

Use this prompt in ChatGPT, ChatGPT Work, Codex in VS Code, Codex CLI, Codex Cloud, or another capable AI agent that has access to the `deepakparmaronline/tech-updates` repository and current web research.

The publishing version below gives the agent permission to create files, commit, push to `main`, and verify deployment. Use it only when you intend to publish. It does not create a recurring or scheduled task.

## Full publishing prompt

```text
Work in the Tech Updates repository `deepakparmaronline/tech-updates` on the `main` branch.

This is an explicit, one-time manual request to research, write, and publish the major technology news from the last seven calendar days. It is not permission to create, resume, or modify any recurring or scheduled task.

Before taking action, read these repository files completely from the current `main` branch:

1. `AGENTS.md`
2. `docs/ARTICLE_RESEARCH_AND_PUBLISHING.md`
3. `docs/CONTENT_STYLE.md`
4. `docs/AUTOMATION.md`
5. `docs/SEMRUSH_KEYWORD_BACKLOG.md`
6. `docs/LAST_SEVEN_DAYS_NEWS_PUBLISHING.md`
7. `data/semrush/README.md`
8. `data/semrush/used-keywords.csv`

Follow `docs/LAST_SEVEN_DAYS_NEWS_PUBLISHING.md` as the controlling workflow for this run. Follow `AGENTS.md` and the other repository instructions for safety, article structure, images, validation, Git, deployment, and live verification. If any required file is missing or unreadable, stop and report the exact problem instead of improvising.

Record the current date and time in Asia/Kolkata. Calculate and state the exact seven-calendar-day research window ending today, inclusive. Use current web research to find major developments whose material event or first official announcement occurred inside that window.

Search for major news involving ChatGPT, OpenAI, Claude, Anthropic, Gemini, Google AI, Google DeepMind, Perplexity, other important AI models, meaningful new AI tools, AI safety, security, policy, infrastructure, research breakthroughs, and genuinely important broader technology breakthroughs.

Select only stories that pass every significance, freshness, duplication, and verification rule in the runbook. Do not publish rumors, recycled announcements, minor interface changes, thin promotional stories, or topics already covered with the same intent. There is no fixed article quota. If no story qualifies, publish nothing and explain why.

For every qualifying story:

- use the narrowest accurate category
- use `AI News` for cross-industry AI news, important models without a dedicated category, major new AI tools, or AI breakthroughs without a narrower category
- set `contentType: news` in frontmatter
- create one original Markdown article under `content/articles/`
- create one distinct 16:9 editorial image under `public/images/`
- follow the exact news heading order in `docs/CONTENT_STYLE.md`
- include a clear opening summary before the first H2
- include at least three useful key takeaways
- include at least six frontmatter FAQs and the matching readable FAQ section
- include two to four relevant existing internal links when available
- cite important claims beside current primary or authoritative sources
- explain what happened, when it happened, why it matters, who is affected, limitations, unknowns, and what happens next
- write original, natural, human-sounding content at the required length
- apply senior editorial SEO judgment without claiming personal experience
- avoid underscores in reader-facing text, avoid em dashes and en dashes, and rewrite ordinary hyphenated prose when natural

Use at least two authoritative sources per article. Open and read the sources. Prefer the primary announcement, documentation, model card, research paper, filing, status page, standards publication, or maintainer repository. Add a reputable independent source when available. Clearly distinguish verified facts, company claims, reported information, and editorial inference.

Do not redesign the site, change dependencies, modify existing articles, hard-code articles into components, or alter unrelated files. New article URLs must remain date-free under `/articles/topic-slug/`. The AI News category URL is `/ai-news/`.

After creating all qualifying articles and images, run:

`npm run validate:content`
`npm run build`

Fix every in-scope failure. Confirm that all new article pages and category pages are included in the static export. Confirm that `/sitemap.xml` is a sitemap index and that every new article appears in the correct `/sitemaps/category-slug/sitemap.xml` file.

Then commit only the intended article and image files, plus a narrowly required compatibility fix if the repository instructions authorize it. Push the commit to `main`. Confirm the GitHub Actions workflow succeeds, confirm Hostinger deployment completes, and open every new live article URL. Also verify the homepage, every relevant category page, `/ai-news/` when used, the live master sitemap index, and every relevant category sitemap.

Stop and ask me only if the workflow requires a new login, OAuth grant, CAPTCHA, OTP, 2FA, payment, destructive action, permission change, DNS or hosting change, force push, or a decision that would materially change the requested scope. Never expose credentials or authentication data.

Do not claim publication success until the commit, push, workflow, deployment, and live-page checks have all succeeded.

Finish with a concise run report containing:

- exact Asia/Kolkata research window
- candidates selected and rejected with reasons
- event dates, categories, titles, slugs, and primary search intents
- source links used for each article
- article paths, image paths, and word counts
- validation and build results
- commit and push result
- workflow and deployment result
- every verified live URL, category URL, homepage check, and sitemap check
- any unresolved fact, access problem, or blocker

Begin now and continue autonomously until publication is verified or a repository-defined stop condition occurs.
```

## Draft without publishing

To create local or reviewable drafts without pushing, use the full prompt but replace its second paragraph with:

```text
This is an explicit, one-time manual request to research and draft the major technology news from the last seven calendar days. Create the articles and images, validate them, and run the production build. Do not commit, push, deploy, or describe the drafts as published.
```

Remove the paragraph that begins with `Then commit only the intended article and image files` and replace the final sentence with:

```text
Begin now and continue autonomously until the drafts pass validation and the production build, or a repository-defined stop condition occurs.
```

## Research only

To receive a qualified story list without creating files, use this shorter prompt:

```text
Work in or inspect the Tech Updates repository `deepakparmaronline/tech-updates` on `main`.

Read `AGENTS.md` and `docs/LAST_SEVEN_DAYS_NEWS_PUBLISHING.md` completely. Follow the research, date-window, significance, source, duplication, and category rules in those files.

Research the seven calendar days ending today in Asia/Kolkata, inclusive. Find only major, independently verifiable news involving ChatGPT, OpenAI, Claude, Anthropic, Gemini, Google AI, Google DeepMind, Perplexity, other important AI models, meaningful new AI tools, AI research, safety, security, policy, infrastructure, and genuinely important broader technology breakthroughs.

Do not write files, create images, commit, push, deploy, or schedule future work. Return a table of selected and rejected candidates with event dates, proposed categories, primary search intents, significance reasons, duplication findings, and links to the primary and independent sources. If nothing qualifies, say so clearly.
```

## Connection requirements

The agent needs:

- read and write access to the correct repository for drafting
- permission to push to `main` for the full publishing prompt
- current web access for news verification
- the repository's normal image-generation or image-creation capability
- access to GitHub Actions and deployment status for full live verification

If the agent has only GitHub read access, use the research-only prompt. If it can edit but cannot push, use the draft version.
