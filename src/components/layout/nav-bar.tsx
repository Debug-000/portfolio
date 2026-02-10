"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal } from "lucide-react";
import { useTerminal } from "@/components/terminal/terminal-context";

export default function NavBar() {
  const pathname = usePathname();
  const { openTerminal } = useTerminal();

  const items = [
    { href: "/", label: "home" },
    { href: "/projects", label: "projects" },
    { href: "/engineering", label: "engineering" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-black text-2xl tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm">
            S
          </div>
          SONI
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={[
                "uppercase tracking-widest transition-colors",
                pathname === i.href
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-white",
              ].join(" ")}
            >
              {i.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => openTerminal(pathname)}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all"
            title="Switch to Terminal Mode"
          >
            <Terminal className="w-5 h-5" />
          </button>

          <Link
            href="/contact"
            className="hidden md:block bg-white text-slate-950 px-5 py-2 rounded-lg font-bold text-sm hover:bg-cyan-400 transition-all"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
