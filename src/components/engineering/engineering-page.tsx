"use client";

import React from "react";
import {
  Box,
  CheckCircle2,
  Code,
  Cpu,
  Globe,
  Layers,
  Monitor,
} from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import PhilosophyGrid from "./philosophy";
import SkillsGrid from "./skills-grid";
import CiPipeline from "./ci-pipeline";
import Logic from "./logic";
import DevOps from "./devops";
import { motion } from "framer-motion";

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
        <SectionHeader
          title="Remove up and fix down"
          subtitle="Important Note"
        />
        <div className="p-8 border border-white/5 bg-slate-900/40 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
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
      <section className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="relative h-100 w-full bg-slate-900/40 rounded-3xl border border-slate-800 flex items-center justify-center">
            {/* Animated Diagram Mockup */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_70%)]" />
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-24">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-xl border border-cyan-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <Monitor className="text-cyan-400" />
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  CLIENT_UI
                </span>
              </motion.div>

              <div className="w-1 md:w-24 h-12 md:h-1 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full opacity-50 relative">
                <motion.div
                  animate={{ left: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[2px]"
                />
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-20 h-20 bg-slate-800 rounded-2xl border border-blue-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                  <Code className="text-blue-400" size={32} />
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  GO_ENGINE
                </span>
              </motion.div>

              <div className="w-1 md:w-24 h-12 md:h-1 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full opacity-50" />

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-xl border border-indigo-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                  <Layers className="text-indigo-400" />
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  K8S_ORCH
                </span>
              </motion.div>
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-4 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-cyan-500" /> HTTPS
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> gRPC
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-indigo-500" /> CI/CD
              </span>
            </div>
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
