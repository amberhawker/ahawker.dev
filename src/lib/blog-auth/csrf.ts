import type { AstroCookies } from 'astro';
import { passwordsMatch } from './session';

const COOKIE_NAME = '__Host-ahawker_blog_csrf';

export function getLoginCsrfToken(cookies: AstroCookies): string {
    const existing = cookies.get(COOKIE_NAME)?.value;
    if (existing) return existing;

    const token = crypto.randomUUID();
    cookies.set(COOKIE_NAME, token, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60,
    });
    return token;
}

export async function isValidLoginCsrfToken(cookies: AstroCookies, token: FormDataEntryValue | null): Promise<boolean> {
    const expected = cookies.get(COOKIE_NAME)?.value;
    return !!expected && typeof token === 'string' && await passwordsMatch(expected, token);
}
