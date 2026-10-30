"use client";

import ServiceShell from "../components/ServiceShell";
import {
  ExactContent,
  ProcessSteps,
  IconBulletList,
  IconCardGrid,
} from "../components/ServiceBlocks";

const PARAGRAPHS = [
  "Spinal decompression is a non-invasive mechanical procedure performed within our office to help alleviate back pain. It involves gently stretching the spine to take pressure off the spinal discs (the cushions that separate the vertebrae in the spine). By relieving this pressure, bulging discs can retract back into place which takes pressure off the nerves in the spine. By decompressing the spine, it permits water, oxygen and other fluids to work their way back into the discs allowing them to heal naturally. Spinal decompression is an excellent option for anyone with chronic back pain who wants to get back to living a pain-free life as quickly as possible.",
];

const STEPS = [
  { n: "01", title: "Diagnose with imaging", body: "On-site X-ray or referral imaging confirms decompression is the right fit for your spine." },
  { n: "02", title: "Comfortable traction session", body: "You lie on the table while gentle, computer-guided traction creates negative pressure in the disc." },
  { n: "03", title: "Heal & rebuild", body: "Repeat sessions paired with targeted exercise restore disc health and lasting relief." },
];

const CANDIDATES = [
  { title: "Chronic low-back pain", body: "Especially with disc bulges, herniation, or degeneration." },
  { title: "Sciatica or leg pain", body: "When pressure on the nerve is reproducing leg symptoms." },
  { title: "Neck pain with disc involvement", body: "Cervical decompression supports the upper spine." },
  { title: "Failed conservative care", body: "When stretching, OTC meds, and rest haven't been enough." },
  { title: "Want to avoid back surgery", body: "A non-invasive alternative to consider before the operating room." },
  { title: "Active adults & manual workers", body: "Get back to lifting, training, and life without pain." },
];

const RELATED_CONDITIONS = [
  {
    title: "Back Pain",
    body: "Chronic and acute lower-back pain — including disc-related pain.",
    icon: <><path d="M9 3v18M15 3v18M9 8h6M9 14h6" /></>,
  },
  {
    title: "Neck Pain",
    body: "Cervical disc pressure, stiffness, and reduced range of motion.",
    icon: <><circle cx="12" cy="6" r="2" /><path d="M12 8v6M8 22h8" /></>,
  },
  {
    title: "Neuropathy",
    body: "Numbness, tingling, or burning driven by nerve compression.",
    icon: <><path d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z" /><circle cx="12" cy="12" r="2" /></>,
  },
  {
    title: "Whiplash",
    body: "Recover from auto-accident and rear-end collision injuries.",
    icon: <><path d="M3 12c4-6 14-6 18 0M3 18c4-6 14-6 18 0" /></>,
  },
];

export default function SpinalDecompressionBody() {
  return (
    <ServiceShell>
      <div className="space-y-10">
        <ExactContent
          eyebrow="Spinal Decompression"
          heading="Take pressure off the spine, naturally"
          paragraphs={PARAGRAPHS}
        />
        <ProcessSteps heading="How Spinal Decompression Works" steps={STEPS} />
        <IconBulletList heading="Who Is a Good Candidate?" items={CANDIDATES} />
        <IconCardGrid
          eyebrow="Related Conditions"
          heading="Conditions we treat with decompression"
          cards={RELATED_CONDITIONS}
          columns={2}
        />
      </div>
    </ServiceShell>
  );
}
