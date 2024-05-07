import React from "react";
import TeamTop from "../layout/TeamPageLayout/TeamTop";
import TeamCards from "../layout/TeamPageLayout/TeamCards";
import FreeTrial from "../components/FreeTrial";

function TeamPage() {
  return (
    <div className="w-full mx-auto">
      <TeamTop />
      <TeamCards />
      <FreeTrial />
    </div>
  );
}

export default TeamPage;
