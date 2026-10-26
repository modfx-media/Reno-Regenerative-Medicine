import fs from "fs";
import path from "path";

import { POSTS } from "../app/(site)/lib/posts";

type ManifestUrl = {
  loc: string;
  path: string;
  apex: string;
  canonical?: string;
};

type ExportRecord = {
  collection: string;
  slug?: string;
  path?: string;
  sourceUrl?: string;
  canonicalUrl?: string;
};

const manifestPath = path.join(process.cwd(), "migration-data/url-manifest.json");
const exportPath = path.join(process.cwd(), "data/content-export.json");

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as { urls: ManifestUrl[] };
const exported = JSON.parse(fs.readFileSync(exportPath, "utf8")) as {
  version: number;
  records: ExportRecord[];
};

if (exported.version !== 1 || !Array.isArray(exported.records)) {
  console.error("content export must be { version: 1, records }");
  process.exit(1);
}

const postPaths = new Set(POSTS.map((post) => `/${post.slug}/`));

function isManifestBlogUrl(url: ManifestUrl): boolean {
  return (
    url.path === "/blog/" ||
    url.path.startsWith("/blog/") ||
    url.path.startsWith("/category/blog") ||
    url.path.startsWith("/category/regenerative-medicine") ||
    postPaths.has(url.path)
  );
}

function covers(url: ManifestUrl): boolean {
  return exported.records.some(
    (record) =>
      record.path === url.path ||
      record.sourceUrl === url.loc ||
      record.sourceUrl === url.apex ||
      record.canonicalUrl === url.loc ||
      record.canonicalUrl === url.canonical,
  );
}

const blogUrls = manifest.urls.filter(isManifestBlogUrl);
const missingManifest = blogUrls.filter((url) => !covers(url));
const missingPosts = POSTS.filter(
  (post) => !exported.records.some((record) => record.collection === "posts" && record.slug === post.slug),
);

if (missingManifest.length > 0 || missingPosts.length > 0) {
  console.error(
    JSON.stringify(
      {
        missingManifest: missingManifest.map((url) => url.path),
        missingPosts: missingPosts.map((post) => post.slug),
      },
      null,
      2,
    ),
  );
  process.exit(1);
}

console.log(
  `export covers ${blogUrls.length} manifest blog urls and ${POSTS.length} hardcoded posts (${exported.records.length} records)`,
);
