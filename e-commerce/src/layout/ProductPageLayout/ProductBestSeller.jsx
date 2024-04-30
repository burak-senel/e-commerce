import React from "react";
import { useData } from "../../context/context";
import ProductCard from "../../components/HomePageComponents/ProductCard";

function ProductBestSeller() {
  const { bestSellerData } = useData();

  return (
    <div className="w-full bg-[#FAFAFA] p-1">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:items-center gap-4 my-16">
          <h3 className="text-2xl font-bold md:">BESTSELLER PRODUCTS</h3>
          <hr className="text-secondarygray mt-8"></hr>
        </div>
        <div className="flex flex-wrap justify-between mx-2">
          {bestSellerData.products.map((item, index) => (
            <div
              key={index}
              className="flex flex-row max-w-60 md:mx-auto bg-white mb-8"
            >
              <ProductCard data={item} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductBestSeller;
