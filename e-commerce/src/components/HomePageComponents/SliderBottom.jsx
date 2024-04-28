import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/HomeAssets/carouselbottom2.png";
import img1 from "../../assets/HomeAssets/carouselbottom.png";
function SliderBottom() {
  const imgArr = [img1, img2];
  const [imgIndex, setImgIndex] = useState(0);
  const colorArr = ["#23856D", "#96E9FB"];
  const backgroundColor = imgIndex === 0 ? colorArr[0] : colorArr[1];

  const nextSlide = () => {
    const isLastSlide = imgIndex === imgArr.length - 1;
    const newIndex = isLastSlide ? 0 : imgIndex + 1;
    setImgIndex(newIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = imgIndex === 0;
    const newIndex = isFirstSlide ? imgArr.length - 1 : imgIndex - 1;
    setImgIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setImgIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [imgIndex]);
  return (
    <div className="mt-20" style={{ backgroundColor }}>
      <div className="flex flex-row max-w-[1440px] justify-center mx-auto relative  md:flex-col md:flex-wrap md:items-center">
        <div className="flex flex-col gap-6 justify-end max-w-[450px] max-h-[430px] mt-4 md:items-center md:pt-20 ">
          <h5 className="text-xl text-white">SUMMER 2024</h5>
          <h1 className="flex font-bold text-white text-6xl md:text-[40px] md:max-w-60 md:text-center">
            Vita Classic Product
          </h1>
          <p className="text-white text-sm tracking-[0.2px] max-w-[341px] md:max-w-52 md:text-center">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex items-center gap-4 md:flex-col">
            <span className="font-bold text-white text-2xl">$16.48</span>
            <button className="py-4 px-8 bg-buttongreen font-semibold text-white rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex mt-4 h-[685px] max-w-[760px] md:place-self-end	md:mx-auto">
          <img
            src={imgArr[imgIndex]}
            alt="asd"
            className="object-cover max-w-full h-full "
          />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer md:left-0">
          <button
            className=" top-0 left-0 w-8 h-8 bg-black text-white text-2xl flex justify-center items-center"
            onClick={prevSlide}
          >
            {"<"}
          </button>
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer md:right-0">
          <button
            className=" top-0 right-0 w-8 h-8 bg-black text-white text-2xl flex justify-center items-center"
            onClick={nextSlide}
          >
            {">"}
          </button>
        </div>
        <div className="flex gap-1 absolute top-[95%] translate-y-[-150%] mx-auto md:hidden">
          {imgArr.map((img, index) => {
            return (
              <div
                key={index}
                className={
                  imgIndex === index
                    ? "bg-white w-[62px] h-[10px] "
                    : "w-[62px] h-[10px] bg-white opacity-[60%] cursor-pointer"
                }
                onClick={() => goToSlide(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SliderBottom;
