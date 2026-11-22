---
title: "Circles"
year: 2026
role: "Personal project · in progress"
shortDescription: "A work-in-progress app in the spirit of Life360, but built around shared calendars - groups, events, and location, for keeping a circle of people coordinated."
highlights:
  - "Flutter front end targeting desktop, mobile, and web from one codebase"
  - "C++ back end with CMake build system"
  - "PostgreSQL schema for users, circles, calendars, and recurring events"
  - "Per-circle calendar sharing with permission levels"
tags: ["Flutter", "Dart", "C++", "CMake", "PostgreSQL"]
featured: false
---

Circles is my take on a group coordination app - think Life360, but centred on shared calendars instead of constant location tracking. Groups ("circles") can share calendars with each other, create events with recurrence, and keep everyone on the same page.

The front end is a Flutter app targeting Android, iOS, desktop, and web from a single Dart codebase. The back end is written in C++ with a CMake build, backed by a PostgreSQL schema modelling users, circles, calendars, events, and the permission tables between them.

It's still in progress. Most of what I've gotten out of it so far is the learning - designing a relational schema properly, building a cross-platform Flutter app, and wiring a C++ service layer have each taught me a lot.
