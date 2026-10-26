import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Authors } from "./collections/Authors";
import { Categories } from "./collections/Categories";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Posts } from "./collections/Posts";
import { Users } from "./collections/Users";
import { Footer } from "./globals/Footer";
import { Header } from "./globals/Header";
import { SiteSettings } from "./globals/SiteSettings";
import { previewFromPath } from "./lib/cms/paths";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const APEX = "https://renoregen.com";
const WWW = "https://www.renoregen.com";

function isLocalDatabaseHost(connectionString: string | undefined): boolean {
  if (!connectionString) return false;
  try {
    const host = new URL(connectionString.replace(/^postgres(ql)?:\/\//, "http://")).hostname;
    return host === "localhost" || host === "127.0.0.1" || host === "::1";
  } catch {
    return /@(localhost|127\.0\.0\.1)[:/]/.test(connectionString);
  }
}

function resolveServerURL(): string {
  const configured = (process.env.NEXT_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_SITE_URL || "").replace(
    /\/$/,
    "",
  );
  const onVercel = Boolean(process.env.VERCEL);
  const local = !configured || /localhost|127\.0\.0\.1/.test(configured);
  if (onVercel && local) {
    const site = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
    if (site && !/localhost|127\.0\.0\.1/.test(site)) return site;
    return APEX;
  }
  return configured || "http://localhost:3000";
}

function allowedOrigins(): string[] {
  const origins = new Set<string>([
    APEX,
    WWW,
    "https://reno-regenerative-medicine.vercel.app",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ]);
  if (process.env.VERCEL_URL) origins.add(`https://${process.env.VERCEL_URL}`);
  for (const value of [process.env.NEXT_PUBLIC_SERVER_URL, process.env.NEXT_PUBLIC_SITE_URL]) {
    if (!value) continue;
    try {
      origins.add(new URL(value).origin);
    } catch {
      // Ignore unset or partial env values.
    }
  }
  return [...origins];
}

const serverURL = resolveServerURL();
const origins = allowedOrigins();
const databaseUrl = process.env.DATABASE_URL || "";

export default buildConfig({
  serverURL,
  cors: origins,
  csrf: origins,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " — Reno Regenerative Medicine",
    },
  },
  collections: [Users, Media, Pages, Posts, Categories, Authors],
  globals: [Header, Footer, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: databaseUrl,
      connectionTimeoutMillis: 3000,
      max: 8,
    },
    // Migrations are the schema source. Never push on Vercel.
    push: false,
    migrationDir: path.resolve(dirname, "migrations"),
    forceUseVercelPostgres: !isLocalDatabaseHost(databaseUrl),
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ["pages", "posts"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => {
        const title = doc && typeof doc === "object" && "title" in doc ? doc.title : undefined;
        return typeof title === "string" ? title : "Reno Regenerative Medicine";
      },
      generateDescription: ({ doc }) => {
        const excerpt = doc && typeof doc === "object" && "excerpt" in doc ? doc.excerpt : undefined;
        return typeof excerpt === "string" ? excerpt : "";
      },
      generateURL: ({ doc }) => {
        const raw = doc && typeof doc === "object" && "path" in doc ? doc.path : undefined;
        const preview = previewFromPath(typeof raw === "string" ? raw : null);
        if (!preview) return "";
        const site = (process.env.NEXT_PUBLIC_SITE_URL || WWW).replace(/\/$/, "");
        return `${site}${preview}`;
      },
      fields: ({ defaultFields }) => [
        ...defaultFields,
        {
          name: "canonicalUrl",
          type: "text",
          label: "Canonical URL",
        },
        {
          name: "noIndex",
          type: "checkbox",
          label: "No index",
          defaultValue: false,
        },
        {
          name: "noFollow",
          type: "checkbox",
          label: "No follow",
          defaultValue: false,
        },
        {
          name: "excludeFromSitemap",
          type: "checkbox",
          label: "Exclude from sitemap",
          defaultValue: false,
        },
      ],
    }),
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      alwaysInsertFields: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
