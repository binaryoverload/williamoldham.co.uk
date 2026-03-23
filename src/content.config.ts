import { defineCollection } from "astro:content"
import { z } from 'astro/zod'
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["blog", "resource"]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    state: z.enum(["draft", "published"]).default("published"),
  }),
})

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

const snippets = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/snippets" }),
  schema: z.object({
    title: z.string(),
    languages: z.array(z.string()),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
})

export const collections = { blog, notes, snippets }
