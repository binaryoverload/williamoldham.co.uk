import type { CollectionEntry } from "astro:content"

const showFuture = import.meta.env.PUBLIC_SHOW_FUTURE === "true"
const showDrafts = import.meta.env.PUBLIC_SHOW_DRAFTS === "true"

export function filterBlogPost(type?: CollectionEntry<"blog">["data"]["type"]) {
  return (blogPost: CollectionEntry<"blog">) => {
    if (!showDrafts && blogPost.data.state === "draft") {
      return false
    }

    if (!showFuture && new Date(blogPost.data.pubDate) > new Date()) {
      return false
    }

    return !type || blogPost.data.type === type
  }
}

export function getEffectiveDate(post: CollectionEntry<"blog">) {
  return post.data.updatedDate || post.data.pubDate
}

export function sortBlogPost(
  a: CollectionEntry<"blog">,
  b: CollectionEntry<"blog">
) {
  return getEffectiveDate(b).valueOf() - getEffectiveDate(a).valueOf()
}
