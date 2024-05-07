import { Link } from "react-router-dom";

function TeamCard({ data }) {
  return (
    <Link
      to={"/Team"}
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <div className="flex flex-col gap-4 tracking-[0.2px] min-h-[315px] ">
        <img src={data.imageURL} />
        <div className="flex flex-col items-center gap-4 font-bold">
          <p className="text-textcolor">{data.name}</p>
          <p className="text-sm text-secondarygray">{data.job}</p>
        </div>
        <div className="flex gap-5 justify-center">
          <a href="https://www.facebook.com/" target="blank">
            <i className="fa-brands fa-facebook text-buttonblue md:text-[#335BF5] text-xl"></i>{" "}
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <i className="fa-brands fa-instagram text-buttonblue md:text-[#E51F5A] text-xl"></i>{" "}
          </a>
          <a href="https://www.twitter.com/" target="blank">
            <i className="fa-brands fa-twitter text-buttonblue md:text-[#21A6DF] text-xl"></i>{" "}
          </a>
        </div>
      </div>
    </Link>
  );
}
export default TeamCard;
