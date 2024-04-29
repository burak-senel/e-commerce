import React from "react";
import FooterClients from "../components/FooterClients";
import { Link } from "react-router-dom";

function ShopPage() {
  return (
    <div className="w-full">
      {/* Sayfanin en üstü */}
      <div className="w-full bg-[#FAFAFA] md:py-8">
        <div className="max-w-[1100px] mx-auto flex justify-between py-4 md:flex-wrap md:flex-col md:gap-8">
          <div className="flex justify-center  md:ml-0">
            <h3 className="font-bold text-textcolor text-2xl">Shop</h3>
          </div>
          <div className="flex justify-center gap-2 items-center  md:mr-0">
            <Link to={"/"} className="font-bold">
              Home
            </Link>
            <i className="fa-solid fa-chevron-right text-mutedgray"></i>{" "}
            <Link className="font-bold text-mutedgray"> Shop</Link>
          </div>
        </div>
      </div>
      <FooterClients />
    </div>
  );
}

export default ShopPage;
