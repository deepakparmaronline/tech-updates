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

Start with a short file at the repository root. Add only instructions that are useful across many tasks, then expand it when you discover a repeated problem.

1. **Describe the project.** Explain what the application does, the main language and framework, and where important code lives.
2. **List the setup commands.** Include the supported package manager and the commands needed to install dependencies and start a local development environment.
3. **Document the checks.** Tell the assistant which lint, test, type check, and build commands to run. State which checks are required before a change is considered ready.
4. **Set code conventions.** Mention patterns the project already uses, naming rules, and any important compatibility constraints. Avoid vague instructions such as “write perfect code.”
5. **Mark sensitive or generated areas.** Explain which folders are generated, which files should not be edited manually, and how secrets should be handled. Never paste real credentials into the file.
6. **Keep instructions testable.** Prefer “run `npm run test` after changing a component” over “always make the code high quality.”
7. **Review it with the team.** Treat the file like documentation. Update it when commands, architecture, or conventions change.

A simple example might say: “Use the existing TypeScript patterns. Do not edit generated files in `dist/`. Run `npm run lint` and `npm test` after code changes. Do not commit environment files or credentials.” Adjust the commands and folders to match the actual repository rather than copying this example unchanged.

## Common Problems

**Claude ignores a rule in the file.** Check that the instruction is loaded in the current project, written clearly, and not contradicted by another instruction. Then review the actual change and run the required tests. Do not rely on memory files as the only control for important actions.

**The file becomes too long.** Keep the most important rules near the top and move detailed topic specific guidance into linked or imported files when supported. Remove outdated instructions and repeated examples.

**Two files give conflicting directions.** Review the project root file, local memory files, and user level guidance. Decide which rule should apply and make the hierarchy explicit. Do not assume the assistant will infer the team's intended priority correctly.

**A teammate cannot reproduce the behavior.** Confirm that the shared file is committed and is in the expected directory. Personal user level memory is not automatically shared with the repository.

**The instructions mention commands that no longer work.** Run them yourself, update the file to match the current project, and keep the setup guide aligned with the package scripts and development documentation.


## What Does Not Work

A `CLAUDE.md` file does not make an unsafe command safe. If the assistant has access to a tool or directory, the real permission system still matters. Keep approval steps for destructive operations and do not put secrets in prompts or project memory.

Do not copy a long generic template into every repository. Instructions that do not match the project's stack create noise and can mislead the assistant. Start with the actual workflow, then add a rule when a real issue or repeated question shows it is needed.

Do not treat a memory file as a replacement for tests. It can ask Claude Code to run tests, but it cannot prove the tests are meaningful or that the code is correct. Inspect important changes and verify results independently.

## Safety and Limitations

Project memory files are plain text and may be committed to version control. Before sharing one, check for API keys, private endpoints, customer details, internal incident notes, and other information that should not be public. Use environment variables or an approved secret manager for credentials.

Treat instructions in downloaded code, issues, logs, and other external content as untrusted unless the project team has reviewed them. A repository memory file should explain how to handle such content, but it cannot remove the need for judgment. Keep the assistant's access limited to the files and tools needed for the task.

Anthropic may update Claude Code's memory behavior, file discovery, and import syntax. Use the current official documentation for exact behavior rather than relying on old blog posts. When debugging, ask Claude Code to summarize which project instructions it found, then compare that with the actual files on disk.


## Key Takeaways

- `CLAUDE.md` gives Claude Code repeatable project context and working rules.
- Put shared instructions in the repository and personal preferences in a user level file.
- Keep instructions short, current, specific, and easy to verify.
- Use imports when supported and when they make a large guide easier to maintain.
- Do not store credentials or private customer information in project memory.
- Use real permissions, tests, and code review for safeguards. A Markdown file is not a security boundary.

## Related Reading

- [Give Claude context with CLAUDE.md](https://support.claude.com/en/articles/14553240-give-claude-context-claude-md-and-better-prompts)
- [Manage Claude Code memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Claude Code settings](https://docs.anthropic.com/en/docs/claude-code/settings)

## FAQ

### What is CLAUDE.md?

It is a Markdown file that provides Claude Code with project instructions, conventions, commands, and useful context.

### Does Claude Code read CLAUDE.md automatically?

Claude Code can load applicable memory files from the project and parent directories. Check the current official guide for exact discovery behavior.

### Where should I put CLAUDE.md?

A repository root file is a practical place for shared project guidance. Use a user level memory file for personal instructions that should apply across projects.

### Can CLAUDE.md include other files?

Yes. Anthropic documents an `@path` import syntax for bringing in other files. Review the current documentation for the supported syntax and limitations.

### Does CLAUDE.md replace tests?

No. It can document which tests to run, but the tests still need to execute and their results need to be reviewed.

### Can CLAUDE.md make Claude follow every rule?

No. It can improve consistency, but it is not a guarantee. Use appropriate permissions, tests, and human review for important changes.

### Should I include API keys in CLAUDE.md?

No. Treat the file as ordinary project text that may be committed and shared. Use approved environment variables or a secret manager for credentials.

### How often should I update the file?

Review it when setup commands, project structure, coding standards, or test workflows change. Remove stale guidance that no longer matches the repository.

## Sources

- [Give Claude context with CLAUDE.md](https://support.claude.com/en/articles/14553240-give-claude-context-claude-md-and-better-prompts)
- [Manage Claude Code memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Claude Code settings](https://docs.anthropic.com/en/docs/claude-code/settings)
