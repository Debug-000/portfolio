"use client";
import React, { JSX, useMemo, useState } from "react";
import { Briefcase, Search } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import ProjectCard from "./project-card";

// small className helper (replaces missing `cls`)
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// normalize so filters like "next.js" match "Next.js", "Go (Fiber)", etc.
function norm(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

const TAGS = [
  "all",
  "go",
  "kubernetes",
  "terraform",
  "next.js",
  "flutter",
] as const;
type FilterTag = (typeof TAGS)[number];

export default function ProjectsPage(): JSX.Element {
  const [filter, setFilter] = useState<FilterTag>("all");
  const [search, setSearch] = useState<string>("");

  const filtered = useMemo(() => {
    const filterKey = norm(filter);
    const searchKey = search.trim().toLowerCase();

    return PORTFOLIO_DATA.projects.filter((p) => {
      const matchesFilter =
        filter === "all" ||
        p.stack.some((tech) => norm(tech).includes(filterKey));

      const matchesSearch =
        searchKey.length === 0 ||
        p.title.toLowerCase().includes(searchKey) ||
        p.summary.toLowerCase().includes(searchKey);

      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="pt-32 pb-20 space-y-24">
      <SectionHeader
        title="Engineering Case Studies"
        subtitle="Detailed technical breakdowns of key projects, focusing on problem constraints and architectural solutions."
        icon={<Briefcase className="w-5 h-5" />}
      />

      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between border-b border-white/10 pb-12">
        <div className="flex flex-wrap gap-3">
          {TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setFilter(tag)}
              aria-pressed={filter === tag}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all",
                filter === tag
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800",
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600"
            size={16}
          />
          <input
            type="text"
            placeholder="Filter by name/tech..."
            className="w-full bg-zinc-950 border border-white/10 rounded-md py-2 pl-10 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-32">
        {filtered.map((proj, i) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            index={i}
            total={filtered.length}
          />
        ))}
      </div>
    </div>
  );
}
