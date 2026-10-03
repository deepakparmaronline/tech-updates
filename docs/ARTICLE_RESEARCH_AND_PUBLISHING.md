# AI Article Research and Publishing Runbook

This is the source of truth for every scheduled or manual Tech Updates publishing run. Read this file completely, together with the root `AGENTS.md` and `docs/CONTENT_STYLE.md`, before opening Reddit, selecting topics, writing files, or publishing.

## Required outcome

Publish five original, deeply researched articles per successful daily run: one article for each category assigned to that rotation day. Each article begins with a current Reddit discussion, but Reddit is used only to discover reader interest, problems, language, and questions. Factual claims must be independently verified with authoritative sources.

## Schedule and rotation

The standard schedule is 11:00 AM Asia/Kolkata every day.

### Rotation Day 1

1. ChatGPT
2. OpenAI
3. Google
4. Gemini
5. Claude

### Rotation Day 2

1. Cursor
2. GitHub
3. Programming
4. Python
5. WordPress

### Rotation Day 3

1. SEO
2. Automation
3. AI Tools
4. Shopify
5. Development

After Rotation Day 3, restart at Rotation Day 1. Determine the next day from the last successful daily publishing commit and previous run report. A failed or partial run does not silently advance the rotation.

## Newly added categories

At the start of every run, inspect existing article frontmatter and the repository's category implementation. Preserve the original 15 categories and their order. Append any genuinely supported new category after Rotation Day 3, grouping added categories into extra rotation days of no more than five categories.

Every run must still target five distinct categories. If a final added-category day contains fewer than five new categories, fill the remaining positions with supported categories that have gone the longest without a new article. Never repeat a category within one run. Report every new category added to the rotation. If it is unclear whether a label is a supported website category, request approval rather than changing code or inventing a category.

## Phase 1: preflight

1. Pull or inspect the latest `main` branch.
2. Read `AGENTS.md`, this file, and `docs/CONTENT_STYLE.md` completely.
3. Inspect `content/articles/`, `public/images/`, recent commits, and the previous run report.
4. Determine the correct rotation day and five assigned categories.
5. Build a duplicate-avoidance list from existing titles, slugs, descriptions, tags, and recent topics.
6. Confirm that only new files under `content/articles/` and `public/images/` should be needed.

## Phase 2: Reddit research for each category

Repeat this process independently for each of the day's five categories.

1. Open <https://www.reddit.com/>.
2. Enter the exact category name in Reddit's visible search box.
3. Select **Posts**.
4. Do **not** apply a Today-only time filter. Use Reddit's general Posts results so useful discussions are not excluded by an artificial 24-hour window.
5. Prefer **Top** sorting when Reddit offers it. If Top is unavailable, use the best visible ranking and manually compare recency, votes, comment activity, relevance, and discussion quality.
6. Review at least **10 useful results when 10 are available**. Ignore advertisements, promoted posts, spam, duplicate posts, jokes without substance, unsupported rumors, and unrelated results.
7. Do not automatically choose the first result. Prefer a current thread with a genuine reader problem, meaningful comments, a distinct angle, and claims that can be verified.
8. Open the strongest thread. Read the complete original post, leading comments, useful replies, disagreements, attempted fixes, repeated questions, misconceptions, and unresolved points.
9. Record the query, thread title, URL, subreddit, age, visible score, visible comment count, and why it was chosen.

If the exact category search is too broad, try focused variants such as `[category] problem`, `[category] update`, `[category] error`, `[category] feature`, or `[category] workflow`, while retaining Posts and the general Posts search. Do not add a Today-only restriction. Do not claim a filter was applied unless it was visibly confirmed.

If no responsible topic exists in the initial results, try reasonable search variations and relevant subreddits. There is no mandatory 24-hour or 48-hour cutoff; select the most useful current discussion available and record the search scope. Never fabricate a trend. If no suitable topic exists, skip it and report every query attempted rather than publishing weak content.

## Phase 3: topic qualification

Reject a candidate that duplicates an existing article or substantially overlaps another article in the same daily batch. A follow-up is allowed only when a material new development creates a clearly different search intent.

Score candidates by:

- relevance to the assigned category;
- recency;
- meaningful comment depth, not only vote count;
- practical reader value;
- uniqueness within the site;
- ability to provide responsible solutions;
- current search interest; and
- availability of authoritative verification.

One Reddit thread must not generate multiple daily articles under different category labels.

## Phase 4: deep verification

For every selected topic, use fresh research. Verify important claims with at least two authoritative sources in addition to the Reddit discussion. Prefer official documentation, company announcements, support pages, release notes, maintainer repositories, status pages, original research, and standards. Use reputable secondary reporting only when a primary source is unavailable.

Check publication dates and distinguish facts, user reports, opinions, experiments, rumors, and inference. Reddit comments are not proof. Do not invent features, releases, outages, quotes, prices, statistics, dates, fixes, sources, user experiences, or test results.

If the Reddit premise is false, the article may correct the misconception with evidence. For high-stakes security, financial, medical, or legal implications, use especially cautious language and current authoritative sources.

## Phase 5: write the five articles

Follow `docs/CONTENT_STYLE.md` exactly. Each article must:

- be original and normally 1,500–2,000 words, never below 1,200;
- answer the main reader question early;
- use a useful problem-focused title and accurate description;
- explain what users are discussing without copying comments;
- separate verified facts from reports and opinions;
- give practical steps when appropriate;
- state limitations, risks, and ineffective approaches;
- cite primary sources in the prose;
- include all required headings;
- include at least three frontmatter key takeaways;
- include an FAQ section in the article body with accurate questions and answers;\n- include at least six accurate frontmatter FAQs for structured data; and
- link internally only to articles that exist.

Use `author: Tech Updates`, the real publication date, one assigned primary category, focused tags, and an accurate reading time. Name the source file `YYYY-MM-DD-topic-slug.md` and place it in `content/articles/`. The date is only part of the source filename; the public URL must be date-free: `/articles/topic-slug/`.

Do not make the finished article a summary of Reddit. It must stand alone as useful reporting supported by deeper research.

## Phase 6: create featured images

Create one distinct 16:9 editorial image per article. Store it under `public/images/` with a descriptive lowercase filename. Optimize it for the web. Avoid watermarks, spelling errors, large text blocks, copyrighted artwork, fake screenshots, misleading interfaces, and unsupported visual claims. Set the exact `/images/...` path in frontmatter and never overwrite an existing image.

## Phase 7: validate

Before committing, confirm that the run created one article and one image for each successful assigned category, with no unintended modifications.

Run:

```bash
npm run validate:content
npm run build
```

Fix every failure. Check unique titles and slugs, valid categories and dates, correct image paths, valid internal and source links, supported claims, and a successful static export. Never publish a partial or failing build.

## Phase 8: commit, deploy and verify

Review the diff. Routine publishing should contain only the new Markdown and image files. Commit to `main` with:

```text
Daily Tech Updates YYYY-MM-DD — Rotation Day N
```

Push to `deepakparmaronline/tech-updates`. Confirm that GitHub Actions succeeds and updates `hostinger-dist`, then confirm Hostinger completes deployment. Open every new date-free live article URL and verify the homepage and category pages display the new articles. Confirm the corresponding legacy date-based URL redirects to the date-free URL. Do not claim success before these checks pass.

## Safety and failure behavior

The publishing agent may research public sources, add the intended article and image files, validate, build, commit, push, monitor deployment, and verify the public site.

Stop before any new login, OAuth or permission grant, CAPTCHA, OTP, 2FA, payment, account-security change, repository-security change, DNS or hosting change, deletion, history rewrite, force-push, or publication outside this repository. Never bypass a security control or invent success. Preserve completed evidence and report the exact blocker.

## Required run report

Report:

- date, start and completion time;
- rotation day, assigned categories, new categories discovered, and next rotation day;
- for each category: Reddit query, Posts confirmation, ranking/scope used, chosen thread, subreddit, visible activity, selection reason, reader questions, and authoritative sources;
- for each article: title, category, Markdown file, image file, word count, date-free live URL, and legacy-URL redirect check;
- validation, build, commit, push, GitHub Actions, Hostinger, homepage, and category-page results; and
- every skipped topic, exception, failure, missing permission, or manual action required.

If nothing is published, state that directly and explain why. Accuracy and site integrity are more important than forcing a daily quota.
