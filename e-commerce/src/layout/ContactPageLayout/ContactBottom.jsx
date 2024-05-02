import React from "react";

function ContactBottom() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-12">
      {/* Info */}
      <div className="flex  flex-col font-bold tracking-[0.2px] items-center gap-6 md:text-center">
        <span className="text-sm text-textcolor">VISIT OUR OFFICE</span>
        <h3 className="text-5xl max-w-[655px] md:max-w-[310px] md:text-4xl text-textcolor text-center">
          We help small businesses with big ideas
        </h3>
      </div>
      {/* Trio Square */}
      <div className="flex flex-row font-bold max-w-[1100px] gap-4 my-8 md:flex-col md:flex-wrap md:justify-center">
        <div className="flex flex-col justify-center items-center gap-4 py-12 px-4 md:w-screen">
          <i className="text-buttonblue fa-solid fa-phone text-7xl"></i>{" "}
          <p className=" text-textcolor">georgia.young@example.com</p>
          <p className=" text-textcolor">georgia.young@ple.com</p>
          <p className=" text-textcolor">Get Support</p>
          <div className="flex">
            <button className="border rounded-[37px] py-3 px-6 border-buttonblue text-buttonblue">
              Submit Request
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 py-16 px-4 bg-[#252B42] md:w-screen">
          <i className="fa-solid fa-location-dot text-buttonblue text-7xl"></i>{" "}
          <p className="text-white">georgia.young@example.com</p>
          <p className="text-white">georgia.young@ple.com</p>
          <p className="text-white">Get Support</p>
          <div className="flex">
            <button className="border rounded-[37px] py-3 px-6 border-buttonblue text-buttonblue">
              Submit Request
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 py-12 px-4 md:w-screen">
          <i className="fa-solid fa-envelope text-buttonblue text-7xl"></i>{" "}
          <p className=" text-textcolor">georgia.young@example.com</p>
          <p className=" text-textcolor">georgia.young@ple.com</p>
          <p className=" text-textcolor">Get Support</p>
          <div className="flex">
            <button className="border rounded-[37px] py-3 px-6 border-buttonblue text-buttonblue">
              Submit Request
            </button>
          </div>
        </div>
      </div>
      {/* Lets Talk */}
      <div className="flex flex-col items-center gap-6 mb-16 mt-8">
        <i className="fa-solid fa-arrow-turn-down text-buttonblue text-5xl"></i>
        <h5 className="font-semibold className=' text-textcolor'">
          WE Can't WAIT TO MEET YOU
        </h5>
        <h3 className="font-bold text-6xl className=' text-textcolor'">
          Let’s Talk
        </h3>
        <div className="flex">
          <button className="border rounded-md py-3 px-6 bg-buttonblue text-white font-medium">
            Try it free now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactBottom;
