---
title: "OpenAI Agents API: Build Your First Persistent AI Agent"
description: "A practical guide to OpenAI's existing Agents API: create a session, choose a sandbox, stream events and verify tool results before you trust them."
category: "AI News"
author: "Tech Updates"
date: 2026-11-07
readingTime: "9 min read"
featuredImage: "/images/openai-agents-api-practical-guide.svg"
tags:
  - "OpenAI Agents API"
  - "AI agents"
  - "agent sessions"
  - "sandbox security"
  - "developer guide"
keyTakeaways:
  - "This is a practical guide to an existing API, not a November 7 launch announcement."
  - "OpenAI announced the Agents API in public beta on September 10, 2026."
  - "The API is built around an agent, an environment, a session and streamed events."
  - "A completed turn does not prove that every tool succeeded, so inspect the event stream and final result."
  - "OpenAI's current documentation says the API is not ZDR-eligible and supports US-only data residency."
faqs:
  - question: "Is the OpenAI Agents API a new November 2026 launch?"
    answer: "No. OpenAI announced the Agents API in public beta on September 10, 2026. This article is a practical guide to the existing API, not a report of a launch in the November 6 to 7 window."
  - question: "What is an Agents API session?"
    answer: "A session is a durable instance of an agent that can work on tasks and accept more input. Your application can stream events and continue the same session."
  - question: "Do I need a sandbox for every agent?"
    answer: "No. The API supports an environment type of none for agents that answer questions or call external tools without running commands or working with local files."
  - question: "Can an agent use tools and MCP servers?"
    answer: "Yes. The current documentation describes tools and MCP connections as part of an agent's available capabilities. Only connect services the agent needs."
  - question: "Does a completed turn prove every tool worked?"
    answer: "No. OpenAI says to inspect the streamed events and reported execution result. A completed turn does not guarantee every tool succeeded."
  - question: "Is the Agents API eligible for Zero Data Retention?"
    answer: "No. OpenAI's current documentation says the Agents API does not support Zero Data Retention and currently supports data residency only in the United States."
contentType: "news"
---

This is a practical guide, not a new November 7 launch report. OpenAI announced the Agents API in public beta on September 10, 2026. The current developer documentation describes a managed agent harness built around an agent, an execution environment, a durable session and a stream of events. This guide shows how to think about a first workflow and where to add checks before real data or write access is involved.

## News Summary

The Agents API is an existing developer interface for building and running cloud agents. It gives an application a way to create an agent, choose the tools and instructions it can use, select an environment and continue work through a durable session. The API is not a new announcement in the November 6 to 7 research window. The original public-beta announcement was published on September 10, 2026.

The useful change for developers is the managed harness. Instead of writing every orchestration step from scratch, an application can create a session, send input, stream events and continue the same session. The application still owns its product logic, user experience, permissions and approval rules.

## What Happened

OpenAI's September announcement introduced the Agents API as a way to build and run cloud agents with the Codex harness managed by OpenAI. The current API documentation describes four core concepts: an Agent, an Environment, a Session, and Events and Items. Together they describe what the agent can do, where it works, how its task continues and what the application receives.

This article is a guide to the current documentation, not a claim that OpenAI launched the API today. Developers should use the live API reference and changelog before copying code into a production service. A public beta can change its methods, permissions and limits.

## Who Is Affected

The API is aimed at developers building multi-step agents that need to use tools, work with files or continue a task across more than one turn. It can be useful for a coding assistant, an internal research tool, a support workflow or an application that delegates a task and reports progress.

It is not necessary for every chatbot. If an application only needs to answer a short question, a simpler model request may be easier to maintain. The Agents API becomes more relevant when the work needs an environment, tool calls, session state or orchestration across several steps.

## Key Details

### Start with the agent definition

An agent is the model, instructions, tools and MCP servers available to the task. Keep this definition narrow. Give it one clear role, list only the tools it needs and state what it must not do. A research agent does not need permission to delete files. A report writer does not need a payment tool.

Use instructions that describe the expected output and the conditions for stopping. Ask the agent to cite sources, identify uncertainty and report failed tool calls. Avoid instructions such as "do everything necessary" because they make it hard to predict what the agent will try next.

### Choose the environment deliberately

The environment is an optional sandbox or computer where the agent can access files and run commands. OpenAI's quickstart shows an OpenAI-hosted environment for a simple coding task. The documentation also describes an environment type of none for agents that answer questions or call external tools without running commands or working with local files.

Do not add a sandbox just because the API supports one. If the task is a source-backed question, no local file environment may be needed. If the task needs code or files, define the workspace and the permissions before the agent starts. Keep network access and filesystem access as narrow as the task allows.

### Create a durable session

A session is an instance of an agent that can receive input and continue work. Your application creates the session, sends a task and receives events. It can stream progress or use webhooks to learn when the agent finishes or needs more input. It can then continue or steer the same session.

This model is useful for work that takes longer than one response. A session can keep state and resume where it left off. It also means your application must manage session identifiers, access control and deletion. Do not expose a session ID as if it were a public share link.

### Follow events, not only the final text

The API streams events and items while the agent works. OpenAI's quickstart says to look for the completed-turn event and then check the reported execution result. A completed turn does not guarantee every tool succeeded. The documentation also describes failed, cancelled and session-failed events.

Build your application so it records the event stream and checks the final result before telling a user that a task succeeded. If the stream disconnects, retrieve the saved session and items before retrying. Starting a second session too early can duplicate work or produce two conflicting outputs.

## Why It Matters

A managed harness can reduce the amount of custom infrastructure a team needs for long-running agents. The API documentation describes support for sandboxed commands, skills and instructions, external tools and MCP, steering, context summarisation, subagents and session resumption. Those capabilities can make a workflow easier to extend, but they do not remove the need for engineering controls.

The most important design choice is still the boundary around the agent. Decide what it can read, what it can change and which actions need a human approval. For example, an agent can draft a pull request without being allowed to merge it. It can prepare an email without sending it. It can calculate a payment without being able to move money.

## What We Know and Do Not Know

OpenAI's current documentation says the Agents API retains session state so work can continue across turns. It says sessions and published artifacts can be deleted when no longer needed. It also states that the API currently supports data residency only in the United States and does not support Zero Data Retention. Choosing a self-hosted sandbox does not make the Agents API ZDR-eligible.

These are important constraints for teams handling regulated or sensitive information. A self-hosted environment does not remove the API's own data-retention rules. Review OpenAI's current data controls and your organisation's requirements before sending customer data, source code or internal documents.

The original September announcement described a public beta. The current documentation is the source of truth for the methods and capabilities available now. Do not assume a beta feature has the same stability, support or pricing as a generally available service.

## What Happens Next

A safe first project should begin with a low-risk task. Use a read-only research or code explanation workflow. Record the input, streamed events and final output. Test how the agent behaves when a tool fails, a source is missing or a task is interrupted. Then add write actions one at a time.

Before production, measure the full workflow rather than only the model response. Track tool success, latency, cost, failed sessions, retries and the number of tasks that need human correction. Keep a clear route for a person to cancel the task or review a proposed action. Recheck the API changelog before each release.

## Final takeaway

The Agents API is useful when a product needs more than a single model response. Its agent, environment, session and event model gives developers a structured way to run long tasks. The safest implementation is not the one with the most tools. It is the one with a small permission set, clear stop conditions and a human review step for important actions.

## Related Reading

For practical controls around agent workflows, read [AI agent permissions and sandbox controls](/articles/ai-agent-permissions-sandbox-human-review/) and [AI agents and privacy](/articles/ai-agents-privacy/). For review gates in automation, see [AI automation with human review gates](/articles/ai-automation-human-review-gates/).

## Key Takeaways

- This is a guide to an existing API, not a November 7 launch announcement.
- OpenAI announced the Agents API in public beta on September 10, 2026.
- The API is built around an agent, an environment, a session and streamed events.
- A completed turn does not prove every tool succeeded.
- The current API documentation says it is not ZDR-eligible and supports US-only data residency.

## FAQ

### Is the OpenAI Agents API a new November 2026 launch?

No. OpenAI announced the Agents API in public beta on September 10, 2026. This article is a practical guide to the existing API, not a report of a launch in the November 6 to 7 window.

### What is an Agents API session?

A session is a durable instance of an agent that can work on tasks and accept more input. Your application can stream events and continue the same session.

### Do I need a sandbox for every agent?

No. The API supports an environment type of none for agents that answer questions or call external tools without running commands or working with local files.

### Can an agent use tools and MCP servers?

Yes. The current documentation describes tools and MCP connections as part of an agent's available capabilities. Only connect services the agent needs.

### Does a completed turn prove every tool worked?

No. OpenAI says to inspect the streamed events and reported execution result. A completed turn does not guarantee every tool succeeded.

### Is the Agents API eligible for Zero Data Retention?

No. OpenAI's current documentation says the Agents API does not support Zero Data Retention and currently supports data residency only in the United States.

## Sources and further reading

- [OpenAI: Introducing the Agents API, September 10, 2026](https://openai.com/index/introducing-the-agents-api/)
- [OpenAI API: Agents API overview](https://developers.openai.com/api/docs/guides/agents-api/overview)
- [OpenAI API: Agents API quickstart](https://developers.openai.com/api/docs/guides/agents-api/quickstart)
- [OpenAI API: Run and continue sessions](https://developers.openai.com/api/docs/guides/agents-api/sessions)
