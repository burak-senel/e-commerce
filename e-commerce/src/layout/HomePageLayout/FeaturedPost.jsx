import React from "react";
import { useData } from "../../context/context";
import FeaturedPostCard from "../../components/HomePageComponents/FeaturedPostCard";

function FeaturedPost() {
  const { featuredPostCardData } = useData();
  return (
    <div className="max-w-[1050px] mx-auto tracking-[0.2px] ">
      <div className="flex flex-col items-center gap-4 my-16 md:max-w-80 md:mx-auto md:text-center">
        <h5 className="text-buttonblue text-sm font-bold">Practive Advice</h5>
        <h2 className="text-5xl font-bold text-textcolor">Featured Posts</h2>
        <p className="text-sm text-secondarygray max-w-[469px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex flex-row justify-between flex-wrap gap-row gap-y-4">
        {featuredPostCardData.posts.map((item, index) => (
          <div key={item.id} className="flex mx-auto">
            <FeaturedPostCard data={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedPost;
