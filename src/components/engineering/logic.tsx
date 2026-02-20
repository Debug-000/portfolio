import GlassCard from "@/components/ui/glass-card";
import { pillarIcon } from "@/lib/portfolio-icons";
import { PillarIconKey } from "@/lib/types";

type Item = { title: string; text: string; icon: PillarIconKey };

export default function Logic({ items }: { items: Item[] }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((l, i) => (
        <GlassCard
          key={i}
          className="p-8 border border-white/5 bg-slate-900/40 rounded-2xl"
        >
          <div className="text-cyan-400 mb-4">{pillarIcon(l.icon)}</div>
          <h3 className="text-white font-bold mb-2">{l.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{l.text}</p>
        </GlassCard>
      ))}
    </section>
  );
}
