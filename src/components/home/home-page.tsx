"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Gauge,
  Layers,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  LineChart,
  Terminal,
  BriefcaseBusiness,
  Blocks,
  Mail,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

const metrics = [
  { label: "Memory Reduction", value: "4x", note: "Labrago platform rewrite" },
  {
    label: "Provisioning Time",
    value: "4 min",
    note: "Infra flow reduced from hours",
  },
  {
    label: "Lighthouse",
    value: "100/100",
    note: "Performance + SEO on shipped work",
  },
  {
    label: "Delivery Focus",
    value: "End-to-end",
    note: "Architecture, UX, and deployment",
  },
];

const capabilityGroups = [
  {
    title: "Frontend Systems",
    blurb:
      "High-fidelity interfaces with strict component architecture, measurable performance budgets, and maintainable state boundaries.",
    items: [
      { name: "Next.js / React Architecture", score: 95 },
      { name: "TypeScript Design", score: 92 },
      { name: "Performance Engineering", score: 90 },
    ],
  },
  {
    title: "Backend + Platform",
    blurb:
      "Services built with reliability in mind: explicit contracts, scalable runtime behavior, and clear observability for production confidence.",
    items: [
      { name: "Go Service Design", score: 91 },
      { name: "API Contracts + Schemas", score: 93 },
      { name: "Containerized Infrastructure", score: 89 },
    ],
  },
  {
    title: "Delivery Discipline",
    blurb:
      "From architecture decisions to release governance, execution stays structured and verifiable across every phase.",
    items: [
      { name: "CI/CD + Release Strategy", score: 90 },
      { name: "Security + Quality Gates", score: 88 },
      { name: "Product Collaboration", score: 87 },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Frame The System",
    copy: "Clarify constraints, success criteria, and failure risks before implementation starts.",
  },
  {
    step: "02",
    title: "Design The Contracts",
    copy: "Define boundaries between UI, API, and infrastructure so delivery stays predictable under change.",
  },
  {
    step: "03",
    title: "Ship With Control",
    copy: "Build in small verified slices with testing, observability, and performance checks wired in.",
  },
  {
    step: "04",
    title: "Refine With Evidence",
    copy: "Tighten UX and system behavior using telemetry, review loops, and production feedback.",
  },
];

const featured = PORTFOLIO_DATA.projects.slice(0, 3);

export default function HomePage() {
  return (
    <div className="relative pb-24 pt-8 md:pt-14">
      <section className="grid gap-10 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-12 md:pt-24 section-divider">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-7"
        >
          <div className="accent-kicker">
            <span className="accent-dot pulse-fade" />
            Senior Systems Engineer
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-6xl md:leading-[1.06]">
            Engineered digital products for teams that ship serious software.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            I design and build production systems where frontend quality,
            architecture clarity, and delivery speed are treated as one
            problem. The result is software that scales without losing polish.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
            >
              Review Case Studies
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-[rgba(16,25,40,0.8)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--border-strong)]"
            >
              Discuss An Engagement
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 md:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="surface-soft rounded-xl p-3">
                <div className="text-sm font-semibold text-[var(--text-secondary)]">
                  {item.label}
                </div>
                <div className="mt-1 text-lg font-bold text-[var(--text-primary)]">
                  {item.value}
                </div>
                <p className="mt-1 text-xs text-[var(--text-tertiary)]">{item.note}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="surface-elevated relative overflow-hidden rounded-2xl p-5 md:p-6"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--accent-tint-strong)] blur-3xl" />

          <div className="relative space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-[var(--border-soft)] bg-[rgba(11,19,33,0.84)] px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                  Delivery Console
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                  Product + Engineering Alignment
                </p>
              </div>
              <span className="text-mono text-xs text-[var(--ok)]">STABLE</span>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: Layers,
                  title: "Architecture Control",
                  text: "Boundaries across UI, API, and platform layers",
                },
                {
                  icon: Gauge,
                  title: "Performance Discipline",
                  text: "Budgets, profiling loops, and measurable delivery",
                },
                {
                  icon: ShieldCheck,
                  title: "Production Readiness",
                  text: "Security and release gates integrated from day one",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="hover-lift surface-panel rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg border border-[var(--border-soft)] bg-[rgba(14,24,40,0.9)] p-2 text-[var(--accent)]">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="surface-soft rounded-xl p-4">
              <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                <span>Current Focus</span>
                <span className="text-[var(--text-secondary)]">Q1-Q2 2026</span>
              </div>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p>1. Product-grade frontend architecture for scale</p>
                <p>2. Infrastructure automation and safer release cadence</p>
                <p>3. Faster decision loops from instrumentation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-20 section-divider">
        <div className="surface-panel rounded-2xl p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                icon: Workflow,
                title: "Systems Thinking",
                copy: "Every feature maps to architecture, operations, and user outcomes.",
              },
              {
                icon: LineChart,
                title: "Outcome Driven",
                copy: "Decisions are backed by performance data and delivery metrics.",
              },
              {
                icon: Terminal,
                title: "Technical Depth",
                copy: "Comfortable from frontend interaction detail to infrastructure controls.",
              },
              {
                icon: CheckCircle2,
                title: "Execution Quality",
                copy: "Clean implementation standards with disciplined shipping behavior.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-xl border border-[var(--border-soft)] bg-[rgba(10,17,30,0.86)] p-4">
                <item.icon className="h-4 w-4 text-[var(--accent)]" />
                <h3 className="mt-3 text-sm font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 section-divider">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="accent-kicker">
              <span className="accent-dot" /> Featured Work
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Case-study previews focused on architecture and measurable outcomes.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-ink)]"
          >
            Explore Full Project Archive <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-5">
          {featured.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="surface-panel hover-lift grid overflow-hidden rounded-2xl md:grid-cols-[1.3fr_0.7fr]"
            >
              <div className="p-6 md:p-8">
                <div className="mb-3 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--accent-tint)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-ink)]">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 6).map((stackItem) => (
                    <span
                      key={stackItem}
                      className="rounded-md border border-[var(--border-soft)] bg-[rgba(16,24,39,0.82)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      {stackItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[var(--border-soft)] bg-[rgba(10,17,28,0.88)] p-6 md:border-l md:border-t-0 md:p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
                  Delivery Signals
                </p>
                <div className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
                  {project.results?.highlights?.slice(0, 3).map((highlight) => (
                    <p key={highlight} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      {highlight}
                    </p>
                  ))}
                  {(!project.results?.highlights ||
                    project.results.highlights.length === 0) && (
                    <p className="text-sm text-[var(--text-secondary)]">
                      Built with focus on maintainability, delivery speed, and
                      strong production discipline.
                    </p>
                  )}
                </div>
                <Link
                  href="/projects"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition hover:text-[var(--accent)]"
                >
                  Open Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-20 section-divider">
        <div className="mb-8">
          <p className="accent-kicker">
            <span className="accent-dot" /> Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Technical depth presented as operating signals, not badge clouds.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {capabilityGroups.map((group) => (
            <article key={group.title} className="surface-panel hover-lift rounded-2xl p-5 md:p-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {group.blurb}
              </p>
              <div className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="text-[var(--text-secondary)]">{item.name}</span>
                      <span className="text-mono text-[var(--text-tertiary)]">{item.score}</span>
                    </div>
                    <div className="signal-bar">
                      <span style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 section-divider">
        <div className="surface-panel rounded-2xl p-6 md:p-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="accent-kicker">
                <span className="accent-dot" /> Process
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                A disciplined way of working from first brief to stable release.
              </h2>
            </div>
            <Blocks className="hidden h-6 w-6 text-[var(--accent)] md:block" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((stage) => (
              <article key={stage.step} className="rounded-xl border border-[var(--border-soft)] bg-[rgba(12,19,32,0.85)] p-4">
                <p className="text-mono text-xs text-[var(--accent)]">STEP {stage.step}</p>
                <h3 className="mt-2 text-base font-semibold text-[var(--text-primary)]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {stage.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 section-divider">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="surface-panel rounded-2xl p-6 md:p-8">
            <p className="accent-kicker">
              <span className="accent-dot" /> Proof Layer
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Built to inspire confidence before the first call.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
              The strongest signal is consistent execution. This portfolio is
              structured to reflect how I work on real products: deliberate
              architecture, measurable quality, and clear communication with
              product stakeholders.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Architecture-first delivery", value: "Standard" },
                { label: "Accessibility + performance", value: "Built-in" },
                { label: "Release governance", value: "Disciplined" },
              ].map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-xl border border-[var(--border-soft)] bg-[rgba(11,18,29,0.82)] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.13em] text-[var(--text-tertiary)]">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-elevated rounded-2xl p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
              About This Practice
            </p>
            <h3 className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
              Product-minded engineer with systems standards.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
              I am best suited for products that need both technical rigor and
              interface quality. I care about maintainability, fast iteration,
              and shipping software that teams can trust long after launch.
            </p>

            <div className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
              <p>1. Clear technical decisions with explicit tradeoffs</p>
              <p>2. Reliable communication across product and engineering</p>
              <p>3. Selective engagements where quality bar matters</p>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-20">
        <div className="surface-elevated relative overflow-hidden rounded-2xl p-7 md:p-10">
          <div className="absolute -left-28 -top-24 h-56 w-56 rounded-full bg-[var(--accent-soft)] blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="accent-kicker">
                <span className="accent-dot" /> Final Step
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                If the product is high-stakes, let&apos;s talk with precision.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
                Share the system, product, or delivery challenge. I will respond
                with a concrete technical perspective and next-step plan.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
              >
                <Mail className="h-4 w-4" />
                Start A Conversation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-[rgba(10,17,29,0.85)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--border-strong)]"
              >
                <BriefcaseBusiness className="h-4 w-4" />
                See Project Depth
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
