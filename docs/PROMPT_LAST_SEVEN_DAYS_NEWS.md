# Copy and Paste Prompt: Prepare a Last Seven Days News Batch

Use this prompt in ChatGPT with the `deepakparmaronline/tech-updates` GitHub repository connected, Codex in VS Code with the repository open, Codex CLI, Codex Cloud, or another capable AI agent with repository write access, current web research, image generation, and a terminal that can run the project checks.

The prompt prepares a complete, validated, commit-ready news batch. It intentionally stops before `git add`, commit, push, deployment, and live verification. The repository owner performs the final commit and push to `main`, which triggers the existing GitHub Actions and Hostinger deployment pipeline. It never creates a recurring or scheduled task.

## Commit-ready news prompt

```text
Work in the Tech Updates repository `deepakparmaronline/tech-updates` from the current `main` branch. In VS Code or Codex CLI, use the repository currently open in the workspace and confirm its Git remote before editing. In ChatGPT with GitHub connected, open that exact repository and branch. Stop if the repository or branch does not match.

This is an explicit, one-time manual request to research and prepare commit-ready articles about the major technology news from the last seven calendar days. Execute the work by editing the repository. Do not merely return a plan or paste article drafts into chat. Do not run git add, commit, push, deploy, or create, resume, or modify any recurring or scheduled task.

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

Stop after all local checks pass. Leave only the intended article files, image files, and any narrowly required compatibility or documentation changes in the workspace. Do not stage or commit them. Provide the exact file manifest the repository owner should review, commit, and push to `main`. Do not monitor GitHub Actions or Hostinger, because those actions begin only after the owner's push.

If the environment cannot browse current sources, create and save distinct article images, edit repository files, run content validation, run the production build, or inspect the static export, report the exact blocker and do not describe the batch as commit-ready. Stop and ask me only if the workflow requires a new login, OAuth grant, CAPTCHA, OTP, 2FA, payment, destructive action, permission change, DNS or hosting change, force push, or a decision that would materially change the requested scope. Never expose credentials or authentication data.

Do not claim that any article is published. Report the batch as commit-ready only after every required local check succeeds.

Finish with a concise run report containing:

- exact Asia/Kolkata research window
- candidates selected and rejected with reasons
- event dates, categories, titles, slugs, and primary search intents
- source links used for each article
- article paths, image paths, and word counts
- validation and build results
- static article, category, homepage data, master sitemap index, and category sitemap checks
- the complete list of intended files the owner should review, commit, and push
- confirmation that no git add, commit, push, deployment, or live verification was performed
- any unresolved fact, access problem, or blocker

Begin now and continue autonomously until the complete news batch passes every required local check and is ready for the owner's commit, or until a repository-defined stop condition occurs. Stop before any Git commit or push.
```

## How to use it

For VS Code Codex or Codex CLI, open the repository root, start a new agent session, and paste the complete prompt above. For ChatGPT with GitHub connected, select the `deepakparmaronline/tech-updates` repository and paste the same prompt. The prompt is intentionally identical in both environments.

Do not use a read-only GitHub connection for the commit-ready prompt. If the connected agent cannot save images or run repository commands, use the research-only prompt below instead.

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

- read and write access to the correct repository and current `main` branch
- current web access for news verification
- an image-generation capability that can save the resulting files under `public/images/`
- a terminal capable of running `npm run validate:content` and `npm run build`
- access to the generated `out/` directory for static page and sitemap verification

The prompt does not require permission to commit or push. If the agent has only GitHub read access, cannot save images, or cannot run the project checks, use the research-only prompt.
