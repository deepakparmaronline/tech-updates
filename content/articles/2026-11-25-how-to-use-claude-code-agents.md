---
title: "How to Use Claude Code Agents for Real Development Tasks"
description: "Learn how to use Claude Code agents with custom subagents, safe tool access, focused prompts, and agent teams for larger parallel development tasks."
category: "Claude"
author: "Tech Updates"
date: 2026-11-25
readingTime: "9 min read"
featuredImage: "/images/claude-code-agents.svg"
tags:
  - "Claude Code"
  - "AI Agents"
  - "Subagents"
  - "Developer Tools"
keyTakeaways:
  - "Start with a focused subagent when you want Claude Code to handle a side task in a separate context."
  - "Use a project-level agent definition when the same role and instructions are needed across a repository."
  - "Limit each agent to the tools it needs and ask for evidence, file paths, and test results in its report."
  - "Agent teams are experimental and disabled by default, so use them only when independent sessions need to coordinate."
faqs:
  - question: "What are agents in Claude Code?"
    answer: "Claude Code uses subagents for focused tasks in separate context windows. Agent teams coordinate several independent Claude Code sessions through shared tasks and messages."
  - question: "How do I create a custom Claude Code agent?"
    answer: "Create a Markdown file with YAML frontmatter in the project .claude/agents directory or your user-level Claude agents directory. Add a name, description, tool permissions, and focused instructions."
  - question: "Where should I save Claude Code subagents?"
    answer: "Use .claude/agents in a repository for project-specific roles. Use the user-level Claude agents directory for roles you want to reuse across projects."
  - question: "Can Claude Code agents work in parallel?"
    answer: "Subagents can handle focused work in parallel and return results to the main session. Agent teams coordinate separate sessions and allow teammates to message each other."
  - question: "Are Claude Code agent teams enabled by default?"
    answer: "No. Anthropic documents agent teams as experimental and disabled by default. They require the CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS setting."
  - question: "Are Claude Code agents safe to run on a production repository?"
    answer: "They can be useful, but access should be limited. Start with read-only tools, review proposed changes, run tests, and keep secrets and production credentials out of the agent context."
---

Claude Code agents help split a development task into smaller jobs. You can ask one worker to inspect a codebase, another to review tests, or a focused reviewer to check a change for security issues. The main benefit is not simply having more agents. It is keeping each task clear, limiting the tools it can use, and bringing back results that are easier to review.

The phrase Claude Code agents can mean two different things. A subagent works inside one Claude Code session and returns a result to the main conversation. An agent team coordinates several separate Claude Code sessions that can share tasks and send messages to one another. Start with subagents for most focused tasks. Use teams only when the work really needs independent sessions.

## Short Answer

To use Claude Code agents, start by defining the job you want done, then decide whether a built-in subagent or a custom subagent is the right fit. For repeated work, create a Markdown definition in the project-level agent directory. Give it a clear name, a short description, only the tools it needs, and instructions that describe the result you expect.

You do not need to build a complex agent setup before using Claude Code. Ask Claude to explore a code path, review a change, or investigate a failing test. When the same side task keeps returning, save the role as a custom subagent. If several independent sessions need to coordinate and challenge one another, review agent teams, but remember that they are experimental and disabled by default.

## What the Question Really Means

A subagent is a specialized assistant with its own context window, system prompt, tool access, and permissions. Anthropic's [custom subagents guide](https://code.claude.com/docs/en/sub-agents) explains that a subagent can handle a side task that would otherwise fill the main conversation with logs, search results, or file contents. It returns a summary to the caller, keeping the main session focused.

An agent team is different. The [agent teams guide](https://code.claude.com/docs/en/agent-teams) describes several independent Claude Code instances that share a task list and communicate directly. A team lead coordinates the work and combines the results. This can help when separate reviewers need to discuss findings or when a feature can be split into independent parts.

Do not confuse either feature with a skill. A skill stores reusable instructions or a workflow. A subagent is a worker that uses its own context to complete a task. A skill can be loaded by a subagent, but it does not automatically become a separate agent.

## How It Works

Claude Code uses the description of a subagent to decide when it is relevant. That description should be specific enough to match the right task. For example, a code reviewer should be described as a reviewer for changed files, not as a general assistant for every coding task.

A custom subagent can use a restricted tool list. This is important because a reviewer usually needs to read files and search the repository, but does not need permission to edit code or run arbitrary shell commands. A test runner may need a different set of tools. Anthropic documents fields for description, tools, model, permission mode, hooks, skills, and other controls in its [frontmatter reference](https://code.claude.com/docs/en/sub-agents).

Subagents run within a single session and return their findings to the main session. They use their own context window, so high-volume exploration does not need to fill the main conversation. Their requests still count toward the same usage limits as the main session.

Agent teams have more coordination overhead. They are useful when teammates need to share findings and make decisions together, but they use more tokens because each teammate is a separate Claude Code instance. Anthropic says agent teams are experimental and disabled by default. Read the [official team setup and limitations](https://code.claude.com/docs/en/agent-teams) before enabling them.

## Practical Steps

### 1. Choose a task that can be separated

Start with a task that has a clear input and output. Good examples include reviewing changed files, finding the source of a failing test, checking whether an API is used consistently, or researching how a module handles authentication.

Avoid creating a subagent for a task that depends on every detail in the main conversation. If the worker needs the full conversation history, a normal request in the main session may be easier. A good subagent can work from a short brief and a defined set of files.

### 2. Create a project-level subagent

For a role that should be available only in one repository, create a Markdown file in the project-level .claude/agents directory. A user-level agent definition can be stored in the user Claude configuration directory when you want to reuse the role across repositories.

A simple read-only reviewer can look like this:

    ---
    name: code-reviewer
    description: Review changed code for bugs, security risks, and missing tests.
    tools:
      - Read
      - Grep
      - Glob
    model: inherit
    ---

    Review the changed files only. Identify concrete bugs, security issues,
    missing tests, and risky assumptions. For every finding, include the file,
    the relevant line or function, why it matters, and a practical fix.
    Do not edit files. Do not claim a test passed unless you ran it.

Keep the description short because Claude uses it when deciding whether to delegate. Put detailed instructions in the body. The example uses read-only tools on purpose. If the reviewer only needs to inspect code, do not give it write or shell access.

### 3. Ask Claude to use the role

Open Claude Code in the repository and describe the task. You can ask it to use the code-reviewer subagent to review the changes in a named folder, or ask for a security review of a specific branch. Give it a clear scope and say what evidence should appear in the report.

You can also ask Claude to delegate automatically when a task matches the subagent description. Explicit requests are useful while testing a new definition because you can confirm that the intended role was selected.

### 4. Give each worker a different job

If you need several checks, separate them by purpose. One subagent can review security, another can look for missing tests, and another can check performance. Avoid asking all of them to review everything, because that creates duplicate work and reports that are harder to combine.

Ask the main session to compare the findings, remove duplicates, and verify each claim against the code. A subagent report is evidence to inspect, not proof that the issue is real. A good report includes exact file paths, functions, and commands so the result can be checked.

### 5. Use agent teams only for independent sessions

When you need multiple Claude Code sessions to coordinate directly, agent teams may be a better fit. Anthropic documents a setting called CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS that enables the feature. It is experimental and disabled by default, so do not switch it on for routine tasks without reading the current limitations.

A good team task has work that can happen in parallel, such as separate frontend, backend, and test investigations. A poor team task is a sequence of edits to the same file. Multiple agents editing the same area can create conflicts and increase the time spent coordinating.

## Common Problems

A subagent may not start because its description is vague or because the task does not match the role. Improve the description with a clear trigger and a specific output. A reviewer that says it checks changed files, security risks, and missing tests is easier to route than one described as a general coding assistant.

Another problem is giving an agent too many tools. A read-only research role does not need file editing or unrestricted shell commands. A tool list should be the smallest set that lets the agent finish its job. If a subagent cannot complete a task because it lacks a tool, ask whether that tool is truly necessary before expanding permissions.

A third problem is treating a summary as a complete audit. The main session should inspect the cited files, rerun tests, and verify the suggested fix. Ask agents to include exact file paths, functions, and commands so the result can be checked.

## What Does Not Work

More agents do not automatically make a task faster. If every worker needs the same context, edits the same files, or waits for another worker, the coordination cost can outweigh the benefit. Use a single session for a straightforward sequential task.

Agent teams are not just a larger subagent setting. They are separate sessions with their own context and shared coordination. They are experimental, can use more tokens, and have limitations around session resumption and task coordination. Do not enable them simply because the word agent sounds more advanced.

A custom subagent also does not guarantee a safe action. Its prompt is not a security boundary by itself. Use tool restrictions, permission controls, and review steps. Keep secrets out of context and do not let an agent merge or deploy code without the checks your repository requires.

## Safety and Limitations

Start with read-only roles. If an agent needs to edit files, limit the scope and review the diff before running it. For commands that can delete data, change production systems, or expose credentials, keep a human approval step.

Treat agent output as untrusted until you verify it. A subagent can misunderstand a code path, miss a dependency, or report a test result incorrectly. Require evidence and run the project tests yourself. For team workflows, make sure each teammate has enough context and does not change the same files as another teammate.

Anthropic's [Claude Code cloud guide](https://code.claude.com/docs/en/claude-code-on-the-web) also explains that cloud sessions can run in separate environments and that access depends on plan and configuration. That is another reason to review environment permissions and network access before sending sensitive repositories to a cloud workflow.

## Key Takeaways

- Use subagents for focused work that can be completed from a clear brief.
- Save repeated roles in .claude/agents and give them only the tools they need.
- Use agent teams for complex work that needs independent sessions and direct communication.
- Keep human review, tests, and permission controls in the workflow.

## Related Reading

For a practical development workflow, read our guide to [Claude Code QA automation](/articles/how-to-use-claude-code-for-qa-automation/). For more ways to extend a coding assistant, explore our [Claude alternatives guide](/claude-alternatives/).

## FAQ

### What are agents in Claude Code?

The term can refer to subagents or agent teams. Subagents handle focused work in separate context windows and return results to the main session. Agent teams coordinate independent sessions through a shared task list and direct messages.

### How do I create a custom Claude Code agent?

Create a Markdown file with YAML frontmatter in the project .claude/agents directory. Add a name, a short description, the tools the role can use, and focused instructions. Start with a read-only tool list unless editing is required.

### Where should I save Claude Code subagents?

Use the project-level .claude/agents directory for roles that belong to one repository. Use the user-level Claude agents directory for roles you want to reuse across projects. Managed and plugin definitions have their own scopes.

### Can Claude Code agents work in parallel?

Yes. Subagents can handle focused tasks in parallel and return their findings to the main session. Agent teams can coordinate separate Claude Code sessions that share tasks and communicate directly, but they add overhead.

### Are Claude Code agent teams enabled by default?

No. Anthropic documents agent teams as experimental and disabled by default. You must enable the experimental setting and should review the current limitations before using them on important work.

### Are Claude Code agents safe for production repositories?

They can help, but safety depends on permissions and review. Limit tools, avoid exposing secrets, inspect every proposed change, and run tests before merging or deploying code.