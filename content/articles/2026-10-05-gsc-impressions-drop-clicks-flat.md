---
title: "Search Console Impressions Down, Clicks Flat: What to Check"
description: "Impressions down 54%, clicks flat, position better? Learn what Search Console counts, the likely causes, and a simple checklist to find the real reason."
category: "SEO"
author: "Tech Updates"
date: "2026-10-05"
readingTime: "7 min read"
featuredImage: "/images/gsc-impressions-drop-clicks-flat.svg"
tags:
  - "google search console"
  - "impressions"
  - "average position"
  - "seo reporting"
keyTakeaways:
  - "A big impression drop with flat clicks often means a counting change, not lost visits."
  - "Average position is an average over impressions, so removing deep impressions can make it look better."
  - "The 2025 num=100 event is a known cause, but it is a year old. Do not assume it explains a recent drop."
  - "Compare equal date ranges and split by device, country, query and page."
  - "Judge success by clicks and conversions first."
  - "If clicks and top positions fall too, look for a real ranking problem."
faqs:
  - question: "Why did my impressions drop but clicks stay the same?"
    answer: "Often because low-position or non-human impressions are no longer counted, or the mix of queries changed. Clicks reflect real choices, so they can stay steady while impressions fall."
  - question: "Why did my average position improve when impressions fell?"
    answer: "Average position is averaged over impressions. If deep, low-ranking impressions drop out, the average gets better even without a real gain at the top."
  - question: "Is this a Google penalty?"
    answer: "Unlikely. A manual action shows in the Manual actions report. A fall in impressions with flat clicks and better position does not match a penalty pattern."
  - question: "What was the num=100 change?"
    answer: "Around September 2025, a URL parameter that showed 100 results per page stopped working. Google said it does not formally support it. Industry sources linked it to lower impressions."
  - question: "Did Google confirm the num=100 change affected Search Console?"
    answer: "We found no Google statement saying so. The link is an industry observation. Google only said the parameter is not formally supported."
  - question: "Which date range should I compare?"
    answer: "Compare the last 28 days to the previous 28 days. Add a year-over-year view if possible. Do not compare windows of different length."
  - question: "When should I worry?"
    answer: "Worry if clicks, conversions, or top-10 positions for key queries also fall. Then investigate indexing, content quality, links and competitors."
---

When impressions fall hard but clicks stay flat and average position improves, the cause is often a change in what was being counted, not lost traffic. Compare equal date ranges, split the data by device, query and country, and check clicks first. Real ranking loss usually pulls clicks down too.

## What Happened?

A site owner on r/SEO asked what to investigate first after impressions dropped 54% while clicks stayed nearly flat and average position improved. The thread was about three days old, with 19 votes and 26 comments. We saw only the title and snippet. We did not read the comments, so we do not claim what people replied.

The pattern in the question is a known one. Impressions go down, average position goes up, and clicks do not move. It looks odd, but it can be explained by how Search Console counts data.

## Why People Are Talking About It

Search Console is the main free source of search data for site owners. When the chart changes shape, people worry. A 54% fall in impressions looks like a disaster. But if clicks hold, people still reach the site.

There is also history here. In September 2025, many site owners saw a similar shape. Industry reports tied it to Google no longer supporting the num=100 URL parameter, which let tools pull 100 results on one page. [Search Engine Land reported](https://searchengineland.com/google-search-confirms-it-does-not-support-the-results-per-page-parameter-462244) that a Google spokesperson said this URL parameter is not something it formally supports. That is a verified quote from reliable tech news.

That event was a year ago. If your drop is recent, it may have a different cause. We explain how to tell below.

## What Users Experienced

We could not read the thread, so this part uses what industry sources report about the 2025 event. These are user and expert reports, not Google statements.

- Desktop impressions fell sharply from around September 10, 2025, and average position rose. [JumpFly described this](https://www.jumpfly.com/blog/organic-search-impressions-fell-off-a-cliff-why-and-now-what/) and noted that clicks mostly did not change.
- Some reports said the effect faded as tools adapted. [Measureminds reported](https://measuremindsgroup.com/gsc-impressions-dropped-rankings-improved) that impressions began to rise and position began to fall again.
- Third-party summaries cite figures such as 77% of sites losing ranking terms and 87.7% seeing impression declines. We could not open the original study, so treat those numbers as unverified.

JumpFly also says that there is no proof the drop came from less bot traffic. That is a fair warning. The bot idea is a popular theory, not a confirmed fact.

## Why It Happens

Start with how Google defines the numbers. Google's help page on [impressions, position and clicks](https://support.google.com/webmasters/answer/7042828) says the position value is the topmost position that your property or page holds in the results, averaged across all the queries where it appeared. It is an average over impressions.

That means average position depends on which impressions are counted. If many deep, low-ranking impressions disappear, the average looks better even if nothing improved at the top. This is a math effect. It is an inference from Google's definition, and it matches what industry writers described in 2025.

Google's page on [how Performance report data is counted](https://support.google.com/webmasters/answer/17011364) adds two useful facts. First, when a property appears twice on a results page, it counts as one impression when grouped by property. Second, the newest data can be preliminary and may change within hours.

Other causes can also produce this shape. These are possible explanations, not confirmed for your site:

- Fewer low-position impressions because a page dropped out of deep results while top results held.
- A change in SERP layout that shows your links less often below the fold.
- Seasonal changes in broad, low-click queries.
- A drop in impressions from one country or one device.
- Fewer rank trackers or tools loading results, which was the leading explanation in 2025.

## Working Fixes

Use this checklist. It is our method, built on Google's definitions.

1. **Confirm the chart.** Check the "last updated" date and make sure the last few days are not preliminary.
2. **Compare equal periods.** Use the last 28 days against the previous 28 days. Also compare to the same period last year if you have data.
3. **Look at clicks first.** If total clicks and conversions are flat, you did not lose real visits. Treat the impression change as a measurement question.
4. **Split by device.** Compare desktop, mobile and tablet. In 2025, the biggest swings were reported on desktop.
5. **Split by country.** A change in one market can move the whole chart.
6. **Split by query type.** Separate brand and non-brand queries. Check which queries lost the most impressions. Often it is long-tail terms at low positions.
7. **Split by page.** Find pages that lost most impressions. Check if they still rank in the top 10 for their main query.
8. **Use position buckets.** In the queries table, filter by position ranges such as 1 to 3, 4 to 10, and 11 to 50. Check which bucket lost impressions. If only deep buckets fell, the loss is likely low-value impressions.
9. **Check your top 10 revenue queries by hand.** Look at their clicks, impressions and position across the two periods.
10. **Look at the search appearance and search type filters.** Make sure you compare web search to web search.
11. **Check your own changes.** Did you change canonical tags, noindex rules, redirects, or a sitemap around the drop?
12. **Record a note.** Add an annotation in your reports so nobody misreads the chart later.

If clicks and position at the top both fall, the story changes. Then investigate content quality, links, indexing and competitors.

## What Doesn't Work

- **Reading impressions alone.** Impressions count how often a link was shown. They do not show visits.
- **Treating average position as a ranking.** Google's help page says position is the average for all searches, so one search you run yourself can look different.
- **Rewriting pages in a panic.** If clicks are flat, rewriting can cause real harm.
- **Comparing different date ranges.** A 7-day window against a 30-day window means nothing.
- **Assuming a penalty.** A manual action would appear in the Manual actions report. A drop in impressions alone is not a penalty signal.
- **Trusting one tool.** Rank trackers and Search Console measure different things.

## Official Response

Google's documents give definitions, not a diagnosis. The impressions and position page explains how counts work. The performance data page explains how data is counted, grouped and updated.

On the num=100 change, Google's only quoted statement, reported by Search Engine Land, is that the parameter is not something it formally supports. We found no official Google post that says this change reduced Search Console impressions. The link between the two comes from industry observation, not from Google.

## Key Takeaways

- A big impression drop with flat clicks often means a counting change, not lost visits.
- Average position is an average over impressions, so removing deep impressions can make it look better.
- The 2025 num=100 event is a known cause, but it is a year old. Do not assume it explains a recent drop.
- Compare equal date ranges and split by device, country, query and page.
- Judge success by clicks and conversions first.
- If clicks and top positions fall too, look for a real ranking problem.

## Related Reading

- [Google September 2026 spam update: SEO checks](https://techupates.blog/articles/google-september-2026-spam-update-seo-checks/)
- [Google Search regional changes, September 2026](https://techupates.blog/articles/google-search-regional-changes-september-2026/)
- [Google Search AI Mode and agents: what SEOs need to know](https://techupates.blog/articles/google-search-ai-mode-agents-what-seos-need-to-know/)

## FAQ

### Why did my impressions drop but clicks stay the same?

Often because low-position or non-human impressions are no longer counted, or the mix of queries changed. Clicks reflect real choices, so they can stay steady while impressions fall.

### Why did my average position improve when impressions fell?

Average position is averaged over impressions. If deep, low-ranking impressions drop out, the average gets better even without a real gain at the top.

### Is this a Google penalty?

Unlikely. A manual action shows in the Manual actions report. A fall in impressions with flat clicks and better position does not match a penalty pattern.

### What was the num=100 change?

Around September 2025, a URL parameter that showed 100 results per page stopped working. Google said it does not formally support it. Industry sources linked it to lower impressions.

### Did Google confirm the num=100 change affected Search Console?

We found no Google statement saying so. The link is an industry observation. Google only said the parameter is not formally supported.

### Which date range should I compare?

Compare the last 28 days to the previous 28 days. Add a year-over-year view if possible. Do not compare windows of different length.

### When should I worry?

Worry if clicks, conversions, or top-10 positions for key queries also fall. Then investigate indexing, content quality, links and competitors.
