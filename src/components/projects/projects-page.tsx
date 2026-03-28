"use client";

import React, { JSX, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Search, BarChart3, Filter } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import ProjectCard from "./project-card";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

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

    return PORTFOLIO_DATA.projects.filter((project) => {
      const matchesFilter =
        filter === "all" ||
        project.stack.some((tech) => norm(tech).includes(filterKey));

      const matchesSearch =
        searchKey.length === 0 ||
        project.title.toLowerCase().includes(searchKey) ||
        project.summary.toLowerCase().includes(searchKey) ||
        (project.category ?? "").toLowerCase().includes(searchKey);

      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="pb-32 pt-10 md:pb-36 md:pt-14">
      <section className="section-shell section-divider pt-24 md:pt-30">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42 }}
          className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end"
        >
          <div className="space-y-6">
            <p className="accent-kicker">
              <span className="accent-dot" /> Projects Archive
            </p>
            <h1 className="section-heading max-w-3xl">
              Case studies that show architecture judgment and execution depth.
            </h1>
            <p className="section-copy max-w-2xl text-[1.02rem] md:text-[1.08rem]">
              Each project is documented as a system-level outcome: constraints,
              design decisions, stack composition, and delivery signals. This is
              not template work. It is production-facing engineering.
            </p>
          </div>

          <div className="grid gap-6 border-t border-[rgba(120,146,186,0.12)] pt-8 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: BriefcaseBusiness,
                label: "Case Studies",
                value: String(PORTFOLIO_DATA.projects.length),
              },
              {
                icon: Filter,
                label: "Focus Tags",
                value: String(TAGS.length - 1),
              },
              {
                icon: BarChart3,
                label: "Proof Driven",
                value: "Yes",
              },
              {
                icon: Search,
                label: "Discoverability",
                value: "High",
              },
            ].map((metric) => (
              <div key={metric.label} className="space-y-2">
                <metric.icon className="h-4 w-4 text-[var(--accent)]" />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                  {metric.label}
                </p>
                <p className="text-[1.8rem] font-bold tracking-[-0.03em] text-[var(--text-primary)]">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-shell section-divider">
        <div className="rounded-[1.75rem] border border-[rgba(120,146,186,0.1)] bg-[rgba(11,18,30,0.16)] p-6 md:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2.5">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setFilter(tag)}
                  aria-pressed={filter === tag}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition",
                    filter === tag
                      ? "border-[var(--border-strong)] bg-[rgba(var(--accent-rgb),0.12)] text-[var(--text-primary)]"
                      : "border-[rgba(120,146,186,0.12)] bg-[rgba(10,17,29,0.16)] text-[var(--text-secondary)] hover:border-[rgba(132,170,236,0.22)] hover:text-[var(--text-primary)]",
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-[24rem]">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-tertiary)]" />
              <input
                type="text"
                placeholder="Search by title, category, or summary"
                className="w-full rounded-[1rem] border border-[rgba(120,146,186,0.14)] bg-[rgba(10,17,29,0.24)] py-3 pl-11 pr-4 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-strong)]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="space-y-10">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={filtered.length}
            />
          ))}

          {filtered.length === 0 && (
            <div className="rounded-[1.75rem] border border-[rgba(120,146,186,0.1)] bg-[rgba(11,18,30,0.16)] p-10 text-center">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                No projects match this filter yet. Try a different tag or wider
                search term.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
