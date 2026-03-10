"use client";

import React from "react";
import {
  Cpu,
  Layers,
  Gauge,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  ArrowRight,
  Binary,
  Server,
  Radar,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

const executionModel = [
  {
    title: "System Framing",
    text: "Architecture and delivery risks are scoped before implementation to avoid downstream surprises.",
  },
  {
    title: "Boundary Design",
    text: "Contracts across UI, API, and infra define clean ownership and safer iteration paths.",
  },
  {
    title: "Delivery Governance",
    text: "CI quality gates, observability, and release controls are integrated into everyday flow.",
  },
  {
    title: "Operational Refinement",
    text: "Performance and UX are continuously tuned from production evidence, not assumptions.",
  },
];

const readinessChecklist = [
  "Automated validation in CI before deploy",
  "Typed API boundaries and schema discipline",
  "Performance budgets for frontend critical paths",
  "Security headers and hardened request flows",
  "Containerization and environment parity",
  "Telemetry loops for incident and UX insight",
];

function capabilityWeight(category: string, index: number) {
  const base = category === "frontend" ? 90 : category === "backend" ? 88 : category === "devops" ? 86 : 82;
  return Math.max(72, base - index * 4);
}

export default function EngineeringPage() {
  const { logic, philosophy, skills } = PORTFOLIO_DATA.engineering;

  return (
    <div className="pb-24 pt-28 md:pt-34">
      <section className="section-divider">
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="accent-kicker">
              <span className="accent-dot" /> Engineering Discipline
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-5xl md:leading-[1.08]">
              Systems architecture with product-level execution standards.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
              This page defines how technical decisions are made, implemented,
              and shipped. The objective is stable velocity: move quickly
              without sacrificing reliability or user experience quality.
            </p>
          </div>

          <div className="surface-panel rounded-2xl p-5 md:p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Layers, label: "System Boundaries", value: "Explicit" },
                { icon: Gauge, label: "Perf Budgets", value: "Enforced" },
                { icon: ShieldCheck, label: "Quality Gates", value: "CI" },
                { icon: Cpu, label: "Infra Alignment", value: "Yes" },
              ].map((metric) => (
                <article key={metric.label} className="surface-soft rounded-xl p-3">
                  <metric.icon className="h-4 w-4 text-[var(--accent)]" />
                  <p className="mt-2 text-xs text-[var(--text-tertiary)]">{metric.label}</p>
                  <p className="text-base font-semibold text-[var(--text-primary)]">{metric.value}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 section-divider">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Core engineering principles.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {logic.map((item) => (
            <article key={item.title} className="surface-panel hover-lift rounded-xl p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                Principle
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 section-divider">
        <div className="surface-panel rounded-2xl p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Architecture runbook.
            </h2>
            <Binary className="h-6 w-6 text-[var(--accent)]" />
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {executionModel.map((stage, index) => (
              <article
                key={stage.title}
                className="rounded-xl border border-[var(--border-soft)] bg-[rgba(10,17,29,0.82)] p-4"
              >
                <div className="flex items-center gap-2 text-xs text-[var(--text-tertiary)]">
                  <span className="text-mono">0{index + 1}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>Stage</span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-[var(--text-primary)]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {stage.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 section-divider">
        <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <article className="surface-panel rounded-2xl p-6 md:p-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <Server className="h-4 w-4 text-[var(--accent)]" />
              Capability Stack
            </div>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                    {category}
                  </p>
                  <div className="space-y-3">
                    {(items as string[]).map((skill, index) => (
                      <div key={skill}>
                        <div className="mb-1.5 flex items-center justify-between text-xs">
                          <span className="text-[var(--text-secondary)]">{skill}</span>
                          <span className="text-mono text-[var(--text-tertiary)]">
                            {capabilityWeight(category, index)}
                          </span>
                        </div>
                        <div className="signal-bar">
                          <span
                            style={{ width: `${capabilityWeight(category, index)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-elevated rounded-2xl p-6 md:p-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <Radar className="h-4 w-4 text-[var(--accent)]" />
              Readiness Checklist
            </div>
            <div className="space-y-3">
              {readinessChecklist.map((check) => (
                <p key={check} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {check}
                </p>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[var(--border-soft)] bg-[rgba(10,17,29,0.82)] p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                Working Philosophy
              </p>
              <div className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                {philosophy.map((item) => (
                  <p key={item.title}>
                    <span className="text-[var(--text-primary)]">{item.title}:</span> {item.text}
                  </p>
                ))}
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
              Engineering quality is managed as a system, not a checklist item.
              The objective is reliable delivery under real constraints.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-16">
        <div className="surface-elevated rounded-2xl p-6 md:p-8">
          <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Workflow className="h-4 w-4 text-[var(--accent)]" />
            Delivery Sequence
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {[
              "Discovery",
              "Architecture",
              "Implementation",
              "Validation",
              "Release",
              "Refinement",
            ].map((stage, index, arr) => (
              <React.Fragment key={stage}>
                <span className="rounded-full border border-[var(--border-soft)] bg-[rgba(11,18,30,0.82)] px-3 py-1.5 text-[var(--text-secondary)]">
                  {stage}
                </span>
                {index < arr.length - 1 && <ArrowRight className="h-4 w-4 text-[var(--text-tertiary)]" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
