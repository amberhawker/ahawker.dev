import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const projects = defineCollection({
    loader: glob({
        pattern: '**/*.json',
        base: '/.src/data/projects'
    }),

    // TODO: add slug -> dynamic routes to longer description pages
    schema: z.object({
        title: z.string(),
        imgs: z.array(
            z.object({
                path: z.string(),
                alt: z.string().optional(),
            }).default({path: '', alt: ''})
        ),
        shortDescription: z.string(),
        longDescription: z.string()
    })
})

export const collections = { projects };