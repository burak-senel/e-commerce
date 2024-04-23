import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NavbarTop */}
      <div className="max-w-full bg-[#252B42] md:hidden">
        <div className="flex flex-row flex-wrap md:flex-col max-w-[1440px] mx-auto justify-between items-center  min-h-[58px] px-[1.5em]">
          <div className="flex items-center gap-[1.5rem] ">
            <div className="inline-flex  items-center gap-[0.25rem]">
              <i className="fa-solid fa-phone text-white size-4"></i>
              <span className="text-white font-bold	text-sm	">
                (534) 123-13-32
              </span>
            </div>
            <div className="inline-flex items-center gap-[0.25rem]">
              <i className="fa-regular fa-envelope text-white size-4"></i>
              <span className="text-white font-bold	text-sm	">
                buurak.senel@gmail.com
              </span>
            </div>
          </div>
          <div>
            <h6 className="text-white font-bold text-sm">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>
          <div className="flex gap-[0.7rem] items-baseline">
            <span className="text-white text-sm font-bold ">Follow Us :</span>
            <i className="fa-brands fa-instagram text-white size-5"></i>
            <i className="fa-brands fa-youtube text-white size-5"></i>
            <i className="fa-brands fa-facebook text-white size-5"></i>
            <i className="fa-brands fa-twitter text-white size-5"></i>
          </div>
        </div>
      </div>
      {/* NavbarBottom */}
      <div className="flex justify-between items-center px-[1.5em] max-w-[1440px] mx-auto md:flex-col flex-wrap">
        <nav className="inline-flex items-center gap-[2rem] w-full justify-between md:flex-wrap">
          <div className="flex gap-[2rem]">
            <div className="flex py-4  md:inline-flex">
              <Link to={"/"}>
                <h3 className="text-2xl font-bold">xBoutique</h3>
              </Link>
            </div>

            <div className="flex gap-[1rem] font-bold text-[#737373] text-sm ml-20 md:ml-0 md:flex-col md:w-full md:items-center md:text-xl md:order-last md:mb-12 items-center md:hidden">
              <Link to={"/"}>Home</Link>
              <span>Shop</span>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
              {/* <Link to={"/product"}>Pages</Link> */}
            </div>
          </div>
          {/* Mobil ekran da burger menuye tıklandığın da, headerın açılıp/kapanması.*/}
          {isOpen && (
            <div className="flex gap-[1rem] font-bold text-[#737373] text-sm ml-20 md:ml-0 md:flex-col md:w-full md:items-center md:text-xl md:order-last md:mb-12 items-center">
              <Link to={"/"}>Home</Link>
              <span>SHOP</span>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
              {/* Diğer menü öğeleri burada yer alacak */}
              <div className="flex gap-2 items-center text-[#23A6F0]">
                <div className="flex justify-center items-center gap-2">
                  <i className="fa-regular fa-user"></i>
                  <Link to={"/login"}>
                    <span className="cursor-pointer">Login</span>
                  </Link>
                </div>

                <span>/</span>

                <Link to={"/signup"}>Register</Link>
              </div>
            </div>
          )}
          <div className="inline-flex justify-end items-center text-[#23A6F0] gap-6">
            <div className="flex gap-2 items-center md:hidden">
              <div className="flex justify-center items-center gap-2">
                <i className="fa-regular fa-user"></i>
                <Link to={"/login"}>
                  <span className="cursor-pointer">Login</span>
                </Link>
              </div>

              <span>/</span>

              <Link to={"/signup"}>Register</Link>
            </div>
            <div className="flex gap-4 flex-wrap md:w-full md:text-sBlack items-center">
              <i className="size-5 fa-solid fa-magnifying-glass md:text-[#252B42]"></i>
              <i className="fa-solid fa-cart-shopping md:text-[#252B42]"></i>
              <i className="size-5 md:hidden fa-regular fa-heart"></i>
              <button
                className="flex-col h-10 w-12 rounded justify-center items-center group hidden md:inline-flex"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
