"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Provider = {
  name: string;
  credentials: string;
  role: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  paragraphs: string[];
};

const PROVIDERS: Provider[] = [
  {
    name: "Cornell Calinescu, MD",
    credentials: "FAAFP, BCEM",
    role: "Medical Director",
    image: "/images/Calinescu Pic.jpg",
    imageWidth: 1074,
    imageHeight: 1041,
    paragraphs: [
      "Cornell Calinescu, MD FAAFP BCEM is a triple board-certified physician, Medical Director, clinical investigator, published author, and healthcare leader with more than 25 years of experience spanning Family Medicine, Emergency Medicine, Geriatric Medicine, Primary care, Telemedicine, Age Management Medicine, Regenerative Medicine, and Clinical Research.",
      "Throughout his career, Dr. Calinescu has combined hands-on patient care with physician leadership and medical innovation. He has served in multiple Medical Director and physician leadership roles, overseeing clinical teams, developing standards of care, improving clinical workflows, and helping ensure that patients receive thoughtful, evidence-based, individualized care. His experience across emergency, primary, geriatric, age management, and regenerative medicine provides him with an unusually broad clinical perspective and an appreciation for treating the whole patient rather than simply an isolated diagnosis.",
      "Dr. Calinescu also has extensive experience in clinical research, serving as a Principal Investigator and Sub-Investigator in numerous Phase II–IV pharmaceutical clinical trials across a broad range of therapeutic areas. This research background has reinforced his commitment to scientific rigor, patient safety, and the thoughtful evaluation of emerging therapies and evolving approaches to medicine.",
      "In addition to his clinical and leadership work, Dr. Calinescu is a published author of three books, reflecting his longstanding commitment to education, scholarship, and sharing knowledge beyond the clinical setting.",
      "As a Medical Director, Dr. Calinescu believes that excellent medicine begins with listening. He places particular importance on understanding each patient's history, goals, concerns, and overall health before developing an individualized approach to care. His philosophy combines the fundamentals of sound clinical medicine with an openness to innovation, while maintaining a strong commitment to evidence, safety, and responsible medical decision-making.",
      "Outside of medicine, Dr. Calinescu enjoys skiing, playing tennis, and traveling. He is also an avid reader and collector of first editions, signed works, and rare and antiquarian books—an interest that reflects a lifelong appreciation for history, learning, and the written word.",
    ],
  },
  {
    name: "Rachael Hueftle, MSN",
    credentials: "APRN",
    role: "Nurse Practitioner",
    image: "/images/RachaelHueftle (1).jpg",
    imageWidth: 400,
    imageHeight: 470,
    paragraphs: [
      "With 18 years of advanced practice experience in spine, orthopedics, and pain management, Rachael Hueftle, MSN, APRN, brings a unique combination of advanced clinical expertise, surgical experience, and a deeply patient-centered approach to care.",
      "A graduate of the University of Nevada, Reno, Rachael has built a distinguished career working alongside and learning from some of the most respected spine and orthopedic surgeons in Nevada and Southern California. This extensive training has provided a comprehensive understanding of musculoskeletal and spine conditions, from complex injuries and chronic pain to surgical and non-surgical treatment options.",
      "Throughout her career, Rachael has developed advanced expertise in spine and orthopedic care, pain management, surgical first assisting, and ultrasound-guided injections. Her approach focuses on accurately identifying the underlying source of a patient's symptoms and developing individualized treatment plans designed to restore function, reduce pain, and improve quality of life.",
      "Before becoming a Nurse Practitioner, Rachael spent 10 years as a Trauma ICU Registered Nurse. This experience in the fast-paced, high-acuity environment of trauma care established a strong foundation in critical thinking, complex patient management, and compassionate care. It also shaped a lifelong commitment to remaining calm, attentive, and thorough when caring for patients facing challenging medical conditions.",
      "What truly distinguishes Rachael's practice is a dedication to the person behind the diagnosis. She believes that excellent healthcare begins with listening—understanding each patient's concerns, goals, lifestyle, and expectations—and continues with thoughtful communication and evidence-informed treatment. Every patient deserves to feel heard, respected, and confident in their care.",
      "Outside of medicine, Rachael enjoys an active lifestyle and believes in the importance of staying engaged with the things that bring balance and vitality to life. She loves spending time outdoors hiking, competing in tennis, and traveling. Her passion for competitive tennis and an active lifestyle also gives her a personal appreciation for the importance of mobility, performance, recovery, and maintaining an active quality of life.",
      "With nearly three decades of nursing and advanced practice experience, Rachael combines extensive clinical knowledge with genuine compassion and a commitment to excellent outcomes. Her goal is simple: to provide exceptional, personalized care while helping every patient move toward less pain, greater function, and a better quality of life.",
    ],
  },
];

function ProviderCard({ provider, index }: { provider: Provider; index: number }) {
  const reversed = index % 2 === 1;

  return (
    // opacity-only reveal: a `y`/transform animation here would make this div a
    // transformed ancestor, which breaks `position: sticky` on the photo column below.
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease }}
      className="grid gap-10 lg:grid-cols-12 lg:gap-14"
    >
      {/* Photo column */}
      <div
        className={`lg:col-span-4 ${reversed ? "lg:order-2" : ""}`}
      >
        <div className="lg:sticky lg:top-28">
          <div
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(10,18,13,0.45)] ring-1 ring-[#e8e4d9]"
            style={{ aspectRatio: `${provider.imageWidth} / ${provider.imageHeight}` }}
          >
            <Image
              src={provider.image}
              alt={`${provider.name}, ${provider.role} at Reno Regenerative Medicine`}
              fill
              sizes="(min-width: 1024px) 448px, 90vw"
              quality={95}
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a120d]/60 via-transparent to-transparent" />
          </div>
          <div className="mt-6 text-center lg:text-left">
            <h3 className="font-serif-display text-2xl leading-tight text-[#0a120d]">
              {provider.name}
            </h3>
            <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#4a7c59]">
              {provider.credentials}
            </p>
            <p className="mt-1 text-[14px] text-[#1a2332]/70">{provider.role}</p>
          </div>
        </div>
      </div>

      {/* Bio column */}
      <div className={`lg:col-span-8 ${reversed ? "lg:order-1" : ""}`}>
        <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-[0_24px_56px_-32px_rgba(10,18,13,0.25)] ring-1 ring-[#e8e4d9] space-y-5">
          {provider.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[16.5px] leading-[1.8] text-[#1a2332]/85"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProvidersBody() {
  return (
    // note: overflow-hidden lives on the decorative layer below, not this section —
    // overflow-hidden on an ancestor of the sticky photo column breaks position:sticky.
    <section className="relative bg-[#f6f3ea] py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-[#4a7c59]/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-[#c6b180]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
            Meet the Providers
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
          </span>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl leading-[1.08] tracking-tight text-[#0a120d]">
            The Team Behind Your Care
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-[#1a2332]/75">
            Our providers bring decades of combined clinical experience to help
            you heal naturally, without relying on medications or surgery.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {PROVIDERS.map((provider, i) => (
            <ProviderCard key={provider.name} provider={provider} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
