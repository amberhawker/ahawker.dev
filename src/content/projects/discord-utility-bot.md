---
title: "Discord Utility Bot"
year: 2023
role: "Personal project"
shortDescription: "A modular Discord selfbot with a plugin-based cog architecture - admin utilities, media commands, and an extensible template for adding new features."
highlights:
  - "Cog-based architecture where each feature is a pluggable module"
  - "Admin and moderation utility commands"
  - "Media commands pulling from external image APIs"
  - "A reusable cog template for quickly adding new features"
tags: ["Python", "nextcord", "Discord API", "REST APIs"]
repo: "https://github.com/amberhawker/cutebot"
featured: false
---

A Discord selfbot I built - a bot that runs on a user account rather than a bot account - organized around discord.py-style cogs so each feature lives in its own module that can be loaded or dropped independently.

It grew out of wanting one place for the little utilities we kept wishing existed - admin commands for channel housekeeping, image commands that pull from external APIs, and a template cog so adding a new feature is just filling in a skeleton. It taught me a lot about async Python, structuring a bot so it stays maintainable as features pile up, and working respectfully with third-party APIs.
