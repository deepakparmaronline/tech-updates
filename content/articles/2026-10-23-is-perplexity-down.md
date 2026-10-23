---
title: "Is Perplexity Down? How to Check Status and Fix Common Problems"
description: "Check whether Perplexity is having an outage, identify browser, app, account, or API issues, and try safe fixes without losing your work."
category: Perplexity
author: Tech Updates
date: 2026-10-23
readingTime: "9 min read"
featuredImage: "/images/is-perplexity-down.webp"
tags: ["Perplexity down", "Perplexity status", "Perplexity outage", "Perplexity troubleshooting"]
keyTakeaways:
  - "Check Perplexity's official status page first because a live outage cannot be diagnosed from an old article."
  - "Test another browser or network before changing account settings, reinstalling the app, or deleting local data."
  - "Separate website, app, account, and API symptoms so you report the affected service accurately."
faqs:
  - question: "Is Perplexity down right now?"
    answer: "Check Perplexity's live status page for the current answer. It reported all listed services operational when this article was checked on October 23, 2026."
  - question: "Why is Perplexity not loading for me?"
    answer: "A browser extension, stale site data, network filter, VPN, login problem, or service incident can prevent loading. Test one variable at a time."
  - question: "Why is the Perplexity app not working?"
    answer: "The app may need a restart or update, or it may be affected by a network, account, or platform issue. Check the official status page before reinstalling it."
  - question: "How do I check the Perplexity API status?"
    answer: "Open Perplexity's official status page and inspect the API component, then check your request response code, plan, limits, and credentials."
  - question: "Does clearing the cache fix Perplexity?"
    answer: "It can fix damaged or stale browser data, but use a private window or another browser as a low risk test before clearing saved site data."
  - question: "How do I contact Perplexity support?"
    answer: "Use Perplexity's current help and support channels. Its official security page directs account, functional, safety, and quality issues to support@perplexity.ai."
---
## Short Answer

The fastest way to learn whether Perplexity is down is to open the official [Perplexity status page](https://status.perplexity.com/). It reports separate components for the website, mobile application, computer product, and API. When this article was checked on October 23, 2026, the page showed all listed services as operational. That is only a dated observation, not a promise about the service now.

If the status page shows an incident, wait for its updates and avoid making major changes to your device or account. If the page is green but Perplexity does not work for you, test a private browser window, another device, and another network. Those checks quickly separate a broad service outage from a local browser, application, login, or network problem.

## What the Question Really Means

“Is Perplexity down?” can describe several different symptoms. The website may not load. A search may remain stuck. The mobile app may close. Login links may fail. The API may return errors even while the consumer site works. Each symptom points to a different component and requires a different test.

A public status page is the best starting point because Perplexity can publish confirmed incidents and affected services there. Reports on social networks and outage tracking sites can provide context, but they may combine unrelated local problems or repeat old screenshots. Treat them as supporting evidence, not the final authority.

You also need to distinguish an outage from a usage limit or account issue. A rate limit, expired session, subscription problem, unavailable model, or rejected API key can block a request without taking the whole service offline. Record the exact error message and time before troubleshooting.

## How It Works

Perplexity depends on several layers: your device, browser or app, local network, domain name resolution, Perplexity's edge and application systems, account services, model providers, and any connected sources. A failure at one layer can look like the entire product is down.

The official status dashboard breaks the service into components. Check the component that matches your problem. If the website is operational but the API reports an incident, browser searches may still work. Conversely, an account or web incident does not prove that every API request is failing.

For the API, the response status and body matter. An authentication error is different from a rate limit, bad request, or server error. Keep the request identifier when one is provided, but never post the API key or full sensitive payload in a public report.

Your browser can also cause failures. Blocking extensions, strict cookie settings, old service worker data, and corporate security filters may prevent scripts or authentication from completing. A private window is a useful comparison because it usually starts with clean site data and fewer extensions.

## Practical Steps

### 1. Check the official status page

Open [status.perplexity.com](https://status.perplexity.com/) directly. Look for an active incident, scheduled maintenance, or a degraded component that matches what you are using. Note when the incident began and subscribe to updates if the page offers that option.

If the status page itself will not load, try it on mobile data or from a second device. A local network problem can block both the product and its status domain.

### 2. Save the evidence

Write down the time, device, browser or app version, affected feature, and exact error. For an API request, save the response code, request identifier, and a redacted example. For a browser problem, take a screenshot that does not expose private queries or account information.

This evidence helps you see whether the failure is consistent and gives support a useful starting point.

### 3. Try a clean browser test

Open Perplexity in a private browsing window. If it works there, an extension, cookie, cache entry, or saved session in the normal profile is a likely cause. Disable extensions one at a time, especially script blockers, privacy tools, and browser assistants.

Sign out and back in only after saving unfinished work. If needed, clear site data for Perplexity rather than clearing the entire browser history. That limits disruption to other services.

### 4. Compare devices and networks

Test another supported browser or device. Then switch between the usual network and a trusted alternative, such as mobile data. If one network fails on every device, restart the router and check whether a workplace, school, internet provider, DNS service, firewall, or content filter is blocking the connection.

Temporarily disconnect a VPN as a diagnostic step if your policy allows it. Do not disable company security software or bypass an organizational filter. Report the blocked destination to the administrator instead.

### 5. Check the mobile or desktop app

Force close and reopen the app. Check the official app store for an update and confirm that the operating system has enough free storage. Restart the device if the app remains stuck.

Do not uninstall immediately if the app contains local drafts or settings you need. Confirm how they are synchronized first. If reinstalling becomes necessary, use the official app store and verify the publisher.

### 6. Diagnose API errors separately

First, check the API component on the official status page. Then inspect the HTTP response. A 400 class response often points to the request, authentication, permission, quota, or rate limit. A 500 class response can indicate a server problem, although malformed traffic or an intermediary can still complicate the result.

Confirm the current endpoint, model name, headers, plan, and limits against Perplexity's official API documentation. Retry only with a bounded backoff. Aggressive loops can amplify an incident and consume quota when the service recovers.

### 7. Contact support with a focused report

If the problem persists while the status page shows no matching incident, contact Perplexity through its current official channels. Perplexity's [security and vulnerability page](https://www.perplexity.ai/en-GB/hub/security-vdp) directs account specific, functional, safety, and quality issues to <code>support@perplexity.ai</code>.

Include the time zone, product area, device, version, steps to reproduce, exact error, and the safe tests already completed. Redact tokens, private prompts, payment details, and personal information.

## Common Problems

If the page is blank or endlessly loading, try a private window and disable extensions one at a time. Stale site data can also be responsible. Clear only Perplexity's site data after confirming that you will not lose something important.

If login email links fail, use the link in the same browser and device where the login began. Request a fresh link and check spam filtering. Avoid forwarding a sign in link because it may be temporary and tied to a session.

If searches work on mobile data but not WiFi, investigate the router, DNS resolver, VPN, proxy, or network filter. Changing account passwords will not repair a blocked network route.

If the service is slow rather than unavailable, test a simple query and compare components. A complex file upload or model request can take longer than a basic search. Check whether only one model or feature is affected.

If the API says you are unauthorized or rate limited, a green status page does not make that message an outage. Check credentials, project access, billing, and current limits. Never send a secret key to support in plain text.

## What Does Not Work

Refreshing continuously is not a reliable fix. It can discard unsaved text, create duplicate requests, or make rate limits worse. Save the prompt and retry at reasonable intervals.

Changing many settings at once also makes diagnosis harder. If you clear all browser data, reinstall the app, reset the router, and change the password together, you will not know what caused or fixed the issue.

An old social post cannot confirm today's outage. Always compare its timestamp with the official live page. Search results may surface an incident from months earlier because it received many links.

Do not download unofficial Perplexity installers or browser repair tools. A service disruption is a common moment for phishing pages to appear. Use the official site and recognized app stores.

## Safety and Limitations

Never publish API keys, authentication links, cookies, private prompts, or complete diagnostic logs. Redact sensitive material before sharing a screenshot or support report. Rotate a credential immediately if it has been exposed.

Do not bypass workplace or school controls to reach the service. A blocked AI site may reflect an intentional data policy. Ask the administrator for an approved route or alternative.

Status dashboards report what the operator has detected and published. A new incident, regional fault, or account specific problem may not appear immediately. That is why device and network comparisons still matter when the page shows normal operation.

The dated status in this article will become stale. Use the live dashboard for the current answer and treat this guide as a troubleshooting sequence, not a real time monitor.

## Key Takeaways

- Check Perplexity's live status page and the exact affected component first.
- Record the error and time before changing settings.
- Compare a private window, another device, and another trusted network to isolate local problems.
- Treat API response codes, plan limits, and credentials separately from consumer website incidents.
- Contact official support with a concise, redacted report if the problem persists.

## Related Reading

- [What Is Perplexity Pro?](/articles/what-is-perplexity-pro/)
- [How Perplexity Differs From Search Engines](/articles/how-perplexity-differs-from-search-engines/)
- [Does Perplexity Use ChatGPT?](/articles/does-perplexity-use-chatgpt/)

## FAQ

### Is Perplexity down right now?

Check Perplexity's live status page for the current answer. It reported all listed services operational when this article was checked on October 23, 2026, but that observation can become outdated at any time.

### Why is Perplexity not loading for me?

A browser extension, stale site data, network filter, VPN, login problem, or service incident can prevent loading. Test one variable at a time, starting with the official status page and a private browser window.

### Why is the Perplexity app not working?

The app may need a restart or update, or it may be affected by a network, account, platform, or service issue. Check the status page before reinstalling it.

### How do I check the Perplexity API status?

Open Perplexity's official status page and inspect the API component. Then check your response code, request identifier, plan, current limits, endpoint, and credentials.

### Does clearing the cache fix Perplexity?

It can fix damaged or stale browser data, but first use a private window or another browser as a low risk test. Clear only the affected site's data when possible.

### How do I contact Perplexity support?

Use Perplexity's current help and support channels. Its official security page directs account, functional, safety, and quality issues to <code>support@perplexity.ai</code>.
