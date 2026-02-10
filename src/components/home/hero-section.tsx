"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Hero3D from "@/components/hero-3d";
import { useTerminal } from "@/components/terminal/terminal-context";

export default function HeroSection() {
  const { openTerminal } = useTerminal();

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
      <div className="flex-1 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest border border-cyan-500/20">
            SYSTEMS ARCHITECT
          </span>

          <h1 className="text-6xl md:text-8xl font-black text-white mt-6 leading-tight">
            Design for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Scale.
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-xl mt-6 leading-relaxed">
            Hi, I&apos;m <span className="text-white font-bold">Elisjon</span>.
            I build production-grade systems where performance and security are
            baked into the core.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => openTerminal("/")}
            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 border border-slate-700 transition-all"
          >
            <Terminal className="w-4 h-4" /> Terminal UI
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800">
          <div>
            <div className="text-2xl font-bold text-white">99%</div>
            <div className="text-xs text-slate-500 uppercase tracking-tighter">
              Uptime Target
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">50ms</div>
            <div className="text-xs text-slate-500 uppercase tracking-tighter">
              Latency Ceiling
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">100/100</div>
            <div className="text-xs text-slate-500 uppercase tracking-tighter">
              Audit Score
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center relative">
        <Hero3D />
      </div>
    </section>
  );
}
