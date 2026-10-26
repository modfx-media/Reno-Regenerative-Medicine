export default function MapSection() {
  return (
    <section className="bg-white" aria-labelledby="map-heading">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.3em] text-olive-deep">
            Visit Us
          </span>
          <h2
            id="map-heading"
            className="mt-4 font-serif-display text-4xl text-ink"
          >
            Reno <em className="italic text-olive-deep">Office</em>
          </h2>
          <address className="not-italic mt-6 space-y-3 text-ink/80">
            <p>
              Reno Regenerative Medicine
              <br />
              Knee, Back &amp; Joint Pain Clinic
            </p>
            <p>
              730 Sandhill Road #120
              <br />
              Reno, NV 89521
            </p>
            <p>
              <a
                href="tel:+17756839026"
                className="text-ink hover:text-olive-deep border-b border-ink/20 hover:border-olive-deep pb-0.5 transition-colors"
              >
                (775) 683-9026
              </a>
            </p>
          </address>
        </div>
        <div className="lg:col-span-8">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-sm border border-sand">
            <iframe
              title="Map to Reno Regenerative Medicine, 730 Sandhill Road #120, Reno, NV 89521"
              src="https://www.google.com/maps?q=730+Sandhill+Road+%23120,+Reno,+NV+89521&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
