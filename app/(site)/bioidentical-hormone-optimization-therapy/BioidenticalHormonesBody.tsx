"use client";

import ServiceShell from "../components/ServiceShell";
import {
  ExactContent,
  IconCardGrid,
  ChecklistSection,
} from "../components/ServiceBlocks";

const PARAGRAPHS: React.ReactNode[] = [
  "Bioidentical Hormone Replacement Therapy (BHRT) is used to treat both men and women experiencing imbalances or drops in their naturally-occurring hormones. Hormones are responsible for most of your essential bodily functions, so when they are disrupted in any way, cascade effects across all your systems can ensue.",
  "Most commonly, BHRT is utilized to ease symptoms of perimenopause and menopause, although we can use them to treat a wide range of conditions, including:",
  "Symptoms that are common with menopause such as hot flashes, night sweats, mood changes, memory loss, weight gain, sleep issues, and low libido can be dramatically improved with BHRT. For many other conditions, BHRT can improve vitality, energy, mental clarity, mood, weight loss, and even muscle strength!",
  "BHRT comes in several different forms, and at Reno Regenerative Medicine, we carefully take into consideration your symptoms, medical conditions, and history before making a recommendation for a specific treatment. Options may include:",
  "Delivery of BHRT depends largely on the specific therapy option, but include:",
  "Hormones are a vital part of maintaining a healthy and active lifestyle. No one needs to suffer the symptoms of hormone imbalance, and at Reno Regenerative Medicine in Reno, NV, we are confident we can find the right solution for your unique needs.",
  <>If you have questions about how BHRT can help you or would like to request an appointment, call our friendly office today at{" "}
    <a href="tel:+17756839026" className="font-medium text-[#4a7c59] hover:text-[#2e5e3f] underline underline-offset-4">(775) 683-9026</a>!
  </>,
];

const CONDITIONS = [
  "Mental clarity",
  "Low sex drive or libido",
  "Incontinence",
  "Anxiety",
  "Depression",
  "Andropause",
  "Fatigue",
  "Erectile dysfunction",
  "Insulin resistance",
  "Adrenal and thyroid disorders",
  "Osteoporosis",
  "Fibromyalgia",
  "Cancer",
];

const TREATMENT_OPTIONS = [
  "Compounded natural hormones",
  "Nutraceutical supplementation",
];

const DELIVERY = ["Creams", "Patches", "Gels", "Injections"];

const BENEFITS = [
  {
    title: "More Energy & Vitality",
    body: "Patients consistently report renewed energy after weeks of treatment.",
    icon: <><path d="M13 2 3 14h7l-2 8 10-12h-7l2-8z" /></>,
  },
  {
    title: "Better Sleep",
    body: "Hormone balance often improves both sleep quality and duration.",
    icon: <><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></>,
  },
  {
    title: "Sharper Mental Clarity",
    body: "Less brain fog and better focus throughout the day.",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></>,
  },
  {
    title: "Mood & Stress Resilience",
    body: "Stabilized hormones can ease anxiety, irritability, and mood swings.",
    icon: <><path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z" /></>,
  },
  {
    title: "Healthy Libido",
    body: "Restored sexual function for both men and women.",
    icon: <><path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z" /></>,
  },
  {
    title: "Stronger Bones & Muscles",
    body: "Hormone optimization supports muscle mass and bone density.",
    icon: <><path d="M6 4l4 4-4 4 4 4-4 4M18 4l-4 4 4 4-4 4 4 4" /></>,
  },
];

const SYMPTOMS = [
  "Persistent fatigue or low energy",
  "Hot flashes or night sweats",
  "Mood swings, anxiety, or irritability",
  "Brain fog or memory issues",
  "Low sex drive or erectile dysfunction",
  "Unexplained weight gain",
  "Sleep disturbances",
  "Loss of muscle strength or stamina",
];

export default function BioidenticalHormonesBody() {
  return (
    <ServiceShell>
      <div className="space-y-10">
        <ExactContent
          eyebrow="Bioidentical Hormone Therapy"
          heading="Restore your hormones, restore your life"
          paragraphs={PARAGRAPHS}
          inlineList={[
            { afterParagraphIndex: 1, items: CONDITIONS },
            { afterParagraphIndex: 3, items: TREATMENT_OPTIONS },
            { afterParagraphIndex: 4, items: DELIVERY },
          ]}
        />
        <IconCardGrid
          eyebrow="The Benefits"
          heading="Benefits of BHRT"
          intro="Patients tell us BHRT changes their day-to-day in real, noticeable ways."
          cards={BENEFITS}
          columns={3}
        />
        <ChecklistSection
          heading="Is BHRT Right for You?"
          intro="If you recognize yourself in three or more of the symptoms below, it may be time to talk with our team."
          items={SYMPTOMS}
        />
      </div>
    </ServiceShell>
  );
}
