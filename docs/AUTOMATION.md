# Tech Updates Daily Publishing Automation

## Schedule and deadline

Create one recurring task named `Tech Updates Daily Publisher`. Start it every day at 6:00 AM Asia/Kolkata so the five article batch has time to research, build, deploy, and become live by the 8:00 AM target.

Do not create or modify any task for `toolboxcard.tech`. Do not open, edit, test, or deploy that website.

## Durable task instruction

At the start of every run, use the connected GitHub access to open `deepakparmaronline/tech-updates` and read these files from `main` in full:

1. `AGENTS.md`
2. `docs/ARTICLE_RESEARCH_AND_PUBLISHING.md`
3. `docs/CONTENT_STYLE.md`
4. `docs/AUTOMATION.md`
5. `docs/SEMRUSH_KEYWORD_BACKLOG.md`

The repository files are the source of truth. Do not rely on memory from an earlier run.

## Daily result

Publish exactly five English articles:

1. Three authority articles based on distinct low or medium difficulty questions.
2. Two `Alternatives` articles about two different emerging tools.

Use Semrush Keyword Magic Tool with the United States database. Authority research must use `Questions` and `All Keywords`. Choose KD 0 through 49 and reject KD 50 or higher. Alternatives research must search `[tool] alternatives` with `All Keywords`, prefer KD 0 through 29, and reject KD above 49.

If live Semrush access is unavailable, use only unused vetted entries from `docs/SEMRUSH_KEYWORD_BACKLOG.md`. Never fabricate metrics. Refresh the repository backlog after successful live research.

For each authority article, answer the primary keyword plus six to ten natural follow up questions. For every article, verify current claims with at least two authoritative sources, write in a simple human tone, avoid em dashes and en dashes, create a distinct 16:9 image, validate, build, commit, push, monitor deployment, and verify the live pages.

## Safe operation

Write only to `deepakparmaronline/tech-updates`. Daily content belongs under `content/articles/` and `public/images/`. Small compatibility updates to the category registry, content validator, or research documentation are allowed only when required by the approved publishing system. Never change credentials, permissions, DNS, hosting, repository security, history, or unrelated websites.

If GitHub requires an approval that cannot be completed unattended, preserve the completed files and report the exact blocker. Never claim that five articles are published until the commit, GitHub workflow, Hostinger deployment, and all five live URL checks succeed.
