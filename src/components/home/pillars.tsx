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

      <div className="grid md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.pillars.map((p, i) => (
          <GlassCard key={i} className="group">
            <div className="w-12 h-12 bg-blue-500/10 text-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
              {pillarIcon(p.icon)}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
            <p className="text-slate-400 leading-relaxed">{p.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
