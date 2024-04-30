import React from "react";
import img1 from "../../assets/ProductDetails/productCarousel.jpeg";
function ProductPageSlider() {
  return (
    <div className="w-full">
      <div className="w-[510px] h-[550px] flex flex-col md:flex-wrap gap-4 md:w-[350px] md:h-full">
        {/* img */}
        <div className="relative max-h-[450px] max-w-[510px] md:w-full ">
          <img src={img1} alt="asd" className="object-fill h-full w-full" />
          <div className="absolute top-[50%] left-0 text-4xl font-extralight rounded-full px-4 text-white cursor-pointer ">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="absolute top-[50%] right-0 text-4xl font-extralight  px-4  text-white cursor-pointer ">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <img
            src={img1}
            alt="img1"
            className="max-h-[75px] w-[100px] object-fill cursor-pointer"
          />
          <img
            src={img1}
            alt="img2"
            className="max-h-[75px] w-[100px] object-fill cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPageSlider;
