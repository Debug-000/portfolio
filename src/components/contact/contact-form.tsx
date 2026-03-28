"use client";

import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(
    null,
  );

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((previous) => ({ ...previous, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok) {
        setStatus({ ok: false, msg: data.error || "Request failed." });
        return;
      }

      setStatus({
        ok: true,
        msg: "Message received. I will respond with a structured next step.",
      });
      setForm(initial);
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="surface-elevated rounded-[2rem] p-6 md:p-8">
      <div className="mb-8 space-y-3">
        <p className="editorial-label">Project Intake</p>
        <h2 className="text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] text-[var(--text-primary)] md:text-[2.2rem]">
          Share context with technical precision.
        </h2>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-3 text-sm">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
              Name
            </span>
            <input
              type="text"
              className="w-full rounded-[1rem] border border-[rgba(120,146,186,0.14)] bg-[rgba(10,17,29,0.26)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-strong)]"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              required
              minLength={2}
            />
          </label>

          <label className="space-y-3 text-sm">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
              Email
            </span>
            <input
              type="email"
              className="w-full rounded-[1rem] border border-[rgba(120,146,186,0.14)] bg-[rgba(10,17,29,0.26)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-strong)]"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              required
            />
          </label>
        </div>

        <label className="block space-y-3 text-sm">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
            Subject
          </span>
          <input
            type="text"
            className="w-full rounded-[1rem] border border-[rgba(120,146,186,0.14)] bg-[rgba(10,17,29,0.26)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-strong)]"
            placeholder="Product surface, system area, or delivery challenge"
            value={form.subject}
            onChange={(e) => set("subject", e.target.value)}
            required
            minLength={3}
          />
        </label>

        <label className="block space-y-3 text-sm">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
            Project Context
          </span>
          <textarea
            rows={8}
            className="w-full rounded-[1rem] border border-[rgba(120,146,186,0.14)] bg-[rgba(10,17,29,0.26)] px-4 py-3.5 text-sm leading-7 text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-strong)]"
            placeholder="Include constraints, timeline expectations, and what success looks like."
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            required
            minLength={10}
          />
        </label>

        {status && (
          <div
            className={[
              "rounded-[1rem] border px-4 py-3 text-sm leading-7",
              status.ok
                ? "border-emerald-500/35 bg-emerald-500/10 text-emerald-200"
                : "border-red-500/35 bg-red-500/10 text-red-200",
            ].join(" ")}
          >
            {status.msg}
          </div>
        )}

        <button disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? "Sending Brief..." : "Submit Technical Brief"}
        </button>
      </form>
    </div>
  );
}
