import React from "react";
import { useData } from "../../context/context";
import TeamCard from "../../components/TeamCard";

function TeamCards() {
  const { aboutTeam } = useData();

  return (
    <div className="flex flex-col items-center gap-10 max-w-[1100px] mx-auto">
      <h3 className="font-bold text-textcolor text-5xl mb-4 py-16 md:py-8 md:max-w-[310px] md:items-center md:text-center">
        Meet Our Team
      </h3>

      <div className="flex flex-row md:flex-wrap gap-10 ">
        {aboutTeam.members.map((item, index) => (
          <div key={index}>
            <TeamCard data={item} />
          </div>
        ))}
      </div>
      <div className="flex flex-row md:flex-wrap gap-10 ">
        {aboutTeam.members.map((item, index) => (
          <div key={index}>
            <TeamCard data={item} />
          </div>
        ))}
      </div>
      <div className="flex flex-row md:flex-wrap gap-10 ">
        {aboutTeam.members.map((item, index) => (
          <div key={index}>
            <TeamCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCards;
