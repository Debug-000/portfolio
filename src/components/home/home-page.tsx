"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Gauge,
  Layers,
  Mail,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

const heroSignals = [
  {
    icon: Layers,
    title: "Architecture control",
    text: "Boundaries across UI, API, and platform layers stay explicit from the first decision.",
  },
  {
    icon: Gauge,
    title: "Performance discipline",
    text: "Budgets, profiling loops, and delivery tradeoffs are managed as product constraints.",
  },
  {
    icon: ShieldCheck,
    title: "Production readiness",
    text: "Release controls, reliability, and security are designed into the system instead of added later.",
  },
];

const proofMetrics = [
  { label: "Memory reduction", value: "4x", note: "Go platform rewrite" },
  { label: "Provisioning time", value: "4 min", note: "Infrastructure flow reduced from hours" },
  { label: "Lighthouse", value: "100/100", note: "Performance and SEO on shipped work" },
];

const principles = [
  {
    icon: Workflow,
    title: "System framing first",
    copy: "Clarify constraints, interfaces, and failure modes before implementation creates debt.",
  },
  {
    icon: CheckCircle2,
    title: "Delivery with control",
    copy: "Ship in verified slices with measurable quality rather than relying on cleanup later.",
  },
  {
    icon: Gauge,
    title: "Performance is product quality",
    copy: "Treat speed, responsiveness, and maintainability as part of the user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Long-term engineering value",
    copy: "Prefer systems that remain operable, legible, and adaptable as teams and scope grow.",
  },
];

const capabilityGroups = [
  {
    title: "Frontend Systems",
    signal: "Expert-led",
    blurb:
      "Interfaces designed with strong composition, explicit state boundaries, and measurable performance standards.",
    items: [
      "Next.js and React architecture",
      "TypeScript system design",
      "Performance and accessibility standards",
    ],
  },
  {
    title: "Backend + Platform",
    signal: "Production-proven",
    blurb:
      "Services and infrastructure shaped around explicit contracts, predictable operations, and resilient runtime behavior.",
    items: [
      "Go service design",
      "API contracts and schemas",
      "Containerized infrastructure",
    ],
  },
  {
    title: "Delivery Discipline",
    signal: "Execution-critical",
    blurb:
      "Execution stays structured through governance, observability, and evidence-driven iteration from planning to release.",
    items: [
      "CI/CD and release strategy",
      "Security and quality gates",
      "Product and engineering alignment",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Frame The System",
    copy: "Clarify product constraints, technical risks, and success criteria before implementation creates drift.",
  },
  {
    step: "02",
    title: "Design The Contracts",
    copy: "Define boundaries across UI, API, and infrastructure so teams can move faster with less ambiguity.",
  },
  {
    step: "03",
    title: "Ship With Control",
    copy: "Build in small verified slices with testing, observability, and release discipline integrated from the start.",
  },
  {
    step: "04",
    title: "Refine With Evidence",
    copy: "Use telemetry, review loops, and production learning to tighten system behavior and user experience.",
  },
];

const featuredProjects = PORTFOLIO_DATA.projects.slice(0, 2);
const aboutSignals = PORTFOLIO_DATA.pillars;
const philosophy = PORTFOLIO_DATA.engineering.philosophy;

const featuredMetrics: Record<string, Array<{ label: string; value: string }>> = {
  labrago: [
    { label: "Memory usage", value: "4x lower" },
    { label: "Server overhead", value: "-40%" },
    { label: "Latency", value: "<20ms p99" },
  ],
  "terraform-auto": [
    { label: "Provisioning", value: "4 min" },
    { label: "IaC coverage", value: "100%" },
    { label: "Ops burden", value: "materially reduced" },
  ],
};

export default function HomePage() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <div className="relative pb-40 pt-8 md:pb-48 md:pt-12">
      <section aria-labelledby="hero-heading" className="section-shell section-divider pt-24 md:pt-40">
        <div className="grid gap-16 xl:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)] xl:items-center xl:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-14"
          >
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <p className="accent-kicker">
                  <span className="accent-dot pulse-fade" />
                  {profile.title}
                </p>
                <span className="quiet-pill text-mono text-[11px] tracking-[0.16em] text-[var(--text-secondary)]">
                  Selective 2026 engagements
                </span>
              </div>

              <div className="space-y-5">
                <h1 id="hero-heading" className="section-heading max-w-[9ch] text-balance">
                  Build calmer systems.
                </h1>
                <p className="max-w-[28rem] text-[1.05rem] font-medium leading-8 text-[var(--primary)] md:text-[1.2rem]">
                  Architecture, delivery, and frontend quality aligned from day one.
                </p>
                <p className="section-copy max-w-[38rem] text-[1.02rem] md:text-[1.12rem]">
                  I design and deliver production systems where product surfaces,
                  engineering decisions, and release discipline reinforce each other.
                  The result is software that ships clearly, scales cleanly, and stays legible under pressure.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/projects" className="btn-primary group">
                Review Case Studies
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Discuss An Engagement
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 md:gap-5">
              {proofMetrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-5 py-5"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-[2rem] font-semibold tracking-[-0.07em] text-[var(--text-primary)] md:text-[2.35rem]">
                    {item.value}
                  </p>
                  <p className="mt-2 max-w-[15rem] text-sm leading-7 text-[var(--text-secondary)]">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="surface-elevated relative overflow-hidden rounded-[2.5rem] p-7 md:p-9"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />

            <div className="relative space-y-8">
              <div className="flex items-start justify-between gap-5 border-b border-[rgba(255,255,255,0.08)] pb-6">
                <div className="space-y-2">
                  <p className="editorial-label">Operating Snapshot</p>
                  <h2 className="max-w-[14ch] text-[1.65rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--text-primary)] text-balance">
                    Engineering systems in production.
                  </h2>
                </div>
                <span className="quiet-pill text-mono text-[11px] tracking-[0.18em] text-[var(--ok)]">
                  Stable
                </span>
              </div>

              <div className="rounded-[1.75rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] px-5 py-5">
                <p className="editorial-label">Current Focus</p>
                <p className="mt-3 max-w-[24rem] text-[1.1rem] leading-8 text-[var(--text-primary)]">
                  Designing product surfaces, system contracts, and release paths as one operating model.
                </p>
              </div>

              <div className="space-y-1">
                {heroSignals.map((item) => (
                  <div key={item.title} className="console-row">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] text-[var(--primary)]">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[1rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-5 border-t border-[rgba(255,255,255,0.08)] pt-6 sm:grid-cols-2">
                <div>
                  <p className="editorial-label">Collaboration</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    EU and US overlap with async-first delivery discipline.
                  </p>
                </div>
                <div>
                  <p className="editorial-label">Operating Window</p>
                  <p className="mt-2 text-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Q1-Q2 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="section-shell section-divider">
        <div className="mb-12 max-w-2xl space-y-5 md:mb-16">
          <p className="accent-kicker">
            <span className="accent-dot" /> Working Principles
          </p>
          <h2 id="principles-heading" className="section-title max-w-3xl text-balance">
            Quiet structure, clear thinking, and engineering decisions that stay useful under load.
          </h2>
        </div>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="space-y-4 border-t border-[rgba(255,255,255,0.08)] pt-5"
            >
              <item.icon className="h-4 w-4 text-[var(--primary)]" />
              <h3 className="text-[1.06rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="max-w-[19rem] text-sm leading-7 text-[var(--text-secondary)]">
                {item.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="section-shell section-divider">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
          <div className="space-y-5">
            <p className="accent-kicker">
              <span className="accent-dot" /> Featured Work
            </p>
            <h2 id="featured-heading" className="section-title max-w-4xl text-balance">
              Case studies where business outcomes, architecture, and delivery rigor are visible at a glance.
            </h2>
            <p className="section-copy max-w-2xl">
              Selected work where the proof is not only what shipped, but how the system was structured to perform,
              scale, and remain operable over time.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-ink)] transition hover:text-[var(--text-primary)]"
          >
            View all work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-10 md:space-y-12">
          {featuredProjects.map((project, index) => {
            const highlights = project.results?.highlights?.slice(0, 2) ?? [];
            const metrics = featuredMetrics[project.id] ?? [];
            const isPrimary = index === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={
                  isPrimary
                    ? "surface-elevated hover-lift grid gap-10 rounded-[2.35rem] p-7 md:p-9 xl:grid-cols-[minmax(0,1.16fr)_18rem] xl:gap-12"
                    : "grid gap-10 border-y border-[rgba(255,255,255,0.08)] py-10 md:py-12 xl:grid-cols-[minmax(0,1.16fr)_18rem] xl:gap-12"
                }
              >
                <div className="space-y-7">
                  <div className="space-y-4">
                    <span className="quiet-pill">{project.category}</span>
                    <h3 className="max-w-[14ch] text-[2.15rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--text-primary)] text-balance md:text-[2.85rem]">
                      {project.title}
                    </h3>
                    <p className="max-w-2xl text-[1rem] leading-8 text-[var(--text-secondary)]">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {project.stack.slice(0, 4).map((stackItem) => (
                      <span
                        key={stackItem}
                        className="rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1.5 text-xs text-[var(--text-secondary)]"
                      >
                        {stackItem}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-7 border-t border-[rgba(255,255,255,0.08)] pt-7 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
                  <div className="space-y-4">
                    <p className="editorial-label">Outcome Snapshot</p>
                    <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                      {metrics.map((metric) => (
                        <div key={metric.label} className="space-y-1.5">
                          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                            {metric.label}
                          </p>
                          <p className="text-[1.2rem] font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-[rgba(255,255,255,0.08)] pt-5 text-sm leading-7 text-[var(--text-secondary)]">
                    {highlights.length > 0 ? (
                      highlights.map((highlight) => (
                        <p key={highlight} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                          <span>{highlight}</span>
                        </p>
                      ))
                    ) : (
                      <p>Built with focus on maintainability, delivery speed, and strong production discipline.</p>
                    )}
                  </div>

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition hover:text-[var(--accent-ink)]"
                  >
                    Open case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="capabilities-heading" className="section-shell section-divider">
        <div className="mb-14 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.7fr)] lg:items-end md:mb-20">
          <div className="space-y-5">
            <p className="accent-kicker">
              <span className="accent-dot" /> Capabilities
            </p>
            <h2 id="capabilities-heading" className="section-title max-w-3xl text-balance">
              Technical depth presented as structured capability rather than a badge cloud.
            </h2>
          </div>
          <p className="section-copy max-w-xl">
            The emphasis is on systems that can be reasoned about, shipped with confidence, and improved without creating hidden operational drag.
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-3">
          {capabilityGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.38, delay: index * 0.05 }}
              className="space-y-5 border-t border-[rgba(255,255,255,0.08)] pt-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[1.18rem] font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                  {group.title}
                </h3>
                <span className="quiet-pill">{group.signal}</span>
              </div>

              <p className="text-sm leading-8 text-[var(--text-secondary)]">{group.blurb}</p>

              <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                <span>Capability confidence</span>
                <span className="capability-mark" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </div>

              <div className="space-y-3 pt-1">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section aria-labelledby="process-heading" className="section-shell section-divider">
        <div className="mb-14 max-w-3xl space-y-5 md:mb-20">
          <p className="accent-kicker">
            <span className="accent-dot" /> Process
          </p>
          <h2 id="process-heading" className="section-title text-balance">
            A working method built for clarity, controlled execution, and production reality.
          </h2>
          <p className="section-copy max-w-2xl">
            The process is designed to reduce ambiguity early, protect delivery quality during execution, and refine the product using evidence rather than assumptions.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((stage, index) => (
            <motion.article
              key={stage.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.34, delay: index * 0.05 }}
              className="space-y-4 border-t border-[rgba(255,255,255,0.08)] pt-6"
            >
              <p className="text-mono text-xs uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                Step {stage.step}
              </p>
              <h3 className="text-[1.1rem] font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                {stage.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--text-secondary)]">{stage.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section aria-labelledby="about-heading" className="section-shell section-divider">
        <div className="grid gap-16 xl:grid-cols-[minmax(0,1.08fr)_minmax(21rem,0.82fr)] xl:items-start">
          <div className="space-y-10">
            <div className="space-y-5">
              <p className="accent-kicker">
                <span className="accent-dot" /> Positioning
              </p>
              <h2 id="about-heading" className="section-title max-w-3xl text-balance">
                Clean modern product execution with systems-level engineering credibility.
              </h2>
              <p className="section-copy max-w-2xl">
                The strongest signal is consistent execution. This portfolio is structured to reflect how I work on real products: deliberate architecture, measurable quality, and clear communication with product stakeholders.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {aboutSignals.map((signal) => (
                <div key={signal.title} className="space-y-2 border-l border-[rgba(255,255,255,0.08)] pl-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                    {signal.title}
                  </p>
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">{signal.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <article className="surface-panel space-y-5 rounded-[2rem] p-7 md:p-8">
            <p className="editorial-label">About This Practice</p>
            <h3 className="text-[1.9rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--text-primary)] text-balance">
              Product-minded systems engineering with a high quality bar.
            </h3>
            <p className="text-[1rem] leading-8 text-[var(--text-secondary)]">
              {profile.summary}
            </p>
            <div className="space-y-3 border-t border-[rgba(255,255,255,0.08)] pt-5 text-sm leading-7 text-[var(--text-secondary)]">
              {philosophy.map((item) => (
                <p key={item.title}>
                  <span className="font-medium text-[var(--text-primary)]">{item.title}:</span> {item.text}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="final-cta-heading" className="section-shell">
        <div className="mx-auto max-w-4xl border-t border-[rgba(255,255,255,0.08)] pt-16 text-center md:pt-20">
          <div className="space-y-6">
            <p className="accent-kicker justify-center">
              <span className="accent-dot" /> Final Step
            </p>
            <h2 id="final-cta-heading" className="mx-auto max-w-3xl text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--text-primary)] text-balance md:text-[4.2rem]">
              If the product is high-stakes, let&apos;s talk with precision.
            </h2>
            <p className="mx-auto max-w-2xl text-[1rem] leading-8 text-[var(--text-secondary)]">
              Share the system, product, or delivery challenge. I will respond with a concrete technical perspective and a practical next-step plan.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-8">
            <Link href="/contact" className="btn-primary">
              <Mail className="h-4 w-4" />
              Start A Conversation
            </Link>
            <Link href="/projects" className="btn-secondary">
              <BriefcaseBusiness className="h-4 w-4" />
              See Project Depth
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
