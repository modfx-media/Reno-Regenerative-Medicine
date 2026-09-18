import ScrollLink from "./ScrollLink";

const SERVICES = [
  { label: "Joint Injections", href: "/joint-injections/" },
  { label: "Trigger Point Injections", href: "/trigger-point-injections/" },
  { label: "Physical Therapy", href: "/physical-therapy/" },
  { label: "Spinal Decompression", href: "/spinal-decompression/" },
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Nutritional IV's", href: "/nutritional-ivs/" },
  { label: "Bioidentical Hormones", href: "/bioidentical-hormone-optimization-therapy/" },
  { label: "ED Shockwave Therapy", href: "/ed-shockwave-therapy/" },
];

const PATIENTS = [
  { label: "New Patients", href: "/new-patients/" },
  { label: "Appointments", href: "/contact/" },
  { label: "Patient Reviews", href: "/reviews/" },
  { label: "Video Testimonials", href: "/video-testimonials/" },
  { label: "Seminars", href: "/seminars/" },
  { label: "Blog", href: "/blog/" },
];

const PRACTICE = [
  { label: "About", href: "/about/" },
  { label: "Reno Office", href: "/reno-office/" },
  { label: "Fernley Office", href: "https://ascensionhealthnv.com/" },
  { label: "Areas We Serve", href: "/areas-we-serve/" },
  { label: "Contact", href: "/contact/" },
  { label: "Careers", href: "/careers/" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white/80 pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ScrollLink href="/" className="font-serif-display text-3xl text-white tracking-wide leading-none block">
              <span className="text-olive">Reno</span> Regenerative
              <span className="block text-[10px] tracking-[0.35em] uppercase text-white/50 mt-2">
                Medicine · Reno, NV
              </span>
            </ScrollLink>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Innovative and integrative medicine in Reno, Nevada — chiropractic, therapeutic exercise, regenerative joint injections and IV nutrition for patients across Northern Nevada and surrounding California communities.
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <a href="tel:+17756839026" className="block hover:text-olive transition-colors">(775) 683-9026</a>
              <p className="text-white/70">730 Sandhill Road #120<br />Reno, NV 89521</p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.facebook.com/renoregenerative" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/70 hover:text-olive transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCAoMwIvwTV-jKzS7MZttmVg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/70 hover:text-olive transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23 7.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.9 3.5 12 3.5 12 3.5s-4.9 0-8 .4c-.4.1-1.3.1-2.1 1C1.2 5.6 1 7.2 1 7.2S.8 9.1.8 11v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.4 7.7.4s4.9 0 8-.4c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8ZM9.7 14.6V8.4l6.2 3.1-6.2 3.1Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-olive mb-5">Services</h3>
              <ul className="space-y-3 text-sm">
                {SERVICES.map((l) => (<li key={l.href}><ScrollLink href={l.href} className="hover:text-olive transition-colors">{l.label}</ScrollLink></li>))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-olive mb-5">Patients</h3>
              <ul className="space-y-3 text-sm">
                {PATIENTS.map((l) => (<li key={l.href}><ScrollLink href={l.href} className="hover:text-olive transition-colors">{l.label}</ScrollLink></li>))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-olive mb-5">Practice</h3>
              <ul className="space-y-3 text-sm">
                {PRACTICE.map((l) => {
                  const isExternal = /^https?:\/\//.test(l.href);
                  return (
                    <li key={l.href}>
                      <ScrollLink
                        href={l.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="hover:text-olive transition-colors"
                      >
                        {l.label}
                      </ScrollLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Reno Regenerative Medicine. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li><ScrollLink href="/privacy-policy/" className="hover:text-olive transition-colors">Privacy Policy</ScrollLink></li>
            <li><ScrollLink href="/accessibility/" className="hover:text-olive transition-colors">Accessibility</ScrollLink></li>
            <li><ScrollLink href="/sitemap/" className="hover:text-olive transition-colors">Sitemap</ScrollLink></li>
          </ul>
          <p>
            Website by{" "}
            <a
              href="https://modfxmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-olive transition-colors"
            >
              ModFXMedia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
