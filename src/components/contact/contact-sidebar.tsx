import React from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export default function ContactSidebar() {
  const { socials } = PORTFOLIO_DATA.profile;

  return (
    <aside className="space-y-7">
      <article className="rounded-[1.75rem] border border-[rgba(120,146,186,0.1)] bg-[rgba(10,17,29,0.14)] p-6 md:p-7">
        <p className="editorial-label">Engagement Fit</p>
        <h3 className="mt-3 text-[1.5rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--text-primary)]">
          Best suited for high-impact product and platform work.
        </h3>
        <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
          <p>1. Product surfaces that need premium frontend execution</p>
          <p>2. Systems that require architecture cleanup and scaling control</p>
          <p>3. Teams that value disciplined delivery over feature churn</p>
        </div>
      </article>

      <article className="rounded-[1.75rem] border border-[rgba(120,146,186,0.1)] bg-[rgba(10,17,29,0.1)] p-6 md:p-7">
        <p className="editorial-label">Direct Channels</p>
        <div className="mt-5 space-y-3 text-sm">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-[1rem] border border-[rgba(120,146,186,0.12)] bg-[rgba(12,20,33,0.18)] px-4 py-3 text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
          >
            <span className="inline-flex items-center gap-2">
              <Github className="h-4 w-4 text-[var(--accent)]" />
              {socials.github.replace("https://", "")}
            </span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-[1rem] border border-[rgba(120,146,186,0.12)] bg-[rgba(12,20,33,0.18)] px-4 py-3 text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
          >
            <span className="inline-flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-[var(--accent)]" />
              {socials.linkedin.replace("https://", "")}
            </span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>

          <a
            href={`mailto:${socials.email}`}
            className="group flex items-center justify-between rounded-[1rem] border border-[rgba(120,146,186,0.12)] bg-[rgba(12,20,33,0.18)] px-4 py-3 text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
          >
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-[var(--accent)]" />
              {socials.email}
            </span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </article>

      <article className="surface-panel rounded-[1.75rem] p-6 md:p-7">
        <p className="editorial-label">Working Notes</p>
        <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
          <p>Timezone overlap: CET with strong US collaboration support.</p>
          <p>
            Prioritize clear scope, measurable outcomes, and realistic delivery
            windows.
          </p>
          <p>
            Selective on engagements where engineering quality is a hard
            requirement.
          </p>
        </div>
      </article>
    </aside>
  );
}
