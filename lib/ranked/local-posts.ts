import { POSTS } from '@/app/lib/posts'
import { DEFAULT_CTA } from './config'
import type { BlogPostData } from './types'

const MONTHS: Record<string, string> = {
  january: '01',
  february: '02',
  march: '03',
  april: '04',
  may: '05',
  june: '06',
  july: '07',
  august: '08',
  september: '09',
  october: '10',
  november: '11',
  december: '12',
}

function localDateToIso(date: string): string {
  const match = date.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/)
  if (match) {
    const month = MONTHS[match[1].toLowerCase()]
    if (month) return `${match[3]}-${month}-${match[2].padStart(2, '0')}`
  }
  const parsed = Date.parse(`${date} UTC`)
  if (Number.isNaN(parsed)) return '1970-01-01'
  return new Date(parsed).toISOString().slice(0, 10)
}

/** Existing compiled posts win on slug collision so a Ranked import cannot overwrite them. */
export function getLocalBlogPosts(): BlogPostData[] {
  return POSTS.map((post) => ({
    slug: post.slug,
    title: post.title,
    metaDescription: post.excerpt.slice(0, 155),
    h1: post.title,
    publishDate: localDateToIso(post.date),
    intro: post.excerpt,
    coverImage: post.image,
    coverAlt: post.title,
    sections: [{ heading: post.title, body: [post.excerpt] }],
    cta: DEFAULT_CTA,
  }))
}

export function isLocalBlogSlug(slug: string): boolean {
  return POSTS.some((post) => post.slug === slug)
}

export function localBlogHref(slug: string): string {
  return `/${slug}/`
}

export function rankedBlogHref(slug: string): string {
  return `/blog/${slug}/`
}
