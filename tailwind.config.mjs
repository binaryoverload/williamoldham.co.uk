import plugin from "tailwindcss/plugin"
import { gridAreas } from "tailwindcss-grid-areas";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}",
    "astro.config.mjs",
  ],
  theme: {
    fontFamily: {
      mono: ['"Fira Code VF"', 'monospace'],
      sans: ['"iA Writer Quattro"', 'sans-serif']
    },
    extend: {
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
        DEFAULT: {
          css: {
            "ul ul": {
              marginTop: "0",
              marginBottom: "0",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            a: {
              fontWeight: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant }) {
      addVariant(
        "prose-inline-code",
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      )
    }),
    gridAreas()
  ],
}
