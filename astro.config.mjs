import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import emoji from "remark-emoji"

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx({
      remarkPlugins: [[emoji, { accessible: true }]],
      rehypePlugins: [],
    }),
    sitemap(),
    tailwind(),
  ],
})
