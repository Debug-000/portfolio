import React, { JSX } from "react";
import { CheckCircle2, Github, Globe } from "lucide-react";
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
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");
}

export default function ProjectCard({
  project,
  index,
  total,
}: Props): JSX.Element {
  const flipped = index % 2 !== 0;

  const highlights = project.results?.highlights ?? [];
  const scores = project.results?.scores ?? {};
  const kpis = project.results?.kpis ?? {};

  const scoreEntries = Object.entries(scores).filter(([, v]) => v != null);
  const kpiEntries = Object.entries(kpis).filter(
    ([, v]) => v != null && String(v).length > 0,
  );

  return (
    <div className="grid md:grid-cols-12 gap-12 items-start">
      <div className={`md:col-span-5 ${flipped ? "md:order-2" : ""}`}>
        <span className="text-cyan-400 font-mono text-sm">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>

        <h3 className="text-4xl font-bold text-white mt-4 mb-2">
          {project.title}
        </h3>

        {project.category ? (
          <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-6">
            {project.category}
          </div>
        ) : (
          <div className="mb-6" />
        )}

        <p className="text-slate-400 leading-relaxed mb-10">
          {project.summary}
        </p>

        <div className="space-y-8">
          {project.problem ? (
            <div>
              <h4 className="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full" /> The
                Problem
              </h4>
              <p className="text-slate-400 leading-relaxed">
                {project.problem}
              </p>
            </div>
          ) : null}

          {project.solution ? (
            <div>
              <h4 className="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> The
                Solution
              </h4>
              <p className="text-slate-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          ) : null}

          {highlights.length > 0 ? (
            <div>
              <h4 className="text-slate-200 font-bold mb-4">Results</h4>
              <ul className="space-y-2">
                {highlights.map((r, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 h-full min-h-100 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700"
              >
                {s}
              </span>
            ))}
          </div>

          {(project.architecture || project.details) && (
            <div className="mb-10 space-y-3">
              {project.architecture ? (
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">
                    Architecture
                  </div>
                  <div className="text-slate-300">{project.architecture}</div>
                </div>
              ) : null}

              {project.details ? (
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">
                    Notes
                  </div>
                  <div className="text-slate-400">{project.details}</div>
                </div>
              ) : null}
            </div>
          )}

          {scoreEntries.length > 0 || kpiEntries.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {scoreEntries.map(([key, val]) => (
                <div
                  key={`score-${key}`}
                  className="bg-slate-800/50 p-4 rounded-xl text-center"
                >
                  <div className="text-cyan-400 text-2xl font-black">
                    {String(val)}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold mt-1">
                    {startCase(key)}
                  </div>
                </div>
              ))}

              {kpiEntries
                .slice(0, Math.max(0, 6 - scoreEntries.length))
                .map(([key, val]) => (
                  <div
                    key={`kpi-${key}`}
                    className="bg-slate-800/50 p-4 rounded-xl text-center"
                  >
                    <div className="text-cyan-400 text-2xl font-black">
                      {String(val)}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold mt-1">
                      {startCase(key)}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-slate-500 text-sm">
              No metrics available for this project.
            </div>
          )}

          {project.features?.length ? (
            <div className="mt-10">
              <div className="text-[10px] text-slate-500 uppercase font-bold mb-3">
                Key Features
              </div>
              <div className="flex flex-wrap gap-2">
                {project.features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 rounded-full text-xs bg-slate-800/60 border border-slate-700 text-slate-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Globe className="w-4 h-4" /> Live System
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Github className="w-4 h-4" /> Private Repo
          </div>
        </div>
      </div>
    </div>
  );
}
