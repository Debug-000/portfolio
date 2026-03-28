import React, { JSX } from "react";
import { CheckCircle2, Globe, Lock, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

type Props = {
  project: Project;
  index: number;
  total: number;
};

function startCase(input: string) {
  return input
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ProjectCard({
  project,
  index,
  total,
}: Props): JSX.Element {
  const highlights = project.results?.highlights ?? [];
  const scores = project.results?.scores ?? {};
  const kpis = project.results?.kpis ?? {};

  const scoreEntries = Object.entries(scores).filter(([, value]) => value != null);
  const kpiEntries = Object.entries(kpis).filter(
    ([, value]) => value != null && String(value).length > 0,
  );

  return (
    <article className="surface-panel hover-lift grid gap-8 rounded-[2rem] p-7 md:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:p-9">
      <div className="space-y-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-mono text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
            Case {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="quiet-pill">{project.category ?? "Project"}</span>
        </div>

        <div className="space-y-4">
          <h3 className="text-[2rem] font-bold leading-tight tracking-[-0.04em] text-[var(--text-primary)] md:text-[2.4rem]">
            {project.title}
          </h3>
          <p className="max-w-2xl text-[0.98rem] leading-8 text-[var(--text-secondary)]">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {project.stack.slice(0, 6).map((stackItem) => (
            <span
              key={stackItem}
              className="rounded-full border border-[rgba(120,146,186,0.12)] px-3 py-1.5 text-xs text-[var(--text-secondary)]"
            >
              {stackItem}
            </span>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {project.problem ? (
            <div className="space-y-2 border-t border-[rgba(120,146,186,0.12)] pt-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                Constraint
              </p>
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                {project.problem}
              </p>
            </div>
          ) : null}

          {project.solution ? (
            <div className="space-y-2 border-t border-[rgba(120,146,186,0.12)] pt-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                Solution
              </p>
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                {project.solution}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="border-t border-[rgba(120,146,186,0.12)] pt-7 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
        <div>
          <p className="editorial-label">Delivery Signals</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--text-secondary)]">
            {highlights.slice(0, 3).map((highlight) => (
              <p key={highlight} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                {highlight}
              </p>
            ))}
            {highlights.length === 0 && (
              <p>
                Built for robust architecture, maintainability, and faster
                delivery control.
              </p>
            )}
          </div>
        </div>

        {(scoreEntries.length > 0 || kpiEntries.length > 0) && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[...scoreEntries, ...kpiEntries].slice(0, 4).map(([key, value]) => (
              <div key={key} className="space-y-1 border-t border-[rgba(120,146,186,0.12)] pt-4">
                <p className="text-[1.25rem] font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                  {String(value)}
                </p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                  {startCase(key)}
                </p>
              </div>
            ))}
          </div>
        )}

        {(project.architecture || project.details) && (
          <div className="mt-8 space-y-3 border-t border-[rgba(120,146,186,0.12)] pt-5 text-sm leading-7 text-[var(--text-secondary)]">
            {project.architecture ? (
              <p>
                <span className="text-[var(--text-primary)]">Architecture:</span>{" "}
                {project.architecture}
              </p>
            ) : null}
            {project.details ? (
              <p>
                <span className="text-[var(--text-primary)]">Notes:</span>{" "}
                {project.details}
              </p>
            ) : null}
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
          <span className="inline-flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5" /> Production context
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5" /> Private repositories
          </span>
        </div>

        <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-ink)]">
          Strategic engineering case study <ArrowUpRight className="h-4 w-4" />
        </p>
      </div>
    </article>
  );
}
