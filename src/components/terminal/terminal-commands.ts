import type { PortfolioData } from "@/lib/types";
import type { TerminalCommandResult, TerminalLine } from "./types";

export function runTerminalCommand(
  rawInput: string,
  data: PortfolioData,
): TerminalCommandResult {
  const input = rawInput.trim();
  if (!input) return { kind: "append", lines: [] };

  const [cmdRaw, ...args] = input.split(" ");
  const cmd = cmdRaw.toLowerCase();

  const userLine: TerminalLine = {
    type: "user",
    content: `soni@portfolio:~$ ${input}`,
  };

  const out: TerminalLine[] = [userLine];

  switch (cmd) {
    case "help":
      out.push({
        type: "sys",
        content:
          "Available: about, skills, projects, open <id>, contact, clear, exit",
      });
      return { kind: "append", lines: out };

    case "about":
      out.push({ type: "res", content: data.profile.summary });
      return { kind: "append", lines: out };

    case "projects":
      out.push({
        type: "res",
        content: data.projects.map((p) => `- ${p.id}: ${p.title}`).join("\n"),
      });
      return { kind: "append", lines: out };

    case "open": {
      const id = args[0];
      if (!id) {
        out.push({
          type: "error",
          content: 'Usage: open <id> (try "projects")',
        });
        return { kind: "append", lines: out };
      }
      const proj = data.projects.find((p) => p.id === id);
      if (!proj) {
        out.push({ type: "error", content: `Project "${id}" not found.` });
        return { kind: "append", lines: out };
      }
      out.push({
        type: "res",
        content: `Opening ${proj.title}...\n${proj.description}\nStack: ${proj.stack.join(", ")}`,
      });
      return { kind: "append", lines: out };
    }

    case "skills":
      out.push({
        type: "res",
        content: Object.entries(data.engineering.skills)
          .map(([k, v]) => `${k}: ${(v as string[]).join(", ")}`)
          .join("\n"),
      });
      return { kind: "append", lines: out };

    case "contact":
      out.push({
        type: "res",
        content:
          `Email: ${data.profile.socials.email}\n` +
          `GitHub: ${data.profile.socials.github}\n` +
          `LinkedIn: ${data.profile.socials.linkedin}`,
      });
      return { kind: "append", lines: out };

    case "clear":
      return { kind: "reset" };

    case "exit":
      return { kind: "exit" };

    default:
      out.push({ type: "error", content: `Command not found: ${cmd}` });
      return { kind: "append", lines: out };
  }
}
