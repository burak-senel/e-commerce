import React from "react";

function FooterClients() {
  return (
    <div className="w-full bg-[#FAFAFA] py-12">
      <div className="text-secondarygray flex flex-row max-w-[1050px] justify-between mx-auto md:flex-wrap md:flex-col md:items-center md:gap-8">
        <span>
          <i className="fa-brands fa-hooli text-7xl"></i>
        </span>
        <span>
          <i className="fa-brands fa-lyft text-7xl"></i>{" "}
        </span>
        <span>
          <i className="fa-brands fa-pied-piper-hat text-7xl"></i>{" "}
        </span>
        <span>
          <i className="fa-brands fa-stripe text-7xl"></i>{" "}
        </span>
        <span>
          <i className="fa-brands fa-aws text-7xl"></i>{" "}
        </span>
        <span>
          {" "}
          <i className="fa-brands fa-reddit-alien text-7xl"></i>
        </span>
      </div>
    </div>
  );
}

export default FooterClients;
