import type { Metadata } from "next";
import Link from "next/link";
import BlogPostShell from "../components/BlogPostShell";
import { getPost } from "../lib/posts";

const post = getPost("inside-integrative-medicine-in-reno-a-patients-first-90-days")!;

export const metadata: Metadata = {
  title: "Inside Integrative Medicine in Reno: A Patient's First 90 Days",
  description:
    "Curious what integrative care actually looks like week to week? Follow a typical new-patient journey through evaluation, treatment, and progress checks over 90 days.",
  alternates: {
    canonical:
      "https://www.renoregen.com/blog/inside-integrative-medicine-in-reno-a-patients-first-90-days/",
  },
  openGraph: {
    title: "Inside Integrative Medicine in Reno: A Patient's First 90 Days",
    description:
      "Curious what integrative care actually looks like week to week? Follow a typical new-patient journey through evaluation, treatment, and progress checks over 90 days.",
    url: "https://www.renoregen.com/blog/inside-integrative-medicine-in-reno-a-patients-first-90-days/",
    type: "article",
    publishedTime: "2026-08-31T17:00:00+00:00",
    images: [post.image],
  },
};

export default function Page() {
  return (
    <BlogPostShell post={post} readTime="7 min read">
      <h2>What a New Patient Actually Experiences</h2>
      <p>
        Most people considering integrative medicine in Reno want to know one thing before they ever book a visit: what is this actually going to look like? Not the marketing language, but the real week-by-week experience of evaluation, treatment, and follow-up. Here is a realistic look at how the first 90 days tend to unfold for a new patient dealing with chronic joint, back, or spine pain.
      </p>

      <h2>Before Your First Visit</h2>
      <p>
        The process usually starts with a phone conversation, not a treatment plan. Our team asks about your main concerns, how long you have been dealing with them, and what you have already tried. We also answer the questions almost every new patient has:
      </p>
      <ul>
        <li>How does insurance and payment work?</li>
        <li>Am I a reasonable candidate for regenerative therapies or spinal decompression?</li>
        <li>Should I bring old imaging, like X-rays or an MRI?</li>
        <li>How long should I expect my first appointment to take?</li>
      </ul>
      <p>Getting these questions answered ahead of time means your first visit can focus on you, not paperwork.</p>

      <h2>Weeks 1 and 2: The Deep-Dive Evaluation</h2>
      <p>
        Your first appointment is a real conversation, not a rushed five-minute exam. We talk through where your pain is, how long it has been there, what makes it better or worse, and what your daily routine and activity level actually look like. We review any imaging you bring, run orthopedic and neurologic tests, and look at how your posture and movement patterns connect to your symptoms.
      </p>
      <p>
        For some patients, energy, sleep, or recovery issues come up in that same conversation, which can point toward a hormone or inflammation component worth testing. From there, we build a plan that might include regenerative joint injections, chiropractic adjustments, spinal decompression, soft-tissue work, or hormone support &mdash; matched to what your evaluation actually shows, not a one-size-fits-all protocol.
      </p>
      <p>
        On your first treatment day, we walk through what each therapy should feel like, what is normal afterward, and how to go about your regular routine without undoing your own progress.
      </p>

      <h2>Weeks 3 through 6: Building Momentum</h2>
      <p>
        This stretch is where consistency starts to matter more than any single visit. A typical schedule during this window might include:
      </p>
      <ul>
        <li>Regular chiropractic adjustments to support alignment and movement</li>
        <li>Scheduled spinal decompression sessions if disc or nerve irritation is part of the picture</li>
        <li>Follow-up regenerative injections as your body responds</li>
        <li>Check-ins on any hormone support or lifestyle changes we introduced</li>
      </ul>
      <p>
        We track how you are responding at each visit &mdash; range of motion, pain levels, and how you are functioning day to day &mdash; and adjust the plan rather than sticking rigidly to what we started with.
      </p>

      <h2>Weeks 7 through 12: Measuring Real Progress</h2>
      <p>
        By the final stretch of the first 90 days, most patients can point to concrete changes: sleeping through the night more consistently, walking farther without pain, or getting through a workday without needing to sit down and recover. This is also when we start talking about what maintenance looks like &mdash; how often you might need care going forward, and which parts of your home routine are helping the most.
      </p>
      <p>
        If you have been putting off getting real answers about ongoing pain, the first 90 days are less intimidating than they sound. <Link href="/appointments/">Request an appointment</Link> and let&rsquo;s map out what your own plan could look like.
      </p>
    </BlogPostShell>
  );
}
