import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    dateLabel: z.string(),
    minutes: z.number(),
    excerpt: z.string(),
    image: image(),
    drafted: z.boolean().optional().default(false),
  }),
});
const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    caption: z.string(),
    gaveUp: z.string().optional(),
    label: z.string(),
    image: image(),
    order: z.number(),
    size: z.enum(['lg', 'md', 'sm']),
  }),
});
const jobs = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/jobs' }),
  schema: z.object({
    n: z.number(),
    slug: z.string(),
    title: z.string(),
    line: z.string(),
    intro: z.string(),
    example: z.object({ title: z.string(), body: z.string(), gaveUp: z.string(), label: z.string(), image: z.string() }),
    gets: z.array(z.string()),
    needs: z.string(),
    needsNote: z.string().optional(),
    weDo: z.string(),
    youDecide: z.string(),
    youReceive: z.string(),
    windowImage: z.string(),
    windowLabel: z.string(),
  }),
});
export const collections = { posts, work, jobs };
