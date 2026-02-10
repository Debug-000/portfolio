import React from "react";

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-cyan-600/5 blur-[150px] rounded-full" />
    </div>
  );
}
