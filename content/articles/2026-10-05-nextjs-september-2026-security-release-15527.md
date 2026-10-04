---
title: "Next.js 15.5.27 Security Release: Upgrade Now"
description: "Next.js 15.5.27 fixes three medium-severity issues in the 15.5 line. Here is what the September 2026 release means for App Router sites."
category: Development
author: Tech Updates
date: 2026-10-05
readingTime: "8 min read"
featuredImage: "/images/nextjs-september-2026-security-release-15527.svg"
tags:
  - Next.js
  - security
  - React
  - App Router
  - web development
keyTakeaways:
  - "Next.js 15.5.27 is the September 2026 Maintenance LTS security release for the 15.5 line."
  - "The release fixes three medium-severity issues involving metadata image routes and cache behavior."
  - "Next.js 16.3.8 is the corresponding Active LTS security release."
  - "Upgrade through a tested dependency change rather than an untested production edit."
faqs:
  - question: "What does Next.js 15.5.27 fix?"
    answer: "The release includes security fixes for information disclosure through App Router metadata image routes and two cache-poisoning issues affecting self-hosted Next.js applications."
  - question: "Is Next.js 15.5.27 still supported?"
    answer: "Yes. Next.js lists 15.5.27 as the Maintenance LTS release for the September 2026 security update."
  - question: "Should Next.js 15 users upgrade to 16?"
    answer: "Not necessarily. Projects can move to patched 15.5.27 while planning a larger major-version upgrade separately."
  - question: "Does the release affect every Next.js application?"
    answer: "Impact depends on the vulnerable features and application setup. Teams should review the official advisory and patch their supported release line."
  - question: "Is this the same as the September 22 critical update?"
    answer: "No. September 22 was an out-of-band update with 15.5.26 and 16.3.6. September 30 brought 15.5.27 and 16.3.8."
  - question: "What should I test after upgrading?"
    answer: "Run the production build and tests, then check metadata images, caching, dynamic routes and critical user flows."
---

A recent Reddit discussion in r/nextjs asked whether developers had already patched the scheduled September 30 security release. That question was reasonable because Next.js had already shipped an out-of-band security update on September 22.

The scheduled release is now available.

Next.js lists 15.5.27 as the Maintenance LTS release and 16.3.8 as the Active LTS release. The September 30 release addresses seven vulnerabilities across the two release lines. The 15.5.27 branch contains three medium-severity security fixes.

For a production App Router project, this is a patching task, not a reason to redesign the application.

## What Happened?

Next.js published its September 2026 security release on September 30.

The official Next.js release notes recommend upgrading to 16.3.8 for Active LTS or 15.5.27 for Maintenance LTS.

The GitHub release information lists the 15.5.27 fixes as information disclosure in App Router metadata image routes through a dynamicParams bypass, cache poisoning of SSG and ISR pages in self-hosted applications, and cache poisoning in SSG or ISR rendering that can lead to cross-user content substitution and persistent denial of service.

The corresponding 16.3.8 release also fixes a high-severity Server-Side Request Forgery issue in Image Optimization, plus other medium and low severity issues.

## Why People Are Talking About It

The timing matters.

Next.js has moved toward a formal security release process. The September 22 out-of-band release addressed a critical upstream issue with 15.5.26 and 16.3.6.

Developers therefore had two security updates in a short period.

That can create upgrade fatigue. Teams may patch the first release and then assume the next release is optional. It is safer to check the exact production version against the latest supported security release.

The right response is not to redesign the app. It is to patch the supported line and test it.

## What Users Experienced

The Reddit discussion around the scheduled release showed a familiar split. Some developers had already patched the previous release. Others were waiting for the official September 30 build.

The safest path is neither ignore it nor change everything immediately.

Patch the supported release line, run the build and tests, then deploy through the normal process.

A project on 15.5 does not need to move to 16 just because 16.3.8 is also available.

## Why It Happens

The September release includes issues involving metadata image routes and caching.

Caching bugs are difficult because a page may look correct during normal testing while a special combination of routes, parameters and cached content produces the security problem.

The Next.js release notes specifically mention self-hosted SSG and ISR applications. Teams running their own infrastructure should therefore test the same deployment model used in production.

Security patching is more than changing one version string. It means checking whether the affected behavior exists in the application and then validating the result.

## Working Fixes

First, identify the version actually deployed. Check package.json, the lockfile and the production build.

If the project is on the 15.5 release line, move to 15.5.27. If it is on the 16.3 line, move to 16.3.8.

Update the dependency and lockfile together.

Run a clean dependency install, then run the production build and the full test suite.

For App Router projects, check dynamic routes, metadata, image routes, caching behavior and important user flows.

If the application is self-hosted, test the same production-like environment. A local development server does not reproduce every production cache behavior.

Deploy to staging first where possible. Watch logs and cache behavior, then move to production.

## What Doesn't Work

Do not stay on 15.5.26 simply because the September 22 patch worked.

Do not jump from 15.5 to 16 solely because 16.3.8 is newer. A major upgrade should be planned and tested separately.

Do not assume a successful development build proves production caching is safe.

Do not patch the package while forgetting the lockfile. Reproducible deployments depend on both.

Do not copy an advisory into a ticket without checking whether the application uses the affected features.

## Official Response

Next.js says the September 30 security release is available now and recommends 16.3.8 or 15.5.27.

The official GitHub release notes provide the detailed list of fixes. For 15.5.27, the listed fixes are medium severity. For 16.3.8, the release includes a high-severity SSRF issue plus medium and low severity fixes.

Next.js also announced a more regular security release process, so teams should treat version checks as normal maintenance.

## Key Takeaways

- Patch Next.js 15.5 projects to 15.5.27.
- Next.js 16 users should move to 16.3.8.
- Test metadata, dynamic routes and caching after the upgrade.
- Keep major-version migration separate from urgent security patching.
- Check the production deployment model, especially for self-hosted apps.

## Related Reading

- Next.js September 2026 security release: https://nextjs.org/blog
- Next.js releases: https://github.com/vercel/next.js/releases
- Next.js security guidance: https://nextjs.org/blog/security-update-2025-12-11

## FAQ

**What does Next.js 15.5.27 fix?**

The release includes security fixes for information disclosure through App Router metadata image routes and two cache-poisoning issues affecting self-hosted Next.js applications.

**Is Next.js 15.5.27 still supported?**

Yes. Next.js lists 15.5.27 as the Maintenance LTS release for the September 2026 security update.

**Should Next.js 15 users upgrade to 16?**

Not necessarily. Projects can move to patched 15.5.27 while planning a larger major-version upgrade separately.

**Does the release affect every Next.js application?**

Impact depends on the vulnerable features and application setup. Teams should review the official advisory and patch their supported release line.

**Is this the same as the September 22 critical update?**

No. September 22 was an out-of-band update with 15.5.26 and 16.3.6. September 30 brought 15.5.27 and 16.3.8.

**What should I test after upgrading?**

Run the production build and tests, then check metadata images, caching, dynamic routes and critical user flows.
