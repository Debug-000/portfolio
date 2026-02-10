import React from "react";
import GlassCard from "@/components/ui/glass-card";

type Item = { title: string; text: string };

export default function PhilosophyGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((p, i) => (
        <GlassCard key={i}>
          <div className="text-cyan-400 font-mono text-xs mb-4">
            LOG_LEVEL: CRITICAL
          </div>
          <h4 className="text-xl font-bold text-white mb-3">{p.title}</h4>
          <p className="text-slate-400">{p.text}</p>
        </GlassCard>
      ))}
    </div>
  );
}
