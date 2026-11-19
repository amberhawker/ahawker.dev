---
title: "LinkedIn Follower"
year: 2026
shortDescription: "A Python automation that enriches an organisation spreadsheet and follows each organisation on LinkedIn through a driven browser session."
highlights:
  - "Spreadsheet ingestion and output with pandas and openpyxl"
  - "Browser automation with Stagehand"
  - "Resumable runs after a crash"
tags: ["Python", "Stagehand", "pandas", "openpyxl", "pydantic"]
repo: "https://github.com/amberhawker/Linkedin-Follower"
featured: true
order: 3
---

LinkedIn Follower reads a table of organisations from an .xlsx file, enriches it using the Hatz AI API and web search, and then works through the list one by one, following each organisation on LinkedIn in an automated browser session.

It is designed to be restartable: if the run crashes, starting it again picks up from where it left off. Setup is a single script that opens a browser for the LinkedIn login.
