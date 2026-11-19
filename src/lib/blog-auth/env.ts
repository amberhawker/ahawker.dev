import { env } from 'cloudflare:workers';

export type BlogAuthEnv = { BLOG_PASSWORD: string; SESSION_SECRET: string };

/** Returns the blog secrets, or null when either is not configured. */
export function getBlogAuthEnv(): BlogAuthEnv | null {
    const { BLOG_PASSWORD, SESSION_SECRET } = env as Partial<Record<keyof BlogAuthEnv, unknown>>;
    if (typeof BLOG_PASSWORD !== 'string' || !BLOG_PASSWORD) return null;
    if (typeof SESSION_SECRET !== 'string' || !SESSION_SECRET) return null;
    return { BLOG_PASSWORD, SESSION_SECRET };
}
