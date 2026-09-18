import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ConditionShell from "../../components/ConditionShell";

export const metadata: Metadata = {
  title: "Back Pain | Effective Back Pain Treatment in Sparks, NV",
  description:
    "Don't let back aches keep you from living fully. We offer non-surgical care in Sparks to help you move comfortably again. Contact our Sparks clinic today.",
  alternates: { canonical: "https://www.renoregen.com/conditions/back-pain/" },
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
  { name: "Spinal Decompression", href: "/spinal-decompression/", copy: "Gentle, non-invasive traction to relieve disc pressure and promote natural healing." },
  { name: "Chiropractic Care", href: "/chiropractic-care/", copy: "Hands-on adjustments that restore proper spinal alignment and movement." },
  { name: "Joint Injections", href: "/joint-injections/", copy: "Targeted injections that reduce inflammation and ease pain at the source." },
  { name: "Therapeutic Exercise", href: "/physical-therapy/", copy: "Personalized movement plans to rebuild strength, mobility, and stability." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Condition"
          title="Back Pain Treatment in Reno, NV"
          image="/images/services/spinal-decompression.jpg"
          imageAlt="Back pain treatment at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions", href: "/conditions/" },
            { label: "Back Pain" },
          ]}
          size="md"
        />
        <ConditionShell>
          <article className={PROSE}>
            <p>Back pain is one of the most common medical problems in the United States. It is the #1 reason for a doctor to write a prescription for narcotics. Back pain can range from a dull, constant ache to sudden, sharp pain. Sometimes it can come on suddenly – from an accident, a fall, or lifting something heavy, or it can develop slowly because of age-related degenerative changes to the spine. In some cases, inflammatory disorders or other medical conditions cause back pain.</p>

            <p>Treatment varies depending on the cause and symptoms; however, there are steps you can take to improve your health and lower your chance of developing chronic long-lasting back pain. If you are already experiencing chronic back pain, there are still things you can do to help alleviate the pain and reduce your need of drugs and back surgery.</p>

            <h2>Understanding the Anatomy of the Back</h2>
            <p>There are many different structures in the anatomy of the back that work together to support your body. Problems with any one of these structures can cause back pain.</p>
            <p>There are four regions of the spine:</p>
            <ul>
              <li>Cervical spine (neck)</li>
              <li>Thoracic spine (mid back)</li>
              <li>Lumbar spine (low back)</li>
              <li>Sacrum and coccyx (tailbone)</li>
            </ul>
            <p>Parts of the spine and back include:</p>
            <ul>
              <li>Vertebrae – small bones stacked on top of one another, which protect the spinal cord.</li>
              <li>Spinal cord – a long bundle of nerves that run down the back through a canal in the vertebrae.</li>
              <li>Intervertebral discs – cushion-like pads between the vertebrae that act like shock absorbers and spacers for the spine.</li>
              <li>Ligaments – short bands of tough, flexible tissue that hold the vertebrae in place.</li>
              <li>Tendons – cord of tissue that connects muscle to bone.</li>
              <li>Muscles – a bundle of dynamic fibers that support your spine and upper body and help you move.</li>
            </ul>

            <h2>Who Gets Back Pain?</h2>
            <p>Anyone can experience back pain; however, there are several factors that increase your risk. Risk factors include;</p>
            <ul>
              <li>Fitness level: People’s fitness level plays a big role for those experiencing back pain. Back pain is more common among those who are not physically fit. For example, weak muscles can increase a person’s chance of having back pain. Back pain is also more likely if you exercise too strenuously after being inactive for a while.</li>
              <li>Weight gain: A diet high in calories, carbohydrates, and sugar, combined with an inactive lifestyle, can lead to obesity. This can put stress on the back</li>
              <li>Job-related risk factors: Jobs that require heavy lifting, pushing, pulling, or twisting can injure the back. A desk job may also play a role, especially if you have poor posture or sit all day in an uncomfortable chair.</li>
              <li>Age: Back pain becomes more common with age, particularly after the age of 45. This is commonly due to spinal degeneration, arthritis and degenerative disc disease. However, even young people can have back pain.</li>
              <li>Heredity: Genetics can play a role in some disorders and disease procesess that cause back pain.</li>
            </ul>

            <h2>Types of Back Pain</h2>
            <p>Doctors and researchers describe the types of back pain in the following ways:</p>
            <ul>
              <li>Acute back pain happens suddenly and usually lasts a few days to a few weeks.</li>
              <li>Subacute back pain can come on suddenly or over time and lasts 4 to 12 weeks.</li>
              <li>Chronic back pain may come on quickly or slowly and lasts longer than 12 weeks.</li>
            </ul>

            <h2>Symptoms of Back Pain</h2>
            <p>Back pain can range from local pain in a specific spot to generalized pain spreading all over the back. Sometimes the pain radiates down towards your buttocks, legs, or abdomen. The intensity of back pain varies for each person. People can experience back pain from many different situations, these include;</p>
            <ul>
              <li>Increasing pain with lifting and bending.</li>
              <li>Worsening pain when resting, sitting, or standing.</li>
              <li>Back pain that comes and goes.</li>
              <li>Stiffness in the morning when awakening and lessened back pain with activity.</li>
              <li>Pain while sleeping</li>
              <li>Pain during different activities such as, running, skiing, golfing, -liftweights etc.</li>
              <li>Pain that radiates away from the back into the buttocks, leg, or hip.</li>
              <li>Extreme pain that could nearly imobilize you for a period of time</li>
            </ul>
            <p>You should seek a consultation with a medical provider if your pain does not improve after a few weeks or if any of the following symptoms happen with your back pain:</p>
            <ul>
              <li>Numbness and tingling</li>
              <li>Severe back pain that does not improve with medication</li>
              <li>Back pain after a fall or injury</li>
              <li>
                Back pain along with:
                <ul>
                  <li>Trouble urinating</li>
                  <li>Weakness, pain, or numbness in your legs</li>
                  <li>Fever</li>
                  <li>Weight loss that you did not intend</li>
                </ul>
              </li>
            </ul>

            <h2>Causes of Back Pain</h2>
            <p>Back pain can be caused by many different things, including mechanical or structural problems with the spine, inflammatory conditions, and other medical conditions.</p>

            <h3>Mechanical/Structural Problems</h3>
            <p>Back pain can happen when mechanical or structural problems develop in the spine, discs, muscles, ligaments, or tendons in the back.</p>
            <ul>
              <li>Sprain: an injury to the ligaments that support the spine, often occurring from twisting or lifting improperly.</li>
              <li>Strain: an injury to a muscle or tendon in the back or neck.</li>
              <li>Degenerative disc disease: wear and tear causes the discs between the vertebrae of the spine to break down.</li>
              <li>Herniated or ruptured discs: the discs compress and irritate nearby nerves. This often occurs at the lumbar and cervical level.</li>
              <li>Spondylolisthesis: a vertebra in the spine slips out of place.</li>
              <li>Spinal stenosis: a narrowing of the spinal column that puts pressure on the spinal cord and nerves.</li>
              <li>Fractured vertebrae.</li>
              <li>Scoliosis or other congenital changes to the spine.</li>
            </ul>

            <h3>Inflammatory Conditions</h3>
            <ul>
              <li>Ankylosing spondylitis a specific type of arthritis of the spine.</li>
              <li>Other types of inflammatory arthritis of the spine.</li>
            </ul>

            <h3>Other Medical Conditions</h3>
            <ul>
              <li>Osteoporosis, which can lead to painful fractures of the vertebrae.</li>
              <li>Fibromyalgia, a condition of widespread muscle pain and fatigue.</li>
              <li>Kidney stones or infections.</li>
              <li>Endometriosis, which is the buildup of uterine tissue in places outside the uterus.</li>
              <li>Infections that involve the bones of the spine or the discs between these bones, which can cause pain.</li>
              <li>Tumors, in rare cases, that develop on the spine or other areas of the back.</li>
              <li>Pregnancy.</li>
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

        {/* How We Treat Back Pain */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
                <span aria-hidden className="h-px w-6 bg-[#3d7a52]/70" />
                Treatment Options
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] leading-[1.15] text-[#13231a] md:text-[40px]">
                How We Treat Back Pain
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
