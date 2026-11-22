---
title: "Discord Server Bot"
year: 2023
role: "Personal project"
shortDescription: "A nextcord-based Discord bot for my own server - a proper bot account with prefix commands, a cog module system, and permission-gated admin features."
highlights:
  - "Built on nextcord with a real bot account"
  - "Cog-based module system for organizing features"
  - "Permission-gated admin commands"
  - "Integrations with external image APIs"
tags: ["Python", "nextcord", "Discord API", "REST APIs"]
featured: false
---

A Discord bot I wrote for my friend's public server, built on nextcord with a proper bot account. Commands live in cogs, which are loadable modules that each own one feature. This allows the bot to stay organized as it grows.

It was my first time doing things the "right" way on the Discord API: a real bot token instead of selfbot tricks, permission checks on sensitive commands, and external API integrations behind prefix commands. It was also an experiment in how to best work on a project with user feedback. The lessons from it fed directly into later bots and automation work.
