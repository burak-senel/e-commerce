import React from "react";
import { useData } from "../../context/context";
import ProductCard from "../../components/HomePageComponents/ProductCard";

function BestSeller() {
  const { bestSellerData } = useData();

  return (
    <div className="max-w-[1050px] mx-auto">
      <div className="flex flex-col items-center gap-4 my-16">
        <h5 className="text-xl font-medium text-secondarygray">
          Featured Products
        </h5>
        <h3 className="text-2xl font-bold md:max-w-60 md:text-center">
          BEST SELLER PRODUCTS
        </h3>
        <p className="text-sm  text-secondarygray md:max-w-60 md:text-center">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap justify-between mx-2">
        {bestSellerData.products.map((item, index) => (
          <div
            key={index}
            className="flex flex-row max-w-60 md:mx-auto mb-5"
          >
            <ProductCard data={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
