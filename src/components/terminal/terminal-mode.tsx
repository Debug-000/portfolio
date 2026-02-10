"use client";

import React, { useEffect } from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { runTerminalCommand } from "./terminal-commands";
import { useTerminalHistory } from "./use-terminal";

type Props = {
  onExit: () => void;
  initialView?: string;
};

export default function TerminalMode({ onExit, initialView = "/" }: Props) {
  const { history, setHistory, input, setInput, reset, scrollerRef } =
    useTerminalHistory(initialView);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onExit();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onExit]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = runTerminalCommand(input, PORTFOLIO_DATA);

    if (result.kind === "reset") {
      reset();
      setInput("");
      return;
    }
    if (result.kind === "exit") {
      onExit();
      return;
    }

    if (result.lines.length) setHistory((h) => [...h, ...result.lines]);
    setInput("");
  }

  return (
    <div className="fixed inset-0 bg-black z-100 font-mono p-4 md:p-8 flex flex-col">
      <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-white/50 text-xs">soni@terminal — 80x24</span>
        <button
          onClick={onExit}
          className="text-white/50 hover:text-white text-xs"
        >
          CLOSE [ESC]
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="flex-1 overflow-y-auto space-y-2 mb-4 scrollbar-hide"
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={[
              line.type === "user" ? "text-white" : "",
              line.type === "sys" ? "text-cyan-400" : "",
              line.type === "res" ? "text-emerald-400 whitespace-pre-wrap" : "",
              line.type === "error" ? "text-red-400" : "",
            ].join(" ")}
          >
            {line.content}
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <span className="text-emerald-400">soni@portfolio:~$</span>
        <input
          autoFocus
          aria-label="Terminal input"
          className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}
