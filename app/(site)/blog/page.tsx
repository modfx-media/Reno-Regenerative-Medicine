import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import BlogIndexBody from "./BlogIndexBody";
import { notFound } from "next/navigation";
import { CLIENT_BLOGS_HIDDEN } from "@/app/(site)/lib/posts";
import { loadMergedBlogPosts } from "@/lib/cms/blog-posts";
import { withCmsMetadata } from "@/lib/cms/metadata";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/blog/', {
  title: "Read Our Blog | Wellness and Pain Management Insights",
  description:
    "Navigating your health can feel overwhelming. We share pain relief and wellness insights to help you understand your body better. Read our blog today!",
  alternates: { canonical: "https://www.renoregen.com/blog/" },
  openGraph: {
    title: "Read Our Blog | Wellness and Pain Management Insights",
    description:
      "Navigating your health can feel overwhelming. We share pain relief and wellness insights to help you understand your body better. Read our blog today!",
    url: "https://www.renoregen.com/blog/",
    type: "website",
  },
});
}

export default async function Page() {
  const posts = await loadMergedBlogPosts();
  if (CLIENT_BLOGS_HIDDEN && posts.length === 0) notFound();

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reno Regenerative Medicine"
          title="Blog"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Reno Regenerative Medicine Blog"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
          size="md"
        />
        <BlogIndexBody posts={posts} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
