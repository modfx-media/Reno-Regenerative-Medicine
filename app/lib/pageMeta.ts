// Centralized page metadata for SEO preservation.
// Slugs MUST match https://renoregen.com/sitemap.xml exactly.
// Titles & descriptions seeded from live site where known; others use a
// brand-consistent default. Refine per-page as content is built out.

export type PageMeta = {
  slug: string; // e.g. "/about/"
  title: string;
  description: string;
  lastmod?: string;
  priority?: number;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

const BRAND = "Reno Regenerative Medicine";

const d = (s: string) => s;

// --- PAGES ---
// Titles & descriptions are exact strings from https://renoregen.com/ for SEO continuity.
export const PAGES: PageMeta[] = [
  {
    slug: "/",
    title: "Integrative Medicine Clinic in Reno, NV",
    description:
      "Looking for an integrative medicine center? Reno Regenerative Medicine helps with knee, back, and joint pain, helping your body heal naturally. Call today!",
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    slug: "/about/",
    title: "About | Pain Management Experts in Reno, NV",
    description:
      "Chronic discomfort can feel isolating. Our dedicated staff is here to listen, support you, and help manage your pain without relying on surgery. Reach out!",
    priority: 0.8,
  },
  {
    slug: "/new-patients/",
    title: "New Patient Information",
    description:
      "Taking the first step toward healing can feel overwhelming. We make becoming a new patient easy and stress-free. Download your forms and book a visit!",
    priority: 0.8,
  },
  {
    slug: "/services/",
    title: "Discover Regenerative and Integrative Medicine in Reno, NV",
    description:
      "Explore regenerative & integrative care in Reno, NV. We focus on finding the root cause of your pain to help you feel better naturally. Call us today!",
    priority: 0.9,
  },
  {
    slug: "/conditions/",
    title: "Conditions We Treat | Book Now",
    description:
      "Are you struggling with ongoing pain? Explore the conditions we treat with our natural, holistic methods. Let us help you heal. Book a consultation today.",
    priority: 0.8,
  },
  {
    slug: "/seminars/",
    title: "Join Our Health Seminars",
    description:
      "Navigating health choices is easier when you have the right facts. Attend our upcoming seminars to learn about your healing options. Reserve your seat!",
    priority: 0.7,
    changefreq: "weekly",
  },
  {
    slug: "/reviews/",
    title: "Patient Reviews and Stories",
    description:
      "Wondering if our treatments really work? Read honest reviews from our patients who have found natural relief from daily aches. Book your visit today!",
    priority: 0.7,
  },
  {
    slug: "/rate-us/",
    title: "Rate Us",
    description:
      "Help others discover Reno Regenerative Medicine — share your experience on Google or Facebook. Your feedback helps our community heal.",
    priority: 0.5,
  },
  {
    slug: "/video-testimonials/",
    title: "Watch Inspiring Video Testimonials From Our Patients",
    description:
      "Seeing others heal can inspire your own recovery. Watch video testimonials from real people who found relief at Reno Regenerative. Contact us today!",
    priority: 0.7,
  },
  {
    slug: "/blog/",
    title: "Read Our Blog | Wellness and Pain Management Insights",
    description:
      "Navigating your health can feel overwhelming. We share pain relief and wellness insights to help you understand your body better. Read our blog today!",
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    slug: "/contact/",
    title: "Contact Us | Regenerative Medicine in Sparks & Reno, NV",
    description:
      "Ready to start your healing journey? Reach out to ask about our regenerative therapies in Sparks & Reno, NV. We are here to answer your questions. Call us!",
    priority: 0.7,
  },
  {
    slug: "/reno-office/",
    title: "Reno Office | Back and Knee Pain Doctor | Visit Us Now",
    description:
      "Stop letting joint aches dictate your daily routine. Our Reno doctor for back and knee pain provides natural therapies for lasting relief. Book an appointment!",
    priority: 0.7,
  },
  {
    slug: "/careers/",
    title: d("Careers"),
    description:
      "Join the Reno Regenerative Medicine team. View open career opportunities at our Reno, NV clinic.",
    priority: 0.5,
  },
  {
    slug: "/what-can-we-improve/",
    title: d("What Can We Improve"),
    description:
      "Tell us what we can improve. Your feedback helps Reno Regenerative Medicine deliver better care.",
    priority: 0.3,
  },
  {
    slug: "/thank-you/",
    title: d("Thank You"),
    description: "Thank you for contacting Reno Regenerative Medicine.",
    priority: 0.2,
    changefreq: "yearly",
  },
  {
    slug: "/privacy-policy/",
    title: d("Privacy Policy"),
    description: "Privacy policy for renoregen.com and Reno Regenerative Medicine.",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    slug: "/accessibility/",
    title: d("Accessibility Statement"),
    description:
      "Reno Regenerative Medicine is committed to digital accessibility for all patients.",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    slug: "/sitemap/",
    title: d("Sitemap"),
    description: "All pages on the Reno Regenerative Medicine website.",
    priority: 0.3,
  },
  {
    slug: "/areas-we-serve/",
    title: "Areas We Serve in Northern Nevada & Eastern California",
    description:
      "Reno Regenerative Medicine serves patients across 35+ Northern Nevada and Eastern California communities. Explore non-surgical pain relief, hormone therapy, and regenerative medicine in your city.",
    priority: 0.8,
  },
  {
    slug: "/auto-accident-injury-eugene-or/",
    title: "Auto Accident Injury Clinic Eugene, OR",
    description:
      "Whiplash & car accident injury care for Eugene, OR patients — chiropractic, spinal decompression & joint injections at Reno Regenerative Medicine.",
    priority: 0.8,
  },
  // --- Service detail pages ---
  {
    slug: "/joint-injections/",
    title: "Experience Relief With Joint Injections in Reno, NV",
    description:
      "Looking for joint injection treatments in Reno, NV? We provide safe, effective care to reduce swelling and help you move with less pain. Contact us now.",
    priority: 0.9,
  },
  {
    slug: "/trigger-point-injections/",
    title: "Relieve Muscle Tension: Trigger Point Injections in Reno, NV",
    description:
      "Are tight muscles causing you grief? Our trigger point therapy in Reno, NV offer a direct way to reduce tension and improve comfort. Book an appointment!",
    priority: 0.9,
  },
  {
    slug: "/physical-therapy/",
    title: "Personalized Physical Therapy to Restore Your Movement",
    description:
      "Start your healing journey with guided physical therapy. Reno Regenerative designs a plan to build strength and ease your pain. Call to book a session!",
    priority: 0.9,
  },
  {
    slug: "/spinal-decompression/",
    title: "Relief for Back Pain: Spinal Decompression in Reno, NV",
    description:
      "Try non-surgical spinal decompression therapy in Reno, NV. Our approach relieves pressure on your spine so you can feel better. Call us to learn more.",
    priority: 0.9,
  },
  {
    slug: "/ed-shockwave-therapy/",
    title: "Erectile Dysfunction Shockwave Treatment in Reno, NV",
    description:
      "Non-invasive ED shockwave therapy at Reno Regenerative Medicine uses acoustic waves to improve blood flow and restore sexual function. Call today for a consultation!",
    priority: 0.9,
  },
  {
    slug: "/nutritional-ivs/",
    title: "Rehydrate and Rejuvenate With Restorative Nutritional IVs",
    description:
      "Boost your energy and wellness with a customized nutritional IV drip. Reno Regenerative makes the process simple and comfortable for you. Book now!",
    priority: 0.9,
  },
  {
    slug: "/bioidentical-hormone-optimization-therapy/",
    title: "Bioidentical Replacement Hormone Therapy in Reno, NV",
    description:
      "Struggling with fatigue or mood changes? Natural hormone therapy in Reno, NV can make a big difference. Let our friendly team help. Call to book!",
    priority: 0.9,
  },
  {
    slug: "/chiropractic-care/",
    title: "Restore Proper Alignment With a Chiropractor in Reno, NV",
    description:
      "Ease your joint and back discomfort with skilled chiropractic care in Reno, NV. We listen to you and design a custom plan based on your needs. Visit us!",
    priority: 0.9,
  },
  {
    slug: "/services/knee-decompression/",
    title: "Knee Decompression Therapy in Reno, NV",
    description:
      "Non-surgical knee decompression in Reno, NV reduces joint pressure to ease pain and restore mobility. Book a consultation with our care team today.",
    priority: 0.9,
  },
  // --- Conditions (sub-pages) ---
  {
    slug: "/conditions/back-pain/",
    title: "Back Pain | Effective Back Pain Treatment in Sparks, NV",
    description:
      "Don't let back aches keep you from living fully. We offer non-surgical care in Sparks to help you move comfortably again. Contact our Sparks clinic today.",
    priority: 0.8,
  },
  {
    slug: "/conditions/neck-pain/",
    title: "Compassionate Care for Neck Pain",
    description:
      "Constant neck soreness and stiffness make it hard to focus. Our team works on gently aligning your spine and reducing muscle strain. Book a visit now.",
    priority: 0.8,
  },
  {
    slug: "/conditions/shoulder-pain/",
    title: "Get Help From an Expert Shoulder Pain Doctor in Reno, NV",
    description:
      "Trouble lifting your arm or sleeping on your side? See our shoulder specialist in Reno, NV to repair soft tissue and restore your mobility. Book today!",
    priority: 0.8,
  },
  {
    slug: "/conditions/knee-pain/",
    title: "Knee Pain | Trusted Knee Pain Doctor in Reno, NV",
    description:
      "Find relief at Reno Regenerative. Explore our Knee Pain page to learn how our Reno pain management clinic can help you. Call now!",
    priority: 0.8,
  },
  {
    slug: "/conditions/joint-pain/",
    title: "Natural Joint Pain Relief to Keep You Moving Comfortably",
    description:
      "Wear and tear can leave your joints stiff and swollen. Reno Regenerative uses targeted injections to repair tissue and calm inflammation. Call us now!",
    priority: 0.8,
  },
  {
    slug: "/conditions/whiplash/",
    title: "Whiplash Therapy Options",
    description:
      "Whiplash causes severe tension and limited neck movement. Reno Regenerative provides targeted therapies to reduce swelling and support safe healing. Call today!",
    priority: 0.8,
  },
  {
    slug: "/conditions/neuropathy/",
    title: "Neuropathy | Relief From Nerve Pain",
    description:
      "Neuropathy often causes numbness that throws off your balance. Reno Regenerative aims to heal damaged nerves naturally, improving your daily comfort. Visit us!",
    priority: 0.8,
  },
  {
    slug: "/conditions/pain-relief/",
    title: "Explore Holistic Pain Management in Sparks, NV",
    description:
      "Living with daily aches drains your energy. Our pain care clinic in Sparks, NV focuses on natural healing to help you find true comfort. Call us today!",
    priority: 0.8,
  },
  {
    slug: "/conditions/hormonal-imbalance/",
    title: "Find Your Spark Again With Hormonal Imbalance Care",
    description:
      "Unexplained fatigue, weight gain, and brain fog often stem from shifting hormones. We use bioidentical therapy to restore balance. Visit us!",
    priority: 0.8,
  },
  {
    slug: "/conditions/sexual-dysfunction/",
    title: "Restorative Care for Men Experiencing Sexual Dysfunction",
    description:
      "Intimacy struggles like ED can be deeply frustrating. We use therapies like ED shockwave therapy to improve blood flow and restore confidence. Reach out now.",
    priority: 0.8,
  },
];

// --- BLOG POSTS (29) ---
const POST_SLUGS: { slug: string; title: string; description: string }[] = [
  {
    slug: "/treat-your-sports-injury-with-chiropractic-care/",
    title: "Treat Your Sports Injury With Chiropractic Care",
    description:
      "Learn how chiropractic care can help athletes recover from sports injuries, restore mobility, and prevent re-injury.",
  },
  {
    slug: "/heal-and-thrive-the-power-of-regenerative-medicine/",
    title: "Heal and Thrive: The Power of Regenerative Medicine",
    description:
      "Discover how regenerative medicine helps the body heal naturally and restore long-term wellness.",
  },
  {
    slug: "/do-you-suffer-from-these-symptoms-of-arthritis/",
    title: "Do You Suffer From These Symptoms of Arthritis?",
    description:
      "Recognize the most common symptoms of arthritis and explore non-surgical treatment options in Reno, NV.",
  },
  {
    slug: "/that-numbness-in-your-feet-when-walking-could-be-neuropathy/",
    title:
      "That Numbness in Your Feet When Walking Could Be Neuropathy",
    description:
      "Numbness or tingling in your feet while walking? It could be neuropathy. Learn the signs and treatment options.",
  },
  {
    slug: "/get-rid-of-mid-back-stiffness-after-whiplash-without-surgery/",
    title:
      "Get Rid of Mid-Back Stiffness After Whiplash — Without Surgery",
    description:
      "Non-surgical care to relieve mid-back stiffness and pain after a whiplash injury.",
  },
  {
    slug: "/how-nutritional-iv-therapy-can-combat-stress-fatigue/",
    title: "How Nutritional IV Therapy Can Combat Stress & Fatigue",
    description:
      "How nutritional IV therapy delivers vitamins and minerals directly to your bloodstream to fight stress and fatigue.",
  },
  {
    slug: "/reclaim-your-life-with-non-surgical-joint-injections-in-reno/",
    title:
      "Reclaim Your Life With Non-Surgical Joint Injections in Reno",
    description:
      "Non-surgical joint injections offer powerful pain relief and support natural healing for damaged joints.",
  },
  {
    slug: "/balancing-act-how-bioidentical-hormone-therapy-can-restore-your-vitality-and-well-being/",
    title:
      "Balancing Act: How Bioidentical Hormone Therapy Can Restore Your Vitality and Well-Being",
    description:
      "Bioidentical hormone therapy can rebalance your body and restore energy, sleep, mood and overall well-being.",
  },
  {
    slug: "/knot-your-average-pain-how-trigger-point-injections-can-relieve-chronic-muscle-tension/",
    title:
      "Knot Your Average Pain: How Trigger Point Injections Can Relieve Chronic Muscle Tension",
    description:
      "Trigger point injections release stubborn muscle knots and provide lasting relief from chronic muscle tension.",
  },
  {
    slug: "/from-stiff-to-strong-how-physical-therapy-in-reno-can-restore-your-mobility-after-years-of-joint-pain/",
    title:
      "From Stiff to Strong: How Physical Therapy in Reno Can Restore Your Mobility",
    description:
      "Reclaim mobility after years of joint pain through targeted physical therapy in Reno, NV.",
  },
  {
    slug: "/recovering-from-surgery-why-post-operative-physical-therapy-is-the-key-to-faster-safer-healing/",
    title:
      "Recovering From Surgery: Why Post-Operative Physical Therapy Is the Key",
    description:
      "Post-operative physical therapy speeds healing and reduces complications after surgery.",
  },
  {
    slug: "/struggling-with-dizziness-or-vertigo-physical-therapy-can-help-you-steady-yourself-in-reno/",
    title:
      "Struggling With Dizziness or Vertigo? Physical Therapy Can Help",
    description:
      "Vestibular and balance physical therapy can help relieve dizziness and vertigo in Reno, NV.",
  },
  {
    slug: "/the-knee-that-locks-up-why-it-happens-and-how-knee-decompression-can-free-your-movement/",
    title:
      "The Knee That Locks Up: How Knee Decompression Can Free Your Movement",
    description:
      "Why your knee locks up — and how non-surgical knee decompression can restore smooth, pain-free movement.",
  },
  {
    slug: "/mood-swings-anxiety-irritability-when-hormones-not-stress-are-the-real-problem/",
    title:
      "Mood Swings, Anxiety, Irritability — When Hormones Are the Real Problem",
    description:
      "Hormone imbalance can drive mood swings, anxiety and irritability. Learn how bioidentical hormones may help.",
  },
  {
    slug: "/why-your-joints-feel-stiff-every-morning-what-your-body-is-trying-to-tell-you/",
    title:
      "Why Your Joints Feel Stiff Every Morning",
    description:
      "Morning joint stiffness can be a warning sign. Here's what your body is trying to tell you.",
  },
  {
    slug: "/signs-back-pain-needs-spinal-decompression/",
    title: "Signs Your Back Pain Needs Spinal Decompression",
    description:
      "Key signs that your back pain may benefit from non-surgical spinal decompression therapy.",
  },
  {
    slug: "/is-regenerative-medicine-right-for-knee-pain/",
    title: "Is Regenerative Medicine Right for Knee Pain?",
    description:
      "Explore whether regenerative medicine therapies can help relieve your knee pain naturally.",
  },
  {
    slug: "/regenerative-medicine-for-chronic-back-pain/",
    title: "Regenerative Medicine for Chronic Back Pain",
    description:
      "How regenerative medicine offers a non-surgical path to lasting relief from chronic back pain.",
  },
  {
    slug: "/why-your-knee-feels-like-its-grinding-how-knee-decompression-can-ease-annoying-joint-catching/",
    title:
      "Why Your Knee Feels Like It's Grinding — How Knee Decompression Helps",
    description:
      "Knee grinding or catching? Learn how knee decompression therapy can ease the discomfort.",
  },
  {
    slug: "/why-youre-still-exhausted-after-8-hours-of-sleep-the-hidden-hormone-imbalance-most-people-miss/",
    title:
      "Why You're Still Exhausted After 8 Hours of Sleep",
    description:
      "Persistent fatigue despite a full night's sleep may point to a hidden hormone imbalance.",
  },
  {
    slug: "/unlock-your-best-self-how-regenerative-medicine-boosts-hormone-health/",
    title:
      "Unlock Your Best Self: How Regenerative Medicine Boosts Hormone Health",
    description:
      "How regenerative medicine and hormone optimization work together to support energy, mood, and wellness.",
  },
  {
    slug: "/why-your-knees-hurt-more-when-going-down-stairs-what-it-means-for-your-joint-health/",
    title:
      "Why Your Knees Hurt More When Going Down Stairs",
    description:
      "Pain going down stairs can indicate joint issues. Here's what it means and how to treat it.",
  },
  {
    slug: "/after-the-fall-how-physical-therapy-in-reno-can-get-you-back-on-your-feet-safely/",
    title:
      "After the Fall: How Physical Therapy in Reno Can Get You Back on Your Feet",
    description:
      "Recover safely after a fall with targeted physical therapy in Reno, NV.",
  },
  {
    slug: "/life-after-whiplash-when-seek-care/",
    title: "Life After Whiplash: When to Seek Care",
    description:
      "Whiplash symptoms can linger. Learn when to seek professional care for lasting recovery.",
  },
  {
    slug: "/backpackers-guide-sciatica-treatment-options/",
    title: "Backpacker's Guide to Sciatica Treatment Options",
    description:
      "A backpacker's guide to sciatica — symptoms, causes, and the treatment options that can get you back on the trail.",
  },
  {    slug: "/chiropractic-care-active-weekends-mountain-adventures/",
    title: "Reno Weekend Athletes Guide to Chiropractic Relief",
    description:
      "Stay active in the Sierra with a trusted chiropractor in Reno, NV, helping reduce pain, improve mobility, and support recovery for weekend adventures.",
  },
  {    slug: "/habits-that-quietly-worsen-knee-pain/",
    title: "Habits That Quietly Worsen Knee Pain",
    description:
      "Common everyday habits that may be silently making your knee pain worse — and what to do instead.",
  },
  {
    slug: "/boost-energy-and-recovery-with-iv-therapy-in-reno/",
    title: "Boost Energy and Recovery With IV Therapy in Reno",
    description:
      "Stay energized all summer with nutritional IV therapy in Reno, supporting hydration, recovery, and wellness for active days and faster bounce backs.",
  },
  {
    slug: "/signs-of-hormone-imbalance-vs-normal-aging-in-reno/",
    title: "Signs of Hormone Imbalance vs Normal Aging in Reno",
    description:
      "Learn how to spot hormone imbalance versus normal aging and when to consider hormone therapy in Reno, NV for better energy, mood, and health.",
  },
  {
    slug: "/summer-sports-back-pain-relief-tips-for-nevada-athletes/",
    title: "Summer Sports Back Pain Relief Tips for Nevada Athletes",
    description:
      "Stay active all summer with expert back pain treatment in Reno for Nevada athletes, featuring non-surgical options to reduce pain and improve mobility.",
  },
  {
    slug: "/reno-road-trip-knee-pain-when-to-see-a-doctor/",
    title: "Reno Road Trip Knee Pain: When to See a Doctor",
    description:
      "Road trip knee pain can flare in summer. Learn when to visit a knee pain doctor in Reno and explore integrative options to reduce pain and avoid surgery.",
  },
  {
    slug: "/persistent-shoulder-pain-may-start-in-your-spine/",
    title: "Persistent Shoulder Pain May Start in Your Spine",
    description:
      "Learn how spine issues can trigger shoulder pain and when to see a shoulder pain doctor in Reno for integrative, non-surgical treatment options.",
  },
  {
    slug: "/integrative-medicine-solutions-for-pain-relief-in-reno/",
    title: "Integrative Medicine Solutions for Pain Relief in Reno",
    description:
      "Explore integrative medicine in Reno with natural, non-surgical care like chiropractic, injections, IV therapy, and hormone support to relieve pain.",
  },
  {
    slug: "/common-shoulder-pain-triggers-for-active-adults-in-reno/",
    title: "Common Shoulder Pain Triggers for Active Adults in Reno",
    description:
      "Discover hidden causes of shoulder pain in active adults and when to see a Reno shoulder pain doctor for non-surgical, integrative care.",
  },
  {
    slug: "/when-knee-pain-signals-a-need-for-expert-care-in-reno/",
    title: "When Knee Pain Signals a Need for Expert Care in Reno",
    description:
      "Learn local warning signs your knee pain needs a pain management clinic in Reno, plus integrative options to relieve pain and avoid surgery.",
  },
  {
    slug: "/signs-joint-pain-may-need-regenerative-treatment/",
    title: "Signs Joint Pain May Need Regenerative Treatment",
    description:
      "Learn everyday warning signs your aches may need regenerative medicine in Reno, plus non surgical options to relieve pain and restore mobility.",
  },
  {
    slug: "/hormone-therapy-options-for-joint-pain-in-reno-nv/",
    title: "Hormone Therapy Options for Joint Pain in Reno, NV",
    description:
      "Discover how hormone therapy in Reno, NV may reduce joint pain, improve mobility, and support healing with integrative care for lasting relief.",
  },
  {
    slug: "/reno-commute-and-workstation-fixes-ergonomic-tweaks-for-faster-back-pain-relief/",
    title: "Reno Ergonomic Commute Tips for Faster Back Pain Relief",
    description:
      "Learn how small commute and workstation changes can boost back pain treatment in Reno, easing strain and supporting quicker recovery at work and home.",
  },
  {
    slug: "/regenerative-medicine-or-decompression-for-back-pain/",
    title: "Regenerative Medicine vs. Spinal Decompression in Reno: Who Benefits?",
    description:
      "Compare treatment options for chronic back pain and see who benefits most from regenerative medicine in Reno, plus spinal decompression and integrative care.",
  },
  {
    slug: "/your-first-90-days-of-integrative-care-in-reno/",
    title: "Your First 90 Days of Integrative Care in Reno",
    description:
      "Explore what to expect from integrative medicine in Reno during your first 90 days, from evaluation to personalized therapies for pain relief and mobility.",
  },
  {
    slug: "/inside-integrative-medicine-in-reno-a-patients-first-90-days/",
    title: "Inside Integrative Medicine in Reno: A Patient's First 90 Days",
    description:
      "Curious what integrative care actually looks like week to week? Follow a typical new-patient journey through evaluation, treatment, and progress checks over 90 days.",
  },
  {
    slug: "/living-with-arthritis-in-renos-climate-when-to-seek-treatment/",
    title: "Living with Arthritis in Reno's Climate: When to Seek Treatment",
    description:
      "Reno's dry air, altitude, and big temperature swings can make arthritis pain louder. Learn how the local climate affects your joints and when it is time to look into arthritis treatment in Reno.",
  },
  {
    slug: "/reno-stem-cell-therapy-costs-safety-and-clinic-tips/",
    title: "Reno Stem Cell Therapy Costs, Safety, And Clinic Tips",
    description:
      "Use this patient checklist to compare stem cell therapy in Reno, understand costs and safety, and spot red flags before choosing a clinic",
  },
  {
    slug: "/stem-cell-prp-or-exosomes-in-reno-how-to-choose/",
    title: "Stem Cell, PRP, Or Exosomes in Reno: How to Choose",
    description:
      "Compare stem cell therapy in Reno with PRP and exosomes. Learn what is legal, what evidence supports, and how to pick the right option for pain relief",
  },
  {
    slug: "/why-hormone-therapy-in-reno-nv-matters-for-joint-pain-relief/",
    title: "Why Hormone Therapy in Reno NV Matters for Joint Pain Relief",
    description:
      "Joint pain is not always just wear and tear. See how shifting hormone levels can drive inflammation and slower recovery, and why balanced hormones matter for lasting joint comfort.",
  },
  {
    slug: "/choosing-between-joint-injections-and-spinal-decompression-in-reno/",
    title: "Choosing Between Joint Injections and Spinal Decompression in Reno",
    description:
      "Not sure whether joint injections or spinal decompression fit your pain better? Compare how each nonsurgical option works and who tends to benefit most from each.",
  },
  {
    slug: "/planning-a-summer-hiking-season-with-chronic-knee-pain/",
    title: "Planning a Summer Hiking Season with Chronic Knee Pain",
    description:
      "Chronic knee pain does not have to keep you off Reno's summer trails. Get a simple plan for training, trail selection, and pacing so you can hike with more confidence.",
  },
];

export const POSTS: PageMeta[] = POST_SLUGS.map((p) => ({
  slug: p.slug,
  title: p.title,
  description: p.description,
  priority: 0.6,
  changefreq: "monthly",
}));

// --- BLOG CATEGORIES ---
export const CATEGORIES: PageMeta[] = [
  {
    slug: "/category/blog/",
    title: d("Blog"),
    description: "All blog articles from Reno Regenerative Medicine.",
    priority: 0.4,
  },
  {
    slug: "/category/regenerative-medicine/",
    title: d("Regenerative Medicine"),
    description:
      "Articles on regenerative medicine treatments, research and patient outcomes.",
    priority: 0.4,
  },
];

export const ALL_PAGES: PageMeta[] = [...PAGES, ...POSTS, ...CATEGORIES];

export function getMeta(slug: string): PageMeta | undefined {
  return ALL_PAGES.find((p) => p.slug === slug);
}
