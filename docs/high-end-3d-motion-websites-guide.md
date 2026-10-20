# Building & Selling Nike/Apple-Quality Animated 3D Motion-Graphics Websites

**A practical, sourced playbook for 2025–2026 — tech stack, AI/Claude Code workflow, asset generation, and the business of selling $20k+ sites.**

> Research compiled June 2026 from five parallel research passes across official docs, studio interviews, YouTube, Reddit, and pricing/agency data. Prices shift monthly — verify at the official URLs before quoting a client.

---

## TL;DR — what actually makes a site "award-tier"

The "wow" that clients pay $20k+ for is **not** a tool you can buy. It's three things AI still can't originate:

1. **Bespoke motion craft** — custom GSAP timelines, WebGL/Three.js shaders, scroll choreography.
2. **Smooth-scroll + 60fps performance discipline** — Lenis, lazy-loaded 3D, Draco/KTX2 compression, Core Web Vitals as hard budgets.
3. **Design taste** — escaping the "AI default look" (dark mode + blue-purple gradients + Inter + rounded cards) that the whole market is now trained to recognize and discount.

AI does ~70% (scaffolding, components, boilerplate, asset first-drafts). You own the ~30% that defines "premium" (easing curves, art direction, performance, the signature interaction). That 30% is the moat.

---

## Part 1 — The Tech Stack (the "Awwwards stack")

### Core rendering & animation libraries

| Tool | What it does | Why pros use it | Cost | URL |
|---|---|---|---|---|
| **Three.js** | Foundational WebGL/WebGPU 3D engine (r170+) | Full low-level control over scenes, cameras, materials, shaders | Free | threejs.org |
| **React Three Fiber (R3F)** | Three.js as declarative React/JSX (by pmndrs) | Maintainable, composable scenes wired to app state — the React-studio default | Free | github.com/pmndrs/react-three-fiber |
| **drei** | Helper library for R3F | Collapses 20–30 lines of Three.js boilerplate into 1–2 (glTF loading, controls, LOD via `<Detailed/>`) | Free | github.com/pmndrs/drei |
| **GSAP (GreenSock)** | Timeline/tweening engine + ScrollTrigger | The industry standard for scroll- and timeline-driven animation | **100% FREE (2025)** | gsap.com |
| **Motion (ex-Framer Motion)** | React + vanilla animation, spring physics, gestures | Declarative component enter/exit, layout, gestures | Free (Motion+ optional) | motion.dev |
| **Lenis** | Smooth scroll (by Darkroom Eng., ex-Studio Freight) | Native-feeling inertia scroll — foundational "premium" feel; pairs with ScrollTrigger | Free | lenis.darkroom.engineering |
| **Theatre.js** | Visual keyframe editor for Three.js scenes | Art-direct cinematic 3D sequences visually | Free | theatrejs.com |
| **Anime.js v4** | Lightweight JS/SVG/DOM animation | When GSAP is overkill (~60fps on 3k DOM elements) | Free (MIT) | animejs.com |
| **WebGPU + TSL** | Next-gen renderer + node-based shader language | 2–10× gains on draw-call-heavy scenes; write shaders once, run on WebGL+WebGPU | Free | threejs.org |

**Two big 2025 changes to internalize:**
- **GSAP is now 100% free for all commercial use**, thanks to Webflow's acquisition. ScrollTrigger, SplitText, MorphSVG, DrawSVG, ScrollSmoother — all the previously-paid Club plugins are free. This removes the old "is the license worth it?" objection entirely.
- **Package renames:** `framer-motion` → `motion` / `motion/react`; `@studio-freight/lenis` → just `lenis` (import from `lenis/react`). The old packages are deprecated — using them is a tell that a tutorial is stale.

### 3D content tools

- **Spline** (spline.design) — browser-based visual 3D editor, one-click web export (React/Next/Webflow/Framer). Free tier; ~$9–12/user/mo; +$5/seat AI add-on. **Best for:** fast landing/marketing 3D, designers without a code pipeline. **Tradeoff vs Three.js:** larger bundle, less control, but ~2–4hr learning curve vs Three.js's 60+hr. Reddit's growing critique: performance hit + pricing pushes serious devs to build their own in R3F.
- **Blender** (blender.org) — free, industry-standard for modeling/texturing/baking assets → glTF. Taught inside Three.js Journey.
- **The optimization pipeline (non-negotiable for pro work):** glTF `.glb` format → **Draco** geometry compression (~90–95% smaller, decoded in a Web Worker) → **KTX2/Basis** texture compression (~10× GPU memory reduction) → **gltfjsx** to auto-generate R3F components. Real case: 26 MB model → 560 KB. Target 1–2 MB max per model.

### Meta-framework + hosting

- **Next.js** (nextjs.org) — default for app-like, interactive, R3F-heavy sites; deepest Vercel integration. *(Note: this repo runs a customized Next.js — check `node_modules/next/dist/docs/` before coding here, per AGENTS.md.)*
- **Astro** (astro.build) — ships static HTML, hydrates only "islands"; ~2–3× faster for content/portfolio/marketing sites where load + SEO dominate.
- **Vercel** (vercel.com) — default deploy target (edge, image optimization, analytics). Astro static also deploys cheap to Cloudflare Pages / Netlify.
- **Webflow** (webflow.com) — now a serious premium contender since it owns GSAP and exposes GSAP Interactions visually (SplitText, ScrollTrigger, staggers) with no code. Covers "high-end but not fully custom." Custom code still wins for bespoke WebGL/shaders.

### Performance — what separates amateur from pro

1. **Lazy-load 3D below the fold** — keep first paint < 1.5s.
2. **Draco + KTX2** — the two highest-leverage wins.
3. **LOD** — swap high→low poly at distance (drei `<Detailed/>`, ~30–40% FPS gains).
4. **Post-processing budgeted carefully** (bloom/DOF/grading via pmndrs `postprocessing`).
5. **No main-thread freezes** — decode in workers, instance repeated geometry, reduce draw calls.
6. **Treat Lighthouse / Core Web Vitals (LCP, INP, CLS) as hard budgets**, with WebGL2 fallback to protect low-end devices.

---

## Part 2 — The AI / Claude Code Workflow

### Claude Code as the hub

Claude Code (CLI / VS Code / JetBrains / desktop / web) is the orchestration center. Other tools plug in via **MCP (Model Context Protocol)**. Key concepts:
- **MCP servers** — connect Claude to external tools (component generators, design tools, browsers, docs).
- **Subagents** — isolated workers with their own context that do a focused task and return a summary (keeps the main session clean).
- **Skills** (`/name` markdown workflows) and **Hooks** (deterministic scripts on lifecycle events, e.g. run ESLint after every edit).

**Pricing:** bundled in Pro $20/mo, Max 5× $100/mo, Max 20× $200/mo (recommended for heavy front-end work), or API pay-as-you-go.

### The recommended premium MCP stack to attach

| MCP server | Role | Connects to Claude Code? |
|---|---|---|
| **Figma MCP** (Dev Mode) | Design → code context: components, design tokens, layout relationships. Bidirectional ("send to Figma"). | Yes — official, launched June 2025 |
| **21st.dev "Magic"** | `/ui <description>` → production React + Tailwind components, multiple variations | Yes — MCP server + API key |
| **shadcn MCP/registry** | Browse/install owned (copy-in) components from any registry | Yes — `npx shadcn mcp init --client claude` |
| **Context7** | Live, current library docs (latest GSAP/Three.js/Motion APIs) so the agent doesn't hallucinate old syntax | Yes |
| **Playwright** | Drive a real browser to visually verify animations | Yes |

> Note: **GSAP shipped official "AI skills"** (github.com/greensock/gsap-skills) that teach coding agents correct GSAP patterns — feed these to your agent rather than free-form prompting.

### The other AI builders — where each fits

- **v0 by Vercel** — browser text-to-UI → Next.js + Tailwind + shadcn code. No native MCP (move code via GitHub). Free → $20 → $30/user.
- **Cursor** — AI code editor, supports MCP (Magic/Figma/shadcn). Free → ~$20/mo. The most mature "augment-as-you-type" experience.
- **Windsurf** — AI editor with the Cascade agent. From ~$15/seat.
- **Bolt.new / Lovable** — full-stack app builders, fastest to working prototype/MVP. From $20/mo. You'll outgrow their abstractions for award-tier 3D/scroll.
- **Google Antigravity** (antigravity.google) — Google's agent-first IDE (launched Nov 2025, VS Code fork). Spawns/orchestrates parallel agents, produces verifiable "Artifacts" (plans, screenshots, browser recordings). Gemini 3 Pro primary (also Claude Sonnet inside). **Free public preview.** Promising for early adopters; the "Cursor killer" benchmarks are single-source vendor hype — treat with caution.
- **Framer** (framer.com) — design-to-site built on React; AI features Wireframer + Workshop (generates custom React components). No Claude Code MCP. **Best for:** fast polished marketing sites ($2.5k–$15k Framer builds are common, interaction-heavy SaaS $20k–$40k). **Ceiling:** heavy WebGL/Three.js/shaders and complex app logic — that's when you drop to hand-coded R3F/GSAP.

### The realistic 70/30 division of labor

- **AI handles:** scaffolding, component generation (Magic/v0/shadcn), design translation (Figma MCP), boilerplate animation wiring, repetitive refactors.
- **You handle:** easing/timing curves, 60fps performance + GPU/draw-call budgets, accessibility, art direction, the bespoke interaction polish.
- **Evidence the discipline matters more than the tool:** a CodeRabbit analysis of 470 PRs found structured agent setups (defined MCP + subagents + CLAUDE.md) produced 1.7× fewer defects and 2.74× fewer security vulns than ad-hoc "vibe coding."

---

## Part 3 — AI Asset Generation (the media that fills the site)

### Cinematic hero video / motion

- **Higgsfield** (higgsfield.ai) — aggregates Sora 2 / Veo 3.1 / Kling 3.0 / WAN + its own "Soul" image model, with the standout feature being **camera-motion presets** (dolly, crash zoom, orbit, bullet-time). ~$39/mo (Plus) / ~$99/mo (Ultra). **Best for** controlled-camera hero loops (slow product orbit, atmospheric push-in) vs the random drift of raw text-to-video. Max ~30s; you still crop/loop/optimize.
- **Runway Gen-4.5** (runwayml.com) — best director-level control (motion brush, camera, references). Free → $12 → $28 → $76.
- **Google Veo 3.1** (deepmind.google) — top-tier realism + native audio; ~$0.35/sec via Vertex AI; API-accessible.
- **Kling 3.0** (klingai.com) — cheapest credible quality (~$0.07/sec); great for product/hero loops.
- **Luma Dream Machine / Agents** (lumalabs.ai) — multi-model pool (like Higgsfield); free tier; $30/$90/$300.
- ⚠️ **OpenAI Sora 2 is sunsetting** (web/app shutdown announced ~April 2026) — don't build a pipeline on it.

### Hero stills, textures, art direction

- **Midjourney** (midjourney.com) — best artistic quality; $10–$120/mo (companies >$1M rev must use Pro/Mega).
- **Google Nano Banana / Imagen** (gemini.google) — best photorealism + legible text-in-image + 4K. Great when a hero needs real typography/logos.
- **Flux** (blackforestlabs.ai) — controllable, repeatable, commercial-safe; FLUX.1 [schnell] is open source. Good for textures + pipelines.
- **Adobe Firefly** (firefly.adobe.com) — commercially safe / IP-indemnified — the choice for brand/client work.
- **Freepik** (freepik.com) — cheap multi-model aggregator (Flux, Nano Banana, Imagen, video).

### AI 3D models (image/text → GLB)

- **Spline AI** (spline.design) — web-native, runs in-browser; best fit for lightweight web 3D. Free → $7/mo.
- **Meshy** (meshy.ai) — strongest all-round; text/image→3D with PBR textures in ~1 min; exports GLB/FBX/USDZ; 20 credits/model. Free → $20 → $60.
- **Luma Genie / Tripo / Rodin** — free entry (Genie), great API (Tripo), highest fidelity but heavy (Rodin).
- ⚠️ **Raw AI 3D is never web-ready** — messy topology + oversized textures. Always retopologize/decimate, bake, and compress (Draco/KTX2) before dropping into R3F.

### Interactive + vector motion (small, crisp, performant)

- **Rive** (rive.app) — interactive, stateful animation (state machines, runtime data binding); no runtime/license fee. Free → $9 → $32/mo. **Best for** interactive hero animations, animated logos, cursor/scroll-reactive UI. (DesignCourse even has a "Create an Animated Loader with Claude Code and Rive" tutorial.)
- **Lottie / LottieFiles** (lottiefiles.com) — JSON vector animation, KB-sized; best for loaders/icon transitions/accents. Lottie = playback; Rive = interactive.
- **Jitter** (jitter.video) — Figma-like browser motion design → Lottie/video without After Effects.
- **After Effects → Lottie** (Bodymovin plugin) — the classic hand-crafted vector pipeline.

### The asset pipeline in order

1. **Art-direct** with Midjourney/Flux/Nano Banana (stills, textures, look-dev).
2. **Generate motion/3D**: Higgsfield/Veo/Kling for hero loops; Meshy/Spline for 3D; Rive/Lottie for UI motion.
3. **Optimize** (the unglamorous, essential step): GLB + Draco + KTX2 via gltf-transform/gltfpack; video → H.264 + WebM/AV1, short muted loop, poster image, lazy-load, target < 3–5 MB.
4. **Integrate** into R3F (Suspense loading, LOD, draw calls < ~1000) or Framer/Webflow/Spline embeds.

⚠️ **The "AI look"** (morphing edges, uncanny faces/hands, plasticky materials) reads worst on a big desktop hero — hide it with short loops, grain, overlays, motion blur. For client work prefer IP-safe sources (Firefly, paid MJ, own-your-output 3D tiers).

---

## Part 4 — Step-by-Step Build Guide

**Phase 0 — Skill up (do this first; it's the actual moat).**
- Bruno Simon's **Three.js Journey** ($95 one-time, ~91hr) → the canonical 3D course.
- **Wawa Sensei** R3F course (wawasensei.dev) → do after Bruno.
- **Olivier Larose** (YouTube + blog) → recreate Awwwards animations in Next.js + GSAP/Motion.
- **JavaScript Mastery** → full "Build an Awwwards-winning site" + GTA VI landing clone builds.
- **akella (Yuri Artiukh)** → live shader/WebGL coding. **Codrops** → cutting-edge effect tutorials.

**Phase 1 — Set up the environment.**
1. Install Claude Code (Max plan recommended for volume) + Cursor as the editor.
2. Wire MCP servers: Figma (Dev Mode), 21st.dev Magic (API key), shadcn (`npx shadcn mcp init --client claude`), Context7, Playwright. Confirm with `/mcp`.
3. Create a `CLAUDE.md` with project conventions; add GSAP AI skills; add a hook to lint/format after edits.

**Phase 2 — Design & art direction.**
4. Design in **Figma**. Define a real design system (tokens, type scale, grid) — this is what keeps it from looking AI-generic.
5. Generate art-direction assets (Midjourney/Flux/Nano Banana) and motion/3D first-drafts (Higgsfield/Meshy/Rive).

**Phase 3 — Build.**
6. Scaffold with v0 / Magic / shadcn → hand to Claude Code/Cursor for integration.
7. Stack: **Next.js (App Router) + R3F/Three.js + GSAP (ScrollTrigger) + Lenis + Tailwind**, GLSL/TSL shaders for the signature "wow." (`npm i gsap lenis three @react-three/fiber @react-three/drei`, import Lenis from `lenis/react`.)
8. Optimize every asset (Draco/KTX2/gltfjsx; video transcode + lazy-load).
9. Verify animations + 60fps with Playwright; profile against Lighthouse/CWV.

**Phase 4 — Polish (the 30% that earns the fee).**
10. Hand-tune easing curves, scroll choreography, transitions. Kill the "purple-gradient default." Add accessibility (prefers-reduced-motion, a11y), poster images, fallbacks.

**Phase 5 — Ship & validate.**
11. Deploy to Vercel (or Cloudflare/Netlify for Astro).
12. Submit to **Awwwards / CSS Design Awards / FWA** ($50–$165) — a credibility asset (not a lead channel — see below).

---

## Part 5 — The Business: Selling for $20k+

### What premium sites actually cost (calibrated)
- Credible custom band: **$5k–$30k**; truly high-end animated/3D pushes **$30k–$200k+**.
- Animation/3D-specific tiers (studio self-marketing, treat as ceilings): GSAP + custom design $30k–$60k; custom WebGL/3D interactions $60k–$120k; full 3D/WebGPU original concept $120k–$200k+.
- Institutional RFP buyers skew far higher (Folyo: avg $73k; under-$25k only 11%) — that's the funded/enterprise end, not the SMB market.
- Underlying rates: senior/specialist freelancers +40–80% over generalists; specialists command the premium.

### Verified studio benchmarks (from Clutch — studios hide pricing on-site)
This is the reality check on the $20k target: **the genuine premium-WebGL floor is closer to ~$50k.**
- **Locomotive:** $50,000+ minimum, $150–$199/hr (verified projects $17k–$70k CAD). **14islands:** $25,000+ minimum. **Noomo:** budget form starts at 50k–100k. **Unseen / Obys / basement.studio:** Clutch $10k+ minimums (founder-gated real work runs higher). **Active Theory / Lusion:** no public pricing — "inquire only," the enterprise-campaign ceiling.
- **WebGL/3D tiers practitioners actually quote:** $20k–$40k = "hero visual" (1–2 scenes, light shaders, Draco/KTX2 pipeline, 3–8 wks); $50k–$200k = "advanced" (multiple scenes, custom shaders, LOD/streaming, mobile budgets, 8–16+ wks); $200k–$500k+ = "complex" (tooling, state mgmt, back-end, design systems, a11y/SEO hardening, 16–28+ wks).
- **Directory averages:** Clutch web-design avg project ~$38k; design agencies ~$56k. So a $20k animated site sits at the *entry* of credible premium — realistic for a strong solo dev, below where the named studios start.

### How the elite studios position (the language to copy)
The more premium the studio, the harder it works to **avoid the word "website."** The ladder: "experiences" → "brands/narratives" → "creative technology" → "moments of wonder." Named examples: Active Theory ("Creative Digital Experiences"), Obys ("we built our own narrative first… being small is a discipline"), basement.studio ("we make cool shit that performs"), Phantom ("technology-led creative agency"), Locomotive ("design and code are only tools of expression"), Studio Lumio ("moments of wonder"). Cross-cutting moves: sell experiences not pages; the "creativity + technology convergence" frame; **founder-led smallness as a virtue**; **scarcity** ("a limited number of projects each year"); outcome verbs ("cut through," "unlock growth," "performs").

### The under-monetized opportunity: retainers
The art-house WebGL tier almost never productizes retainers — they sell bespoke one-offs. But the broader premium market prices them concretely: small $1k–$5k/mo, mid $5k–$15k/mo, enterprise $15k+/mo (allocated design/dev hours, Core Web Vitals monitoring, iteration). Brands moving project→retainer report 25–35% ROI improvement. **Framing an "ongoing digital partner" retainer at $5k–$15k/mo is the clearest path to recurring revenue in this niche.**

### How to actually justify & win it
1. **Custom interaction design is the single biggest differentiator** — bespoke WebGL/3D/motion is what unlocks 2–4× rates because judges/buyers instantly recognize template/AI work.
2. **Sell the outcome, not the deliverable** — reframe "website" as "experience/platform" tied to traffic, conversions, lower acquisition cost.
3. **Value-anchored fixed price + retainers**, not hourly (hybrid beats pure value-based, which often fails because clients won't share KPIs).
4. **Niche into outcome-rich verticals** (SaaS, healthcare, e-commerce) — specialists charge 40–80% more.
5. **Awards = credibility multiplier, NOT a lead channel.** An SOTD reaches mostly other designers; multiple practitioners report zero direct leads from winning. It raises close rates and prices on leads you get elsewhere.

### Where the clients actually come from
- **Referrals dominate (~79% of agencies' #1 source; convert ~5× better)** — but they're a byproduct of delivered work, not a dial you can turn.
- **Cold email** averages 3–5% reply; personalized "site audit/teardown" emails over-perform; email+LinkedIn lifts reply 30–50%. It's a grind (34% of agencies who tried outbound found it ineffective).
- **Content/personal brand** (post your 3D/motion process on X/YouTube/LinkedIn) — slow-compounding top-of-funnel; pairs naturally with this niche.
- **Toptal** is the only marketplace where $15k+ (and $100k+) scopes are normal (<3% acceptance). Upwork/Contra are weak fits for $20k+ creative.
- **Clutch** is now pay-to-play with weak leads — keep a free profile for credibility only.

### AI's effect on margin (calibrated, not hyped)
- The defensible thesis: AI compresses *production* hours; keep value-based pricing → saved hours become margin. AI commoditizes execution, so margin lives in judgment/brand/strategy.
- But the productivity data is sobering: a 2025 METR RCT found experienced devs **19% slower** with AI while *believing* they were 20% faster; a Cursor study saw early velocity spikes revert to baseline by month 3 with +tech-debt. DORA 2025: ~93% adoption, ~10% org productivity gain, only with strong workflows.
- **Interpretation:** the durable AI win is exactly the greenfield, design-heavy, low-legacy build (the $10–20k marketing/3D site) where speedups apply and tech-debt penalties don't bite. Use AI to compress production; price on value.

### Reputable educators (with a critical eye)
- **Ran Segall / Flux Academy — "The $10k Website Process"** (category-defining; the real product is sales confidence, not Webflow mechanics).
- **Josh Hall — Web Designer Pro** + podcast (outcomes, recurring revenue, documented case studies).
- **Ben Burns / The Futur / Maker Division** (brand+web at 5–6 figures).
- ⚠️ Genre-wide red flags: survivorship bias (courses show wins, hide failed positioning), funnel circularity ("free" guides selling courses/tools), and the "it's just positioning not skill" mantra is half-true and oversold — it only works where buyers can value outcomes.

### Why most devs can't charge this (four gates, simultaneously)
1. **Demonstrable results** — case studies with business outcomes, not tech lists (→ 2–3× rates).
2. **Specialization** — generalists/WordPress get commoditized.
3. **The right client type** — funded startups/enterprises/institutions, not solo entrepreneurs on small budgets.
4. **Value-based positioning** — most stay stuck on hourly.
Plus craft gates for this niche: visible bespoke-interaction skill (WebGL/Three.js/GSAP), an award-grade portfolio peers recognize, and a referral network that delivered work generates.

---

## The "AI slop" warning (the loudest community consensus)

Across r/webdev, r/Frontend, r/webdesign: AI tools converge on the same "safe" aesthetic — **dark mode, blue-purple gradients, rounded cards, Inter font.** Saturated purple is now a *tell* that a site is AI-generated. Builders feel interchangeable (the same prompt in Bolt/Lovable/Base44/Replit yields near-identical results). The nuanced contrarian take: *the sameness is a taste/effort problem, not a tooling ceiling — a good designer can rearrange the same library into something distinctive.*

**This is exactly what protects high-ticket animated/3D work.** AI is excellent for scaffolding, boilerplate, and speed, but cannot deliver distinctive design or polished motion on its own. The differentiators that command money: real design taste (escape the default), GSAP/Three.js-level motion craft, and performance discipline (Lenis, INP, no scroll-jank). The best 3D sites *tell a story or sell an idea* — they don't just show off the tech.

---

## Resource Quick-List

**Learn:** Three.js Journey (threejs-journey.com) · Wawa Sensei (wawasensei.dev) · Codrops (tympanus.net/codrops) · Olivier Larose · JavaScript Mastery · akella · Maxime Heckel (blog.maximeheckel.com) · Awwwards Academy

**Stack:** threejs.org · github.com/pmndrs/react-three-fiber · gsap.com · motion.dev · lenis.darkroom.engineering · nextjs.org · astro.build · vercel.com

**AI coding:** claude.com (Claude Code) · 21st.dev · ui.shadcn.com · v0.app · cursor.com · antigravity.google · framer.com

**AI assets:** higgsfield.ai · runwayml.com · deepmind.google (Veo) · klingai.com · midjourney.com · blackforestlabs.ai (Flux) · firefly.adobe.com · meshy.ai · spline.design · rive.app · lottiefiles.com

**Business:** flux-academy.com · joshhall.co · thefutur.com · awwwards.com/submit · toptal.com

---

*Confidence notes: tech-stack facts and GSAP-free/package-rename changes are well-corroborated. Some pricing (Higgsfield tiers, Spline tiers, Sora shutdown dates) comes from secondary aggregators — verify on official sites. Animation/3D price tiers ($30k–$200k) are studio self-marketing (aspirational ceilings, not medians). Referral-dominance, cold-email benchmarks, and AI-productivity studies are strongly sourced; award→lead-gen ROI and AI→margin are directional with thin hard data.*
