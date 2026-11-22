---
title: "Aligning Serenity"
year: 2026
role: "Client website · design & development"
shortDescription: "A production website for a Kelowna wellness practitioner - Astro marketing pages with a custom in-browser content editor so the client can update the site themselves."
highlights:
  - "Astro static marketing pages with a session-protected /admin studio"
  - "GrapesJS-based visual editor built as React islands"
  - "Content edits persist back to the repo through the GitHub API"
  - "Editable design tokens so the client can restyle without touching code"
  - "Deployed to Cloudflare Workers with Workers Builds CI"
tags: ["Astro", "React", "TypeScript", "Tailwind CSS", "GrapesJS", "Cloudflare Workers"]
live: "https://aligningserenity.com"
featured: true
order: 4
---

aligningserenity.com is a site I built for a local BodyTalk and BCST practitioner in Kelowna. The goal was a calm, professional marketing site she could maintain without needing me for every wording change.

The site is Astro with React islands, styled with Tailwind CSS 4 driven by editable design tokens. The interesting piece is the /admin studio: a password-protected GrapesJS editor that lets the client edit page content visually. In production, those edits are committed back to the repository through the GitHub API, which triggers a Workers Builds deploy and updates the live site.

It's deployed on Cloudflare Workers with the Astro Cloudflare adapter - static pages served fast, with the on-demand admin routes running in the same Worker.
