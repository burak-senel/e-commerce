import React from "react";
import Slider from "../components/HomePageComponents/Slider";
import EditorsPick from "../layout/HomePageLayout/EditorsPick";
import BestSeller from "../layout/HomePageLayout/BestSeller";
import SliderBottom from "../components/HomePageComponents/SliderBottom";

function HomePage() {
  return (
    <>
      <Slider />
      <EditorsPick />
      <BestSeller />
      <SliderBottom />
    </>
  );
}

export default HomePage;
