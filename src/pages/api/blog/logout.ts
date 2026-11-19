export const prerender = false;

import type { APIRoute } from 'astro';
import { sessionCookie } from '../../../lib/blog-auth/session';

export const POST: APIRoute = ({ cookies, redirect }) => {
    cookies.delete(sessionCookie.name, { path: '/' });
    return redirect('/blog', 303);
};
