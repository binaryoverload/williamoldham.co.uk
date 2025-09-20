import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.enum(["blog", "resource"]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    state: z.enum(["draft", "published"]).default("published"),
  }),
})

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = { blog, notes }
