import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { CLIENT_BLOGS_HIDDEN, isHiddenBlogPath } from "../../app/(site)/lib/posts";
import {
  blogDetailMetadata,
  conventionCanonical,
  isFuturePublishDate,
  mergeBlogPosts,
  pathLookupValues,
  postFromCms,
  preferredByPath,
  preferredPost,
  publicPostSitemapPath,
  slugFromLookup,
  type BlogPostRecord,
} from "./blog-match";

const NOW = Date.parse("2026-11-25T18:00:00.000Z");

test("blog visibility flag restores public routes", () => {
  assert.equal(CLIENT_BLOGS_HIDDEN, false);
  assert.equal(isHiddenBlogPath("/blog/"), false);
  assert.equal(isHiddenBlogPath("/blog"), false);
  assert.equal(isHiddenBlogPath("/category/blog/"), false);
  assert.equal(isHiddenBlogPath("/category/regenerative-medicine/"), false);
  assert.equal(isHiddenBlogPath("/sciatica-vs-disc-vs-facet-pain-reno-relief-options/"), false);
});

test("slug and path lookup tolerate a trailing slash", () => {
  assert.equal(slugFromLookup("sciatica/"), "sciatica");
  assert.equal(slugFromLookup("/blog/sciatica/"), "sciatica");
  assert.equal(slugFromLookup("blog/sciatica"), "sciatica");
  assert.deepEqual(pathLookupValues("/blog/sciatica"), ["/blog/sciatica/", "/blog/sciatica"]);
  assert.deepEqual(pathLookupValues("/blog/sciatica/"), ["/blog/sciatica/", "/blog/sciatica"]);
  assert.equal(
    preferredByPath([{ path: "/blog/sciatica" }, { path: "/blog/sciatica/" }], "/blog/sciatica")?.path,
    "/blog/sciatica/",
  );
  assert.equal(preferredPost([{ slug: "sciatica/" }, { slug: "other" }], "/blog/sciatica/")?.slug, "sciatica/");
});

test("future publish dates stay hidden and past dates stay visible", () => {
  assert.equal(isFuturePublishDate("2026-11-26T00:00:00.000Z", NOW), true);
  assert.equal(isFuturePublishDate("2026-11-25T18:00:00.000Z", NOW), false);
  assert.equal(isFuturePublishDate("2026-10-12T00:00:00.000Z", NOW), false);
  assert.equal(isFuturePublishDate(null, NOW), false);
});

test("payload posts replace the same hard-coded slug", () => {
  const merged = mergeBlogPosts(
    [
      {
        slug: "kept-local",
        title: "Local only",
        date: "October 1, 2026",
        image: "/local.jpg",
        excerpt: "local",
        category: "general",
      },
      {
        slug: "shared",
        title: "Hard coded",
        date: "October 2, 2026",
        image: "/hard.jpg",
        excerpt: "hard",
        category: "general",
      },
    ],
    [
      {
        slug: "shared/",
        title: "From Payload",
        date: "November 1, 2026",
        image: "/cms.jpg",
        excerpt: "cms",
        category: "general",
        href: "/blog/shared/",
      },
    ],
  );
  assert.deepEqual(
    merged.map((post) => [post.slug, post.title, post.href]),
    [
      ["shared", "From Payload", "/blog/shared/"],
      ["kept-local", "Local only", "/kept-local/"],
    ],
  );
});

test("sitemap keeps published indexable posts and drops future or noindex ones", () => {
  assert.equal(
    publicPostSitemapPath({ slug: "new-post", path: "/blog/new-post", publishedOn: "2026-11-01T00:00:00.000Z" }, NOW),
    "/blog/new-post/",
  );
  assert.equal(
    publicPostSitemapPath({ slug: "later", publishedOn: "2026-12-01T00:00:00.000Z" }, NOW),
    null,
  );
  assert.equal(
    publicPostSitemapPath({ slug: "quiet", path: "/blog/quiet/", meta: { noIndex: true } }, NOW),
    null,
  );
  assert.equal(
    publicPostSitemapPath({ slug: "hidden", meta: { excludeFromSitemap: true } }, NOW),
    null,
  );
});

test("detail metadata uses SEO fields and the live trailing-slash canonical", () => {
  const doc: BlogPostRecord = {
    title: "Document title",
    slug: "published-knee-care",
    excerpt: "Fallback description",
    publishedOn: "2026-11-24T00:00:00.000Z",
    meta: {
      title: "Fixture SEO Title",
      description: "Fixture SEO description for knee care.",
      canonicalUrl: "https://reno-regenerative-medicine.vercel.app/blog/published-knee-care",
    },
  };
  const post = postFromCms(doc);
  assert.ok(post);
  const metadata = blogDetailMetadata(post, doc);
  assert.equal(metadata.title, "Fixture SEO Title");
  assert.equal(metadata.description, "Fixture SEO description for knee care.");
  assert.equal(metadata.alternates?.canonical, "https://www.renoregen.com/blog/published-knee-care/");
  assert.equal(conventionCanonical(undefined, "/blog/published-knee-care"), "https://www.renoregen.com/blog/published-knee-care/");
});

test("production migrations are limited to VERCEL_ENV=production", () => {
  const source = readFileSync(new URL("../../payload.config.ts", import.meta.url), "utf8");
  assert.match(source, /prodMigrations:\s*process\.env\.VERCEL_ENV === "production" \? migrations : undefined/);
});
