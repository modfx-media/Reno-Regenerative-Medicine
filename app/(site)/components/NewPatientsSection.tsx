import Link from "next/link";

export default function NewPatientsSection() {
  return (
    <section
      className="relative py-32 text-white"
      aria-labelledby="new-patients-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-forest-deep/75" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-olive">
          Now Welcoming
        </span>
        <h2
          id="new-patients-heading"
          className="mt-4 font-serif-display text-4xl sm:text-5xl md:text-6xl"
        >
          New <em className="italic text-olive">Patients</em>
        </h2>
        <p className="mt-8 text-lg text-white/85 leading-relaxed">
          We acknowledge that going to a new place for the first time can be nerve
          racking. We want to do everything we can to eliminate any unnecessary
          stressors, which is why we include the option of printing and completing
          your forms at home. We think of our patients as part of our extended
          family, and we are excited to meet you!
        </p>
        <div className="mt-10">
          <Link
            href="/new-patients/"
            className="inline-flex items-center rounded-full bg-olive px-7 py-3.5 text-sm font-medium text-forest-deep hover:bg-white transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
