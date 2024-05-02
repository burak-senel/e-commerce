import React from "react";
import img from "../assets/HomeAssets/carouselimg1.jpeg";
function ContactPage() {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="w-full h-[450px] md:h-[468px] bg-cover content-center"
    >
      <div className="max-w-[447px] mx-auto flex flex-col text-center items-center">
        <h3 className="text-textcolor font-bold text-4xl">
          Questions & Answers
        </h3>
        <p className="text-textcolor mt-8">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <button className=" text-buttonblue mt-8 font-semibold border rounded-md p-4 max-w-[180px] bg-white">
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default ContactPage;
