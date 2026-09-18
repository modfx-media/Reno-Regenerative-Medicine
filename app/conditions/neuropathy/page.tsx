import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ConditionShell from "../../components/ConditionShell";

export const metadata: Metadata = {
  title: "Neuropathy | Relief From Nerve Pain",
  description:
    "Neuropathy often causes numbness that throws off your balance. Reno Regenerative aims to heal damaged nerves naturally, improving your daily comfort. Visit us!",
  alternates: { canonical: "https://www.renoregen.com/conditions/neuropathy/" },
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

const APPROACH: { name: string; href: string; copy: string }[] = [
  { name: "Trigger Point Injections", href: "/trigger-point-injections/", copy: "Quiet hyperactive muscle knots and ease referred nerve pain." },
  { name: "Nutritional IVs", href: "/nutritional-ivs/", copy: "Replenish key vitamins and minerals that support nerve health and repair." },
  { name: "Therapeutic Exercise", href: "/physical-therapy/", copy: "Targeted movement to improve circulation, balance, and strength." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Condition"
          title="Neuropathy Treatment in Reno, NV"
          image="/images/services/joint-injections.jpg"
          imageAlt="Neuropathy treatment at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions", href: "/conditions/" },
            { label: "Neuropathy" },
          ]}
          size="md"
        />
        <ConditionShell>
          <article className={PROSE}>
            <p>Neuropathy is a medical condition caused by damaged nerve cells and often associated with autoimmune diseases, infections, diabetes, tumors, or hereditary conditions. Peripheral neuropathy currently affects over 20 million people in the United States with symptoms ranging from tingling or burning pain and nausea to muscle spasms, difficulty moving your arms or legs, or atrophy.</p>

            <h2>What is peripheral neuropathy?</h2>
            <p>Peripheral neuropathy refers to the many conditions that involve damage to the peripheral nervous system. Our bodies have millions of nerves that send signals between the central nervous system (the brain and spinal cord) and all other parts of the body. Peripheral nerves send many types of sensory information to the central nervous system (CNS), such as a message that the feet are cold. They also carry signals from the CNS to the rest of the body. Best known are the signals to the muscles that tell them to contract, which is how we move, but there are different types of signals that help control everything from our heart and blood vessels, digestion, urination, sexual function, to our bones and immune system. The peripheral nerves are like the cables that connect the different parts of a computer or connect the Internet. When they malfunction, complex functions can grind to a halt.</p>
            <p>More than 20 million people in the United States have been estimated to have some form of peripheral neuropathy, but this figure may be significantly higher—not all people with symptoms of neuropathy are tested for the disease and tests currently don’t look for all forms of neuropathy. Neuropathy is often misdiagnosed due to its complex array of symptoms.</p>

            <h2>What are the symptoms of peripheral nerve damage?</h2>
            <p>Symptoms are related to the type of nerves affected.</p>
            <p>Motor nerve damage is most commonly associated with muscle weakness. Other symptoms include painful cramps, fasciculations (uncontrolled muscle twitching visible under the skin) and muscle shrinking.</p>
            <p>Sensory nerve damage causes various symptoms because sensory nerves have a broad range of functions.</p>
            <p>Damage to large sensory fibers harms the ability to feel vibrations and touch, especially in the hands and feet. You may feel as if you are wearing gloves and stockings even when you are not. This damage may contribute to the loss of reflexes (as can motor nerve damage). Loss of position sense often makes people unable to coordinate complex movements like walking or fastening buttons or maintaining their balance when their eyes are shut.</p>
            <p>The “small fibers” without myelin sheaths (protective coating, like insulation that normally surrounds a wire) include fiber extensions called axons that transmit pain and temperature sensations. Small-fiber neuropathy can interfere with the ability to feel pain or changes in temperature. It is often difficult for medical caregivers to control, which can seriously affect a patient’s emotional well-being and overall quality of life. Neuropathic pain is sometimes worse at night, disrupting sleep. It can be caused by pain receptors firing spontaneously without any known trigger, or by difficulties with signal processing in the spinal cord that may cause you to feel severe pain (allodynia) from a light touch that is normally painless. For example, you might experience pain from the touch of your bedsheets, even when draped lightly over the body.</p>
            <p>Autonomic nerve damage affects the axons in small-fiber neuropathies. Common symptoms include excess sweating, heat intolerance, inability to expand and contract the small blood vessels that regulate blood pressure, and gastrointestinal symptoms. Although rare, some people develop problems eating or swallowing if the nerves that control the esophagus are affected.</p>
            <p>There are several types of peripheral neuropathies, the most common of which is linked to diabetes. Another serious polyneuropathy is Guillain-Barre syndrome, which occurs when the body’s immune system mistakenly attacks the nerves in the body. Common types of focal (located to just one part of the body) mononeuropathy include carpal tunnel syndrome, which affects the hand and the wrist, and neuralgia paresthetica, which causes numbness and tingling on one thigh. Complex regional pain syndrome is a class of lingering neuropathies where small-fibers are mostly damaged.</p>

            <h2>What are the causes of peripheral neuropathy?</h2>
            <p>Most instances of neuropathy are either acquired, meaning the neuropathy or the inevitability of getting it isn’t present from the beginning of life, or genetic. Acquired neuropathies are either symptomatic (the result of another disorder or condition; see below) or idiopathic (meaning it has no known cause).</p>
            <p>Causes neuropathy include:</p>
            <p>Physical injury (trauma) is the most common cause of acquired single-nerve injury. Injury from automobile accidents, falls, sports, and medical procedures can stretch, crush, or compress nerves, or detach them from the spinal cord. Less severe traumas also can cause serious nerve damage. Broken or dislocated bones can exert damaging pressure on neighboring nerves and slipped disks between vertebrae can compress nerve fibers where they emerge from the spinal cord. Arthritis, prolonged pressure on a nerve (such as by a cast) or repetitive, forceful activities can cause ligaments or tendons to swell, which narrows slender nerve pathways. Ulnar neuropathy and carpal tunnel syndrome are common types of neuropathy from trapped or compressed nerves at the elbow or wrist. In some cases, there are underlying medical causes (such as diabetes) that prevent the nerves from tolerating the stresses of everyday living.</p>
            <p>Diabetes is the leading cause of polyneuropathy in the United States. About 60 – 70 percent of people with diabetes have mild to severe forms of damage to sensory, motor, and autonomic nerves that cause such symptoms as numb, tingling, or burning feet, one-sided bands or pain, and numbness and weakness on the trunk or pelvis.</p>
            <p>Vascular and blood problems that decrease oxygen supply to the peripheral nerves can lead to nerve tissue damage. Diabetes, smoking, and narrowing of the arteries from high blood pressure or atherosclerosis (fatty deposits on the inside of blood vessel walls) can lead to neuropathy. Blood vessel wall thickening and scarring from vasculitis can impede blood flow and cause patchy nerve damage in which isolated nerves in different areas are damaged—called mononeuropathy multiplex or multifocal mononeuropathy.</p>
            <p>Systemic (body-wide) autoimmune diseases, in which the immune system mistakenly attacks a number of the body’s own tissues, can directly target nerves or cause problems when surrounding tissues compress or entrap nerves. Sjögren’s syndrome, lupus, and rheumatoid arthritis are some systemic autoimmune diseases that cause neuropathic pain.</p>
            <p>Autoimmune diseases that attack nerves only are often triggered by recent infections. They can develop quickly or slowly, while others become chronic and fluctuate in severity. Damage to the motor fibers that go to the muscle includes visible weakness and muscle shrinking seen in Guillain-Barré syndrome and chronic inflammatory demyelinating polyneuropathy. Multifocal motor neuropathy is a form of inflammatory neuropathy that affects motor nerves exclusively. In other autoimmune neuropathies the small fibers are attacked, leaving people with unexplained chronic pain and autonomic symptoms.</p>
            <p>Hormonal imbalances can disturb normal metabolic processes, leading to swollen tissues that can press on peripheral nerves.</p>
            <p>Kidney and liver disorders can lead to abnormally high amounts of toxic substances in the blood that can damage nerve tissue. Most individuals on dialysis because of kidney failure develop varying levels of polyneuropathy.</p>
            <p>Nutritional or vitamin imbalances, alcoholism, and exposure to toxins can damage nerves and cause neuropathy. Vitamin B12 deficiency and excess vitamin B6 are the best known vitamin-related causes. Several medications have been shown to occasionally cause neuropathy.</p>
            <p>Certain cancers and benign tumors cause neuropathy in various ways. Tumors sometimes infiltrate or press on nerve fibers. Paraneoplastic syndromes, a group of rare degenerative disorders that are triggered by a person’s immune system response to a cancer, can indirectly cause widespread nerve damage.</p>
            <p>Chemotherapy drugs used to treat cancer cause polyneuropathy in an estimated 30 to 40 percent of users. Only certain chemotherapy drugs cause neuropathy and not all people get it.</p>
            <p>Chemotherapy-induced peripheral neuropathy may continue long after stopping chemotherapy. Radiation therapy also can cause nerve damage, sometimes starting months or years later.</p>
            <p>Infections can attack nerve tissues and cause neuropathy. Viruses such as varicella-zoster virus (which causes chicken pox and shingles), West Nile virus, cytomegalovirus, and herpes simplex target sensory fibers, causing attacks of sharp, lightning-like pain. Lyme disease, carried by ticks, can cause a range of neuropathic symptoms, often within a few weeks of being infected. The human immunodeficiency virus (HIV), which causes AIDS, can extensively damage the central and peripheral nervous systems. An estimated 30 percent of people who are HIV-positive develop peripheral neuropathy; 20 percent develop distal (away from the center of the body) neuropathic pain.</p>
            <p>Genetically-caused polyneuropathies are rare. Genetic mutations can either be inherited or arise de novo, meaning they are completely new mutations to an individual and are not present in either parent. Some genetic mutations lead to mild neuropathies with symptoms that begin in early adulthood and result in little, if any, significant impairment. More severe hereditary neuropathies often appear in infancy or childhood. Charcot-Marie-Tooth disease, also known as hereditary motor and sensory neuropathy, is one of the most common inherited neurological disorders. The small-fiber neuropathies that present with pain, itch, and autonomic symptoms also can be genetic. As our understanding of genetic disorders increases, many new genes are being associated with peripheral neuropathy.</p>

            <h2>How is peripheral neuropathy diagnosed?</h2>
            <p>The bewildering array and variability of symptoms that neuropathies can cause often makes diagnosis difficult. A diagnosis of neuropathy typically includes:</p>
            <ul>
              <li>Medical history. A doctor will ask questions about symptoms and any triggers or relieving factors throughout the day, work environment, social habits, exposure to toxins, alcohol use, risk of infectious diseases, and family history of neurological diseases.</li>
              <li>Physical and neurological exams. A doctor will look for any evidence of body-wide diseases that can cause nerve damage, such as diabetes. A neurological exam includes tests that may identify the cause of the neuropathic disorder as well as the extent and type of nerve damage.</li>
              <li>Body fluid tests. Various blood tests can detect diabetes, vitamin deficiencies, liver or kidney dysfunction, other metabolic disorders, infections and signs of abnormal immune system activity. Less often other body fluids are tested for abnormal proteins or the abnormal presence of immune cells or proteins associated with some immune-mediated neuropathies.</li>
              <li>Genetic tests. Gene tests are available for some inherited neuropathies.</li>
            </ul>
            <p>Additional tests may be ordered to help determine the nature and extent of the neuropathy.</p>

            <h3>Physiologic tests of nerve function</h3>
            <p>Nerve conduction velocity (NCV) tests measure signal strength and speed along specific large motor and sensory nerves. They can reveal nerves and nerve types affected and whether symptoms are caused by degeneration of the myelin sheath or the axon. During this test, a probe electrically stimulates a nerve fiber, which responds by generating its own electrical impulse. An electrode placed further along the nerve’s pathway measures the speed of signal transmission along the axon. Slow transmission rates tend to indicate damage to the myelin sheath, while a reduction in the strength of impulses at normal speeds is a sign of axonal degeneration. Inability to elicit signals can indicate severe problems with either.</p>
            <p>Electromyography (EMG) involves inserting very fine needles into specific muscles to record their electrical activity at rest and during contraction. EMG tests irritability and responsiveness, detects abnormal muscular electrical activity in motor neuropathy, and can help differentiate between muscle and nerve disorders.</p>

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

        {/* Our Neuropathy Treatment Approach */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
                <span aria-hidden className="h-px w-6 bg-[#3d7a52]/70" />
                Our Approach
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] leading-[1.15] text-[#13231a] md:text-[40px]">
                Our Neuropathy Treatment Approach
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {APPROACH.map((t) => (
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
