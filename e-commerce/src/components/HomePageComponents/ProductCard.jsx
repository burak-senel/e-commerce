import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ data, index }) {
  return (
    <Link to={"/detail"} className="flex flex-col">
      <img src={data.imageUrl} alt={index} className="object-contain" />
      <div className="flex flex-col gap-4 items-center">
        <h5 className="font-semibold mt-5">{data.title}</h5>

        <span className="text-secondarygray text-sm font-semibold">
          {data.department}
        </span>
        <div className="flex gap-2">
          <span className="text-mutedgray font-semibold">{`${data.price}`}</span>
          <span className="text-productgreen items-center  font-semibold">
            {data.salePrice}
          </span>
        </div>
        <div></div>

        <div className="flex items-center gap-2 mb-5">
          <div className="w-4 h-4 bg-blue-500 rounded-full" />
          <div className="w-4 h-4 bg-productgreen rounded-full" />
          <div className="w-4 h-4 bg-orange-400 rounded-full" />
          <div className="w-4 h-4 bg-black rounded-full" />{" "}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
