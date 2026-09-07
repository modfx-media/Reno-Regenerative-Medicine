import { SITE_ORIGIN, THIS_SITE_RANKED_PROJECT_ID } from './config'

export type RankedSiteTarget = {
  projectId: string
  name: string
  origin: string
}

export const RANKED_SITES: RankedSiteTarget[] = [
  {
    projectId:
      process.env.RANKED_PROJECT_ID === THIS_SITE_RANKED_PROJECT_ID
        ? THIS_SITE_RANKED_PROJECT_ID
        : '',
    name: 'Reno Regenerative Medicine',
    origin: SITE_ORIGIN,
  },
].filter((s) => s.projectId)

function sitesFromEnv(): RankedSiteTarget[] {
  const raw = process.env.RANKED_SITE_MAP
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as RankedSiteTarget[]
    if (!Array.isArray(parsed)) return []
    return parsed.filter((row) => row?.projectId && row?.origin)
  } catch {
    console.error('[ranked] RANKED_SITE_MAP is not valid JSON')
    return []
  }
}

/** Only this domain + this RANKED_PROJECT_ID. Other client calendars are dropped. */
export function getRankedSiteTargets(): RankedSiteTarget[] {
  const configured = process.env.RANKED_PROJECT_ID || ''
  const merged = new Map<string, RankedSiteTarget>()
  for (const site of [...RANKED_SITES, ...sitesFromEnv()]) {
    merged.set(site.projectId, site)
  }
  return [...merged.values()].filter(
    (site) =>
      site.projectId === THIS_SITE_RANKED_PROJECT_ID &&
      site.projectId === configured &&
      isLocalOrigin(site.origin),
  )
}

export function isLocalOrigin(origin: string): boolean {
  try {
    return new URL(origin).host.replace(/^www\./, '') === new URL(SITE_ORIGIN).host.replace(/^www\./, '')
  } catch {
    return origin.replace(/\/$/, '') === SITE_ORIGIN
  }
}
