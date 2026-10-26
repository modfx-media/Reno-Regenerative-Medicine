"use client";

import { useState, type FormEvent } from "react";

const FIELD_BASE =
  "w-full rounded-lg border border-[#e8e4d9] bg-cream/40 px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-[#3d7a52] focus:bg-white";

const LABEL = "block text-sm font-medium text-ink";
const REQ = <span className="text-[#c66b6b]"> *</span>;

export default function CareersForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#f3d99a]/40 text-[#3d7a52]">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 font-serif-display text-2xl text-ink">
          Thanks for applying!
        </h3>
        <p className="mt-3 text-ink/70">
          We’ve received your application. Our team will review it and reach
          out if we’d like to schedule a conversation.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFileName(null);
          }}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-[#e8e4d9] px-5 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:border-[#3d7a52] hover:text-[#3d7a52]"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={LABEL}>
            Name{REQ}
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            className={`mt-1.5 ${FIELD_BASE}`}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="c-phone" className={LABEL}>
            Phone{REQ}
          </label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            required
            className={`mt-1.5 ${FIELD_BASE}`}
            placeholder="(775) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-email" className={LABEL}>
          Email{REQ}
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          className={`mt-1.5 ${FIELD_BASE}`}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="c-position" className={LABEL}>
          Position Applying For{REQ}
        </label>
        <input
          id="c-position"
          name="position"
          type="text"
          required
          className={`mt-1.5 ${FIELD_BASE}`}
          placeholder="e.g. Front Desk Coordinator"
        />
      </div>

      <div>
        <label htmlFor="c-resume" className={LABEL}>
          Upload Résumé (PDF)
        </label>
        <label
          htmlFor="c-resume"
          className="mt-1.5 flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-dashed border-[#c6b180] bg-cream/40 px-4 py-3.5 text-[15px] text-ink/70 transition-colors hover:border-[#3d7a52] hover:bg-white"
        >
          <span className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#3d7a52]" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
              <path d="M14 3v6h6M9 13h6M9 17h4" />
            </svg>
            <span>{fileName ?? "Choose a PDF file (max 256 MB)"}</span>
          </span>
          <span className="rounded-full bg-[#f3d99a]/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#3d7a52]">
            Browse
          </span>
        </label>
        <input
          id="c-resume"
          name="resume"
          type="file"
          accept="application/pdf,.pdf"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        <p className="mt-2 text-xs text-ink/50">
          Accepted file types: pdf · Max file size: 256 MB.
        </p>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-[#13231a] px-8 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-[#1f3a28] sm:w-auto"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}
