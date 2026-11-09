---
title: "Claude Code Skills: Build Reusable Workflows with SKILL.md"
description: "Create Claude Code Skills with SKILL.md, organize project and personal workflows, add scripts safely, and test reusable instructions before sharing them."
category: "AI News"
author: "Tech Updates"
date: 2026-11-07
readingTime: "9 min read"
featuredImage: "/images/claude-code-skills-reusable-workflows.svg"
tags:
  - "Claude Code Skills"
  - "SKILL.md"
  - "Anthropic"
  - "AI coding agents"
  - "developer workflow"
keyTakeaways:
  - "This is an evergreen guide to an existing Claude Code feature, not a new November 7 announcement."
  - "Every Skill needs a SKILL.md file with YAML frontmatter and Markdown instructions."
  - "Project Skills live under .claude/skills and can be committed for a team."
  - "Personal Skills live under ~/.claude/skills and load across projects on that machine."
  - "Keep scripts and permissions narrow, and test both automatic and manual invocation."
faqs:
  - question: "What is a Claude Code Skill?"
    answer: "A Skill is a reusable folder of instructions and optional supporting files that Claude Code can load when a task matches its description or when you invoke it directly."
  - question: "What file does every Skill need?"
    answer: "Every Skill needs a SKILL.md file. It contains YAML frontmatter that describes the Skill and Markdown instructions that Claude follows when the Skill runs."
  - question: "Where should I save a project Skill?"
    answer: "Save it under .claude/skills/<skill-name>/SKILL.md inside the repository. Commit the folder if you want the team to share it."
  - question: "Where should I save a personal Skill?"
    answer: "Use ~/.claude/skills/<skill-name>/SKILL.md. Anthropic says personal Skills load across projects on that machine."
  - question: "Can Claude run a Skill automatically?"
    answer: "Yes. Claude can load a Skill when its description matches the task. You can also invoke it directly with a slash command such as /review-release."
  - question: "Should a Skill contain scripts?"
    answer: "It can. Keep the main instructions focused and move detailed references or scripts into supporting files. Review every script and keep tool access narrow."
contentType: "news"
---

This is an evergreen tool guide, not a new November 7 announcement. Anthropic's current Claude Code documentation describes Skills as reusable folders that contain a SKILL.md file, metadata and optional supporting resources. Claude can load a Skill when its description matches a task, or you can invoke it directly with a slash command. This guide shows how to create one, choose where it loads and test it safely.

## News Summary

Claude Code Skills help turn repeat instructions into reusable workflows. A Skill can include a short description, detailed steps, reference files and scripts. The metadata is available for discovery, while the full instructions load when the Skill is used. This keeps a long procedure out of the context until it is needed.

This is not a new feature announcement from the November 6 to 7 research window. The article explains an existing Claude Code capability using Anthropic's current documentation. The same broad Agent Skills approach also appears in Anthropic's platform documentation for API-based agents, but the folder and command workflow below focuses on Claude Code.

## What Happened

Anthropic's Claude Code docs describe Skills as a way to extend what Claude can do with custom commands and reusable procedures. A Skill is built around a SKILL.md file. Its frontmatter tells Claude what the Skill does and when it should be used. The Markdown body explains the workflow.

A Skill can also include supporting files, such as a reference guide, examples or a script. Claude can read those resources when the Skill needs them. You can invoke a Skill directly with a slash command such as /review-release, or let Claude decide that the Skill matches your request.

## Who Is Affected

Skills are useful for developers and teams that repeat the same checks across repositories. Examples include reviewing a pull request, preparing a release, checking a deployment, generating a test report or updating documentation. A team can write the procedure once and reuse it rather than pasting the same instructions into every conversation.

They are less useful for a one-off task that needs only a short prompt. Do not create a Skill for every small instruction. A good Skill captures a repeatable process with clear inputs, steps, checks and expected output.

## Key Details

### Decide whether the procedure belongs in a Skill

Use CLAUDE.md for stable project facts and rules that Claude should always know when it works in that repository. Use a Skill for a procedure that should load only when it is relevant. For example, a project may need a short CLAUDE.md that explains the build command and coding style, while a release-review Skill contains the full checklist for preparing a release.

This distinction keeps the always-loaded instructions small. Anthropic says a Skill's body loads only when it is used, unlike CLAUDE.md content. If a large reference section is needed, move it to a separate file and link to it from the Skill.

### Choose the right location

For a project Skill that should be shared with the repository, create a folder under .claude/skills. A typical path is .claude/skills/review-release/SKILL.md. Commit it so other people who work in the repository can use the same procedure.

For a personal Skill that should be available across your projects on one machine, use ~/.claude/skills/review-release/SKILL.md. Anthropic also documents managed settings for organisation-wide Skills and additional directories that can be loaded for a session. The location controls who can see and use the Skill, so choose it deliberately.

### Create the folder and file

Create a directory with a clear name. Add a SKILL.md file inside it. The file needs YAML frontmatter between two lines containing three hyphens, followed by Markdown instructions. The name and description are the important starting fields. The name or folder name becomes the slash command, and the description helps Claude decide when the Skill should load automatically.

A simple frontmatter example looks like this:

~~~yaml
---
name: review-release
description: Review a release candidate, check the changelog and tests, and report blockers before publishing.
---
~~~

The body should explain the task in a predictable order. State what input the Skill expects, what files it may read, what commands it may run, what it must not change and how it should report results. Avoid vague descriptions such as "help with releases". A useful description names both the job and the situation in which it should run.

### Write instructions that can be checked

A Skill should describe observable steps. Instead of saying "make sure the code is good", ask Claude to inspect the diff, run the repository's test command, check the changelog and list any unverified assumptions. Define what counts as a blocker and what should happen when a command fails.

Use a small number of clear steps. If the Skill needs a long API reference or a list of examples, put those in a separate file such as reference.md or examples.md. Link to the file from SKILL.md and tell Claude when to open it. Anthropic recommends keeping the main file focused and moving large reference material into supporting files.

### Add scripts only when they make the task more reliable

A Skill can include scripts for deterministic work, such as checking a version string or formatting a report. Scripts can make a process more repeatable than asking the model to reproduce every calculation from memory. Put them in a scripts folder and explain their inputs and outputs.

Review every script before you let Claude run it. A Skill is not a security boundary. It does not make a dangerous command safe. Keep commands narrow, avoid embedding passwords or API keys, and do not grant permission to delete files or publish content unless that action is part of an approved workflow.

## Why It Matters

Reusable Skills can make a team's AI workflow more consistent. A release checklist can remind every contributor to run the same tests. A support workflow can ask for the same diagnostic details before it suggests a fix. A documentation workflow can keep the output format stable without requiring a long prompt every time.

The progressive loading model also helps manage context. Anthropic's platform docs describe Skills as metadata, instructions and resources that are loaded at different stages. The metadata helps Claude discover a relevant Skill. The main instructions load when it is triggered. Supporting scripts and reference files load only when needed.

That design can reduce repeated prompt work, but it does not guarantee that Claude will follow every instruction perfectly. You still need tests, permissions and review. Treat a Skill as a documented workflow that guides the model, not as a locked-down program.

## What We Know and Do Not Know

Anthropic's current Claude Code docs state that every Skill needs a SKILL.md file with YAML frontmatter and Markdown content. They also describe personal, project, nested, managed and plugin locations. Project Skills load for sessions in that repository and can be committed for a team. Personal Skills load across projects on that machine.

The documentation also says Skills follow the Agent Skills open standard, while Claude Code adds its own invocation controls and advanced features. That does not mean every frontmatter field works the same way in every tool. If you plan to share a Skill across products, check which fields are supported by each platform.

A Skill does not automatically grant new permissions. It can ask Claude to use tools, but the permission system and user approval still matter. A script can also make a mistake or change the wrong file if it is written too broadly.

## What Happens Next

Start with one Skill that solves a repeat problem. Keep the first version small. Ask Claude to use it on a safe example, inspect the result and compare it with the checklist you intended to encode. Then try a task that should not trigger the Skill. If it loads too often, make the description more specific.

Test the slash command as well as automatic selection. Confirm that the Skill appears under the expected name and that supporting files load from the correct path. If you work in a monorepo, test from the directory where the Skill should apply. Anthropic documents how nested Skills load in subdirectories.

Review the Skill when the project changes. Update file paths, test commands and permissions when the repository changes. Remove outdated steps rather than letting a checklist grow forever. A short, accurate Skill is more useful than a long file that no one trusts.

## Final takeaway

Claude Code Skills are a practical way to package repeatable instructions. Put project procedures in .claude/skills, personal procedures in your home directory, and keep the main SKILL.md focused. Add supporting files only when they help, keep permissions narrow and test the Skill with both matching and non-matching tasks.

## Related Reading

For more Claude Code workflows, see [How to use Claude Code in VS Code](/articles/how-to-use-claude-code-in-vs-code/), [How to use Claude Code for QA automation](/articles/how-to-use-claude-code-for-qa-automation/) and [How to update Claude Code](/articles/how-to-update-claude-code/).

## Key Takeaways

- This is an evergreen guide, not a new November 7 feature announcement.
- Every Claude Code Skill needs a SKILL.md file with YAML frontmatter and Markdown instructions.
- Project Skills live under .claude/skills and can be committed for a team.
- Personal Skills live under ~/.claude/skills and load across projects on that machine.
- Keep scripts and permissions narrow, and test both automatic and manual invocation.

## FAQ

### What is a Claude Code Skill?

A Skill is a reusable folder of instructions and optional supporting files that Claude Code can load when a task matches its description or when you invoke it directly.

### What file does every Skill need?

Every Skill needs a SKILL.md file. It contains YAML frontmatter that describes the Skill and Markdown instructions that Claude follows when the Skill runs.

### Where should I save a project Skill?

Save it under .claude/skills/<skill-name>/SKILL.md inside the repository. Commit the folder if you want the team to share it.

### Where should I save a personal Skill?

Use ~/.claude/skills/<skill-name>/SKILL.md. Anthropic says personal Skills load across projects on that machine.

### Can Claude run a Skill automatically?

Yes. Claude can load a Skill when its description matches the task. You can also invoke it directly with a slash command such as /review-release.

### Should a Skill contain scripts?

It can. Keep the main instructions focused and move detailed references or scripts into supporting files. Review every script and keep tool access narrow.

## Sources and further reading

- [Anthropic Claude Code Docs: Extend Claude with skills](https://code.claude.com/docs/en/skills)
- [Anthropic Platform Docs: Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Anthropic Platform Docs: Get started with Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/quickstart)
