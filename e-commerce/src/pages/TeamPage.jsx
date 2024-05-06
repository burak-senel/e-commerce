import React from "react";
import TeamTop from "../layout/TeamPageLayout/TeamTop";
import TeamCards from "../layout/TeamPageLayout/TeamCards";

function TeamPage() {
  return (
    <div className="w-full mx-auto">
      <TeamTop />
      <TeamCards />
    </div>
  );
}

export default TeamPage;
