import { SITE_ORIGIN } from './config'

const THIS_SITE_RE = /\breno\b|\bsparks\b|\bnevada\b|\bnv\b|\brenoregen\b/i

const FOREIGN_MARKET_RE =
  /orange county|\birvine\b|newport beach|\bhouston\b|\baustin\b|\bdallas\b|los angeles|san diego|\bphoenix\b|scottsdale|\bmiami\b|\bchicago\b|living light|justin healthcare|cool pools/i

function originHost(value: string): string | null {
  try {
    const url = value.includes('://') ? new URL(value) : new URL(`https://${value}`)
    return url.host.replace(/^www\./, '').toLowerCase()
  } catch {
    return null
  }
}

const THIS_HOST = originHost(SITE_ORIGIN)

export function isThisSiteUrl(url: string | null | undefined): boolean {
  if (!url || !THIS_HOST) return true
  const host = originHost(url)
  if (!host) return true
  if (host === THIS_HOST) return true
  if (host.endsWith('ranked.ai') || host.endsWith('google.com') || host.endsWith('docs.google.com')) return true
  if (host.endsWith('unsplash.com') || host.endsWith('picsum.photos')) return true
  return false
}

/** Drop calendar items written for another client's city / brand. */
export function isThisSiteArticle(
  title: string,
  description: string | null | undefined,
  sourceUrl?: string | null,
): boolean {
  if (sourceUrl && !isThisSiteUrl(sourceUrl) && !/docs\.google\.com|ranked\.ai/i.test(sourceUrl)) {
    return false
  }
  const text = `${title}\n${description ?? ''}`
  if (FOREIGN_MARKET_RE.test(text) && !THIS_SITE_RE.test(text)) return false
  return true
}

export function shouldRefuseForeignCalendar<T extends { title: string; description?: string | null }>(
  items: T[],
): boolean {
  if (items.length === 0) return false
  const foreign = items.filter((item) => !isThisSiteArticle(item.title, item.description ?? null))
  return foreign.length / items.length >= 0.5
}
