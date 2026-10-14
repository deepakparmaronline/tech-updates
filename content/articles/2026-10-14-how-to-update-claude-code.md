---
title: "How to Update Claude Code and Check Your Installed Version"
description: "Learn how to update Claude Code, check your installed version, choose the right install method, and fix common update problems without risking project files."
category: Claude
author: Tech Updates
date: 2026-10-14
readingTime: "8 min read"
featuredImage: "/images/how-to-update-claude-code.svg"
tags:
  - Claude
  - Claude Code
  - Developer tools
  - Terminal
  - Software updates
keyTakeaways:
  - "Start with claude update for a manual update, then restart Claude Code so the new version can take effect."
  - "Check how Claude Code was installed before mixing npm, native, or managed installation methods."
  - "Use claude doctor and the official troubleshooting guide before deleting files or reinstalling."
  - "Keep your project changes committed or backed up before making major environment changes."
faqs:
  - question: "How do I update Claude Code?"
    answer: "Run claude update in a terminal. Claude Code also checks for updates automatically at startup and periodically while running."
  - question: "Does Claude Code update automatically?"
    answer: "Anthropic says automatic update checks run at startup and periodically while Claude Code is running. Updates take effect the next time you start it."
  - question: "How do I check my Claude Code version?"
    answer: "Run claude --version in your terminal and compare the result with the release information in Anthropic's official documentation."
  - question: "Should I use npm or the native installer?"
    answer: "Use the method recommended for your existing installation. Do not install a second method on top of the first without checking the migration guide."
  - question: "Why does claude update fail?"
    answer: "Check your network, installation method, permissions, and the output from claude doctor before trying a reinstall."
  - question: "Can updating Claude Code damage my project?"
    answer: "A normal CLI update should update the tool, not intentionally rewrite project files, but you should still commit or back up important work first."
  - question: "Can I turn off automatic updates?"
    answer: "Anthropic documents a global autoUpdates setting and an environment variable for disabling the updater."
---

## Short Answer

To update Claude Code, open a terminal and run **claude update**. Anthropic also says Claude Code checks for updates when it starts and periodically while it is running. An installed update takes effect the next time you start Claude Code, so close the current session and open it again after the update finishes.

If the command fails, do not immediately remove the installation or delete configuration files. First check your installed version, identify how Claude Code was installed, and run its diagnostic command. The official [Claude Code setup guide](https://docs.anthropic.com/en/docs/claude-code/getting-started) explains the supported installation paths and update options.

## What the Question Really Means

People usually search for an update because they want a new feature, a bug fix, or a security improvement. They may also see a notice in the terminal and wonder whether they need to download a new installer.

These are slightly different situations. An automatic update may already have downloaded a release in the background. A manual update asks the installed program to check and apply the latest version. A fresh installation is a separate step and is usually not the first thing to try.

Your installation method matters too. Claude Code has supported npm installation, a local installation path, and a native installer that Anthropic describes as being in alpha testing in its setup documentation. A company may also manage installation through an enterprise environment. The correct fix depends on which method is actually active on your computer.

## How It Works

Claude Code is a command line tool, so its updater changes the tool installed in your environment. It does not mean that every project dependency, package, or source file should be updated at the same time.

According to Anthropic's setup guide, automatic update checks happen at startup and periodically during use. When an update is installed, the new version becomes active the next time Claude Code starts. That explains why a version number may not appear to change inside a session that was already open.

The same guide documents a manual update command: claude update. The [official CLI reference](https://docs.anthropic.com/en/docs/claude-code/cli-usage) is the best place to confirm command behavior rather than relying on old community posts or copied terminal instructions.

## Practical Steps

### 1. Check the version first

Open the terminal you normally use for Claude Code. Run claude --version and note the result. This gives you a baseline for checking whether the update worked. If the command is not found, that is an installation or PATH issue, not proof that the service is down.

### 2. Run the built in updater

Run claude update and let the process finish. Read the terminal output rather than assuming that a command succeeded because it returned to the prompt. If it reports a permissions problem or another error, save the message so you can diagnose the actual cause.

### 3. Restart Claude Code

Close the current Claude Code session and start it again. Then run claude --version once more. Compare the new result with the version you recorded before updating. If the version is unchanged, check whether the update command reported a failure or whether your terminal is finding a different installation.

### 4. Check the installation method

If you installed Claude Code globally through npm, use the instructions for that installation. If you moved to a local or native installation, follow Anthropic's migration and installation guidance. Avoid installing multiple copies just to make an update work. Multiple copies can leave one terminal using an old executable while another uses a newer one.

### 5. Run diagnostics when needed

Run claude doctor and review its output. The setup guide recommends this command for checking installation details. If you use a managed company computer, check your team's software policy before changing installation paths or using administrator privileges.

### 6. Keep project work safe

Updating the CLI is not the same as upgrading your application. Before troubleshooting with a reinstall, commit your source changes or make a backup. That gives you a clear way to recover your own work if you later need to repair the development environment.

## Common Problems

**The command is not found.** The terminal may not have the installation directory on its PATH, or Claude Code may not be installed in the environment you opened. Check the terminal where it worked previously and inspect the installation instructions for your operating system.

**The updater reports a permission error.** Do not immediately add sudo to an npm command. Anthropic specifically warns against using sudo for its global npm installation because it can create permission and security problems. Follow the official guidance for fixing npm permissions or migrating to the recommended installer.

**The update completes but the version looks old.** Restart Claude Code, run the version command again, and check which executable your shell is using. On Unix like systems, the command which claude can help identify the executable path. On Windows, use the command lookup supported by your shell.

**The update hangs or cannot download files.** Check your network connection, proxy or VPN settings, and any company firewall rules. Retry only after confirming the connection is stable. If the same error returns, use the official troubleshooting guide and keep the full error text.

**A team policy blocks the update.** Enterprise environments can control which tools and versions are allowed. Ask the administrator to confirm the supported version instead of trying to bypass a policy.

## What Does Not Work

Repeatedly reinstalling the tool is not a good first response. It can make the environment harder to understand, especially when the computer has both a global and a local installation. Deleting configuration directories is also risky because those files may contain preferences that have nothing to do with the update failure.

Avoid copying a command from an old forum post without checking its source. Installation instructions can change, and commands that download and run a script have more impact than a simple version check. Prefer Anthropic's current documentation and inspect commands before running them.

Do not assume that a new Claude Code version automatically updates Node.js, your project's packages, Git, or other developer tools. Treat each component as a separate update with its own compatibility requirements.

## Safety and Limitations

The updater needs a working connection and permission to modify its installation. A managed device may block one or both. A new release may also behave differently from the version you used before, so read relevant release notes when a change affects a production workflow.

Keep sensitive project files and credentials out of terminal logs that you share publicly. If you ask a community for help, remove access tokens, private repository paths, customer data, and other confidential details from the output.

Automatic updates can be useful, but teams that require a controlled release process may prefer a documented update window. In that case, follow the organization's approved installation method and test the new version on a noncritical task before using it for important work.

## Key Takeaways

- Run claude update for a manual update.
- Restart Claude Code and confirm the version.
- Use claude doctor before making bigger changes.
- Follow the installation path already used on your computer.
- Back up important project work before repairing the environment.

## Related Reading

Start with Anthropic's [Claude Code setup guide](https://docs.anthropic.com/en/docs/claude-code/getting-started) and [CLI reference](https://docs.anthropic.com/en/docs/claude-code/cli-usage). They are the primary sources for installation and command behavior.

## FAQ

### How do I update Claude Code on Windows?

Open the terminal you use with Claude Code and run claude update. If you use Windows through WSL or Git Bash, run the command in the same environment where Claude Code is installed. Restart the session and check the version afterward.

### How do I update Claude Code on macOS or Linux?

Use the same manual updater, claude update. If it fails, check the installation method and run claude doctor. The exact repair steps depend on whether you use npm, a local installation, or the native installer.

### Does Claude Code update itself?

Anthropic documents automatic checks at startup and periodically while the tool is running. The update becomes active after you start Claude Code again.

### How do I stop automatic updates?

Anthropic documents a global autoUpdates setting and the DISABLE_AUTOUPDATER environment variable. Read the current setup guide before changing these settings, especially on a managed computer.

### Is claude update safe for my code?

The command updates Claude Code itself. It is not intended to replace your project source code, but backing up or committing important changes is still a sensible habit before troubleshooting.

### Where should I report a failed update?

Start with Anthropic's official setup and troubleshooting documentation. If you need to post logs for help, remove credentials, private source code, and personal information first.
