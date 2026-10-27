---
title: "OpenAI Launches GPT-6.1 Terra for Computer Use and Coding"
description: "OpenAI's GPT-6.1 Terra focuses on visual reasoning and computer use at lower API prices. Here is what launched, who can access it and what to test."
category: AI News
contentType: news
author: Tech Updates
date: 2026-10-27
readingTime: "8 min read"
featuredImage: "/images/openai-gpt-6-1-terra-launch.svg"
tags:
  - GPT-6.1 Terra
  - OpenAI
  - AI agents
  - computer use
keyTakeaways:
  - "OpenAI announced GPT-6.1 Terra on October 26, 2026, positioning it for visual reasoning, computer use and everyday professional tasks."
  - "The model is available through the API and in ChatGPT Work and Codex for eligible Plus, Pro, Enterprise and Edu users."
  - "OpenAI lists API prices of $1 per million input tokens, $0.05 per million cached input tokens and $5 per million output tokens."
  - "Published benchmark results are OpenAI's own claims and should be tested against a team's real tasks before migration."
faqs:
  - question: "What is GPT-6.1 Terra?"
    answer: "GPT-6.1 Terra is an OpenAI model focused on visual reasoning, computer use and clear writing for professional workflows."
  - question: "When was GPT-6.1 Terra announced?"
    answer: "OpenAI's announcement and API changelog date the release to October 26, 2026."
  - question: "How much does GPT-6.1 Terra API cost?"
    answer: "OpenAI lists standard prices of $1 per million input tokens, $0.05 per million cached input tokens and $5 per million output tokens. Check the official pricing page before deployment."
  - question: "Can I use GPT-6.1 Terra in ChatGPT?"
    answer: "OpenAI says it is available to Plus, Pro, Enterprise and Edu users in ChatGPT Work and Codex, as well as through the API."
  - question: "Is GPT-6.1 Terra better than every other model?"
    answer: "No universal winner can be concluded from a launch post. OpenAI reports benchmark results for specific tasks, and teams should evaluate their own workloads, cost and reliability."
  - question: "Does GPT-6.1 Terra support computer use?"
    answer: "OpenAI describes it as a model for precise computer use and visual reasoning. Developers should review the current API documentation and implement permission checks before allowing actions."
  - question: "Should developers switch to GPT-6.1 Terra immediately?"
    answer: "Not without testing. Compare quality, latency, tool behavior, error handling, safety and total cost on a representative sample of your own tasks."
---
OpenAI announced GPT-6.1 Terra on October 26, 2026, describing it as a faster, lower-cost model for visual reasoning, computer use and professional tasks. It is available through the OpenAI API and in ChatGPT Work and Codex for eligible Plus, Pro, Enterprise and Edu users. OpenAI lists standard API pricing at $1 per million input tokens, $0.05 per million cached input tokens and $5 per million output tokens.

The release matters most to developers building AI agents and businesses that automate computer-based work. However, the performance figures in the launch post are OpenAI's own benchmark claims, not a guarantee that the model will perform best on every workflow.

## News Summary

GPT-6.1 Terra is positioned for tasks that combine reading visual information with taking actions through software. OpenAI highlights work such as interpreting technical drawings, filling forms, editing videos and processing incoming invoices. Its main commercial pitch is that the model can handle many everyday tasks at lower cost than higher priced models in the same family.

The model is available in the API as gpt-6.1-terra. OpenAI says it can also be used in ChatGPT Work and Codex by Plus, Pro, Enterprise and Edu users. Developers should confirm current availability, model parameters and API requirements in the official [GPT-6.1 Terra model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra).

## What Happened

OpenAI's [October 26 announcement](https://openai.com/index/introducing-gpt-6-1-terra/) describes Terra as a model that combines detailed visual reasoning, computer use and natural writing. The company says standard API prices are 50% lower than those of GPT-5.6 Terra and GPT-6.1 Sol. The [OpenAI API changelog](https://developers.openai.com/api/docs/changelog) also records GPT-6.1 Terra as released on October 26.

The announcement presents Terra as a cost-efficient option for high-volume professional work rather than the best choice for every possible task. OpenAI says its more capable models remain preferable for some of the most complex coding work. This makes the release a model selection decision: a team may use Terra for routine workflows and reserve more expensive models for cases that require them.

OpenAI lists the standard API rates as $1 per million input tokens, $0.05 per million cached input tokens and $5 per million output tokens. Actual bills depend on the amount of input and output, cache use, tools and the structure of the workflow. The advertised per-token price alone does not determine the cost of a completed task.

## Why It Matters

Computer use is an important step beyond generating a block of text. An agent may need to interpret a screen, decide which control to use, enter data, check a result and recover from an error. A model that can handle these steps reliably may help automate repetitive office work, data entry, software testing and document processing.

Lower token prices can also make it practical to run more attempts or process larger batches. But cheaper tokens do not automatically mean cheaper outcomes. A model that needs repeated retries, creates errors or requires heavy human correction can cost more overall than a model with a higher per-token price.

For organizations, the useful question is whether Terra reduces the total cost per correctly completed task. That includes model usage, tool calls, latency, failed actions, monitoring and human review. A meaningful evaluation should compare complete workflows rather than only the price of a million tokens.

## Key Details

### Availability

OpenAI says GPT-6.1 Terra is available in ChatGPT Work and Codex for Plus, Pro, Enterprise and Edu users. Developers can call it through the API using the model identifier gpt-6.1-terra. Availability may depend on the product surface, account and API configuration, so check the official documentation before planning a deployment.

### Pricing

The standard prices listed by OpenAI are $1 per million input tokens, $0.05 per million cached input tokens and $5 per million output tokens. Cached input can lower costs when repeated context qualifies for caching. Teams should not assume every request will receive the cached rate; confirm cache behavior and calculate cost using their real prompt patterns.

### Visual reasoning and computer use

OpenAI highlights tasks involving images, technical drawings and desktop software. The company reports results on benchmarks such as Agents' Last Exam, MMMU-Pro and OSWorld 2.1. These are different tests of professional task execution, visual reasoning and computer use. A benchmark score does not prove that an agent will operate safely in a particular business system.

### Coding and factuality claims

The announcement reports improved results on OpenAI's internal error-inducing prompts and Terminal-Bench 4.0. Because the company is reporting its own results, readers should treat these as vendor claims and inspect the benchmark setup. Independent reproduction and task-specific testing are useful before changing a production system.

## Who Is Affected

**Developers building agents** should evaluate Terra if their systems use screenshots, browser interactions, desktop software or repeated professional tasks. The model may be attractive where token cost matters, but computer-use tools need clear permission boundaries.

**Businesses automating office workflows** can test use cases such as reading invoices, classifying documents or entering information into internal systems. Start with a sandbox or sample dataset, and keep a person responsible for confirming consequential changes.

**Teams already using OpenAI models** may want to compare Terra against the model they currently use. They should test whether it meets their quality threshold before changing the default model across every task.

**Organizations with strict data controls** should review logging, access permissions, retention and the systems the agent can reach. A model release does not replace a security review of the agent's tools or environment.

## What Happens Next

The next useful evidence will come from real deployments and independent evaluations. Developers should compare task success, tool selection, error recovery, latency and total cost. They should also test whether the model follows scope restrictions and asks for help when it encounters a blocker.

If you plan to switch, run both models on a representative set of anonymized tasks. Record successful completions, incorrect outputs, retries, intervention time and API usage. Use a rollback path and avoid giving a new model access to production systems until its behavior is understood.

OpenAI may update model documentation, pricing and availability. Check the official [model page](https://developers.openai.com/api/docs/models/gpt-6.1-terra) and [API changelog](https://developers.openai.com/api/docs/changelog) for the latest details instead of assuming the launch post will remain the final specification.

## What We Know and Do Not Know

We know OpenAI announced GPT-6.1 Terra on October 26, 2026, and that the company lists it for API use and eligible ChatGPT Work and Codex accounts. The official announcement also gives standard API pricing and describes its focus on visual reasoning and computer use.

We do not know from the launch post alone how it will perform on every independent workload, how often it will make mistakes in a specific company's environment or how much total cost it will save after retries and human review. OpenAI's benchmark claims should be attributed to OpenAI, and results should not be generalized beyond the test conditions.

The announcement also does not mean that every task should be handed to an autonomous agent. Computer use can affect real applications, so organizations still need scoped credentials, confirmations for sensitive actions, logging and a clear way to stop or reverse a task.

## Key Takeaways

- GPT-6.1 Terra was announced on October 26, 2026.
- It targets visual reasoning, computer use and professional workflows.
- OpenAI lists API pricing at $1 input, $0.05 cached input and $5 output per million tokens.
- Published performance claims are vendor-reported; test your own tasks before switching.
- Keep permission checks and human review around consequential computer actions.

## Related Reading

- [AI agents and privacy: what teams should check](/articles/ai-agents-privacy/)
- [How to keep human review in AI automation](/articles/ai-automation-human-review-gates/)
- [OpenAI GPT-6.1 Sol API cost and performance](/articles/openai-gpt-61-sol-api-cost-performance/)

## FAQ

### What is GPT-6.1 Terra?

It is an OpenAI model designed for visual reasoning, computer use and professional tasks that combine understanding information with actions.

### When did OpenAI release GPT-6.1 Terra?

OpenAI's announcement and API changelog list the release date as October 26, 2026.

### What does GPT-6.1 Terra cost?

The listed standard API rates are $1 per million input tokens, $0.05 per million cached input tokens and $5 per million output tokens. Check the official page for current pricing.

### Who can use GPT-6.1 Terra?

OpenAI says it is available in the API and in ChatGPT Work and Codex for Plus, Pro, Enterprise and Edu users.

### Is it the best model for coding?

Not necessarily. OpenAI says its higher end models remain better for some of the most complex coding tasks. Test against your actual workload.

### Should I give Terra control of my computer?

Only through a carefully scoped tool setup. Start in a sandbox, restrict permissions, log actions and require human confirmation for consequential changes.

### Are OpenAI's benchmark claims independently verified?

The launch announcement presents OpenAI's own results. Treat them as vendor claims unless independent testing confirms them on the relevant task.
