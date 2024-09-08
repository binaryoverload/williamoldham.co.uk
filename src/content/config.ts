import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    type: z.enum(["blog", "resource"]),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    state: z.enum(["draft", "published"]).default("published"),
  }),
})

export const collections = { blog }
