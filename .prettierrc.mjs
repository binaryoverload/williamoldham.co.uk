/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
  proseWrap: "always",
}
