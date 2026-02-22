"use client";

import React from "react";
import { Command } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import GlassCard from "@/components/ui/glass-card";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { pillarIcon } from "@/lib/portfolio-icons";

export default function PillarsSection() {
  return (
    <section>
      <SectionHeader
        title="Executive Summary"
        subtitle="Core principles that guide every technical decision, from local development to global deployment."
        icon={<Command className="w-5 h-5" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-64">
        {PORTFOLIO_DATA.pillars.map((p, i) => (
          <GlassCard
            key={i}
            className="p-8 border border-white/5 bg-slate-900/40 rounded-2xl"
          >
            <div className="text-cyan-400 mb-4">{pillarIcon(p.icon)}</div>
            <h3 className="text-white font-bold mb-2">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
