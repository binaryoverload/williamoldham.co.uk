/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "astro.config.mjs",
  ],
  theme: {
    fontFamily: {},
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
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
