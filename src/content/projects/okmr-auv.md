---
title: "OKMR AUV Software"
year: 2025
role: "Software Lead · UBCO Marine Robotics"
shortDescription: "Autonomy and control software for UBC Okanagan Marine Robotics' autonomous underwater vehicles, built on ROS 2 Jazzy."
highlights:
  - "ROS 2 node architecture across controls, navigation, planning, detection, and mapping"
  - "Devcontainer-based development environment and CI"
  - "Custom ROS 2 message types for perception output"
tags: ["ROS 2", "Python", "C++", "CMake", "Docker"]
repo: "https://github.com/amberhawker/okmr_auv"
live: "https://okmarinerobotics.com"
featured: true
order: 2
---

The OKMR AUV codebase is the software stack for UBC Okanagan Marine Robotics' autonomous underwater vehicles, including Ogopogo. ROS 2 (Jazzy) handles inter-process communication, configuration, and package management, and the code is split into ROS 2 packages per area of the system: controls, navigation, high-level planning state machines, object detection, mapping, and a vendored simulator build.

Devcontainers keep the development environment consistent across every team member's machine. My contributions in the public repository include the devcontainer setup, a first pass at CI built on that devcontainer, and message definitions such as BoundingBox.
