"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="relative z-10 mt-24 border-t border-[var(--border-soft)] bg-[rgba(7,12,21,0.9)] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
              Positioning
            </p>
            <h4 className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
              Systems engineer focused on product-grade software delivery.
            </h4>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
              Frontend quality, architecture clarity, and operational discipline
              are treated as one system. That is the standard behind every
              engagement.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={profile.socials.github}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-soft)] bg-[rgba(13,21,35,0.85)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-soft)] bg-[rgba(13,21,35,0.85)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-soft)] bg-[rgba(13,21,35,0.85)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
              Navigation
            </h5>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering"
                  className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                >
                  Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="surface-soft rounded-xl p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
              Operating Status
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--ok)] pulse-fade" />
              Open to selective 2026 engagements
            </div>
            <div className="mt-4 space-y-2 text-xs text-[var(--text-secondary)]">
              <p>Focus: Frontend systems, architecture, delivery rigor</p>
              <p>Timezone overlap: EU + US collaboration friendly</p>
              <p>Response channel: contact page or direct email</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border-soft)] pt-6 text-xs text-[var(--text-tertiary)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Structured execution,
            premium standards.
          </p>
          <p className="text-[var(--text-tertiary)]">
            Built with Next.js, TypeScript, and a systems-first design language.
          </p>
        </div>
      </div>
    </footer>
  );
}
