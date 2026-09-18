import Link from "next/link";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ConditionShell from "../../components/ConditionShell";

export const metadata: Metadata = {
  title: "Find Your Spark Again With Hormonal Imbalance Care",
  description:
    "Unexplained fatigue, weight gain, and brain fog often stem from shifting hormones. We use bioidentical therapy to restore balance. Visit us!",
  alternates: { canonical: "https://www.renoregen.com/conditions/hormonal-imbalance/" },
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

const STEPS: { step: string; title: string; copy: string }[] = [
  { step: "01", title: "Lab Work & Bloodwork", copy: "We start with comprehensive testing to map your unique hormone profile." },
  { step: "02", title: "Custom Hormone Plan", copy: "Your provider designs a bioidentical therapy plan tailored to your results and goals." },
  { step: "03", title: "Ongoing Monitoring", copy: "Regular rechecks and dose adjustments keep you balanced as your body responds." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Condition"
          title="Hormonal Imbalance Treatment in Reno, NV"
          image="/images/services/joint-injections.jpg"
          imageAlt="Hormonal imbalance care at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions", href: "/conditions/" },
            { label: "Hormonal Imbalance" },
          ]}
          size="md"
        />
        <ConditionShell>
          <article className={PROSE}>
            <h2>What Causes Hormonal Imbalance?</h2>
            <p>When there is too much or too little of a particular hormone in our bloodstream, we can suffer from a hormone imbalance. For women hormonal imbalances are more common during puberty, pregnancy, and menstruation. Even if the imbalances are small, they can cause side effects in your body.</p>
            <p>Hormones regulate most major body functions and processes. They regulate our metabolism and appetite, our heart rate, sleep cycle, growth and development, mood and stress level, body temperature, plus reproductive cycles and sexual functions.</p>
            <p>While some hormones fluctuate throughout your lifetime and may just be due to aging, your signs of hormonal imbalance will depend on what hormones or glands aren’t working properly.</p>

            <h2>Typical Signs of Hormonal Imbalance In Women</h2>
            <p>Symptoms associated with the most common causes of hormonal imbalance include the following;</p>
            <ul>
              <li>Unexplained weight gain or loss</li>
              <li>Problems sleeping</li>
              <li>Excessive sweating</li>
              <li>Very dry skin and rashes</li>
              <li>Irritability and anxiety</li>
              <li>Long term fatigue</li>
              <li>Increased thirst</li>
              <li>Changes in blood pressure, heart rate, and blood sugar</li>
              <li>Decreased sex drive</li>
              <li>Infertility</li>
            </ul>
            <p>Women suffering with hormonal imbalance have many of the above symptoms, but they also have some additional signs like heavy, irregular, or painful periods, hot flashes, breast tenderness, acne before and during menstruation, hair growth on the face, neck, back, or chest, skin tags, deepening voice, clitoral enlargement, and darkening of the skin along neck creases, in the groin area, and under breasts.</p>

            <h2>Treatments For Hormonal Imbalance</h2>
            <p>Hormone replacement therapy (HRT) is used commonly to balance hormones in women after menopause. It is used for a certain period of time before being discontinued.</p>
            <p>Bioidentical hormones are another way to balance out hormones. They are man-made hormones similar to those in our bodies like estrogen, progesterone, and testosterone. They are advertised as being safer and more natural than conventional HRT.</p>
            <p>At this time, medical societies and researchers state that the risks and benefits of conventional and bioidentical hormones should be considered equal. Talk with Reno Regenerative Medicine about their use if you are having symptoms.</p>
            <p>Men tend to accept changes in their bodies as just part of the aging process. However, most symptoms of “aging” are actually caused by a hormone imbalance, which affects not only testosterone, but also cortisol and thyroid levels. It is true that as men age, they are more likely to experience male hormone imbalance, but there are other contributing factors as well. Here is what you should know about this common but underreported condition.</p>

            <h2>The Importance of Hormones</h2>
            <p>Hormones regulate the various systems in the human body, including digestion, growth, metabolism, mood, movement, reproduction, respiration, stress, and tissue function, among others. When your hormones are unbalanced, it can affect virtually all aspects of your overall health and functioning.</p>

            <h2>Contributing Factors to Male Hormone Imbalance</h2>
            <p>Aging definitely plays a role in male hormone imbalance. Male growth hormones tend to steadily decrease after the age of 20. By age 40, most men retain only half of their original growth hormones, and by age 80 they typically retain only 5%. Still, this can be affected by other factors, including:</p>
            <ul>
              <li>Activity level</li>
              <li>Dietary choices</li>
              <li>Genetics</li>
              <li>Injuries</li>
              <li>Medications</li>
              <li>Stress</li>
            </ul>

            <h2>Symptoms of Male Hormone Imbalance</h2>
            <p>It is easy to chalk up the symptoms of a hormone imbalance to other factors, such as tiredness and overwork, especially in the beginning. Over time, though, these symptoms tend to worsen until they start changing your way of life. Here are just a few of the most common symptoms:</p>
            <ul>
              <li>Cognitive decline</li>
              <li>Depression</li>
              <li>Erectile dysfunction</li>
              <li>Fatigue</li>
              <li>Hair loss</li>
              <li>Loss of muscle mass</li>
              <li>Low sex drive</li>
              <li>Memory loss</li>
              <li>Weight gain</li>
            </ul>

            <h2>Types of Male Hormone Imbalance</h2>
            <p>Most male hormone imbalances fall into one of four types:</p>
            <ul>
              <li>Andropause: Also known as male menopause, this is the most common type of male hormonal imbalance.</li>
              <li>Hypothyroidism: This condition occurs when the thyroid gland becomes underactive.</li>
              <li>Hyperthyroidism: This condition occurs when the thyroid gland becomes overactive</li>
            </ul>

            <h2>Treating Male Hormone Imbalance</h2>
            <p>Fortunately, male hormone imbalance can be successfully treated. The treatment of choice is typically Bio-Identical Hormone Replacement Therapy (BHRT). This natural solution uses biologically identical replacement hormones, available in pill, cream, gel, and skin patch forms, to gently rebalance your hormone levels.</p>
            <p>The hormones are derived from natural sources and have virtually no side effects when properly used. We will prescribe and adjust them based on your unique needs. We may also recommend changes in diet, exercise, and overall lifestyle to support your hormone replacement therapy and maximize the benefits.</p>

            <h2>What does treatment for hormone imbalance look like at Reno Regenerative Medicine?</h2>
            <p>The first step in doing hormone optimization is a thorough exam and bloodwork to see what hormones you may or may not need. When we have the results we start you on a hormone plan. After thirty days we will check you blood again looking for changes in hormone levels. Your provider may adjust your plan at this time so that your hormones are optimized. We will continue to monitor your hormone levels every few months to ensure the best results.</p>

            <h2>Benefits of Hormone optimization may include</h2>
            <ul>
              <li>Increased muscle strength and mass</li>
              <li>Increased sexual potency and frequency</li>
              <li>Lower cholesterol levels</li>
              <li>Increased energy, stamina and endurance</li>
              <li>Improved mental functioning and ability</li>
              <li>Improves mood and feeling of well-being</li>
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

        {/* Take the First Step */}
        <section className="bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] py-20 text-white md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d99a]">
                <span aria-hidden className="h-px w-6 bg-[#f3d99a]/70" />
                Your Path Forward
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] leading-[1.15] md:text-[42px]">
                Take the First Step
              </h2>
            </div>
            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.step} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f3d99a] to-[#c6b180] font-serif-display text-[20px] text-[#0a120d]">
                    {s.step}
                  </div>
                  <h3 className="mt-6 font-serif-display text-[24px] leading-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-white/75">{s.copy}</p>
                </div>
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
