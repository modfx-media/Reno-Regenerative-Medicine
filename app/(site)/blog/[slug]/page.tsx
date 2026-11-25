import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import BlogPostShell from "@/app/(site)/components/BlogPostShell";
import { getRelatedPosts } from "@/app/(site)/lib/posts";
import { loadBlogPost, metadataForBlogPost } from "@/lib/cms/blog-posts";
import { slugFromLookup } from "@/lib/cms/blog-match";
import { CmsOnlyPage } from "@/lib/cms/cms-only";
import { withCmsMetadata } from "@/lib/cms/metadata";
import { localBlogHref } from "@/lib/ranked/local-posts";

export const revalidate = 300;

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const metadata = await metadataForBlogPost(slug);
  if (metadata) return metadata;
  const clean = slugFromLookup(slug);
  return withCmsMetadata(`/blog/${clean}/`, {});
}

function ArticleBody({ content, excerpt }: { content: unknown; excerpt: string }) {
  if (content && typeof content === "object" && "root" in content) {
    return <RichText data={content as SerializedEditorState} disableContainer />;
  }
  if (excerpt) return <p>{excerpt}</p>;
  return null;
}

export default async function BlogPostPage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const loaded = await loadBlogPost(slug);
  if (loaded === "hardcoded") {
    redirect(localBlogHref(slugFromLookup(slug)));
  }
  if (!loaded) {
    const clean = slugFromLookup(slug);
    if (!clean) notFound();
    return <CmsOnlyPage pathname={`/blog/${clean}/`} />;
  }

  return (
    <BlogPostShell
      post={loaded.post}
      summary={loaded.post.excerpt || undefined}
      relatedPosts={getRelatedPosts(loaded.post.slug)}
    >
      <ArticleBody content={loaded.doc.content} excerpt={loaded.post.excerpt} />
    </BlogPostShell>
  );
}
