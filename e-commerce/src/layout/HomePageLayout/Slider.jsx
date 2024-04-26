import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/HomeAssets/carouselimg1.jpeg";
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    img1,
    "https://picsum.photos/840/480/",
    "https://picsum.photos/640/400/",
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative ">
      <div className="overflow-hidden max-h-[716px] h-screen ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`object-cover object-top absolute w-full h-full transform transition-all duration-300 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute top-0 left-36 md:left-0 flex max-w-[1044px] max-h-[680px] w-full h-full items-center ">
        <div className="flex flex-col gap-8 md:items-center md:mx-auto">
          <h5 className="font-semibold text-white ">SUMMER 2024</h5>
          <h1 className="flex font-bold text-6xl text-white md:max-w-80 md:text-[40px] md:flex-col md:text-center">
            NEW COLLECTION
          </h1>
          <p className="flex flex-col text-white font-medium max-w-80 md:flex-col md:items-center">
            <span> We know how large objects will act,</span>
            but things on a small scale.
          </p>
          <div className="flex justify-start ">
            <Link
              to="/shop"
              className="text-white font-bold text-xl bg-[#2DC071] p-4 rounded-md"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer md:left-0">
        <button
          className=" top-0 left-0 w-8 h-8 bg-black text-white text-2xl flex justify-center items-center"
          onClick={goToPrevSlide}
        >
          {"<"}
        </button>
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer md:right-0">
        <button
          className=" top-0 right-0 w-8 h-8 bg-black text-white text-2xl flex justify-center items-center"
          onClick={goToNextSlide}
        >
          {">"}
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-20 h-2 mx-1  bg-black ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
