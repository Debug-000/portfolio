import React from "react";
import { Briefcase } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import ProjectCard from "./project-card";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 space-y-24">
      <SectionHeader
        title="Engineering Case Studies"
        subtitle="Detailed technical breakdowns of key projects, focusing on problem constraints and architectural solutions."
        icon={<Briefcase className="w-5 h-5" />}
      />

      <div className="space-y-32">
        {PORTFOLIO_DATA.projects.map((proj, i) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            index={i}
            total={PORTFOLIO_DATA.projects.length}
          />
        ))}
      </div>
    </div>
  );
}
