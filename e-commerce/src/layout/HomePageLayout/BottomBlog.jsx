import React from "react";
import img from "../../assets/HomeAssets/bottomblog.png";
function BottomBlog() {
  return (
    <div className="flex max-w-[1440px] mx-auto justify-center gap-12 mt-1 md:flex-wrap md:pt-20 md:font-bold">
      <div className="md:order-2 max-w-[725px]">
        <img src={img} alt="shoppingCardImg " />
      </div>

      <div className="flex flex-col gap-6 justify-center mt-6 max-w-[550px] max-h-[430px] md:order-1 md:text-center md:items-center ">
        <h5 className=" font-semibold text-mutedgray">SUMMER 2024</h5>
        <h3 className="font-bold text-[#252B42] text-5xl tracking-[0.2px] md:max-w-80">
          Part of the Neural Universe
        </h3>
        <p className="text-secondarygray text-xl tracking-[0.2px] max-w-[376px] md:max-w-60">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex items-center gap-4 md:flex-col">
          <button className="py-4 px-8 bg-buttongreen text-white rounded-md font-bold border md:bg-buttonblue">
            BUY NOW
          </button>
          <button className="py-4 px-8 bg-white text-buttongreen rounded-md font-bold border-buttongreen border md:text-buttonblue md:border-buttonblue">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomBlog;
