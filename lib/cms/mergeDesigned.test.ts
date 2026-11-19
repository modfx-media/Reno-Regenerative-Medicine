import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { pathToRevalidateOnDelete, pathsToRevalidate } from "../../collections/hooks";
import {
  cmsDocIsPublic,
  cmsSchemaJsonLd,
  docHasRealContent,
  mergeCmsMetadata,
  pickRoutedNode,
  selectRoutedBody,
} from "./mergeDesigned";

const HOME = {
  title: {
    absolute: "Integrative Medicine Clinic in Reno, NV | Reno Regenerative Medicine",
  },
  description:
    "Looking for an integrative medicine center? Reno Regenerative Medicine helps with knee, back, and joint pain, helping your body heal naturally. Call today!",
  alternates: { canonical: "https://www.renoregen.com/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Integrative Medicine Clinic in Reno, NV | Reno Regenerative Medicine",
    description:
      "Looking for an integrative medicine center? Reno Regenerative Medicine helps with knee, back, and joint pain, helping your body heal naturally. Call today!",
    url: "https://www.renoregen.com/",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Integrative Medicine Clinic in Reno, NV | Reno Regenerative Medicine",
    description:
      "Looking for an integrative medicine center? Reno Regenerative Medicine helps with knee, back, and joint pain, helping your body heal naturally. Call today!",
  },
};

const CONTACT = {
  title: "Contact Us | Pain Management Clinic in Reno, NV",
  description:
    "Find relief at Reno Regenerative. Explore our Contact Us page to learn how our Reno pain management clinic can help you. Call now!",
  alternates: { canonical: "https://www.renoregen.com/contact/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Contact Us | Pain Management Clinic in Reno, NV",
    description:
      "Find relief at Reno Regenerative. Explore our Contact Us page to learn how our Reno pain management clinic can help you. Call now!",
    url: "https://www.renoregen.com/contact/",
    images: [{ url: "https://www.renoregen.com/images/og.jpg", width: 1200, height: 630, alt: "Clinic" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Contact Us | Pain Management Clinic in Reno, NV",
    description:
      "Find relief at Reno Regenerative. Explore our Contact Us page to learn how our Reno pain management clinic can help you. Call now!",
  },
};

const emptyLexical = {
  root: {
    type: "root",
    children: [{ type: "paragraph", children: [{ type: "text", text: "   " }] }],
  },
};

const realLexical = {
  root: {
    type: "root",
    children: [{ type: "paragraph", children: [{ type: "text", text: "A full section of care." }] }],
  },
};

function pageDoc(input: {
  meta?: Record<string, unknown>;
  content?: unknown;
  excerpt?: string;
}): Record<string, unknown> {
  return {
    title: "Contact",
    path: "/contact/",
    _status: "published",
    excerpt: input.excerpt ?? "Imported excerpt that must not become the meta description.",
    meta: input.meta ?? {},
    content: input.content === undefined ? emptyLexical : input.content,
  };
}

function ogDescription(meta: ReturnType<typeof mergeCmsMetadata>): string | undefined {
  const og = meta.openGraph;
  if (!og || Array.isArray(og)) return undefined;
  return og.description;
}

function ogTitle(meta: ReturnType<typeof mergeCmsMetadata>): unknown {
  const og = meta.openGraph;
  if (!og || Array.isArray(og)) return undefined;
  return og.title;
}

test("published doc with empty or thin content still renders the designed component", () => {
  const empty = pageDoc({ content: emptyLexical });
  const thin = pageDoc({ content: null, excerpt: "Only an excerpt." });
  assert.equal(docHasRealContent(empty), false);
  assert.equal(docHasRealContent(thin), false);
  assert.equal(selectRoutedBody({ hasDesignedPage: true, doc: empty }), "designed");
  assert.equal(selectRoutedBody({ hasDesignedPage: true, doc: thin }), "designed");
  assert.equal(selectRoutedBody({ hasDesignedPage: true, doc: pageDoc({ content: realLexical }) }), "designed");

  const html = renderToStaticMarkup(
    pickRoutedNode(
      selectRoutedBody({ hasDesignedPage: true, doc: thin }),
      createElement("article", { id: "designed-contact" }, "Contact the Reno clinic"),
      createElement("article", { id: "generic" }, "Imported excerpt"),
    ),
  );
  assert.match(html, /id="designed-contact"/);
  assert.match(html, /Contact the Reno clinic/);
  assert.doesNotMatch(html, /id="generic"/);
  assert.doesNotMatch(html, /Imported excerpt/);
});

test("publishing a doc with empty meta leaves the hardcoded head unchanged", () => {
  const doc = pageDoc({
    meta: { title: "  ", description: "", noIndex: false, noFollow: false },
    content: [],
  });
  doc.title = "Document title must not become the title tag";
  doc.excerpt = "Excerpt must not become the meta description.";
  assert.equal(mergeCmsMetadata(HOME, doc, "/"), HOME);
  assert.equal(mergeCmsMetadata(CONTACT, doc, "/contact/"), CONTACT);
  assert.equal(mergeCmsMetadata(CONTACT, null, "/contact/"), CONTACT);
});

test("a meta description edit changes only the description tags", () => {
  const doc = pageDoc({
    meta: { description: "Published meta description" },
  });
  const meta = mergeCmsMetadata(CONTACT, doc, "/contact/");
  assert.equal(meta.description, "Published meta description");
  assert.equal(ogDescription(meta), "Published meta description");
  const twitter = meta.twitter;
  assert.ok(twitter && typeof twitter === "object" && !Array.isArray(twitter));
  if (twitter && typeof twitter === "object") {
    assert.equal(twitter.description, "Published meta description");
    assert.equal(twitter.title, CONTACT.twitter.title);
  }
  assert.equal(meta.title, CONTACT.title);
  assert.equal(ogTitle(meta), CONTACT.openGraph.title);
  assert.deepEqual(meta.robots, CONTACT.robots);
  assert.deepEqual(meta.alternates, CONTACT.alternates);
  assert.deepEqual(meta.openGraph && "images" in meta.openGraph ? meta.openGraph.images : null, CONTACT.openGraph.images);
  assert.equal(cmsSchemaJsonLd("/contact/", doc), null);

  const homeWithoutTwitter = { ...HOME, twitter: undefined };
  const homeMeta = mergeCmsMetadata(homeWithoutTwitter, doc, "/");
  assert.equal(homeMeta.description, "Published meta description");
  assert.equal(homeMeta.twitter, undefined);
  assert.deepEqual(homeMeta.title, HOME.title);
  assert.deepEqual(homeMeta.robots, HOME.robots);
});

test("title, canonical, image, and robots overlay only the fields that are set", () => {
  const titled = mergeCmsMetadata(CONTACT, pageDoc({ meta: { title: "New contact title" } }), "/contact/");
  assert.equal(titled.title, "New contact title");
  assert.equal(ogTitle(titled), "New contact title");
  assert.equal(titled.description, CONTACT.description);

  const absolute = mergeCmsMetadata(
    HOME,
    pageDoc({ meta: { title: "Integrative clinic in Reno" } }),
    "/",
  );
  assert.deepEqual(absolute.title, {
    absolute: "Integrative clinic in Reno | Reno Regenerative Medicine",
  });
  assert.equal(ogTitle(absolute), "Integrative clinic in Reno | Reno Regenerative Medicine");

  const suffixed = mergeCmsMetadata(
    CONTACT,
    pageDoc({ meta: { title: "Already suffixed | Reno Regenerative Medicine" } }),
    "/contact/",
  );
  assert.deepEqual(suffixed.title, { absolute: "Already suffixed | Reno Regenerative Medicine" });

  const canonical = mergeCmsMetadata(
    CONTACT,
    pageDoc({ meta: { canonicalUrl: "https://reno-regenerative-medicine.vercel.app/contact/" } }),
    "/contact/",
  );
  assert.equal(
    canonical.alternates && "canonical" in canonical.alternates ? canonical.alternates.canonical : undefined,
    "https://www.renoregen.com/contact/",
  );
  assert.equal(canonical.title, CONTACT.title);

  const robots = mergeCmsMetadata(CONTACT, pageDoc({ meta: { noIndex: true } }), "/contact/").robots;
  assert.ok(robots && typeof robots === "object");
  if (robots && typeof robots === "object") {
    assert.equal(robots.index, false);
    assert.equal(robots.follow, true);
    assert.ok(robots.googleBot && typeof robots.googleBot === "object");
    if (robots.googleBot && typeof robots.googleBot === "object") {
      assert.equal(robots.googleBot.index, false);
      assert.equal(robots.googleBot.follow, true);
      assert.equal(robots.googleBot["max-image-preview"], "large");
      assert.equal(robots.googleBot["max-snippet"], -1);
      assert.equal(robots.googleBot["max-video-preview"], -1);
    }
  }

  const image = mergeCmsMetadata(
    CONTACT,
    pageDoc({ meta: { image: { url: "https://cdn.example.com/contact.jpg", alt: "Front desk" } } }),
    "/contact/",
  );
  const images = image.openGraph && !Array.isArray(image.openGraph) ? image.openGraph.images : undefined;
  assert.deepEqual(images, [
    {
      url: "https://cdn.example.com/contact.jpg",
      width: 1200,
      height: 630,
      alt: "Front desk",
    },
  ]);
  assert.equal(image.title, CONTACT.title);
  assert.equal(image.description, CONTACT.description);
});

test("JSON-LD is emitted only for schema fields that are set", () => {
  assert.equal(
    cmsSchemaJsonLd("/contact/", pageDoc({ meta: { description: "From the SEO tab", title: "SEO title" } })),
    null,
  );
  const overlay = cmsSchemaJsonLd("/contact/", {
    title: "Document title",
    excerpt: "Excerpt",
    meta: { schemaType: "ContactPage", breadcrumbLabel: "Contact", description: "From the SEO tab" },
  });
  assert.equal(overlay?.["@type"], "ContactPage");
  assert.equal(overlay?.alternateName, "Contact");
  assert.equal(overlay?.description, "From the SEO tab");
  assert.equal(overlay?.name, undefined);
  assert.equal(overlay?.url, "https://www.renoregen.com/contact/");
});

test("generic renderer is only for CMS-only pages with real body content", () => {
  const thin = pageDoc({});
  const real = pageDoc({ content: realLexical });
  assert.equal(selectRoutedBody({ hasDesignedPage: false, doc: thin }), "none");
  assert.equal(selectRoutedBody({ hasDesignedPage: false, doc: null }), "none");
  assert.equal(selectRoutedBody({ hasDesignedPage: false, doc: real }), "generic");

  const html = renderToStaticMarkup(
    pickRoutedNode(
      "generic",
      createElement("article", { id: "designed-contact" }, "designed"),
      createElement("article", { id: "generic" }, "A full section of care."),
    ),
  );
  assert.match(html, /id="generic"/);
  assert.doesNotMatch(html, /designed-contact/);
});

test("draft documents do not change the public head, and draft preview keeps the designed body", () => {
  const draft = pageDoc({ meta: { description: "Draft description" } });
  draft._status = "draft";
  assert.equal(cmsDocIsPublic(draft, false), false);
  assert.equal(cmsDocIsPublic({ _status: "published" }, false), true);
  assert.equal(cmsDocIsPublic(draft, true), true);
  assert.equal(selectRoutedBody({ hasDesignedPage: true, doc: draft }), "designed");
  const publishedHtml = renderToStaticMarkup(
    pickRoutedNode(
      "designed",
      createElement("section", null, "Contact the clinic"),
      createElement("h1", null, "Contact"),
    ),
  );
  const draftHtml = renderToStaticMarkup(
    pickRoutedNode(
      selectRoutedBody({ hasDesignedPage: true, doc: draft }),
      createElement("section", null, "Contact the clinic"),
      createElement("h1", null, "Contact"),
    ),
  );
  assert.equal(draftHtml, publishedHtml);
  assert.doesNotMatch(draftHtml, /<h1/);
});

test("the layout route never swaps a designed page for the generic article", () => {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
  const route = readFileSync(path.join(root, "lib/cms/route.tsx"), "utf8");
  const layout = readFileSync(path.join(root, "app/(site)/layout.tsx"), "utf8");
  assert.doesNotMatch(route, /CmsDocumentView/);
  assert.match(route, /return children/);
  assert.match(layout, /<CMSRoute>\{children\}<\/CMSRoute>/);

  const siteRoot = path.join(root, "app/(site)");
  const pages: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
        continue;
      }
      if (entry === "page.tsx") pages.push(full);
    }
  };
  walk(siteRoot);
  assert.ok(pages.length >= 90);

  for (const file of pages) {
    const source = readFileSync(file, "utf8");
    const rel = path.relative(siteRoot, file);
    if (rel === "[...path]/page.tsx") {
      assert.match(source, /CmsOnlyPage/);
      assert.match(source, /cmsOnlyMetadata/);
      continue;
    }
    assert.doesNotMatch(source, /CmsDocumentView/, `${rel} must not render the generic article directly`);
    if (rel === "[pseo]/page.tsx" || rel === "blog/[slug]/page.tsx") {
      assert.match(source, /CmsOnlyPage/);
    }
    if (rel !== "[pseo]/page.tsx") {
      assert.match(source, /withCmsMetadata/, `${rel} must merge CMS metadata`);
    }
  }
});

test("unpublishing or deleting a page revalidates the previously published path", () => {
  assert.deepEqual(
    pathsToRevalidate({ path: "/about/", _status: "draft" }, { path: "/about/", _status: "published" }),
    ["/about/"],
  );
  assert.deepEqual(
    pathsToRevalidate({ path: "/services/", _status: "published" }, { path: "/about", _status: "published" }),
    ["/services/", "/about/"],
  );
  assert.deepEqual(
    pathsToRevalidate(
      { path: "/blog/post/", _status: "published" },
      { path: "/blog/post/", _status: "published" },
    ),
    ["/blog/post/"],
  );
  assert.deepEqual(
    pathsToRevalidate({ path: "/about/", _status: "draft" }, { path: "/about/", _status: "draft" }),
    [],
  );
  assert.deepEqual(pathToRevalidateOnDelete({ path: "/contact", _status: "published" }), ["/contact/"]);
  assert.deepEqual(pathToRevalidateOnDelete({ path: "/contact/", _status: "draft" }), ["/contact/"]);
});
