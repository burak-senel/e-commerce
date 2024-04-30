import React from "react";
import ProductPageSlider from "../../components/ProductPageComponents/ProductPageSlider";

function ProductDetailPage() {
  return (
    <div className="w-full bg-[#FAFAFA] flex-wrap">
      <div className="flex flex-row gap-4 max-w-[1100px] mx-auto py-6 md:justify-center items-center ">
        <span className="font-bold ml-6 md:ml-0">Home</span>
        <i className="fa-solid fa-chevron-right text-mutedgray"></i>
        <span className="font-bold text-mutedgray">Shop</span>
      </div>
      <div className="flex flex-row max-w-[1050px] mx-auto flex-wrap justify-between">
        <div className="flex md:mx-auto">
          <ProductPageSlider />
        </div>
        <div className="flex flex-col flex-wrap w-[510px] h-[470px] justify-around md:w-[350px] md:mx-auto md:items-center md:my-8">
          <h5 className="text-xl font-bold">isim</h5>
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-star text-[#F3CD03] text-xl"></i>
            <i className="fa-solid fa-star text-[#F3CD03] text-xl"></i>
            <i className="fa-solid fa-star text-[#F3CD03] text-xl"></i>
            <i className="fa-solid fa-star text-[#F3CD03] text-xl"></i>
            <i className="fa-regular fa-star text-[#F3CD03] text-xl"></i>

            <div className="flex items-center">
              <span className="text-secondarygray font-bold">10 Reviews</span>
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold">$10,399</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm font-bold text-secondarygray">
              Availability :
            </span>
            <span className="font-bold text-buttonblue text-sm">In Stock</span>
          </div>
          <div className="max-w-[450px]">
            <p className="text-[#858585] text-sm md:text-center">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <hr className="border" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full" />
            <div className="w-6 h-6 bg-teal-700 rounded-full" />
            <div className="w-6 h-6 bg-orange-400 rounded-full" />
            <div className="w-6 h-6 bg-black rounded-full" />{" "}
          </div>
          <div className="flex flex-row items-center gap-4">
            <button className="py-3 px-4 bg-buttonblue rounded-md text-white text-sm font-bold">
              Select Options
            </button>
            <div className="flex flex-row gap-4">
              <i className="fa-regular fa-heart cursor-pointer text-xl border rounded-full p-2"></i>
              <i className="fa-solid fa-cart-shopping text-xl cursor-pointer border rounded-full p-2 "></i>
              <i className="fa-solid fa-eye cursor-pointer text-xl border rounded-full p-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
