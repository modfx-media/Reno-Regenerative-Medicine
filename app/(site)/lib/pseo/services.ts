// Programmatic SEO service catalog.
//
// Sourced from real GSC data (1,004 queries analyzed). Every entry maps to a
// service or condition page that already exists on the live site — no new
// canonical pages are introduced here. These records power city × service
// landing pages under /near-me/<service>-<city-state>/.

export interface PseoService {
  slug: string;
  name: string;
  shortName: string;
  internalPageUrl: string;
  h1Template: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  treatments: string[];
  conditions: string[];
  gscKeywords: string[];
}

const services: PseoService[] = [
  {
    slug: "neuropathy-treatment",
    name: "Neuropathy Treatment",
    shortName: "Neuropathy Treatment",
    internalPageUrl: "/conditions/neuropathy/",
    h1Template: "Neuropathy Treatment Near {city}, {state}",
    metaTitle: "Neuropathy Treatment Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Reno Regenerative Medicine provides expert neuropathy treatment for patients near {city}, {state}. Relief from burning feet, tingling, and nerve pain. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine provides expert neuropathy care for patients throughout {city}, {state} and {county} County. Our team specializes in non-surgical relief from peripheral neuropathy — including burning feet, numbness when walking, and nerve pain — using trigger point injections, nutritional IVs, and personalized treatment plans.",
    treatments: ["Trigger Point Injections", "Nutritional IVs", "Therapeutic Exercise", "Chiropractic Care"],
    conditions: ["Peripheral Neuropathy", "Diabetic Neuropathy", "Burning Feet", "Numbness When Walking", "Tingling Hands and Feet"],
    gscKeywords: [
      "neuropathy doctor near me",
      "neuropathy treatment near me",
      "feet go numb when walking",
      "peripheral neuropathy treatment",
      "nerve pain relief",
      "burning feet treatment",
    ],
  },
  {
    slug: "knee-pain-treatment",
    name: "Knee Pain Treatment",
    shortName: "Knee Pain",
    internalPageUrl: "/conditions/knee-pain/",
    h1Template: "Knee Pain Treatment Near {city}, {state}",
    metaTitle: "Knee Pain Treatment Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Non-surgical knee pain treatment for patients near {city}, {state}. Joint injections, knee decompression, and chiropractic care at Reno Regenerative Medicine. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine offers non-surgical knee pain treatment for patients from {city}, {state} and throughout {county} County. We treat knee osteoarthritis, ligament injuries, knee locking, and chronic joint pain using joint injections, knee decompression, and therapeutic exercise.",
    treatments: ["Joint Injections", "Knee Decompression", "Chiropractic Care", "Therapeutic Exercise"],
    conditions: ["Knee Osteoarthritis", "Knee Locking", "Patellar Tendonitis", "Ligament Injuries", "Post-Injury Knee Pain"],
    gscKeywords: [
      "knee pain doctor near me",
      "knee locking treatment",
      "knee decompression near me",
      "knee osteoarthritis treatment",
      "non-surgical knee treatment",
    ],
  },
  {
    slug: "back-pain-treatment",
    name: "Back Pain Treatment",
    shortName: "Back Pain",
    internalPageUrl: "/conditions/back-pain/",
    h1Template: "Back Pain Treatment Near {city}, {state}",
    metaTitle: "Back Pain Treatment Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Expert back pain treatment for patients near {city}, {state}. Spinal decompression, chiropractic care, and joint injections at Reno Regenerative Medicine. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine helps patients from {city}, {state} and {county} County find lasting relief from back pain — without surgery or long-term medication. We treat herniated discs, sciatica, spinal stenosis, and chronic lower back pain using spinal decompression, chiropractic care, and targeted injections.",
    treatments: ["Spinal Decompression", "Chiropractic Care", "Joint Injections", "Trigger Point Injections"],
    conditions: ["Lower Back Pain", "Herniated Disc", "Sciatica", "Spinal Stenosis", "Degenerative Disc Disease"],
    gscKeywords: [
      "back pain doctor near me",
      "spinal decompression near me",
      "back pain treatment near me",
      "herniated disc treatment",
      "sciatica treatment near me",
    ],
  },
  {
    slug: "hormone-therapy",
    name: "Bioidentical Hormone Therapy",
    shortName: "Hormone Therapy",
    internalPageUrl: "/bioidentical-hormone-optimization-therapy/",
    h1Template: "Bioidentical Hormone Therapy Near {city}, {state}",
    metaTitle: "Hormone Therapy Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Bioidentical hormone replacement therapy (BHRT) for patients near {city}, {state}. Relief from fatigue, low libido, and hormonal imbalance. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine offers bioidentical hormone replacement therapy (BHRT) for men and women from {city}, {state} and {county} County. If you are experiencing fatigue, low libido, mood changes, weight gain, or sleep problems, hormone optimization may help restore your energy and quality of life.",
    treatments: [
      "Bioidentical Hormone Replacement Therapy",
      "Lab Work & Blood Testing",
      "Nutraceutical Supplementation",
      "Ongoing Hormone Monitoring",
    ],
    conditions: ["Hormonal Imbalance", "Andropause", "Menopause", "Low Testosterone", "Adrenal Fatigue", "Thyroid Disorders"],
    gscKeywords: [
      "hormone therapy near me",
      "bioidentical hormones near me",
      "hormone replacement therapy near me",
      "hormone specialist near me",
      "low testosterone treatment near me",
    ],
  },
  {
    slug: "joint-pain-treatment",
    name: "Joint Pain Treatment",
    shortName: "Joint Pain",
    internalPageUrl: "/conditions/joint-pain/",
    h1Template: "Joint Pain Treatment Near {city}, {state}",
    metaTitle: "Joint Pain Treatment Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Non-surgical joint pain treatment for patients near {city}, {state}. Joint injections, chiropractic care, and regenerative therapies. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine helps patients from {city}, {state} and throughout {county} County manage and overcome chronic joint pain without surgery. We treat osteoarthritis, rheumatoid arthritis, and joint injuries using a personalized combination of joint injections, chiropractic care, and therapeutic exercise.",
    treatments: ["Joint Injections", "Chiropractic Care", "Therapeutic Exercise", "Spinal Decompression"],
    conditions: ["Osteoarthritis", "Rheumatoid Arthritis", "Joint Inflammation", "Bursitis", "Tendonitis"],
    gscKeywords: [
      "joint pain treatment near me",
      "joint injections near me",
      "osteoarthritis treatment near me",
      "chronic joint pain relief",
      "non-surgical joint treatment",
    ],
  },
  {
    slug: "spinal-decompression",
    name: "Spinal Decompression Therapy",
    shortName: "Spinal Decompression",
    internalPageUrl: "/spinal-decompression/",
    h1Template: "Spinal Decompression Therapy Near {city}, {state}",
    metaTitle: "Spinal Decompression Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Non-surgical spinal decompression therapy for patients near {city}, {state}. Disc pain, sciatica, and back pain relief at Reno Regenerative Medicine. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine provides non-surgical spinal decompression therapy for patients from {city}, {state} and {county} County. By gently stretching the spine to relieve disc pressure, this treatment helps bulging discs heal naturally — providing lasting relief from back pain, sciatica, and nerve compression without surgery.",
    treatments: ["Spinal Decompression", "Chiropractic Care", "Therapeutic Exercise", "Trigger Point Injections"],
    conditions: ["Herniated Disc", "Bulging Disc", "Sciatica", "Spinal Stenosis", "Degenerative Disc Disease", "Chronic Back Pain"],
    gscKeywords: [
      "spinal decompression near me",
      "spinal decompression therapy near me",
      "herniated disc treatment near me",
      "non-surgical back pain treatment",
    ],
  },
  {
    slug: "chiropractic-care",
    name: "Chiropractic Care",
    shortName: "Chiropractic Care",
    internalPageUrl: "/chiropractic-care/",
    h1Template: "Chiropractic Care Near {city}, {state}",
    metaTitle: "Chiropractor Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Expert chiropractic care for patients near {city}, {state}. Spinal alignment, pain relief, and injury recovery at Reno Regenerative Medicine. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine offers expert chiropractic care for patients from {city}, {state} and {county} County. Our chiropractic approach goes beyond adjustments — we create complete care plans including stretching, therapeutic exercise, and nutrition guidance to correct misalignments and keep you pain-free long-term.",
    treatments: ["Chiropractic Adjustments", "Therapeutic Exercise", "Spinal Decompression", "Cold Laser Therapy"],
    conditions: ["Back Pain", "Neck Pain", "Whiplash", "Sciatica", "Sports Injuries", "Headaches"],
    gscKeywords: [
      "chiropractor near me",
      "chiropractic care near me",
      "back pain chiropractor",
      "sports injury chiropractic",
      "neck pain chiropractor",
    ],
  },
  {
    slug: "trigger-point-injections",
    name: "Trigger Point Injections",
    shortName: "Trigger Point Injections",
    internalPageUrl: "/trigger-point-injections/",
    h1Template: "Trigger Point Injections Near {city}, {state}",
    metaTitle: "Trigger Point Injections Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Trigger point injections for patients near {city}, {state}. Safe relief from fibromyalgia, tension headaches, and chronic muscle pain. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine offers trigger point injections for patients from {city}, {state} and {county} County who are dealing with stubborn muscle pain, fibromyalgia, or tension headaches. This safe, minimally invasive procedure targets the exact site of pain for fast, lasting relief.",
    treatments: ["Trigger Point Injections", "Therapeutic Exercise", "Chiropractic Care"],
    conditions: ["Fibromyalgia", "Tension Headaches", "Myofascial Pain", "Muscle Pain", "Neck Pain", "Lower Back Pain"],
    gscKeywords: [
      "trigger point injections near me",
      "fibromyalgia treatment near me",
      "muscle pain injections",
      "myofascial pain treatment",
    ],
  },
  {
    slug: "nutritional-iv-therapy",
    name: "Nutritional IV Therapy",
    shortName: "IV Therapy",
    internalPageUrl: "/nutritional-ivs/",
    h1Template: "Nutritional IV Therapy Near {city}, {state}",
    metaTitle: "IV Therapy Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Nutritional IV therapy for patients near {city}, {state}. Fast relief from fatigue, dehydration, and stress at Reno Regenerative Medicine. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine provides nutritional IV therapy for patients from {city}, {state} and {county} County. By delivering vitamins and nutrients directly to your bloodstream — bypassing digestion entirely — IV therapy delivers fast, effective relief from fatigue, dehydration, muscle soreness, and stress. Most sessions take just 15–30 minutes.",
    treatments: ["Nutritional IV Infusions", "Custom Vitamin Formulas", "Hydration Therapy"],
    conditions: ["Fatigue", "Dehydration", "Stress", "Muscle Soreness", "Low Energy", "Immune Support"],
    gscKeywords: [
      "iv therapy near me",
      "iv drip near me",
      "vitamin iv therapy near me",
      "iv hydration therapy near me",
      "nutritional iv near me",
    ],
  },
  {
    slug: "gainswave-therapy",
    name: "ED Shockwave Therapy",
    shortName: "ED Shockwave",
    internalPageUrl: "/ed-shockwave-therapy/",
    h1Template: "ED Shockwave Therapy Near {city}, {state}",
    metaTitle: "ED Shockwave Therapy Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "ED shockwave therapy for men near {city}, {state}. Non-surgical erectile dysfunction treatment and sexual wellness at Reno Regenerative Medicine. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine offers ED shockwave therapy for men from {city}, {state} and {county} County. This non-invasive acoustic wave treatment uses low-intensity sound waves to improve blood flow, treat erectile dysfunction, and enhance sexual performance — with no medication and no downtime.",
    treatments: ["ED Shockwave (Acoustic Wave) Therapy"],
    conditions: ["Erectile Dysfunction", "Peyronie's Disease", "Sexual Dysfunction", "Reduced Sexual Performance"],
    gscKeywords: [
      "ed shockwave therapy near me",
      "ed treatment near me",
      "erectile dysfunction treatment near me",
      "acoustic wave therapy near me",
    ],
  },
  {
    slug: "whiplash-treatment",
    name: "Whiplash Treatment",
    shortName: "Whiplash",
    internalPageUrl: "/conditions/whiplash/",
    h1Template: "Whiplash Treatment Near {city}, {state}",
    metaTitle: "Whiplash Treatment Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Expert whiplash treatment for patients near {city}, {state}. Non-surgical neck and back pain relief after car accidents. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine provides comprehensive whiplash treatment for patients from {city}, {state} and {county} County. Whether your whiplash was caused by a car accident, sports injury, or fall, our team combines chiropractic care, spinal decompression, trigger point injections, and therapeutic exercise to restore your range of motion and eliminate pain.",
    treatments: ["Chiropractic Care", "Spinal Decompression", "Trigger Point Injections", "Cold Laser Therapy", "Therapeutic Exercise"],
    conditions: ["Neck Pain", "Whiplash", "Mid-Back Pain", "Headaches After Accident", "Cervical Strain"],
    gscKeywords: [
      "whiplash treatment near me",
      "neck pain after car accident",
      "mid back pain after car accident",
      "whiplash chiropractor near me",
    ],
  },
  {
    slug: "shoulder-pain-treatment",
    name: "Shoulder Pain Treatment",
    shortName: "Shoulder Pain",
    internalPageUrl: "/conditions/shoulder-pain/",
    h1Template: "Shoulder Pain Treatment Near {city}, {state}",
    metaTitle: "Shoulder Pain Treatment Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Non-surgical shoulder pain treatment for patients near {city}, {state}. Rotator cuff, bursitis, arthritis, and frozen shoulder. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine treats shoulder pain for patients from {city}, {state} and {county} County using non-surgical, integrative therapies. Whether you have a rotator cuff tear, shoulder arthritis, bursitis, or frozen shoulder, our team creates a personalized plan to restore mobility and eliminate pain without surgery.",
    treatments: ["Joint Injections", "Chiropractic Care", "Therapeutic Exercise", "Physiotherapy"],
    conditions: ["Rotator Cuff Tears", "Shoulder Bursitis", "Shoulder Arthritis", "Frozen Shoulder", "Shoulder Impingement"],
    gscKeywords: [
      "shoulder pain doctor near me",
      "shoulder pain treatment near me",
      "rotator cuff treatment near me",
      "frozen shoulder treatment",
    ],
  },
  {
    slug: "neck-pain-treatment",
    name: "Neck Pain Treatment",
    shortName: "Neck Pain",
    internalPageUrl: "/conditions/neck-pain/",
    h1Template: "Neck Pain Treatment Near {city}, {state}",
    metaTitle: "Neck Pain Treatment Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Expert neck pain treatment for patients near {city}, {state}. Non-surgical cervical spine care at Reno Regenerative Medicine. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine offers expert neck pain treatment for patients from {city}, {state} and {county} County. The cervical spine is highly susceptible to injury and degeneration, and chronic neck pain can affect every part of your life. Our non-surgical approach combines chiropractic care, spinal decompression, and trigger point injections for lasting relief.",
    treatments: ["Chiropractic Care", "Spinal Decompression", "Trigger Point Injections", "Therapeutic Exercise"],
    conditions: ["Neck Pain", "Cervical Disc Herniation", "Cervical Stenosis", "Neck Stiffness", "Cervical Radiculopathy"],
    gscKeywords: [
      "neck pain doctor near me",
      "neck pain treatment near me",
      "cervical disc treatment",
      "neck pain chiropractor near me",
    ],
  },
  {
    slug: "hormonal-imbalance-treatment",
    name: "Hormonal Imbalance Treatment",
    shortName: "Hormonal Imbalance",
    internalPageUrl: "/conditions/hormonal-imbalance/",
    h1Template: "Hormonal Imbalance Treatment Near {city}, {state}",
    metaTitle: "Hormonal Imbalance Treatment Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Hormonal imbalance treatment for men and women near {city}, {state}. BHRT and hormone optimization at Reno Regenerative Medicine. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine helps men and women from {city}, {state} and {county} County restore hormonal balance and reclaim their energy, mood, and quality of life. Using comprehensive lab work and bioidentical hormone replacement therapy, our team identifies and corrects imbalances in testosterone, estrogen, progesterone, thyroid, and cortisol levels.",
    treatments: ["Bioidentical Hormone Replacement Therapy", "Lab Work & Blood Testing", "Nutraceutical Supplementation"],
    conditions: ["Low Testosterone", "Estrogen Imbalance", "Andropause", "Menopause", "Thyroid Disorders", "Adrenal Fatigue"],
    gscKeywords: [
      "hormone specialist near me",
      "hormone optimization near me",
      "low testosterone doctor near me",
      "hormonal imbalance treatment near me",
    ],
  },
  {
    slug: "pain-relief-treatment",
    name: "Integrative Pain Relief",
    shortName: "Pain Relief",
    internalPageUrl: "/conditions/pain-relief/",
    h1Template: "Integrative Pain Relief Near {city}, {state}",
    metaTitle: "Pain Relief Treatment Near {city}, {state} | Reno Regenerative Medicine",
    metaDesc:
      "Holistic, non-surgical pain relief for patients near {city}, {state}. Personalized pain management at Reno Regenerative Medicine. Call (775) 683-9026.",
    intro:
      "Reno Regenerative Medicine offers comprehensive, non-surgical pain relief for patients from {city}, {state} and {county} County. We treat both acute and chronic pain by identifying and addressing the root cause — not just masking symptoms with medication. Our integrative approach combines chiropractic care, injections, spinal decompression, and IV therapy for lasting relief.",
    treatments: ["Chiropractic Care", "Joint Injections", "Spinal Decompression", "Trigger Point Injections", "Nutritional IVs"],
    conditions: ["Chronic Pain", "Acute Pain", "Musculoskeletal Pain", "Nerve Pain", "Post-Injury Pain"],
    gscKeywords: [
      "pain management near me",
      "chronic pain treatment near me",
      "pain relief clinic near me",
      "integrative pain management",
    ],
  },
];

export default services;

// TOTAL: 35 locations × 15 services = 525 pages.
// Expanding to 42 locations reaches 630 pages — add symptom combos to hit 1000+.
