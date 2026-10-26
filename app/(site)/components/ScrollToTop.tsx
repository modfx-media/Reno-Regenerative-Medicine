"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    const prev = window.history.scrollRestoration;
    try {
      window.history.scrollRestoration = "manual";
    } catch {}
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    return () => {
      try {
        window.history.scrollRestoration = prev;
      } catch {}
    };
  }, [pathname, searchParams]);

  return null;
}
