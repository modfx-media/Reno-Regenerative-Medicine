"use client";

import { ReactNode } from "react";
import ServiceSidebar from "./ServiceSidebar";

/**
 * Two-column layout used by every /conditions/{slug}/ page.
 * Left = exact live-site content + supporting sections.
 * Right = sticky appointment / hours / forms card (shared with services).
 */
export default function ConditionShell({ children }: { children: ReactNode }) {
  return (
    <section className="bg-[#f6f3ea] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">{children}</div>
          <div className="lg:col-span-4">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
