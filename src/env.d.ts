/// <reference path="../worker-configuration.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
    interface Locals {
        blogAuthed: boolean;
    }
}

declare module 'cloudflare:workers' {
    export const env: Cloudflare.Env;
}
