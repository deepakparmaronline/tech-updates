---
title: "OpenRouter Removes 3 Providers and 125 ZDR Endpoints"
description: "OpenRouter says it removed three inference providers and 125 endpoints from Zero Data Retention eligibility after researchers found data policy failures."
category: "AI News"
contentType: "news"
author: "Tech Updates"
date: "2026-11-22"
readingTime: "9 min read"
featuredImage: "/images/openrouter-removes-three-providers-125-zdr-endpoints.svg"
tags:
  - "OpenRouter security"
  - "AI inference providers"
  - "Zero Data Retention"
  - "AI data privacy"
keyTakeaways:
  - "OpenRouter said on November 22 that it had off-boarded three inference providers after security researchers reported compromised data or policy failures."
  - "The company removed 125 endpoints from Zero Data Retention eligibility, including precautionary removals."
  - "OpenRouter said the research did not show a breach or unauthorised access of OpenRouter itself."
  - "Users should review provider routing, data retention terms and secrets included in prompts rather than assuming a router label guarantees every provider's behaviour."
faqs:
  - question: "What did OpenRouter remove on November 22, 2026?"
    answer: "OpenRouter said it off-boarded three inference providers and removed 125 endpoints from Zero Data Retention eligibility after investigating provider data policy concerns."
  - question: "Was OpenRouter itself breached?"
    answer: "OpenRouter said the findings did not show a breach or unauthorised access of OpenRouter. The reported concerns involved inference providers in its ecosystem."
  - question: "Did OpenRouter name the three providers it off-boarded?"
    answer: "The November 22 announcement did not identify the three providers. It linked to provider security notices, but readers should not infer that every notice maps directly to an off-boarded provider."
  - question: "What does Zero Data Retention mean?"
    answer: "Zero Data Retention is a provider or endpoint policy that says prompts and outputs are not retained under stated conditions. Users should check the exact scope and terms for each endpoint."
  - question: "Should OpenRouter users rotate API keys?"
    answer: "Rotate any credentials or secrets that may have been included in affected prompts or exposed through a provider incident. Follow the provider's own notice and your organisation's incident response process."
  - question: "Can a router guarantee data privacy across all model providers?"
    answer: "No. A router can publish policies and enforce controls, but data handling can vary by provider, endpoint and routing path. Verify the policy for the exact endpoint you use."
---
OpenRouter said on November 22, 2026, that it had removed three inference providers from its network and taken 125 endpoints out of Zero Data Retention eligibility after security researchers reported evidence of compromised provider data and failures to follow stated data policies. OpenRouter said the findings did not show a breach or unauthorised access of OpenRouter itself. The announcement is a reminder that an AI request can pass through more than one company before a model returns an answer.

## News Summary

The announcement came after security researcher HD Moore at Dragos described a five month investigation that used nearly two million AI prompts containing unique tracking URLs and canary credentials. OpenRouter said it had been working with researchers and providers to understand the findings. It then off-boarded three providers, removed 125 endpoints from ZDR eligibility and said it had notified potentially affected customers.

The key distinction is between the router and the inference provider. OpenRouter's statement says the findings did not show a compromise of OpenRouter's own systems. The research raised concerns about the handling of requests by providers behind model endpoints. Users should not treat those two statements as contradictory. A routing service can remain uncompromised while a provider that processes the prompt has a separate data handling problem.

The primary announcement is [OpenRouter's provider incident update](https://openrouter.helicone.ai/blog/announcements/data-processing-incidents-on-inference-providers/). The original technical research is described in [Dragos's AI supply chain security report](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens). Both sources should be read together because they describe different parts of the event.

## What Happened

Dragos said it submitted approximately two million prompts to AI providers, routers and resellers between July and November 2026. The prompts contained unique URLs and canary credentials designed to reveal whether information was accessed after inference. The researcher reported activity that indicated data from at least three AI providers had been exposed. Dragos also described evidence of stolen credentials being used for AWS API calls.

OpenRouter's November 22 post says it reviewed the findings with researchers and providers. The company announced three actions. It off-boarded three providers based on its investigations. It removed 125 endpoints from ZDR eligibility, including endpoints flagged by researchers and additional endpoints removed as a precaution. It also said it notified all potentially affected customers.

OpenRouter did not name the three off-boarded providers in the announcement. It listed security notices from providers, including Novita, Phala and Together, and said not all affected providers had posted publicly. The list of notices should not be read as a definitive list of the three off-boarded providers. The public statement does not establish a one to one mapping.

## Why It Matters

An AI prompt can contain more than a question. Developers often send source code, error logs, customer support messages, internal documents, test credentials and business data to a model endpoint. Some applications also include hidden context such as retrieved documents, user profiles or system instructions. If a provider stores or exposes that data contrary to its stated policy, the risk can extend beyond the text visible in a chat window.

Zero Data Retention labels are important for teams that do not want prompts and outputs stored by a provider. But the label needs to be checked at the endpoint level. A router may offer many models from different providers, and those providers can have different terms, infrastructure and logging practices. The privacy policy for one model route should not be assumed to cover every route in the catalogue.

The incident also shows why vendor assurance should be tested. Dragos used tracking values to look for evidence that prompt content was accessed after inference. A company policy can describe intended behaviour, but technical checks can reveal whether the actual processing path matches the promise. This does not mean every provider is unsafe. It means sensitive workloads need evidence, contractual terms and technical controls.

## Key Details

### Three providers were removed, but not named

OpenRouter's post says three providers were off-boarded after its investigations. It does not identify them. The company also says it notified potentially affected users regardless of whether a provider had published a public notice. This is a relevant limit for customers trying to determine whether a specific model route was involved.

Do not infer provider identity from the linked notices alone. A notice may describe an incident, a precaution or a data processing problem without proving that the provider was among the three removed. OpenRouter's public statement is clear about the action but leaves some provider details undisclosed.

### 125 endpoints lost ZDR eligibility

The company removed 125 endpoints from Zero Data Retention eligibility. It says the removals included providers flagged by researchers and additional endpoints taken down as a precaution. That is not the same as saying 125 endpoints were all proven compromised. Eligibility was removed because OpenRouter was reassessing whether the endpoints met its ZDR requirements.

The practical effect is that users should review their endpoint choices and not rely on a previously seen ZDR badge without checking its current status. If an application pins a model and provider route, the team should confirm the exact route and its current data policy before continuing to send sensitive information.

### OpenRouter says its own systems were not breached

OpenRouter stated that the findings did not show a breach or unauthorised access of OpenRouter. This is an important distinction. The report concerned inference provider data handling and downstream access. A router may coordinate requests without being the system that was compromised.

The statement does not remove the need for customer action. If a prompt contained a live secret and the provider handling it is implicated, the owner of that secret should rotate it. If the prompt contained personal or customer data, the organisation should review its incident response and notification obligations.

### The research used canary values

Dragos describes sending prompts that contained unique URLs and credentials. The purpose was to observe whether those values appeared in later access logs. The report says the investigation ran from July to November 2026 and involved almost two million prompts. Dragos also described attacker activity involving credentials and tools that accessed seeded AWS keys.

These are findings from the researcher's investigation. They should not be expanded into claims that every prompt was stolen or that every provider in the AI ecosystem was compromised. The public evidence points to incidents at specific providers and weaknesses in data policy enforcement.

## Who Is Affected

OpenRouter users who sent sensitive information through third party inference providers should review the models and provider routes used during the relevant period. Developers should inspect request logs, endpoint configuration and any routing preferences that pin a provider. If the application automatically selects a provider, review how that selection is made and whether the fallback route changes the data handling terms.

Businesses using AI APIs should check whether their contracts cover downstream providers, retention, security incidents, data location and notification timelines. A central platform policy is useful, but teams should know which provider actually processes a request. Keep an inventory of the models, endpoints and data classes used by each application.

Individual users should avoid placing passwords, API keys, private customer records or confidential documents in prompts unless they have reviewed the provider's terms and their organisation permits it. If a credential may have been included in an affected request, rotate it. If you cannot establish whether it was exposed, treat it as a security review item rather than assuming it is safe.

## What Happens Next

OpenRouter said it was adapting the research testing approach so it could run checks on an ongoing basis. It also said it was conducting technical verification of network paths to identify requests and responses that may be forwarded to third parties. The company said it would require assurances and validation before restoring ZDR eligibility to endpoints removed in the review.

Customers should watch the provider status and policy information for the exact model route they use. A route that becomes available again should not automatically be considered safe for every workload. Confirm what changed, whether the provider published an incident report and whether the terms cover the data your application sends.

Security teams can use the incident as a reason to test AI supply chain controls. Track provider identity, store endpoint choices in configuration, log model and provider changes, and prevent secrets from entering prompts. Build a process for rotating credentials and reviewing downstream vendors when an incident notice appears.

## What We Know and Do Not Know

We know that OpenRouter published an update on November 22, said it removed three providers and removed 125 endpoints from ZDR eligibility. We know it said the findings did not show a breach or unauthorised access of OpenRouter itself. We know Dragos published a report describing nearly two million tracked prompts and evidence of data exposure at multiple AI providers.

We do not know the identities of the three providers OpenRouter off-boarded from the announcement alone. We do not know how many customers or prompts were affected across the ecosystem. The 125 endpoints should not be described as 125 confirmed breaches. OpenRouter said some removals were precautionary. The full impact depends on provider specific notices and customer usage.

## Key Takeaways

- OpenRouter removed three inference providers after reviewing security research.
- It removed 125 endpoints from Zero Data Retention eligibility, including precautionary removals.
- OpenRouter said its own systems were not shown to be breached.
- The provider names were not disclosed in the public announcement.
- Users should check routes, review prompt data and rotate exposed credentials.

## Related Reading

For practical controls when AI systems handle internal information, see [AI Prompt Injection Document Review Checklist](https://techupates.blog/articles/ai-prompt-injection-document-review-checklist/).

## FAQ

### What did OpenRouter remove on November 22, 2026?

It said it off-boarded three inference providers and removed 125 endpoints from Zero Data Retention eligibility after investigating provider data policy concerns.

### Was OpenRouter itself breached?

OpenRouter said the findings did not show a breach or unauthorised access of OpenRouter. The concerns involved inference providers in its ecosystem.

### Did OpenRouter name the three providers it off-boarded?

No. Its November 22 announcement did not identify the three providers. It linked to provider security notices, but those notices do not prove which providers were off-boarded.

### What does Zero Data Retention mean?

It is a provider or endpoint policy that says prompts and outputs are not retained under stated conditions. Check the exact scope and terms for each endpoint.

### Should OpenRouter users rotate API keys?

Rotate credentials or secrets that may have been included in affected prompts or exposed through a provider incident. Follow the provider notice and your incident response process.

### Can a router guarantee data privacy across all model providers?

No. A router can publish policies and controls, but handling can vary by provider, endpoint and routing path. Verify the exact endpoint you use.
