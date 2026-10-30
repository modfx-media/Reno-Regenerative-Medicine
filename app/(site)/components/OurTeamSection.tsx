import Link from "next/link";

export default function OurTeamSection() {
  return (
    <section
      className="bg-sand py-24"
      aria-labelledby="our-team-heading"
    >
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        <div
          className="aspect-[4/5] w-full bg-cover bg-center rounded-sm shadow-sm"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=80')",
          }}
          role="img"
          aria-label="Reno Regenerative Medicine team providing patient care"
        />
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-olive-deep">
            Meet the team
          </span>
          <h2
            id="our-team-heading"
            className="mt-4 font-serif-display text-4xl sm:text-5xl md:text-6xl text-ink"
          >
            Our <em className="italic text-olive-deep">Team</em>
          </h2>
          <p className="mt-8 text-ink/80 leading-relaxed text-lg">
            The team appreciate that every patient has individualized needs and
            concerns and adapts all of their treatment plans to address the
            uniqueness of each patient. Their treatment approach focuses on
            relieving pain and improving physical function for better overall
            health and well-being. The team provides effective hands-on care and
            innovative medicine services...
          </p>
          <div className="mt-10">
            <Link
              href="/about/"
              className="inline-flex items-center rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
