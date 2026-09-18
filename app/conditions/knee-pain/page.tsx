import Link from "next/link";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ConditionShell from "../../components/ConditionShell";

export const metadata: Metadata = {
  title: "Knee Pain | Trusted Knee Pain Doctor in Reno, NV",
  description:
    "Find relief at Reno Regenerative. Explore our Knee Pain page to learn how our Reno pain management clinic can help you. Call now!",
  alternates: { canonical: "https://www.renoregen.com/conditions/knee-pain/" },
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

const FEATURES: { title: string; copy: string; icon: string }[] = [
  { title: "Avoid Surgery & Medication", copy: "Address the root cause of knee pain without invasive procedures or long-term prescriptions.", icon: "M12 2 14.5 8.5 21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.5-.8L12 2z" },
  { title: "Faster Recovery", copy: "Get back to walking, hiking, and the activities you love in weeks — not months of rehab.", icon: "M13 2 4 14h7l-1 8 9-12h-7l1-8z" },
  { title: "Long-Lasting Relief", copy: "Our regenerative approach restores tissue health for sustained, drug-free comfort.", icon: "M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.56.93 6.18 2.44M21 4v6h-6" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Condition"
          title="Knee Pain Treatment in Reno, NV"
          image="/images/services/joint-injections.jpg"
          imageAlt="Knee pain treatment at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions", href: "/conditions/" },
            { label: "Knee Pain" },
          ]}
          size="md"
        />
        <ConditionShell>
          <article className={PROSE}>
            <p>Knee pain is increasingly becoming a more common problem in society. It is a complaint we see frequently. The most common complaint associated with knee pain is considered the normal “wear and tear.” Another ailment that affects the knee is osteoarthritis. The symptoms and progression of osteoarthritis and knee pain can be reduced through our individualized approach to chiropractic care.</p>
            <p>Knee pain is increasingly becoming a more common problem in society. It is a complaint we see frequently. The most common complaint associated with knee pain is considered the normal “wear and tear.” The truth is there is no such thing as normal wear and tear. Osteoarthritis is one of the most common conditions that affect peoples knees. This is a degenerative process that starts when there is dysfunction in the knee. This can be caused be previous injuries or chronic dysfunction.</p>
            <p>The knee joint is the largest joint in the body. It is responsible for much of the lower body’s movement, and is comprised of mucles,cartilage, ligaments, and tendons. The knee is weight bearing and is highly susceptible to many injuries from trauma and from repetitive stress. In addition, multiple muscles are connected to our knees, and can cause pain to radiate from different areas.</p>
            <p>Some people are more likely to develop knee problems than others. Many jobs, sports, and recreational activities can increase your chances of having problems with your knees. Your risk is also greater as you get older.</p>
            <p>A few common knee injuries include:</p>
            <ul>
              <li>Knee Osteoarthritis</li>
              <li>Patellar Tendonitis (Jumper’s knee)</li>
              <li>Knee Bursitis (inflammation of fluid filled sacs near your knee joint)</li>
              <li>Knee Sprains or strains</li>
              <li>Ligament tears, sprains, or strains</li>
              <li>Osgood-Schlatter Disease</li>
              <li>IT (Iliotibial) Band Syndrome</li>
            </ul>

            <h2>WHAT ARE THE CAUSES?</h2>
            <p>Many knee pain causes are the result of a traumatic injury. Sudden (acute) injuries may be caused by a direct blow to the knee or from abnormal twisting, bending the knee, or falling on the knee.</p>
            <p>Overuse injuries occur with repetitive activities or repeated or prolonged pressure on the knee. Activities such as stair climbing, running, or jumping stress joints and other tissues can lead to irritation and inflammation.</p>
            <p>Knee pain can often happen because of tightness in another part of the body such as in the adductor muscles, hip flexors, quadriceps, and hamstrings. Tight muscles and joints can change how the knee responds to impact from walking or running.</p>
            <p>Other common causes of knee pain include a Baker Cyst (a buildup of synovial fluid, or joint fluid that helps with lubrication, behind the knee), rheumatoid arthritis, knee dislocation, a torn meniscus (a rupture in one or more of the cartilages in the knee), or a torn ligament.</p>

            <h2>WHAT are common symptoms of knee pain?</h2>
            <p>Although the causes may be different, most often they share the same symptoms, including:</p>
            <ul>
              <li>Pain, swelling, or bruising may be can be mild to severe and develop quickly or gradually</li>
              <li>The severity of the pain can vary, from a minor ache to a severe disabling pain.</li>
              <li>Knee pain can be localized, such as in the front of your knee, or diffuse throughout the knee, depending on which structure is involved.</li>
              <li>You may experience trouble walking, limping due to discomfort, or locking of the knee joint.</li>
              <li>The pain can vary depending on what bones of the knee are involved, such as the knee joint (femur, tibia, fibula), the kneecap (patella), or the ligaments and cartilage (meniscus) of the knee.</li>
              <li>Other problems can develop due to overcompensating for knee pain and favoring one leg over the other.</li>
            </ul>

            <h2>WHAT ARE THE TREATMENT OPTIONS?</h2>
            <p>At Reno Regenerative Medicine our mission is to help people heal naturally without unnecessary drugs and surgery. When patients come to us with knee pain, we do a comprehensive exam including imaging. We then determine if the person is a good candidate for care in our office. If the person is a good candidate, we recommend a care plan that may include:</p>
            <ul>
              <li>Joint injections</li>
              <li>Therapeutic exercise</li>
              <li>Chiropractic care</li>
              <li>Bracing</li>
              <li>Physiotherapy</li>
            </ul>
            <p>In our experience when patients use a combination of these therapies it can have a profound impact on their health that reduces pain and increases function in their knee. Our approach is much different than the standard of care. We are trying to help your body heal to solve the problem. Not just treating the symptoms of joint pain.</p>
            <p>Typically, with knee pain, the first thing a person will do is try something at home like heat or ice. They might do stretches or exercises, maybe take some ani-inflammatories to deal with the pain. If that doesn’t work they might try chiropractic or physical therapy. If that doesn’t work, they got to the doctor. At the doctor they most likely get a cortisone injection. The relief from cortisone is usually temporary and you can only get so many cortisone injections in a joint without side effects. After injections the next stop is surgery, and after that more surgery.</p>
            <p>It is very difficult to get the results you want by the current standard of care. Our goal is to help people get back to the lifestyle that they want. To get back to the activities they like to do and share these experiences with their loved ones. We have helped thousands of patients with joint pain over the years. The first step to see if we can help you is to schedule a consultation.</p>

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

        {/* Why Choose Non-Surgical Knee Care */}
        <section className="bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] py-20 text-white md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d99a]">
                <span aria-hidden className="h-px w-6 bg-[#f3d99a]/70" />
                Non-Surgical Knee Care
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] leading-[1.15] md:text-[42px]">
                Why Choose Non-Surgical Knee Care?
              </h2>
            </div>
            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f3d99a] to-[#c6b180] text-[#0a120d]">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d={f.icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-serif-display text-[24px] leading-tight">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-white/75">{f.copy}</p>
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
