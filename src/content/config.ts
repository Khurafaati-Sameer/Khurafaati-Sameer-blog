import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(320),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Khurafaati Sameer'),
    category: z.string().min(1),
    tags: z.array(z.string()).default([]),
    featuredImage: z.string().url().optional(),
    imageAlt: z.string().optional(),
    readingTime: z.number().int().positive().optional(),
    draft: z.boolean().default(false),
    seoTitle: z.string().max(70).optional(),
    seoDescription: z.string().max(160).optional(),
  }),
});

export const collections = { articles };
