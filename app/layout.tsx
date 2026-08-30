import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Amber Hawker — Systems Engineer', description: 'Systems engineering, software development, and robotics.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }