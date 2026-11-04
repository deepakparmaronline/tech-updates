---
title: "Tencent Hy4: New AI Model Adds Vision and Cyber Safeguards"
description: "Tencent announced Hy4 with vision and tool calling, while limiting cyber training to defensive tasks. See what the model can and cannot do for teams today."
category: "AI News"
author: "Tech Updates"
date: 2026-11-04
readingTime: "10 min read"
featuredImage: "/images/tencent-hy4-vision-defensive-cyber-training.svg"
tags: ["Tencent Hy4","AI model release","AI cybersecurity","open source AI","computer use"]
keyTakeaways:
  - "Tencent announced Hy4 on November 4 with visual understanding, tool calling, and computer-use capabilities."
  - "Tencent says its cybersecurity training focuses on defensive analysis and vulnerability remediation, while excluding offensive exploit material."
  - "Model weights and a system card were not yet public at announcement time, so outside reviewers still need to examine the release."
faqs:
  - question: "What is Tencent Hy4?"
    answer: "Hy4 is Tencent's latest large language model announcement, with new visual understanding, tool calling, computer use, and longer task capabilities."
  - question: "Can Tencent Hy4 understand images?"
    answer: "Tencent says Hy4 adds visual understanding for image processing, chart analysis, and mathematical visual reasoning."
  - question: "Does Hy4 support computer use?"
    answer: "Tencent says Hy4 can work with command-line and graphical user interfaces, including tasks involving professional software such as Blender and CAD."
  - question: "Is Hy4 an open-source model?"
    answer: "Tencent described Hy4 as part of its open-source model lineup, but it said model weights and system cards would be released in the coming days."
  - question: "What cybersecurity safeguards did Tencent describe?"
    answer: "Tencent says Hy4 was trained on defensive security data and that offensive exploit material was excluded. Reuters reports similar claims from the company."
  - question: "Can outside researchers verify Hy4's safety claims now?"
    answer: "Not fully at the time of the announcement. The weights and system card were still pending, so external evaluation depends on their release."
contentType: "news"
---
Tencent announced Hy4 on November 4, 2026, describing it as a new large language model with visual understanding, tool calling, and computer-use capabilities. The company also highlighted limits in its cybersecurity training, saying the model was prepared for defensive analysis and vulnerability remediation rather than offensive exploitation. The announcement is notable, but its model weights and system card were still due in the coming days.

## News Summary

Hy4 is a new Tencent model that adds visual understanding to the company's model lineup and expands its ability to carry out longer tasks. Tencent says it can analyse images and charts, use tools, and interact with both command-line and graphical interfaces. The company also says it trained the model with defensive security data and excluded offensive exploit material.

Tencent's announcement was distributed at 19:13 China Standard Time on November 4, which was 16:43 in India. Reuters published its report at 10:34 UTC, or 16:04 IST, and independently described the company's cybersecurity claims. Both reports fall inside the November 3, 22:22 IST to November 4, 22:22 IST research window. The key limitation is that Tencent said the model weights and system cards would follow in the coming days, so outside researchers could not yet inspect the full release.

## What Happened

Tencent announced Hy4 as its latest large language model. The company says the model adds visual understanding for the first time in this model line, along with improvements to instruction following, long-context comprehension, and long-horizon agentic tasks. It also describes computer-use capabilities that allow the model to interact with command-line interfaces and graphical user interfaces.

The announcement covers more than text chat. Tencent says Hy4 can process images, analyse complex charts, and support mathematical visual reasoning. It says the model has also received training on professional software such as Blender and CAD, with the goal of planning and carrying out longer tasks. These are company-reported capabilities. Their practical quality will need to be checked through independent tests after the model is available for wider evaluation.

The release also puts attention on cybersecurity and biosafety. Tencent says it prioritised defensive security data, including proof-of-concept work and vulnerability remediation. It says offensive material related to exploitation was excluded. Reuters reported that Tencent said the model's training did not include material for building hacking tools or breaking into systems. The distinction matters because a model can help defenders understand a software flaw without being designed to provide instructions for attacking a live system.

## Why It Matters

The announcement shows how model releases are increasingly judged on both capability and risk controls. Visual understanding and computer use can make a model more useful for practical work. A system that can read a chart, interpret a screenshot, and operate a software interface may help with tasks that go beyond writing a paragraph. The same abilities also need careful access controls when they interact with files, browsers, code, or business systems.

Cybersecurity is a sensitive area because the same knowledge can support defence or misuse. Security teams need models that can help explain a vulnerability, review a patch, and support remediation. They do not need a model to provide a simple path from a public prompt to an exploit against a real target. Tencent's stated approach is to focus training on defensive work and to exclude offensive material. That is a useful design goal, but it is not a substitute for external testing.

The release also matters for developers who want more control over where a model runs and how it connects to tools. Tencent described Hy4 as part of its open-source model effort, but the weights and system card were not yet published at announcement time. Until those files are available, developers should not treat the model as ready for unrestricted self-hosting or independent security review.

## Key Details

### Visual understanding and tool calling

Tencent says Hy4 can perform fine-grained image processing, analyse complex charts, and support mathematical visual reasoning. It also says the model has stronger tool-calling capabilities. These features could help with tasks such as reading a chart in a report, understanding a screenshot, or working through a multi-step business process.

The quality of those tasks depends on more than the model announcement. Teams need to test whether the system reads labels correctly, understands the context of a visual, and asks for clarification when the input is unclear. A chart with a small axis label or a screenshot with hidden information can still lead to a wrong answer. A good evaluation should use real examples from the team's work and compare the output with a trusted result.

### Computer use across interfaces

Tencent says Hy4 can interact with command-line interfaces and graphical user interfaces. It also describes training on software such as Blender and CAD. That suggests the model is intended to work with applications, not only answer questions about them.

Computer use should be treated as an action capability. A model that can click, type, run commands, or change a file needs limits on what it can access. A safe test environment should use a separate account, sample data, and clear approval steps. Do not connect an experimental model to production systems or sensitive files without access controls and monitoring.

### Cybersecurity training

Tencent says the training focused on defensive security data, proof-of-concept development, and vulnerability remediation. It also says offensive materials related to exploitation were excluded. Reuters reported that Tencent described the model as being restricted to defensive uses such as finding software flaws and helping fix them, while excluding content for building hacking tools and breaking into systems.

There is a difference between a company's description of its training process and a public audit of the final model. A model may still produce unexpected output even when training data is filtered. Security teams should test it with controlled prompts, inspect tool permissions, and keep human review for any action that could affect a real system.

### Availability and release status

Tencent says Hy4 is available through services including Tencent Cloud TokenHub, WorkBuddy, CodeBuddy, Yuanbao, WeCom's AI Assistant, and ima. It also listed third-party platforms that are making the API available. The company said the model weights and system cards would be released in the coming days. That means the product announcement and the public availability of model files are separate milestones.

Tencent also announced limited promotions around the launch. WorkBuddy and CodeBuddy were scheduled to be free from November 4 to 15, and the company said Hy4 would be available at a discount on TokenHub through December 31, 2026. These offers are tied to Tencent's own services and may have regional or account conditions.

## Who Is Affected

Developers may be interested in the model's tool calling, visual understanding, and computer-use features. Product teams may want to test whether it can work with their documents, dashboards, or software interfaces. Security teams will be interested in the defensive training claims and whether the model can support vulnerability review without providing unsafe instructions.

Researchers and model evaluators have a different task. They need access to the weights, system card, and enough documentation to reproduce tests. Until those materials are available, outside reviewers should treat the safety statements as company claims rather than independent conclusions. Enterprises should also check data handling, model hosting, access controls, and service terms before sending business information to a new model.

## What Happens Next

The next important step is the release of model weights and the system card. Those materials can help researchers inspect the model, test the published claims, and understand its known limitations. Independent benchmarks should include visual tasks, long-horizon work, tool use, and cybersecurity prompts that cover both defensive and risky requests.

Developers should also watch the service documentation for model versions, API availability, pricing, rate limits, and supported regions. A feature that appears in a launch announcement may arrive gradually or work differently across services. Teams should run their own tests before replacing a model in a production workflow.

For computer use, the next question is how permissions are handled. A useful system should make it clear which actions it can take, what information it can read, and when a person must approve a step. Logs, isolated environments, and reversible actions are important controls when a model interacts with software.

## What We Know and Do Not Know

We know that Tencent announced Hy4 on November 4 and described new visual, tool-use, and computer-use features. We also know that Tencent said its cybersecurity training focused on defensive work and excluded offensive exploit material. Reuters reported those claims and the company's stated plans for a later release of weights and safety information.

We do not yet have the public model weights or system card from the announcement. We also do not have independent evidence that every claimed capability works as described across different tasks or that the model cannot be misused. Internal testing is useful, but it is not the same as a public evaluation by independent researchers. The next release should make it easier to test the model rather than relying only on launch statements.

## Key Takeaways

- Tencent announced Hy4 on November 4 with visual understanding, tool calling, and computer use.
- The company says its cybersecurity training focused on defensive work.
- Reuters reported the same broad safeguards claim and the plan to release weights later.
- The model weights and system card were still pending at announcement time.
- Teams should test the model in a controlled environment before connecting it to real systems.

## Related Reading

For a wider look at model security, read our report on [Qwen model security testing](/articles/qwen-model-security-test-cohere-report/). For safe tool access, see [how to set permissions for AI agents](/articles/ai-agent-permissions-sandbox-human-review/).

Sources: [Tencent's Hy4 announcement](https://en.prnasia.com/releases/apac/tencent-launches-hy4-joining-the-ranks-of-the-world-s-leading-open-source-ai-models-554689.shtml) and [Reuters' report](https://www.reuters.com/legal/litigation/tencent-rolls-out-ai-model-trained-with-limited-cybersecurity-data-amid-hacking-2026-11-04/).

## FAQ

### What is Tencent Hy4?

Hy4 is Tencent's latest large language model announcement. Tencent says it adds visual understanding, tool calling, computer use, and improvements for longer tasks.

### Can Tencent Hy4 understand images?

Tencent says Hy4 adds visual understanding for image processing, complex chart analysis, and mathematical visual reasoning. Independent testing will be needed to measure how well it handles real inputs.

### Does Hy4 support computer use?

Tencent says Hy4 can interact with command-line and graphical user interfaces. It also says the model received training on professional software such as Blender and CAD.

### Is Hy4 an open-source model?

Tencent described Hy4 as part of its open-source model lineup. However, the company said the model weights and system cards would be released in the coming days, so those files were not yet public at announcement time.

### What cybersecurity safeguards did Tencent describe?

Tencent says Hy4 was trained on defensive security data and that offensive exploit material was excluded. Reuters reported that Tencent said it excluded content for building hacking tools and breaking into systems.

### Can outside researchers verify Hy4's safety claims now?

Not fully at the time of the announcement. The model weights and system card were still pending. External evaluation depends on those materials and independent testing.
