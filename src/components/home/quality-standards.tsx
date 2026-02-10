"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

export default function QualityStandardsSection() {
  return (
    <section className="bg-blue-600/5 -mx-4 md:-mx-20 px-4 md:px-20 py-24 border-y border-slate-800">
      <SectionHeader
        title="Quality Standards"
        subtitle="Verification of engineering excellence across critical performance and security metrics."
        icon={<ShieldCheck className="w-5 h-5" />}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Performance", val: "99/100", desc: "Core Web Vitals" },
          { label: "Security", val: "A+", desc: "SSL/Headers Audit" },
          { label: "Accessibility", val: "WCAG", desc: "AA/AAA Compliance" },
          { label: "SEO", val: "Perfect", desc: "Semantic/JSON-LD" },
        ].map((m, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-black text-white mb-2">{m.val}</div>
            <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
              {m.label}
            </div>
            <div className="text-slate-500 text-sm">{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
