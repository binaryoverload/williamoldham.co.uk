import type { CollectionEntry } from "astro:content"
import { PUBLIC_SHOW_DRAFT, PUBLIC_SHOW_FUTURE } from "astro:env/server"

export function filterBlogPost(type?: CollectionEntry<"blog">["data"]["type"]) {
  return (blogPost: CollectionEntry<"blog">) => {
    if (!PUBLIC_SHOW_DRAFT && blogPost.data.state === "draft") {
      return false
    }

    if (!PUBLIC_SHOW_FUTURE && new Date(blogPost.data.pubDate) > new Date()) {
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
