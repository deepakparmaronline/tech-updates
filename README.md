# Tech Updates

**Real Tech Problems. Real Solutions.**

A production-ready, static Next.js 15 technology publication. The layout is code-owned and permanent; publishing means adding one Markdown file and one featured image.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Production verification:

```bash
npm run build
```

The static website is written to `out/`.

## Publish an article

1. Copy an existing file in `content/articles/`.
2. Name it `YYYY-MM-DD-topic-slug.md`.
3. Fill every frontmatter field, including at least three takeaways and six FAQs.
4. Add its 16:9 image under `public/images/`.
5. Write at least 1,200 original words using the required headings.
6. Run `npm run validate:content` and `npm run build`.
7. Commit and push. No component or layout edit is required.

## Architecture

- `app/` — reusable routes, metadata, sitemap, robots, category and article pages
- `components/` — fixed header, footer, cards, search, theme and article tools
- `content/articles/` — the only everyday publishing surface
- `lib/articles.ts` — the single article parser and index
- `scripts/validate-content.mjs` — frontmatter, image, structure and link checks
- `.github/workflows/` — validation, build, artifact and Hostinger trigger workflows
- `docs/` — deployment, automation, editorial and troubleshooting guides

## Environment

`NEXT_PUBLIC_SITE_URL` is required in production. It must be the public HTTPS origin without a trailing slash. It powers canonical URLs, sitemap entries, schema, and social metadata.

## Important production notes

The newsletter form is intentionally presentation-only until a chosen email provider and privacy text are configured. Social links are icons without external destinations until official profiles are supplied. The generated sample art is reusable demonstration art; replace each file with a distinct 16:9 editorial image before a public launch.

See [Deployment](docs/DEPLOYMENT.md), [Automation](docs/AUTOMATION.md), [Content Style](docs/CONTENT_STYLE.md), and [Troubleshooting](docs/TROUBLESHOOTING.md).
