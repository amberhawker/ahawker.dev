export const site = {
  name: "Amber Hawker",
  pronouns: "she/her",
  role: "Software & Systems Developer · IT Specialist",
  location: "British Columbia, Canada",
  tagline:
    "I build and run the systems businesses depend on — from network and server infrastructure to the custom software and automation that ties it all together.",
  url: "https://ahawker.dev",
  email: "ahawker374@gmail.com",
  github: "https://github.com/amberhawker",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export const highlights = [
  { value: "MSP", label: "Managed IT operations" },
  { value: "Infra", label: "Networks, servers, cloud" },
  { value: "Sec", label: "Hardening & homelab research" },
  { value: "Dev", label: "Custom software & automation" },
] as const;

export const about = {
  intro:
    "I'm Amber, a tech lead and IT specialist working across the full stack of modern infrastructure — computer science fundamentals, systems administration, and the automation that keeps everything reproducible.",
  paragraphs: [
    "My background spans managed service provider work and hands-on systems engineering: standing up and maintaining networks, servers, and identity, keeping fleets patched and monitored, and being the person who actually resolves the incident rather than escalating it.",
    "On the engineering side I write the tooling that removes repetitive work — provisioning scripts, monitoring glue, deployment pipelines, and internal web apps. I work primarily in Linux environments and spend research time in robotics (ROS2), cybersecurity, and a continually rebuilt homelab.",
    "I care about systems that are documented, observable, and boring to operate. Good infrastructure should be something you stop thinking about.",
  ],
  focus: [
    "MSP management & concierge IT support",
    "Systems & network infrastructure",
    "Cybersecurity and homelab research",
    "Systems engineering on Linux / ROS2",
    "Web development & automation",
  ],
} as const;

export const services = [
  {
    title: "Concierge IT & MSP Support",
    description:
      "Day-to-day IT for small teams and businesses: onboarding and offboarding, endpoint and identity management, patching, backups, and responsive help when something breaks.",
    points: [
      "Managed workstations & device lifecycle",
      "Microsoft 365 / Google Workspace administration",
      "Backup, recovery, and documentation",
    ],
  },
  {
    title: "Infrastructure & Network Engineering",
    description:
      "Design, deployment, and maintenance of the networks and servers underneath your business — built to be segmented, monitored, and recoverable.",
    points: [
      "Routing, switching, VLANs, and VPN access",
      "Firewalls, hardening, and security baselines",
      "Monitoring, alerting, and capacity planning",
    ],
  },
  {
    title: "Cloud & Server Management",
    description:
      "Linux and cloud environments run as code: repeatable provisioning, sane access control, and predictable upgrades instead of one-off manual changes.",
    points: [
      "Linux server administration & containers",
      "Infrastructure as code and configuration management",
      "Migrations, hybrid setups, and cost review",
    ],
  },
  {
    title: "Custom Software & Automation",
    description:
      "Software written to fit the way you already work — internal tools, integrations, and scripts that remove the manual steps between systems.",
    points: [
      "Internal web apps and dashboards",
      "API integrations and data pipelines",
      "CI/CD and operational automation",
    ],
  },
] as const;

export const projects = [
  {
    title: "Managed IT Operations",
    kind: "Ongoing practice",
    description:
      "Full-service IT support and infrastructure management for business clients — remote monitoring, endpoint management, and hands-on escalation resolution.",
    stack: ["Windows Server", "Microsoft 365", "RMM", "Networking"],
  },
  {
    title: "Cybersecurity Homelab",
    kind: "Research",
    description:
      "A continually rebuilt lab for testing hardening, segmentation, and detection: virtualized services, isolated networks, and monitoring across the stack.",
    stack: ["Proxmox", "pfSense", "Docker", "Wazuh"],
  },
  {
    title: "Infrastructure Automation",
    kind: "Tooling",
    description:
      "Provisioning and configuration tooling that turns manual server setup into reproducible, version-controlled deployments.",
    stack: ["Linux", "Bash", "Ansible", "Git"],
  },
  {
    title: "Robotics & Systems Engineering",
    kind: "Engineering",
    description:
      "Systems-level work with ROS2 on Linux — nodes, sensor integration, and the build and deployment tooling around them.",
    stack: ["ROS2", "C++", "Python", "Ubuntu"],
  },
  {
    title: "Web Development",
    kind: "Product",
    description:
      "Modern, accessible web applications and sites, from static marketing pages to typed full-stack apps deployed on managed platforms.",
    stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Automation & Integrations",
    kind: "Tooling",
    description:
      "Scripts and services that connect the systems a business already uses, replacing recurring manual work with scheduled, observable jobs.",
    stack: ["Python", "REST APIs", "PowerShell", "Cron"],
  },
] as const;

export const skillGroups = [
  {
    label: "Systems & Infrastructure",
    items: [
      "Linux",
      "Windows Server",
      "Proxmox",
      "Docker",
      "Networking",
      "Firewalls",
      "Active Directory",
    ],
  },
  {
    label: "Cloud & Operations",
    items: ["Microsoft 365", "Azure", "Ansible", "CI/CD", "Monitoring", "Backup & DR"],
  },
  {
    label: "Development",
    items: ["TypeScript", "Python", "C++", "Bash", "PowerShell", "React", "Next.js", "Node.js"],
  },
  {
    label: "Security & Robotics",
    items: ["Hardening", "Network segmentation", "Incident response", "ROS2"],
  },
] as const;
