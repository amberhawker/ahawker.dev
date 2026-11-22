export const profile = {
  name: 'Amber Hawker',
  handle: 'amber',
  host: 'ahawker.dev',
  pronouns: 'she/her',
  base: 'Kelowna, BC',
  roles: ['Software developer', 'Systems engineer', 'IT specialist'],
  tagline:
    'I love solving complex problems, but the people behind them matter most. My goal is to build things that make a difference.',
  about: [
    'I’m a Computer Science student at UBC Okanagan working across infrastructure, robotics software, and the web.',
    'Day to day that means running production networks and servers, writing automation that makes operational work repeatable, and building autonomy software for an underwater robot.',
    'I enjoy working on interesting technical challenges and connecting with other people more than anything else.',
  ],
  focus: ['Software', 'Systems', 'Robotics'],
  principle:
    'I believe learning is a continuous process, and the best way to learn is by doing.',
} as const;

export const focusAreas = [
  {
    title: 'Robotics & distributed systems',
    text: 'ROS 2 node architectures that connect sensor fusion pipelines, real-time message passing, state estimation, and autonomy loops into a system that must behave predictably without a network.',
    stack: ['ROS 2 Jazzy', 'Python', 'C++'],
  },
  {
    title: 'Tooling & automation',
    text: 'Headless browser automation and resilient scrapers with Playwright, structured ETL pipelines with Python, Pandas, and openpyxl, custom API integrations, and CLI utilities that make operational work repeatable, testable, and observable.',
    stack: ['Playwright', 'Python', 'Pandas', 'openpyxl', 'REST APIs'],
  },
  {
    title: 'Systems & infrastructure',
    text: 'Segmented networks, Proxmox VE clusters, ZFS storage, Caddy reverse-proxy routing, and systemd orchestration across Debian and Arch Linux.',
    stack: ['Proxmox VE', 'ZFS', 'Caddy', 'systemd', 'Docker'],
  },
  {
    title: 'Full-stack & web systems',
    text: 'Web systems with Astro, Next.js, React, and TypeScript, with clear application boundaries, practical state management, and services that stay understandable after the first implementation.',
    stack: ['Astro', 'Next.js', 'React', 'TypeScript'],
  },
] as const;

export const education = {
  program: 'Computer Science BSc',
  school: 'University of British Columbia, Okanagan',
};

export interface StackItem { name: string; note?: string; aliases?: string[] }
export interface StackGroup { group: string; blurb: string; items: StackItem[] }

export const stack: StackGroup[] = [
  { group: 'languages', blurb: 'What I write code in, roughly in order of how often.', items: [
    { name: 'Python', note: 'My go-to for quick iteration: automation, data pipelines, ROS 2 nodes, and Flask back ends.' },
    { name: 'TypeScript', note: 'Most of my web work, from Astro sites to Next.js apps.' },
    { name: 'C++', note: 'ROS 2 nodes for the AUV and a chat back end.' },
    { name: 'C#', note: '.NET plugins and servers for Webfishing.', aliases: ['.NET'] },
    { name: 'Rust', note: 'Side projects, like a caffeine tracker.' },
    { name: 'Java', note: 'Coursework at UBC Okanagan.' },
    { name: 'Bash', note: 'Glue scripts and server setup on Linux.' },
    { name: 'PowerShell', note: 'Windows administration and a Twitter image scraper.' },
  ]},
  { group: 'robotics', blurb: 'Software that has to work without a network or a second try.', items: [
    { name: 'ROS 2 (Jazzy / Humble)', note: 'Node architecture for the OKMR AUV.', aliases: ['ROS 2 Jazzy'] },
    { name: 'Unity', note: 'Simulation for testing the AUV.' },
    { name: 'PID & dead reckoning', note: 'Control and state estimation on the AUV.', aliases: ['PID & Dead Reckoning Control Systems'] },
    { name: 'MicroPython', note: 'Sensor scripts on a Raspberry Pi Pico W.' },
  ]},
  { group: 'web', blurb: 'Front ends and the frameworks around them.', items: [
    { name: 'Astro', note: 'This site and most of the sites I build for clubs and clients.' },
    { name: 'Next.js', note: 'Full-stack apps with auth, like my C2 Hacks project.' },
    { name: 'React', note: 'Component UIs, including a Vite and Leaflet map app.' },
    { name: 'Vue / Nuxt', note: 'Small playful sites like basil.quest and ily-because.', aliases: ['Nuxt', 'Vue'] },
    { name: 'Tailwind CSS', note: 'Styling on nearly everything.' },
    { name: 'DaisyUI', note: 'Component layer on top of Tailwind.' },
    { name: 'anime.js', note: 'Motion on this site and the Girls in Tech site.' },
    { name: 'Vite', note: 'Build tooling for React apps.' },
  ]},
  { group: 'backend', blurb: 'Services, data wrangling, and the glue between them.', items: [
    { name: 'Flask', note: 'Python APIs behind small web apps.' },
    { name: 'Prisma', note: 'Typed database access in TypeScript projects.' },
    { name: 'pandas', note: 'Spreadsheet ingestion and cleanup.' },
    { name: 'openpyxl', note: 'Reading and writing Excel files.' },
    { name: 'pydantic', note: 'Validating structured data in Python.' },
    { name: 'REST APIs', note: 'Integrating third-party services and building my own.' },
    { name: 'Discord bots & webhooks', note: 'Bots, plugins, and webhook notifications.', aliases: ['Discord', 'Discord webhooks'] },
  ]},
  { group: 'infrastructure', blurb: 'What runs my homelab, and much of what I run at work.', items: [
    { name: 'Proxmox VE', note: 'Hypervisor for my homelab and client clusters.' },
    { name: 'ZFS', note: 'Storage pools, snapshots, and replication.' },
    { name: 'Linux (Debian / Arch)', note: 'Debian and Arch across servers and workstations.' },
    { name: 'Docker', note: 'Containerised services, dev environments, and CI.' },
    { name: 'Caddy', note: 'Reverse proxy and automatic TLS in front of everything.' },
    { name: 'Tailscale', note: 'Private remote access without opening ports.' },
    { name: 'systemd', note: 'Service supervision and timers.' },
    { name: 'Cloudflare Workers', note: 'Hosting for this site and the Girls in Tech site.' },
  ]},
  { group: 'selfhosted', blurb: 'Services I run for myself on the homelab.', items: [
    { name: 'Jellyfin', note: 'Streaming my media library.' },
    { name: 'Immich', note: 'Photo and video backup.' },
    { name: 'Bluesky PDS', note: 'My own AT Protocol personal data server.' },
  ]},
  { group: 'network', blurb: 'Networks and endpoint security I manage for clients.', items: [
    { name: 'FortiGate', note: 'Firewalls and segmented client networks.' },
    { name: 'EdgeRouter', note: 'Segmented networks alongside FortiGate.' },
    { name: 'Network segmentation', note: 'VLANs that keep devices and services apart.' },
    { name: 'SentinelOne', note: 'Endpoint protection across about 150 endpoints.', aliases: ['Sentinel One'] },
    { name: 'Adlumin', note: 'Security monitoring and detection.' },
    { name: 'ScreenConnect', note: 'Remote support sessions.' },
  ]},
  { group: 'operations', blurb: 'The day-to-day tools of managed IT work.', items: [
    { name: 'Microsoft 365', note: 'Tenant, identity, and mailbox administration.' },
    { name: 'Autotask', note: 'Ticketing and service management.' },
    { name: 'N-able Cove', note: 'Backups for client machines.' },
  ]},
  { group: 'tooling', blurb: 'Making repetitive work repeatable.', items: [
    { name: 'Playwright', note: 'Headless browser automation and scrapers.' },
    { name: 'Stagehand', note: 'AI-driven browser sessions.' },
    { name: 'GitHub Actions', note: 'CI for robotics and web projects.' },
    { name: 'Devcontainers', note: 'One dev environment for a whole team.' },
    { name: 'CMake', note: 'Builds for C++ projects.' },
  ]},
];

export interface Link {
  id: string;
  label: string;
  value: string;
  href: string;
}

export const links: Link[] = [
  { id: 'email', label: 'email', value: 'amber@ahawker.dev', href: 'mailto:amber@ahawker.dev' },
  { id: 'github', label: 'github', value: 'github.com/amberhawker', href: 'https://github.com/amberhawker' },
  {
    id: 'linkedin',
    label: 'linkedin',
    value: 'linkedin.com/in/amber-hawker-8b9473335',
    href: 'https://www.linkedin.com/in/amber-hawker-8b9473335/',
  },
];

export const sections = [
  { id: 'about', file: 'about.txt', command: 'cat about.txt' },
  { id: 'experience', file: 'experience.log', command: 'cat experience.log' },
  { id: 'projects', file: 'projects/', command: 'ls ~/projects' },
  { id: 'stack', file: 'stack.json', command: 'cat stack.json' },
  { id: 'blog', file: 'blog/', command: 'cd ~/blog' },
  { id: 'contact', file: 'contact.sh', command: './contact.sh' },
] as const;
