---
title: "Can You Upload Videos to Gemini? Limits, Steps and Fixes"
description: "Yes, Gemini Apps can analyze uploaded videos. See the current file size and duration limits, upload steps, supported plans and fixes for common errors."
category: "Gemini"
author: "Tech Updates"
date: 2026-11-06
readingTime: "9 min read"
featuredImage: "/images/gemini-video-upload-guide.svg"
tags:
  - "upload videos to Gemini"
  - "Gemini video upload"
  - "Gemini Apps"
  - "video analysis"
  - "Google AI Pro"
keyTakeaways:
  - "Gemini Apps can accept video uploads and answer questions about the video content."
  - "The current consumer app limit is up to 2 GB per video, with a total video duration of five minutes on the free tier and up to one hour on Google AI Pro or Ultra."
  - "The Gemini API has separate developer limits and should not be confused with the consumer Gemini Apps upload rules."
faqs:
  - question: "Can I upload a video to Gemini?"
    answer: "Yes. Gemini Apps supports video uploads from a supported device or connected source. You can ask Gemini to summarize the clip, find details or answer questions about it."
  - question: "What is the maximum video size in Gemini?"
    answer: "The Gemini Apps help page lists a maximum of 2 GB for each video. The total video duration per prompt is limited separately."
  - question: "How long can a video be in Gemini?"
    answer: "The current total video upload length is five minutes on the free tier. Google AI Pro and Google AI Ultra extend the total to one hour, subject to availability and account limits."
  - question: "Can Gemini summarize a YouTube video?"
    answer: "Gemini can use supported video input and public information from YouTube in some experiences. Availability depends on the product surface and account settings, so check the current help page."
  - question: "Why does Gemini reject my video?"
    answer: "The file may exceed the size or duration limit, the upload quota may be reached, or the file may not be supported. Check the account's current limits and try a shorter or smaller file."
  - question: "Are Gemini Apps and the Gemini API video limits the same?"
    answer: "No. The consumer app and developer API have separate upload methods and limits. Use the documentation for the product you are using."
---
Yes. You can upload videos to Gemini Apps and ask questions about their content. Gemini can summarize a clip, explain what happens in it or help you find information in a recording. The feature has limits, though. Each video can be up to 2 GB, and the total video length allowed in one prompt depends on your Google AI plan.

This guide explains how to upload a video, what the current limits mean and how to fix common upload problems. It also separates the consumer Gemini app from the Gemini API, because developers have different file input options.

## Quick answer: Gemini supports video uploads

Gemini Apps supports documents, spreadsheets, notebooks, photos, videos and other supported files. On the web app, you can add a video from your device and submit it with a question. The official [Upload and analyze files in Gemini Apps guide](https://support.google.com/gemini/answer/14903178?hl=en) lists the current file and duration limits.

The important distinction is between the size of one video and the total video length in a prompt. A file can be below the 2 GB size limit and still fail if the total duration is above the account's limit.

## Current Gemini video upload limits

Google's help page currently lists these limits for Gemini Apps:

| Limit | Current published rule |
| --- | --- |
| Files in one prompt | Up to 10 files, subject to availability |
| Maximum size per video | 2 GB |
| Total video length on the free tier | Up to 5 minutes |
| Total video length with Google AI Pro or Ultra | Up to 1 hour |
| Other supported file types | Up to 100 MB each |

These limits can change. They may also depend on the account, product surface and current availability. Check the official help page before you plan a large upload or build a workflow around a specific limit.

The one-hour allowance is a total duration limit, not a promise that every account can upload one hour in a single file or every day. Gemini also has rolling limits for how much content you can upload and analyze over a period of time.

## How to upload a video to Gemini on the web

The basic process is simple:

1. Open the Gemini web app and sign in to your Google Account.
2. Enter a question or prompt in the message box.
3. Select **Add files**.
4. Choose **Upload files** and select the video from your device.
5. Wait for the upload to finish.
6. Add a clear instruction about what you want Gemini to do.
7. Submit the prompt and review the answer.

You can upload more than one supported file in the same prompt, up to the current file-count limit. Each file in a folder counts toward the limit. If you use a work or school account, some connected sources may be controlled by your Workspace administrator.

The same help page explains how to add files from Google Drive. Drive uploads require the relevant connected app and account activity settings. If you cannot see the Drive option, check whether your account type and administrator settings allow it.

## What should you ask Gemini to do with a video?

A vague prompt such as "Tell me about this" may produce a broad summary. A focused question gives the model a clearer job.

Try prompts such as:

- Summarize the main points in this video in five bullet points.
- List the steps shown in the tutorial and keep them in the order they happen.
- Identify the key decisions in this meeting recording and separate them from casual discussion.
- Explain the process shown in the clip for someone who has never used this software.
- Find the part where the speaker explains the pricing change and give the timestamp if available.
- Compare the first half and second half of the video. Explain what changes.

For a long lecture or meeting, ask for a structured result. You can request a summary, key terms, action items, questions to follow up and any points that need human review. If the video contains small text, fast movement or a complicated screen recording, ask Gemini to focus on a specific section rather than expecting it to catch every detail in one pass.

Always check important timestamps and names against the original recording. A summary can miss a short comment or misread a screen.

## Useful ways to use video uploads

### Summarize a lecture or training session

Upload a recording and ask for the main topics, definitions and examples. You can then ask for a short revision sheet or a list of questions to test your understanding.

### Review a meeting recording

Ask Gemini to separate decisions, action items and open questions. If several people speak, verify names and ownership before you send the notes to your team.

### Understand a software tutorial

A screen recording can be easier to review when you ask for a step-by-step explanation. Ask for the exact menu or setting shown, but confirm it in the application before changing a live system.

### Review a product demonstration

Ask what the presenter shows, which features appear and what the demo does not prove. A video demonstration is not the same as independent product testing, so keep that difference clear.

### Find a specific moment

If you remember a topic but not the time, ask Gemini to locate the section where it appears. Treat the result as a pointer and confirm the timestamp in the video player.

## Why Gemini may reject a video

If an upload fails, check the most common causes before trying again.

**The video is too large.** Each video can be up to 2 GB in Gemini Apps. If the file is larger, export a smaller version or compress it with a trusted video tool.

**The total duration is too long.** The free tier has a five-minute total video length limit per prompt. Google AI Pro and Ultra extend that total to one hour. A set of several short clips can still exceed the combined limit.

**The upload quota has been reached.** Google documents rolling limits for file upload and analysis. If you see a message that you have reached a limit, wait for it to reset or review the plan options. Repeatedly uploading the same file will not solve a quota issue.

**The account has a storage problem.** Gemini Apps has its own storage limit for saved chats and uploaded files. This is separate from Google Drive storage. The help page explains how to clear space from Gemini Apps activity if you see a storage warning.

**The video file is not supported or did not process correctly.** Try exporting the clip in a common format, reducing its size and uploading it again. If the file still fails, try a short sample to see whether the issue is with the full recording.

**Your work account has restrictions.** A Workspace administrator may control access to connected apps or Drive. Contact the administrator if an option is missing or blocked by your organization.

## Gemini Apps and Gemini API are different

Developers can also send video to Gemini models through the Gemini API. That is not the same upload flow as the consumer Gemini app.

Google's [Gemini API video understanding documentation](https://ai.google.dev/gemini-api/docs/video-understanding) describes several input methods, including the File API, Cloud Storage registration, inline data and public YouTube URLs. It also lists supported video formats and separate developer limits. For example, the API documentation lists different File API size limits for free and paid usage.

Do not copy an API limit into a consumer-app guide. The app has its own account and duration rules. If you are building a product, use the API documentation and check the model-specific limits. If you are using gemini.google.com, use the Gemini Apps help page.

## Privacy and accuracy checks

Before you upload a video, check whether it contains personal, confidential or customer information. Do not upload a private meeting or client recording unless your organization allows that use and you understand the relevant account settings.

Gemini can help you review a recording, but it may miss details or produce an incorrect summary. This is more likely when the video has poor audio, small text, rapid changes or several speakers. Verify decisions, figures, names and instructions in the original recording before sharing the summary.

For work or school use, check the organization's AI and data policy. A connected Google Drive account does not automatically mean every file is approved for upload to every AI service.

## Final recommendation

You can upload videos to Gemini Apps. Start with a short clip, ask one clear question and check the result against the recording. Keep the 2 GB per-video limit and the total duration limit in mind. If you need longer videos or a repeatable developer workflow, compare the consumer app rules with the Gemini API documentation instead of assuming they are the same.

For related help, see our guide to [Gemini file upload limits](/articles/does-gemini-have-unlimited-uploads/) and our article about [Gemini video generation limits](/articles/why-can-i-only-create-3-videos-on-gemini/).

## Frequently asked questions

### Can I upload videos to Gemini for free?

Yes, video uploads are supported on the free tier, subject to the current five-minute total video duration limit and other usage limits.

### How big can a Gemini video upload be?

Google currently lists a maximum of 2 GB for each video in Gemini Apps. The total video duration has a separate limit.

### Can Gemini analyze more than one video?

Gemini Apps allows up to 10 supported files in one prompt, subject to availability. The total video length still applies across the prompt.

### Does Google AI Pro increase video upload limits?

Google's help page says Google AI Pro and Google AI Ultra extend the total video upload length from five minutes to one hour. Check the current plan page for account-specific limits.

### Can I upload a private YouTube link?

The Gemini Apps upload help page describes file uploads and supported sources. Do not assume that every private or unlisted YouTube link can be processed. Use a supported file upload or check the current product instructions.

### Is Gemini API the same as Gemini Apps?

No. Gemini Apps is the consumer product. The Gemini API is for developers and has different input methods, limits and technical requirements.

## Sources and further reading

- [Google: Upload and analyze files in Gemini Apps](https://support.google.com/gemini/answer/14903178?hl=en)
- [Google AI for Developers: Video understanding](https://ai.google.dev/gemini-api/docs/video-understanding)
- [Google: Use Deep Research in Gemini Apps](https://support.google.com/gemini/answer/15719111?hl=en-IN)
