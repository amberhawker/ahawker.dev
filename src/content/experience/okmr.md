---
title: "Software Lead"
org: "UBCO Marine Robotics (OKMR)"
summary: "Autonomy software for Ogopogo, an autonomous underwater vehicle. ROS 2 node architectures connect sensor fusion, real-time messaging, state estimation, and autonomy loops into a system that has to behave predictably without a network."
stack: ["ROS 2 Jazzy / Humble", "Python", "C++", "Devcontainers"]
related: ["okmr-auv"]
link: "https://okmarinerobotics.com"
order: 2
---

I architect autonomy software for Ogopogo, UBC Okanagan Marine Robotics' autonomous underwater vehicle. ROS 2 Jazzy/Humble node architectures connect sensor fusion pipelines, real-time message passing, state estimation, and autonomy loops into a system that must behave predictably without a network.

## In the codebase

The OKMR AUV repository is split into ROS 2 packages per area of the system: controls, navigation, high-level planning state machines, object detection, mapping, and a vendored simulator build.

- Devcontainer setup so every team member works in the same environment
- A first pass at CI built on that devcontainer
- Custom ROS 2 message definitions for perception output, such as `BoundingBox`
