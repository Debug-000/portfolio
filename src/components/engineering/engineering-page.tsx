import React from "react";
import { Box, CheckCircle2, Cpu, Globe } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import PhilosophyGrid from "./philosophy";
import SkillsGrid from "./skills-grid";
import CiPipeline from "./ci-pipeline";
import Logic from "./logic";
import DevOps from "./devops";

export default function EngineeringPage() {
  return (
    <div className="pt-32 pb-20 space-y-20 mt-20">
      <SectionHeader
        title="Systems Engineering"
        subtitle="My technical stack is built on the foundation of stability, observability, and clean interface design."
        icon={<Cpu className="w-5 h-5" />}
      />

      <Logic items={PORTFOLIO_DATA.engineering.logic} />

      <DevOps />

      <PhilosophyGrid items={PORTFOLIO_DATA.engineering.philosophy} />

      <SkillsGrid skills={PORTFOLIO_DATA.engineering.skills} />

      <CiPipeline />

      <section className="max-w-7xl mx-auto">
        <SectionHeader title="The Stack Workflow" subtitle="Diagram" />
        <div
          className={` p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden`}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/5 blur-[100px]" />

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
              <Globe className="text-cyan-400" />
            </div>
            <span className="font-mono text-xs text-slate-500">
              CLIENT (REACT)
            </span>
          </div>

          <div className="h-px w-full md:w-32 bg-linear-to-r from-cyan-500 to-blue-500 hidden md:block" />

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
              <Cpu className="text-blue-400" />
            </div>
            <span className="font-mono text-xs text-slate-500">
              API (GO/GRPC)
            </span>
          </div>

          <div className="h-px w-full md:w-32 bg-linear-to-r from-blue-500 to-indigo-500 hidden md:block" />

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
              <Box className="text-indigo-400" />
            </div>
            <span className="font-mono text-xs text-slate-500">
              INFRA (K8S)
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white/5 rounded-3xl p-12 border border-white/5">
        <h3 className="text-2xl font-bold text-white mb-8">
          Production Readiness Checklist
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "CI/CD Pipeline with Automated Testing",
            "Health Check Endpoints (Liveness/Readiness)",
            "Structured Logging (JSON Format)",
            "Prometheus Metrics Exporter",
            "Secret Management (Vault/K8s Secrets)",
            "CSP & Security Headers Configured",
            "Automatic Backup Procedures",
            "Rate Limiting & DDOS Protection",
          ].map((check) => (
            <div
              key={check}
              className="flex items-center gap-3 text-slate-400 text-sm"
            >
              <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
              {check}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
