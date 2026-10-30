// Shared content + metadata for the /services/ section.
// One entry per detail page; the overview page and ServicePageLayout both
// consume this so copy stays in sync.

export type ServiceStep = {
  n: string;
  title: string;
  body: string;
};

export type ServiceAudienceItem = {
  title: string;
  body: string;
};

export type ServiceSlug =
  | "joint-injections"
  | "trigger-point-injections"
  | "chiropractic-care"
  | "spinal-decompression"
  | "nutritional-ivs"
  | "bioidentical-hormone-optimization-therapy"
  | "ed-shockwave-therapy"
  | "knee-decompression"
  | "physical-therapy";

export type ServiceData = {
  slug: ServiceSlug;
  /** Path used by next/link — always trailing slash. */
  href: string;
  /** Short display name used in nav & cards. */
  name: string;
  /** Slightly longer label used as eyebrow / hero title fragment. */
  label: string;
  /** One-sentence description used on the overview grid. */
  short: string;
  /** SEO title. */
  title: string;
  /** SEO meta description. */
  description: string;
  /** Hero background image under /public. */
  image: string;
  /** Body sections — array of { heading, paragraphs }. */
  sections: { heading: string; paragraphs: string[] }[];
  /** "How It Works" 3-step timeline. */
  howItWorks: ServiceStep[];
  /** "Who Is This For?" bullets. */
  whoIsThisFor: ServiceAudienceItem[];
};

export const SERVICES: ServiceData[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "joint-injections",
    href: "/joint-injections/",
    name: "Joint Injections",
    label: "Joint Injections",
    short:
      "Non-surgical injections to ease knee, hip, shoulder, and wrist pain so you can move freely again.",
    title: "Experience Relief With Joint Injections in Reno, NV",
    description:
      "Joint injections at Reno Regenerative Medicine provide non-surgical pain relief for knee, hip, shoulder, and wrist pain in Reno, NV.",
    image: "/images/services/joint-injections.jpg",
    sections: [
      {
        heading: "What is joint pain?",
        paragraphs: [
          "Joint pain is discomfort, soreness, or aching in any of the body's joints — most commonly the knees, hips, shoulders, and wrists. It can be caused by injury, overuse, arthritis, bursitis, tendonitis, or simple wear-and-tear over time.",
          "Left untreated, joint pain often leads to reduced mobility, disrupted sleep, and a slow withdrawal from the activities and people you love.",
        ],
      },
      {
        heading: "Who does it affect?",
        paragraphs: [
          "Joint pain doesn't discriminate. Active adults, athletes, weekend warriors, manual workers, and older patients with osteoarthritis can all benefit from a careful evaluation and a non-surgical treatment plan.",
        ],
      },
      {
        heading: "When should I seek care?",
        paragraphs: [
          "If joint pain has lasted more than a few weeks, keeps you from sleeping or exercising, or is starting to limit your daily routine, it's time to be evaluated. Early care almost always means simpler, faster results.",
        ],
      },
      {
        heading: "How joint injections work",
        paragraphs: [
          "We deliver targeted medication directly into or around the affected joint to reduce inflammation, calm pain signals, and create a window for healing. Many patients use that window of relief to get back to physical therapy, exercise, and life.",
          "Because the medication is placed exactly where it's needed, joint injections can provide meaningful relief without the recovery time, downtime, or risks of surgery.",
        ],
      },
      {
        heading: "A non-surgical option",
        paragraphs: [
          "Joint injections are an excellent alternative for patients who want to avoid (or delay) surgery. They are most effective when paired with our other regenerative therapies — chiropractic care, therapeutic exercise, spinal or knee decompression — so the joint stays healthy long after the injection.",
        ],
      },
    ],
    howItWorks: [
      {
        n: "01",
        title: "Comprehensive Evaluation",
        body: "We listen first. A detailed exam plus on-site imaging confirms exactly what's driving your joint pain.",
      },
      {
        n: "02",
        title: "Precise, Guided Injection",
        body: "Medication is placed directly into the joint to calm inflammation and quiet pain at the source.",
      },
      {
        n: "03",
        title: "Restore & Strengthen",
        body: "We pair the injection with therapeutic exercise so the joint stays mobile and pain-free long term.",
      },
    ],
    whoIsThisFor: [
      { title: "Chronic knee, hip, shoulder, or wrist pain", body: "Especially when it limits daily activities." },
      { title: "Arthritis, bursitis, or tendonitis", body: "Inflammatory conditions that respond well to targeted care." },
      { title: "Patients who want to avoid surgery", body: "A non-invasive option with little to no downtime." },
      { title: "Athletes & active adults", body: "Get back to training without prolonged time on the bench." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "trigger-point-injections",
    href: "/trigger-point-injections/",
    name: "Trigger Point Injections",
    label: "Trigger Point Injections",
    short:
      "Targeted relief for fibromyalgia, tension headaches, and chronic muscle knots — safe, fast, and effective.",
    title: "Relieve Muscle Tension: Trigger Point Injections in Reno, NV",
    description:
      "Trigger point injections at Reno Regenerative Medicine relieve fibromyalgia, tension headaches, and chronic muscle pain safely in Reno, NV.",
    image: "/images/services/trigger-point.jpg",
    sections: [
      {
        heading: "Targeted relief for stubborn muscle pain",
        paragraphs: [
          "We offer trigger point injections for fibromyalgia, tension headaches, myofascial pain, and chronic muscle pain in the arms, legs, lower back, and neck.",
          "A small amount of local anesthetic is injected directly into the painful trigger point — the tight band of muscle that's referring pain elsewhere in the body. The result is fast, focused relief.",
        ],
      },
      {
        heading: "Safe and well-tolerated",
        paragraphs: [
          "Trigger point injections are a long-established procedure with a very low risk of complications. Some patients experience mild, temporary soreness or numbness at the injection site that fades within a day or two.",
        ],
      },
      {
        heading: "Better when paired with care",
        paragraphs: [
          "We often combine trigger point injections with chiropractic care, therapeutic exercise, and IV therapy so the underlying tension patterns can heal — not just the symptoms.",
        ],
      },
    ],
    howItWorks: [
      { n: "01", title: "Locate the trigger point", body: "We palpate and identify the exact muscle band reproducing your pain." },
      { n: "02", title: "Inject precisely", body: "A small dose of anesthetic is delivered directly into the knot." },
      { n: "03", title: "Release & retrain", body: "Stretching and therapeutic exercise help the muscle stay relaxed." },
    ],
    whoIsThisFor: [
      { title: "Fibromyalgia patients", body: "Localized relief for tender points across the body." },
      { title: "Chronic tension headaches", body: "Quiet the muscle drivers behind your headache pattern." },
      { title: "Lower back & neck pain", body: "When tightness is the primary source of pain." },
      { title: "Myofascial pain syndromes", body: "Persistent muscle pain that hasn't responded to massage alone." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "chiropractic-care",
    href: "/chiropractic-care/",
    name: "Chiropractic Care",
    label: "Chiropractic Care",
    short:
      "Gentle, hands-on adjustments that restore alignment and let the spine and body work together again.",
    title: "Restore Proper Alignment With a Chiropractor in Reno, NV",
    description:
      "Our Reno chiropractor corrects spinal misalignments with personalized care plans including stretching, exercise, chiropractic adjustments, and nutrition.",
    image: "/images/services/chiropractic-care.jpg",
    sections: [
      {
        heading: "Specialists in correcting body misalignments",
        paragraphs: [
          "We specialize in correcting body misalignments. Our goal is to ensure the spine and rest of the body work harmoniously through light stretching, exercise, chiropractic care, and a healthy diet.",
        ],
      },
      {
        heading: "A whole-person care plan",
        paragraphs: [
          "Adjustments are only one piece of the picture. Each plan is tailored to your spine, your activity level, and your long-term goals — and almost always includes movement and nutrition coaching so the alignment lasts.",
        ],
      },
      {
        heading: "Gentle, evidence-based, non-surgical",
        paragraphs: [
          "Our chiropractic approach is gentle and evidence-based. It pairs naturally with our other services — joint injections, spinal decompression, therapeutic exercise — to address pain at every level.",
        ],
      },
    ],
    howItWorks: [
      { n: "01", title: "Postural & spinal exam", body: "We assess alignment, mobility, and the patterns driving your pain." },
      { n: "02", title: "Personalized adjustment", body: "Gentle, targeted adjustments restore motion to restricted segments." },
      { n: "03", title: "Movement & lifestyle plan", body: "Stretching, exercise, and nutrition keep your spine healthy at home." },
    ],
    whoIsThisFor: [
      { title: "Chronic back or neck pain", body: "Especially when posture or alignment is a factor." },
      { title: "Whiplash & post-injury recovery", body: "Rebuild mobility safely after an accident." },
      { title: "Headaches with a postural driver", body: "When tension or alignment is feeding your headache pattern." },
      { title: "Active adults wanting to move better", body: "Maintenance care that keeps you doing what you love." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "spinal-decompression",
    href: "/spinal-decompression/",
    name: "Spinal Decompression",
    label: "Spinal Decompression",
    short:
      "Non-invasive therapy that gently stretches the spine to relieve disc pressure and promote natural healing.",
    title: "Relief for Back Pain: Spinal Decompression in Reno, NV",
    description:
      "Non-invasive spinal decompression therapy at Reno Regenerative Medicine gently stretches the spine to relieve back pain and promote natural healing.",
    image: "/images/services/spinal-decompression.jpg",
    sections: [
      {
        heading: "What is spinal decompression?",
        paragraphs: [
          "Spinal decompression is a non-invasive mechanical procedure that gently stretches the spine to relieve pressure from the spinal discs.",
          "By decompressing the spine, the therapy permits water, oxygen, and healing fluids to move back into the discs — supporting the body's own repair process.",
        ],
      },
      {
        heading: "An excellent non-surgical option",
        paragraphs: [
          "Spinal decompression is an excellent option for chronic back pain patients who want to avoid surgery. It's gentle, performed in a relaxed setting, and produces no recovery downtime.",
        ],
      },
      {
        heading: "Better outcomes with a complete plan",
        paragraphs: [
          "Decompression works best as part of an integrative plan that may include chiropractic care, therapeutic exercise, and nutrition — so the relief carries over into stronger, healthier discs over time.",
        ],
      },
    ],
    howItWorks: [
      { n: "01", title: "Diagnose with imaging", body: "On-site X-ray or referral imaging confirms decompression is the right fit." },
      { n: "02", title: "Comfortable, computer-guided session", body: "You lie on the table while gentle traction creates negative pressure in the disc." },
      { n: "03", title: "Repeat & rebuild", body: "A short course of sessions plus targeted exercise restores disc health." },
    ],
    whoIsThisFor: [
      { title: "Chronic low back pain", body: "Especially with disc bulges or degenerative discs." },
      { title: "Sciatica & nerve pain", body: "When pressure on the nerve is reproducing leg symptoms." },
      { title: "Neck pain with disc involvement", body: "Cervical decompression for the upper spine." },
      { title: "Patients avoiding back surgery", body: "A non-invasive alternative to consider first." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "nutritional-ivs",
    href: "/nutritional-ivs/",
    name: "Nutritional IVs",
    label: "Nutritional IV Therapy",
    short:
      "Vitamins and nutrients delivered directly to your bloodstream for fast hydration and recovery.",
    title:
      "Rehydrate and Rejuvenate With Restorative Nutritional IVs in Reno, NV",
    description:
      "Nutritional IV therapy at Reno Regenerative Medicine delivers vitamins directly to the bloodstream for fast relief of fatigue, stress, dehydration, and more.",
    image: "/images/services/nutritional-ivs.jpg",
    sections: [
      {
        heading: "Nutrients straight to your bloodstream",
        paragraphs: [
          "Nutritional IV therapy delivers vitamins, minerals, and amino acids directly to your bloodstream — bypassing the digestive system so your body can absorb 100% of what it receives.",
          "Most sessions take just 15 to 30 minutes in our relaxing IV lounge.",
        ],
      },
      {
        heading: "What it can help with",
        paragraphs: [
          "Patients use nutritional IVs to support a wide range of everyday concerns, including:",
          "• Common skin problems such as dull skin and acne\n• Dehydration\n• Stress and burnout\n• Muscle soreness or fatigue\n• Cold and flu recovery\n• Low energy and chronic fatigue\n• Excess weight and metabolic support",
        ],
      },
      {
        heading: "A plan tailored to you",
        paragraphs: [
          "Some patients receive IV therapy weekly or bi-weekly; others come in as needed. We create a custom treatment plan for every patient based on goals, lifestyle, and labs.",
        ],
      },
    ],
    howItWorks: [
      { n: "01", title: "Wellness consult", body: "We review your goals, history, and (if available) recent labs." },
      { n: "02", title: "Custom IV blend", body: "A formula tailored to your needs — hydration, energy, immune, recovery." },
      { n: "03", title: "Relax & recharge", body: "15–30 minutes in our lounge and you're back to your day, recharged." },
    ],
    whoIsThisFor: [
      { title: "Low energy & burnout", body: "Restore the nutrients your daily routine has used up." },
      { title: "Dehydration & travel recovery", body: "Bounce back fast after flights, events, or long days outdoors." },
      { title: "Athletes & weekend warriors", body: "Replenish what you sweat out and recover faster." },
      { title: "Immune & seasonal support", body: "High-dose vitamin C and immune blends for cold season." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "bioidentical-hormone-optimization-therapy",
    href: "/bioidentical-hormone-optimization-therapy/",
    name: "Bioidentical Hormones",
    label: "Bioidentical Hormone Therapy",
    short:
      "Restore balance, energy, mood, and vitality with hormones identical in structure to your own.",
    title:
      "Bioidentical Hormone Therapy in Reno, NV | Reno Regenerative",
    description:
      "Bioidentical hormone optimization at Reno Regenerative Medicine restores balance, energy, mood, and vitality for men and women in Reno, NV.",
    image: "/images/services/hormones.jpg",
    sections: [
      {
        heading: "What are bioidentical hormones?",
        paragraphs: [
          "Bioidentical hormones are plant-derived compounds that are chemically identical in structure to the hormones your body naturally produces. Because they match your body's own hormones, many patients experience a smoother adjustment than they do with synthetic alternatives.",
        ],
      },
      {
        heading: "How they differ from synthetic hormones",
        paragraphs: [
          "Synthetic hormones are not an exact molecular match for the hormones your body makes. Bioidentical hormones are — which allows them to bind to your body's hormone receptors the way your natural hormones do.",
        ],
      },
      {
        heading: "Who can benefit",
        paragraphs: [
          "Both men and women may benefit when symptoms point to hormone imbalance, including persistent fatigue, mood swings, low libido, weight gain, sleep disturbance, brain fog, or loss of strength and stamina.",
          "We commonly support women through perimenopause and menopause, and men through andropause and age-related testosterone decline.",
        ],
      },
      {
        heading: "Our treatment process",
        paragraphs: [
          "Care begins with a thorough consultation and lab testing. From there, we build a personalized hormone optimization plan and monitor your progress over time, adjusting as your body responds.",
        ],
      },
    ],
    howItWorks: [
      { n: "01", title: "Symptom & health review", body: "We map your symptoms, history, and goals during a focused consult." },
      { n: "02", title: "Targeted lab testing", body: "Comprehensive hormone labs reveal what's actually out of balance." },
      { n: "03", title: "Personalized optimization plan", body: "Bioidentical therapy is dosed to you — and adjusted as you progress." },
    ],
    whoIsThisFor: [
      { title: "Perimenopause & menopause", body: "Hot flashes, mood swings, sleep loss, low libido." },
      { title: "Andropause & low testosterone", body: "Fatigue, loss of strength, brain fog, low motivation." },
      { title: "Persistent fatigue or weight gain", body: "When diet and exercise alone aren't moving the needle." },
      { title: "Mood, sleep, or libido changes", body: "Symptoms that point to underlying hormone imbalance." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "ed-shockwave-therapy",
    href: "/ed-shockwave-therapy/",
    name: "ED Shockwave Therapy",
    label: "ED Shockwave Therapy",
    short:
      "Acoustic wave therapy that improves blood flow and sexual function — non-invasive and drug-free.",
    title: "Erectile Dysfunction Shockwave Treatment in Reno, NV",
    description:
      "ED shockwave therapy at Reno Regenerative Medicine uses acoustic waves to improve sexual function and treat erectile dysfunction in Reno, NV.",
    image: "/images/services/gainswave.jpg",
    sections: [
      {
        heading: "What is ED shockwave therapy?",
        paragraphs: [
          "ED shockwave therapy uses low-intensity sound waves — known as acoustic wave therapy — to increase blood flow to the penis and improve sexual function.",
          "It is most often used to support patients with erectile dysfunction and Peyronie's disease.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Most patients complete a series of 6 to 12 sessions, each lasting just 15 to 20 minutes. Sessions are performed in a private treatment room, with no anesthesia and no downtime.",
        ],
      },
      {
        heading: "How it works at a cellular level",
        paragraphs: [
          "Each session uses focused acoustic waves to break up plaque inside blood vessels, stimulate the generation of new blood vessels, and activate dormant stem cells in the treated tissue.",
          "The result for many patients is improved blood flow, stronger and more reliable erections, and renewed confidence.",
        ],
      },
    ],
    howItWorks: [
      { n: "01", title: "Discreet consultation", body: "A private conversation to understand your goals and confirm shockwave therapy is right for you." },
      { n: "02", title: "Series of short sessions", body: "Most patients complete 6–12 sessions of 15–20 minutes each." },
      { n: "03", title: "Improved blood flow & function", body: "New vascular growth supports lasting improvements over time." },
    ],
    whoIsThisFor: [
      { title: "Men with erectile dysfunction", body: "Including those who haven't responded well to medication." },
      { title: "Patients with Peyronie's disease", body: "Plaque-related curvature and discomfort." },
      { title: "Men seeking a drug-free option", body: "Non-invasive therapy with no recovery time." },
      { title: "Performance & wellness optimization", body: "Healthy men looking to maintain function long term." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "knee-decompression",
    href: "/services/knee-decompression/",
    name: "Knee Decompression",
    label: "Knee Decompression",
    short:
      "Relieve joint pressure, calm pain, and restore mobility — without cortisone or surgery.",
    title: "Non-Surgical Knee Decompression Therapy in Reno, NV",
    description:
      "Knee decompression at Reno Regenerative Medicine relieves joint pressure, reduces pain, and restores mobility without surgery in Reno, NV.",
    image: "/images/services/joint-injections.jpg",
    sections: [
      {
        heading: "What is non-surgical knee decompression?",
        paragraphs: [
          "Knee decompression is a non-surgical therapy that uses gentle, controlled traction to reduce intra-articular pressure inside the knee joint. By unloading the joint, decompression creates the space and conditions the body needs to heal.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "During each session, the leg is comfortably positioned and a precise pulling force is applied across the knee. This briefly opens the joint space, encouraging fluid exchange, easing pressure on cartilage and nerves, and supporting healthier movement patterns.",
        ],
      },
      {
        heading: "Who is a candidate?",
        paragraphs: [
          "Most patients with chronic knee pain — including osteoarthritis, meniscus irritation, mild instability, or nagging post-injury pain — are candidates. We confirm with a careful exam and imaging review.",
        ],
      },
      {
        heading: "What to expect from treatment",
        paragraphs: [
          "Sessions are short, comfortable, and require no downtime. Many patients begin to notice less pain and easier movement within the first few visits, with continued improvement over a treatment series. We pair decompression with therapeutic exercise so the gains stick.",
        ],
      },
      {
        heading: "How it compares to cortisone shots and surgery",
        paragraphs: [
          "Cortisone can quiet inflammation but does not change the mechanics inside the joint, and repeated injections may weaken tissue over time. Surgery carries significant cost, risk, and recovery. Knee decompression offers a non-invasive option to try first — preserving every option you'd still have available later.",
        ],
      },
    ],
    howItWorks: [
      { n: "01", title: "Knee evaluation", body: "Exam and imaging confirm decompression is appropriate for your knee." },
      { n: "02", title: "Comfortable traction session", body: "Gentle, computer-controlled traction unloads the joint." },
      { n: "03", title: "Strengthen & maintain", body: "Targeted exercise supports lasting relief and better mechanics." },
    ],
    whoIsThisFor: [
      { title: "Knee osteoarthritis", body: "Reduce pressure, ease pain, and improve mobility." },
      { title: "Post-injury knee pain", body: "Lingering discomfort after sprains, meniscus irritation, or overuse." },
      { title: "Patients tired of cortisone", body: "A non-injection alternative for long-term joint health." },
      { title: "Considering knee surgery", body: "An option to try before committing to the operating room." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "physical-therapy",
    href: "/physical-therapy/",
    name: "Physical Therapy",
    label: "Physical Therapy",
    short:
      "Personalized exercise programs that strengthen the body, restore mobility, and lock in long-term relief.",
    title: "Therapeutic Exercise for Pain Relief in Reno, NV",
    description:
      "Personalized therapeutic exercise programs at Reno Regenerative Medicine help patients strengthen muscles, restore mobility, and reduce pain in Reno, NV.",
    image: "/images/services/physical-therapy.jpg",
    sections: [
      {
        heading: "Movement is medicine",
        paragraphs: [
          "Therapeutic exercise is a structured movement program prescribed by our team to address your specific pain pattern, mobility limitations, and strength gaps.",
          "It is a cornerstone of our integrative care plan — the work that turns short-term relief into lasting recovery.",
        ],
      },
      {
        heading: "How it works alongside our other services",
        paragraphs: [
          "Chiropractic adjustments, joint injections, and decompression open the door for healing. Therapeutic exercise walks you through it. By retraining the muscles that support each joint, we help you maintain alignment, reduce flare-ups, and stay active between visits.",
        ],
      },
      {
        heading: "Types of exercises we use",
        paragraphs: [
          "Programs typically blend mobility drills, gentle stretching, core stabilization, posture training, balance work, and progressive strengthening. Every program is dosed to where you are today and progressed as you improve.",
        ],
      },
      {
        heading: "Why it matters for chronic pain",
        paragraphs: [
          "Chronic pain often comes with weakness, guarding, and lost mobility. Without retraining the body, pain tends to come back. Therapeutic exercise rebuilds the foundation so you can stay out of pain on your own — not just feel better in the office.",
        ],
      },
    ],
    howItWorks: [
      { n: "01", title: "Movement screen", body: "We assess strength, mobility, and the movements that reproduce your pain." },
      { n: "02", title: "Custom exercise plan", body: "A dosed program you can perform here and at home — no guesswork." },
      { n: "03", title: "Progress & maintain", body: "We progress your plan as you improve so the relief lasts." },
    ],
    whoIsThisFor: [
      { title: "Chronic back, neck, or joint pain", body: "Build the strength your body needs to support itself." },
      { title: "Post-injury & post-procedure recovery", body: "Reclaim full motion and confidence safely." },
      { title: "Patients with a desk job", body: "Counter posture, stiffness, and tension that build up week after week." },
      { title: "Active adults staying out of the OR", body: "Strength training that protects every joint long term." },
    ],
  },
];

export const SERVICES_BY_SLUG: Record<ServiceSlug, ServiceData> = SERVICES.reduce(
  (acc, s) => {
    acc[s.slug] = s;
    return acc;
  },
  {} as Record<ServiceSlug, ServiceData>
);

export function getRelatedServices(slug: ServiceSlug, count = 3): ServiceData[] {
  const others = SERVICES.filter((s) => s.slug !== slug);
  // Stable, deterministic "related" set: take next N (wrapping).
  const startIdx = SERVICES.findIndex((s) => s.slug === slug);
  const ordered = [...others.slice(startIdx), ...others.slice(0, startIdx)];
  return ordered.slice(0, count);
}
