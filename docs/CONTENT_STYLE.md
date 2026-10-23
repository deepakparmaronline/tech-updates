# Content Style Guide

Write like a skilled technology journalist explaining a real problem to a thoughtful friend. Use simple English, active voice, short paragraphs, concrete evidence, and varied sentence rhythm. Sound human, calm, and useful.

The repository owner's manual topic input changes what to cover, not how an article is structured. Use the applicable template below for Reddit-derived topics, requested alternatives articles, and invoked last seven days news articles.

Do not use AI clichés, generic introductions, false certainty, keyword stuffing, copied comments, invented experience, or repetitive transitions. Do not use em dashes or en dashes. Avoid hyphens in prose when the sentence can be rewritten naturally. Official product names, URLs, code, and required technical syntax may keep their punctuation.

## Shared article contract

1. Write 1,600 to 2,400 words by default and never publish below 1,200 words.
2. Use one primary keyword and natural variants. Never repeat a phrase only for SEO.
3. Use a useful title of roughly 55 to 65 characters when natural.
4. Write a clear description around 145 to 160 characters.
5. Answer the main question in the first 100 words.
6. Include at least three frontmatter takeaways and six frontmatter FAQs.
7. Put the readable FAQ in the article body. Frontmatter FAQs exist for structured data.
8. Cite important factual claims through current primary or authoritative links in the prose.
9. Link only to internal articles that exist.
10. Distinguish facts, reports, opinions, tests, and inference.
11. Do not claim hands on testing unless the run actually performed and documented that test.
12. Use `author: Tech Updates`.

## Authority question template

Use these H2 headings in this order for every non alternatives article dated October 14, 2026 or later:

1. `Short Answer`
2. `What the Question Really Means`
3. `How It Works`
4. `Practical Steps`
5. `Common Problems`
6. `What Does Not Work`
7. `Safety and Limitations`
8. `Key Takeaways`
9. `Related Reading`
10. `FAQ`

Adapt the content under each heading to the topic. Do not force fake problems or an official response when none exists. Use six to ten query fanout questions to make the article complete.

## Alternatives template

Use these H2 headings in this order for every article in the `Alternatives` category:

1. `Quick Answer`
2. `How We Chose These Alternatives`
3. `Best Alternatives`
4. `Comparison Table`
5. `How to Choose`
6. `What to Avoid`
7. `Key Takeaways`
8. `Related Reading`
9. `FAQ`

Explain who each product suits, its key strengths, important limits, current pricing context, migration considerations, and why someone may prefer it over the original tool. Use a concise comparison table based on verified information. Do not rank products through arbitrary scores. Do not write filler entries just to make a large number.

## AI News and breaking news template

Use these H2 headings in this order for every article in the `AI News` category and for time-sensitive news articles created through `docs/LAST_SEVEN_DAYS_NEWS_PUBLISHING.md`:

1. `News Summary`
2. `What Happened`
3. `Why It Matters`
4. `Key Details`
5. `Who Is Affected`
6. `What Happens Next`
7. `What We Know and Do Not Know`
8. `Key Takeaways`
9. `Related Reading`
10. `FAQ`

Before the first H2, add a concise standfirst that explains what happened, when it happened, who is affected, and why it matters. Keep the reporting factual and time specific. The site builds its table of contents automatically from the H2 headings, so never add a second manual table of contents.

Every article created through the last seven days news workflow must set `contentType: news` in frontmatter so brand-category news receives the same validation as `AI News` articles.

## Editorial trust

Never present paid inclusion as independent selection. If Tech Updates later accepts sponsorship or paid placement, disclose it clearly and keep the comparison criteria consistent. Do not guarantee rankings, revenue, traffic, or business results.
