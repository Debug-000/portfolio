"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { TerminalLine } from "./types";

export function useTerminalHistory(initialView: string) {
  const initialHistory = useMemo<TerminalLine[]>(
    () => [
      { type: "sys", content: "Soni Portfolio OS v2.4.0" },
      { type: "sys", content: `Active route: ${initialView}` },
      { type: "sys", content: 'Type "help" to see available commands.' },
    ],
    [initialView],
  );

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
