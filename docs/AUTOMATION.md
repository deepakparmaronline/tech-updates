# Tech Updates Manual Publishing Policy

## Scheduled article publishing is retired

Do not create, restart, or execute `Tech Updates Daily Publisher` or any other recurring, scheduled, or unattended article-generation task. The former 6:00 AM Asia/Kolkata schedule, 8:00 AM target, five-article quota, category rotation, and automatic Semrush queue selection are retired.

Article work begins only after the repository owner supplies a Reddit research packet, an alternatives-article brief, another explicit topic list, an explicit instruction to use `docs/LAST_SEVEN_DAYS_NEWS_PUBLISHING.md`, or an explicit instruction to use `docs/PROMPT_SEMRUSH_QUEUE_PUBLISHING.md` in the current conversation. Silence or the passage of a day is not a publishing trigger.

Do not create or modify any task for `toolboxcard.tech`. Do not open, edit, test, or deploy that website.

## Manual run preflight

At the start of every owner-triggered article run, read these files from the working branch in full:

1. `AGENTS.md`
2. `docs/ARTICLE_RESEARCH_AND_PUBLISHING.md`
3. `docs/CONTENT_STYLE.md`
4. `docs/AUTOMATION.md`
5. `docs/SEMRUSH_KEYWORD_BACKLOG.md`
6. `docs/LAST_SEVEN_DAYS_NEWS_PUBLISHING.md` when that workflow is invoked
7. `docs/PROMPT_SEMRUSH_QUEUE_PUBLISHING.md` when that workflow is invoked
8. `data/semrush/README.md`
9. `data/semrush/used-keywords.csv`

The repository files and the owner's current brief are the source of truth. Do not rely on memory from an earlier run.

## Owner-controlled result

For a pasted Reddit packet, derive topics only from the supplied questions, posts, and comments. Preserve all distinct owner-supplied topics and the requested batch size. If the packet contains four, five, six, or seven topics, write that number of articles. Do not add unrelated topics or drop topics to force a standard quota.

For an alternatives request, write only the alternatives article or articles the owner requests. Preserve the named products and comparison intents. Do not automatically select an additional product.

For an explicit last seven days news request, use `docs/LAST_SEVEN_DAYS_NEWS_PUBLISHING.md` to find only major, verified developments inside the exact date window. This exception permits autonomous news discovery for that run only. It does not create a recurring schedule or fixed article quota.

For an explicit Semrush queue batch, enumerate every current queue CSV and create exactly one eligible article per queue according to `docs/PROMPT_SEMRUSH_QUEUE_PUBLISHING.md`. This exception permits queue-driven selection for that run only. It does not create a recurring schedule.

If the owner supplies raw material without an explicit topic list, cluster it by distinct reader intent. Merge or reject content only for a clear duplicate, article cannibalization, safety issue, or verification failure, and report the decision without choosing a replacement.

For every article, verify current claims with at least two authoritative sources, follow `docs/CONTENT_STYLE.md`, create a distinct 16:9 image, validate, and build. The topic-selection source does not change the established article structure.

The owner's requested scope controls the endpoint:

- For a draft or writing request, create and validate the files but do not push or deploy.
- For the last seven days news prompt, complete current research, qualifying articles, images, validation, the production build, static export checks, sitemap checks, commit, push, deployment monitoring, and live verification.
- For the explicit Semrush queue prompt, complete the articles, images, validation, production build, static export checks, sitemap checks, documentation checks, and used keyword ledger, then commit and push the verified batch to `main`, monitor deployment, and verify every live page.
- For a publishing request, commit and push, monitor the existing deployment pipeline, and verify every live article plus the homepage and relevant category pages.

## Semrush status

The saved Semrush exports and queues remain dated research. They are not the default topic source and must not be used to fill a Reddit, alternatives, or news batch. Use them when the owner explicitly invokes the Semrush queue prompt, explicitly requests Semrush research, or when a matching saved keyword adds context to an already supplied topic.

Never fabricate or silently refresh metrics. Never treat lack of Semrush access as a blocker for an owner-supplied Reddit or alternatives topic. For an explicit queue batch, update `data/semrush/used-keywords.csv` only after the complete batch passes content validation, the production build, static page checks, and sitemap checks. Append one row per verified queue article before the publication commit. Do not wait for live deployment, and do not add rows for an incomplete or failing batch.

## Deployment automation remains active

Stopping scheduled article creation does not disable the existing push-triggered GitHub Actions and Hostinger deployment flow. A manually approved push to `main` may still validate, build, publish generated output to `hostinger-dist`, and trigger Hostinger.

Never claim that an article is published until the commit, GitHub workflow, Hostinger deployment, and live URL checks succeed. If the owner requested a draft only, never describe the validated local files as published.

## Safe operation

Write only to `deepakparmaronline/tech-updates`. Routine article files belong under `content/articles/` and `public/images/`. Small compatibility updates to the category registry, content validator, or research documentation are allowed only when required by the approved manual publishing system. Never change credentials, permissions, DNS, hosting, repository security, history, or unrelated websites.

If GitHub requires an approval that cannot be completed, preserve the completed files and report the exact blocker.
