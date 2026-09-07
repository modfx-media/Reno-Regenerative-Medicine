import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  outputFileTracingExcludes: {
    '*': [
      './public/images/**',
      './public/**/*.mp4',
      './public/**/*.webm',
    ],
  },
  async redirects() {
    return [
      // --- Patient reviews legacy URLs ---
      { source: "/patient-reviews", destination: "/reviews/", permanent: true },
      { source: "/patient-reviews/", destination: "/reviews/", permanent: true },

      // --- Contact route: legacy /contact-us/ from Vercel redesign → live /contact/ ---
      { source: "/contact-us", destination: "/contact/", permanent: true },
      { source: "/contact-us/", destination: "/contact/", permanent: true },

      // --- Service detail pages: old /services/<slug>/ → root-level /<slug>/ ---
      // Knee Decompression intentionally stays under /services/knee-decompression/.
      { source: "/services/joint-injections", destination: "/joint-injections/", permanent: true },
      { source: "/services/joint-injections/", destination: "/joint-injections/", permanent: true },
      { source: "/services/trigger-point-injections", destination: "/trigger-point-injections/", permanent: true },
      { source: "/services/trigger-point-injections/", destination: "/trigger-point-injections/", permanent: true },
      { source: "/services/therapeutic-exercise", destination: "/physical-therapy/", permanent: true },
      { source: "/services/therapeutic-exercise/", destination: "/physical-therapy/", permanent: true },
      { source: "/services/nutritional-ivs", destination: "/nutritional-ivs/", permanent: true },
      { source: "/services/nutritional-ivs/", destination: "/nutritional-ivs/", permanent: true },
      { source: "/services/spinal-decompression", destination: "/spinal-decompression/", permanent: true },
      { source: "/services/spinal-decompression/", destination: "/spinal-decompression/", permanent: true },
      { source: "/services/bioidentical-hormones", destination: "/bioidentical-hormone-optimization-therapy/", permanent: true },
      { source: "/services/bioidentical-hormones/", destination: "/bioidentical-hormone-optimization-therapy/", permanent: true },
      { source: "/services/gainswave", destination: "/ed-shockwave-therapy/", permanent: true },
      { source: "/services/gainswave/", destination: "/ed-shockwave-therapy/", permanent: true },
      { source: "/gainswave", destination: "/ed-shockwave-therapy/", permanent: true },
      { source: "/gainswave/", destination: "/ed-shockwave-therapy/", permanent: true },
      { source: "/services/chiropractic-care", destination: "/chiropractic-care/", permanent: true },
      { source: "/services/chiropractic-care/", destination: "/chiropractic-care/", permanent: true },

      // --- Blog post slug aliases (old WP slugs → new shortened slugs) ---
      {
        source: "/everyday-habits-that-quietly-worsen-knee-pain-in-reno/",
        destination: "/habits-that-quietly-worsen-knee-pain/",
        permanent: true,
      },
      {
        source: "/backpackers-guide-to-sciatica-treatment-options-in-reno/",
        destination: "/backpackers-guide-sciatica-treatment-options/",
        permanent: true,
      },
      {
        source: "/life-after-whiplash-when-to-seek-integrative-pain-care/",
        destination: "/life-after-whiplash-when-seek-care/",
        permanent: true,
      },
      {
        source: "/understanding-regenerative-medicine-for-chronic-back-pain/",
        destination: "/regenerative-medicine-for-chronic-back-pain/",
        permanent: true,
      },
      {
        source: "/warning-signs-your-back-pain-needs-spinal-decompression/",
        destination: "/signs-back-pain-needs-spinal-decompression/",
        permanent: true,
      },
      {
        source: "/is-regenerative-medicine-right-for-your-knee-pain/",
        destination: "/is-regenerative-medicine-right-for-knee-pain/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
