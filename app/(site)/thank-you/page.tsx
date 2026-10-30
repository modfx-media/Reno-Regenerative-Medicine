import type { Metadata } from "next";
import PagePlaceholder from "../components/PagePlaceholder";
import { getMeta } from "../lib/pageMeta";
import { withCmsMetadata } from "@/lib/cms/metadata";

const meta = getMeta("/thank-you/")!;

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/thank-you/', {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://www.renoregen.com/thank-you/` },
});
}

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Reno Regenerative Medicine"
      title={"Thank You"}
      intro={meta.description}
    />
  );
}
