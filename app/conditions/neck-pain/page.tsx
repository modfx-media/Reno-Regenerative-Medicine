import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ConditionShell from "../../components/ConditionShell";

export const metadata: Metadata = {
  title: "Compassionate Care for Neck Pain",
  description:
    "Constant neck soreness and stiffness make it hard to focus. Our team works on gently aligning your spine and reducing muscle strain. Book a visit now.",
  alternates: { canonical: "https://www.renoregen.com/conditions/neck-pain/" },
};

const PROSE =
  "rounded-3xl bg-white p-8 md:p-12 shadow-[0_30px_60px_-40px_rgba(10,18,13,0.25)] " +
  "[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-serif-display [&_h2]:text-[28px] [&_h2]:leading-tight [&_h2]:text-[#13231a] " +
  "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-serif-display [&_h3]:text-[20px] [&_h3]:text-[#13231a] " +
  "[&_p]:my-5 [&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:text-[#1a2332]/85 " +
  "[&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-[#3d7a52] " +
  "[&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:marker:text-[#3d7a52] " +
  "[&_li]:my-2 [&_li]:text-[16px] [&_li]:leading-[1.7] [&_li]:text-[#1a2332]/85 " +
  "[&_a]:font-medium [&_a]:text-[#1f3a28] [&_a]:underline [&_a]:decoration-[#c6b180] [&_a:hover]:text-[#0a120d] " +
  "[&>*:first-child]:mt-0";

const TREATMENTS: { name: string; href: string; copy: string }[] = [
  { name: "Chiropractic Care", href: "/chiropractic-care/", copy: "Gentle cervical adjustments restore alignment and ease muscle tension." },
  { name: "Spinal Decompression", href: "/spinal-decompression/", copy: "Non-invasive traction relieves pressure on cervical discs and nerves." },
  { name: "Trigger Point Injections", href: "/trigger-point-injections/", copy: "Targeted injections release tight knots in the neck and upper shoulders." },
  { name: "Therapeutic Exercise", href: "/physical-therapy/", copy: "Personalized stretching and strengthening to support a healthy cervical spine." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Condition"
          title="Neck Pain Treatment in Reno, NV"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Neck pain treatment at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions", href: "/conditions/" },
            { label: "Neck Pain" },
          ]}
          size="md"
        />
        <ConditionShell>
          <article className={PROSE}>
            <p>The neck, also called the cervical spine, begins at the base of the skull and contains seven small vertebrae. The cervical spine supports the full weight of your head which is on average about 12 pounds. While the cervical spine can move your head in nearly every direction, this flexibility makes the neck very susceptible to pain and injury.</p>

            <p>Neck pain can be a minor nuisance or a debilitating problem that interferes with sleep, work, and the activities you love. Because the cervical spine houses the nerves that travel down into the shoulders, arms, and hands, neck problems often radiate well beyond the neck itself.</p>

            <h2>Understanding the Anatomy of the Neck</h2>
            <p>The cervical spine is a remarkably intricate structure. Problems with any of its components can lead to pain, stiffness, or referred symptoms in the arms.</p>
            <ul>
              <li>Vertebrae &ndash; seven small bones (C1&ndash;C7) that stack to form the cervical column and protect the spinal cord.</li>
              <li>Intervertebral discs &ndash; soft, cushioning pads between the vertebrae that absorb shock and allow movement.</li>
              <li>Spinal cord and nerve roots &ndash; nerves that travel through the cervical spine and branch out into the shoulders, arms, and hands.</li>
              <li>Ligaments and tendons &ndash; tough bands of tissue that stabilize the vertebrae and connect muscle to bone.</li>
              <li>Muscles &ndash; including the trapezius, levator scapulae, and deep cervical stabilizers that support and move the head.</li>
            </ul>

            <h2>Common Causes of Neck Pain</h2>
            <p>Neck pain can develop suddenly after an injury or build slowly over time from posture and lifestyle factors. The most common causes include:</p>
            <ul>
              <li>Muscle strain from poor posture, prolonged computer or phone use (&ldquo;tech neck&rdquo;), or sleeping in an awkward position.</li>
              <li>Whiplash and other injuries from car accidents, falls, or contact sports.</li>
              <li>Degenerative disc disease and arthritis, which become more common with age.</li>
              <li>Herniated or bulging cervical discs that press on nearby nerves.</li>
              <li>Cervical spinal stenosis &ndash; narrowing of the spinal canal that puts pressure on the spinal cord and nerves.</li>
              <li>Pinched nerves (cervical radiculopathy) causing pain, tingling, or weakness down the arm.</li>
              <li>Chronic stress, which keeps the muscles of the neck and upper back in a constant state of tension.</li>
            </ul>

            <h2>Symptoms of Neck Pain</h2>
            <p>Neck pain doesn&rsquo;t always stay in the neck. Depending on the underlying cause, you may experience any combination of the following:</p>
            <ul>
              <li>Dull, aching pain or sharp, stabbing pain in the neck.</li>
              <li>Stiffness and reduced range of motion when turning the head.</li>
              <li>Muscle tightness or spasms in the neck and upper shoulders.</li>
              <li>Headaches, especially at the base of the skull.</li>
              <li>Pain that radiates into the shoulders, upper back, arms, or hands.</li>
              <li>Numbness, tingling, or weakness in the arms or hands.</li>
              <li>Difficulty sleeping or finding a comfortable position.</li>
            </ul>

            <h2>When to Seek Care</h2>
            <p>You should consult a medical provider if neck pain does not improve after a few weeks, keeps coming back, or is accompanied by any of the following:</p>
            <ul>
              <li>Severe pain after a fall, accident, or injury.</li>
              <li>Numbness, tingling, or weakness in the arms or hands.</li>
              <li>Pain that radiates down one or both arms.</li>
              <li>Loss of grip strength or coordination.</li>
              <li>Persistent headaches, dizziness, or trouble with balance.</li>
              <li>Fever, unexplained weight loss, or other systemic symptoms.</li>
            </ul>

            <h2>How We Treat Neck Pain</h2>
            <p>At Reno Regenerative Medicine our mission is to help people heal naturally without unnecessary drugs and surgery. When patients come to us with neck pain we do a comprehensive exam, review imaging when needed, and design a care plan that may include:</p>
            <ul>
              <li>Chiropractic care to restore proper alignment of the cervical spine.</li>
              <li>Spinal decompression therapy to relieve pressure on discs and nerves.</li>
              <li>Trigger point injections to release tight, painful muscle knots.</li>
              <li>Joint injections to reduce inflammation and pain at the source.</li>
              <li>Therapeutic exercise and physiotherapy to rebuild strength and mobility.</li>
              <li>Posture and ergonomic guidance to prevent recurring symptoms.</li>
            </ul>
            <p>Our goal is to address the root cause of your neck pain so you can return to the activities you love &mdash; without relying on long-term medication or jumping straight to surgery. If you are ready to find lasting relief, the first step is to schedule a consultation.</p>

            <p className="!mt-10">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-7 py-3.5 text-[12px] font-semibold !text-[#0a120d] uppercase tracking-[0.22em] !no-underline transition-colors hover:bg-[#f3d99a]"
              >
                request an appointment
              </Link>
            </p>
          </article>
        </ConditionShell>

        {/* How We Treat Neck Pain */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
                <span aria-hidden className="h-px w-6 bg-[#3d7a52]/70" />
                Treatment Options
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] leading-[1.15] text-[#13231a] md:text-[40px]">
                How We Treat Neck Pain
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TREATMENTS.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-[#e8e4d9] bg-[#f6f3ea] p-7 transition-all hover:-translate-y-1 hover:border-[#c6b180] hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(10,18,13,0.3)]"
                >
                  <div>
                    <h3 className="font-serif-display text-[22px] leading-tight text-[#13231a]">{t.name}</h3>
                    <p className="mt-3 text-[14.5px] leading-[1.6] text-[#1a2332]/70">{t.copy}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#3d7a52]">
                    Learn More
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
