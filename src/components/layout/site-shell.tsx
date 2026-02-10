"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import BackgroundOrbs from "./background-orbs";
import NavBar from "./nav-bar";
import Footer from "./footer";
import TerminalMode from "@/components/terminal/terminal-mode";
import {
  TerminalProvider,
  useTerminal,
} from "@/components/terminal/terminal-context";

function SiteShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isOpen, initialView, closeTerminal } = useTerminal();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      <BackgroundOrbs />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-100"
          >
            <TerminalMode
              onExit={closeTerminal}
              initialView={initialView || pathname}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <NavBar />

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <TerminalProvider>
      <SiteShellInner>{children}</SiteShellInner>
    </TerminalProvider>
  );
}
