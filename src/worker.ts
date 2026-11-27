import server from '@astrojs/cloudflare/entrypoints/server';

export default {
    async fetch(...args: Parameters<typeof server.fetch>) {
        const response = await server.fetch(...args);
        const secured = new Response(response.body, response);
        secured.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; object-src 'none'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'");
        secured.headers.set('X-Frame-Options', 'DENY');
        secured.headers.set('X-Content-Type-Options', 'nosniff');
        secured.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
        secured.headers.set('Permissions-Policy', 'camera=(), geolocation=(), microphone=()');
        secured.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
        return secured;
    },
};
