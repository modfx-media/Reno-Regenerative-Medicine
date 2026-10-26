import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  title: string;
  eyebrow?: string;
  intro?: string;
  children?: React.ReactNode;
};

export default function PagePlaceholder({
  title,
  eyebrow,
  intro,
  children,
}: Props) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-40 pb-24 bg-cream">
        <div className="mx-auto max-w-4xl px-6">
          {eyebrow && (
            <span className="text-xs uppercase tracking-[0.3em] text-olive-deep">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-serif-display text-5xl sm:text-6xl text-ink">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg text-ink/75 leading-relaxed max-w-2xl">
              {intro}
            </p>
          )}
          {children ? (
            <div className="mt-12 prose prose-lg max-w-none text-ink/80">
              {children}
            </div>
          ) : (
            <p className="mt-12 text-ink/60 italic">
              This page is part of the live URL structure and is reserved for
              SEO continuity. Final content will be migrated here.
            </p>
          )}

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center rounded-full bg-olive px-7 py-3.5 text-sm font-medium text-white hover:bg-olive-deep transition-colors"
            >
              Request Appointment
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
