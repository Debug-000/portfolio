"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="relative z-10 mt-36 border-t border-[rgba(255,255,255,0.06)] bg-[rgba(18,18,18,0.34)] pt-20 pb-10 backdrop-blur-sm">
      <div className="mx-auto max-w-[88rem] px-5 md:px-7 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.35fr_0.7fr_0.85fr]">
          <div className="space-y-4">
            <p className="editorial-label">Positioning</p>
            <h4 className="max-w-xl text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] text-[var(--text-primary)] text-balance">
              Systems engineering focused on product-grade software delivery.
            </h4>
            <p className="max-w-xl text-sm leading-8 text-[var(--text-secondary)]">
              Frontend quality, architecture clarity, and operational discipline
              are treated as one system. That is the standard behind every
              engagement.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href={profile.socials.github}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="editorial-label">Navigation</h5>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/engineering" className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-[1.8rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] p-6">
            <p className="editorial-label">Operating Status</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--ok)] pulse-fade" />
              Open to selective 2026 engagements
            </div>
            <div className="mt-5 space-y-2 text-sm leading-7 text-[var(--text-secondary)]">
              <p>Focus: Frontend systems, architecture, delivery rigor</p>
              <p>Timezone overlap: EU + US collaboration friendly</p>
              <p>Response channel: contact page or direct email</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[rgba(255,255,255,0.06)] pt-6 text-xs text-[var(--text-tertiary)] md:flex-row md:items-center md:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {profile.name}. Structured execution,
            premium standards.
          </p>
          <p>Built with Next.js, TypeScript, and a systems-first design language.</p>
        </div>
      </div>
    </footer>
  );
}
