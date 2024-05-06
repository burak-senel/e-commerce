function TeamCard({ data }) {
  return (
    <div className="flex flex-col gap-4 tracking-[0.2px] min-h-[315px] ">
      <img src={data.imageURL} />
      <div className="flex flex-col items-center gap-4 font-bold">
        <p className="text-textcolor">{data.name}</p>
        <p className="text-sm text-secondarygray">{data.job}</p>
      </div>
      <div className="flex gap-5 justify-center">
        <a href="https://www.facebook.com/" target="blank">
          <i className="fa-brands fa-facebook text-buttonblue text-xl"></i>{" "}
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <i className="fa-brands fa-instagram text-buttonblue text-xl"></i>{" "}
        </a>
        <a href="https://www.twitter.com/" target="blank">
          <i className="fa-brands fa-twitter text-buttonblue text-xl"></i>{" "}
        </a>
      </div>
    </div>
  );
}
export default TeamCard;
