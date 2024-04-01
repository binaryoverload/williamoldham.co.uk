import type { CollectionEntry } from "astro:content"

const showFuture = import.meta.env.PUBLIC_SHOW_FUTURE === "true"
const showDrafts = import.meta.env.PUBLIC_SHOW_DRAFTS === "true"

export function filterBlogPost(blogPost: CollectionEntry<"blog">) {
  if (!showDrafts && blogPost.data.state === "draft") {
    return false
  }

  if (!showFuture && new Date(blogPost.data.pubDate) > new Date()) {
    return false
  }

  return true
}
