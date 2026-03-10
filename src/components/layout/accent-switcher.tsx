"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Palette } from "lucide-react";

type AccentTheme = "blue" | "red" | "purple" | "green" | "orange" | "yellow";

const STORAGE_KEY = "portfolio-accent-theme";

const THEMES: Array<{ id: AccentTheme; label: string; color: string }> = [
  { id: "blue", label: "Blue", color: "#4e8cff" },
  { id: "red", label: "Red", color: "#e45252" },
  { id: "purple", label: "Purple", color: "#975eff" },
  { id: "green", label: "Green", color: "#46bd80" },
  { id: "orange", label: "Orange", color: "#f18937" },
  { id: "yellow", label: "Yellow", color: "#e3c543" },
];

function applyTheme(theme: AccentTheme) {
  document.documentElement.setAttribute("data-accent-theme", theme);
}

export default function AccentSwitcher() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<AccentTheme>(() => {
    if (typeof window === "undefined") return "blue";
    const stored = window.localStorage.getItem(STORAGE_KEY) as AccentTheme | null;
    if (stored && THEMES.some((item) => item.id === stored)) return stored;
    return "blue";
  });

  const selected = useMemo(
    () => THEMES.find((item) => item.id === theme) ?? THEMES[0],
    [theme],
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function onThemeChange(next: AccentTheme) {
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-2 rounded-lg border border-[var(--border-soft)] bg-[rgba(12,20,34,0.9)] px-3 text-xs text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
        aria-haspopup="menu"
        aria-expanded={open}
        title="Switch accent theme"
      >
        <Palette className="h-4 w-4" />
        <span className="hidden md:inline">{selected.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-[60] w-48 rounded-xl border border-[var(--border-soft)] bg-[rgba(8,14,24,0.96)] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
          {THEMES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onThemeChange(item.id)}
              className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-[rgba(255,255,255,0.03)] hover:text-[var(--text-primary)]"
            >
              <span>{item.label}</span>
              <span
                className="h-3.5 w-3.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
