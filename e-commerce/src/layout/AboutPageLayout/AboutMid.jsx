import React from "react";
import videoimg from "../../assets/AboutPage/aboutvideo.jpeg";
import { useData } from "../../context/context";
import TeamCard from "../../components/TeamCard";
function AboutMid() {
  const { aboutTeam } = useData();

  return (
    <>
      <div className="flex flex-row md:flex-col md:flex-wrap justify-between mt-4 md:text-center md:items-center md:my-6">
        <div className="flex flex-col py-6 max-w-[394px]">
          <h3 className="text-sm font-medium text-[#E74040] tracking-[0.2px]">
            Problems trying
          </h3>
          <p className="mt-8 text-2xl font-bold text-textcolor md:max-w-80">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div className="flex max-w-[600px] items-center">
          <p className="mt-12 text-sm text-secondarygray md:max-w-80 font-medium">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      {/* Stats section */}
      <div className="flex flex-row tracking-[0.2px] justify-between py-16 md:flex-wrap md:flex-col md:gap-16">
        <div className="flex flex-col items-center">
          <p className="font-bold text-7xl text-textcolor">15K</p>
          <p className="text-primary-gray font-bold">Happy Customers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-7xl text-textcolor">150K</p>
          <p className="text-primary-gray font-bold">Monthly Visitors</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-7xl text-textcolor">15</p>
          <p className="text-primary-gray font-bold">Countries Worldwide</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-7xl text-textcolor">100+</p>
          <p className="text-primary-gray font-bold">Top Partners</p>
        </div>
      </div>
      <div className="flex justify-center py-16 relative items-center">
        <img
          src={videoimg}
          alt="vidImg"
          className="md:w-[322px] md:h-[322px] rounded-3xl h-[540px] w-[1100px]"
        />
        <div className="bg-buttonblue w-24 h-24 rounded-full  absolute"></div>
        <i className="fa-solid fa-play absolute text-3xl text-white"></i>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-textcolor text-5xl mb-4">
          Meet Our Team
        </h3>
        <p className="text-sm text-secondarygray max-w-[469px] mb-1 md:w-60 text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="flex flex-row gap-10 py-20 md:flex-wrap">
          {aboutTeam.members.map((item, index) => (
            <div key={index}>
              <TeamCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutMid;
