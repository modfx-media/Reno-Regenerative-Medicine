import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ConditionShell from "../../components/ConditionShell";

export const metadata: Metadata = {
  title: "Whiplash Therapy Options",
  description:
    "Whiplash causes severe tension and limited neck movement. Reno Regenerative provides targeted therapies to reduce swelling and support safe healing. Call today!",
  alternates: { canonical: "https://www.renoregen.com/conditions/whiplash/" },
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
  { name: "Trigger Point Injections", href: "/trigger-point-injections/", copy: "Release the tight muscle knots that develop after sudden neck trauma." },
  { name: "Spinal Decompression", href: "/spinal-decompression/", copy: "Gently relieve cervical disc pressure and pinched nerves caused by impact." },
  { name: "Chiropractic Care", href: "/chiropractic-care/", copy: "Restore proper neck alignment and full range of motion." },
  { name: "Cold Laser Therapy", href: "/services/", copy: "Speed soft-tissue healing and reduce inflammation without medication." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Condition"
          title="Whiplash Treatment in Reno, NV"
          image="/images/services/spinal-decompression.jpg"
          imageAlt="Whiplash treatment at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions", href: "/conditions/" },
            { label: "Whiplash" },
          ]}
          size="md"
        />
        <ConditionShell>
          <article className={PROSE}>
            <p>According to the American Chiropractic Association, one of the most common causes of neck pain is whiplash resulting from a car accident. A sudden forced movement of the head or neck in any direction and the resulting “rebound” in the opposite direction is known as whiplash. The sudden “whipping” motion injures the surrounding and supporting tissues of the neck and head. Muscles react by tightening and contracting, creating muscle fatigue, which can result in pain and stiffness. Severe whiplash can also be associated with injury to the intervertebral joints, discs, ligaments, muscles, and nerve roots.</p>
            <p>Whiplash is a neck injury due to forceful, rapid back-and-forth movement of the neck, like the cracking of a whip.</p>
            <p>Whiplash is commonly caused by rear-end car accidents. But whiplash can also result from sports accidents, physical abuse and other types of traumas, such as a fall. Whiplash may be called a neck sprain or strain, but these terms also include other types of neck injuries.</p>
            <p>Most people with whiplash get better within a few weeks by following a treatment plan that includes pain medication and exercise. However, some people have chronic neck pain and other long-lasting complications.</p>
            <p>Signs and symptoms of whiplash usually develop within days of the injury, and may include:</p>
            <ul>
              <li>Neck pain and stiffness</li>
              <li>Worsening of pain with neck movement</li>
              <li>Loss of range of motion in the neck</li>
              <li>Headaches, most often starting at the base of the skull</li>
              <li>Tenderness or pain in the shoulder, upper back or arms</li>
              <li>Tingling or numbness in the arms</li>
              <li>Fatigue</li>
              <li>Dizziness</li>
            </ul>
            <p>Some people also have:</p>
            <ul>
              <li>Blurred vision</li>
              <li>Ringing in the ears (tinnitus)</li>
              <li>Sleep disturbances</li>
              <li>Irritability</li>
              <li>Difficulty concentrating</li>
              <li>Memory problems</li>
              <li>Depression</li>
            </ul>

            <h2>Causes</h2>
            <p>Whiplash typically occurs when your head is forcefully and quickly thrown backward and then forward. This motion can injure bones in the spine, disks between the bones, ligaments, muscles, nerves and other tissues of the neck.</p>
            <p>A whiplash injury may result from:</p>
            <ul>
              <li>Auto accidents. Rear-end collisions are a major cause of whiplash.</li>
              <li>Physical abuse or assault. Whiplash can occur if you are punched or shaken. It’s one of the injuries seen in shaken baby syndrome.</li>
              <li>Contact sports. Football tackles and other sports-related collisions can sometimes cause whiplash.</li>
            </ul>

            <h2>How is a whiplash treated?</h2>
            <p>Your healthcare provider will determine specific treatment for whiplash, based on:</p>
            <ul>
              <li>Your age, overall health, and medical history</li>
              <li>The extent of your injury</li>
              <li>Your tolerance for specific medicines, procedures, or therapies</li>
              <li>Expectations for the course of your injury</li>
              <li>Your opinion or preference</li>
            </ul>
            <p>Treatment may include:</p>
            <ul>
              <li>Ice applications for the first 24 hours</li>
              <li>Cervical (neck) collar</li>
              <li>Gentle, active movement after 24 hours</li>
              <li>Anti-pain ,anti-inflammation medication Serapin</li>
              <li>Trigger point injections</li>
              <li>Therapeutic Excercise</li>
              <li>Chiropractic manipulation</li>
              <li>Spinal Decompression</li>
              <li>Cold laser therapy</li>
              <li>Pulsewave therapy</li>
            </ul>

            <h2>Complications</h2>
            <p>Most people who have whiplash feel better within a few weeks and don’t seem to have any lasting effects from the injury. However, some people continue to have pain for several months or years after the injury occurred. This is precisely why everyone who is suspected of having whiplash should reach out to a medical provider to access the situation</p>
            <p>It is difficult to predict how each person with whiplash may recover. In general, you may be more likely to have chronic pain if your first symptoms were intense, started rapidly and included:</p>
            <ul>
              <li>Severe neck pain</li>
              <li>More-limited range of motion</li>
              <li>Pain that spread to the arms</li>
            </ul>
            <p>The following risk factors have been linked to a worse outcome:</p>
            <ul>
              <li>Having had whiplash before</li>
              <li>Older age</li>
              <li>Existing low back or neck pain</li>
              <li>A high-speed injury</li>
            </ul>

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

        {/* How We Treat Whiplash */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
                <span aria-hidden className="h-px w-6 bg-[#3d7a52]/70" />
                Treatment Options
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] leading-[1.15] text-[#13231a] md:text-[40px]">
                How We Treat Whiplash
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TREATMENTS.map((t) => (
                <Link
                  key={t.name}
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
