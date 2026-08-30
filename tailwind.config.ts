import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { fontFamily: { sans: ['Inter','ui-sans-serif'], mono: ['JetBrains Mono','monospace'] }, colors: { ink: '#0a0d12', panel: '#11161e', mint: '#8df7c7' } } }, plugins: [] };
export default config;