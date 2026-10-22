---
title: "What Is CLAUDE.md? Claude Code Project Memory Explained"
description: "Learn what CLAUDE.md does in Claude Code, where to place it, what instructions to include, and how to avoid stale or conflicting project guidance."
category: Claude
author: Tech Updates
date: 2026-10-15
readingTime: "9 min read"
featuredImage: "/images/what-is-claude-md.svg"
tags:
  - Claude Code
  - CLAUDE.md
  - AI coding
  - developer workflow
keyTakeaways:
  - "CLAUDE.md gives Claude Code project instructions and context that it can load automatically."
  - "Keep shared project rules in the repository and personal preferences in your user level memory file."
  - "Write short, testable instructions and review them when the project changes."
faqs:
  - question: "What is CLAUDE.md?"
    answer: "CLAUDE.md is a Markdown file Claude Code reads to learn project guidance, conventions, and useful commands."
  - question: "Does Claude Code read CLAUDE.md automatically?"
    answer: "Yes. Claude Code loads applicable memory files from its working directory and parent directories when a session starts."
  - question: "Where should I put CLAUDE.md?"
    answer: "Use a repository root CLAUDE.md for shared project instructions and ~/.claude/CLAUDE.md for personal instructions across projects."
  - question: "Can CLAUDE.md include other files?"
    answer: "Yes. Claude Code supports imports using an @path syntax, subject to its documented import rules."
  - question: "Does CLAUDE.md replace tests?"
    answer: "No. It can tell Claude which tests and checks to run, but the project still needs actual tests and review."
  - question: "Can CLAUDE.md make Claude always follow every rule?"
    answer: "No. Treat it as guidance, check the resulting work, and use permissions and tests for important safeguards."
sources:
  - "https://support.claude.com/en/articles/14553240-give-claude-context-claude-md-and-better-prompts"
  - "https://docs.anthropic.com/en/docs/claude-code/memory"
  - "https://docs.anthropic.com/en/docs/claude-code/settings"
---

## Short Answer

\`CLAUDE.md\` is a plain Markdown file that gives Claude Code useful context about a codebase. It can explain how the project is organized, which commands to run, what coding style to follow, and which mistakes to avoid. Anthropic describes it as project memory that Claude Code loads when it starts a session. See the official [CLAUDE.md guide](https://support.claude.com/en/articles/14553240-give-claude-context-claude-md-and-better-prompts).

The file is not source code and does not change how an application runs by itself. It gives the coding assistant a repeatable brief, so you do not have to explain the same project rules in every prompt. Good instructions make work more consistent, but you still need tests, code review, and normal permission checks.

## What the Question Really Means

People often find that a coding assistant needs the same project details repeated in many prompts. Which package manager does the repository use? What tests should run before a change? Which folders are generated and should not be edited? A `CLAUDE.md` file gives Claude Code a place to find these recurring rules.

It helps to separate three kinds of guidance. Project instructions belong in a repository file so teammates can share them. Personal preferences can live in a user level memory file. Short task specific requirements can stay in the current prompt. Keeping these layers clear makes the instructions easier to maintain and reduces conflicting advice.

The file is not a security boundary. It cannot replace repository permissions, automated tests, code review, or careful handling of secrets. It is best treated as a durable project brief that improves the assistant's context, not as a guarantee that every instruction will always be followed.

## How It Works

Claude Code supports memory files such as `CLAUDE.md` to provide context about a project. According to Anthropic's documentation, it can discover applicable files in the working directory and parent directories. A root level file is a useful place for instructions that apply to the whole repository. More local files can describe rules for a specific subfolder or component.

A useful file answers questions the assistant would otherwise need to ask repeatedly. It might explain the repository layout, the preferred commands for installing dependencies, how to run unit tests, formatting rules, and which files are generated. Keep instructions clear enough that a person could follow them too.

Claude Code also supports importing other files with an `@path` reference. This can help teams split a long guide into smaller documents, but imported instructions should remain easy to find and review. Check the current official memory documentation for supported syntax and behavior, because features can change between versions.


## Practical Steps

## Common Problems

## What Does Not Work

## Safety and Limitations

## Key Takeaways

## Related Reading

## FAQ

## Sources

- [Give Claude context with CLAUDE.md](https://support.claude.com/en/articles/14553240-give-claude-context-claude-md-and-better-prompts)
- [Manage Claude Code memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Claude Code settings](https://docs.anthropic.com/en/docs/claude-code/settings)
