import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import emoji from "remark-emoji"
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeExternalLinks from 'rehype-external-links'

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  site: "https://williamoldham.co.uk",
  markdown: {
    remarkPlugins: [
      [
        emoji,
        {
          accessible: true,
        },
      ],
      remarkMath,
      [
        remarkToc,
        {
          tight: true,
          maxDepth: 2,
        },
      ],
    ],
    rehypePlugins: [
      rehypeMathjax,
      rehypeSlug,
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          content: {
            type: "element",
            tagName: "span",
            properties: {
              className: [
                "absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity",
              ],
            },
            children: [
              {
                type: "text",
                value: "#",
              },
            ],
          },
          properties: {
            className: ["relative group no-underline"],
          },
        },
      ],
    ],
    gfm: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-default",
    },
  },
  integrations: [mdx(), sitemap(), tailwind(), robotsTxt()],
})
