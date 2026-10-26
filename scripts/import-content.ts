import fs from "fs";
import path from "path";

import { config as loadEnv } from "dotenv";
import { getPayload, type Payload } from "payload";

import configPromise from "../payload.config";

// npm sometimes forwards a standalone "--" separator.
process.argv = process.argv.filter((arg) => arg !== "--");

loadEnv({ path: path.resolve(process.cwd(), ".env.local") });
loadEnv();

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
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
      }[];
      direction: "ltr" | "rtl" | null;
      format: "" | "left" | "start" | "center" | "right" | "end" | "justify";
      indent: number;
      version: number;
    };
  };
};

type ExportFile = {
  version: number;
  records: ExportRecord[];
  globals: {
    header: Record<string, unknown>;
    footer: Record<string, unknown>;
    "site-settings": Record<string, unknown>;
  };
};

type Report = {
  ranAt: string;
  created: number;
  updated: number;
  errors: { legacyId?: string; message: string }[];
  drafts: number;
  published: number;
};

function isTransient(error: unknown): boolean {
  const message = error instanceof Error ? `${error.name} ${error.message}` : String(error);
  const code =
    typeof error === "object" && error && "code" in error ? String((error as { code?: unknown }).code) : "";
  return /ECONNRESET|ETIMEDOUT|EAI_AGAIN|ECONNREFUSED|57P01|40001|53300|08006|08001|timeout|Connection terminated|connection error|too many clients/i.test(
    `${code} ${message}`,
  );
}

async function withRetry<T>(fn: () => Promise<T>): Promise<T> {
  let last: unknown;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      last = error;
      if (!isTransient(error) || attempt === 3) throw error;
      await new Promise((resolve) => setTimeout(resolve, 250 * 2 ** attempt));
    }
  }
  throw last;
}

function isoDate(input: string | undefined): string | undefined {
  if (!input) return undefined;
  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
}

async function findBy(payload: Payload, collection: "pages" | "posts" | "categories" | "authors", field: string, value: string) {
  const result = await payload.find({
    collection,
    depth: 0,
    draft: true,
    limit: 1,
    overrideAccess: true,
    pagination: false,
    where: { [field]: { equals: value } },
  });
  return result.docs[0] ?? null;
}

async function ensureCategory(payload: Payload, slug: string, cache: Map<string, number | string>) {
  const cached = cache.get(slug);
  if (cached) return cached;
  const existing = await findBy(payload, "categories", "slug", slug);
  if (existing) {
    cache.set(slug, existing.id as number | string);
    return existing.id as number | string;
  }
  const created = await payload.create({
    collection: "categories",
    overrideAccess: true,
    data: {
      title: slug.replaceAll("-", " "),
      slug,
    },
  });
  cache.set(slug, created.id);
  return created.id;
}

async function ensureAuthor(payload: Payload): Promise<number | string> {
  const existing = await findBy(payload, "authors", "slug", "reno-regenerative-medicine");
  if (existing) return existing.id as number | string;
  const created = await payload.create({
    collection: "authors",
    overrideAccess: true,
    data: {
      name: "Reno Regenerative Medicine",
      slug: "reno-regenerative-medicine",
    },
  });
  return created.id;
}

function docData(record: ExportRecord, extras: Record<string, unknown>) {
  return {
    title: record.title,
    slug: record.slug,
    path: record.path,
    legacyId: record.legacyId,
    sourceUrl: record.sourceUrl,
    excerpt: record.excerpt,
    heroImagePath: record.image ?? null,
    content: record.content,
    meta: {
      title: record.seoTitle,
      description: record.description,
      canonicalUrl: record.canonicalUrl,
      noIndex: false,
      noFollow: false,
      excludeFromSitemap: false,
    },
    ...extras,
  };
}

async function main() {
  const exportPath = path.join(process.cwd(), "data/content-export.json");
  const exported = JSON.parse(fs.readFileSync(exportPath, "utf8")) as ExportFile;
  if (exported.version !== 1) throw new Error("unsupported export version");

  const payload = await getPayload({ config: configPromise });
  const report: Report = {
    ranAt: new Date().toISOString(),
    created: 0,
    updated: 0,
    errors: [],
    drafts: 0,
    published: 0,
  };
  const categories = new Map<string, number | string>();
  const authorId = await withRetry(() => ensureAuthor(payload));

  for (const record of exported.records) {
    try {
      await withRetry(async () => {
        const existing =
          (await findBy(payload, record.collection, "legacyId", record.legacyId)) ||
          (record.sourceUrl ? await findBy(payload, record.collection, "sourceUrl", record.sourceUrl) : null);

        const extras: Record<string, unknown> = {};
        if (record.collection === "posts") {
          extras.authors = [authorId];
          extras.publishedOn = isoDate(record.date);
          if (record.category) extras.category = await ensureCategory(payload, record.category, categories);
        }

        const data = docData(record, extras);

        if (existing) {
          await payload.update({
            collection: record.collection,
            id: existing.id,
            draft: true,
            overrideAccess: true,
            data,
          });
          report.updated += 1;
        } else {
          await payload.create({
            collection: record.collection,
            draft: true,
            overrideAccess: true,
            data: {
              ...data,
              _status: "draft",
            },
          });
          report.created += 1;
        }
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      report.errors.push({ legacyId: record.legacyId, message });
      console.error(`import failed ${record.legacyId}: ${message}`);
    }
  }

  await withRetry(() =>
    payload.updateGlobal({ slug: "header", overrideAccess: true, data: exported.globals.header }),
  );
  await withRetry(() =>
    payload.updateGlobal({ slug: "footer", overrideAccess: true, data: exported.globals.footer }),
  );
  await withRetry(() =>
    payload.updateGlobal({
      slug: "site-settings",
      overrideAccess: true,
      data: exported.globals["site-settings"],
    }),
  );

  for (const collection of ["pages", "posts"] as const) {
    const drafts = await payload.count({
      collection,
      overrideAccess: true,
      where: { _status: { equals: "draft" } },
    });
    const published = await payload.count({
      collection,
      overrideAccess: true,
      where: { _status: { equals: "published" } },
    });
    report.drafts += drafts.totalDocs;
    report.published += published.totalDocs;
  }

  const reportDir = path.join(process.cwd(), "migration-data");
  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(path.join(reportDir, "import-report.json"), `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));
  if (report.errors.length > 0 || report.published > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
