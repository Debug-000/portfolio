import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = "" }: Props) {
  return (
    <div
      className={[
        "bg-slate-900/50 border border-slate-800 backdrop-blur-xl rounded-2xl p-6",
        "hover:border-cyan-500/50 transition-colors duration-500",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
