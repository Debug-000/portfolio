import React from "react";
import { Github, Linkedin, Mail, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export default function ContactSidebar() {
  const { socials } = PORTFOLIO_DATA.profile;

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-white font-bold mb-4">Availability</h4>
        <p className="text-slate-400">
          Currently accepting high-priority consulting roles and full-time
          leadership positions.
        </p>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Direct Communication</h4>
        <div className="space-y-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-5 h-5" />{" "}
            {socials.github.replace("https://", "")}
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />{" "}
            {socials.linkedin.replace("https://", "")}
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-5 h-5" /> {socials.email}
          </a>
        </div>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
        <h5 className="text-sm font-bold text-white mb-2">Timezone</h5>
        <p className="text-xs text-slate-500">
          Currently based in GMT+1. Available for remote collaboration
          worldwide.
        </p>
      </div>

      <div className="mt-12 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 border-l-4 border-l-cyan-500">
        <h5 className="font-bold text-slate-100 mb-2 flex items-center gap-2">
          <Zap size={16} className="text-cyan-500" /> Professional Fit
        </h5>
        <p className="text-sm text-slate-400 leading-relaxed">
          Best suited for: Go microservices, Cloud migration, Kubernetes
          orchestration, and complex React dashboards.
        </p>
      </div>
    </div>
  );
}
