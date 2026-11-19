import type { ReactNode } from "react";

/**
 * Designed routes always render their own page.
 *
 * The previous overlay (`lib/cms/route.tsx`, the published-doc branch)
 * replaced `children` with the generic CMS article as soon as
 * `findDocumentForPath` returned a published document. Draft preview did
 * the same. Publishing a doc that only edited SEO therefore dropped the
 * designed sections. A published or previewed document may only contribute
 * data through `withCmsMetadata` and the schema overlay.
 */
export function CMSRoute({ children }: { children: ReactNode }) {
  return children;
}
