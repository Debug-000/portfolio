import React from "react";
import type { PillarIconKey } from "./types";
import { Cpu, Layers, ShieldCheck } from "lucide-react";

export function pillarIcon(icon: PillarIconKey): React.ReactNode {
  switch (icon) {
    case "layers":
      return <Layers className="w-6 h-6" />;
    case "cpu":
      return <Cpu className="w-6 h-6" />;
    case "shield":
      return <ShieldCheck className="w-6 h-6" />;
    default:
      return null;
  }
}
