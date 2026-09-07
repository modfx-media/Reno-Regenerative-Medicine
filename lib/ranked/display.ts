import { getPost, type Post } from '@/app/lib/posts'
import { isLocalBlogSlug, localBlogHref, rankedBlogHref } from './local-posts'
import type { BlogPostData } from './types'

export function formatPublishDate(iso: string): string {
  const [year, month, day] = iso.slice(0, 10).split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function blogPostHref(slug: string): string {
  return isLocalBlogSlug(slug) ? localBlogHref(slug) : rankedBlogHref(slug)
}

export function toIndexPost(post: BlogPostData): Post {
  const local = getPost(post.slug)
  return {
    slug: post.slug,
    title: post.title,
    date: formatPublishDate(post.publishDate),
    image: post.coverImage,
    excerpt: post.intro || post.metaDescription,
    category: local?.category || 'general',
    href: blogPostHref(post.slug),
  }
}

export function relatedIndexPosts(post: BlogPostData): Post[] {
  const related: Post[] = []
  for (const item of post.relatedPosts ?? []) {
    const local = getPost(item.slug)
    if (!local) continue
    related.push({ ...local, href: localBlogHref(local.slug) })
  }
  return related
}
