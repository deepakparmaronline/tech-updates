# Copy and Paste Prompt: Publish Last Seven Days News

Use the full publishing prompt in Codex for VS Code, Codex CLI, or a Codex cloud environment with `deepakparmaronline/tech-updates` checked out. It authorizes Codex to create the complete batch, commit it, push it to `main`, monitor deployment, and verify the live site.

The standard GitHub app in ordinary ChatGPT is read-only. It can inspect the repository but cannot edit files, run the build, or push changes. If only that connector is available, use the research handoff prompt later in this file and pass its result to Codex. A user statement granting permission does not add tools that the environment does not have. See [OpenAI's GitHub connection documentation](https://help.openai.com/en/articles/11145903-connecting-github-to-chatgpt).

Neither prompt creates a recurring or scheduled task.

## Full Codex publishing prompt

```text
Work in a writable checkout of the Tech Updates repository `deepakparmaronline/tech-updates` from the current `main` branch. Confirm the Git remote and branch before editing. This prompt explicitly authorizes you to commit the verified changes and push them to `main`. Never force push.

This is an explicit, one-time manual request to research, write, publish, and verify articles about the major technology news from the last seven calendar days. Execute the work by editing the repository. Do not merely return a plan or paste article drafts into chat. Do not create, resume, or modify any recurring, scheduled, background, or unattended task.

Before research, verify that you have a writable repository checkout, current web access, image generation that can save files, a terminal, Git push access, GitHub Actions visibility, and the ability to inspect the live site. If you have only the read-only ChatGPT GitHub connector, do not claim that permission alone solves the limitation. Switch to the GitHub research handoff instructions in this file, complete that handoff, and stop.

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

After all local checks pass, inspect the Git diff and stage only the intended article files, image files, and any narrowly required compatibility or documentation changes. Commit them to `main` with a clear message and push to `origin/main`. Confirm that the GitHub validation, production build, and Hostinger branch workflows succeed. Confirm that Hostinger deploys the generated branch. Open every new live article URL and verify the homepage, every relevant category page, `/ai-news/` when used, the live master sitemap index, and every relevant category sitemap.

If the environment cannot browse current sources, create and save distinct article images, edit repository files, run content validation, run the production build, inspect the static export, push to `main`, inspect workflows, or verify the live site, complete every safe step available and report the exact blocker without claiming publication. Stop and ask me only if the workflow requires a new login, OAuth grant, CAPTCHA, OTP, 2FA, payment, destructive action, permission change, DNS or hosting change, force push, or a decision that would materially change the requested scope. Never expose credentials or authentication data.

Do not claim that any article is published until the commit, push, workflows, Hostinger deployment, and live checks all succeed.

Finish with a concise run report containing:

- exact Asia/Kolkata research window
- candidates selected and rejected with reasons
- event dates, categories, titles, slugs, and primary search intents
- source links used for each article
- article paths, image paths, and word counts
- validation and build results
- committed file manifest, commit hash, and push result
- GitHub Actions and Hostinger deployment results
- every verified article, category, homepage, master sitemap, and category sitemap URL
- any unresolved fact, access problem, or blocker

Begin now and continue autonomously until the complete news batch is published and verified, or until a repository-defined stop condition occurs.
```

## GitHub-connected ChatGPT research handoff prompt

Use this in ordinary ChatGPT when the standard GitHub app is connected. It performs useful research and produces a handoff for Codex without pretending it can edit or publish.

```text
Inspect the connected Tech Updates repository `deepakparmaronline/tech-updates` on `main`. The standard ChatGPT GitHub connection is read-only, so do not claim that you edited, committed, built, or published anything.

Read `AGENTS.md`, `docs/ARTICLE_RESEARCH_AND_PUBLISHING.md`, `docs/CONTENT_STYLE.md`, `docs/AUTOMATION.md`, `docs/LAST_SEVEN_DAYS_NEWS_PUBLISHING.md`, and the current article index completely enough to apply their research, date-window, significance, source, duplication, category, and internal-link rules.

Research the seven calendar days ending today in Asia/Kolkata, inclusive. Find only major, independently verifiable news involving ChatGPT, OpenAI, Claude, Anthropic, Gemini, Google AI, Google DeepMind, Perplexity, other important AI models, meaningful new AI tools, AI research, safety, security, policy, infrastructure, and genuinely important broader technology breakthroughs.

Do not write files, create images, commit, push, deploy, or schedule future work. Produce a Codex handoff packet containing the exact research window, selected and rejected candidates, event dates, proposed categories, primary search intents, proposed titles and slugs, image concepts, suggested existing internal links, duplication findings, and links to the primary and independent sources. If nothing qualifies, say so clearly. End with this instruction for Codex: read the current repository rules, independently verify the sources, implement the qualified batch, validate and build it, commit and push it to `main`, monitor deployment, and verify the live pages.
```

## Connection requirements

Full publishing requires Codex with:

- a writable checkout of the correct repository and current `main` branch
- current web access for news verification
- an image-generation capability that can save the resulting files under `public/images/`
- a terminal capable of running `npm run validate:content` and `npm run build`
- access to the generated `out/` directory for static page and sitemap verification
- permission to commit and push to `main`
- access to GitHub Actions status and the live website

The ordinary ChatGPT GitHub app provides repository reading for analysis and search, not a writable checkout or Git push. Use its handoff prompt, then run the full prompt in Codex.
