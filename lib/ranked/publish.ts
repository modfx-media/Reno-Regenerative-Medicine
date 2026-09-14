import { listRankedContent } from './client'
import { RANKED_AUTO_PUBLISH_ENABLED, THIS_SITE_RANKED_PROJECT_ID } from './config'
import { getRankedCoverImage } from './cover'
import { isBlogContentType, isRankedPostLive, slugFromTitle } from './html-to-post'
import { isThisSiteArticle, shouldRefuseForeignCalendar } from './this-site'

export async function generateLiveRankedCovers(projectId: string): Promise<string[]> {
  if (!RANKED_AUTO_PUBLISH_ENABLED) return []
  if (projectId !== THIS_SITE_RANKED_PROJECT_ID) {
    console.error(`[ranked] refusing covers for other project ${projectId}`)
    return []
  }

  const items = await listRankedContent(projectId)
  const liveBlogs = items.filter(
    (item) => isBlogContentType(item.content_type) && isRankedPostLive(item.status, item.scheduled_date),
  )
  if (shouldRefuseForeignCalendar(liveBlogs)) {
    console.error('[ranked] calendar belongs to another market; refusing covers')
    return []
  }
  const slugs: string[] = []
  const reservedUrls = new Set<string>()

  for (const item of liveBlogs) {
    if (!isThisSiteArticle(item.title, item.description, item.source_url || item.document_url)) {
      continue
    }
    const slug = slugFromTitle(item.title)
    await getRankedCoverImage({
      contentId: item.id,
      title: item.title,
      slug,
      generate: true,
      reservedUrls,
    })
    slugs.push(slug)
  }

  return slugs
}
