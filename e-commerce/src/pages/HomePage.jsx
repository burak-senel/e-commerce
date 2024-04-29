import React from "react";
import Slider from "../components/HomePageComponents/Slider";
import EditorsPick from "../layout/HomePageLayout/EditorsPick";
import BestSeller from "../layout/HomePageLayout/BestSeller";
import SliderBottom from "../components/HomePageComponents/SliderBottom";
import BottomBlog from "../layout/HomePageLayout/BottomBlog";
import FeaturedPost from "../layout/HomePageLayout/FeaturedPost";

function HomePage() {
  return (
    <>
      <Slider />
      <EditorsPick />
      <BestSeller />
      <SliderBottom />
      <BottomBlog />
      <FeaturedPost />
    </>
  );
}

export default HomePage;
