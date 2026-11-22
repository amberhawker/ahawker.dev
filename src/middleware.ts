import { defineMiddleware } from 'astro:middleware';
import { getBlogAuthEnv } from './lib/blog-auth/env';
import { isValidSessionToken, sessionCookie } from './lib/blog-auth/session';

const isBlogPath = (pathname: string) => pathname === '/blog' || pathname.startsWith('/blog/');

export const onRequest = defineMiddleware(async (context, next) => {
    context.locals.blogAuthed = false;
    if (context.isPrerendered || !isBlogPath(context.url.pathname)) return next();

    const auth = getBlogAuthEnv();
    const token = context.cookies.get(sessionCookie.name)?.value;
    context.locals.blogAuthed = auth ? await isValidSessionToken(auth.SESSION_SECRET, token) : false;

    const response = await next();
    response.headers.set('Cache-Control', 'private, no-store');
    return response;
});
