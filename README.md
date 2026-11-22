# ahawker.dev

My personal site. Built with Astro, Tailwind and daisyUI, and deployed to Cloudflare Workers.

## Running it locally

```sh
npm install
cp .dev.vars.example .dev.vars   # then fill in real values
npm run dev                      # http://localhost:4321
```

Other scripts:

- `npm run build`: build to `dist/`
- `npm run preview`: build and serve the production output
- `npm run typecheck`: `astro check`
- `npm run deploy`: build and `wrangler deploy`

## Content

Everything is markdown in `src/content/`. The schemas are in `src/content.config.ts`.

- `projects/`: project pages. Set `featured: true` to show one on the home page.
- `experience/`: jobs and orgs.
- `blog/`: posts. Set `draft: true` to hide a post and `private: true` to put it behind the blog password.

## Private blog posts

Private posts need two secrets:

- `BLOG_PASSWORD`: the password readers enter
- `SESSION_SECRET`: a long random string used to sign the session cookie

Put them in `.dev.vars` for local dev. In production, set them with `wrangler secret put <NAME>`. Login attempts are limited to 5 per minute per IP (see `wrangler.jsonc`).
