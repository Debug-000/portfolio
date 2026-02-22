import React from "react";
import HeroSection from "./hero-section";
import PillarsSection from "./pillars";
import FeaturedWorkSection from "./featured-work";
import QualityStandardsSection from "./quality-standards";
import SystemSnapshot from "./sys-snap";
import Capabilities from "./capabilities";

export default function HomePage() {
  return (
    <div className="space-y-32 pb-20">
      <HeroSection />
      <PillarsSection />
      <SystemSnapshot />
      <FeaturedWorkSection />
      <Capabilities />
      <QualityStandardsSection />
    </div>
  );
}
