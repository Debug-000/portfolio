import React from "react";
import { ChevronRight } from "lucide-react";

export default function CiPipeline() {
  return (
    <section>
      <div className="bg-linear-to-br from-blue-900/20 to-cyan-900/10 border border-slate-800 rounded-3xl p-12 text-center">
        <h4 className="text-2xl font-bold text-white mb-4">
          Continuous Integration &amp; Delivery
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-4 text-slate-500">
          <span>Commit</span> <ChevronRight />
          <span className="text-cyan-400">Lint/Test</span> <ChevronRight />
          <span className="text-cyan-400">Build Image</span> <ChevronRight />
          <span>Scan</span> <ChevronRight />
          <span className="text-cyan-400">Staging</span> <ChevronRight />
          <span>Production</span>
        </div>
      </div>
    </section>
  );
}
