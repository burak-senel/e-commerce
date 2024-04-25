import { useData } from "../context/context";
import { Link } from "react-router-dom";
export const Footer = () => {
  const { footerData } = useData();
  return (
    <div className="flex w-full ">
      <div className="flex flex-col max-w-[1050px] w-full mx-auto md:max-w-[340px]">
        <div className="flex flex-row justify-between w-full py-10 md:flex-col gap-6 ">
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

        <div className=" pt-4 pb-12">
          <div className="flex md:flex-wrap mt-8 justify-between">
            {footerData.footerSections.map((item, index) => (
              <div key={index} className="flex flex-col gap-4  md:w-full">
                <h5 className="font-bold md:mt-8">{item.title}</h5>
                <ul>
                  {item.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="text-secondarygray font-semibold my-2"
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
                  className="py-4 max-h-[58px] border border-solid bg-[#F9F9F9] rounded text-primary-gray border-[#E6E6E6] w-full"
                />
                <button
                  type="submit"
                  className="bg-pBlue text-white text-xs font-light max-h-[58px] px-4 py-4 rounded-r-md"
                >
                  {footerData.buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex font-bold text-primary-gray text-sm py-6 md:max-w-42 md:text-center md:mx-auto">
          <h6>{footerData.copyright}</h6>
        </div>
      </div>
    </div>
  );
};
