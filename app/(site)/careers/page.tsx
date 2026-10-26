import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import WebsiteForm from "../components/WebsiteForm";
import { getMeta } from "../lib/pageMeta";
import { withCmsMetadata } from "@/lib/cms/metadata";

const meta = getMeta("/careers/")!;

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/careers/', {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "https://www.renoregen.com/careers/" },
});
}

const VALUES = [
  {
    title: "Embraces action",
    body: "You see what needs doing and you do it — no waiting, no excuses.",
  },
  {
    title: "Fosters positivity",
    body: "You bring energy that lifts patients and teammates alike.",
  },
  {
    title: "Goes above and beyond",
    body: "You treat every detail like it matters — because for our patients, it does.",
  },
  {
    title: "Values being resourceful",
    body: "You find a way, work the problem, and learn fast.",
  },
  {
    title: "Loves helping people",
    body: "Patient care isn’t a job description for you — it’s a calling.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Join the Reno Regenerative Medicine team"
          subtitle="We hire people who are bright, determined, and passionate."
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Reno Regenerative Medicine team"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Careers" },
          ]}
          size="md"
        />

        <section className="bg-cream">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#3d7a52]">
              About working here
            </span>
            <h2 className="mt-3 font-serif-display text-3xl text-ink sm:text-4xl">
              We hire people who are bright, determined, and passionate.
            </h2>
            <div className="mt-6 grid gap-6 text-[17px] leading-relaxed text-ink/80 lg:grid-cols-2">
              <p>
                At Reno Regenerative Medicine we make our patients a top
                priority, and we seek out candidates that do the same. Being
                part of something bigger is what drives and unites us.
              </p>
              <p>
                Although Reno Regenerative Medicine employees share common
                company goals and values, we come from different backgrounds,
                endeavors, and experiences, resulting in a diversity of thought
                that we both celebrate and encourage.
              </p>
            </div>
            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-ink/80">
              If you are someone who embraces action, fosters positivity, goes
              above and beyond, values being resourceful, and loves helping
              people, then Reno Regenerative Medicine is just the place for you.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[#3d7a52]">
                What we look for
              </span>
              <h2 className="mt-3 font-serif-display text-3xl text-ink sm:text-4xl">
                The qualities that make a great teammate.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((v, i) => (
                <article
                  key={v.title}
                  className="rounded-2xl border border-[#e8e4d9] bg-cream/50 p-6 transition-all hover:-translate-y-0.5 hover:border-[#c6b180] hover:shadow-[0_18px_40px_-24px_rgba(10,18,13,0.25)]"
                >
                  <span className="font-serif-display text-3xl text-[#c6b180]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-serif-display text-xl text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                    {v.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#3d7a52]">
              Open roles
            </span>
            <h2 className="mt-3 font-serif-display text-3xl text-ink sm:text-4xl">
              Positions Available
            </h2>
            <div className="mt-8 rounded-2xl border border-dashed border-[#c6b180] bg-white p-10 text-center">
              <p className="text-[17px] leading-relaxed text-ink/75">
                We don’t have any positions posted at the moment, but
                we’re always interested in meeting talented people. Use
                the application form below to introduce yourself — we’ll
                keep your résumé on file and reach out when something
                opens.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="rounded-2xl border border-[#e8e4d9] bg-[#f6f3ea] p-8 sm:p-10">
              <span className="text-xs uppercase tracking-[0.3em] text-[#3d7a52]">
                Equal Opportunity
              </span>
              <h2 className="mt-3 font-serif-display text-2xl text-ink sm:text-3xl">
                A diverse staff is an integral and welcome part of our practice.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink/80">
                As an equal opportunity employer committed to meeting the needs
                of a multigenerational and multicultural workforce, Reno
                Regenerative Medicine recognizes that a diverse staff,
                reflective of our community, is an integral and welcome part of
                a successful and ethical business. We hire local talent at all
                levels regardless of race, color, religion, age, national
                origin, gender, gender identity, sexual orientation, or
                disability. We actively foster inclusion in all forms both
                within our company and across interactions with patients,
                candidates, and partners.
              </p>
            </div>
          </div>
        </section>

        <section id="apply" className="scroll-mt-28 bg-cream">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-[#3d7a52]">
                Get in touch
              </span>
              <h2 className="mt-3 font-serif-display text-3xl text-ink sm:text-4xl">
                Apply
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ink/70">
                Tell us about yourself and the kind of role you’re looking
                for. We review every submission.
              </p>
            </div>
            <div className="mt-10">
              <WebsiteForm />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
