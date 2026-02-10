import React from "react";
import { CheckCircle2, Github, Globe } from "lucide-react";
import type { Project } from "@/lib/types";

type Props = {
  project: Project;
  index: number;
  total: number;
};

export default function ProjectCard({ project, index, total }: Props) {
  const flipped = index % 2 !== 0;

  return (
    <div className="grid md:grid-cols-12 gap-12 items-start">
      <div className={`md:col-span-5 ${flipped ? "md:order-2" : ""}`}>
        <span className="text-cyan-400 font-mono text-sm">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>

        <h3 className="text-4xl font-bold text-white mt-4 mb-6">
          {project.title}
        </h3>

        <div className="space-y-8">
          <div>
            <h4 className="text-slate-200 font-bold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full" /> The
              Problem
            </h4>
            <p className="text-slate-400 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h4 className="text-slate-200 font-bold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> The
              Solution
            </h4>
            <p className="text-slate-400 leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <h4 className="text-slate-200 font-bold mb-4">
              Architecture Results
            </h4>
            <ul className="space-y-2">
              {project.results.map((r, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 h-full min-h-100 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-3 mb-12">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Object.entries(project.metrics).map(([key, val]) => (
              <div
                key={key}
                className="bg-slate-800/50 p-4 rounded-xl text-center"
              >
                <div className="text-cyan-400 text-2xl font-black">
                  {String(val)}
                </div>
                <div className="text-[10px] text-slate-500 uppercase font-bold mt-1">
                  {key}
                </div>
              </div>
            ))}
          </div>
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
