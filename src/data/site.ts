export const profile = {
  name: 'Amber Hawker',
  handle: 'amber',
  host: 'ahawker.dev',
  pronouns: 'she/her',
  base: 'Kelowna, BC',
  roles: ['Systems engineer', 'Software developer', 'IT specialist'],
  tagline:
    'I design software and infrastructure for systems where reliability, clear boundaries, and production behaviour matter.',
  about: [
    'I’m a Computer Science student at UBC Okanagan working across infrastructure, robotics software, and the web.',
    'Day to day that means running production networks and servers, writing automation that makes operational work repeatable, and building autonomy software for an underwater robot.',
    'I enjoy working on interesting technical challenges and meeting new people — you might see me bouncing between tasks and chatting at the same time.',
  ],
  focus: ['Software', 'Systems', 'Robotics'],
} as const;

export interface Role {
  id: string;
  title: string;
  org: string;
  summary: string;
  stack: string[];
}

export const experience: Role[] = [
  {
    id: 'cmit',
    title: 'Technical Lead',
    org: 'CMIT Solutions Kelowna',
    summary:
      'Operate production infrastructure for approximately 150 endpoints. Design segmented EdgeRouter/FortiGate networks, Proxmox VE clusters, ZFS storage, Caddy reverse-proxy routing, and systemd orchestration across Debian and Arch Linux.',
    stack: ['Proxmox VE', 'ZFS', 'Caddy', 'systemd', 'Docker', 'FortiGate', 'SentinelOne', 'Huntress', 'ScreenConnect'],
  },
  {
    id: 'okmr',
    title: 'Software Lead',
    org: 'UBCO Marine Robotics (OKMR)',
    summary:
      'Autonomy software for Ogopogo, an autonomous underwater vehicle. ROS 2 node architectures connect sensor fusion, real-time messaging, state estimation, and autonomy loops into a system that has to behave predictably without a network.',
    stack: ['ROS 2 Jazzy / Humble', 'Python', 'C++', 'Devcontainers'],
  },
  {
    id: 'git',
    title: 'Technical Manager',
    org: 'Girls in Tech UBCO (ACM-W student chapter)',
    summary:
      'Built and maintain the club website, girlsintech.ca — an Astro site with an in-browser admin editor so the exec team can update events, execs, and gallery content without touching code.',
    stack: ['Astro', 'Tailwind CSS', 'DaisyUI', 'Cloudflare Workers'],
  },
];

export const education = {
  program: 'Computer Science',
  school: 'University of British Columbia, Okanagan',
};

export const stack: { group: string; items: string[] }[] = [
  { group: 'languages', items: ['Python', 'TypeScript', 'C++', 'C#', 'Rust', 'Bash', 'PowerShell'] },
  { group: 'web', items: ['Astro', 'Next.js', 'React', 'Nuxt / Vue', 'Tailwind CSS'] },
  { group: 'systems', items: ['Linux (Debian / Arch)', 'Docker', 'systemd', 'Proxmox VE', 'ZFS', 'Caddy'] },
  { group: 'robotics', items: ['ROS 2 Jazzy / Humble', 'MicroPython'] },
  { group: 'automation', items: ['Playwright', 'Stagehand', 'Pandas', 'openpyxl', 'REST APIs'] },
  { group: 'security', items: ['SentinelOne', 'Huntress', 'FortiGate', 'Network segmentation'] },
];

export interface Link {
  id: string;
  label: string;
  value: string;
  href: string;
}

export const links: Link[] = [
  { id: 'email', label: 'email', value: 'ahawker374@gmail.com', href: 'mailto:ahawker374@gmail.com' },
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
  { id: 'contact', file: 'contact.sh', command: './contact.sh' },
] as const;
