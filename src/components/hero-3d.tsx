"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
      <motion.div
        animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-48 h-48 preserve-3d"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 border-cyan-500/30 rounded-xl bg-cyan-500/5 backdrop-blur-sm"
            style={{ transform: `rotateY(${i * 60}deg) translateZ(100px)` }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-cyan-400 rounded-full blur-xl animate-pulse" />
        </div>
      </motion.div>

      <div className="absolute -z-10 w-full h-full bg-blue-600/10 blur-[100px] rounded-full" />
    </div>
  );
}
