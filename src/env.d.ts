/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SHOW_FUTURE: string
  readonly PUBLIC_SHOW_DRAFTS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
