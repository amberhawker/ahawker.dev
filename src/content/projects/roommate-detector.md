---
title: "Roommate Detector"
year: 2025
shortDescription: "A fun little MicroPython script that uses an ultrasonic sensor to notice a door opening and fire a webhook."
highlights:
  - "Baseline calibration with a tolerance window to filter noise"
  - "Webhook notification over Wi-Fi"
tags: ["MicroPython", "Hardware"]
repo: "https://github.com/amberhawker/roommate-detector"
featured: false
---

Roommate Detector runs on a Wi-Fi capable Raspberry Pi Pico W with a soldered ultrasonic distance sensor. It calibrates a baseline distance, watches for readings that drift outside a tolerance several times in a row, and then posts a "door opened probably" message to a webhook.

I built this as a fun little project to solve a practical problem and learn more about low level programming and hardware interaction, as well as GPIO and Wi-Fi communication.