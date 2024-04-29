import React from "react";
import FooterClients from "../components/FooterClients";
import { Link } from "react-router-dom";
import { useData } from "../context/context";
import ProductCard from "../components/HomePageComponents/ProductCard";
import CategoryCard from "../components/CategoryCard";

function ShopPage() {
  const { bestSellerData, CategoryCardData } = useData();

  return (
    <div className=" bg-[#FAFAFA] md:py-8">
      <div className="max-w-[1100px] mx-auto ">
        <div className="flex justify-between py-4 md:flex-col md:gap-8">
          <div className="flex justify-center ">
            <h3 className="font-bold text-textcolor text-2xl">Shop</h3>
          </div>
          <div className="flex justify-center gap-2 items-center ">
            <Link to={"/"} className="font-bold text-textcolor">
              Home
            </Link>
            <i className="fa-solid fa-chevron-right text-mutedgray"></i>{" "}
            <Link className="font-bold text-mutedgray"> Shop</Link>
          </div>
        </div>

        {/*CategoryCard*/}
        <div className="md:flex-col md:gap-4 flex flex-wrap justify-between mb-10">
          {CategoryCardData.map((item, index) => (
            <div key={index} className="flex md:mx-auto ">
              <CategoryCard data={item} key={index} />
            </div>
          ))}
        </div>

        {/*ProductCard*/}
        <div className="flex flex-wrap justify-between ">
          {bestSellerData.products.map((item, index) => (
            <div
              key={index}
              className="flex flex-row max-w-60 md:mx-auto mb-10"
            >
              <ProductCard data={item} key={index} />
            </div>
          ))}
        </div>
        <FooterClients />
      </div>
    </div>
  );
}

export default ShopPage;
