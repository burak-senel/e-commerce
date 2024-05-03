import React from "react";
import AboutHero from "../layout/AboutPageLayout/AboutHero";
import AboutMid from "../layout/AboutPageLayout/AboutMid";

function AboutPage() {
  return (
    <div className="max-w-[1100px] mx-auto ">
      <AboutHero />
      <AboutMid />
    </div>
  );
}

export default AboutPage;
