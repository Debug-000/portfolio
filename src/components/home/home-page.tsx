import React from "react";
import HeroSection from "./hero-section";
import PillarsSection from "./pillars";
import FeaturedWorkSection from "./featured-work";
import QualityStandardsSection from "./quality-standards";

export default function HomePage() {
  return (
    <div className="space-y-32 pb-20">
      <HeroSection />
      <PillarsSection />
      <FeaturedWorkSection />
      <QualityStandardsSection />
    </div>
  );
}
