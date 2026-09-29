# Hostinger Deployment Guide

## Option A: Hostinger Git integration

1. Push the project to a private or public GitHub repository named `tech-updates`.
2. In Hostinger hPanel, open the website and choose the Git/deployment integration available for the hosting plan.
3. Connect the repository and select the `main` branch.
4. Set the install command to `npm ci` and build command to `npm run build`.
5. Set the output/publication directory to `out`.
6. Add `NEXT_PUBLIC_SITE_URL=https://your-domain.com` in Hostinger's build environment.
7. Enable deployment on every push to `main` and run the first deployment.

Hostinger product screens and supported Git features vary by plan. Use the current hPanel labels shown in your account.

## Option B: Hostinger deployment hook

If Hostinger supplies a deployment webhook, add it to the GitHub repository's `production` environment as `HOSTINGER_DEPLOY_HOOK`. The included deployment workflow calls it only after the Build workflow succeeds on `main`.

## DNS and launch checks

- Point the domain using the DNS values supplied by Hostinger.
- Enable HTTPS before setting `NEXT_PUBLIC_SITE_URL`.
- Verify `/`, two article routes, two category routes, `/search/`, `/robots.txt`, and `/sitemap.xml`.
- Inspect the page source for canonical, description, Open Graph, Twitter, and JSON-LD fields.
- Confirm refreshes on nested URLs work. If not, configure Hostinger to serve directory `index.html` files for trailing-slash URLs.

## Rollback

Revert the publishing commit in GitHub and push the revert. Keep Hostinger's previous deployment available until the new deployment is verified.
