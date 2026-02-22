"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box } from "lucide-react";

export default function Hero3D() {
  return (
    <div className="relative w-74 h-74 md:w-96 md:h-96 flex items-center justify-center scale-125">
      <motion.div
        animate={{
          rotateY: [0, 10, -10, 0],
          rotateX: [0, -5, 5, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full aspect-square mx-auto"
      >
        {/* Abstract 3D Object (CSS/SVG) */}
        <div className="relative w-full h-full border border-white/20 rounded-3xl backdrop-blur-3xl overflow-hidden shadow-2xl/40">
          <div className="absolute inset-0 flex items-center justify-center">
            <Box className="w-48 h-48 text-blue-500/20 animate-pulse" />
            <div className="absolute w-64 h-64 border-2 border-cyan-500/20 rounded-full animate-spin-slow" />
            <div className="absolute w-48 h-48 border-2 border-blue-500/70 rounded-lg animate-reverse-spin" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 rounded-xl border border-white/10 backdrop-blur-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-zinc-500 tracking-widest uppercase">
                System Status
              </span>
              <span className="flex items-center gap-1 text-[10px] text-green-400 uppercase font-bold">
                <div className="w-1 h-1 bg-green-400 rounded-full animate-ping" />{" "}
                Optimal
              </span>
            </div>
            <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-full bg-linear-to-r from-cyan-300 to-blue-500"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
