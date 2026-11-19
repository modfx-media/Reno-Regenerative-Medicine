import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isHiddenBlogPath } from "@/app/(site)/lib/posts";

import { cmsOnlyDocIsRenderable, loadCmsDoc } from "./live-doc";
import { withCmsMetadata } from "./metadata";
import { CmsDocumentView } from "./render";

function isBlockedPath(pathname: string): boolean {
  return pathname.includes("__hidden") || isHiddenBlogPath(pathname);
}

export async function cmsOnlyMetadata(pathname: string): Promise<Metadata> {
  if (isBlockedPath(pathname)) return {};
  const doc = await loadCmsDoc(pathname);
  if (!cmsOnlyDocIsRenderable(doc)) return {};
  return withCmsMetadata(pathname, {});
}

/** Generic article for a path that has no designed page, and only with real body text. */
export async function CmsOnlyPage({ pathname }: { pathname: string }) {
  if (isBlockedPath(pathname)) notFound();
  const doc = await loadCmsDoc(pathname);
  if (!cmsOnlyDocIsRenderable(doc)) notFound();
  return <CmsDocumentView doc={doc} />;
}
