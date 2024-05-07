import React from "react";

function FreeTrial() {
  return (
    <div className="flex flex-col items-center gap-8 my-20 ">
      <h2 className="font-bold text-textcolor max-w-[607px] text-4xl md:max-w-[330px] md:text-center">
        Start your 14 days free trial
      </h2>
      <span className="flex flex-col font-medium max-w-[420px] text-sm text-secondarygray md:max-w-[350px] text-center">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </span>
      <div>
        <button className="bg-buttonblue text-sm font-bold text-white py-3 px-6 rounded-md ">
          Try it free now
        </button>
      </div>
      <div className="flex gap-6 justify-center items-center">
        <a href="https://www.facebook.com/" target="blank">
          <i className="fa-brands fa-facebook text-[#395185] text-xl"></i>
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <i className="fa-brands fa-instagram text-black text-xl"></i>
        </a>
        <a href="https://www.twitter.com/" target="blank">
          <i className="fa-brands fa-twitter text-[#55ACEE] text-xl"></i>
        </a>
        <a href="https://www.linkedin.com/">
          <i className="fa-brands fa-linkedin text-[#0A66C2] text-xl"></i>
        </a>
      </div>
    </div>
  );
}

export default FreeTrial;
