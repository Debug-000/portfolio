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
    <article className="surface-panel hover-lift grid rounded-2xl border overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="text-mono text-xs text-[var(--text-tertiary)]">
            CASE {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-[var(--border-soft)] bg-[var(--accent-tint)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--accent-ink)]">
            {project.category ?? "Project"}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 8).map((stackItem) => (
            <span
              key={stackItem}
              className="rounded-md border border-[var(--border-soft)] bg-[rgba(12,20,33,0.8)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
            >
              {stackItem}
            </span>
          ))}
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {project.problem ? (
            <div className="rounded-xl border border-[var(--border-soft)] bg-[rgba(11,18,30,0.8)] p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                Constraint
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.problem}
              </p>
            </div>
          ) : null}

          {project.solution ? (
            <div className="rounded-xl border border-[var(--border-soft)] bg-[rgba(11,18,30,0.8)] p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                Solution
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.solution}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="border-t border-[var(--border-soft)] bg-[rgba(8,14,24,0.84)] p-6 md:p-8 lg:border-l lg:border-t-0">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
            Delivery Signals
          </p>
          <div className="mt-3 space-y-2.5 text-sm text-[var(--text-secondary)]">
            {highlights.slice(0, 3).map((highlight) => (
              <p key={highlight} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
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
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {[...scoreEntries, ...kpiEntries].slice(0, 4).map(([key, value]) => (
              <div
                key={key}
                className="rounded-lg border border-[var(--border-soft)] bg-[rgba(13,22,36,0.82)] p-3"
              >
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  {String(value)}
                </p>
                <p className="text-[10px] uppercase tracking-[0.13em] text-[var(--text-tertiary)]">
                  {startCase(key)}
                </p>
              </div>
            ))}
          </div>
        )}

        {(project.architecture || project.details) && (
          <div className="mt-5 rounded-xl border border-[var(--border-soft)] bg-[rgba(11,18,30,0.78)] p-4 text-sm text-[var(--text-secondary)]">
            {project.architecture ? (
              <p>
                <span className="text-[var(--text-tertiary)]">Architecture:</span>{" "}
                {project.architecture}
              </p>
            ) : null}
            {project.details ? (
              <p className="mt-2">
                <span className="text-[var(--text-tertiary)]">Notes:</span>{" "}
                {project.details}
              </p>
            ) : null}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between text-xs text-[var(--text-tertiary)]">
          <span className="inline-flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5" /> Production context
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5" /> Private repositories
          </span>
        </div>

        <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)]">
          Strategic engineering case study <ArrowUpRight className="h-4 w-4" />
        </p>
      </div>
    </article>
  );
}
