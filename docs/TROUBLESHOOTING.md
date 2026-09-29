# Troubleshooting

## Build says a field is missing

Compare the article frontmatter with a working sample. YAML indentation matters, especially for `tags`, `keyTakeaways`, and `faqs`.

## Featured image is missing

The path must start with `/images/` and point to a real file in `public/images/`. Use a 16:9 image and an efficient web format.

## Article does not appear

Confirm the filename ends in `.md`, the build succeeded, and the deployment uses the newest `main` commit. Articles are sorted by the `date` field.

## Category page is empty

The article category must exactly match one canonical category in `lib/articles.ts`. Category matching is case-insensitive at the route level but validated at build time.

## Canonical URLs use the example domain

Set `NEXT_PUBLIC_SITE_URL` in GitHub and Hostinger before building. Rebuild because metadata is generated at build time.

## Nested route returns 404 on refresh

Deploy the contents of `out/` and configure the server for directory indexes. This project exports trailing-slash routes such as `/articles/example/index.html`.

## Deployment fails after a good build

Check the Hostinger connection or deployment-hook secret, production environment permissions, and provider logs. Do not rerun blindly if the previous upload might still be active.
