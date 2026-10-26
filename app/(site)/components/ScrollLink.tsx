"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps, useEffect } from "react";

type ScrollLinkProps = ComponentProps<typeof Link>;

/**
 * Enhanced Link component that scrolls to top when navigating to the same page
 */
export default function ScrollLink({ href, onClick, ...props }: ScrollLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call original onClick if provided
    onClick?.(e);

    // Get the target path (handle both string and object hrefs)
    const targetPath = typeof href === "string" ? href : href.pathname || "";
    
    // Remove hash and query from both paths for comparison
    const currentPath = pathname.split("?")[0].split("#")[0];
    const targetPathClean = targetPath.split("?")[0].split("#")[0];

    // If navigating to the same page, scroll to top
    if (currentPath === targetPathClean) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
