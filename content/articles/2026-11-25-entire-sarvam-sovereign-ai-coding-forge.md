---
title: "Entire and Sarvam Launch India's Sovereign AI Coding Forge"
description: "Entire and Sarvam announced India-hosted code and Sarvam model inference on Trails. Here is what the agent-native Git forge means for developers."
category: "AI News"
contentType: "news"
author: "Tech Updates"
date: 2026-11-25
readingTime: "8 min read"
featuredImage: "/images/entire-sarvam-sovereign-coding.svg"
tags:
  - "Entire"
  - "Sarvam AI"
  - "Agentic Coding"
  - "Data Residency"
keyTakeaways:
  - "Entire and Sarvam announced an integration on November 25, 2026, that combines India-region code hosting with Sarvam model inference for agent runs."
  - "Sarvam models are available in preview for developers who set India as the primary project region on Entire."
  - "The integration brings Sarvam models into Trails, Entire's agent-focused workflow that the company positions as an alternative to traditional pull requests."
  - "Data residency is useful for some teams, but buyers still need to review contracts, backups, telemetry, access, and compliance requirements."
faqs:
  - question: "What did Entire and Sarvam announce?"
    answer: "The companies announced an integration that lets developers host code in Entire's India region and use Sarvam models for agent runs on the Trails workflow."
  - question: "What is Entire?"
    answer: "Entire is a developer platform and Git forge built around agent-human collaboration. Its Trails workflow keeps code, agent sessions, and review evidence together."
  - question: "What does Sarvam add to the platform?"
    answer: "Sarvam provides AI models for coding-agent inference. Entire says the models are available in preview for projects that use India as their primary region."
  - question: "Does the announcement mean every part of the workflow is in India?"
    answer: "The companies say code, agent runs, and inference can remain in India when the India region and Sarvam models are selected. Teams should confirm the exact handling of backups, telemetry, logs, and subprocessors."
  - question: "Is Trails generally available?"
    answer: "The announcement describes Sarvam model integration on Trails as a preview. Check the current Entire product and documentation pages for availability."
  - question: "Does India data residency automatically mean regulatory compliance?"
    answer: "No. Data residency is one control. Organizations must also review contracts, security controls, access, retention, backups, audit logs, and sector-specific legal requirements."
---

Entire and Sarvam announced a partnership on November 25, 2026, to bring Sarvam models into Entire's agent-native Git workflow for developers in India. The companies say developers can host code in Entire's India region and use Sarvam models for agent runs, keeping code and AI inference within the country when the India region is selected.

The integration is tied to Trails, Entire's workflow for agent-assisted coding and review. Sarvam models are available in preview for projects that use India as their primary region. The announcement is relevant to Indian engineering teams that need local code hosting or want to evaluate AI-assisted development with an India-based model provider.

## News Summary

Entire, a developer platform founded by former GitHub CEO Thomas Dohmke, announced an integration with Sarvam, an Indian AI platform. The company says the partnership creates an agent-native Git forge with data residency in India. Developers can create, migrate, and host private repositories in the India region and run coding agents using Sarvam models on Trails.

Entire's [official announcement](https://entire.com/news/entire-partners-with-sarvam-to-complete-indias-sovereign-software-loop) and its [Sarvam integration blog](https://entire.com/blog/introducing-sarvam-ai-for-a-sovereign-software-loop-in-india) are dated November 25, 2026. ETEnterpriseAI reported the partnership at 10:29 AM IST on the same date, and IANS also covered the announcement later that day.

## What Happened

The partnership connects two parts of an AI-assisted software workflow. Entire provides the Git hosting and Trails workflow. Sarvam provides models that developers can select for agent runs. Entire says the integration is available in preview for developers who set India as the primary region for a project.

The company describes Trails as a replacement for the traditional pull request. The workflow brings developer intent, code, agent sessions, and review evidence together from the start of a task through to merge. Coding agents can address review findings in an iterative loop, while a human developer validates the changes before they are merged.

Entire's official blog explains the setup. A developer creates a project with India as its primary region, creates a repository inside that project, opens project settings, selects Agents, and creates a custom agent. The developer can then choose a Sarvam model in the model dropdown. The company also describes a Sarvam external agent plugin for tracking sessions through the CLI.

The [official Entire setup guide](https://entire.com/blog/everything-you-need-to-get-started-with-entire-in-india) provides more detail about India-region projects and repositories. The [ETEnterpriseAI report](https://enterpriseai.economictimes.indiatimes.com/news/industry/entire-partners-with-sarvam-to-bring-sovereign-ai-coding-to-india/136148694) and [IANS coverage](https://ianslive.in/india-gets-agent-native-git-forge-with-local-data-residency-via-entire-sarvam-tie-up--20261125132125) also describe the partnership and the intended data-residency model.

## Why It Matters

AI coding tools can send code, prompts, context, and agent activity to systems outside the developer's own environment. For some organizations, that raises questions about data location, contractual controls, customer confidentiality, and sector rules. The location of the code repository is only one part of that question. Model inference, agent logs, backups, telemetry, and connected services also matter.

The Entire and Sarvam integration is aimed at teams that want more of the software workflow to stay in India. If a repository is hosted in the India region and the agent uses Sarvam models through the integration, the companies say code and inference can remain in the country. That may help teams that have data-residency requirements or prefer a local model provider for sensitive development work.

The second point is the workflow design. Traditional pull requests focus on the proposed code change and review conversation. Trails is designed to keep intent, agent sessions, and review evidence next to the code. That could help reviewers understand why an agent made a change, what instructions it received, and how the work progressed.

This does not remove the need for code review. An agent can generate a useful patch and still introduce a bug, weaken a security control, or misunderstand a requirement. A human developer must validate the change, run tests, and decide whether it should be merged.

## Key Details

### Code hosting and model inference are separate parts

Entire provides the Git hosting and project region. Sarvam provides the models used for agent inference. The company says developers can set India as the primary region for a project and then select Sarvam as the model provider for a custom agent.

This distinction matters because code storage and model inference are separate technical services. An organization should confirm which data is sent to the model, where it is processed, how logs are stored, and what happens when a workflow calls an external connector. A local repository does not automatically prove that every part of a development workflow is local.

### Sarvam models are in preview on Trails

Entire says Sarvam models are available in preview to developers who set India as the primary region for a project. The integration is not described as a fully mature, generally available service for every account. Teams should check current access, model availability, and product terms before moving an important repository.

The official Entire blog also says developers can use Sarvam models for agent runs and track sessions through a Sarvam external agent plugin. The blog mentions support for Indian languages such as Hindi, Bengali, Marathi, and Kannada. The exact model and language capabilities should be checked in the current product interface.

### Trails keeps agent activity near the code

The Trails workflow is designed to preserve developer intent, code, agent sessions, and review evidence. The idea is to make agent-assisted changes easier to inspect than a patch that arrives without a clear record of how it was produced.

The product description says agents can address review findings in a loop while human developers validate changes before merge. That is an important distinction from a workflow that merges generated code automatically. Teams should still require tests, approvals, and a clear owner for each change.

### Entire shared a performance benchmark

Entire's announcement says its open-source ForgeMark test measured 355 pushes per second for Entire, compared with 29 for Cursor Origin, 10 for GitLab, and four for GitHub in a test involving simultaneous agent-driven pushes and clones. These figures are company-reported results from its own benchmark. They should not be treated as an independent performance comparison for every repository or workload.

A Git hosting benchmark can be affected by repository size, network location, concurrency, hardware, caching, and test design. Teams should run their own tests with representative repositories and agent activity before choosing a hosting platform.

## Who Is Affected

The announcement is most relevant to Indian software teams that need code hosting in India and want to test AI-assisted development with a local model provider. Regulated organizations may be interested in the data-residency option, but they still need to review the full processing path and contractual terms.

Developers may be interested in Trails if they want review evidence and agent sessions to stay close to each code change. Engineering leaders may want to compare the workflow with their current Git hosting and pull request process. Security teams will need to review repository permissions, agent credentials, model access, audit logs, and data retention.

The partnership is less relevant to teams that only need a simple Git remote or that already have an approved coding-agent workflow with suitable data controls. Moving a repository is a business and engineering decision, not a requirement for using Sarvam models.

## What Happens Next

The immediate next step for interested developers is to test the preview. Entire's official guide describes creating an India-region project, creating a repository, opening the Agents settings, and selecting a Sarvam model for a custom agent. Teams should start with a non-sensitive repository and a limited set of tasks.

Before migrating a production codebase, verify how mirrors, backups, repository history, agent sessions, logs, and connected services are handled. Confirm whether the project region applies to all relevant data or only the repository and inference path described by the companies. Ask for contractual terms and security documentation that match your organization's requirements.

The announcement does not provide a full public price comparison, a detailed service-level agreement, or a complete list of enterprise compliance controls. It also does not establish that every regulatory obligation is satisfied simply by selecting an India region. Those questions need direct answers from the vendors.

## What We Know and Do Not Know

What is confirmed is that Entire and Sarvam announced the integration on November 25, 2026. Entire says Sarvam models are available in preview for developers who set India as the primary region for a project. The company says the workflow keeps code hosting in India and uses Sarvam models for agent inference on Trails.

What remains unclear from the public announcement is the full technical and contractual scope of data residency. Organizations should ask about backups, telemetry, logs, model retention, support access, subprocessors, encryption, and disaster recovery. The announcement also does not provide an independent performance test or a complete pricing and availability matrix.

The best way to evaluate the partnership is to run a controlled pilot. Use a test repository, a small agent task, and a clear review process. Check the code location, the model provider, the audit trail, and the final diff. If the workflow meets the team's security and engineering requirements, then consider a wider rollout.

## Key Takeaways

- Entire and Sarvam announced an India-focused agentic coding integration on November 25, 2026.
- Sarvam models are available in preview for Entire projects that use India as the primary region.
- Trails combines code, agent sessions, and review evidence in an agent-focused development workflow.
- Data residency is useful, but it does not replace a full security, legal, and operational review.

## Related Reading

For a practical look at coding-agent workflows, read our guide to [using Claude Code agents](/articles/how-to-use-claude-code-agents/). For the announcement and setup steps, see the [Entire announcement](https://entire.com/news/entire-partners-with-sarvam-to-complete-indias-sovereign-software-loop), the [Sarvam integration guide](https://entire.com/blog/introducing-sarvam-ai-for-a-sovereign-software-loop-in-india), the [Entire India setup guide](https://entire.com/blog/everything-you-need-to-get-started-with-entire-in-india), [ETEnterpriseAI](https://enterpriseai.economictimes.indiatimes.com/news/industry/entire-partners-with-sarvam-to-bring-sovereign-ai-coding-to-india/136148694), and [IANS](https://ianslive.in/india-gets-agent-native-git-forge-with-local-data-residency-via-entire-sarvam-tie-up--20261125132125).

## FAQ

### What did Entire and Sarvam announce?

They announced an integration that combines Entire's India-region Git hosting and Trails workflow with Sarvam models for agent runs. The companies say the setup can keep code and inference in India when the India region and Sarvam models are selected.

### What is Entire?

Entire is a developer platform and Git forge built around agent-human collaboration. Its Trails workflow keeps developer intent, code, agent sessions, and review evidence together during software development and review.

### What does Sarvam add to the platform?

Sarvam provides models that developers can select for coding-agent inference on Trails. Entire says those models are available in preview for projects that use India as their primary region.

### Does the announcement mean every part of the workflow is in India?

The companies say code, agent runs, and inference can remain in India when the India region and Sarvam models are selected. Teams should still confirm the location of backups, telemetry, logs, support access, and connected services.

### Is Trails generally available?

The announcement describes the Sarvam model integration on Trails as a preview. Availability can change, so developers should check the current Entire product and documentation pages before planning a production rollout.

### Does India data residency automatically mean regulatory compliance?

No. Data residency is one part of a compliance review. Organizations must also check security controls, access, encryption, retention, backups, audit logs, contracts, subprocessors, and the rules that apply to their industry.