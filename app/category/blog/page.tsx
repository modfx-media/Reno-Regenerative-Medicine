import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PagePlaceholder from "../../components/PagePlaceholder";
import { getMeta } from "../../lib/pageMeta";
import { CLIENT_BLOGS_HIDDEN } from "../../lib/posts";

const meta = getMeta("/category/blog/")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://www.renoregen.com/category/blog/` },
};

export default function Page() {
  if (CLIENT_BLOGS_HIDDEN) notFound();
  return (
    <PagePlaceholder
      eyebrow="Reno Regenerative Medicine"
      title={"Blog"}
      intro={meta.description}
    />
  );
}
