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

## How It Works

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
