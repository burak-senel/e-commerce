import { useData } from "../context/context";
import { Link } from "react-router-dom";
export const Footer = () => {
  const { footerData } = useData();
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="max-w-[1050px] mx-auto md:max-w-[340px] flex flex-row justify-between w-full py-10 md:flex-col gap-6 ">
          <div>
            <h3 className="font-bold text-2xl	">{footerData.brandName}</h3>
          </div>
          <div className="flex gap-5 justify-center items-center md:justify-start">
            <a href="https://www.facebook.com/" target="blank">
              <i className="fa-brands fa-facebook text-pBlue"></i>
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <i className="fa-brands fa-instagram text-pBlue"></i>
            </a>
            <a href="https://www.twitter.com/" target="blank">
              <i className="fa-brands fa-twitter text-pBlue"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1050px] mx-auto md:max-w-[340px] pt-4 pb-12">
        <div className="flex md:flex-wrap mt-8 justify-between">
          {footerData.footerSections.map((item, index) => (
            <div key={index} className="flex flex-col gap-4  md:w-full">
              <h5 className="font-bold md:mt-8">{item.title}</h5>
              <ul>
                {item.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="text-secondarygray font-semibold my-4"
                  >
                    <Link to={"/"}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4 md:w-full ">
            <h5 className="font-bold md:mt-8">{footerData.inputTitle}</h5>
            <form className="flex ">
              <input
                type="email"
                placeholder="  Your Email"
                className="py-4 max-h-[58px] border border-solid bg-[#F9F9F9] rounded-l-md text-secondarygray border-[#E6E6E6] w-full"
              />
              <button
                type="submit"
                className="bg-[#23A6F0] text-white text-xs font-light max-h-[58px] px-6 py-4 rounded-r-md"
              >
                {footerData.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="max-w-[1050px] mx-auto md:max-w-[340px] flex font-bold text-secondarygray text-sm py-6 md:max-w-42 md:text-center md:mx-auto">
          <h6>{footerData.copyright}</h6>
        </div>
      </div>
    </>
  );
};
