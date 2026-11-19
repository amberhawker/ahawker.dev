import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const projects = defineCollection({
    loader: glob({
        pattern: '**/*.json',
        base: './src/data/projects'
    }),

    schema: z.object({
        title: z.string(),
        year: z.number(),
        role: z.string().optional(),
        imgs: z.array(
            z.object({
                path: z.string(),
                alt: z.string(),
            })
        ).default([]),
        shortDescription: z.string(),
        longDescription: z.string(),
        highlights: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        repo: z.url().optional(),
        live: z.url().optional(),
        featured: z.boolean(),
        order: z.number().default(100),
    })
})

export const collections = { projects };
