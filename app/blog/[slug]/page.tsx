import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import type { ReactNode } from "react";
import BlogPostShell from "@/app/components/BlogPostShell";
import { relatedIndexPosts, toIndexPost } from "@/lib/ranked/display";
import { isLocalBlogSlug, localBlogHref } from "@/lib/ranked/local-posts";
import { getLiveRankedBlogPost, getRankedOnlyBlogSlugs } from "@/lib/ranked/posts";
import type { BlogPostData } from "@/lib/ranked/types";

export const revalidate = 3600;
export const dynamicParams = true;

type RouteParams = { slug: string };

export async function generateStaticParams() {
  const slugs = await getRankedOnlyBlogSlugs().catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (isLocalBlogSlug(slug)) {
    return {};
  }
  const post = await getLiveRankedBlogPost(slug);
  if (!post) return {};
  const canonical = `https://www.renoregen.com/blog/${post.slug}/`;
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: canonical,
      type: "article",
      publishedTime: `${post.publishDate}T12:00:00-04:00`,
      images: [post.coverImage],
    },
  };
}

function renderInline(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return <span key={index}>{part}</span>;
    return (
      <a key={index} href={match[2]} rel="noopener noreferrer">
        {match[1]}
      </a>
    );
  });
}

function RankedArticleBody({ post }: { post: BlogPostData }) {
  return (
    <>
      {post.sections.map((section, index) => (
        <section key={`${section.heading}-${index}`}>
          {section.heading ? <h2>{section.heading}</h2> : null}
          {section.body.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{renderInline(paragraph)}</p>
          ))}
        </section>
      ))}
    </>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  if (isLocalBlogSlug(slug)) {
    redirect(localBlogHref(slug));
  }

  const post = await getLiveRankedBlogPost(slug);
  if (!post) notFound();

  return (
    <BlogPostShell
      post={toIndexPost(post)}
      summary={post.intro}
      relatedPosts={relatedIndexPosts(post)}
    >
      <RankedArticleBody post={post} />
    </BlogPostShell>
  );
}
