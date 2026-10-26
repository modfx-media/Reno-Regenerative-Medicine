"use client";

import ServiceShell from "../components/ServiceShell";
import {
  ExactContent,
  IconBulletList,
  RelatedServices,
} from "../components/ServiceBlocks";

const PARAGRAPHS = [
  "At Reno Regenerative Medicine, we offer joint injections to those patients struggling with joint pain.",
  "Joint pain can occur in any joint of the body, but most patients who experience joint pain tend to feel it in certain areas such as the wrists, knees, hips, or shoulders. Acute joint pain is typically the result of an injury or direct trauma while chronic joint pain can be caused by rheumatoid arthritis or osteoarthritis.",
  "Persistent and/or severe pain that prohibits your ability to complete everyday tasks should be evaluated by a doctor. If you notice redness, joint deformity, swelling, or reduced range of motion, it is time to schedule an appointment.",
  "If over-the-counter medications and physical therapy prove unable to relieve your pain, we may then proceed with another method of treatment such as joint injections. This non-surgical treatment option can not only help you experience pain relief, but can also provide increased range of motion which can also aid in making physical therapy more comfortable.",
  "One important note: we do not offer diagnostic ultrasound. Our office uses ultrasound for one purpose only — to guide injections in real time. By visualizing the needle as it moves, we can place the medication exactly where it needs to go, protect the surrounding structures, and give you the best chance at meaningful relief from a single visit.",
];

const CANDIDATES = [
  { title: "Persistent or severe joint pain", body: "Pain that limits your daily activities or won't go away with rest." },
  { title: "Reduced range of motion", body: "Stiffness, locking, or difficulty moving the joint normally." },
  { title: "Swelling, redness, or deformity", body: "Visible signs of inflammation or change around the affected joint." },
  { title: "Arthritis (RA or osteoarthritis)", body: "Inflammatory or degenerative joint disease causing chronic pain." },
  { title: "Failed conservative care", body: "OTC medications and PT alone haven't given lasting relief." },
  { title: "Want to avoid surgery", body: "A non-surgical option to try before committing to the operating room." },
];

export default function JointInjectionsBody() {
  return (
    <ServiceShell>
      <div className="space-y-10">
        <ExactContent
          eyebrow="Joint Injections"
          heading="Non-surgical relief for joint pain"
          paragraphs={PARAGRAPHS}
        />
        <IconBulletList
          eyebrow="Who It's For"
          heading="Who Is a Good Candidate for Joint Injections?"
          intro="Joint injections work best when targeted to the right patient. Most people with the following symptoms or conditions are good candidates for evaluation:"
          items={CANDIDATES}
        />
        <RelatedServices
          slugs={["spinal-decompression", "chiropractic-care", "trigger-point-injections"]}
        />
      </div>
    </ServiceShell>
  );
}
