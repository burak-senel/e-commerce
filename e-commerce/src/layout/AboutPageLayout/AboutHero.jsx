import React from "react";
import img from "../../assets/AboutPage/aboutimg.png";
function AboutHero() {
  return (
    <div className="flex flex-row w-full gap-4 justify-between md:w-full md:flex-wrap md:text-center mt-2">
      <div className="flex flex-col font-bold justify-center gap-12 md:w-[342px] md:mx-auto md:items-center">
        <h5 className="text-base text-textcolor md:hidden">ABOUT COMPANY</h5>
        <h3 className="text-6xl text-textcolor md:text-[40px]">ABOUT US</h3>
        <p className="max-w-[376px] text-secondarygray md:w-[225px] md:text-center">
          We know how large objects will act, but things on a small scale
        </p>
        <div className="">
          <button className="flex py-3 px-8 bg-buttonblue rounded-md text-white text-sm">
            Get Quote Now
          </button>
        </div>
      </div>

      <div className="relative md:w-[90%] md:items-center md:mx-auto justify-center flex">
        <img
          src={img}
          alt="contactImg"
          className="md:w-[375px] md:min-h-[440px] min-h-[668px] w-[571px] object-cover z-0 "
        />
        <div className="-z-10 bg-[#FFE9EA] md:w-[48px] md:h-[48px] w-[78px] h-[78px] rounded-full absolute left-0 top-0"></div>
        <div className="-z-10 bg-[#FFE9EA] md:w-[295px] md:h-[295px] w-[480px] h-[480px] rounded-full absolute left-5 top-14"></div>
        <div className="-z-10 bg-[#FFE9EA] md:w-[18px] md:h-[18px] w-[30px] h-[30px] rounded-full absolute right-0 top-36"></div>
      </div>
    </div>
  );
}

export default AboutHero;
