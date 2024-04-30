import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ data, index }) {
  return (
    <Link className="relative">
      <img src={data.imageUrl} alt={index} className="object-fill " />
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
        <p className=" font-bold text-white">{data.categoryName}</p>
        <p className="font-medium text-white">{data.items} Items</p>
      </div>
    </Link>
  );
}

export default CategoryCard;
