---
title: "How to Get a Gemini API Key: A Safe Step by Step Guide"
description: "Get a Gemini API key in Google AI Studio, connect a project, set it up securely, and fix common permission and billing problems."
category: Gemini
author: Tech Updates
date: 2026-10-17
readingTime: "8 min read"
featuredImage: "/images/how-to-get-gemini-api-key.svg"
tags:
  - Gemini API
  - Google AI Studio
  - API key
  - Python
keyTakeaways:
  - "Create and manage Gemini API keys in Google AI Studio using a project you control."
  - "Store keys in environment variables or a secret manager, never in public source code."
  - "Check current key type, restrictions, quota, and billing before debugging application errors."
faqs:
  - question: "Where do I get a Gemini API key?"
    answer: "Open Google AI Studio, go to the API keys page, and create or select a key for a Google Cloud project."
  - question: "Is a Gemini API key free?"
    answer: "Google offers a free tier for eligible models and usage, but limits and paid tier requirements vary. Check current pricing and quota before use."
  - question: "Can I use a Gemini API key in Python?"
    answer: "Yes. Install the official google-genai SDK and read the key from an environment variable such as GEMINI_API_KEY."
  - question: "Why can I not create an API key?"
    answer: "The project may not be imported, the API may not be enabled, or your Google Cloud account may lack the required permissions."
  - question: "Can I put my Gemini API key in JavaScript?"
    answer: "Do not expose a private key in browser code. Keep it on a server or use an approved secure architecture."
  - question: "What should I do if my key is blocked?"
    answer: "Check Google AI Studio for key status, review restrictions, and create a replacement key if Google reports that the old key is compromised."
  - question: "Do I need billing to use Gemini API?"
    answer: "Not for every eligible free-tier use, but paid usage and higher limits require billing setup. Check the current official pricing and limits."
---
## Short Answer

You can get a Gemini API key from [Google AI Studio](https://aistudio.google.com/). Open its API keys page, choose an existing Google Cloud project or create one, and create a key. The key lets your application authenticate requests to the Gemini API. Before you use it, check the current key type, restrictions, quotas, and billing rules in Google's [official key guide](https://ai.google.dev/gemini-api/docs/api-key) and [getting started guide](https://ai.google.dev/gemini-api/docs/get-started).

Treat the key like a password. Do not paste it into a public GitHub repository, a client side web page, a screenshot, or an article. Store it in an environment variable or a secret manager, and restrict it to the services that need it.

## What the Question Really Means

A Gemini API key is not the same thing as a normal Gemini app login. The consumer Gemini website and app are designed for people to chat. The API is for developers who want to call Gemini models from code, an application, a workflow, or a server.

The key identifies the project used for the request and helps Google apply access rules, quotas, and billing. It does not automatically give unlimited usage, make every model available, or remove the need to follow Google's terms. Some projects need extra setup before the key can be created or used.

Google's key setup has also changed over time. Its documentation describes standard keys and authorization keys, and notes that new AI Studio keys are created as authorization keys. Always read the current official guide instead of copying an older tutorial without checking its date.

## How It Works

Google AI Studio provides a simple place to manage Gemini API projects and keys. A key is associated with a Google Cloud project, where billing, collaborators, and permissions can be managed. For a new user, AI Studio may create a default project and key. If you already use Google Cloud, you may need to import the project into AI Studio before it appears.

Authentication and usage are separate from model selection. Your code sends a request using the key, then the API applies the access, model, quota, and billing rules for that project. A valid key can still fail if it is restricted incorrectly, the API is not enabled, the selected model is unavailable, or the project has reached a quota.

## Practical Steps

### 1. Open Google AI Studio

Visit [Google AI Studio](https://aistudio.google.com/) and sign in with the Google account that should own or manage the project. Use an account where you have permission to create or manage projects. For work accounts, your organization may apply additional restrictions.

### 2. Open the API keys page

Choose the API keys section. If you already have a project, select it. If your project is not listed, use the project import option described in Google's [API key documentation](https://ai.google.dev/gemini-api/docs/api-key). Do not create multiple projects without a reason, because that can make billing and access harder to track.

### 3. Create or select a key

Choose the option to create an API key and follow the on screen steps. Read the key type and restriction information shown in AI Studio. Google has been moving toward authorization keys connected to service accounts. Do not assume that an older unrestricted standard key will keep working indefinitely.

### 4. Store the key safely

For local development, set an environment variable rather than writing the secret directly into source code.

On Linux or macOS, a shell session can use a command like this:

```bash
export GEMINI_API_KEY="your_key_here"
```

Replace the example text locally. Do not commit the real value. If you use a shared machine, CI workflow, or production server, use the environment or secret management feature designed for that platform. Anyone who can read a leaked key may be able to use your quota.

### 5. Install the official SDK

For Python, Google's current quickstart uses the `google-genai` package:

```bash
python -m pip install -U google-genai
```

Then read the environment variable in your script:

```python
import os
from google import genai

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise RuntimeError("Set GEMINI_API_KEY before running this script")

client = genai.Client(api_key=api_key)
```

Use Google's current [getting started guide](https://ai.google.dev/gemini-api/docs/get-started) for a complete request example and the current model names. API methods and model availability can change, so avoid building a new project from an old snippet without checking the official docs.

### 6. Test with a small request

Start with a small test using a model available to your project. If the request fails, capture the status code and error message but remove the key and other secrets before sharing logs. A successful authentication check does not prove that your app has enough quota for a large workload.

### 7. Review restrictions and usage

Set the narrowest restrictions that fit your app. Review the API restrictions and application restrictions available for your key type. Monitor usage in AI Studio or Google Cloud and set budget alerts where available. The [pricing page](https://ai.google.dev/gemini-api/docs/pricing) explains current free and paid usage. Do not assume that all models have the same free allowance.

## Common Problems

### The Create API Key button is missing

Your project may not be imported into AI Studio, or you may lack the required Google Cloud permissions. Google's guide lists permissions that may be needed for project access, key creation, API enablement, and service account binding. Ask your project administrator for the minimum required access rather than using someone else's credentials.

### The key works in one project but not another

Keys are tied to projects. Confirm that your application uses the key from the intended project and that the Gemini API is enabled there. Also check that the project has the expected billing and quota settings.

### The API returns an authentication or permission error

Check that the environment variable is loaded in the process that runs your app. Confirm there are no extra spaces or quotation marks copied into the value. Review the key's restrictions and make sure the request is using the intended API. Never print the secret to diagnose the issue.

### The key is blocked

Google's troubleshooting documentation explains that keys identified as leaked may be blocked. Check the key status in AI Studio. If the key is compromised, create a replacement, update the app, test it, and then disable the exposed key. Review source history and logs to understand where it leaked.

### The request fails because of quota

A valid key does not guarantee unlimited requests. Check your model's rate limits, project usage, billing status, and current pricing. Reduce request frequency or choose a model that fits the task if the usage is above your current limit.

## What Does Not Work

Do not put a private API key in frontend JavaScript, a public repository, a shared document, or a browser extension that anyone can inspect. Client side code is visible to the user, so a secret embedded in it is not secret.

Do not rely on random API key generators or third party websites that promise free keys. Create keys through Google's official service and keep ownership of the project. Do not paste the key into a support forum or public issue.

Do not assume a tutorial from last year is still correct. Key types, model names, usage limits, and billing rules can change. Use current Google documentation as the source of truth.

## Safety and Limitations

An API key can be abused if it leaks. Use a separate key for each environment where practical, apply restrictions, and monitor usage. If a key is exposed, rotate it and review usage. Avoid sharing the key with contractors or tools that do not need it.

If you are building a website, keep the key on a trusted server and have the browser call your own backend. The backend can validate requests and apply limits before calling Gemini. Never rely on hiding a key in minified JavaScript.

API access also comes with terms and data handling rules. Review Google's current terms and privacy information before sending customer, health, financial, or confidential business data to a model. A working API key is not permission to upload every kind of data.

## Key Takeaways

- Create and manage Gemini API keys in Google AI Studio.
- Make sure the key belongs to the right Google Cloud project.
- Store it in an environment variable or secret manager.
- Check restrictions, quotas, model availability, and billing when requests fail.
- Replace exposed keys and keep them out of public source code.

## Related Reading

- [Google Gemini API key documentation](https://ai.google.dev/gemini-api/docs/api-key)
- [Gemini API getting started guide](https://ai.google.dev/gemini-api/docs/get-started)
- [Gemini API troubleshooting](https://ai.google.dev/gemini-api/docs/troubleshooting)

## FAQ

### Where do I get a Gemini API key?

Open Google AI Studio, select API keys, and create or choose a key associated with a Google Cloud project.

### Is a Gemini API key free?

Some eligible models and usage are available through a free tier. Limits and paid tier requirements vary, so check current pricing before you build around a specific allowance.

### Can I use a Gemini API key in Python?

Yes. Install Google's `google-genai` package and read the key from an environment variable such as `GEMINI_API_KEY`.

### Why can I not create an API key?

Your project may need to be imported into AI Studio, the API may need to be enabled, or your account may lack the required permissions.

### Can I put my Gemini API key in JavaScript?

Do not expose a private key in browser code. Keep it on a trusted server or use an approved architecture that does not reveal the secret.

### What should I do if my key is blocked?

Check its status in Google AI Studio. If it was exposed or blocked as compromised, create a replacement, update your app, test it, and disable the old key.

### Do I need billing to use Gemini API?

Not for every eligible free tier request. Paid usage and higher limits can require billing setup. Check the current pricing and quota rules for your model.
