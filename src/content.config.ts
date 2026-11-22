import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        year: z.number(),
        role: z.string().optional(),
        imgs: z
            .array(
                z.object({
                    path: z.string(),
                    alt: z.string(),
                }),
            )
            .default([]),
        shortDescription: z.string(),
        highlights: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        repo: z.url().optional(),
        live: z.url().optional(),
        featured: z.boolean(),
        order: z.number().default(100),
    }),
});

const experience = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
    schema: z.object({
        title: z.string(),
        org: z.string(),
        summary: z.string(),
        stack: z.array(z.string()).default([]),
        related: z.array(z.string()).default([]),
        link: z.url().optional(),
        order: z.number().default(100),
    }),
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        private: z.boolean().default(false),
    }),
});

export const collections = { projects, experience, blog };
