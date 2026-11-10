---
title: "Does Perplexity Have an API? Developer Options Explained"
description: "Yes, Perplexity offers Agent, Search, Orchestrator, Embeddings, and Decisions APIs. Learn which to choose, how keys and billing work, and what changed."
category: "Perplexity"
author: "Tech Updates"
date: "2026-11-10"
readingTime: "10 min read"
featuredImage: "/images/does-perplexity-have-an-api.svg"
tags:
  - "Perplexity API"
  - "Perplexity developer API"
  - "Agent API"
  - "Search API"
  - "API key management"
keyTakeaways:
  - "Perplexity currently documents five core APIs: Agent, Search, Orchestrator, Embeddings, and Decisions."
  - "Agent API is for model responses with tools and web-grounded citations; Search API returns ranked results as structured JSON."
  - "Perplexity documents pay-as-you-go pricing for its APIs and says a subscription is not required."
  - "The current Agent API endpoint is POST https://api.perplexity.ai/v1/agent, with /v1/responses accepted as an alias."
  - "API keys are shown only once at creation and should be stored in server-side environment variables, never public client code."
faqs:
  - question: "Does Perplexity have an API?"
    answer: "Yes. Perplexity currently documents five core APIs for agent responses, search results, model access, embeddings, and structured decisions."
  - question: "What is the Perplexity Agent API?"
    answer: "The Agent API provides a unified interface for supported models, web search tools, reasoning controls, and citations in generated answers."
  - question: "Is the Perplexity API free with Pro?"
    answer: "The developer documentation describes pay-as-you-go pricing for APIs and says no subscription is required. Do not assume a consumer plan is an API key or includes API credits."
  - question: "What is the current Perplexity API endpoint?"
    answer: "The current Agent API documentation lists POST https://api.perplexity.ai/v1/agent. It also accepts POST /v1/responses as an OpenAI-compatible alias."
  - question: "Does the Perplexity Search API generate an answer?"
    answer: "No. The Search API returns ranked web results as structured JSON. Use the Agent API when you want a generated response grounded in search."
  - question: "How do I protect a Perplexity API key?"
    answer: "Create a project first, save the key when it is shown, store it in a server-side environment variable, and rotate or revoke it if it is exposed."
---
Yes, Perplexity has a developer API. It is not limited to the consumer search website or mobile app. The current developer platform lists five core APIs for different jobs, including web-grounded answers, raw search results, model access, embeddings, and structured decisions.

The important change for developers is that Perplexity now recommends its Agent API for new work that previously used Sonar Chat Completions. The old Sonar quickstart redirects to a migration guide. If you are starting an integration today, use the current documentation instead of copying an older endpoint from a blog post.

## Short Answer

Perplexity offers an API platform with five core products: Agent API, Search API, Orchestrator API, Embeddings API, and Decisions API. The Agent API is the most direct starting point if your application needs a generated answer with web search and citations. The Search API is better when you want ranked results as JSON and plan to handle filtering or answer generation yourself.

The API uses a project and API key. Perplexity's current quickstart says API pricing is pay as you go and that no subscription is required. That is a separate developer workflow from signing in to the consumer Perplexity app. Before you build, check the current pricing page and usage tier for the API you plan to call.

## What the Question Really Means

The phrase Perplexity API can refer to several different needs. A developer may want to send a question and receive an answer with sources. A search product may need raw web results to pass to its own ranking system. A retrieval system may need embeddings. Another application may need a structured yes-or-no answer or a model endpoint.

Those are not the same request. The Agent API is designed for a response that can use tools and web search. The Search API returns search results rather than a finished answer. The Embeddings API supports semantic search and retrieval-augmented generation. The Orchestrator API gives access to hosted models through compatible interfaces. The Decisions API returns typed outputs for questions that can be expressed with a defined answer format.

A consumer plan and a developer API key are also different. The API quickstart says that all APIs use pay-as-you-go pricing and no subscription is required. Treat API usage as its own developer billing path. Do not assume that signing in to a consumer account automatically gives your application an API key or an API credit balance.

## How It Works

The Agent API is the main option for a conversational application. Perplexity describes it as a multi-provider interface with real-time web search, tool configuration, reasoning controls, and token budgets. Its documentation lists the endpoint as POST https://api.perplexity.ai/v1/agent. The OpenAI-compatible POST /v1/responses path is also accepted as an alias.

The Agent API can return web-grounded answers with citations in one call. The developer can select a supported model, pass an input prompt, and choose tools such as web search. This is useful when the application needs a final response rather than a list of links. It also means that the application should inspect the returned status and output instead of assuming every request completed successfully.

The Search API is a different product. It returns ranked web results as structured JSON. The documentation says it does not generate an answer and does not use token billing in the same way as the Agent API. It is useful when your own application needs to filter, store, or pass results to another model. You can use it as the search layer in a larger pipeline.

The other APIs serve narrower jobs. Orchestrator provides access to open-weight models hosted by Perplexity through compatible endpoints. Embeddings creates vectors for semantic search and retrieval systems. Decisions returns typed answers with probabilities for supported question formats. The best API is the one that matches the output your application actually needs, not the one with the broadest name.

Perplexity's current docs also matter for older integrations. The former Sonar Chat Completions quickstart now points to a migration guide for the Agent API. The documentation presents Agent API as the next interface for production work. If you maintain an older Sonar integration, read the [migration guide](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview) before changing code.

## Practical Steps

Start by choosing the output. If your app needs an answer with citations, begin with Agent API. If it needs raw ranked pages, use Search API. If it needs vector representations, review Embeddings. This choice will affect the response format, pricing, and the amount of work your own application must do.

Next, create a project in the Perplexity API console. The API key guide says you must create a project before generating keys. You can use separate keys for development and production so that a test script does not share the same credential as a deployed application.

When the key appears, save it immediately. Perplexity says the full token is shown only once and cannot be retrieved later. Put it in an environment variable such as PERPLEXITY_API_KEY. Never paste it into browser JavaScript, a mobile app, a public repository, or a URL. If a key is exposed, revoke it and update the application with a new one.

A basic Agent API request uses a bearer token and a JSON body. The current quickstart shows this endpoint and a model field. The model name below is an example from the documentation, not a promise that it is the best choice for every application.

~~~bash
curl https://api.perplexity.ai/v1/agent   -H "Authorization: Bearer $PERPLEXITY_API_KEY"   -H "Content-Type: application/json"   -d '{
    "model": "openai/gpt-5.6-sol",
    "input": "Summarize the latest public documentation for this product."
  }'
~~~

After the first successful call, add basic production controls. Set request timeouts, log request IDs and usage, handle incomplete responses, and return a clear error when the provider rejects a request. Keep model names and tool settings in configuration so you can change them without rewriting the whole application.

Finally, review pricing and rate limits before sending real traffic. Perplexity says usage tiers determine request and token limits and are based on cumulative API spending. Higher tiers can unlock higher limits. Your own application should still use retries with backoff, queue expensive tasks, and stop retrying when an authentication or billing error requires human action.

## Common Problems

A common integration error is using an older Sonar endpoint because a tutorial still shows it. The current documentation redirects the old Sonar quickstart to the Agent API migration guide. Read that guide before copying a request from an older article. The current Agent API path is /v1/agent, and /v1/responses is listed as an alias.

An authentication error can mean that the key was copied incorrectly, revoked, or created in a different project. Perplexity says the full key is shown only once. Check that the environment variable is loaded in the server process and that the request uses the Bearer authorization header. Do not print the full key in logs while debugging.

A rate-limit error can occur when the application sends more requests than its current usage tier allows. Perplexity documents usage tiers based on cumulative spending. Check the API console for the current tier and the rate-limit documentation. A fixed retry loop can make the problem worse, so use backoff and a maximum retry count.

Another mistake is expecting Search API to return a written answer. Search API gives ranked results as JSON. If your user interface needs a summary, you must generate one in your own application or call Agent API. Choose the response type before building the rest of the pipeline.

## What Does Not Work

A Perplexity Pro login is not the same as a developer API key. A consumer account lets a person use the product interface. An API integration needs a project, key, billing setup, and a server-side request. The official API quickstart says the APIs use pay-as-you-go pricing and no subscription is required, so check the developer console rather than assuming your app can use a consumer-plan allowance.

A Search API request is also not a drop-in replacement for an answer endpoint. It returns raw search results. If you need citations in a generated explanation, use Agent API or build the answer stage yourself. Do not expect the Search API to make editorial choices about which sources matter or to write a final paragraph.

Do not put the API key in a public frontend. Browser code can be inspected, and a key exposed there can be copied and used by someone else. Route requests through your own backend, apply usage limits, and store the key in a secure environment variable or secret manager.

## Safety and Limitations

A web-grounded response can still contain errors. Citations make it easier to check claims, but they do not guarantee that every source is authoritative or that the summary is complete. For financial, medical, legal, or security decisions, validate the source material directly and make the limits of your application clear to users.

Treat API keys as credentials. Perplexity's key-management guide says a new key is shown only once and should be stored securely. It recommends environment variables and key rotation. Avoid sharing keys across unrelated projects, and revoke keys that are no longer needed.

The platform and model list can change. Check the API changelog, pricing, and rate-limit pages before shipping an integration. The guidance in this article reflects the official documentation reviewed on November 10, 2026. Use the current [Quickstart](https://docs.perplexity.ai/docs/getting-started/quickstart), [Agent API guide](https://docs.perplexity.ai/docs/agent-api/quickstart), and [Search API overview](https://docs.perplexity.ai/docs/search/overview) as the source of truth.

## Key Takeaways

- Yes, Perplexity has a developer API with five core products.
- Agent API returns generated, web-grounded responses; Search API returns ranked results.
- API billing is pay as you go, with usage tiers and rate limits.
- The current Agent API endpoint is /v1/agent, not an old Sonar tutorial endpoint.
- Create a project, save the key once, and keep it server-side.

## Related Reading

For more context on the product, read [does Perplexity have its own LLM](/articles/does-perplexity-have-its-own-llm/), [how to use Perplexity](/articles/how-to-use-perplexity/), and [how to optimize for Perplexity search](/articles/how-to-optimize-for-perplexity-search/).

### Sources and further reading

- [Perplexity API Quickstart](https://docs.perplexity.ai/docs/getting-started/quickstart)
- [Agent API Quickstart](https://docs.perplexity.ai/docs/agent-api/quickstart)
- [Search API Overview](https://docs.perplexity.ai/docs/search/overview)
- [API Key Management](https://docs.perplexity.ai/docs/admin/api-key-management)
- [Pricing](https://docs.perplexity.ai/docs/getting-started/pricing)
- [Rate Limits and Usage Tiers](https://docs.perplexity.ai/docs/admin/rate-limits-usage-tiers)

## FAQ

**Does Perplexity offer an API for developers?**  
Yes. The current platform includes Agent, Search, Orchestrator, Embeddings, and Decisions APIs. Start with the Quickstart to create a project and key.

**Can I use Perplexity API for web search?**  
Yes. Search API returns ranked web results as JSON. Agent API can use web search as part of a generated response with citations.

**Do I need a Perplexity subscription to use the API?**  
The API documentation says pricing is pay as you go and no subscription is required. Review the API console for billing and usage details.

**Is the Sonar API still the best starting point?**  
The old Sonar quickstart now redirects to a migration guide for Agent API. Use the current Agent API documentation for new integrations.

**Can I use the Perplexity API from a browser app?**  
Do not expose the API key in browser code. Send requests through your backend so the credential stays private and you can control usage.

**Why does my API request return a rate-limit error?**  
Your current usage tier may not allow the request rate. Check the console and rate-limit guide, then reduce concurrency or add backoff before retrying.
