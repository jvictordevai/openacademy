import { defineCollection, z } from 'astro:content';

const modules = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    order: z.number(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    track: z.array(z.enum(['fundacao', 'claude', 'prompt', 'lovable', 'seguranca', 'casos'])),
    color: z.string(),
  }),
});

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    module: z.string(),
    order: z.number(),
    description: z.string(),
    minutes: z.number().default(5),
    difficulty: z.enum(['iniciante', 'intermediario', 'avancado']).default('iniciante'),
    sources: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).default([]),
    tags: z.array(z.string()).default([]),
    task: z.object({
      prompt: z.string(),
      criteria: z.string(),
      minutes: z.number().default(5),
    }).optional(),
  }),
});

export const collections = { modules, lessons };
