import React from "react";

export default function BackgroundOrbs() {
  return (
    <>
      <div className="site-grid-overlay" />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute -top-28 left-[12%] h-[22rem] w-[22rem] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(var(--accent-rgb), 0.035)" }}
        />
        <div
          className="absolute top-[28%] right-[8%] h-[20rem] w-[20rem] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(var(--accent-rgb-alt), 0.03)" }}
        />
        <div
          className="absolute bottom-[-8rem] left-[42%] h-[16rem] w-[16rem] rounded-full blur-[110px]"
          style={{ backgroundColor: "rgba(var(--accent-rgb), 0.025)" }}
        />
      </div>
    </>
  );
}
