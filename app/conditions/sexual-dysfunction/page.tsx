import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ConditionShell from "../../components/ConditionShell";

export const metadata: Metadata = {
  title: "Restorative Care for Men Experiencing Sexual Dysfunction",
  description:
    "Intimacy struggles like ED can be deeply frustrating. We use therapies like ED shockwave therapy to improve blood flow and restore confidence. Reach out now.",
  alternates: { canonical: "https://www.renoregen.com/conditions/sexual-dysfunction/" },
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

const OPTIONS: { name: string; href: string; copy: string }[] = [
  { name: "ED Shockwave Therapy", href: "/ed-shockwave-therapy/", copy: "Acoustic wave therapy that improves blood flow and sexual function for men." },
  { name: "Bioidentical Hormones", href: "/bioidentical-hormone-optimization-therapy/", copy: "Restore healthy testosterone, estrogen, and progesterone levels with BHRT." },
  { name: "Hormone Optimization", href: "/conditions/hormonal-imbalance/", copy: "A whole-body approach to balancing the hormones behind libido and intimacy." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Condition"
          title="Sexual Dysfunction Treatment in Reno, NV"
          image="/images/services/joint-injections.jpg"
          imageAlt="Sexual dysfunction care at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions", href: "/conditions/" },
            { label: "Sexual Dysfunction" },
          ]}
          size="md"
        />
        <ConditionShell>
          <article className={PROSE}>
            <p>Sexual dysfunction is a common problem among both men and women. It can be caused by physical problems and medical conditions, such as heart disease and hormone imbalances, or by psychological problems, like anxiety, depression and the effects of past trauma.</p>

            <h2>What is sexual dysfunction in males?</h2>
            <p>Sexual dysfunction is any physical or psychological problem that prevents you or your partner from getting sexual satisfaction. Male sexual dysfunction is a common health problem affecting men of all ages, but is more common with increasing age. Treatment can often help men suffering from sexual dysfunction.</p>
            <p>The main types of male sexual dysfunction are:</p>
            <ul>
              <li>Erectile dysfunction (difficulty getting/keeping an erection).</li>
              <li>Premature ejaculation (reaching orgasm too quickly).</li>
              <li>Delayed or inhibited ejaculation (reaching orgasm too slowly or not at all).</li>
              <li>Low libido (reduced interest in sex).</li>
            </ul>

            <h2>SYMPTOMS AND CAUSES</h2>
            <h3>What causes sexual dysfunction in males?</h3>
            <p>Physical causes of overall sexual dysfunction may be:</p>
            <ul>
              <li>Low testosterone levels.</li>
              <li>Prescription drugs (antidepressants, high blood pressure medicine).</li>
              <li>Blood vessel disorders such as atherosclerosis (hardening of the arteries) and high blood pressure.</li>
              <li>Stroke or nerve damage from diabetes or surgery.</li>
              <li>Smoking.</li>
              <li>Alcoholism and drug abuse.</li>
            </ul>
            <p>Psychological causes might include:</p>
            <ul>
              <li>Concerns about sexual performance.</li>
              <li>Marital or relationship problems.</li>
              <li>Depression</li>
              <li>Effects of past sexual trauma.</li>
              <li>Work-related stress and anxiety.</li>
            </ul>

            <h3>Premature Ejaculation</h3>
            <p>Studies suggest that the breakdown of serotonin (a natural chemical that affects mood) may play a role in PE. Certain drugs, including some antidepressants, may affect ejaculation, as can nerve damage to the back or spinal cord.</p>
            <p>Physical causes for inhibited or delayed ejaculation may include chronic (long-term) health problems, medication side effects, alcohol abuse, or surgeries. The problem can also be caused by psychological factors such as depression, anxiety, stress or relationship problems.</p>

            <h3>Erectile dysfunction (ED)</h3>
            <p>Erectile dysfunction (ED) is the inability to get and keep an erection for sexual intercourse. ED is quite common, with studies showing that about one-half of American men over age 40 are affected. Causes of ED include:</p>
            <ul>
              <li>Diseases affecting blood flow such as hardening of the arteries.</li>
              <li>Nerve disorders.</li>
              <li>Stress, relationship conflicts, depression and performance anxiety.</li>
              <li>Injury to the penis.</li>
              <li>Chronic illness such as diabetes and high blood pressure.</li>
              <li>Unhealthy habits like smoking, drinking too much alcohol, overeating and lack of exercise.</li>
            </ul>

            <h3>Low libido (reduced sexual desire)</h3>
            <p>Low libido means your desire or interest in sex has decreased. The condition is often linked with low levels of the male hormone testosterone. Testosterone maintains sex drive, sperm production, muscle, hair and bone. Low testosterone can affect your body and mood.</p>
            <p>Reduced sexual desire may also be caused by depression, anxiety or relationship difficulties. Diabetes, high blood pressure, and certain medications like antidepressants may also contribute to a low libido.</p>

            <h2>DIAGNOSIS AND TESTS</h2>
            <h3>How is male sexual dysfunction diagnosed?</h3>
            <p>Your doctor may begin the diagnosis process with a physical exam. Physical tests may include:</p>
            <ul>
              <li>Blood tests to check your testosterone levels, blood sugar (for diabetes) and cholesterol.</li>
              <li>Blood pressure check.</li>
              <li>Rectal exam to check your prostate.</li>
              <li>Examination of your penis and testicles.</li>
            </ul>

            <h2>MANAGEMENT AND TREATMENT</h2>
            <h3>How is male sexual dysfunction treated?</h3>
            <p>Many cases of sexual dysfunction can be corrected by treating the mental or physical problems that cause it. Treatments include:</p>
            <ul>
              <li>Medications: Drugs that help improve sexual function by increasing blood flow to the penis. Sildenafil (Viagra®), vardenafil (Levitra®), and tadalafil (Cialis®) are safe and effective for most men.</li>
              <li>Hormone therapy: Low levels of testosterone raised by hormone replacement therapies that include injections, patches or gels.</li>
              <li>Psychological therapy: A psychological counselor to help you address feelings of anxiety, depression, fear or guilt that may affect sexual function.</li>
              <li>Mechanical aids: Vacuum devices and penile implants that can help some men with erectile dysfunction.</li>
              <li>ED Shockwave Therapy</li>
              <li>PShot</li>
            </ul>

            <h2>PREVENTION</h2>
            <h3>Can male sexual dysfunction be prevented?</h3>
            <p>While male sexual dysfunction cannot be prevented, dealing with the causes of the dysfunction can help you better understand and cope with the problem when it happens. To help maintain good sexual function you should follow the same program that is recommended to maintain cardiovascular health.</p>
            <ul>
              <li>Follow your doctor’s treatment plan for any of your medical/health conditions.</li>
              <li>Limit your alcohol intake.</li>
              <li>Quit smoking.</li>
              <li>Eat a heart healthy diet (the Mediterranean diet is often recommended).</li>
              <li>Get regular aerobic and weight training exercise.</li>
              <li>Get treatment if needed for any emotional or psychological problems such as stress, depression and anxiety.</li>
              <li>Communicate better and more often with your partner.</li>
            </ul>

            <h2>Female Sexual Dysfunction</h2>
            <h3>Overview</h3>
            <p>Persistent, recurrent problems with sexual response, desire, orgasm or pain — that distress you or strain your relationship with your partner — are known medically as sexual dysfunction.</p>
            <p>Many women experience problems with sexual function at some point, and some have difficulties throughout their lives. Female sexual dysfunction can occur at any stage of life. It can occur only in certain sexual situations or in all sexual situations.</p>
            <p>Sexual response involves a complex interplay of physiology, emotions, experiences, beliefs, lifestyle and relationships. Disruption of any component can affect sexual desire, arousal or satisfaction, and treatment often involves more than one approach.</p>

            <h3>Symptoms</h3>
            <p>Symptoms vary depending on what type of sexual dysfunction you’re experiencing:</p>
            <ul>
              <li>Low sexual desire. This most common of female sexual dysfunctions involves a lack of sexual interest and willingness to be sexual.</li>
              <li>Sexual arousal disorder. Your desire for sex might be intact, but you have difficulty with arousal or are unable to become aroused or maintain arousal during sexual activity.</li>
              <li>Orgasmic disorder. You have persistent or recurrent difficulty in achieving orgasm after sufficient sexual arousal and ongoing stimulation.</li>
              <li>Sexual pain disorder. You have pain associated with sexual stimulation or vaginal contact.</li>
            </ul>

            <h3>Causes</h3>
            <p>Sexual problems often develop when your hormones are in flux, such as after having a baby or during menopause. Major illness, such as cancer, diabetes, or heart and blood vessel (cardiovascular) disease, can also contribute to sexual dysfunction.</p>
            <p>Factors — often interrelated — that contribute to sexual dissatisfaction or dysfunction include:</p>
            <p>Any number of medical conditions, including cancer, kidney failure, multiple sclerosis, heart disease and bladder problems, can lead to sexual dysfunction. Certain medications, including some antidepressants, blood pressure medications, antihistamines and chemotherapy drugs, can decrease your sexual desire and your body’s ability to experience orgasm.</p>
            <p>Lower estrogen levels after menopause may lead to changes in your genital tissues and sexual responsiveness. A decrease in estrogen leads to decreased blood flow to the pelvic region, which can result in less genital sensation, as well as needing more time to build arousal and reach orgasm.</p>
            <p>The vaginal lining also becomes thinner and less elastic, particularly if you’re not sexually active. These factors can lead to painful intercourse (dyspareunia). Sexual desire also decreases when hormonal levels decrease.</p>
            <p>Your body’s hormone levels also shift after giving birth and during breast-feeding, which can lead to vaginal dryness and can affect your desire to have sex.</p>
            <p>Psychological and social. Untreated anxiety or depression can cause or contribute to sexual dysfunction, as can long-term stress and a history of sexual abuse. The worries of pregnancy and demands of being a new mother may have similar effects.</p>
            <p>Long-standing conflicts with your partner — about sex or other aspects of your relationship — can diminish your sexual responsiveness as well. Cultural and religious issues and problems with body image also can contribute.</p>

            <h3>Risk factors</h3>
            <p>Some factors may increase your risk of sexual dysfunction:</p>
            <ul>
              <li>Depression or anxiety</li>
              <li>Heart and blood vessel disease</li>
              <li>Neurological conditions, such as spinal cord injury or multiple sclerosis</li>
              <li>Gynecological conditions, such as vulvovaginal atrophy, infections or lichen sclerosus</li>
              <li>Certain medications, such as antidepressants or high blood pressure medications</li>
              <li>Emotional or psychological stress, especially with regard to your relationship with your partner</li>
              <li>A history of sexual abuse</li>
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

        {/* Our Treatment Options */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
                <span aria-hidden className="h-px w-6 bg-[#3d7a52]/70" />
                What We Offer
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] leading-[1.15] text-[#13231a] md:text-[40px]">
                Our Treatment Options
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {OPTIONS.map((t) => (
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
