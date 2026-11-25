import { cache } from "react";

import { getVisiblePosts, type Post } from "@/app/(site)/lib/posts";

import {
  blogDetailMetadata,
  isFuturePublishDate,
  mergeBlogPosts,
  postFromCms,
  slugFromLookup,
  type BlogPostRecord,
} from "./blog-match";
import { draftModeEnabled } from "./live-doc";
import { findPostForSlug, listBlogPosts } from "./queries";
import { withCMS } from "./safe";

function visiblePayloadPosts(docs: readonly BlogPostRecord[], draft: boolean): Post[] {
  const posts: Post[] = [];
  for (const doc of docs) {
    if (!draft && isFuturePublishDate(doc.publishedOn)) continue;
    const post = postFromCms(doc);
    if (post) posts.push(post);
  }
  return posts;
}

export const loadMergedBlogPosts = cache(async (): Promise<Post[]> => {
  const draft = await draftModeEnabled();
  const docs = await withCMS((payload) => listBlogPosts(payload, { draft }), [] as BlogPostRecord[]);
  return mergeBlogPosts(getVisiblePosts(), visiblePayloadPosts(docs, draft));
});

export type LoadedBlogPost = { post: Post; doc: BlogPostRecord };

export const loadBlogPost = cache(async (rawSlug: string): Promise<LoadedBlogPost | "hardcoded" | null> => {
  const draft = await draftModeEnabled();
  const doc = await withCMS((payload) => findPostForSlug(payload, rawSlug, { draft }), null);
  if (doc && (draft || !isFuturePublishDate(doc.publishedOn))) {
    const post = postFromCms(doc);
    if (post) return { post, doc };
  }

  const slug = slugFromLookup(rawSlug);
  if (!slug) return null;
  if (getVisiblePosts().some((post) => post.slug === slug)) return "hardcoded";
  return null;
});

export async function metadataForBlogPost(rawSlug: string) {
  const loaded = await loadBlogPost(rawSlug);
  if (!loaded || loaded === "hardcoded") return null;
  return blogDetailMetadata(loaded.post, loaded.doc);
}
