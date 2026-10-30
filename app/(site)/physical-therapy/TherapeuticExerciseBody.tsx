"use client";

import ServiceShell from "../components/ServiceShell";
import { ExactContent, IconCardGrid } from "../components/ServiceBlocks";

const PARAGRAPHS: React.ReactNode[] = [
  "Here at Reno Regenerative Medicine, we specialize in helping you receive the proper care after a personal injury, auto accident or fall. Our staff is devoted to helping you obtain the most comprehensive treatments and the care you deserve.",
  "If you have recently been injured in an accident or suffered any other kind of personal injury, you may be eligible to receive injury rehabilitation in the form of physical therapy.",
  "Physical therapy has many important health benefits. It not only reduces and eliminates pain, but many therapies and technologies can stop pain from recurring. Physical therapy has been known in some cases to even help prevent surgery, and has contributed to the recovery from sports injuries and strokes. If you are having trouble standing, walking or moving—no matter your age—physical therapy can help improve your mobility, improve your balance and prevent falls. Physical therapists can perform specific exercises that quickly restore proper vestibular functioning, and reduce and eliminate symptoms of dizziness or vertigo. In addition to the numerous physical health benefits, physical therapy also aids in the management of women's health concerns such as pregnancy and postpartum care. For pulmonary problems, physical therapy can improve quality of life through strengthening, conditioning and breathing exercises, and help patients clear fluid in the lungs.",
  "From improving mobility to creating a treatment plan after an injury, we are here to help make your recovery and everyday activities easier.",
  <>To discuss your circumstances, personal injury and treatment options with an experienced specialist, please contact us today at{" "}
    <a href="tel:+17756839026" className="font-medium text-[#4a7c59] hover:text-[#2e5e3f] underline underline-offset-4">(775) 683-9026</a>.
  </>,
];

const BENEFITS = [
  {
    title: "Reduce & eliminate pain",
    body: "Hands-on therapy and targeted exercise quiet pain at its source.",
    icon: <><path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z" /></>,
  },
  {
    title: "Improve mobility & balance",
    body: "Restore the strength and stability you need to move with confidence.",
    icon: <><circle cx="12" cy="6" r="2" /><path d="M12 8v6M8 22l4-8 4 8M5 12l7 2 7-2" /></>,
  },
  {
    title: "Recover from injury",
    body: "Sports, auto, and post-surgical recovery — guided every step.",
    icon: <><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></>,
  },
  {
    title: "Prevent surgery",
    body: "Many patients avoid the operating room with a strong PT program.",
    icon: <><path d="M5 12h14M14 6l6 6-6 6" /></>,
  },
];

const HELP = [
  { title: "Auto accident & whiplash recovery", body: "Restore range of motion and confidence after a collision." },
  { title: "Sports injuries", body: "Get back to training with a structured rehab plan." },
  { title: "Personal injury & falls", body: "Targeted therapy after a slip, fall, or workplace injury." },
  { title: "Dizziness & vertigo", body: "Vestibular exercises that quiet symptoms quickly." },
  { title: "Stroke recovery", body: "Reclaim mobility and function with focused therapy." },
  { title: "Pregnancy & postpartum care", body: "Support for the changes your body is going through." },
  { title: "Pulmonary conditions", body: "Strengthening, conditioning, and breathing exercises." },
  { title: "Mobility loss at any age", body: "From seniors to weekend warriors — programs adapted to you." },
];

export default function TherapeuticExerciseBody() {
  return (
    <ServiceShell>
      <div className="space-y-10">
        <ExactContent
          eyebrow="Therapeutic Exercises / Physical Therapy"
          heading="Restore your movement, strength, and confidence"
          paragraphs={PARAGRAPHS}
        />
        <IconCardGrid
          eyebrow="The Benefits"
          heading="Benefits of Physical Therapy"
          cards={BENEFITS}
          columns={2}
        />
        <IconCardGrid
          eyebrow="Who We Help"
          heading="Patients we treat every week"
          cards={HELP.map((h) => ({
            ...h,
            icon: <path d="M20 6 9 17l-5-5" />,
          }))}
          columns={2}
        />
      </div>
    </ServiceShell>
  );
}
