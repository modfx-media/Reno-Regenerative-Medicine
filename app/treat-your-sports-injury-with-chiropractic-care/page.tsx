import type { Metadata } from "next";
import BlogPostShell from "../components/BlogPostShell";
import { getPost } from "../lib/posts";

const post = getPost("treat-your-sports-injury-with-chiropractic-care")!;

const BODY_HTML = "<p> </p>\n<h2>Sports Injury with Chiropractic Care</h2>\n<p>Treating a sports injury with <a href=\"/services/\">Chiropractic care</a> works with your body to help it heal itself. At Reno Regenerative Medicine in Reno, Nevada, our <a href=\"/our-team/\">licensed chiropractors</a> stimulate healing in your current injury and teach you how to prevent injuries in the future.</p>\n<p>As an athlete, you take your body seriously. You know that it can do almost anything you ask of it, as long as you use proper training and playing techniques. Sometimes, though, what happens in a game is outside of your control and you get injured.</p>\n<h2>Diagnose the sources of your Sports Injury Pain</h2>\n<p>If you injure your knee or other body parts during a game or training, you may think that the injury is localized. However, other tissues may also have been injured in the accident. Weakness or imbalances in other parts of your body may also have contributed to why you were injured in the first place.</p>\n<p>Part of chiropractic care for sports injuries involves an in-depth evaluation and diagnosis. We examine you physically, analyze your gait and movements, and also order X-rays and other imaging studies to determine the source or sources of your pain and injury.</p>\n<h2>Increase blood and lymph flow with Chiropractic Care</h2>\n<p>When you\u2019re injured, one aspect of chiropractic care is massage and other forms of touch therapy. Massage stimulates increased circulation of blood and lymph throughout your body, and particularly to the area that\u2019s been injured.</p>\n<p>Blood carries oxygen and other nutrients that your muscles, ligaments, tendons, and bones need to repair injuries and regenerate cells. Lymph is a liquid that circulates throughout your body, much like blood does. However, lymph carries away toxins that could impede healing.</p>\n<p>By removing toxins and increasing the flow of nutrients and oxygen, massage helps your tissues rebuild themselves. To further encourage repair, we may recommend other therapies to stimulate cell growth and tissue rejuvenation, such as:</p>\n<ul>\n<li>Ultrasound therapy</li>\n<li>Light therapy</li>\n<li>Hot and cold therapy</li>\n</ul>\n<p>Your chiropractor may recommend more than one type of treatment to accelerate healing and recovery.</p>\n<h2>Get your spine moving with Chiropractic Care</h2>\n<p>Chiropractors believe that when your spine moves properly, your body can function optimally. Spinal restrictions, called subluxations, interfere with the circulation of blood and lymph. They can also throw your body out of balance.</p>\n<p>Part of chiropractic care for a sports injury includes readjusting your spine to resolve subluxations. A properly moving spine prevents imbalances in the way you distribute your weight, reducing your risk for injuries.</p>\n<h2>Resolve pain</h2>\n<p>Whenever possible, chiropractors use gentle, safe, supportive therapies to heal your pain and manage your discomfort. In addition to massage and spinal alignments, we may recommend cold laser therapy or electrical nerve stimulation.</p>\n<h2>Rebuild your body</h2>\n<p>An injury causes trauma to your entire body. For instance, if you injure your knee, you may favor your uninjured leg, which could throw off the balance of your hips and lead to lower back pain.</p>\n<p>Part of chiropractic care for sports injuries involves customized stretching and strengthening exercises that help create stability in your core and strengthen your limbs, too. A well-aligned spine and strong core gives your body the support it needs to move with ease and strength.</p>\n<h2>Prevent further injury</h2>\n<p>Chiropractic care is a holistic approach to health. That means every aspect of what goes into or affects your body also affects your ability to heal, prevent injuries, and play at your best.</p>\n<p>Your chiropractor may recommend dietary changes and supplements to nourish your tissues and cells. They also evaluate how you move \u2014 particularly how you throw, run, walk, or perform other activities you use in your sport \u2014 to pinpoint and correct inefficiencies that could lead to injury.</p>\n<p>Regular chiropractic care and spinal adjustments helps you keep your body healthy and strong. The more you learn about how your body functions and become aware of its needs, the better it can serve you in your sport.</p>\n<p>To get treatment for a <a href=\"/services/\">sports injury</a> or to learn more about how to prevent them, call us today at <a href=\"tel:(775) 683-9026\">(775) 683-9026</a>. You can also request an appointment using our easy <a href=\"/contact/\">online form</a>.</p>";

export const metadata: Metadata = {
  title: "Treat Your Sports Injury with Chiropractic Care",
  description:
    "Treat Your Sports Injury with Chiropractic Care At Reno Regenerative Medicine, our chiropractors stimulate healing your injury. Call today!",
  alternates: { canonical: "https://www.renoregen.com/treat-your-sports-injury-with-chiropractic-care/" },
  openGraph: {
    title: "Treat Your Sports Injury with Chiropractic Care",
    description:
      "Treat Your Sports Injury with Chiropractic Care At Reno Regenerative Medicine, our chiropractors stimulate healing your injury. Call today!",
    url: "https://www.renoregen.com/treat-your-sports-injury-with-chiropractic-care/",
    type: "article",
    publishedTime: "2021-07-07T18:56:44+00:00",
    images: [post.image],
  },
};

/* ------------------------------------------------------------------ */
/*  Verbatim body content from https://www.renoregen.com/treat-your-sports-injury-with-chiropractic-care/                            */
/* ------------------------------------------------------------------ */
export default function Page() {
  return (
    <BlogPostShell post={post}>
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </BlogPostShell>
  );
}
