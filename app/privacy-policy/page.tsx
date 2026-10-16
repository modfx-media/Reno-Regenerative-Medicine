import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { getMeta } from "../lib/pageMeta";

const meta = getMeta("/privacy-policy/")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "https://www.renoregen.com/privacy-policy/" },
};

const SECTIONS: { id: string; label: string }[] = [
  { id: "rights", label: "Your Rights" },
  { id: "choices", label: "Your Choices" },
  { id: "uses", label: "Our Uses & Disclosures" },
  { id: "other-uses", label: "Other Ways We Share" },
  { id: "responsibilities", label: "Our Responsibilities" },
  { id: "information-sharing", label: "Information Sharing & Disclosure" },
  { id: "changes", label: "Changes to This Notice" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reno Regenerative Medicine"
          title="Privacy Policy"
          subtitle="Notice of Privacy Practices · Effective 08/04/2020"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Reno Regenerative Medicine Privacy Policy"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
          size="md"
        />

        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-2xl border border-[#e8e4d9] bg-white p-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#3d7a52]">
                    On this page
                  </span>
                  <ul className="mt-4 space-y-2 text-[15px]">
                    {SECTIONS.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="text-ink/75 transition-colors hover:text-[#3d7a52]"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              <article className="max-w-none">
                <header className="mb-10">
                  <h2 className="font-serif-display text-3xl text-ink sm:text-4xl">
                    Your Information. Your Rights. Our Responsibilities.
                  </h2>
                  <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
                    This notice describes how medical information about you may
                    be used and disclosed and how you can get access to this
                    information. <strong>Please review it carefully.</strong>
                  </p>
                </header>

                <section id="rights" className="scroll-mt-32">
                  <h3 className="font-serif-display text-2xl text-ink">
                    Your Rights
                  </h3>
                  <p className="mt-3 text-ink/80">
                    When it comes to your health information, you have certain
                    rights. This section explains your rights and some of our
                    responsibilities to help you.
                  </p>

                  <SubBlock
                    title="Get an electronic or paper copy of your medical record"
                    body={[
                      "You can ask to see or get an electronic or paper copy of your medical record and other health information we have about you. Ask us how to do this.",
                      "We will provide a copy or a summary of your health information. We may charge a reasonable, cost-based fee.",
                    ]}
                  />
                  <SubBlock
                    title="Ask us to correct your medical record"
                    body={[
                      "You can ask us to correct health information about you that you think is incorrect or incomplete. Ask us how to do this.",
                      "We may say “no” to your request, but we’ll tell you why in writing within 60 days.",
                    ]}
                  />
                  <SubBlock
                    title="Request confidential communications"
                    body={[
                      "You can ask us to contact you in a specific way (for example, home or office phone) or to send mail to a different address.",
                      "We will say “yes” to all reasonable requests.",
                    ]}
                  />
                  <SubBlock
                    title="Ask us to limit what we use or share"
                    body={[
                      "You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say “no” if it would affect your care.",
                      "If you pay for a service or health care item out-of-pocket in full, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will say “yes” unless a law requires us to share that information.",
                    ]}
                  />
                  <SubBlock
                    title="Get a list of those with whom we’ve shared information"
                    body={[
                      "You can ask for a list (accounting) of the times we’ve shared your health information for six years prior to the date you ask, who we shared it with, and why.",
                      "We will include all the disclosures except for those about treatment, payment, and health care operations, and certain other disclosures (such as any you asked us to make). We’ll provide one accounting a year for free but will charge a reasonable, cost-based fee if you ask for another one within 12 months.",
                    ]}
                  />
                  <SubBlock
                    title="Get a copy of this privacy notice"
                    body={[
                      "You can ask for a paper copy of this notice at any time, even if you have agreed to receive the notice electronically. We will provide you with a paper copy promptly.",
                    ]}
                  />
                  <SubBlock
                    title="Choose someone to act for you"
                    body={[
                      "If you have given someone medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.",
                      "We will make sure the person has this authority and can act for you before we take any action.",
                    ]}
                  />
                  <SubBlock
                    title="File a complaint if you feel your rights are violated"
                    body={[
                      "You can complain if you feel we have violated your rights by contacting us at 775-683-9026.",
                    ]}
                  >
                    <p className="mt-3 text-ink/80">
                      You can file a complaint with the U.S. Department of
                      Health and Human Services Office for Civil Rights by
                      sending a letter to 200 Independence Avenue, S.W.,
                      Washington, D.C. 20201, calling 1-877-696-6775, or
                      visiting{" "}
                      <a
                        href="https://www.hhs.gov/ocr/privacy/hipaa/complaints"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3d7a52] underline-offset-4 hover:underline"
                      >
                        www.hhs.gov/ocr/privacy/hipaa/complaints
                      </a>
                      .
                    </p>
                    <p className="mt-3 text-ink/80">
                      We will not retaliate against you for filing a complaint.
                    </p>
                  </SubBlock>
                </section>

                <section id="choices" className="mt-14 scroll-mt-32">
                  <h3 className="font-serif-display text-2xl text-ink">
                    Your Choices
                  </h3>
                  <p className="mt-3 text-ink/80">
                    For certain health information, you can tell us your choices
                    about what we share. If you have a clear preference for how
                    we share your information in the situations described below,
                    talk to us. Tell us what you want us to do, and we will
                    follow your instructions.
                  </p>
                  <p className="mt-3 text-ink/80">
                    In these cases, you have both the right and choice to tell
                    us to:
                  </p>
                  <Bullets
                    items={[
                      "Share information with your family, close friends, or others involved in your care",
                      "Share information in a disaster relief situation",
                      "Include your information in a hospital directory",
                    ]}
                  />
                  <p className="mt-4 text-ink/80">
                    If you are not able to tell us your preference, for example
                    if you are unconscious, we may go ahead and share your
                    information if we believe it is in your best interest. We
                    may also share your information when needed to lessen a
                    serious and imminent threat to health or safety.
                  </p>
                  <p className="mt-4 text-ink/80">
                    In these cases we never share your information unless you
                    give us written permission:
                  </p>
                  <Bullets
                    items={[
                      "Marketing purposes",
                      "Sale of your information",
                      "Most sharing of psychotherapy notes",
                    ]}
                  />
                  <p className="mt-4 text-ink/80">
                    In the case of fundraising: we may contact you for
                    fundraising efforts, but you can tell us not to contact you
                    again.
                  </p>
                </section>

                <section id="uses" className="mt-14 scroll-mt-32">
                  <h3 className="font-serif-display text-2xl text-ink">
                    Our Uses and Disclosures
                  </h3>
                  <p className="mt-3 font-medium text-ink">
                    How do we typically use or share your health information?
                  </p>
                  <p className="mt-2 text-ink/80">
                    We typically use or share your health information in the
                    following ways:
                  </p>

                  <SubBlock
                    title="Treat you"
                    body={[
                      "We can use your health information and share it with other professionals who are treating you.",
                    ]}
                    example="A doctor treating you for an injury asks another doctor about your overall health condition."
                  />
                  <SubBlock
                    title="Run our organization"
                    body={[
                      "We can use and share your health information to run our practice, improve your care, and contact you when necessary.",
                    ]}
                    example="We use health information about you to manage your treatment and services."
                  />
                  <SubBlock
                    title="Bill for your services"
                    body={[
                      "We can use and share your health information to bill and get payment from health plans or other entities.",
                    ]}
                    example="We give information about you to your health insurance plan so it will pay for your services."
                  />
                </section>

                <section id="other-uses" className="mt-14 scroll-mt-32">
                  <h3 className="font-serif-display text-2xl text-ink">
                    How else can we use or share your health information?
                  </h3>
                  <p className="mt-3 text-ink/80">
                    We are allowed or required to share your information in
                    other ways – usually in ways that contribute to the
                    public good, such as public health and research. We have to
                    meet many conditions in the law before we can share your
                    information for these purposes. For more information see:{" "}
                    <a
                      href="https://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3d7a52] underline-offset-4 hover:underline"
                    >
                      hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html
                    </a>
                    .
                  </p>

                  <SubBlock
                    title="Help with public health and safety issues"
                    body={["We can share health information about you for certain situations such as:"]}
                  >
                    <Bullets
                      items={[
                        "Preventing disease",
                        "Helping with product recalls",
                        "Reporting adverse reactions to medications",
                        "Reporting suspected abuse, neglect, or domestic violence",
                        "Preventing or reducing a serious threat to anyone’s health or safety",
                      ]}
                    />
                  </SubBlock>
                  <SubBlock
                    title="Do research"
                    body={["We can use or share your information for health research."]}
                  />
                  <SubBlock
                    title="Comply with the law"
                    body={[
                      "We will share information about you if state or federal laws require it, including with the Department of Health and Human Services if it wants to see that we’re complying with federal privacy law.",
                    ]}
                  />
                  <SubBlock
                    title="Respond to organ and tissue donation requests"
                    body={[
                      "We can share health information about you with organ procurement organizations.",
                    ]}
                  />
                  <SubBlock
                    title="Work with a medical examiner or funeral director"
                    body={[
                      "We can share health information with a coroner, medical examiner, or funeral director when an individual dies.",
                    ]}
                  />
                  <SubBlock
                    title="Address workers’ compensation, law enforcement, and other government requests"
                    body={["We can use or share health information about you:"]}
                  >
                    <Bullets
                      items={[
                        "For workers’ compensation claims",
                        "For law enforcement purposes or with a law enforcement official",
                        "With health oversight agencies for activities authorized by law",
                        "For special government functions such as military, national security, and presidential protective services",
                      ]}
                    />
                  </SubBlock>
                  <SubBlock
                    title="Respond to lawsuits and legal actions"
                    body={[
                      "We can share health information about you in response to a court or administrative order, or in response to a subpoena.",
                    ]}
                  />
                </section>

                <section id="responsibilities" className="mt-14 scroll-mt-32">
                  <h3 className="font-serif-display text-2xl text-ink">
                    Our Responsibilities
                  </h3>
                  <Bullets
                    items={[
                      "We are required by law to maintain the privacy and security of your protected health information.",
                      "We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.",
                      "We must follow the duties and privacy practices described in this notice and give you a copy of it.",
                      "We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.",
                    ]}
                  />

                  <p className="mt-4 text-ink/80">
                    For more information see:{" "}
                    <a
                      href="https://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3d7a52] underline-offset-4 hover:underline"
                    >
                      hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html
                    </a>
                    .
                  </p>
                </section>

                <section id="information-sharing" className="mt-14 scroll-mt-32">
                  <h3 className="font-serif-display text-2xl text-ink">
                    Information Sharing & Disclosure
                  </h3>
                  <p className="mt-3 text-ink/80">
                    We do not sell, rent, or trade personal information. We may
                    share information with:
                  </p>

                  <SubBlock title="Service Providers:" body={[]}>
                    <Bullets
                      items={[
                        "Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling)",
                        "SMS aggregators and providers solely for the purpose of delivering messages you've consented to receive",
                        "All service providers are contractually obligated to maintain confidentiality and security",
                      ]}
                    />
                  </SubBlock>
                  <SubBlock title="Legal Compliance:" body={[]}>
                    <Bullets
                      items={[
                        "If required by law, legal process, or to protect our rights",
                        "In response to valid law enforcement requests or court orders",
                      ]}
                    />
                  </SubBlock>
                  <SubBlock title="Business Transfers:" body={[]}>
                    <Bullets
                      items={[
                        "In case of mergers, acquisitions, or sale of assets",
                        "In such cases, your data remains protected under the terms of this policy",
                      ]}
                    />
                  </SubBlock>

                  <p className="mt-6 text-ink/80">
                    All the above categories exclude text messaging originator
                    opt-in data and consent; this information will not be shared
                    with any third parties, excluding aggregators and providers
                    of the Text Message services.
                  </p>
                  <p className="mt-4 text-ink/80">
                    No mobile information will be shared with third
                    parties/affiliates for marketing/promotional purposes.
                    Information sharing to subcontractors in support services,
                    such as customer service, is permitted.
                  </p>
                  <p className="mt-4 text-ink/80">
                    We maintain reasonable administrative, technical, and
                    physical safeguards to protect personal information.
                  </p>
                  <p className="mt-4 text-ink/80">
                    Message frequency may vary
                  </p>
                  <p className="mt-4 text-ink/80">
                    Message and data rates may apply
                  </p>
                  <p className="mt-4 text-ink/80">
                    Opt-out instructions: Users can reply STOP at any time
                  </p>
                </section>

                <section id="changes" className="mt-14 scroll-mt-32">
                  <h3 className="font-serif-display text-2xl text-ink">
                    Changes to the Terms of This Notice
                  </h3>
                  <p className="mt-3 text-ink/80">
                    We can change the terms of this notice, and the changes will
                    apply to all information we have about you. The new notice
                    will be available upon request, in our office, and on our
                    website.
                  </p>
                </section>

                <aside className="mt-14 rounded-2xl border border-[#e8e4d9] bg-[#13231a] p-8 text-cream">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#f3d99a]">
                    Questions?
                  </span>
                  <h3 className="mt-2 font-serif-display text-2xl">
                    Contact our team
                  </h3>
                  <p className="mt-3 text-cream/80">
                    If you have questions about this notice or your privacy
                    rights, please contact Reno Regenerative Medicine at{" "}
                    <a
                      href="tel:+17756839026"
                      className="font-medium text-[#f3d99a] underline-offset-4 hover:underline"
                    >
                      (775) 683-9026
                    </a>
                    .
                  </p>
                </aside>
              </article>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

function SubBlock({
  title,
  body = [],
  example,
  children,
}: {
  title: string;
  body?: string[];
  example?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mt-8 rounded-xl border border-[#e8e4d9] bg-white p-6">
      <h4 className="font-serif-display text-lg text-ink">{title}</h4>
      {body.map((p, i) => (
        <p key={i} className="mt-3 text-ink/80">
          {p}
        </p>
      ))}
      {example && (
        <p className="mt-3 rounded-lg bg-[#f6f3ea] px-4 py-3 text-sm text-ink/75">
          <span className="font-semibold text-[#3d7a52]">Example: </span>
          {example}
        </p>
      )}
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-ink/80">
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#c6b180]"
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
