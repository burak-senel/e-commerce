import React, { useState } from "react";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://picsum.photos/840/480/",
    "https://picsum.photos/640/400/",
    "https://picsum.photos/640/300/",
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
            className={`object-cover absolute top-0 left-0 w-full h-full transform transition-all duration-300 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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
            className={`w-4 h-4 mx-1 rounded-full bg-black ${
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
