import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ConditionShell from "../../components/ConditionShell";

export const metadata: Metadata = {
  title: "Natural Joint Pain Relief to Keep You Moving Comfortably",
  description:
    "Wear and tear can leave your joints stiff and swollen. Reno Regenerative uses targeted injections to repair tissue and calm inflammation. Call us now!",
  alternates: { canonical: "https://www.renoregen.com/conditions/joint-pain/" },
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

const SERVICES: { name: string; href: string; copy: string }[] = [
  { name: "Joint Injections", href: "/joint-injections/", copy: "Targeted relief that calms inflammation and supports tissue healing." },
  { name: "Chiropractic Care", href: "/chiropractic-care/", copy: "Restore alignment so joints move freely and load evenly." },
  { name: "Therapeutic Exercise", href: "/physical-therapy/", copy: "Build strength and stability around painful joints to prevent recurrence." },
  { name: "Spinal Decompression", href: "/spinal-decompression/", copy: "Relieve nerve and joint pressure through gentle, non-invasive traction." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Condition"
          title="Joint Pain Treatment in Reno, NV"
          image="/images/services/joint-injections.jpg"
          imageAlt="Joint pain treatment at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions", href: "/conditions/" },
            { label: "Joint Pain" },
          ]}
          size="md"
        />
        <ConditionShell>
          <article className={PROSE}>
            <h2>What is the cause of joint pain?</h2>
            <p>Acute joint pain is typically the result of an injury or direct trauma while chronic joint pain can be caused by rheumatoid arthritis or osteoarthritis. Chronic joint pain can also develop as a result of an underlying medical condition such as dislocation, infection, osteoporosis, cancer, or fibromyalgia.</p>

            <h2>When should I seek medical care?</h2>
            <p>Joint pain can occur in any joint of the body, but most patients who experience joint pain do so in the knees, hips, shoulders, or spine. Persistent and severe pain that prohibits your ability to complete everyday tasks should be evaluated by a doctor as soon as possible. If you notice redness, joint deformity, swelling, or reduced range of motion, please contact our office to schedule an appointment.</p>

            <h2>What treatments are recommended for joint pain?</h2>
            <p>If over-the-counter medications prove unable to relieve your pain, we may then proceed with other treatments such as prescription medications, epidural steroid injections, or nerve blocks.</p>
            <p>Strengthening the muscles surrounding the joint is important to healing and preventing future flare ups, so we may recommend at-home exercises or physical therapy as well.</p>
            <p>There are many causes of joint pain. The different causes result in differing features, treatments and outcomes.</p>
            <p>Joint pain is discomfort that arises from any joint. The medical word for joint pain is arthralgia. This is different than the word arthritis, which means inflammation of the joint, which causes pain and sometimes warmth, redness and/or swelling of the joint. A joint can be painful without being inflamed, or it can be both painful and inflamed. Joint pain may affect just one joint or it may affect many different joints. The pattern of the joint pain in terms of how many and which joints are affected will depend on the underlying cause.</p>

            <h2>What are the causes of joint pain?</h2>
            <p>There are many causes of joint pain. The cause of joint pain may be obvious, such as following a sports injury. Joint pain may also be caused by different structures in or around the joint. The underlying cause may therefore be a problem with:</p>
            <ul>
              <li>The bones of the joint or near the joint.</li>
              <li>The tendons, ligaments or muscles around the joint.</li>
              <li>The lining of the joint</li>
            </ul>
            <p>Joint pain may also be caused by dysfunction in another part of the body. This is called ‘referred pain’. For example, a problem in your hip may cause you to also feel pain in your knee. Nerve pain also occurs when a herniated disc in your back causes pain in your leg (called sciatica after the sciatic nerve which is often the one being squashed by the out-of-place disc).</p>

            <h2>Causes of joint Pain</h2>
            <ul>
              <li>Joint, bone or soft tissue injuries: injury to the joint for example sprains and strains, fractures, and dislocations.</li>
              <li>Osteoarthritis (OA): the most common form of arthritis. Osteoarthritis can also develop from previous damage to the joint such as a fracture or previous injury or by chronic ‘wear and tear’ of the joint. It may be most noticeable at first in just one joint, such as the knee or hip, but as time goes on usually affects several joints. As well as the knee, hip, and hands, areas in the spine are often affected as well. OA mainly involve damage to the cartilage that covers the ends of the bones. The main job of the smooth, slippery cartilage is to help the joints glide and move smoothly. This type of arthritis causes the cartilage to become thinner, rougher, and sometimes even torn or frayed. To compensate for the loss of cartilage and changes in joint function, the body begins to change the shape of the bone to restore stability in the joint. This can cause undesirable bony growths to develop, called osteophytes or bone spurs.</li>
              <li>Inflammatory Arthritis: causes inflammation, pain, and swelling of joints. Examples are rheumatoid arthritis and psoriatic arthritis.</li>
              <li>Fibromyalgia: causes pains and tenderness in many areas of the body, as well as tiredness and other symptoms.</li>
              <li>Ankylosing spondylitis: this is a form of arthritis. It mainly affects the lower back but other joints and other parts of the body are sometimes affected</li>
              <li>Auto immune diseases – for example, ankylosing spondylitis, systemic lupus erythematosus and scleroderma: connective tissue diseases affect tissues throughout the body, including tendons, ligaments, skin, eyes, cartilage, bone and blood vessels.</li>
            </ul>

            <h2>What can I do about my joint pain?</h2>
            <p>At Reno Regenerative Medicine our mission is to help people heal naturally without unnecessary drugs and surgery. When patients come to us with joint pain, we do a comprehensive exam including imaging. We then determine if the person is a good candidate for care in our office. If the person is a good candidate, we recommend a care plan that may include:</p>
            <ul>
              <li>Joint injections</li>
              <li>Therapeutic exercise</li>
              <li>Chiropractic care</li>
              <li>Bracing</li>
              <li>Physiotherapy</li>
            </ul>
            <p>In our experience when patients use a combination of these therapies it can have a profound impact on their health that reduces pain and increases function. Our approach is much different than the standard of care. We are trying to help your body heal to solve the problem. Not just treating the symptoms of joint pain.</p>
            <p>Typically, with joint pain, the first thing a person will do is try something at home. They might do stretches or exercises, maybe take some ani-inflammatories to deal with the pain. If that doesn’t work they might try chiropractic or physical therapy. If that doesn’t work, they got to the doctor. At the doctor they most likely get a cortisone injection. The relief from cortisone is usually temporary and you can only get so many cortisone injections in a joint without side effects. After injections the next stop is surgery, and after that more surgery.</p>
            <p>It is very difficult to get the results you want by the current standard of care. Our goal is to help people get back to the lifestyle that they want. To get back to the activities they like to do and share these experiences with their loved ones. We have helped thousands of patients with joint pain over the years. The first step to see if we can help you is to schedule a consultation here</p>

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

        {/* Joint Pain Services We Offer */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
                <span aria-hidden className="h-px w-6 bg-[#3d7a52]/70" />
                Treatment Options
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] leading-[1.15] text-[#13231a] md:text-[40px]">
                Joint Pain Services We Offer
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((t) => (
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
