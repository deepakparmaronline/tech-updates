---
title: "How to Make a Website with Claude: Artifacts vs Claude Code"
description: "Build a website with Claude using Artifacts for prototypes or Claude Code for full projects. Follow a clear workflow for planning, testing and launch."
category: "Claude"
contentType: "guide"
author: "Tech Updates"
date: 2026-11-26
readingTime: "10 min read"
featuredImage: "/images/how-to-make-a-website-with-claude.svg"
tags:
  - Claude
  - Claude Artifacts
  - Claude Code
  - Website development
  - AI coding
keyTakeaways:
  - "Claude Artifacts is a quick route for prototypes and single-page web experiences."
  - "Claude Code is a better fit when you need to work inside a real project and manage files, tests and dependencies."
  - "A clear brief, sitemap and acceptance checklist produce better results than one vague request."
  - "Claude can help write and test code, but you still need to review, secure, host and maintain the website."
faqs:
  - question: "Can Claude build a website?"
    answer: "Yes. Claude Artifacts can create quick web experiences, while Claude Code can help build and edit a project in a local repository."
  - question: "Can Claude make a full multi-page website?"
    answer: "Claude Code can help create a multi-page project, but you need to provide the requirements, review the code, test the site and choose a hosting provider."
  - question: "Is Claude Artifacts better than Claude Code?"
    answer: "Artifacts is simpler for a prototype or single-page experience. Claude Code is better when you need control over a full project, files, dependencies and tests."
  - question: "Can Claude host my website?"
    answer: "Artifacts can host a shared artifact inside Claude. A custom production website still needs a hosting and domain setup that you control."
  - question: "Do I need coding skills to build a website with Claude?"
    answer: "You can start with Artifacts without much coding, but a production site built with Claude Code still needs technical review and testing."
  - question: "Can Claude build a website with Next.js?"
    answer: "Claude Code can help work with a Next.js project when you specify the stack and requirements. Review the generated code and run the project's build and tests."
---

You can make a website with Claude in two main ways. Use Artifacts when you want a quick prototype, small interactive tool or single-page website. Use Claude Code when you need to work with a real project, edit files, run commands and prepare a site for deployment.

The choice matters. A quick demo and a production website have different needs. This guide explains both paths, how to write a useful brief, how to test the result and what you still need to do before publishing.

## Short Answer

Claude can help you plan, design and build a website. For a quick result, start with [Claude Artifacts](https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them). Anthropic says Artifacts can create interactive outputs such as web experiences, small tools and single-page websites. You can refine the result in the conversation and share or export it.

For a multi-page site or a project that must live in your own code repository, use [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview). It can inspect a project, edit files and run development commands. This is a better fit when you need reusable components, a database, forms, tests, a build process or a deployment pipeline.

Claude does not remove the need for a clear plan. You still need to decide what the site should do, provide accurate content, review the code and test it on real devices. Claude can speed up the work, but it cannot guarantee that the result is secure, accessible or ready for customers.

## What the Question Really Means

People often ask how to make a website with Claude as if there were one button that creates a complete business website. In practice, the best workflow depends on the size and purpose of the site.

A landing page for an idea may need only a headline, a few sections and a contact button. An online store needs product data, payments, order handling and customer support. A company website may need several pages, a content management system, analytics, privacy controls and a reliable deployment process. These projects should not use the same setup.

You should also decide whether you need a prototype or a site that you will maintain. A prototype helps you test a layout or explain an idea. A production site needs source control, backups, testing, security updates and a plan for future content changes.

Claude offers different ways to help with these jobs. Artifacts is the easiest route for a small web experience. Claude Code is more flexible for a real codebase. Claude Design can help with visual concepts and prototypes, but the final site still needs to be implemented and reviewed.

## How It Works

Artifacts are created inside a Claude conversation. You describe the result you want, Claude builds an interactive artifact, and you can ask for changes. The [official Artifacts guide](https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them) describes supported outputs such as small applications, visualisations and single-page websites. This is useful when you want to see an idea quickly without setting up a local development environment.

Claude Code works with files and commands in a project. Anthropic's [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview) explains how it can understand a codebase, make changes and help with development tasks. The [quickstart guide](https://code.claude.com/docs/en/quickstart) shows how to start a session and work with a project. This approach gives you more control over the folder structure, framework, packages and tests.

The two options are not competitors in every situation. You can use Artifacts to test the layout and user flow, then use Claude Code to build a maintainable version. You can also ask Claude to prepare a sitemap, page content and component plan before any code is written.

| Your goal | Better starting point | Why |
|---|---|---|
| One-page idea or prototype | Artifacts | Quick feedback without a full local setup |
| Small interactive calculator or tool | Artifacts | Useful for a self-contained experience |
| Multi-page company website | Claude Code | More control over files and components |
| Existing Next.js or React project | Claude Code | Can work with the project structure |
| Visual direction and layout | Claude Design or Artifacts | Helps explore design before implementation |

## Practical Steps

### 1. Write a short website brief

Tell Claude who the website is for, what it should help visitors do and what information must appear. Include the business name, audience, main service, location, contact details and any required pages. If a fact is missing, tell Claude to use a placeholder instead of inventing one.

### 2. Ask for the sitemap before the design

Request a page list and a simple explanation of what each page needs. A small company site may need Home, About, Services, Projects, Blog and Contact. An online tool may need a landing page, documentation, pricing and support. Review the structure before asking for code.

### 3. Choose Artifacts or Claude Code

Use Artifacts if the goal is to show a single-page idea or test an interaction. Use Claude Code if you need a project with multiple routes, reusable components, local files, a build command or a database. Do not start with a complex framework when a small prototype is enough.

### 4. Set the design rules

Describe the layout, colours, font style, spacing, navigation and mobile behaviour. Ask for readable contrast, clear buttons, visible focus states and consistent headings. Provide a reference image or an existing brand guide if you have permission to use it.

### 5. Build one section at a time

Ask Claude to create the header and hero section first. Review the result, then add the next section. This makes it easier to catch layout problems before they spread across the site. For a multi-page project, ask Claude to create reusable components rather than copying the same markup into every page.

### 6. Add real content and working actions

Replace placeholder text with verified information. Test every button, navigation link, form and download. A contact form is not complete just because it looks correct. It needs a working destination, validation and a clear success or error message.

### 7. Check mobile, accessibility and SEO

Test the page at phone, tablet and desktop widths. Check heading order, image alt text, keyboard navigation, colour contrast and form labels. Add unique page titles and meta descriptions, canonical URLs where needed, Open Graph data, a sitemap and a robots file.

### 8. Run tests and prepare deployment

With Claude Code, ask it to run the project's lint, tests and production build. Review the changed files and fix errors before deployment. Then connect the repository to the hosting provider you choose. Claude can help prepare the steps, but you must control the domain, hosting account and production credentials.

A useful starting prompt is:

> Build a responsive website for [business or project]. First return a sitemap, page goals, component list and questions about missing content. Do not invent facts, prices, contact details or customer reviews. Use accessible semantic HTML, mobile-first layout, unique page titles and descriptions, and clear form validation. After the build, run the available checks and list every file changed.

This prompt is more useful than saying only "make a modern website". It gives Claude a task, constraints and a way to check the result.

## Common Problems

A vague brief often creates a generic site. If you do not provide the audience, goal or content, Claude must guess. The result may look polished but say very little. Give it real information and ask it to identify gaps before building.

Another problem is a page that looks complete but has non-working features. A button may not submit a form. A menu may not open on mobile. A search box may be decorative. Ask Claude to list the expected behaviour for every interactive element and test each one.

Generated code can also introduce dependencies or change files that were not part of the task. With Claude Code, ask for a plan before large changes. Review the diff, run tests and keep a clean version-control history. If the build fails, provide the actual error message instead of asking for a general fix.

SEO problems often appear at the end. A page may have repeated titles, missing descriptions, large images, weak internal links or no canonical URL. Include the SEO requirements in the first brief and check them before launch.

## What Does Not Work

One vague prompt is not a reliable way to create a complete production website. It may generate a good first screen, but it will not know your business rules, legal requirements, data model or hosting setup unless you provide them.

Do not assume an Artifact is the same as a full production website on your own domain. Artifacts are useful for sharing and testing a web experience inside Claude. A production site may need a custom domain, server-side code, database, monitoring, backups and a deployment pipeline.

Do not ask Claude to publish a site using real credentials pasted into a chat. Do not accept invented testimonials, prices, policies or company details. Do not skip tests because the page looks correct in one browser preview.

## Safety and Limitations

Review all code before it reaches production. Check dependencies, form handling, access control, API calls and data storage. Keep secrets in environment variables or your hosting provider's secret manager, not in source files or prompts. Use test data while developing.

If the website collects names, email addresses, payments or other personal information, decide how the data will be stored and who can access it. Add a privacy notice that matches the real process. Do not copy a generic policy and assume it covers your site.

Check image and font licences before publishing. If Claude creates an image or layout based on a reference, make sure you have the right to use the source material. Also check accessibility with a keyboard and screen reader where possible.

Claude may produce code that works in a preview but fails in a real browser or after deployment. Test the production build, mobile layout, redirects, forms and analytics. Keep a backup and a way to roll back a failed release.

## Key Takeaways

- Use Artifacts for quick prototypes and small single-page web experiences.
- Use Claude Code for a project with real files, frameworks, tests and deployment needs.
- Plan the sitemap and content before asking for code.
- Test every button, form, route and mobile layout.
- Review security, privacy, accessibility and SEO before publishing.

## Related Reading

- [What Are Claude Artifacts?](/articles/what-are-claude-artifacts/)
- [What Is CLAUDE.md?](/articles/what-is-claude-md/)
- [How to Use Claude Code Agents](/articles/how-to-use-claude-code-agents/)

## FAQ

### Can Claude build a website?

Yes. Claude Artifacts can create small web experiences and single-page websites. Claude Code can help build and edit a project in a local repository.

### Can Claude make a full multi-page website?

Claude Code can help create a multi-page site, but you need to provide the requirements, review the code, run tests and choose a hosting provider.

### Is Claude Artifacts better than Claude Code?

Artifacts is simpler for a prototype or single-page experience. Claude Code is better when you need control over files, dependencies, routes and tests.

### Can Claude host my website?

Artifacts can host a shared artifact inside Claude. A custom production website still needs a hosting and domain setup that you control.

### Do I need coding skills to build a website with Claude?

You can start with Artifacts without much coding. A production website still needs technical review, testing and maintenance.

### Can Claude build a website with Next.js?

Claude Code can help work with a Next.js project when you specify the stack and requirements. Review the code and run the build and tests before publishing.
