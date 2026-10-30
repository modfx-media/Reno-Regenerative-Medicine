"use client";

import ServiceShell from "../components/ServiceShell";
import {
  ExactContent,
  ProcessSteps,
  ChecklistSection,
  IconCardGrid,
  RelatedServices,
} from "../components/ServiceBlocks";

const PARAGRAPHS = [
  "If you've been hurt in a collision, every day without treatment can make recovery harder. Reno Regenerative Medicine helps auto accident injury patients from the Eugene, OR area regain mobility, calm their pain, and get back to the activities they love.",
  "Car crash neck pain and whiplash often surface hours or even days after impact. Our team evaluates the full picture — spine, joints, and soft tissue — so accident victims across the Eugene Oregon area receive a recovery plan built around their specific injuries instead of a one-size-fits-all protocol.",
  "We proudly serve Northern Nevada and welcome patients from surrounding Oregon communities, including Eugene, OR. Whether your injury came from a rear-end collision or a higher-speed crash, our regenerative and chiropractic approach is designed to address the root cause of your pain rather than mask it.",
];

const STEPS = [
  {
    n: "01",
    title: "Same-day injury evaluation",
    body: "We assess your spine, joints, and soft tissue to identify every injury caused by the accident.",
  },
  {
    n: "02",
    title: "Personalized recovery plan",
    body: "You receive a treatment roadmap tailored to your whiplash, neck pain, or motor vehicle accident injuries.",
  },
  {
    n: "03",
    title: "Rehabilitate & strengthen",
    body: "Targeted therapy restores range of motion and rebuilds strength so you heal fully and stay pain-free.",
  },
];

const SERVICES = [
  {
    title: "Chiropractic Care",
    body: "Gentle adjustments restore the spinal alignment disrupted by whiplash and motor vehicle accident impact.",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M8 7h8M8 12h8M8 17h8" />
      </>
    ),
  },
  {
    title: "Spinal Decompression",
    body: "Relieve nerve pressure and disc injury that frequently follow a car crash or rear-end collision.",
    icon: (
      <>
        <path d="M12 2v20" />
        <path d="M7 6l5-3 5 3M7 18l5 3 5-3" />
      </>
    ),
  },
  {
    title: "Joint Injections",
    body: "Target inflammation in joints aggravated by collision trauma for durable auto injury pain relief.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </>
    ),
  },
  {
    title: "Trigger Point Injections",
    body: "Release the tight, painful muscle knots that develop after an auto accident or sudden impact.",
    icon: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
      </>
    ),
  },
];

const SYMPTOMS = [
  "Neck pain or stiffness after a car crash",
  "Headaches that began following the collision",
  "Shoulder, mid-back, or lower-back pain",
  "Numbness or tingling in the arms or hands",
  "Reduced range of motion or dizziness",
  "Pain that worsens days after the accident",
];

export default function AutoAccidentEugeneBody() {
  return (
    <ServiceShell>
      <div className="space-y-10">
        <ExactContent
          eyebrow="Auto Accident Injury"
          heading="Car Accident Whiplash Treatment"
          paragraphs={PARAGRAPHS}
        />
        <ProcessSteps
          eyebrow="How We Help"
          heading="Eugene Oregon Injury Recovery"
          steps={STEPS}
        />
        <ChecklistSection
          eyebrow="Don't Wait to Heal"
          heading="After a Collision, You Need a Plan"
          intro="If any of these symptoms sound familiar after a wreck, an evaluation should be your next step. Untreated auto injuries can become chronic — patients in the Eugene, OR area shouldn't put recovery on hold."
          items={SYMPTOMS}
        />
        <IconCardGrid
          eyebrow="Post-Accident Care"
          heading="Treatments for Motor Vehicle Accident Recovery"
          intro="Each therapy below is tailored for accident victims rebuilding after a crash."
          cards={SERVICES}
          columns={2}
        />
        <RelatedServices
          slugs={[
            "chiropractic-care",
            "spinal-decompression",
            "joint-injections",
          ]}
        />
      </div>
    </ServiceShell>
  );
}
