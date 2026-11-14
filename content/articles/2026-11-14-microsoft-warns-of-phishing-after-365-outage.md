---
title: "Microsoft Warns of New Phishing Emails After 365 Outage"
description: "Microsoft Threat Intelligence says attackers are sending fake Microsoft 365 recovery notices after the outage, using false deletion warnings to steal logins."
date: "2026-11-14"
category: "AI News"
contentType: "news"
author: "Tech Updates"
readingTime: "9 min read"
featuredImage: "/images/microsoft-365-phishing-warning.svg"
tags:
  - "Microsoft Threat Intelligence"
  - "Microsoft 365 phishing"
  - "credential phishing"
  - "AI security"
  - "incident response"
keyTakeaways:
  - "Microsoft Threat Intelligence warned on November 14 that attackers were exploiting the Microsoft 365 outage with fake service health emails."
  - "Some messages claim delayed email will be deleted within 24 hours unless a recipient clicks a recovery link."
  - "The campaign references the legitimate Exchange Online incident EX1550543, but a real incident number does not prove an email is genuine."
  - "Microsoft said the activity is consistent with credential phishing, while credential collection and malware delivery had not been confirmed."
faqs:
  - question: "What phishing campaign did Microsoft warn about?"
    answer: "Microsoft Threat Intelligence observed emails that impersonate Microsoft 365 service health notices and use the recent outage as a reason to click a fake recovery link."
  - question: "What is the fake 24-hour deletion warning?"
    answer: "Some messages claim that emails held during the outage will be deleted within 24 hours unless the recipient clicks a link to restore them."
  - question: "Which incident number do the phishing emails mention?"
    answer: "Microsoft said the messages reference the legitimate Exchange Online incident EX1550543. A correct incident number does not make an email authentic."
  - question: "Did Microsoft confirm that credentials were stolen?"
    answer: "No. Microsoft described the activity as consistent with credential phishing, but said credential collection and malware delivery had not been confirmed."
  - question: "How can Microsoft 365 admins investigate the emails?"
    answer: "Microsoft recommends checking Threat Explorer, reviewing relevant Defender XDR email and URL events, verifying Safe Links policies and confirming outages through the admin centre."
  - question: "Should users click a Microsoft outage recovery link in email?"
    answer: "No. Open the Microsoft 365 admin centre or the official service health page directly. Do not use a link in an unexpected email to restore messages or sign in."
---

Microsoft Threat Intelligence warned on **November 14, 2026** that attackers were exploiting the recent Microsoft 365 outage with fake service health emails. Some messages claim that email held during the disruption will be deleted within 24 hours unless the recipient clicks a recovery link. The messages reference a real Exchange Online incident number, which can make the warning look credible. Microsoft said the activity is consistent with credential phishing, but credential collection and malware delivery had not been confirmed.

## News Summary

Microsoft Threat Intelligence posted the warning at about **06:32 UTC on November 14 (12:02 IST)**. It said an active phishing campaign was using the Microsoft 365 service disruption as a lure. The messages impersonate service health notifications and reference the legitimate Exchange Online incident EX1550543.

Some emails falsely claim that messages held during the outage will be deleted within 24 hours unless the recipient clicks a link to restore them. Microsoft described the activity as consistent with credential phishing. It did not confirm that credentials had been collected or that malware had been delivered.

The warning is separate from the cause of the Microsoft 365 outage. Microsoft said the outage was a technical issue, not a cyberattack or an AI agent problem. The phishing campaign uses the real disruption as a story to make a fake message feel urgent.

The [Microsoft Threat Intelligence post](https://x.com/MsftSecIntel/status/2121491564161581148) is the primary warning. The [Times of India report](https://timesofindia.indiatimes.com/technology/tech-news/microsoft-has-an-email-warning-for-its-outlook-and-teams-users-after-24-hour-plus-outage-says-do-not-/articleshow/135829069.cms) independently summarises the campaign. Microsoft's guidance for [Threat Explorer](https://learn.microsoft.com/en-us/defender-office-365/threat-explorer-email-security), [EmailUrlInfo](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailurlinfo-table) and [UrlClickEvents](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-urlclickevents-table) explains how administrators can investigate suspicious messages and links.

## What Happened

Microsoft Threat Intelligence said it observed an active campaign exploiting the November 12 Microsoft 365 service disruption. The messages copy the appearance of service health notifications and include the legitimate incident number EX1550543. That number relates to the Exchange Online incident, but anyone who has seen a public outage update could copy it into a fake email.

The warning described a false claim that messages held during the outage would be deleted within 24 hours unless the recipient clicked a link to restore them. Observed subject lines followed the pattern Outage followed by a six-character code. Sender display names used organisation-specific prefixes followed by phrases such as Outage Notification or Service Health.

Microsoft listed three sender domains in its post: moments-notice[.]com, planetmaison[.]com and newbooker[.]com. It said recipient-specific SendGrid click-tracking links redirected to reallifeaccounting[.]com, including an observed path ending in themelist0.html. The domains are written here in defanged form so readers do not accidentally open them.

The Times of India reported the warning and reproduced the details from Microsoft's post. The article also noted that similar messages targeted organisations across multiple US sectors. These are indicators from the campaign Microsoft observed, not proof that every organisation received the same email.

## Why It Matters

A real service incident gives attackers a believable story. During an outage, people expect updates from the provider and may be waiting for messages to arrive. A fake email that mentions the correct service, date and incident number can look more convincing than a random password reset message.

The false 24-hour deadline adds pressure. It encourages a recipient to act quickly instead of checking the sender, link and message through a trusted channel. That is a common phishing tactic. The message does not need to explain the real technical problem. It only needs to make the recipient worry that important email will disappear.

The campaign also shows why incident communications should use a known route. Organisations should tell staff where official service updates are published and remind them not to follow unexpected recovery links. A real outage notice should be verified in the Microsoft 365 admin centre or an official service health page opened directly by the user.

The warning is relevant to AI and cloud security because Copilot and other connected tools depend on the same workplace identity and email environment. However, Microsoft did not say the phishing emails were generated by AI. The article should not describe the campaign as AI-powered without evidence.

## Key Details

Microsoft's post identifies the legitimate incident as EX1550543. A real incident number can be copied into a fraudulent message, so it should never be treated as authentication. The sender address, destination domain, message headers and user context still need to be checked.

The reported subject pattern was Outage followed by a six-character code. Sender display names used organisation-specific prefixes and phrases such as Outage Notification or Service Health. These patterns can help an administrator search mailboxes, but they are not a complete detection rule. Attackers can change the wording or use a different subject.

Microsoft listed moments-notice[.]com, planetmaison[.]com and newbooker[.]com as sender domains used in the campaign. The post also described recipient-specific SendGrid click-tracking links that redirected to reallifeaccounting[.]com. The path observed in the post ended in themelist0.html. Security teams should treat those indicators as a starting point for investigation, not as the only possible indicators.

Microsoft said the activity was consistent with credential phishing. It also said credential collection and malware delivery had not been confirmed. That distinction matters. A suspicious link can be part of a phishing campaign even when investigators have not confirmed that a victim entered a password or that a payload was delivered.

## Who Is Affected

The warning is relevant to Microsoft 365 users and organisations that received unexpected service health or recovery messages after the outage. Microsoft said similar messages targeted organisations across multiple US sectors. It did not publish a complete list of recipients or a confirmed count of affected accounts.

Administrators should check whether the suspicious subjects and sender domains appeared in their own mail environment. A message can reach a mailbox even when a user does not click it. The next step is to determine whether anyone opened the message, followed a URL or entered credentials on a page reached through the link.

Users who do not manage Microsoft 365 should still follow the same basic rule. Do not trust an email because it mentions a real incident. Open the official service page yourself, check the status there and sign in only through a known Microsoft address or your organisation's approved sign-in route.

The campaign is not evidence that the original outage was caused by attackers. Microsoft said the service disruption was technical and not related to cyber activity. The phishing activity is a separate threat that used the outage as a lure.

## What Happens Next

Microsoft recommended that organisations verify their Safe Links policies, investigate potential user interactions and confirm service disruptions directly through the Microsoft 365 admin centre. Security teams can use Microsoft Defender for Office 365 Threat Explorer to search for suspicious messages and review their delivery and URL details.

Microsoft Defender XDR advanced hunting provides tables such as EmailEvents, EmailUrlInfo and UrlClickEvents. These can help teams connect a suspicious email with the URLs it contains and the clicks recorded for recipients. Microsoft's documentation explains the fields and investigation workflow. The exact query should match the organisation's data and retention settings.

If a user clicked a link, follow the organisation's incident response process. Identify the message, check whether the user entered credentials, review sign-in activity and take the appropriate containment steps. Do not assume that every click led to account compromise, but do not ignore it either.

Users should report the email through the approved security channel and avoid forwarding it to colleagues as a warning with live links. If staff need to share the alert, use a safe internal notice that describes the subject pattern and tells people to open the service health page directly.

## What We Know and Do Not Know

Microsoft Threat Intelligence confirmed that it observed an active phishing campaign using the Microsoft 365 outage as a lure. It described the fake service health messages, the false 24-hour deletion claim, the incident number and several sender and redirect domains. The Times of India reported the same warning on November 14.

Microsoft said the activity was consistent with credential phishing. It did not confirm that credentials were collected or that malware was delivered. The public warning does not provide a complete number of messages, recipients, successful clicks or compromised accounts.

There is also no evidence in the cited warning that the phishing campaign caused the Microsoft 365 outage. The service disruption and the phishing messages are separate events. Microsoft attributed the outage to a technical network issue and separately warned that attackers were using the disruption as a pretext.

The campaign details may change. Security teams should check Microsoft's current threat intelligence and Defender documentation for updates rather than treating the listed domains as a permanent block list.

## Key Takeaways

- Microsoft Threat Intelligence posted its warning at about 12:02 IST on November 14.
- The emails impersonate Microsoft 365 service health notices.
- Some messages threaten deletion of delayed email within 24 hours.
- The messages reference the legitimate incident EX1550543.
- Microsoft described the activity as credential phishing, but theft and malware were not confirmed.
- Open the admin centre directly instead of clicking a recovery link.
- Admins should search mail, inspect URLs and review click activity.

## Related Reading

For the outage itself, read [Microsoft restores Copilot after the Microsoft 365 disruption](/articles/microsoft-restores-copilot-after-a-global-microsoft-365-outage/). For broader risk context, see our report on [AI safety groups suing five technology companies](/articles/ai-safety-groups-sue-five-tech-giants/) and our guide to [AI agent privacy](/articles/ai-agents-privacy/).

## FAQ

### What phishing campaign did Microsoft warn about?

Microsoft Threat Intelligence observed emails that impersonate Microsoft 365 service health notices and use the recent outage as a reason to click a fake recovery link. The messages reference the legitimate Exchange Online incident EX1550543.

### What is the fake 24-hour deletion warning?

Some messages claim that emails held during the outage will be deleted within 24 hours unless the recipient clicks a link to restore them. Microsoft said this was part of the phishing lure.

### Which incident number do the phishing emails mention?

Microsoft said the messages reference the legitimate Exchange Online incident EX1550543. A correct incident number does not prove that an email is authentic. Check the sender and open service health directly.

### Did Microsoft confirm that credentials were stolen?

No. Microsoft described the activity as consistent with credential phishing, but said credential collection and malware delivery had not been confirmed. Organisations should still investigate possible clicks and sign-ins.

### How can Microsoft 365 admins investigate the emails?

Microsoft recommends checking Threat Explorer, reviewing relevant Defender XDR email and URL events, verifying Safe Links policies and confirming service disruptions through the admin centre. Use the organisation's incident response process.

### Should users click a Microsoft outage recovery link in email?

No. Open the Microsoft 365 admin centre or official service health page directly. Do not use a link in an unexpected email to restore messages or sign in, even when the message includes a real incident number.
