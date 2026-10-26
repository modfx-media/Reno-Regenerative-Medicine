"use client";

import ServiceShell from "../components/ServiceShell";
import {
  ExactContent,
  IconBulletList,
  ProcessSteps,
} from "../components/ServiceBlocks";

const PARAGRAPHS: React.ReactNode[] = [
  "Here at Reno Regenerative Medicine, we are proud to offer trigger point injections for patients struggling with fibromyalgia, tension headaches, myofascial pain, and muscle pain in the arms, legs, lower back and neck.",
  "During your appointment, we will locate the area where you are experiencing pain and inject small amounts of anesthetic to help alleviate your symptoms.",
  "This procedure is safe and the risk of possible complications is very low. You may experience soreness or numbness at the injection site for a temporary period of time. While you should avoid strenuous activity for a few days, you should be able to actively use your muscles immediately following treatment.",
  <>For more information or to request an appointment, contact us today at{" "}
    <a href="tel:+17756839026" className="font-medium text-[#4a7c59] hover:text-[#2e5e3f] underline underline-offset-4">(775) 683-9026</a>.
  </>,
];

const CONDITIONS = [
  { title: "Fibromyalgia", body: "Targeted relief for the tender points across the body." },
  { title: "Tension headaches", body: "Calm the muscles that drive your headache pattern." },
  { title: "Myofascial pain syndrome", body: "Persistent muscle pain that hasn't improved with massage." },
  { title: "Lower back muscle pain", body: "Release knots in the lumbar paraspinal muscles." },
  { title: "Neck and shoulder tension", body: "Trigger points in the trapezius and surrounding tissue." },
  { title: "Arm or leg muscle pain", body: "Localized injections for chronic limb muscle pain." },
];

const STEPS = [
  { n: "01", title: "Locate the trigger point", body: "We palpate and identify the exact muscle band reproducing your pain." },
  { n: "02", title: "Precise injection", body: "A small dose of local anesthetic is delivered into the painful knot." },
  { n: "03", title: "Move & recover", body: "Use your muscles immediately, but skip strenuous activity for a few days." },
];

export default function TriggerPointInjectionsBody() {
  return (
    <ServiceShell>
      <div className="space-y-10">
        <ExactContent
          eyebrow="Trigger Point Injections"
          heading="Targeted relief for stubborn muscle pain"
          paragraphs={PARAGRAPHS}
        />
        <IconBulletList
          eyebrow="What We Treat"
          heading="Conditions Treated With Trigger Point Injections"
          items={CONDITIONS}
        />
        <ProcessSteps heading="What to Expect" steps={STEPS} />
      </div>
    </ServiceShell>
  );
}
