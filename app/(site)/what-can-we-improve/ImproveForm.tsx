"use client";

import { useState, type FormEvent } from "react";

const FIELD_BASE =
  "w-full rounded-lg border border-[#e8e4d9] bg-cream/40 px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-[#3d7a52] focus:bg-white";

const LABEL = "block text-sm font-medium text-ink";

export default function ImproveForm() {
  const [submitted, setSubmitted] = useState(false);

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
          Thank you!
        </h3>
        <p className="mt-3 text-ink/70">
          Your feedback has been received. We genuinely appreciate you taking
          the time to help us improve.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-[#e8e4d9] px-5 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:border-[#3d7a52] hover:text-[#3d7a52]"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <fieldset className="space-y-4">
        <legend className={LABEL}>Name</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <input
              id="i-first"
              name="first"
              type="text"
              required
              className={FIELD_BASE}
              placeholder="First"
            />
            <span className="mt-1 block text-xs text-ink/50">First</span>
          </div>
          <div>
            <input
              id="i-last"
              name="last"
              type="text"
              required
              className={FIELD_BASE}
              placeholder="Last"
            />
            <span className="mt-1 block text-xs text-ink/50">Last</span>
          </div>
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="i-phone" className={LABEL}>
            Phone
          </label>
          <input
            id="i-phone"
            name="phone"
            type="tel"
            className={`mt-1.5 ${FIELD_BASE}`}
            placeholder="(775) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="i-email" className={LABEL}>
            Email
          </label>
          <input
            id="i-email"
            name="email"
            type="email"
            className={`mt-1.5 ${FIELD_BASE}`}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="i-comments" className={LABEL}>
          Comments
        </label>
        <textarea
          id="i-comments"
          name="comments"
          rows={6}
          required
          className={`mt-1.5 ${FIELD_BASE} resize-y`}
          placeholder="Tell us what we could do better…"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-[#13231a] px-8 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-[#1f3a28] sm:w-auto"
        >
          Submit Feedback
        </button>
      </div>
    </form>
  );
}
