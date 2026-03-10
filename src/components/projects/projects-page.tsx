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
    <div className="pb-24 pt-28 md:pt-34">
      <section className="section-divider">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42 }}
          className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div>
            <p className="accent-kicker">
              <span className="accent-dot" /> Projects Archive
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-5xl md:leading-[1.08]">
              Case studies that show architecture judgment and execution depth.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
              Each project is documented as a system-level outcome: constraints,
              design decisions, stack composition, and delivery signals. This is
              not template work. It is production-facing engineering.
            </p>
          </div>

          <div className="surface-panel rounded-2xl p-5 md:p-6">
            <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
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
                <article
                  key={metric.label}
                  className="surface-soft rounded-xl p-3"
                >
                  <metric.icon className="h-4 w-4 text-[var(--accent)]" />
                  <p className="mt-2 text-xs text-[var(--text-tertiary)]">
                    {metric.label}
                  </p>
                  <p className="text-lg font-semibold text-[var(--text-primary)]">
                    {metric.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-16 section-divider">
        <div className="surface-panel rounded-2xl p-5 md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2.5">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setFilter(tag)}
                  aria-pressed={filter === tag}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition",
                    filter === tag
                      ? "border-[var(--border-strong)] bg-[var(--accent-tint-strong)] text-[var(--text-primary)]"
                      : "border-[var(--border-soft)] bg-[rgba(12,19,33,0.7)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-84">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-tertiary)]"
              />
              <input
                type="text"
                placeholder="Search by title, category, or summary"
                className="w-full rounded-xl border border-[var(--border-soft)] bg-[rgba(11,18,30,0.82)] py-2.5 pl-10 pr-4 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-strong)]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="space-y-8">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={filtered.length}
            />
          ))}

          {filtered.length === 0 && (
            <div className="surface-panel rounded-2xl p-8 text-center">
              <p className="text-sm text-[var(--text-secondary)]">
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
