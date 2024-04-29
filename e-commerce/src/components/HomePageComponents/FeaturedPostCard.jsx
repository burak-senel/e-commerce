import React from "react";
import { Link } from "react-router-dom";

function FeaturedPostCard({ data, index }) {
  return (
    <div className="flex flex-col max-w-[340px] h-[606px] tracking-[0.2px] gap-4 shadow-md">
      <img src={data.imageUrl} className="w-[348px] h-[300px] object-cover" />
      <div className="flex flex-col mx-2 gap-4">
        <div className="flex flex-row gap-4 text-sm ">
          <span className="text-[#8EC2F2]">{data.google}</span> 
          <span className="text-secondarygray">{data.trending}</span>
          <span className="text-secondarygray">{data.new}</span>
        </div>
        <h3 className="text-xl font-bold text-textcolor">{data.title}</h3>
        <p className="text-sm text-secondarygray max-w-[280px]">
          {data.description}
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <i className="fa-sharp fa-regular fa-alarm-clock text-buttonblue"></i>
            <span className="ml-2 text-secondarygray text-sm">{data.date}</span>
          </div>
          <div className="flex flex-row items-center">
            <i className="fa-sharp fa-solid fa-chart-area text-productgreen"></i>
            <span className="ml-2 text-secondarygray text-sm">
              {data.comments}
            </span>
          </div>
        </div>
        <div>
          <Link>
            <div className="flex flex-row items-center">
              <span className="font-bold text-secondarygray text-sm mt-3">
                Learn More
              </span>
              <i className="fa-solid fa-angle-right text-buttonblue ml-2 mt-3"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPostCard;
