---
title: "Shopify’s New Admin Design: What Merchants Need to Know"
description: "Shopify began rolling out a redesigned admin in September 2026. Here is what changed and what app developers should check."
category: Shopify
author: Tech Updates
date: 2026-10-04
readingTime: "8 min read"
featuredImage: "/images/shopify-new-admin-design-merchants-apps.svg"
tags:
  - Shopify
  - Shopify admin
  - Sidekick
  - Polaris
  - ecommerce
keyTakeaways:
  - "Shopify began rolling out a redesigned admin on September 15, 2026."
  - "Search, notifications, the store picker and Sidekick changed position or presentation."
  - "The rollout is progressive, so different stores can show different admin designs."
  - "App developers should test embedded experiences across old and new admin designs."
faqs:
  - question: "When did Shopify start the new admin rollout?"
    answer: "Shopify says the rollout began on September 15, 2026."
  - question: "Do merchants need to turn on the new admin design?"
    answer: "No. Shopify says the new design rolls out automatically."
  - question: "Why does my admin look different from another store?"
    answer: "The rollout is progressive, so stores can receive the new design at different times."
  - question: "Did Shopify move Sidekick?"
    answer: "Yes. Sidekick moved from a side panel to a floating chat interface."
  - question: "Do Shopify apps need to be updated?"
    answer: "Not always. Some extension types receive the new styles automatically."
  - question: "What is Polaris 2.0?"
    answer: "Polaris 2.0 is Shopify’s refreshed visual system for supported embedded app surfaces."
---

Shopify merchants have been reacting to a major admin interface change that started rolling out on September 15, 2026. One Reddit post about unexpected Shopify updates received visible engagement from merchants who said the changes disrupted familiar workflows.

The change is real, but it is more structured than a random interface rewrite. Shopify says it is rolling out a new admin design with updated colors, typography, spacing and icons. Search, notifications and the store picker moved into side navigation, while Sidekick moved from a side panel to a floating chat interface.

For merchants, the main issue is learning the new layout. For app developers, the change is more important because the new design affects embedded experiences.

## What Happened?

Shopify began progressively rolling out the redesigned admin on September 15. Shopify says merchants do not need to enable anything manually; the new look arrives as part of the rollout.

The navigation has changed, including the position of search and notifications. Sidekick is now presented as a floating chat at the bottom of the page.

Shopify’s developer documentation says the new design also affects apps that render inside the admin.

## Why People Are Talking About It

The Reddit reaction is mostly about workflow disruption rather than a new technical feature. When an interface is used hundreds of times per day, even moving a familiar control can slow work down.

That matters for ecommerce teams because the admin is not just a dashboard. It is where staff manage orders, products, customers, apps, marketing and store settings.

Shopify says the redesign is intended to make the admin more focused and easier to navigate. The company also says Sidekick usage has grown and that the new design gives it a more visible role.

The difference between the product goal and the merchant experience is normal during a large UI rollout. Teams need time to update internal instructions and habits.

## What Users Experienced

The strongest practical effect is a change in muscle memory.

A staff member who knows exactly where an order filter or setting lives may need to relearn the navigation. If the team has screenshots in training documents, those can also become outdated.

The rollout is progressive, so not every store will necessarily show the same admin design at the same time. That makes support harder for agencies and app teams that manage multiple stores.

Shopify’s developer changelog specifically warns that during the rollout an app can appear alongside either the old or new admin design depending on the merchant’s shop.

## Why It Happens

Shopify is moving its admin toward a more consistent visual system and a stronger role for Sidekick.

For developers, the key technical change is Polaris. Shopify says Admin UI extensions and App Home UI extensions receive the new styles automatically during the rollout. Apps that render their own interface can keep the existing appearance until they choose to adopt Polaris 2.0.

Shopify released a Polaris 2.0 release candidate on September 24 so developers can test the new styles across both admin designs.

This approach reduces the risk of every embedded app changing at the same time.

## Working Fixes

Merchants should update internal documentation first. Replace old screenshots for high-frequency tasks such as order processing, product editing and fulfillment.

Create a short internal guide showing where the most-used controls moved. Do not train the whole team on every visual difference; focus on tasks that affect daily operations.

For app developers, test embedded apps in both the old and new admin. Shopify says Admin UI extensions and App Home UI extensions can receive new styles automatically, while custom interfaces may need a Polaris migration.

Use a test store before changing the app’s visual system. Check navigation, spacing, typography, icons and responsive behavior.

Agencies should also expect mixed environments during the rollout. Support documentation should avoid screenshots when a simple text instruction can survive both versions.

## What Doesn’t Work

Do not assume every merchant has the new interface immediately.

Do not treat a visual change as a breaking API change. Shopify says functionality for the affected extension types does not change just because the new styles arrive.

Do not force a Polaris migration without testing. If an embedded app still works correctly with its current styles, teams can choose when to adopt the new design where Shopify allows it.

Do not ignore the operational impact. Even when APIs do not change, staff time can be affected by navigation changes.

## Official Response

Shopify’s September 15 changelog says the redesign is rolling out progressively and requires no merchant setup. Shopify’s developer documentation gives more detail for app teams, including how Admin UI extensions, App Home extensions and custom interfaces behave.

The Polaris 2.0 release candidate gives developers a way to test the refreshed visual system before committing to a migration.

## Key Takeaways

- Shopify began rolling out its new admin design on September 15.
- Search, notifications and the store picker moved into side navigation.
- Sidekick moved to a floating chat interface.
- Different stores may receive the new design at different times.
- App developers should test both admin designs.
- Polaris 2.0 is the main path for apps that need the refreshed styles.

For merchants, this is mostly a workflow adjustment. For app developers, it is a compatibility and testing task. Both groups should treat the rollout as gradual rather than assuming every Shopify store changes at once.

One useful operational step is to list the five admin tasks your team performs most often and update those instructions first. If staff can process orders, edit products, handle fulfillment and find analytics without friction, the transition becomes much easier.

App teams should do something similar. Identify the screens where merchants spend the most time, then test them against both admin versions. This is more useful than checking every low-traffic screen equally.

## Related Reading

- Shopify admin redesign: https://changelog.shopify.com/posts/see-the-shopify-admin-s-new-look
- Shopify developer guidance: https://shopify.dev/changelog/posts/prepare-your-app-for-the-shopify-admins-new-look
- Polaris 2.0 release candidate: https://shopify.dev/changelog/posts/polaris-2-0-release-candidate
- Reddit merchant discussion: https://www.reddit.com/r/shopify/comments/1wtbdu9/random_updates/

## FAQ

**When did Shopify start the new admin rollout?**

Shopify says the rollout began on September 15, 2026.

**Do merchants need to turn on the new admin design?**

No. Shopify says the new design rolls out automatically.

**Why does my Shopify admin look different from another store?**

The rollout is progressive, so different stores can receive the design at different times.

**Did Shopify move Sidekick?**

Yes. Shopify moved Sidekick from a side panel to a floating chat at the bottom of the page.

**Do Shopify apps need to be updated?**

Not always. Shopify says some extension types receive the new styles automatically, while custom interfaces may need deliberate migration work.

**What is Polaris 2.0?**

Polaris 2.0 is Shopify’s new visual system for embedded App Home interfaces and related developer surfaces.
