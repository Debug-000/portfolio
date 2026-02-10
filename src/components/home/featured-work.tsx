"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, ChevronRight, ArrowRight, Layers } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import GlassCard from "@/components/ui/glass-card";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export default function FeaturedWorkSection() {
  return (
    <section>
      <div className="flex justify-between items-end mb-12">
        <SectionHeader
          title="Featured Work"
          subtitle="A selection of high-impact engineering projects focusing on CMS architecture and DevOps automation."
          icon={<Briefcase className="w-5 h-5" />}
        />
        <Link
          href="/projects"
          className="mb-12 text-cyan-400 hover:text-cyan-300 flex items-center gap-2 font-bold"
        >
          All Case Studies <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.projects.slice(0, 2).map((proj) => (
          <GlassCard
            key={proj.id}
            className="p-0 overflow-hidden flex flex-col md:flex-row h-full"
          >
            <div className="p-8 flex-1">
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest">
                {proj.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                {proj.title}
              </h3>
              <p className="text-slate-400 mb-6">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <Link
                href="/projects"
                className="text-white text-sm font-bold flex items-center gap-2 group"
              >
                Deep Dive{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="md:w-1/3 bg-slate-800/50 flex items-center justify-center p-8 border-l border-slate-800">
              <div className="text-cyan-500/20">
                <Layers className="w-24 h-24" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
