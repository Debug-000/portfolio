"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  eyebrow?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  icon,
  eyebrow = "Discovery",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-4 text-cyan-400">
        {icon}
        <span className="uppercase tracking-widest text-sm font-bold">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-slate-400 max-w-2xl text-lg">{subtitle}</p>
    </motion.div>
  );
}
