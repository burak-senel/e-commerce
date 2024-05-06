import React from "react";
import FooterClients from "../../components/FooterClients";
import footerImg from "../../assets/AboutPage/aboutfooter.jpeg";
function AboutBottom() {
  return (
    <>
      <div className="flex flex-col items-center py-20 bg-[#FAFAFA]">
        <p className="font-bold text-textcolor text-5xl mb-4 md:w-80 md:text-center">
          Big Companies Are Here
        </p>
        <p className="text-secondarygray font-medium md:min-w-[328px] md:text-center max-w-[547px] text-center">
          Problems trying to resolve the conflict between
        </p>
        <p className="text-secondarygray font-medium md:min-w-[328px] md:text-center max-w-[547px] text-center">
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <FooterClients />
      <div className="flex w-full md:flex-wrap">
        <div className="flex bg-[#2A7CC7] w-2/3 md:w-full md:items-center md:text-center ">
          <div className="flex flex-col max-w-[438px] font-bold text-2xl text-white justify-center mx-auto gap-8 md:py-16 md:items-center">
            <p className="text-base">WORK WITH US</p>
            <h3 className="text-4xl md:w-60">Now Let's grow Yours</h3>
            <p className="text-base font-normal md:w-[257px]">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <div className="flex md:justify-center">
              <button className="text-base py-5 px-12 rounded-md border border-solid	border-white">
                Button
              </button>
            </div>
          </div>
        </div>

        <div className="flex max-w-[600px] md:hidden">
          <img src={footerImg} className="w-[550px]" />
        </div>
      </div>
    </>
  );
}

export default AboutBottom;
