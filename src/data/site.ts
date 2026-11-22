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

export const stack: { group: string; items: string[] }[] = [
  { group: 'languages', items: ['Python', 'TypeScript', 'C++', 'C#', 'Java', 'Rust', 'Bash', 'PowerShell'] },
  { group: 'web', items: ['Astro', 'Next.js', 'React', 'Nuxt / Vue', 'Tailwind CSS'] },
  { group: 'systems', items: ['Linux (Debian / Arch)', 'Docker', 'systemd', 'Proxmox VE', 'ZFS', 'Caddy'] },
  { group: 'robotics', items: ['ROS 2 Jazzy / Humble', 'MicroPython'] },
  { group: 'automation', items: ['Playwright', 'Stagehand', 'Pandas', 'openpyxl', 'REST APIs'] },
  { group: 'security', items: ['SentinelOne', 'Adlumin', 'FortiGate', 'Network segmentation'] },
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
