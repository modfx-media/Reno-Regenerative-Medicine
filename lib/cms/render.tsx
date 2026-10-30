import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import Footer from "@/app/(site)/components/Footer";
import Header from "@/app/(site)/components/Header";

import type { CmsDoc } from "./queries";

export function CmsDocumentView({ doc }: { doc: CmsDoc }) {
  const title = doc.title || "Untitled";

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <article data-cms-overlay="published">
          <p className="text-[11px] uppercase tracking-[0.28em] text-olive">Reno Regenerative Medicine</p>
          <h1 className="mt-4 font-serif-display text-4xl text-forest">{title}</h1>
          {doc.excerpt ? <p className="mt-6 text-lg leading-relaxed text-ink/80">{doc.excerpt}</p> : null}
          {doc.heroImagePath ? (
            // Designed pages keep next/image. The CMS overlay only renders after publish.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={doc.heroImagePath} alt="" className="mt-8 w-full rounded-sm" />
          ) : null}
          {doc.content && typeof doc.content === "object" && "root" in doc.content ? (
            <div className="mt-8 space-y-4 leading-relaxed">
              <RichText data={doc.content as SerializedEditorState} />
            </div>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  );
}
