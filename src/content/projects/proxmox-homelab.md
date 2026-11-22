---
title: "Proxmox Homelab"
year: 2026
role: "Personal infrastructure"
shortDescription: "A home server I built from parts and have upgraded over the years. It runs Proxmox VE and hosts my media, photos, websites, and side projects."
highlights:
  - "Built from parts and upgraded piece by piece over several years"
  - "Proxmox VE with ZFS storage, running VMs and LXC containers"
  - "Caddy reverse proxy in front of the services, with remote access over Tailscale"
  - "Hosts Jellyfin, Immich, a Bluesky PDS, websites, and personal projects"
  - "Scheduled backups"
tags: ["Proxmox VE", "ZFS", "Linux", "Docker", "Caddy", "Tailscale", "Jellyfin", "Immich", "Bluesky PDS"]
featured: false
---

My homelab started as a donated computer. I've worked on it for years, upgrading one component at a time as needs changed and budget allowed, so it has grown alongside my interest in infrastructure.

It runs Proxmox VE as the hypervisor, with ZFS handling storage. Services live in their own VMs and LXC containers, which keeps them isolated and lets me snapshot, roll back, or rebuild any one of them without touching the rest.

Here's what it hosts:

- **Jellyfin** for my media library
- **Immich** for photo and video backup
- **A Bluesky PDS**, my own AT Protocol personal data server
- **Websites and personal projects**, including staging copies of things I'm working on

Caddy sits in front as the reverse proxy and handles routing and TLS for every service. Tailscale gives me private remote access without opening ports to the internet. Backups run on a schedule, because a homelab without backups is just a countdown.

It's also where I try things before using them at work. Running Proxmox, ZFS, and Caddy for myself has made me a lot more confident running them in production.
