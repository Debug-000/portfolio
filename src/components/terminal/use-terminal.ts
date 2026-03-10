"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { TerminalLine } from "./types";

export function useTerminalHistory() {
  const initialHistory = useMemo<TerminalLine[]>(() => [], []);

  const [history, setHistory] = useState<TerminalLine[]>(initialHistory);
  const [input, setInput] = useState("");
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight });
  }, [history]);

  const reset = () => setHistory(initialHistory);

  return {
    history,
    setHistory,
    input,
    setInput,
    reset,
    scrollerRef,
  };
}
