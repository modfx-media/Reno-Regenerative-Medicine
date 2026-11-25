"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    let previous: ScrollRestoration | undefined;
    try {
      previous = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
    } catch {
      previous = undefined;
    }
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } catch {
      // Safari rejects the `instant` ScrollBehavior value.
      window.scrollTo(0, 0);
    }
    return () => {
      if (previous == null) return;
      try {
        window.history.scrollRestoration = previous;
      } catch {
        // Older WebKit builds omit history.scrollRestoration.
      }
    };
  }, [pathname, searchParams]);

  return null;
}
