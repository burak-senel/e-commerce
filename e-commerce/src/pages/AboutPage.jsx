import React from "react";
import AboutHero from "../layout/AboutPageLayout/AboutHero";
import AboutMid from "../layout/AboutPageLayout/AboutMid";
import AboutBottom from "../layout/AboutPageLayout/AboutBottom";

function AboutPage() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto ">
        <AboutHero />
        <AboutMid />
      </div>
      <AboutBottom />
    </>
  );
}

export default AboutPage;
