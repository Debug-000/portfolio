"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Terminal } from "lucide-react";
import { useTerminal } from "@/components/terminal/terminal-context";

const AccentSwitcher = dynamic(() => import("./accent-switcher"), {
  ssr: false,
  loading: () => (
    <div className="h-9 w-9 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] md:w-16" />
  ),
});

export default function NavBar() {
  const pathname = usePathname();
  const { openTerminal } = useTerminal();

  const items = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/engineering", label: "Engineering" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(18,18,18,0.62)] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between gap-4 px-5 md:px-7 lg:px-10">
        <Link href="/" className="inline-flex min-w-0 items-center gap-3 text-[var(--text-primary)]">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-sm font-semibold text-[var(--primary)]">
            E
          </span>
          <span className="truncate text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-primary)] md:text-[0.92rem]">
            Elisjon.dev
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "border-b pb-1 transition",
                pathname === item.href
                  ? "border-[var(--primary)] text-[var(--text-primary)]"
                  : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-tertiary)] xl:inline-flex">
            Available for select engagements
          </div>

          <div className="opacity-80 hover:opacity-100">
            <AccentSwitcher />
          </div>

          <button
            onClick={() => openTerminal(pathname)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            title="Switch to Terminal Mode"
          >
            <Terminal className="h-4 w-4" />
          </button>

          <Link href="/contact" className="btn-secondary hidden px-4 py-2.5 text-sm md:inline-flex">
            Book Intro Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
