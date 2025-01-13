import type { CollectionEntry } from "astro:content"
import { SHOW_DRAFTS, SHOW_FUTURE } from "astro:env/server"

export function filterBlogPost(type?: CollectionEntry<"blog">["data"]["type"]) {
  return (blogPost: CollectionEntry<"blog">) => {
    if (!SHOW_DRAFTS && blogPost.data.state === "draft") {
      return false
    }

    if (!SHOW_FUTURE && new Date(blogPost.data.pubDate) > new Date()) {
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
