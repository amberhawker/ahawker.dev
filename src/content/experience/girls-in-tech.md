---
title: "Technical Manager"
org: "Girls in Tech UBCO (ACM-W student chapter)"
summary: "Built and maintain the club website, girlsintech.ca — an Astro site with an in-browser admin editor so the exec team can update events, execs, and gallery content without touching code."
stack: ["Astro", "Tailwind CSS", "DaisyUI", "Cloudflare Workers"]
related: ["girls-in-tech"]
link: "https://girlsintech.ca"
order: 3
---

UBC Okanagan Girls in Tech is a student-led club and ACM-W student chapter. As Technical Manager I built and maintain [girlsintech.ca](https://girlsintech.ca).

## The site

- A pink retro desktop with Windows XP-style windows, desktop shortcut icons, and anime.js scroll animations
- Events, execs, sponsors, and links stored as Astro content collections
- A password-protected `/admin` editor; production edits are committed back to the repository through the GitHub API
- Deployed on Cloudflare Workers with the Astro Cloudflare adapter
