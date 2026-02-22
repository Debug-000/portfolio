import { Command, Layers } from "lucide-react";
import SectionHeader from "../ui/section-header";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import GlassCard from "../ui/glass-card";

export default function Capabilities() {
  return (
    <section>
      <SectionHeader
        title="Capabilities"
        subtitle="How I Help"
        icon={<Layers className="w-5 h-5" />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.capabilities.map((s, i) => (
          <GlassCard
            key={i}
            className="p-8 border border-white/5 bg-slate-900/40 rounded-2xl"
          >
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0">
              <Command className="text-cyan-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{s.desc}</p>
              <code className="text-[10px] bg-black px-2 py-1 rounded text-slate-500 border border-white/5 uppercase tracking-widest">
                {s.hint}
              </code>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
