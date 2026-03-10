import React from "react";
import { MessageSquare, Clock3, ShieldCheck, Layers } from "lucide-react";
import ContactSidebar from "./contact-sidebar";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="pb-24 pt-28 md:pt-34">
      <section className="section-divider">
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="accent-kicker">
              <span className="accent-dot" /> Contact
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-5xl md:leading-[1.08]">
              Start with a real technical brief, not a vague request.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
              Share the product context, system constraints, and expected
              outcomes. You will receive a focused response with execution
              direction, tradeoffs, and a practical next step.
            </p>
          </div>

          <div className="surface-panel rounded-2xl p-5 md:p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: MessageSquare, label: "Response", value: "Structured" },
                { icon: Layers, label: "Scope", value: "Systems + UX" },
                { icon: ShieldCheck, label: "Quality Bar", value: "High" },
                { icon: Clock3, label: "Timezone", value: "EU/US" },
              ].map((item) => (
                <article key={item.label} className="surface-soft rounded-xl p-3">
                  <item.icon className="h-4 w-4 text-[var(--accent)]" />
                  <p className="mt-2 text-xs text-[var(--text-tertiary)]">{item.label}</p>
                  <p className="text-base font-semibold text-[var(--text-primary)]">{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactSidebar />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
