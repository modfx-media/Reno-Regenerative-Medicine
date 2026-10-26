"use client";

import ServiceShell from "../components/ServiceShell";
import {
  ExactContent,
  ProcessSteps,
  IconBulletList,
} from "../components/ServiceBlocks";

const PARAGRAPHS: React.ReactNode[] = [
  "The primary benefit of IV therapy is that it delivers the needed products directly to the bloodstream. Rather than waiting for nutrients to be absorbed through the digestive system, our patients can quickly receive them where the body will actually utilize them. Most therapies take between 15 and 30 minutes to administer, and we even have some patients come in on their lunch breaks!",
  "IV therapy can help with a wide range of concerns from weight loss to anti-aging and may ease the following symptoms and more:",
  "Some of our patients receive regular IV therapy on a weekly or bi-weekly basis, while others come in only as needed. Our doctor will be able to cover the available options and create a custom treatment plan for each patient, depending on their specific desires, needs, and schedules.",
  <>If you have questions about IV therapy or would like to schedule an appointment, please call our office at{" "}
    <a href="tel:+17756839026" className="font-medium text-[#4a7c59] hover:text-[#2e5e3f] underline underline-offset-4">(775) 683-9026</a>{" "}today!
  </>,
];

const SYMPTOMS = [
  "Common skin problems, such as dull skin and acne",
  "Dehydration",
  "Stress",
  "Muscle soreness or fatigue",
  "Common cold",
  "Low energy and fatigue",
  "Excess weight",
];

const STEPS = [
  { n: "01", title: "Consultation", body: "We discuss your goals, history, and any current symptoms." },
  { n: "02", title: "Custom Formula", body: "Vitamins, minerals, and amino acids selected for your needs." },
  { n: "03", title: "15–30 Min Session", body: "Relax in our IV lounge and get back to your day, recharged." },
];

const BENEFICIARIES = [
  { title: "Low energy & burnout", body: "Replenish what your daily routine has used up." },
  { title: "Frequent dehydration", body: "Faster, more complete rehydration than oral fluids." },
  { title: "Athletes & active adults", body: "Recover faster from training and competition." },
  { title: "Travelers", body: "Bounce back from flights and time-zone changes." },
  { title: "Chronic stress", body: "Support adrenal function with B-complex and magnesium." },
  { title: "Cold-season immune support", body: "High-dose vitamin C and zinc when you need it most." },
];

export default function NutritionalIVsBody() {
  return (
    <ServiceShell>
      <div className="space-y-10">
        <ExactContent
          eyebrow="Nutritional IVs"
          heading="Nutrients straight to your bloodstream"
          paragraphs={PARAGRAPHS}
          inlineList={[{ afterParagraphIndex: 1, items: SYMPTOMS }]}
        />
        <ProcessSteps heading="How IV Therapy Works" steps={STEPS} />
        <IconBulletList heading="Who Can Benefit?" items={BENEFICIARIES} />
      </div>
    </ServiceShell>
  );
}
