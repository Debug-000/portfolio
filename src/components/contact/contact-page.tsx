import React from "react";
import { MessageSquare, Clock3, ShieldCheck, Layers } from "lucide-react";
import ContactSidebar from "./contact-sidebar";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="pb-32 pt-10 md:pb-36 md:pt-14">
      <section className="section-shell section-divider pt-24 md:pt-30">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="space-y-6">
            <p className="accent-kicker">
              <span className="accent-dot" /> Contact
            </p>
            <h1 className="section-heading max-w-3xl">
              Start with a real technical brief, not a vague request.
            </h1>
            <p className="section-copy max-w-2xl text-[1.02rem] md:text-[1.08rem]">
              Share the product context, system constraints, and expected
              outcomes. You will receive a focused response with execution
              direction, tradeoffs, and a practical next step.
            </p>
          </div>

          <div className="grid gap-6 border-t border-[rgba(120,146,186,0.12)] pt-8 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: MessageSquare, label: "Response", value: "Structured" },
              { icon: Layers, label: "Scope", value: "Systems + UX" },
              { icon: ShieldCheck, label: "Quality Bar", value: "High" },
              { icon: Clock3, label: "Timezone", value: "EU/US" },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <item.icon className="h-4 w-4 text-[var(--accent)]" />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                  {item.label}
                </p>
                <p className="text-[1.8rem] font-bold tracking-[-0.03em] text-[var(--text-primary)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <ContactSidebar />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
