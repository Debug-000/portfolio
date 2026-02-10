export type TerminalLineType = "sys" | "user" | "res" | "error";

export type TerminalLine = {
  type: TerminalLineType;
  content: string;
};

export type TerminalCommandResult =
  | { kind: "append"; lines: TerminalLine[] }
  | { kind: "reset" }
  | { kind: "exit" };
