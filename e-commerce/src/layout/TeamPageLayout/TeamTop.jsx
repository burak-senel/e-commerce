import React from "react";
import img1 from "../../assets/TeamPage/team1.jpeg";
import img2 from "../../assets/TeamPage/team2.jpeg";
import img3 from "../../assets/TeamPage/team3.jpeg";
import img4 from "../../assets/TeamPage/team4.jpeg";
import img5 from "../../assets/TeamPage/team5.jpeg";
function TeamTop() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center font-bold gap-6 my-16 md:text-center">
        <h5 className="text-primary-gray text-base">WHAT WE DO</h5>
        <h3 className="text-sBlack text-6xl tracking-[0.2px] md:text-4xl md:max-w-80">
          Innovation tailored for you
        </h3>
        <div className="flex flex-row font-bold gap-3 items-center">
          <span className="text-sBlack text-sm">Home</span>
          <span className="text-mute-color text-2xl font-normal">{">"}</span>
          <span className="text-mute-color text-sm">Team</span>
        </div>
      </div>
      {/* Pictures */}
      <div className="flex justify-between md:flex-wrap md:w-full">
        {/* Left Pic */}
        <div className="flex max-w-[700px] max-h-[530px] md:w-full md:min-h-[500px]">
          <img
            src={img1}
            alt="hero1-img"
            className="object-cover md:w-full md:min-h-[500px]"
          />
        </div>
        {/* Right Pics*/}
        <div className="flex flex-col w-1/2 justify-between md:w-full md:mt-4 md:gap-2">
          <div className="flex flex-row md:w-full justify-between ">
            <img
              src={img2}
              alt="hero2-img"
              className="scale-x-[-1] w-[360px] h-[260px] md:w-[49%] md:min-h-[250px] object-cover "
            />
            <img
              src={img3}
              alt="hero3-img"
              className="w-[360px] h-[260px] md:w-[49%] md:min-h-[250px] object-cover"
            />
          </div>
          <div className="flex flex-row md:w-full justify-between ">
            <img
              src={img4}
              alt="hero4-img"
              className="w-[360px] h-[260px] md:w-[49%] md:min-h-[250px] object-cover"
            />
            <img
              src={img5}
              alt="hero5-img"
              className="w-[360px] h-[260px] md:w-[49%] md:min-h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamTop;
