---
title: "Can Claude Read PPTX Files? PowerPoint Upload Guide"
description: "Claude can read PowerPoint decks with its PPTX skill when code execution is enabled. Learn the setup, upload limits, and safer PDF fallback."
category: "Claude"
contentType: "guide"
author: "Tech Updates"
date: 2026-11-27
readingTime: "11 min read"
featuredImage: "/images/can-claude-read-pptx.svg"
tags:
  - "Claude"
  - "PowerPoint"
  - "PPTX"
  - "AI file analysis"
keyTakeaways:
  - "Claude's official PowerPoint skill is designed to read, parse and extract content from PPTX files."
  - "The skill requires code execution and file creation to be enabled, and it must be available in the user's Skills settings."
  - "The standard upload help page does not list PPTX among ordinary document types, so access can depend on the skill and account setup."
  - "A PDF export is a practical fallback when direct PPTX processing is unavailable."
faqs:
  - question: "Can Claude read PPTX files?"
    answer: "Yes, Claude can read and extract content from PPTX files through Anthropic's PowerPoint skill when code execution and the skill are enabled. The standard upload list does not include PPTX as an ordinary document type."
  - question: "Does Claude need a paid plan to read PowerPoint files?"
    answer: "Anthropic says Skills are available on Free, Pro, Max, Ultra, Team and Enterprise plans. The feature still requires code execution and file creation to be enabled, and workspace owners may control access."
  - question: "How do I enable the PowerPoint skill in Claude?"
    answer: "Enable Code execution and file creation in Settings or organization settings, then open Customize and Skills and turn on the PowerPoint skill if it is listed."
  - question: "Can Claude read charts and speaker notes in a PPTX?"
    answer: "The official PPTX skill includes slide text, tables, chart data and speaker notes in its extraction workflow. Visual inspection may still be needed for layout and chart appearance."
  - question: "Can Claude create a PowerPoint file too?"
    answer: "Yes. Anthropic's file creation feature can generate PPTX presentations, and the PowerPoint skill can create or edit decks."
  - question: "What should I do if Claude rejects my PPTX upload?"
    answer: "Try enabling the PowerPoint skill and code execution, then start a new chat. If direct upload is still unavailable, export the deck to PDF or extract its text and upload a supported format."
---

Claude can read PowerPoint presentations when its built-in PowerPoint skill and code execution features are available. The skill is designed to read, parse and extract text from PPTX files, including slide content and speaker notes. There is one important detail: Anthropic's standard file upload page does not list PPTX among its ordinary document types. The PowerPoint skill is the route that adds this workflow.

This means the answer is yes, but it is not always as simple as dragging a PowerPoint file into every Claude chat. Your plan, workspace settings, enabled skills and the way you upload the deck can affect the result.

## Short Answer

Claude can analyze a PPTX file through Anthropic's PowerPoint skill. Enable Code execution and file creation, open Customize and Skills, and make sure the PowerPoint skill is available and enabled. Then upload the presentation and ask for a slide-by-slide summary, speaker-note extraction, a list of action items or a review of the deck.

Anthropic's [PPTX skill on GitHub](https://github.com/anthropics/skills/tree/main/skills/pptx) says it is intended for any task involving a PPTX or POTX file, including reading, parsing, extracting text, editing and creating presentations. The skill includes a slide text script that can extract titles, text, tables, chart data, image alt text and speaker notes.

## Why the Upload Answer Can Look Confusing

Anthropic's [Upload files to Claude guide](https://support.claude.com/en/articles/8241126-upload-files-to-claude) lists supported document formats such as PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON and XLSX. PPTX is not listed in that standard list.

At the same time, Anthropic provides a PowerPoint skill that can work with PPTX files. Its [Use skills in Claude guide](https://support.claude.com/en/articles/12512180-use-skills-in-claude) says built-in skills are available on Free, Pro, Max, Ultra, Team and Enterprise plans, but they require code execution to be enabled. The PowerPoint skill is one of the built-in document skills.

The difference is between a normal file upload path and a skill-enabled workflow. If your file picker accepts the presentation and the skill is enabled, Claude can process it. If your account rejects the extension, do not assume the feature is broken for every user. Check the capability and skill settings first, then use the PDF fallback if the direct route is not available.

## Enable the PowerPoint Skill

For an individual Free, Pro, Max or Ultra account, Anthropic's current instructions are:

1. Open Claude Settings.
2. Go to Capabilities.
3. Turn on Code execution and file creation. In the updated settings layout, this may be called Create and edit files.
4. Open Customize.
5. Select Skills.
6. Find the PowerPoint skill and turn it on if it is listed.

Anthropic says the PowerPoint skill is available through its built-in skills. You do not need to install a third-party tool just to use the standard Claude.ai feature. The skill should be selected automatically when a relevant PowerPoint task is requested, once it is enabled.

For Team accounts, the organization must allow code execution and skills. For Enterprise, an owner may need to enable the features in organization settings. If you cannot see the skill, ask the workspace administrator to check the organization policy rather than changing account settings repeatedly.

Claude Code can also use skills that are enabled or synced from the same Claude account. The official help page says skills are available in Claude Code as well as Claude chat, with some setup requirements. The workflow may differ from the web app, so check the skill instructions for the environment you use.

## Upload a Deck and Ask for the Right Analysis

Once the capability is available, start with a specific task. Do not only write "read this PowerPoint." Tell Claude what output you need and how much detail to include.

For a management deck, you could ask: "Read this presentation slide by slide. Give me a one-paragraph summary of each slide, list the decisions requested from leadership, and identify any missing evidence. Keep the original slide order."

For a training deck, ask for the main lesson, key terms, examples and questions that a learner may ask. For a sales deck, ask Claude to list the claims, proof points, pricing references and calls to action. For a project review, ask for dates, owners, risks and unresolved decisions.

If the presentation includes speaker notes, say that you want them included. The PPTX skill's extraction workflow includes speaker notes, but a clear request helps Claude focus on them. If the deck has charts, ask for the chart title, axes, labels and the conclusion that the slide appears to make. Check the visual chart yourself if the exact value matters.

You can also ask for a structured output. For example, request a table with slide number, slide title, main message, evidence, action item and open question. This makes it easier to review a large deck without losing the source location of each point.

## What Claude Can Extract From a PPTX

The official PowerPoint skill describes a workflow for extracting slide titles, text, tables, chart data, picture alt text and speaker notes. That is useful when you need a written summary or want to search for a specific phrase across a large deck.

The skill also provides a thumbnail script for creating a visual grid of the slides. This helps inspect layouts and see whether an image or chart supports the slide text. Text extraction and visual review are different tasks. A slide may contain a chart that is difficult to understand from its labels alone, or an image whose meaning is not described in alt text.

Ask Claude to separate facts from interpretation. For example, it can list what a chart labels, then explain what the chart may suggest. If the presentation contains a number that will be used in a report, verify it against the source data rather than relying only on the generated summary.

For a deck with many slides, process it in sections. Ask for slides 1 to 10 first, then the next group. This makes it easier to find mistakes and reduces the chance that a long answer skips a slide. Keep the slide numbers in the output so you can return to the original presentation.

## If Claude Does Not Accept the PPTX File

Use a PDF export as the first fallback. In PowerPoint, export or save the presentation as a PDF. In Google Slides, download the presentation as a PDF. Upload the PDF and ask Claude to analyze the pages in order.

Anthropic says Claude can analyze text and visual elements in PDFs with 100 pages or fewer. For PDFs from 101 to 1,000 pages, it processes text only and does not analyze visual elements. The upload guide lists a maximum of 1,000 PDF pages. If the deck is longer, split it into smaller sections before uploading.

A PDF is useful when the visual appearance of slides matters. If you only need text, you can export speaker notes or slide text into a DOCX, TXT or another supported format. Keep the slide numbers in the extracted text so the result can be checked against the original deck.

Avoid random online converters for confidential presentations. Use PowerPoint, Google Slides or an approved desktop tool. If you use a company deck, follow your organization's rules for moving files into an AI assistant.

## Limits and Things to Check

A text summary cannot guarantee that every visual detail is correct. Small labels, complex diagrams, dense charts and embedded objects may need a human check. Ask Claude to identify which slides it could not interpret confidently.

The standard file upload guide lists a maximum of 500 MB per chat file and up to 20 files in one chat. Project files have a different limit and text extraction rules. These limits apply to the supported upload workflows; a skill or connected app may have its own constraints.

Code execution runs in a sandboxed environment. Anthropic's file creation guide explains that network access can be controlled by Team and Enterprise administrators. If you work with confidential data, check your organization's network and connector policies before enabling extra access.

Do not treat a generated deck summary as a verified record. A model can misread a chart, skip a footnote or combine two similar slide titles. For legal, financial, medical or compliance decisions, check the original slides and source files.

## Prompts That Make PowerPoint Analysis More Useful

**Executive summary:** "Summarize this deck for a senior manager in 10 bullet points. Keep the slide numbers and separate facts from recommendations."

**Speaker notes:** "Extract the speaker notes from every slide. Show the slide number, slide title and notes. Do not invent notes for slides that have none."

**Risk review:** "Find every slide that mentions a risk, delay, cost increase or dependency. List the exact wording and slide number, then explain why each item may need follow-up."

**Data review:** "List every chart and table. Extract the labels and values you can read, identify the source if shown, and mark any unclear figures for manual checking."

**Presentation feedback:** "Review the story flow from opening to conclusion. Identify repeated points, missing transitions and slides that contain too much text. Do not rewrite the deck yet."

## Key Takeaways

- Claude can read PPTX through its PowerPoint skill when code execution and the skill are enabled.
- The standard upload list does not include PPTX, so account and workspace setup matters.
- Ask for slide numbers, speaker notes and structured output when analyzing a deck.
- Use a PDF export if direct PPTX processing is not available.
- Check charts, labels and sensitive details before relying on the summary.

## Related Reading

- [How to Use Claude Code Agents for Real Development Tasks](/articles/how-to-use-claude-code-agents/)
- [Upload files to Claude](https://support.claude.com/en/articles/8241126-upload-files-to-claude)
- [Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude)
- [Anthropic's official PowerPoint skill](https://github.com/anthropics/skills/tree/main/skills/pptx)
- [Create and edit files with Claude](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude)

## FAQ

### Can Claude read PPTX files?

Yes. Claude can read and extract content from PPTX files through Anthropic's PowerPoint skill when code execution and the skill are enabled. The standard upload list does not show PPTX as an ordinary document type.

### Does Claude need a paid plan to read PowerPoint files?

Anthropic says Skills are available on Free, Pro, Max, Ultra, Team and Enterprise plans. The feature still requires code execution and file creation to be enabled, and workspace owners may control access.

### How do I enable the PowerPoint skill in Claude?

Enable Code execution and file creation in Settings or organization settings, then open Customize and Skills and turn on the PowerPoint skill if it is listed.

### Can Claude read charts and speaker notes in a PPTX?

The official PPTX skill includes slide text, tables, chart data and speaker notes in its extraction workflow. Visual inspection may still be needed for layout and chart appearance.

### Can Claude create a PowerPoint file too?

Yes. Anthropic's file creation feature can generate PPTX presentations, and the PowerPoint skill can create or edit decks.

### What should I do if Claude rejects my PPTX upload?

Try enabling the PowerPoint skill and code execution, then start a new chat. If direct upload is still unavailable, export the deck to PDF or extract its text and upload a supported format.
