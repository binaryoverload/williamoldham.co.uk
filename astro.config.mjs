import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import emoji from "remark-emoji"
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  markdown: {
    remarkPlugins: [[emoji, { accessible: true }], remarkMath],
    rehypePlugins: [rehypeMathjax],
    gfm: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-default",
    },
  },
  integrations: [mdx(), sitemap(), tailwind()],
})
