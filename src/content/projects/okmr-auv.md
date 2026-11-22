---
title: "OKMR AUV Software"
year: 2025
role: "Software Lead · UBCO Marine Robotics"
shortDescription: "Autonomy and control software for UBC Okanagan Marine Robotics' autonomous underwater vehicles, built on ROS 2 Jazzy."
highlights:
  - "ROS 2 node architecture across controls, navigation, planning, detection, and mapping"
  - "Devcontainer-based development environment and CI"
  - "Custom ROS 2 message types for perception output"
tags: ["ROS 2", "Python", "C++", "CMake", "Docker", "Unity"]
repo: "https://github.com/amberhawker/okmr_auv"
live: "https://okmarinerobotics.com"
featured: true
order: 1
---

The OKMR AUV codebase is the software stack for UBC Okanagan Marine Robotics' autonomous underwater vehicles, including Ogopogo. ROS 2 (Jazzy) handles inter-process communication, configuration, and package management, and the code is split into ROS 2 packages per area of the system: controls, navigation, high-level planning state machines, object detection, mapping, and a vendored simulator build.

Devcontainers keep the development environment consistent across every team member's machine. My contributions in the public repository include the devcontainer setup, a first pass at CI built on that devcontainer, and message definitions.

As the software lead, I coordinate development across the team, so most of my time is spent in the background. I try to contribute code when I can, but my main focus is on architecture and design through leadership.

As well, we have okmr_docs, which has documentation for the project, and okmr_sim, which is a Unity-based simulator for the AUV.