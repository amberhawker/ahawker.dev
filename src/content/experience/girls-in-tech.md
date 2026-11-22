---
title: "Technical Manager"
org: "Girls in Tech UBCO (ACM-W student chapter)"
summary: "Built and maintain the club website, girlsintech.ca - an Astro site with an in-browser admin editor so the exec team can update events, execs, and gallery content without touching code."
stack: ["Astro", "Tailwind CSS", "DaisyUI", "Anime.js", "Cloudflare Workers"]
related: ["girls-in-tech"]
link: "https://girlsintech.ca"
order: 3
---

UBC Okanagan Girls in Tech is a student-led club and ACM-W student chapter. As Technical Manager I built and maintain [girlsintech.ca](https://girlsintech.ca). I also assist in organizing events and workshops for the club. Finally, I help with technical support during events, such as our yearly hackathon, Hack Attack.

## The site

- A pink retro desktop with Windows XP-style windows, desktop shortcut icons, and anime.js scroll animations
- Events, execs, sponsors, and links stored as Astro content collections
- A password-protected `/admin` editor; production edits are committed back to the repository through the GitHub API
- Deployed on Cloudflare Workers with the Astro Cloudflare adapter
