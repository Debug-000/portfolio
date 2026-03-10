"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import {
  getAutocompleteSuggestions,
  runTerminalCommand,
} from "./terminal-commands";
import { useTerminalHistory } from "./use-terminal";
import type { TerminalLine } from "./types";

type Props = {
  onExit: () => void;
  initialView?: string;
};

function lineClass(type: TerminalLine["type"]) {
  if (type === "user") return "text-[var(--text-primary)]";
  if (type === "sys") return "text-[#7fb0ff]";
  if (type === "error") return "text-[#ff9f9f]";
  return "text-[#b7f8d8]";
}

function applyCompletion(currentInput: string, suggestion: string) {
  const trimmed = currentInput.trim();
  if (!trimmed) return `${suggestion} `;

  if (!trimmed.includes(" ")) {
    return `${suggestion} `;
  }

  const [command] = trimmed.split(/\s+/, 1);
  return `${command} ${suggestion} `;
}

export default function TerminalMode({ onExit, initialView = "/" }: Props) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { history, setHistory, input, setInput, reset, scrollerRef } =
    useTerminalHistory();

  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [caretPos, setCaretPos] = useState(0);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onExit();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onExit]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function syncCaretFromInput() {
    if (!inputRef.current) return;
    setCaretPos(inputRef.current.selectionStart ?? inputRef.current.value.length);
  }

  function setInputWithCaret(nextValue: string, cursorAtEnd = true) {
    setInput(nextValue);
    requestAnimationFrame(() => {
      if (!inputRef.current) return;
      const position = cursorAtEnd ? nextValue.length : 0;
      inputRef.current.setSelectionRange(position, position);
      setCaretPos(position);
    });
  }

  function appendLines(lines: TerminalLine[]) {
    if (!lines.length) return;
    setHistory((prev) => [...prev, ...lines]);
  }

  function executeCommand(rawCommand: string) {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => {
      if (prev[prev.length - 1] === trimmed) return prev;
      return [...prev.slice(-49), trimmed];
    });
    setHistoryIndex(-1);

    const result = runTerminalCommand(trimmed, PORTFOLIO_DATA);

    if (result.kind === "reset") {
      reset();
      setInputWithCaret("");
      return;
    }

    if (result.kind === "exit") {
      onExit();
      return;
    }

    if (result.kind === "navigate") {
      appendLines(result.lines ?? []);
      setInputWithCaret("");
      setTimeout(() => {
        router.push(result.path);
        onExit();
      }, 180);
      return;
    }

    appendLines(result.lines);
    setInputWithCaret("");
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    executeCommand(input);
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex =
        historyIndex < 0 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputWithCaret(commandHistory[nextIndex]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (commandHistory.length === 0) return;

      if (historyIndex < 0) return;

      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputWithCaret("");
        return;
      }

      setHistoryIndex(nextIndex);
      setInputWithCaret(commandHistory[nextIndex]);
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      const suggestions = getAutocompleteSuggestions(input, PORTFOLIO_DATA);

      if (suggestions.length === 0) return;

      if (suggestions.length === 1) {
        setInputWithCaret(applyCompletion(input, suggestions[0]));
        return;
      }

      appendLines([
        {
          type: "sys",
          content: `Suggestions: ${suggestions.slice(0, 8).join(", ")}`,
        },
      ]);
      return;
    }

    if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      reset();
      setInputWithCaret("");
    }
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[rgba(8,12,24,0.84)] p-3 md:p-6">
      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-xl border border-[var(--border-soft)] bg-[rgba(12,19,33,0.96)] shadow-[0_24px_80px_rgba(0,0,0,0.68)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 22% 0%, rgba(var(--accent-rgb), 0.11), transparent 38%), radial-gradient(circle at 88% 8%, rgba(var(--accent-rgb-alt), 0.08), transparent 40%)",
          }}
        />

        <header className="border-b border-[var(--border-soft)] bg-[rgba(16,24,40,0.95)]">
          <div className="relative flex items-center justify-center px-3 py-2">
            <div className="absolute left-3 flex items-center gap-2">
              <button
                type="button"
                onClick={onExit}
                className="h-3 w-3 rounded-full bg-[#ff5f57]"
                aria-label="Close terminal"
              />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            <div className="text-xs font-semibold tracking-wide text-[var(--text-primary)]">
              Terminal
            </div>
            <span className="sr-only">Route context {initialView}</span>
          </div>

        </header>

        <div className="bg-[rgba(9,15,26,0.96)] px-3 pt-2">
          <div className="pb-1 text-[11px] text-[var(--text-tertiary)]">
            `help` commands | `TAB` autocomplete | `↑/↓` history | `CTRL+L` clear | `ESC` close
          </div>

          <form
            onSubmit={onSubmit}
            className="text-mono flex items-center gap-1.5 text-[20px] leading-[1.4] md:text-[15px]"
          >
            <span className="font-semibold text-[#55d68e]">debug@debug-pc</span>
            <span className="font-semibold text-[#5aa9ff]">:~</span>
            <span className="font-semibold text-[var(--text-primary)]">$</span>
            <div className="relative min-w-0 flex-1">
              <input
                ref={inputRef}
                autoFocus
                aria-label="Terminal input"
                className="absolute inset-0 z-10 w-full bg-transparent text-transparent caret-transparent outline-none"
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                  setCaretPos(event.target.selectionStart ?? event.target.value.length);
                }}
                onClick={syncCaretFromInput}
                onSelect={syncCaretFromInput}
                onKeyUp={syncCaretFromInput}
                onKeyDown={onInputKeyDown}
                spellCheck={false}
                autoComplete="off"
              />
              <div aria-hidden className="text-[var(--text-primary)]">
                <span>{input.slice(0, caretPos)}</span>
                <span className="terminal-cursor-block">
                  {input[caretPos] || "\u00A0"}
                </span>
                <span>{input.slice(caretPos + 1)}</span>
              </div>
            </div>
          </form>
        </div>

        <div
          ref={scrollerRef}
          className="text-mono flex-1 space-y-1 overflow-y-auto bg-[rgba(9,15,26,0.96)] px-3 pb-3 text-[20px] leading-[1.4] md:text-[15px]"
        >
          {history.map((line, index) => (
            <div
              key={`${line.type}-${index}`}
              className={[
                lineClass(line.type),
                line.type === "res" ? "whitespace-pre-wrap" : "",
              ].join(" ")}
            >
              {line.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
