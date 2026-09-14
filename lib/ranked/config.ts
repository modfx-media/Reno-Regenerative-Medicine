export const SITE_ORIGIN = (process.env.SITE_ORIGIN || 'https://www.renoregen.com').replace(/\/$/, '')

/** Ranked calendar for renoregen.com only. Other client UUIDs are refused. */
export const THIS_SITE_RANKED_PROJECT_ID = 'dd091264-d80b-4c43-b6b6-72f657553b1b'

/** Kill switch: set to false to re-enable automated Ranked blog posting. */
export const RANKED_AUTO_PUBLISH_ENABLED = false

export const DEFAULT_COVER = '/images/blog/default-cover.jpg'
export const DEFAULT_COVER_ALT = 'Reno Regenerative Medicine blog article cover'

export const DEFAULT_CTA = {
  label: 'Contact us',
  href: '/contact/',
}

/** Cover prompt for Reno Regenerative Medicine. No patient faces / medical gore. */
export function coverPrompt(title: string): string {
  return [
    'Editorial photograph, 16:9 landscape, premium integrative medicine clinic photography.',
    'Warm natural light, Reno Nevada wellness studio, calm modern medical interior or Sierra Nevada landscape.',
    `Theme inspired by: ${title.slice(0, 120)}.`,
    'Cinematic lighting, sharp, no grain, no watermark.',
    'No text, no letters, no logos, no captions, no readable signage.',
    'No patient faces, no medical gore, no needles in skin, no graphic procedures.',
  ].join(' ')
}

/**
 * Committed cover URLs by slug. String map only — do not fs.stat public/.
 */
export const COMMITTED_COVERS: Record<string, string> = {
  'living-with-arthritis-in-renos-climate-when-to-seek-treatment':
    '/images/blog/vitaly-gariev-8WYkI3cEZm8-unsplash.jpg',
}

/**
 * Slugs that already have a committed file at /images/blog/covers/{slug}.png
 * List only. Do not fs.stat public/ — that packs images into the cron bundle.
 */
export const COMMITTED_COVER_SLUGS: readonly string[] = Object.keys(COMMITTED_COVERS)
