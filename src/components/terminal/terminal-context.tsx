"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type TerminalCtx = {
  isOpen: boolean;
  initialView: string;
  openTerminal: (view?: string) => void;
  closeTerminal: () => void;
};

const Ctx = createContext<TerminalCtx | null>(null);

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialView, setInitialView] = useState<string>("/");

  const value = useMemo<TerminalCtx>(
    () => ({
      isOpen,
      initialView,
      openTerminal: (view = "/") => {
        setInitialView(view);
        setIsOpen(true);
      },
      closeTerminal: () => setIsOpen(false),
    }),
    [isOpen, initialView],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTerminal() {
  const ctx = useContext(Ctx);
  if (!ctx)
    throw new Error("useTerminal must be used within <TerminalProvider />");
  return ctx;
}
