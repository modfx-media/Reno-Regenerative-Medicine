"use client";

import ScrollLink from "./ScrollLink";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKING_URL } from "../lib/constants";
import { googleReviewsMeta } from "@/lib/reviews";

/* -------------------------------------------------------------------------- */
/*  Nav data                                                                  */
/* -------------------------------------------------------------------------- */

type DropdownItem = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  grid?: boolean;
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "New Patients", href: "/new-patients" },
  {
    label: "Services",
    href: "/services",
    grid: true,
    dropdown: [
      { label: "Joint Injections", href: "/joint-injections/" },
      { label: "Trigger Point Injections", href: "/trigger-point-injections/" },
      { label: "Therapeutic Exercise", href: "/physical-therapy/" },
      { label: "Nutritional IVs", href: "/nutritional-ivs/" },
      { label: "Spinal Decompression", href: "/spinal-decompression/" },
      { label: "Bioidentical Hormones", href: "/bioidentical-hormone-optimization-therapy/" },
      { label: "ED Shockwave Therapy", href: "/ed-shockwave-therapy/" },
      { label: "Chiropractic Care", href: "/chiropractic-care/" },
      { label: "Knee Decompression", href: "/services/knee-decompression/" },
    ],
  },
  {
    label: "Conditions",
    href: "/conditions",
    grid: true,
    dropdown: [
      { label: "Back Pain", href: "/conditions/back-pain" },
      { label: "Hormonal Imbalance", href: "/conditions/hormonal-imbalance" },
      { label: "Joint Pain", href: "/conditions/joint-pain" },
      { label: "Knee Pain", href: "/conditions/knee-pain" },
      { label: "Neuropathy", href: "/conditions/neuropathy" },
      { label: "Pain Relief", href: "/conditions/pain-relief" },
      { label: "Sexual Dysfunction", href: "/conditions/sexual-dysfunction" },
      { label: "Shoulder Pain", href: "/conditions/shoulder-pain" },
      { label: "Whiplash", href: "/conditions/whiplash" },
    ],
  },
  { label: "Seminars", href: "/seminars" },
  {
    label: "Patient Reviews",
    href: "/reviews",
    dropdown: [
      { label: "Reviews", href: "/reviews" },
      { label: "Video Testimonials", href: "/video-testimonials" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Contact",
    href: "/contact",
    dropdown: [
      { label: "Reno Office", href: "/reno-office" },
      { label: "Fernley Office", href: "https://ascensionhealthnv.com/" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Icons                                                                     */
/* -------------------------------------------------------------------------- */

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
    <path d="M23 7.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.9 3.5 12 3.5 12 3.5s-4.9 0-8 .4c-.4.1-1.3.1-2.1 1C1.2 5.6 1 7.2 1 7.2S.8 9.1.8 11v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.4 7.7.4s4.9 0 8-.4c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8ZM9.7 14.6V8.4l6.2 3.1-6.2 3.1Z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

const Hamburger = ({ open }: { open: boolean }) => (
  <div className="relative w-6 h-5 flex flex-col justify-between" aria-hidden>
    <motion.span animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }} className="block h-[2px] w-6 bg-current origin-center" />
    <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block h-[2px] w-6 bg-current" />
    <motion.span animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }} className="block h-[2px] w-6 bg-current origin-center" />
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

/* -------------------------------------------------------------------------- */
/*  Logo                                                                      */
/* -------------------------------------------------------------------------- */

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <ScrollLink
      href="/"
      aria-label="Reno Regenerative Medicine — Home"
      className={`relative inline-flex items-center group transition-transform duration-300 ${
        scrolled ? "scale-[0.94]" : "scale-100"
      } origin-left`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.png"
        alt="Reno Regenerative Medicine"
        width={1200}
        height={326}
        className="block h-9 sm:h-10 lg:h-10 xl:h-11 w-auto max-w-none object-contain"
      />
    </ScrollLink>
  );
}

/* -------------------------------------------------------------------------- */
/*  Top info bar                                                              */
/* -------------------------------------------------------------------------- */

function TopBar({ visible }: { visible: boolean }) {
  return (
    <motion.div
      key="topbar"
      initial={false}
      animate={{ height: visible ? "auto" : 0, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      aria-hidden={!visible}
      className="relative overflow-hidden text-white/90 text-[13px]"
      style={{
        background:
          "linear-gradient(90deg, #0f1a14 0%, #1a2332 45%, #1f3a28 100%)",
      }}
    >
      {/* Slim gold accent line at top */}
      <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c6b180]/80 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-5">
          <a href="tel:+17756839026" className="group inline-flex items-center gap-2 hover:text-[#c6b180] transition-colors">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 group-hover:bg-[#c6b180]/20 transition-colors">
              <PhoneIcon />
            </span>
            <span className="font-medium tracking-wide">(775) 683-9026</span>
          </a>
          <span className="hidden md:inline text-white/25">|</span>
          <span className="hidden md:inline text-white/70">Mon–Thu 9:00am – 6:00pm</span>
        </div>

        <div className="flex sm:hidden items-center">
          <a href="tel:+17756839026" className="flex items-center gap-2 hover:text-[#c6b180] transition-colors">
            <PhoneIcon />
            <span className="font-medium">(775) 683-9026</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={googleReviewsMeta.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${googleReviewsMeta.rating.toFixed(1)} Google rating`}
            className="hidden md:flex items-center gap-1 text-[#c6b180] hover:opacity-80 transition-opacity"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
            <span className="ml-1.5 text-white/85 text-[12px] font-medium">
              {googleReviewsMeta.rating.toFixed(1)}
            </span>
          </a>
          <span className="hidden md:inline text-white/25">|</span>
          <a href="https://www.facebook.com/renoregenerative" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/70 hover:text-[#c6b180] transition-colors">
            <FacebookIcon />
          </a>
          <a href="https://www.youtube.com/channel/UCAoMwIvwTV-jKzS7MZttmVg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/70 hover:text-[#c6b180] transition-colors">
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Desktop nav item                                                          */
/* -------------------------------------------------------------------------- */

function DesktopNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const active = isActive(pathname, item.href);
  const hasDropdown = !!item.dropdown?.length;

  return (
    <li
      className="relative"
      onMouseEnter={() => hasDropdown && setOpen(true)}
      onMouseLeave={() => hasDropdown && setOpen(false)}
    >
      <ScrollLink
        href={item.href}
        aria-haspopup={hasDropdown || undefined}
        aria-expanded={hasDropdown ? open : undefined}
        onFocus={() => hasDropdown && setOpen(true)}
        className={`relative flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-md text-[13px] xl:text-[13.5px] font-medium tracking-normal transition-colors whitespace-nowrap ${
          active
            ? "text-[#4a7c59]"
            : "text-[#1a2332]/85 hover:text-[#4a7c59] hover:bg-[#f6f3ea]/70"
        }`}
      >
        <span className="relative">
          {item.label}
          {active && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#4a7c59] via-[#c6b180] to-[#4a7c59]"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </span>
        {hasDropdown && (
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.18, ease: "easeOut" }} className="opacity-70">
            <ChevronIcon />
          </motion.span>
        )}
      </ScrollLink>

      {hasDropdown && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 rounded-xl overflow-hidden ring-1 ring-black/5 shadow-2xl bg-white/95 backdrop-blur-md ${
                item.grid ? "w-[480px]" : "w-[240px]"
              }`}
              role="menu"
            >
              {/* Top accent bar */}
              <span aria-hidden className="block h-[3px] w-full bg-gradient-to-r from-[#4a7c59] via-[#c6b180] to-[#4a7c59]" />
              <ul className={`p-3 ${item.grid ? "grid grid-cols-2 gap-x-2 gap-y-0.5" : "space-y-0.5"}`}>
                {item.dropdown!.map((d) => {
                  const isExternal = /^https?:\/\//.test(d.href);
                  return (
                  <li key={d.href} role="none">
                    <ScrollLink
                      href={d.href}
                      role="menuitem"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between px-3 py-2.5 rounded-md text-[13px] font-medium text-[#1a2332] hover:bg-[#f6f3ea] hover:text-[#4a7c59] transition-colors"
                    >
                      <span>{d.label}</span>
                      <span aria-hidden className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition text-[#4a7c59]">
                        →
                      </span>
                    </ScrollLink>
                  </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile menu                                                               */
/* -------------------------------------------------------------------------- */

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm lg:hidden"
            aria-hidden
          />
          <motion.aside
            key="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[88%] max-w-sm bg-gradient-to-b from-[#0f1a14] via-[#13231a] to-[#0a120d] text-white shadow-[0_0_60px_-10px_rgba(0,0,0,0.6)] lg:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <ScrollLink href="/" onClick={onClose} aria-label="Home" className="inline-flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="Reno Regenerative Medicine"
                  width={1200}
                  height={326}
                  className="h-11 w-auto max-w-none object-contain brightness-0 invert"
                />
              </ScrollLink>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 hover:text-[#c6b180] hover:border-[#c6b180] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer scroll area */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="divide-y divide-white/8">
                {NAV.map((item) => {
                  const hasDropdown = !!item.dropdown?.length;
                  const isExpanded = expanded === item.label;
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.label}>
                      <div className="flex items-stretch">
                        <ScrollLink
                          href={item.href}
                          onClick={onClose}
                          className={`flex-1 py-4 px-3 text-[15px] font-semibold uppercase tracking-[0.14em] rounded-md transition-colors ${
                            active ? "text-[#c6b180]" : "text-white hover:text-[#c6b180]"
                          }`}
                        >
                          {item.label}
                        </ScrollLink>
                        {hasDropdown && (
                          <button
                            type="button"
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={isExpanded}
                            onClick={() => setExpanded(isExpanded ? null : item.label)}
                            className="px-4 text-white/60 hover:text-[#c6b180]"
                          >
                            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.18 }} className="block">
                              <ChevronIcon />
                            </motion.span>
                          </button>
                        )}
                      </div>
                      {hasDropdown && (
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="overflow-hidden pb-3"
                            >
                              {item.dropdown!.map((d) => {
                                const isExternal = /^https?:\/\//.test(d.href);
                                return (
                                <li key={d.href}>
                                  <ScrollLink
                                    href={d.href}
                                    onClick={onClose}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="block ml-6 mr-2 px-3 py-2.5 rounded-md text-[13px] text-white/80 hover:bg-white/5 hover:text-[#c6b180] transition-colors"
                                  >
                                    {d.label}
                                  </ScrollLink>
                                </li>
                                );
                              })}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Drawer footer / CTAs */}
            <div className="px-5 py-5 border-t border-white/10 space-y-3 bg-black/20">
              <ScrollLink
                href="/contact"
                onClick={onClose}
                className="block w-full text-center rounded-full bg-[#c6b180] hover:bg-white px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332] transition-colors"
              >
                Request Appointment
              </ScrollLink>
              <a
                href="tel:+17756839026"
                className="flex items-center justify-center gap-2 w-full rounded-full border border-white/20 px-5 py-3.5 text-[13px] font-medium text-white hover:border-[#c6b180] hover:text-[#c6b180] transition-colors"
              >
                <PhoneIcon />
                <span>(775) 683-9026</span>
              </a>
              <div className="flex items-center justify-center gap-4 pt-2 text-white/60">
                <a href="https://www.facebook.com/renoregenerative" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#c6b180]">
                  <FacebookIcon />
                </a>
                <a href="https://www.youtube.com/channel/UCAoMwIvwTV-jKzS7MZttmVg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#c6b180]">
                  <YouTubeIcon />
                </a>
                <span className="text-white/25">|</span>
                <a
                  href={googleReviewsMeta.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#c6b180] hover:opacity-80 transition-opacity"
                >
                  <StarIcon />
                  <span className="text-white/80 text-[12px] font-medium">
                    {googleReviewsMeta.rating.toFixed(1)} · {googleReviewsMeta.reviewCount}
                  </span>
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header                                                                    */
/* -------------------------------------------------------------------------- */

export default function Header() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    // Hysteresis prevents the boundary flicker when scrollY oscillates near
    // the threshold (trackpad inertia, rubber-banding, etc.)
    const ON = 32;
    const OFF = 8;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setScrolled((prev) => (prev ? y > OFF : y > ON));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar visible={!scrolled} />

      <div
        className={`relative w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(15,26,20,0.18)] border-b border-[#e8e4d9]/70"
            : "bg-white border-b border-[#e8e4d9]"
        }`}
      >
        {/* Gold/green hairline accent */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#c6b180]/70 to-transparent"
        />

        {/* ---------- DESKTOP (lg+) single row: [Logo] [Nav] [CTA] ---------- */}
        <div
          className={`hidden lg:flex w-full mx-auto max-w-[1320px] px-6 xl:px-10 items-center justify-between gap-12 xl:gap-20 transition-all duration-300 ${
            scrolled ? "h-[70px]" : "h-[80px]"
          }`}
        >
          {/* Left: Logo */}
          <div className="flex shrink-0 items-center">
            <Logo scrolled={scrolled} />
          </div>

          {/* Center: Nav — tight rhythm; breathing room comes from outer container gap */}
          <ul className="flex flex-1 min-w-0 items-center justify-center gap-0 px-2">
            {NAV.map((item) => (
              <DesktopNavItem key={item.label} item={item} pathname={pathname} />
            ))}
          </ul>

          {/* Right: CTA only */}
          <div className="flex shrink-0 items-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap min-w-fit rounded-full bg-gradient-to-r from-[#4a7c59] to-[#3d7a52] hover:from-[#3d7a52] hover:to-[#2e5e3f] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_-12px_rgba(74,124,89,0.7)] transition-colors"
            >
              <span className="hidden xl:inline">Book Appointment</span>
              <span className="xl:hidden">Book</span>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ---------- MOBILE / TABLET (< lg) row ---------- */}
        <div className="lg:hidden w-full mx-auto max-w-[1320px] px-4 sm:px-6 flex h-[60px] sm:h-[64px] items-center justify-between gap-2 min-w-0">
          <div className="min-w-0 flex items-center">
            <Logo scrolled={scrolled} />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+17756839026"
              aria-label="Call us"
              className="sm:hidden inline-grid place-items-center h-10 w-10 rounded-full border border-[#e8e4d9] text-[#1a2332] hover:text-[#4a7c59] hover:border-[#4a7c59] transition-colors"
            >
              <PhoneIcon />
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center whitespace-nowrap rounded-full bg-gradient-to-r from-[#4a7c59] to-[#3d7a52] hover:from-[#3d7a52] hover:to-[#2e5e3f] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors"
            >
              Book
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid place-items-center h-10 w-10 rounded-full border border-[#e8e4d9] text-[#1a2332] hover:text-[#4a7c59] hover:border-[#4a7c59] transition-colors"
            >
              <Hamburger open={mobileOpen} />
            </button>
          </div>
        </div>

        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          pathname={pathname}
        />
      </div>
    </header>
  );
}
