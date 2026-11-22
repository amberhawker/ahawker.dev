---
title: "ChatGPT Discord Bot"
year: 2022
role: "Personal project"
shortDescription: "A Discord bot that turns a channel into a conversation with ChatGPT - a bot account reads messages and a webhook replies, so chatting feels natural instead of command-driven."
highlights:
  - "Bot account reads channel messages and routes them to ChatGPT"
  - "Webhook replies inline, so responses feel conversational rather than like command output"
  - "No prefix or slash commands needed - just message the channel"
tags: ["Python", "Discord API", "Webhooks", "ChatGPT"]
repo: "https://github.com/amberhawker/ChatGPT-Discord-Bot"
featured: false
---

Built in the early ChatGPT days, when everyone was trying to get it into every chat app they used. The idea was to make talking to it feel like talking to a person in the channel rather than running a command.

The trick was splitting the work between two Discord primitives: the bot account reads messages and handles commands, while a webhook posts the ChatGPT response back to the channel. Since webhooks can post with arbitrary names and avatars, the replies look like an ordinary participant in the conversation.
