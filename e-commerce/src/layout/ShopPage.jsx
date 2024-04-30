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
        {/* FilterSection*/}
        <div className="flex justify-between py-3 max-w-[1100px] mx-auto mb-8 flex-wrap md:flex-col md:items-center md:gap-8 md:mb-16">
          <span className="flex font-bold text-secondarygray text-sm items-center">
            Showing all results
          </span>
          <div className="flex justify-center items-center gap-4">
            <span className="text-secondarygray font-bold text-sm">Views:</span>
            <i className="fa-solid fa-grip text-xl"></i>{" "}
            <i className="fa-solid fa-list text-secondarygray"></i>
          </div>
          <div className="flex flex-row max-w-[1440px] gap-4 md:flex-wrap  md:justify-around">
            <select className="flex py-3  bg-[#F9F9F9] px-4 border-[#DDDDDD] border rounded  text-secondarygray text-sm">
              <option value={""} disabled selected>
                Popularity
              </option>
              <option value="price:asc">Price:Asc</option>
              <option value="price:desc">Price:Desc</option>
            </select>

            <button className="flex items-center bg-buttonblue px-6 rounded text-sm text-white font-bold">
              Filter
            </button>
          </div>
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
        {/*PaginationSection */}
        <div className="flex justify-center py-4">
          <span className="border-mutedgray border rounded-l-lg p-3 text-mutedgray bg-[#F3F3F3] font-medium">
            First
          </span>
          <span className="border-mutedgray border p-3 text-buttonblue font-medium">
            1
          </span>
          <span className="border-mutedgray border p-3 bg-buttonblue text-white font-medium">
            2
          </span>
          <span className="border-mutedgray border p-3 text-buttonblue font-medium">
            3
          </span>
          <span className="border border-mutedgray rounded-r-lg p-3 font-medium text-buttonblue">
            Next
          </span>
        </div>
        <FooterClients />
      </div>
    </div>
  );
}

export default ShopPage;
