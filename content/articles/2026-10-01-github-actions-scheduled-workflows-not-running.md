---
title: "GitHub Actions Not Running on Schedule? Check These First"
description: "Scheduled GitHub Actions can appear broken when the real cause is branch state, schedule syntax, delays, or workflow configuration."
category: GitHub
author: Tech Updates
date: 2026-10-01
readingTime: "8 min read"
featuredImage: "/images/github-actions-scheduled-workflows.svg"
tags:
  - GitHub Actions
  - CI/CD
  - automation
  - workflows
  - DevOps
keyTakeaways:
  - "Scheduled GitHub Actions run from the default branch and use the latest commit on that branch."
  - "A valid cron expression does not guarantee an exact start time because scheduled runs can be delayed."
  - "When a schedule fails, inspect workflow configuration and repository state before rewriting the pipeline."
faqs:
  - question: "What branch does a scheduled GitHub Actions workflow use?"
    answer: "GitHub says scheduled workflows run on the latest commit on the default branch."
  - question: "Can GitHub Actions scheduled workflows start late?"
    answer: "Yes. GitHub documents that scheduled workflows can experience delays during periods of high load."
  - question: "Does GitHub Actions use UTC for schedules?"
    answer: "Schedules use UTC by default, although GitHub supports an optional IANA timezone for timezone-aware scheduling."
  - question: "Can a scheduled workflow run from a feature branch?"
    answer: "The schedule event runs only from the default branch, so a scheduled workflow must be present there."
  - question: "What should I check when a scheduled workflow does not run?"
    answer: "Check that the workflow exists on the default branch, the cron syntax is valid, the repository is active, and the Actions settings permit the workflow to run."
  - question: "Should I rewrite a GitHub Actions workflow after one missed run?"
    answer: "Not immediately. First inspect the event, workflow file, run history, default branch, and GitHub status before changing working automation."
---

## What Happened?

A scheduled GitHub Actions workflow can look simple in YAML and still fail to produce the expected run. The common mistake is treating the cron line as the entire system. In reality, scheduling depends on the workflow being present on the default branch, the schedule syntax, repository state, GitHub's scheduling service, and the workflow's own conditions.

GitHub's current workflow syntax documentation says scheduled workflows use POSIX cron syntax. It also says schedules run on the latest commit on the default branch and that schedules use UTC by default unless a timezone is specified. GitHub also notes that scheduled workflows can be delayed during periods of high load. See https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax.

## Why People Are Talking About It

Developers regularly report that a workflow works when started manually but behaves differently when scheduled. A Reddit discussion described exactly that pattern: the author said a Python automation worked with Run workflow but did not trigger as expected from the schedule. The post is a user report, not evidence of a GitHub-wide problem, but it captures a common debugging trap: manual dispatch and scheduled execution are different events.

There is also a broader operational dependency. Another recent Reddit discussion described teams becoming heavily dependent on GitHub Actions and struggling when Actions infrastructure has an outage. Again, that is community experience rather than an official reliability statement. The practical lesson is to distinguish a broken workflow from a platform incident before editing production automation. See https://www.reddit.com/r/github/comments/1v2hoks/github_actions_running_issue/ and https://www.reddit.com/r/github/comments/1vnj9nj/are_we_being-stupid-by-depending-this-heavily-on/.

## What Users Experienced

The first useful distinction is workflow did not start versus workflow started and failed. If there is a run entry in Actions, scheduling worked and the problem is inside the workflow or one of its jobs. If there is no run, inspect the schedule event and branch conditions first.

GitHub's event documentation says scheduled workflows run only on the default branch and use the last commit on that branch for the schedule event. This means a developer can edit a workflow on a feature branch, test it manually, and still see nothing happen on the schedule until the workflow exists on the default branch. See https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows.

Time zones are another frequent source of confusion. A cron entry that looks correct in local time may actually be interpreted as UTC unless the workflow explicitly uses a timezone. A schedule can also be delayed, so a workflow that begins a few minutes later is not automatically broken.

## Why It Happens

There are several layers to scheduled automation.

Branch layer: the workflow file must be available on the default branch because GitHub's schedule event runs there.

Syntax layer: the cron expression must be valid. Five-field POSIX cron is the normal syntax.

Time-zone layer: UTC is the default unless an IANA timezone is specified.

Platform layer: GitHub can delay scheduled workflows, especially during periods of high load.

Workflow layer: jobs can be skipped because of conditions, permissions, paths, environments, or missing secrets.

Application layer: the workflow can run successfully while the deployment or script it calls fails.

Treating these as separate layers makes debugging much faster. You do not want to rewrite a correct workflow because the actual problem was a delayed schedule or a workflow file that had not reached the default branch.

## Working Fixes

Use a short diagnostic sequence.

First, open the workflow on the default branch and confirm the schedule block is present there. Then convert the intended local time to the workflow timezone and verify the cron expression.

Second, check Actions history. If a scheduled run exists, open it and inspect the first failing job rather than changing the schedule.

Third, compare the scheduled event with a manual workflow dispatch run. Manual execution is useful for testing the job logic, but it does not prove the schedule itself is working.

Fourth, inspect permissions. A workflow that can build but cannot push, create a release, or deploy will appear to have a scheduling problem if you only watch the final outcome.

Fifth, check GitHub's status information when multiple unrelated workflows are delayed. Repeatedly editing YAML during an infrastructure incident can create new failures without fixing the original one.

Finally, add observability. Log the event name, commit SHA, branch, start time, and important environment assumptions. When a run is late, the logs should tell you whether the problem was scheduling or execution.

For complex pipelines, GitHub also supports reusable workflows, which can reduce duplicated automation logic. See https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations.

A useful production pattern is to make the publishing job idempotent. If a scheduled task starts twice, it should detect work already completed for that date rather than publishing duplicates. This does not fix scheduling, but it prevents a scheduler delay or retry from becoming a content duplication incident.

## What Doesn't Work

Do not immediately change the cron expression because a single run was late. GitHub explicitly documents that scheduled workflows may be delayed.

Do not assume a manually successful run proves that the scheduled event is configured correctly. It proves that the workflow can execute under a manual event.

Do not edit the workflow on a branch that is not the default branch and expect the schedule to use that version.

Do not rewrite a working deployment pipeline simply because one scheduled run did not appear. First identify whether there is a platform incident, a branch mismatch, a disabled workflow, a syntax problem, or a job-level failure.

And do not hide the problem with a second scheduler until the original behavior is understood. A duplicate scheduler can create overlapping deployments or duplicate jobs.

## Official Response

GitHub's documentation is clear on the core behavior: scheduled workflows use cron syntax, run from the default branch, and execute against the latest commit on that branch. GitHub also supports timezone-aware schedules and documents possible schedule delays.

The same documentation set explains that workflow events, jobs, permissions, and reusable workflows are separate parts of the automation system. The correct operational response is therefore to inspect evidence at the event and job level instead of treating scheduled workflow as one indivisible feature.

## Key Takeaways

A scheduled GitHub Actions workflow is a small program attached to a time-based event. When it does not behave as expected, debug the event first and the job second.

For a missed schedule, the fastest checklist is: default branch, cron syntax, timezone, run history, workflow conditions, permissions, and platform status. Once those are confirmed, move into the script or deployment itself.

This approach is especially important for production publishing systems. A scheduler should fail loudly and leave evidence, not silently produce no output.

## Related Reading

GitHub's workflow syntax, event documentation, reusable workflow documentation, and pull-request review guidance are useful references when building reliable automation. They explain the execution model rather than only showing a sample YAML file.
