import React from "react";
import Slider from "../layout/HomePageLayout/Slider";
import EditorsPick from "../layout/HomePageLayout/EditorsPick";
import BestSeller from "../layout/HomePageLayout/BestSeller";

function HomePage() {
  return (
    <>
      <Slider />
      <EditorsPick />
      <BestSeller />
    </>
  );
}

export default HomePage;
