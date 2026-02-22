import { CheckCircle2, Cpu } from "lucide-react";
import SectionHeader from "../ui/section-header";
import GlassCard from "../ui/glass-card";

export default function SystemSnapshot() {
  return (
    <section>
      <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        <SectionHeader
          title="Systems Snapshot"
          subtitle="Orchestration Layer"
          icon={<Cpu className="w-5 h-5" />}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-slate-300">
              I specialize in complex multi-tier environments. My focus is on
              the &quot;Contract Layer&quot; — ensuring frontend interfaces,
              APIs, and infrastructure talk to each other without friction.
            </p>
            <div className="space-y-4">
              {[
                "Frontend (React/Tailwind)",
                "API (Go/gRPC)",
                "Infrastructure (K8s/Terraform)",
              ].map((layer, idx) => (
                <GlassCard
                  key={idx}
                  className="flex items-center gap-4 bg-black/30 p-4 rounded-xl border border-white/5"
                >
                  <div className="w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-mono text-xs">
                    {idx + 1}
                  </div>
                  <span className="text-white font-medium">{layer}</span>
                  <CheckCircle2 className="w-5 h-5 ml-auto text-emerald-500" />
                </GlassCard>
              ))}
            </div>
          </div>
          <div className="font-mono text-[11px] bg-black/60 p-6 rounded-xl border border-white/10 text-cyan-500/80 leading-relaxed shadow-2xl -mt-20">
            <p className="text-slate-500 mb-2">
              {"// Terraform Infrastructure Definition"}
            </p>
            <p>{' resource "kubernetes_deployment" "api_server" {'}</p>
            <p className="pl-4">{' metadata { name = "soni-backend" }'}</p>
            <p className="pl-4">{"spec {"}</p>
            <p className="pl-8">{"replicas = 3"}</p>
            <p className="pl-8">
              {'selector { match_labels = { app = "go-api" } }'}
            </p>
            <p className="pl-4">{"}"}</p>
            <p>{"}"}</p>
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-emerald-400">STATUS: DEPLOYED_STABLE</span>
              <span className="text-slate-500">v1.4.2-stable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
