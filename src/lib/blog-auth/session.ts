const COOKIE_NAME = 'ahawker_blog_session';
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function toBase64Url(bytes: ArrayBuffer | Uint8Array): string {
    const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    let binary = '';
    for (const b of u8) binary += String.fromCharCode(b);
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(value: string): Uint8Array<ArrayBuffer> {
    const padded = value.replace(/-/g, '+').replace(/_/g, '/');
    const pad = padded.length % 4 === 0 ? '' : '='.repeat(4 - (padded.length % 4));
    const binary = atob(padded + pad);
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
    return out;
}

function importHmacKey(secret: string): Promise<CryptoKey> {
    return crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [
        'sign',
        'verify',
    ]);
}

async function sign(secret: string, payload: string): Promise<string> {
    const key = await importHmacKey(secret);
    return toBase64Url(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload)));
}

async function verify(secret: string, payload: string, signature: string): Promise<boolean> {
    const key = await importHmacKey(secret);
    return crypto.subtle.verify('HMAC', key, fromBase64Url(signature), new TextEncoder().encode(payload));
}

/** Constant-time compare of two strings via their SHA-256 digests. */
export async function passwordsMatch(a: string, b: string): Promise<boolean> {
    const enc = new TextEncoder();
    const [ha, hb] = await Promise.all([crypto.subtle.digest('SHA-256', enc.encode(a)), crypto.subtle.digest('SHA-256', enc.encode(b))]);
    const x = new Uint8Array(ha);
    const y = new Uint8Array(hb);
    let diff = 0;
    for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
    return diff === 0;
}

export async function createSessionToken(secret: string): Promise<string> {
    const exp = Math.floor(Date.now() / 1000) + MAX_AGE_SECONDS;
    const payload = toBase64Url(new TextEncoder().encode(JSON.stringify({ exp })));
    return `${payload}.${await sign(secret, payload)}`;
}

export async function isValidSessionToken(secret: string, token: string | undefined): Promise<boolean> {
    const [payload, signature, ...rest] = token?.split('.') ?? [];
    if (!payload || !signature || rest.length) return false;
    try {
        if (!(await verify(secret, payload, signature))) return false;
        const data = JSON.parse(new TextDecoder().decode(fromBase64Url(payload))) as { exp?: number };
        return typeof data.exp === 'number' && data.exp > Math.floor(Date.now() / 1000);
    } catch {
        return false;
    }
}

export const sessionCookie = {
    name: COOKIE_NAME,
    options: (secure: boolean) => ({ path: '/', httpOnly: true, sameSite: 'lax' as const, secure, maxAge: MAX_AGE_SECONDS }),
};
