export const prerender = false;

import type { APIRoute } from 'astro';
import { getBlogAuthEnv } from '../../../lib/blog-auth/env';
import { createSessionToken, passwordsMatch, sessionCookie } from '../../../lib/blog-auth/session';

const safeNext = (value: FormDataEntryValue | null) => {
    const next = typeof value === 'string' ? value : '';
    return /^\/blog(\/[\w-]*)?$/.test(next) ? next : '/blog';
};

export const POST: APIRoute = async ({ request, cookies, redirect, url }) => {
    const form = await request.formData().catch(() => null);
    const next = safeNext(form?.get('next') ?? null);
    const password = String(form?.get('password') ?? '');
    const fail = (error: string) => redirect(`/blog?error=${error}&next=${encodeURIComponent(next)}`, 303);

    const auth = getBlogAuthEnv();
    if (!auth) return fail('config');
    if (!password || !(await passwordsMatch(password, auth.BLOG_PASSWORD))) return fail('password');

    cookies.set(sessionCookie.name, await createSessionToken(auth.SESSION_SECRET), sessionCookie.options(url.protocol === 'https:'));
    return redirect(next, 303);
};
