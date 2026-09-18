import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ConditionShell from "../../components/ConditionShell";

export const metadata: Metadata = {
  title: "Get Help From an Expert Shoulder Pain Doctor in Reno, NV",
  description:
    "Trouble lifting your arm or sleeping on your side? See our shoulder specialist in Reno, NV to repair soft tissue and restore your mobility. Book today!",
  alternates: { canonical: "https://www.renoregen.com/conditions/shoulder-pain/" },
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
  { name: "Joint Injections", href: "/joint-injections/", copy: "Reduce shoulder inflammation and pain at the source without surgery." },
  { name: "Chiropractic Care", href: "/chiropractic-care/", copy: "Restore proper shoulder and upper-back alignment for free, easy movement." },
  { name: "Therapeutic Exercise", href: "/physical-therapy/", copy: "Targeted strengthening for the rotator cuff, scapula, and surrounding muscles." },
  { name: "Physiotherapy", href: "/physical-therapy/", copy: "Hands-on therapy to improve range of motion and rebuild stability." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Condition"
          title="Shoulder Pain Treatment in Reno, NV"
          image="/images/services/joint-injections.jpg"
          imageAlt="Shoulder pain treatment at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions", href: "/conditions/" },
            { label: "Shoulder Pain" },
          ]}
          size="md"
        />
        <ConditionShell>
          <article className={PROSE}>
            <p>Shoulder pain is a very common condition and affects almost half of the U.S. Most patients feel some sort of pain, limited range of motion, an inability to engage in activities of daily living (ADL) or something more serious as a permanent disability.</p>
            <p>The shoulder works with surrounding muscles and tendons to allow for a broad range of motion in the arm. Because of the shoulder’s design, our arms can rotate, push, pull, and lift objects overhead with relative ease. Because we rely on the shoulder for daily movements, wear and tear in the shoulder can often lead to painful shoulder injuries.  The most common problems that people are concerned about are tears in the rotator cuff and arthritis.</p>
            <p>The shoulder is a complicated joint. Because it has a wide range of motion it is also less stable then other joints in the body. This can lead to shoulder problems</p>
            <p>Typical causes of shoulder pain are overuse and trauma. These occur frequently during activities like weightlifting, football, or gymnastics. Common conditions include bursitis, rotator cuff tendonitis/tears, and shoulder impingement.</p>
            <p>Most causes of shoulder pain fall into these two categories:</p>

            <h3>ACUTE</h3>
            <ul>
              <li>Joint Dislocation</li>
              <li>Fracture</li>
              <li>Ligament or muscle tear</li>
            </ul>

            <h3>CHRONIC</h3>
            <ul>
              <li>Inflammation (shoulder tendonitis/tendinitis, shoulder bursitis)</li>
              <li>Arthritis</li>
              <li>Ligament or muscle tears</li>
            </ul>

            <h2>WHAT ARE THE SYMPTOMS OF A SHOULDER INJURY?</h2>
            <p>Symptoms vary depending on the type of shoulder injury. Shoulder injuries will cause pain with movement and may cause weakness in the joint when attempting activities of daily living or sports. Typically, an injury to the shoulder will be painful and easily aggravated by movement.</p>
            <p>Depending on your condition, you may experience any of the following symptoms:</p>
            <ul>
              <li>Dull, aching pain that worsens with activity</li>
              <li>Stiffness or reduced mobility</li>
              <li>Joint swelling or edema</li>
              <li>A clicking sound from the shoulder</li>
              <li>Pain or difficulty raising your arms</li>
              <li>Tenderness to the touch</li>
              <li>Radiating pain into your arm or neck</li>
              <li>Difficulty sleeping</li>
            </ul>

            <h2>Common Shoulder Problems</h2>

            <h3>Rotator Cuff Tears</h3>
            <p>The rotator cuff is part of your shoulder made up of muscles, tendons, and ligaments.  Rotator cuff tears can occur when these structures are damaged. This can happen in a sudden injury or slowly over time due to arthritis or impingement. At reno regenerative medicine we have several options to help people with rotator cuff issues.</p>

            <h3>Arthritis in the shoulder</h3>
            <p>There are a few joints in the shoulder that are all susceptible to arthritis. The glenhumeral joint is the biggest joint in the shoulder and is typically what people think of as their shoulder joint.There is also the AC joint that can develop arthritis that is part of the shoulder as well. Shoulder arthritis develops when there is damage to the joint or laxity in the joint from torn tendons and ligaments , like a rotator cuff tear.</p>

            <h3>Bursitis in the shoulder</h3>
            <p>We have many areas in our bodies that have bursas, these fluid filled sacs help cushion tendons when they insert onto bones. Sometimes these sacs can become irritated and inflamed. When this happens the bursa can become painful. Bursitis is very common in the shoulder in a condition called subacromial bursitis.</p>

            <h3>Frozen shoulder</h3>
            <p>Frozen shoulder, also called adhesive capsulitis, involves stiffness and pain in the shoulder joint along with the loss of range of motion. Signs and symptoms typically begin slowly, then get worse over time. The leading theory of how frozen shoulder occurs is that the ligaments around the shoulder thicken and get tighter. This is painful and causes the range of motion of the shoulder to be limited. Having to keep a shoulder still for a long period increases the risk of developing a frozen shoulder. This might happen after having surgery or breaking an arm.</p>

            <h2>What can I do about my shoulder pain?</h2>
            <p>At Reno Regenerative Medicine our mission is to help people heal naturally without unnecessary drugs and surgery. When patients come to us with joint pain, we do a comprehensive exam including imaging. We then determine if the person is a good candidate for care in our office. If the person is a good candidate, we recommend a care plan that may include:</p>
            <ul>
              <li>Joint injections</li>
              <li>Therapeutic exercise</li>
              <li>Chiropractic care</li>
              <li>Bracing</li>
              <li>Physiotherapy</li>
            </ul>
            <p>In our experience when patients use a combination of these therapies it can have a profound impact on their health that reduces pain and increases function. Our approach is much different than the standard of care. We are trying to help your body heal to solve the problem. Not just treating the symptoms of joint pain.</p>
            <p>Typically, with joint pain, the first thing a person will do is try something at home like heat or ice. They might do stretches or exercises, maybe take some ani-inflammatories to deal with the pain. If that doesn’t work they might try chiropractic or physical therapy. If that doesn’t work, they got to the doctor. At the doctor they most likely get a cortisone injection. The relief from cortisone is usually temporary and you can only get so many cortisone injections in a joint without side effects. After injections the next stop is surgery, and after that more surgery.</p>
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

        {/* How We Treat Shoulder Pain */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
                <span aria-hidden className="h-px w-6 bg-[#3d7a52]/70" />
                Treatment Options
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] leading-[1.15] text-[#13231a] md:text-[40px]">
                How We Treat Shoulder Pain
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TREATMENTS.map((t, i) => (
                <Link
                  key={`${t.href}-${i}`}
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
