import { draftMode, headers } from "next/headers";
import type { ReactNode } from "react";

import { isHiddenBlogPath } from "@/app/(site)/lib/posts";

import { findDocumentForPath } from "./queries";
import { withCMS } from "./safe";

/**
 * Published Payload document replaces the designed page.
 * Drafts, a down database, and hidden client blogs leave `children` untouched.
 */
export async function CMSRoute({ children }: { children: ReactNode }) {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") || "/";

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/next")
  ) {
    return children;
  }

  // Client blogs stay hidden even if a doc is accidentally published.
  if (isHiddenBlogPath(pathname)) return children;

  let draft = false;
  try {
    draft = (await draftMode()).isEnabled;
  } catch {
    draft = false;
  }

  const doc = await withCMS((payload) => findDocumentForPath(payload, pathname, { draft }), null);
  if (!doc) return children;
  if (!draft && doc._status !== "published") return children;

  const { CmsDocumentView } = await import("./render");
  return <CmsDocumentView doc={doc} />;
}
