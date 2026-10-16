import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { getMeta } from "../lib/pageMeta";

const meta = getMeta("/terms-of-service/")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "https://www.renoregen.com/terms-of-service/" },
};

const TERMS: { title: string; body: ReactNode }[] = [
  {
    title: "1. Program Description:",
    body: (
      <>
        This messaging program sends appointment confirmation and reminder
        messages to customers who have booked an appointment with Reno
        Regenerative Medicine through our website at{" "}
        <a
          href="https://www.renoregen.com"
          className="text-[#3d7a52] underline-offset-4 hover:underline"
        >
          https://www.renoregen.com
        </a>
        , or via our scheduling forms, and have explicitly opted in to receive
        SMS notifications. Opt-in is collected via web forms with a dedicated
        checkbox for SMS consent. Messages include scheduling confirmations,
        appointment reminders, rescheduling updates, and customer support
        communications.
      </>
    ),
  },
  {
    title: "2. Cancellation Instructions:",
    body: 'You can cancel the SMS service at any time. Simply text "STOP" to the same number that sent you messages. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.',
  },
  {
    title: "3. Support Information:",
    body: (
      <>
        If you experience issues with the messaging program, reply with the
        keyword &quot;HELP&quot; for more assistance, or reach out directly to{" "}
        <a
          href="mailto:info@renoregen.com"
          className="text-[#3d7a52] underline-offset-4 hover:underline"
        >
          info@renoregen.com
        </a>{" "}
        or call{" "}
        <a
          href="tel:+17756839026"
          className="text-[#3d7a52] underline-offset-4 hover:underline"
        >
          (775) 683-9026
        </a>{" "}
        during business hours.
      </>
    ),
  },
  {
    title: "4. Carrier Liability:",
    body: "Carriers are not liable for delayed or undelivered messages.",
  },
  {
    title: "5. Message & Data Rates:",
    body: "Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.",
  },
  {
    title: "6. Supported Carriers:",
    body: "Our SMS program works with all major U.S. wireless carriers, including AT&T, T-Mobile, Verizon, Sprint, and most regional carriers.",
  },
  {
    title: "7. Age Restriction:",
    body: "You must be 18 years or older to participate in our SMS program.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reno Regenerative Medicine"
          title="Terms of Service"
          subtitle="SMS Messaging Terms & Compliance"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Reno Regenerative Medicine Terms of Service"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Terms of Service" },
          ]}
          size="md"
        />

        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <article className="mx-auto max-w-3xl">
              <header className="mb-10">
                <h2 className="font-serif-display text-3xl text-ink sm:text-4xl">
                  SMS Messaging Terms & Compliance
                </h2>
              </header>

              <div className="space-y-6">
                {TERMS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#e8e4d9] bg-white p-6"
                  >
                    <h3 className="font-serif-display text-lg text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-ink/80">{item.body}</p>
                  </div>
                ))}

                <div className="rounded-xl border border-[#e8e4d9] bg-white p-6">
                  <h3 className="font-serif-display text-lg text-ink">
                    8. Privacy Policy:
                  </h3>
                  <p className="mt-3 text-ink/80">
                    For privacy-related inquiries, please refer to our Privacy
                    Policy at{" "}
                    <a
                      href="/privacy-policy/"
                      className="text-[#3d7a52] underline-offset-4 hover:underline"
                    >
                      renoregen.com/privacy-policy
                    </a>
                  </p>
                </div>
              </div>

              <p className="mt-8 text-ink/80">
                We comply with all applicable laws and regulations, including
                the Telephone Consumer Protection Act (TCPA) and CTIA
                guidelines, regarding the use of SMS communications.
              </p>
            </article>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
