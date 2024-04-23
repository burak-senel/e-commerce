import React from "react";

function Header() {
  return (
    <div className="max-w-full bg-[#252B42] md:hidden">
      <div className="flex flex-row flex-wrap md:flex-col max-w-[1440px] mx-auto justify-between items-center  min-h-[58px] px-[1.5em]">
        <div className="flex items-center gap-[1.5rem] ">
          <div className="inline-flex  items-center gap-[0.25rem]">
            <i className="fa-solid fa-phone text-white size-4"></i>
            <span className="text-white font-bold	text-sm	">(534) 123-13-32</span>
          </div>
          <div className="inline-flex items-center gap-[0.25rem]">
            <i className="fa-regular fa-envelope text-white size-4"></i>
            <span className="text-white font-bold	text-sm	">
              buurak.senel@gmail.com{" "}
            </span>
          </div>
        </div>
        <div>
          <h6 className="text-white font-bold text-sm">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>
        <div className="flex gap-[0.7rem] items-baseline">
          <span className="text-white text-sm font-bold ">Follow Us :</span>
          <i className="fa-brands fa-instagram text-white size-5"></i>
          <i className="fa-brands fa-youtube text-white size-5"></i>
          <i className="fa-brands fa-facebook text-white size-5"></i>
          <i className="fa-brands fa-twitter text-white size-5"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
