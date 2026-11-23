---
title: "Novita Discloses MiniMax Request Routing and Privacy Issue"
description: "Novita says a routing configuration sent some MiniMax API requests to MiniMax's official API, where request data may have been accessed or retained."
category: "AI News"
contentType: "news"
author: "Tech Updates"
date: "2026-11-22"
readingTime: "8 min read"
featuredImage: "/images/novita-minimax-request-routing-privacy-incident.svg"
tags:
  - "Novita AI security"
  - "MiniMax API"
  - "AI request routing"
  - "AI privacy incident"
keyTakeaways:
  - "Novita said a routing configuration issue caused some MiniMax requests to be forwarded to MiniMax's official API instead of being processed on Novita hosted infrastructure."
  - "The affected request window ran from May 28 through November 11, 2026, according to Novita's notice."
  - "Novita said the requests may have been accessed or retained by a third party and that affected models were suspended."
  - "Users who included live credentials or secrets in those requests should revoke or rotate them and review their own logs."
faqs:
  - question: "What happened to MiniMax requests on Novita?"
    answer: "Novita said a routing configuration issue caused some requests to be forwarded to MiniMax's official API rather than processed on Novita hosted infrastructure."
  - question: "Which dates were affected by the Novita routing issue?"
    answer: "Novita identified requests made from May 28, 2026, through November 11, 2026, as potentially affected."
  - question: "Were Novita users' prompts exposed?"
    answer: "Novita said request contents may have been accessed or retained by a third party. It described evidence of access to tracking URLs and hostnames in test requests."
  - question: "Did Novita suspend the affected MiniMax models?"
    answer: "Yes. Novita said it promptly suspended the affected models while it investigated the processing path."
  - question: "What should affected users do?"
    answer: "Review whether requests contained secrets, rotate exposed credentials, check logs and contact Novita through the privacy contact in its notice if they need account specific information."
  - question: "Did this affect every MiniMax request on every platform?"
    answer: "No such broad conclusion is supported. Novita described requests routed through its service during the stated period, including requests routed to Novita through OpenRouter."
---
Novita disclosed on November 22, 2026, that a routing configuration issue caused some MiniMax requests to be forwarded to MiniMax's official API rather than being processed on Novita hosted infrastructure. Novita said requests made from May 28 through November 11 may have been accessed or retained by a third party. The company said it suspended the affected models and is checking the processing path. Users who sent live credentials or other secrets in those requests should rotate them.

## News Summary

The notice matters because a customer may choose an AI model through one platform while the request is ultimately processed by another provider. Novita said a routing rule intended for specific customers applied more broadly. As a result, some requests passed to MiniMax's official API. The company said the affected models were suspended and that it was following up with MiniMax about any retained data and deletion.

The notice includes requests made directly through Novita and requests routed to Novita through OpenRouter. That detail connects the disclosure to OpenRouter's November 22 update about inference provider data handling. It does not mean that every OpenRouter request or every MiniMax request was affected. The scope described by Novita is limited to the requests that used the affected Novita routing path during the stated dates.

The primary source is [Novita's Privacy Notice Regarding MiniMax Requests](https://novita.ai/blog/minimax-requests-privacy-notice/). OpenRouter's [provider incident update](https://openrouter.helicone.ai/blog/announcements/data-processing-incidents-on-inference-providers/) links to provider notices and describes the wider response to data policy concerns. These sources establish the company statements. They do not independently identify every affected customer or request.

## What Happened

Novita said it received a report from an independent security researcher about how MiniMax requests were handled. Its review confirmed that some requests were forwarded to MiniMax's official API rather than processed on Novita hosted infrastructure. Novita attributed the issue to a routing configuration intended for specific customers that applied more broadly.

The company identified May 28 to November 11, 2026, as the period in which requests may have been affected. It said the issue covered requests made directly through Novita and requests routed through OpenRouter to Novita. Novita said it suspended the affected models after confirming the problem.

The notice also describes evidence observed by the researcher. The researcher saw access to URLs and hostnames embedded in test requests. Novita said no use of the AWS test key markers was observed. It said the access patterns suggested automated content review may have been involved, and that it was following up with MiniMax to verify the assessment and understand how the data was handled.

## Why It Matters

The incident highlights the difference between a model name and the infrastructure that processes a request. A developer may select a MiniMax model in a third party service and assume the request stays within that service's own infrastructure. In a routed system, the request can pass to a partner or the model provider's official API. The actual processing path matters for privacy, retention and contractual obligations.

Prompts can contain sensitive information even when users do not intend to share it. A developer may include an API key in a code example. A support workflow may send a customer email or account identifier. An agent may attach internal documents to provide context. If the request is routed to a different provider, the data handling terms and retention practices may change.

The event also shows why data retention claims need to be specific. Novita says it does not retain customer prompts or generated outputs or use them for model training. The notice explains that some requests were nevertheless forwarded to MiniMax's official API, where the data may have been accessed or retained by a third party. A provider's own retention statement does not automatically describe the behaviour of every downstream API path.

## Key Details

### The affected time window

Novita identified May 28 through November 11, 2026, as the relevant request window. This is a historical period, not a statement that the issue remained active after November 11. The notice was published on November 22, after the company reviewed the researcher's report and confirmed the routing issue.

Users should search logs for MiniMax requests that passed through Novita during this window. The model name alone may not be enough. Check provider identifiers, endpoint configuration, request timestamps and any OpenRouter routing records. If your application changed model providers automatically, inspect the fallback configuration as well.

### The routing configuration

Novita said a routing configuration intended for specific customers applied more broadly. That is the central technical cause described in the notice. The company did not publish a full configuration diagram or every affected customer identifier in the public statement. Avoid assuming that the issue involved a general compromise of every Novita system or all model routes.

A routing rule can be part of a normal multi provider architecture. It decides where a request is sent, which endpoint receives it and what response returns to the application. If the rule is broader than intended, requests may reach a destination that was not expected by the customer. Configuration review and request path testing are therefore important security controls.

### What the researcher observed

Novita said the researcher observed accesses to URLs and hostnames embedded in test requests. Such markers can help identify whether prompt content was accessed after it was sent. Novita said the researcher did not observe use of the AWS test key markers. It described the access patterns as suggesting automated content review may have been involved, while noting that it was still following up with MiniMax.

This distinction matters. The public notice does not say that every customer prompt was read by a person, nor does it say that all test credentials were used. It says that request contents may have been accessed or retained by a third party and that the company is investigating the handling of the data.

### Actions taken by Novita

Novita said it promptly suspended the affected models. It is verifying processing paths for the MiniMax endpoints and following up with MiniMax about retained customer data and deletion. The company also said it is improving Partner API labelling and disclosures about provider data retention policies and terms of service.

The notice recommends that users revoke or rotate live credentials, API keys or other secrets if they were included in requests. It provides a privacy contact for account specific questions. Users should follow the notice and their own organisation's incident response process.

## Who Is Affected

The most relevant group is customers who sent MiniMax requests through Novita between May 28 and November 11. This includes direct Novita users and users whose requests reached Novita through OpenRouter. If you used a different provider or route, do not assume you were affected based only on the model name. Confirm the actual endpoint and provider path.

Developers should review API logs and source code for requests sent during the period. Search for prompts that contained tokens, passwords, cloud credentials, customer data, internal URLs or private source code. Rotate credentials that may have been included. If you cannot determine whether a secret was sent, treat it as a possible exposure and review it with the security owner.

Organisations should check whether the affected route was used by production systems, internal tools, experiments or employee accounts. Review the data categories sent to the model and identify whether any contractual, privacy or customer notification steps are required. Preserve relevant logs before changing the configuration, and document which endpoints were in use.

## What Happens Next

Novita said it was verifying processing paths and following up with MiniMax about data retention and deletion. The public notice does not provide a final list of affected customer accounts or a complete report of all data that may have been accessed. Users who need account specific information should contact the company through the privacy address in its notice.

Customers should check for a later update before assuming that every question has been resolved. Look for a clear description of the affected endpoints, the data involved, whether retained copies were found and whether deletion was confirmed. If the provider changes the routing design, ask for the new path and the applicable retention terms.

The incident is also a practical reason to reduce the amount of sensitive information sent to AI models. Use test data where possible, remove secrets from prompts, limit the context supplied to agents and store credentials in a secret manager. If a model needs access to an internal system, give it a narrowly scoped tool rather than pasting credentials into the conversation.

## What We Know and Do Not Know

We know that Novita confirmed a routing configuration issue, said some MiniMax requests were forwarded to MiniMax's official API and identified May 28 through November 11 as the potentially affected period. We know it suspended affected models and recommended rotating secrets included in requests. We know the notice includes direct Novita requests and requests routed through OpenRouter to Novita.

We do not know the complete number of affected customers, the total volume of requests or whether every request was accessed or retained. Novita said the researcher observed access to tracking URLs and hostnames, but it did not publish a full customer by customer impact list. It also said it was still following up with MiniMax on the handling and deletion of retained data.

## Key Takeaways

- Novita confirmed that some MiniMax requests were routed to MiniMax's official API.
- The potentially affected request period was May 28 to November 11, 2026.
- The issue included direct Novita requests and requests routed through OpenRouter.
- Novita suspended affected models and is reviewing the processing path.
- Rotate any live credentials or secrets that may have been included in affected prompts.

## Related Reading

For the wider provider response, see [OpenRouter Removes Three Providers and 125 ZDR Endpoints](https://techupates.blog/articles/openrouter-removes-three-providers-125-zdr-endpoints/).

## FAQ

### What happened to MiniMax requests on Novita?

Novita said a routing configuration issue caused some requests to be forwarded to MiniMax's official API rather than processed on Novita hosted infrastructure.

### Which dates were affected by the Novita routing issue?

Novita identified requests made from May 28, 2026, through November 11, 2026, as potentially affected.

### Were Novita users' prompts exposed?

Novita said request contents may have been accessed or retained by a third party. It described evidence of access to tracking URLs and hostnames in test requests.

### Did Novita suspend the affected MiniMax models?

Yes. Novita said it promptly suspended the affected models while it investigated the processing path.

### What should affected users do?

Review whether requests contained secrets, rotate exposed credentials, check logs and contact Novita through the privacy contact in its notice if account specific information is needed.

### Did this affect every MiniMax request on every platform?

No such broad conclusion is supported. Novita described requests routed through its service during the stated period, including requests routed to Novita through OpenRouter.
