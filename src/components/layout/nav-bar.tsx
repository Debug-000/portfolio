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
    <div className="h-10 w-10 rounded-lg border border-[var(--border-soft)] bg-[rgba(12,20,34,0.9)] md:w-20" />
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
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border-soft)] bg-[rgba(7,13,24,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-[var(--text-primary)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-soft)] bg-[rgba(16,27,44,0.9)] text-sm font-bold text-[var(--accent)]">
            E
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.19em] md:text-base">
            Elisjon.dev
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "border-b pb-1 transition",
                pathname === item.href
                  ? "border-[var(--accent)] text-[var(--text-primary)]"
                  : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <AccentSwitcher />

          <button
            onClick={() => openTerminal(pathname)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-soft)] bg-[rgba(12,20,34,0.9)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            title="Switch to Terminal Mode"
          >
            <Terminal className="h-4 w-4" />
          </button>

          <Link
            href="/contact"
            className="hidden rounded-lg border border-[var(--border-soft)] bg-[rgba(14,24,40,0.88)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--border-strong)] md:inline-flex"
          >
            Book Intro Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
