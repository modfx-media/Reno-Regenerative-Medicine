import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import BlogIndexBody from "./BlogIndexBody";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { toIndexPost } from "@/lib/ranked/display";

export const revalidate = 3600;

export const metadata: Metadata = {
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
};

export default async function Page() {
  const published = await getPublishedBlogPosts();
  const posts = [...published]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .map(toIndexPost);

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
