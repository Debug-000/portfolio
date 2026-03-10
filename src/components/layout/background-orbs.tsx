import React from "react";

export default function BackgroundOrbs() {
  return (
    <>
      <div className="site-grid-overlay" />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-36 left-[12%] h-[30rem] w-[30rem] rounded-full blur-[140px]"
          style={{ backgroundColor: "rgba(var(--accent-rgb), 0.05)" }}
        />
        <div
          className="absolute top-[35%] right-[10%] h-[28rem] w-[28rem] rounded-full blur-[140px]"
          style={{ backgroundColor: "rgba(var(--accent-rgb-alt), 0.04)" }}
        />
        <div
          className="absolute -bottom-36 left-[42%] h-[24rem] w-[24rem] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(var(--accent-rgb), 0.03)" }}
        />
      </div>
    </>
  );
}
