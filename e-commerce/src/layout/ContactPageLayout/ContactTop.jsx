import React from "react";
import img from "../../assets/ContactPage/contactimg.png";
function ContactTop() {
  return (
    <div className="flex flex-row  gap-4 justify-between md:flex-wrap md:text-center max-w-[1100px] mx-auto ">
      {/* Sol Div */}
      <div className="flex flex-col font-bold justify-center gap-8 md:w-[342px] mx-auto md:items-center">
        <h5 className="text-base text-textcolor">CONTACT US</h5>
        <h3 className="text-6xl text-textcolor md:text-4xl">
          Get in touch today!
        </h3>
        <p className="max-w-[376px] font-medium text-secondarygray md:w-60">
          We know how large objects will act, but things on a small scale
        </p>
        <div className="flex flex-col gap-6">
          <span>Phone ; +451 215 215 </span>
          <span>Fax : +451 215 215</span>
        </div>
        <div className="flex gap-6 ">
          <a href="https://www.facebook.com/" target="blank">
            <i className="fa-brands fa-facebook text-textcolor"></i>
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <i className="fa-brands fa-instagram text-textcolor"></i>
          </a>
          <a href="https://www.twitter.com/" target="blank">
            <i className="fa-brands fa-twitter text-textcolor"></i>
          </a>
          <a href="https://www.linkedin.com/">
            <i className="fa-brands fa-linkedin text-textcolor"></i>
          </a>
        </div>
      </div>
      {/* Sag Div */}
      <div className="relative md:w-[90%] md:items-center md:mx-auto justify-center flex">
        <img
          src={img}
          alt="contactImg"
          className="md:w-[375px] md:min-h-[440px] min-h-[826px] w-[571px] object-cover z-0 "
        />
        <div className="-z-10 bg-[#FFE9EA] w-[78px] h-[78px] rounded-full absolute left-0 top-0"></div>
        <div className="-z-10 bg-[#FFE9EA] md:w-[295px] md:h-[295px] w-[480px] h-[480px] rounded-full absolute left-5 top-14"></div>
        <div className="-z-10 bg-[#FFE9EA] w-[30px] h-[30px] rounded-full absolute right-0 top-36"></div>
      </div>
    </div>
  );
}

export default ContactTop;
