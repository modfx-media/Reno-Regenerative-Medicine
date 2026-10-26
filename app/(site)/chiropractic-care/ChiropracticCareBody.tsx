"use client";

import ServiceShell from "../components/ServiceShell";
import {
  ExactContent,
  ProcessSteps,
  IconCardGrid,
  RelatedServices,
} from "../components/ServiceBlocks";

const PARAGRAPHS = [
  "We specialize in correcting your body's misalignments. Our goal is to ensure that your spine and the rest of your body are working harmoniously. To do so, we will help you develop a plan that will require light stretching, some exercise, chiropractic care, and a healthy diet.",
];

const STEPS = [
  { n: "01", title: "Postural & spinal exam", body: "We assess alignment, mobility, and the patterns driving your pain." },
  { n: "02", title: "Personalized adjustment", body: "Gentle, targeted adjustments restore motion to restricted segments." },
  { n: "03", title: "Move, stretch & strengthen", body: "Stretching, exercise, and nutrition keep your spine healthy at home." },
];

const CONDITIONS = [
  {
    title: "Back Pain",
    body: "Chronic or acute lower-back discomfort and stiffness.",
    icon: <><path d="M9 3v18M15 3v18M9 8h6M9 14h6" /></>,
  },
  {
    title: "Neck Pain",
    body: "Tension, headaches, and reduced range of motion in the cervical spine.",
    icon: <><circle cx="12" cy="6" r="2" /><path d="M12 8v6M8 22h8" /></>,
  },
  {
    title: "Shoulder Pain",
    body: "Rotator-cuff irritation, impingement, and posture-driven pain.",
    icon: <><circle cx="12" cy="12" r="3" /><path d="M5 12h2M17 12h2M12 5v2M12 17v2" /></>,
  },
  {
    title: "Whiplash",
    body: "Targeted recovery after auto accidents and rear-end collisions.",
    icon: <><path d="M3 12c4-6 14-6 18 0M3 18c4-6 14-6 18 0" /></>,
  },
  {
    title: "Sciatica",
    body: "Radiating leg pain caused by lumbar nerve irritation.",
    icon: <><path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" /></>,
  },
  {
    title: "Joint Pain",
    body: "Misalignment-driven pain in knees, hips, shoulders, and wrists.",
    icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></>,
  },
];

export default function ChiropracticCareBody() {
  return (
    <ServiceShell>
      <div className="space-y-10">
        <ExactContent
          eyebrow="Chiropractic Care"
          heading="Restore alignment, restore function"
          paragraphs={PARAGRAPHS}
        />
        <ProcessSteps heading="What to Expect From Chiropractic Care" steps={STEPS} />
        <IconCardGrid
          eyebrow="What We Treat"
          heading="Conditions We Treat With Chiropractic"
          cards={CONDITIONS}
          columns={3}
        />
        <RelatedServices
          slugs={["spinal-decompression", "physical-therapy", "joint-injections"]}
        />
      </div>
    </ServiceShell>
  );
}
