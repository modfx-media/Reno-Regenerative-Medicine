import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PagePlaceholder from "../../components/PagePlaceholder";
import { getMeta } from "../../lib/pageMeta";
import { CLIENT_BLOGS_HIDDEN } from "../../lib/posts";
import { withCmsMetadata } from "@/lib/cms/metadata";

const meta = getMeta("/category/regenerative-medicine/")!;

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/category/regenerative-medicine/', {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://www.renoregen.com/category/regenerative-medicine/` },
});
}

export default function Page() {
  if (CLIENT_BLOGS_HIDDEN) notFound();
  return (
    <PagePlaceholder
      eyebrow="Reno Regenerative Medicine"
      title={"Regenerative Medicine"}
      intro={meta.description}
    />
  );
}
