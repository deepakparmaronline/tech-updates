---
title: "How to Integrate Gemini in a Website: A Secure Guide"
description: "Build a website feature with Gemini using Google's JavaScript SDK, a server-side API route, and safe key storage. Includes a simple Next.js example."
category: "Gemini"
contentType: "guide"
author: "Tech Updates"
date: 2026-11-27
readingTime: "11 min read"
featuredImage: "/images/how-to-integrate-gemini-in-a-website.svg"
tags:
  - "Gemini API"
  - "JavaScript"
  - "Next.js"
  - "Web development"
keyTakeaways:
  - "Use Google's current JavaScript SDK, @google/genai, instead of the deprecated legacy package."
  - "Keep the Gemini API key on the server and call Gemini from a backend route."
  - "The current SDK version 3 requires Node.js 22 or later."
  - "Validate prompts, rate-limit requests and handle errors before exposing the feature to real users."
faqs:
  - question: "Can I add Gemini to my website?"
    answer: "Yes. Use the Gemini API from a backend route or serverless function, then send the result to the browser. This keeps your API key out of public client code."
  - question: "Which JavaScript SDK should I use for Gemini?"
    answer: "Google's current TypeScript and JavaScript SDK is @google/genai. The older @google/generative-ai package is deprecated."
  - question: "Can I call the Gemini API directly from browser JavaScript?"
    answer: "The SDK can run in a browser for some setups, but Google's SDK warns against exposing API keys in client-side code in production. A server-side route is safer."
  - question: "What Node.js version does the current Google Gen AI SDK need?"
    answer: "The current SDK repository says version 3.0.0 and later require Node.js 22 or later. Check the package requirements before installing."
  - question: "Where should I store my Gemini API key?"
    answer: "Store it as a server-side environment variable or in a secrets manager. Do not use a NEXT_PUBLIC_ variable or commit the key to source control."
  - question: "Can I use Gemini in a static website?"
    answer: "A static front end can call a serverless function or backend endpoint that talks to Gemini. Do not put a long-lived API key in a public JavaScript bundle."
---

You can integrate Gemini into a website by calling the Gemini API from a server-side route and returning the generated text to your front end. Google's current TypeScript and JavaScript SDK is called @google/genai. The important security rule is simple: keep your API key on the server. Do not place it in browser code or a public environment variable.

This guide uses a Next.js App Router example, but the same design works with Express, Remix, a serverless function or another backend. The browser sends a prompt to your own endpoint. Your server validates the input, calls Gemini and returns a controlled response.

## Short Answer

Create a Gemini API key in Google AI Studio, install Google's @google/genai package, store the key in a server-side environment variable and create an API route that calls Gemini. Your browser code should call your own route, not the Gemini endpoint with a secret key.

Google's official [JavaScript SDK repository](https://github.com/googleapis/js-genai) provides the current package, quickstart and model examples. It also warns developers not to expose API keys in client-side code. Google Cloud's [API key security guide](https://cloud.google.com/docs/authentication/api-keys-best-practices) says keys should not be placed in client code or committed to repositories.

## How the Website Integration Works

A safe website integration has three parts.

The first part is the browser interface. It collects a question or task from the visitor and sends it to your own backend endpoint. The browser does not need to know the Gemini API key.

The second part is your backend. It checks the request, applies usage limits, chooses a model and sends the prompt to Gemini. It also handles timeouts and API errors. This is where the secret key stays.

The third part is the Gemini API. Google processes the request and returns a response to your backend. Your server can clean the response, store a usage record or apply product rules before sending it to the browser.

This structure gives you control over the feature. You can limit prompt length, block abusive requests, require user login, set daily usage caps and change models without shipping a new browser bundle.

## What You Need Before You Start

You need a Google account, access to Google AI Studio, a website with a server-side runtime and a supported Node.js version if you use the current JavaScript SDK. The Google Gen AI SDK repository says version 3.0.0 and later require Node.js 22 or later. Check the version requirement before installing the package.

You also need to decide which API service fits your project. The Gemini Developer API is the simplest starting point when you want an API key and do not need a Google Cloud project setup. Google also supports the Gemini Enterprise Agent Platform, formerly Vertex AI, for projects that need Google Cloud authentication and regional infrastructure.

The services can have different models, quotas and pricing. Read the current documentation before choosing one for production. Do not copy a model name from an old tutorial without checking that it is still available to your account.

## Step 1: Create a Gemini API Key

Open [Google AI Studio](https://aistudio.google.com/) and create an API key for the project you will use. Keep the key private. Do not paste it into a public GitHub repository, a client-side script or a screenshot.

For local development, store the key in a server-side environment file that is excluded from source control. In a Next.js project, that can be a local environment file such as .env.local. The variable name in this guide is GEMINI_API_KEY.

For production, add the key through your hosting provider's environment variable or secret manager settings. Use a different key for development and production where practical. Restrict the key to the Gemini API when the platform supports that restriction, monitor usage and rotate it if you think it has been exposed.

Do not name the variable NEXT_PUBLIC_GEMINI_API_KEY. In Next.js, variables with the NEXT_PUBLIC_ prefix are designed to be exposed to browser code. A Gemini key should not be exposed that way.

## Step 2: Install the Current JavaScript SDK

Install the official package in the server project:

    npm install @google/genai

Do not start a new project with the old @google/generative-ai package. Google's old JavaScript SDK repository is deprecated and points developers to the unified Google Gen AI SDK.

The current SDK uses the GoogleGenAI client. The official repository shows a server-side example that reads the key from an environment variable and calls a model through ai.models.generateContent. This article uses the same pattern.

If your host only supports Node.js 20, check the SDK version before installing. The current version 3 requires Node.js 22 or later. You can either move the project to a supported Node version or pin a compatible earlier SDK version after checking its documentation. Do not ignore the engine requirement without testing the application.

## Step 3: Add a Server-Side API Route

In a Next.js App Router project, create a route such as app/api/gemini/route.ts. The example below validates the prompt, calls Gemini on the server and returns a JSON response.

    import { GoogleGenAI } from "@google/genai";

    export const runtime = "nodejs";

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing");
    }

    const ai = new GoogleGenAI({ apiKey });

    export async function POST(request: Request) {
      try {
        const body = await request.json();
        const prompt =
          typeof body.prompt === "string" ? body.prompt.trim() : "";

        if (!prompt || prompt.length > 4000) {
          return Response.json(
            { error: "Enter a prompt under 4,000 characters." },
            { status: 400 }
          );
        }

        const result = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: prompt,
        });

        return Response.json({ text: result.text ?? "" });
      } catch (error) {
        console.error("Gemini request failed", error);
        return Response.json(
          { error: "The AI request failed. Please try again." },
          { status: 500 }
        );
      }
    }

The model name in the sample follows the current Google Gen AI SDK quickstart at the time this guide was checked. Model availability can change, so confirm the model list and limits in the official documentation before you deploy.

The example is a starting point, not a complete production system. Add authentication if the feature is for signed-in users. Add rate limiting so one visitor cannot use the entire API quota. Add request timeouts and a maximum output length. Log request IDs and error types, but do not store sensitive user prompts unless your privacy policy and product design allow it.

## Step 4: Call Your Route From the Browser

The front end only needs to send a request to your own endpoint. It does not import the SDK or read the API key.

    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Gemini request failed");
    }

    setAnswer(data.text);

Show a loading state while the request is running. Disable the submit button to prevent accidental duplicate requests. If the request fails, show a short message and allow the visitor to try again. Do not expose raw server stack traces or API credentials in the browser.

For a static website, the front end can call a serverless function instead of a Next.js route. The important point is the same: the function stores the key and calls Gemini. A static HTML file cannot keep a long-lived secret safe after it is sent to the browser.

## Step 5: Protect the API Key and Your Budget

Google's API key guidance recommends restricting keys, avoiding client-side exposure, deleting keys you no longer need, monitoring usage and rotating keys periodically. Treat a Gemini key like a password that can create usage charges.

Use a server-side environment variable or a secrets manager. Never commit the key to GitHub. If it appears in a commit, remove the exposed credential and rotate it. Deleting the line from the latest version is not enough because the secret may remain in repository history.

Add a rate limit by user, IP address or account. The right limit depends on your product, but there should be a clear cap. Add a maximum prompt size and reject empty or malformed input. If the website is public, use a CAPTCHA or another abuse control when the traffic pattern requires it.

Set a budget alert or usage alert in the platform you use. Review the model, input size and output size because long prompts and long responses can increase cost. Cache results only when the response can safely be reused and the data is not private or user-specific.

## Step 6: Choose a Model for the Job

Do not select a model only because it has the newest name. Start with the task. A short FAQ answer, a classification label, a long document summary and a multi-step agent task have different needs.

Test a small set of real prompts. Measure answer quality, latency, output length, error rate and cost. If a smaller model meets your quality target, it may be a better fit for a high-volume website feature. If the task needs stronger reasoning or a larger context window, test a more capable model.

Keep the model ID in server configuration rather than hardcoding it in several files. That makes it easier to change models after a deprecation or product update. Check the official model list before you deploy a change.

## Production Checks Before Launch

Test the route with an empty prompt, a very long prompt, an invalid JSON body and a normal request. Check what happens when the API key is missing, the provider returns an error or the request takes too long. The front end should show a useful message without revealing server details.

Check that the key is not present in the built JavaScript bundle. Search your public assets and browser network requests for the key name. The browser should call your own endpoint and should never receive the secret.

Add monitoring for request count, error rate, latency and approximate usage. Keep logs free of sensitive prompt text unless you have a clear reason and user consent. Set a policy for how long request logs are kept.

Finally, test the feature on the hosting environment, not only on your laptop. Node version, environment variables, request timeouts and serverless limits can differ between local and production environments.

## Common Integration Mistakes

The most serious mistake is putting the API key in front-end code. A key in a React component, public JavaScript bundle or NEXT_PUBLIC_ variable can be copied by anyone who visits the site.

Another mistake is using an old SDK because a tutorial still ranks in search. Google's legacy JavaScript package is deprecated. Use the current @google/genai package and check the version requirements.

Do not let every visitor send unlimited requests. A public AI endpoint needs authentication, rate limits, usage monitoring and clear error handling. Without those controls, one script can consume the available quota.

Do not assume a model response is safe to publish. Validate output before using it in a page, email or workflow. If the model can call tools or access customer data, add authorization checks in your own server code. The model should not decide whether a user is allowed to access a record.

## Key Takeaways

- Use the official @google/genai SDK for new JavaScript projects.
- Keep the Gemini key on the server and call it through your own route.
- Use Node.js 22 or later with SDK version 3.
- Validate input, add rate limits and monitor usage before launch.
- Recheck the model list and pricing before production changes.

## Related Reading

- [How to Get a Gemini API Key](/articles/how-to-get-gemini-api-key/)
- [How to Connect Gemini API to Replit](/articles/how-to-connect-gemini-api-to-replit/)
- [Google Gen AI JavaScript SDK](https://github.com/googleapis/js-genai)
- [Google Cloud API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys-best-practices)
- [Gemini API Getting Started Guide](https://ai.google.dev/gemini-api/docs/get-started?lang=node)

## FAQ

### Can I add Gemini to my website?

Yes. Use the Gemini API from a backend route or serverless function, then send the result to your front end. This keeps your API key out of public client code.

### Which JavaScript SDK should I use for Gemini?

Google's current TypeScript and JavaScript SDK is @google/genai. The older @google/generative-ai package is deprecated.

### Can I call Gemini directly from browser JavaScript?

The SDK can run in a browser for some setups, but Google's SDK warns against exposing API keys in client-side code in production. A server-side route is safer.

### What Node.js version does the current Google Gen AI SDK need?

The current SDK repository says version 3.0.0 and later require Node.js 22 or later. Check the package requirements before installing.

### Where should I store my Gemini API key?

Store it as a server-side environment variable or in a secrets manager. Do not use a NEXT_PUBLIC_ variable or commit the key to source control.

### Can I use Gemini in a static website?

A static front end can call a serverless function or backend endpoint that talks to Gemini. Do not put a long-lived API key in a public JavaScript bundle.
