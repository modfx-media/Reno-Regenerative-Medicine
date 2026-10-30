import fs from "fs";
import path from "path";

import { CATEGORIES, PAGES, getMeta } from "../app/(site)/lib/pageMeta";
import { POSTS } from "../app/(site)/lib/posts";
import { paragraphDocument } from "./lexical";

const APEX = "https://renoregen.com";
const WWW = "https://www.renoregen.com";

type ExportRecord = {
  collection: "pages" | "posts";
  legacyId: string;
  sourceUrl: string;
  slug: string;
  path: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  description: string;
  canonicalUrl: string;
  date?: string;
  image?: string;
  category?: string;
  content: ReturnType<typeof paragraphDocument>;
};

function pageFile(publicPath: string): string {
  if (publicPath === "/") return path.join(process.cwd(), "app/(site)/page.tsx");
  const rel = publicPath.replace(/^\//, "").replace(/\/$/, "");
  return path.join(process.cwd(), "app/(site)", rel, "page.tsx");
}

function canonicalFrom(source: string, fallback: string): string {
  const match = source.match(/canonical:\s*(?:\r?\n\s*)?["'`](https?:\/\/[^"'`]+)["'`]/);
  return match?.[1] ?? fallback;
}

function slugFromPath(publicPath: string): string {
  if (publicPath === "/") return "home";
  return publicPath.replace(/^\//, "").replace(/\/$/, "").replaceAll("/", "-");
}

const postPaths = new Set(POSTS.map((post) => `/${post.slug}/`));

const records: ExportRecord[] = [];

for (const post of POSTS) {
  const publicPath = `/${post.slug}/`;
  const source = fs.existsSync(pageFile(publicPath)) ? fs.readFileSync(pageFile(publicPath), "utf8") : "";
  const meta = getMeta(publicPath);
  const description = meta?.description || post.excerpt;
  records.push({
    collection: "posts",
    legacyId: `post:${post.slug}`,
    sourceUrl: `${APEX}${publicPath}`,
    slug: post.slug,
    path: publicPath,
    title: post.title,
    excerpt: post.excerpt,
    seoTitle: meta?.title || post.title,
    description,
    canonicalUrl: canonicalFrom(source, `${WWW}${publicPath}`),
    date: post.date,
    image: post.image,
    category: post.category,
    content: paragraphDocument(post.excerpt),
  });
}

for (const page of [...PAGES, ...CATEGORIES]) {
  if (postPaths.has(page.slug)) continue;
  const source = fs.existsSync(pageFile(page.slug)) ? fs.readFileSync(pageFile(page.slug), "utf8") : "";
  records.push({
    collection: "pages",
    legacyId: `page:${page.slug}`,
    sourceUrl: `${APEX}${page.slug}`,
    slug: slugFromPath(page.slug),
    path: page.slug,
    title: page.title,
    excerpt: page.description,
    seoTitle: page.title,
    description: page.description,
    canonicalUrl: canonicalFrom(source, `${WWW}${page.slug}`),
    content: paragraphDocument(page.description),
  });
}

const exportFile = {
  version: 1 as const,
  records,
  globals: {
    header: {
      phone: "(775) 683-9026",
      bookingUrl: "https://www.zocdoc.com/booking-link/practice/reno-regenerative-medicine-189114",
      navItems: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about/" },
        { label: "New Patients", href: "/new-patients/" },
        { label: "Services", href: "/services/" },
        { label: "Conditions", href: "/conditions/" },
        { label: "Seminars", href: "/seminars/" },
        { label: "Patient Reviews", href: "/reviews/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
    footer: {
      blurb:
        "Innovative and integrative medicine in Reno, Nevada — chiropractic, therapeutic exercise, regenerative joint injections and IV nutrition for patients across Northern Nevada and surrounding California communities.",
      phone: "(775) 683-9026",
      address: "730 Sandhill Road #120\nReno, NV 89521",
      facebookUrl: "https://www.facebook.com/renoregenerative",
      youtubeUrl: "https://www.youtube.com/channel/UCAoMwIvwTV-jKzS7MZttmVg",
    },
    "site-settings": {
      siteName: "Reno Regenerative Medicine",
      phone: "(775) 683-9026",
      address: "730 Sandhill Road, Suite 120, Reno, NV 89521",
      siteUrl: WWW,
      defaultMetaDescription:
        "Looking for an integrative medicine center? Reno Regenerative Medicine helps with knee, back, and joint pain, helping your body heal naturally. Call today!",
    },
  },
};

const outDir = path.join(process.cwd(), "data");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "content-export.json");
fs.writeFileSync(outFile, `${JSON.stringify(exportFile, null, 2)}\n`);
const posts = records.filter((record) => record.collection === "posts").length;
const pages = records.filter((record) => record.collection === "pages").length;
console.log(`wrote ${outFile} posts=${posts} pages=${pages} total=${records.length}`);
