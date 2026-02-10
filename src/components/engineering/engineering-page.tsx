import React from "react";
import { Cpu } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import PhilosophyGrid from "./philosophy";
import SkillsGrid from "./skills-grid";
import CiPipeline from "./ci-pipeline";

export default function EngineeringPage() {
  return (
    <div className="pt-32 pb-20 space-y-20">
      <SectionHeader
        title="Systems Engineering"
        subtitle="My technical stack is built on the foundation of stability, observability, and clean interface design."
        icon={<Cpu className="w-5 h-5" />}
      />

      <PhilosophyGrid items={PORTFOLIO_DATA.engineering.philosophy} />

      <SkillsGrid skills={PORTFOLIO_DATA.engineering.skills} />

      <CiPipeline />
    </div>
  );
}
