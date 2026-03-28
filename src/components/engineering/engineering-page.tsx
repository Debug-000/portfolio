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
  const base =
    category === "frontend"
      ? 90
      : category === "backend"
        ? 88
        : category === "devops"
          ? 86
          : 82;
  return Math.max(72, base - index * 4);
}

export default function EngineeringPage() {
  const { logic, philosophy, skills } = PORTFOLIO_DATA.engineering;

  return (
    <div className="pb-32 pt-10 md:pb-36 md:pt-14">
      <section className="section-shell section-divider pt-24 md:pt-30">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="space-y-6">
            <p className="accent-kicker">
              <span className="accent-dot" /> Engineering Discipline
            </p>
            <h1 className="section-heading max-w-3xl">
              Systems architecture with product-level execution standards.
            </h1>
            <p className="section-copy max-w-2xl text-[1.02rem] md:text-[1.08rem]">
              This page defines how technical decisions are made, implemented,
              and shipped. The objective is stable velocity: move quickly
              without sacrificing reliability or user experience quality.
            </p>
          </div>

          <div className="grid gap-6 border-t border-[rgba(120,146,186,0.12)] pt-8 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: Layers, label: "System Boundaries", value: "Explicit" },
              { icon: Gauge, label: "Perf Budgets", value: "Enforced" },
              { icon: ShieldCheck, label: "Quality Gates", value: "CI" },
              { icon: Cpu, label: "Infra Alignment", value: "Yes" },
            ].map((metric) => (
              <div key={metric.label} className="space-y-2">
                <metric.icon className="h-4 w-4 text-[var(--accent)]" />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                  {metric.label}
                </p>
                <p className="text-[1.8rem] font-bold tracking-[-0.03em] text-[var(--text-primary)]">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-divider">
        <div className="mb-12 space-y-4">
          <p className="accent-kicker">
            <span className="accent-dot" /> Principles
          </p>
          <h2 className="section-title max-w-3xl">Core engineering principles.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {logic.map((item) => (
            <article key={item.title} className="rounded-[1.7rem] border border-[rgba(120,146,186,0.1)] bg-[rgba(10,17,29,0.14)] p-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                Principle
              </p>
              <h3 className="mt-4 text-[1.12rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-divider">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div className="space-y-4">
            <p className="accent-kicker">
              <span className="accent-dot" /> Architecture Runbook
            </p>
            <h2 className="section-title max-w-3xl">Architecture runbook.</h2>
          </div>
          <Binary className="hidden h-5 w-5 text-[var(--accent)] md:block" />
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {executionModel.map((stage, index) => (
            <article key={stage.title} className="rounded-[1.55rem] border border-[rgba(120,146,186,0.1)] bg-[rgba(10,17,29,0.1)] p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                <span className="text-mono">0{index + 1}</span>
                <ArrowRight className="h-3.5 w-3.5" />
                <span>Stage</span>
              </div>
              <h3 className="mt-4 text-[1.08rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {stage.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-divider">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
          <article className="surface-panel rounded-[2rem] p-7 md:p-8">
            <div className="mb-6 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <Server className="h-4 w-4 text-[var(--accent)]" />
              Capability Stack
            </div>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                    {category}
                  </p>
                  <div className="space-y-4">
                    {(items as string[]).map((skill, index) => (
                      <div key={skill} className="grid gap-2 border-t border-[rgba(120,146,186,0.12)] pt-4 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-4">
                        <span className="text-sm text-[var(--text-secondary)]">{skill}</span>
                        <span className="capability-mark justify-self-start sm:justify-self-center" aria-hidden="true">
                          <span />
                          <span />
                          <span style={{ opacity: capabilityWeight(category, index) > 84 ? 0.4 : 0.2 }} />
                          <span style={{ opacity: capabilityWeight(category, index) > 88 ? 0.22 : 0.08 }} />
                        </span>
                        <span className="text-mono text-xs text-[var(--text-tertiary)] sm:justify-self-end">
                          {capabilityWeight(category, index)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-elevated rounded-[2rem] p-7 md:p-8">
            <div className="mb-6 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <Radar className="h-4 w-4 text-[var(--accent)]" />
              Readiness Checklist
            </div>
            <div className="space-y-4">
              {readinessChecklist.map((check) => (
                <p key={check} className="flex items-start gap-3 text-sm leading-7 text-[var(--text-secondary)]">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {check}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-[rgba(120,146,186,0.12)] pt-6">
              <p className="editorial-label">Working Philosophy</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                {philosophy.map((item) => (
                  <p key={item.title}>
                    <span className="text-[var(--text-primary)]">{item.title}:</span> {item.text}
                  </p>
                ))}
              </div>
            </div>

            <p className="mt-8 text-sm leading-7 text-[var(--text-secondary)]">
              Engineering quality is managed as a system, not a checklist item.
              The objective is reliable delivery under real constraints.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-[1.85rem] border border-[rgba(120,146,186,0.1)] bg-[rgba(10,17,29,0.14)] p-7 md:p-8">
          <div className="mb-6 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
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
                <span className="rounded-full border border-[rgba(120,146,186,0.12)] bg-[rgba(10,17,29,0.14)] px-4 py-2 text-[var(--text-secondary)]">
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
