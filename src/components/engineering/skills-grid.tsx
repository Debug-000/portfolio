import React from "react";
import { Database, Layout, Server, Smartphone } from "lucide-react";

type Skills = Record<"frontend" | "backend" | "devops" | "mobile", string[]>;

function IconForCategory({ category }: { category: keyof Skills }) {
  if (category === "frontend") return <Layout className="w-4 h-4" />;
  if (category === "backend") return <Server className="w-4 h-4" />;
  if (category === "devops") return <Database className="w-4 h-4" />;
  return <Smartphone className="w-4 h-4" />;
}

export default function SkillsGrid({ skills }: { skills: Skills }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-12 border border-slate-800">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h5 className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <IconForCategory category={category as keyof Skills} />
              {category}
            </h5>

            <div className="space-y-4">
              {(items as string[]).map((item) => (
                <div key={item} className="flex justify-between items-center">
                  <span className="text-slate-300">{item}</span>
                  <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-cyan-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
