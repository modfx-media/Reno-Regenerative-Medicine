import { THIS_SITE_RANKED_PROJECT_ID } from './config'
import {
  RANKED_CACHE_TAG,
  type RankedContentDetail,
  type RankedContentListItem,
  type RankedDetailResponse,
  type RankedListResponse,
  type RankedProject,
  type RankedProjectsResponse,
} from './types'

const RANKED_BASE = 'https://app.ranked.ai/api/v1'

function rankedConfig() {
  return {
    apiKey: process.env.RANKED_API_KEY,
    projectId: process.env.RANKED_PROJECT_ID,
  }
}

export function isRankedConfigured(): boolean {
  const { apiKey, projectId } = rankedConfig()
  return Boolean(apiKey && projectId === THIS_SITE_RANKED_PROJECT_ID)
}

export function hasRankedApiKey(): boolean {
  return Boolean(rankedConfig().apiKey)
}

/** Only the Reno Regenerative Ranked project. Other client calendars are never fetched. */
function thisProjectId(projectId?: string): string | undefined {
  const configured = rankedConfig().projectId
  if (configured && configured !== THIS_SITE_RANKED_PROJECT_ID) {
    console.error('[ranked] RANKED_PROJECT_ID is not the Reno Regenerative project; refusing import')
    return undefined
  }
  if (projectId && projectId !== THIS_SITE_RANKED_PROJECT_ID) {
    console.error(`[ranked] blocked other project id ${projectId}`)
    return undefined
  }
  return configured === THIS_SITE_RANKED_PROJECT_ID ? configured : undefined
}

async function rankedGet<T>(path: string): Promise<T> {
  const { apiKey } = rankedConfig()
  if (!apiKey) throw new Error('RANKED_API_KEY is not set')

  const res = await fetch(`${RANKED_BASE}${path}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    next: { revalidate: 300, tags: [RANKED_CACHE_TAG] },
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Ranked API ${res.status} ${path}: ${text.slice(0, 200)}`)
  }

  return res.json() as Promise<T>
}

export async function listRankedProjects(): Promise<RankedProject[]> {
  if (!hasRankedApiKey()) return []

  const items: RankedProject[] = []
  for (let offset = 0; offset < 500; offset += 50) {
    const json = await rankedGet<RankedProjectsResponse>(`/projects?limit=50&offset=${offset}`)
    const page = Array.isArray(json.data) ? json.data : []
    items.push(...page)
    if (page.length < 50) break
  }
  return items
}

export async function listRankedContent(projectId?: string, limit = 50): Promise<RankedContentListItem[]> {
  const id = thisProjectId(projectId)
  if (!id) return []

  const items: RankedContentListItem[] = []
  const pageSize = Math.min(limit, 50)
  for (let offset = 0; offset < 1000; offset += pageSize) {
    const json = await rankedGet<RankedListResponse>(
      `/projects/${id}/content?limit=${pageSize}&offset=${offset}`,
    )
    const page = Array.isArray(json.data) ? json.data : []
    items.push(...page)
    if (page.length < pageSize) break
  }
  return items
}

export async function getRankedContentDetail(
  contentId: string,
  projectId?: string,
): Promise<RankedContentDetail | null> {
  const id = thisProjectId(projectId)
  if (!id) return null

  const json = await rankedGet<RankedDetailResponse>(`/projects/${id}/content/${contentId}`)
  return json.data ?? null
}
