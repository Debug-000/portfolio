import type { PortfolioData } from "@/lib/types";
import type { TerminalCommandResult, TerminalLine } from "./types";

export const TERMINAL_COMMANDS = [
  "help",
  "about",
  "status",
  "projects",
  "open",
  "skills",
  "contact",
  "socials",
  "whoami",
  "goto",
  "clear",
  "exit",
] as const;

const ROUTE_MAP: Record<string, string> = {
  "/": "/",
  home: "/",
  projects: "/projects",
  engineering: "/engineering",
  contact: "/contact",
};

function findProject(data: PortfolioData, idOrAlias: string) {
  const needle = idOrAlias.toLowerCase();
  return data.projects.find((project) => {
    if (project.id.toLowerCase() === needle) return true;
    if (project.aliases?.some((alias) => alias.toLowerCase() === needle)) {
      return true;
    }
    return false;
  });
}

function formatSkills(data: PortfolioData, domain?: string) {
  const normalizedDomain = domain?.toLowerCase();
  const entries = Object.entries(data.engineering.skills);

  if (!normalizedDomain) {
    return entries
      .map(([key, values]) => `${key}: ${(values as string[]).join(", ")}`)
      .join("\n");
  }

  const exact = entries.find(([key]) => key === normalizedDomain);
  if (exact) return `${exact[0]}: ${(exact[1] as string[]).join(", ")}`;

  const partial = entries.find(([key]) => key.includes(normalizedDomain));
  if (partial) {
    return `${partial[0]}: ${(partial[1] as string[]).join(", ")}`;
  }

  return "Unknown skill domain. Try: frontend, backend, devops, mobile";
}

export function getAutocompleteSuggestions(input: string, data: PortfolioData) {
  const trimmed = input.trim();
  if (!trimmed) return [...TERMINAL_COMMANDS];

  const hasSpace = trimmed.includes(" ");
  if (!hasSpace) {
    return TERMINAL_COMMANDS.filter((cmd) => cmd.startsWith(trimmed.toLowerCase()));
  }

  const [cmd, arg = ""] = trimmed.split(/\s+/, 2);
  if (cmd === "open") {
    return data.projects
      .flatMap((project) => [project.id, ...(project.aliases ?? [])])
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .filter((value) => value.toLowerCase().startsWith(arg.toLowerCase()));
  }

  if (cmd === "goto") {
    return Object.keys(ROUTE_MAP).filter((route) =>
      route.startsWith(arg.toLowerCase()),
    );
  }

  if (cmd === "skills") {
    return Object.keys(data.engineering.skills).filter((domain) =>
      domain.startsWith(arg.toLowerCase()),
    );
  }

  return [];
}

export function runTerminalCommand(
  rawInput: string,
  data: PortfolioData,
): TerminalCommandResult {
  const input = rawInput.trim();
  if (!input) return { kind: "append", lines: [] };

  const [cmdRaw, ...args] = input.split(/\s+/);
  const cmd = cmdRaw.toLowerCase();

  const userLine: TerminalLine = {
    type: "user",
    content: `elisjon@portfolio:~$ ${input}`,
  };

  const out: TerminalLine[] = [userLine];

  switch (cmd) {
    case "help":
      out.push({
        type: "sys",
        content:
          "Commands: help, about, status, projects, open <id>, skills [domain], contact, socials, whoami, goto <route>, clear, exit",
      });
      out.push({
        type: "res",
        content:
          "Tips: use TAB for autocomplete, ↑/↓ for command history, and 'projects' before 'open <id>'.",
      });
      return { kind: "append", lines: out };

    case "about":
      out.push({ type: "res", content: data.profile.summary });
      return { kind: "append", lines: out };

    case "status":
      out.push({
        type: "res",
        content:
          "System status: stable\nDelivery mode: selective engagements\nFocus: frontend systems, architecture, shipping discipline",
      });
      return { kind: "append", lines: out };

    case "projects":
      out.push({
        type: "res",
        content: data.projects
          .map((project) => `- ${project.id}: ${project.title}`)
          .join("\n"),
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
      const project = findProject(data, id);
      if (!project) {
        out.push({ type: "error", content: `Project "${id}" not found.` });
        return { kind: "append", lines: out };
      }
      out.push({
        type: "res",
        content:
          `${project.title}\n` +
          `${project.summary}\n` +
          `Stack: ${project.stack.join(", ")}\n` +
          "Navigate to /projects for full case study details.",
      });
      return { kind: "append", lines: out };
    }

    case "skills":
      out.push({ type: "res", content: formatSkills(data, args[0]) });
      return { kind: "append", lines: out };

    case "contact":
    case "socials":
      out.push({
        type: "res",
        content:
          `Email: ${data.profile.socials.email}\n` +
          `GitHub: ${data.profile.socials.github}\n` +
          `LinkedIn: ${data.profile.socials.linkedin}`,
      });
      return { kind: "append", lines: out };

    case "whoami":
      out.push({
        type: "res",
        content: `${data.profile.name} — ${data.profile.title}`,
      });
      return { kind: "append", lines: out };

    case "goto": {
      const destination = args[0]?.toLowerCase();
      if (!destination) {
        out.push({
          type: "error",
          content: "Usage: goto <home|projects|engineering|contact>",
        });
        return { kind: "append", lines: out };
      }

      const path = ROUTE_MAP[destination];
      if (!path) {
        out.push({
          type: "error",
          content: `Unknown route "${destination}". Try: home, projects, engineering, contact`,
        });
        return { kind: "append", lines: out };
      }

      return {
        kind: "navigate",
        path,
        lines: [
          ...out,
          {
            type: "sys",
            content: `Navigating to ${path}...`,
          },
        ],
      };
    }

    case "clear":
      return { kind: "reset" };

    case "exit":
      return { kind: "exit" };

    default: {
      const suggestions = TERMINAL_COMMANDS.filter((value) =>
        value.startsWith(cmd[0] ?? ""),
      )
        .slice(0, 4)
        .join(", ");

      out.push({ type: "error", content: `Command not found: ${cmd}` });
      if (suggestions) {
        out.push({
          type: "sys",
          content: `Try: ${suggestions}`,
        });
      }
      return { kind: "append", lines: out };
    }
  }
}
