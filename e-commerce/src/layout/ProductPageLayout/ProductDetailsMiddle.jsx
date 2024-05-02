import React from "react";
import pic from "../../assets/ProductDetails/productCarousel.jpeg";
function ProductDetailsMiddle() {
  return (
    <div className="w-full my-8">
      <div className="flex flex-row max-w-[1100px] mx-auto justify-center gap-4 md:gap-1 text-secondarygray text-sm font-semibold mb-6">
        <p className="md:underline">Description</p>
        <p>Additional Information</p>
        <p>
          Reviews
          <span className="text-productgreen ml-[0.3em]">(0)</span>
        </p>
      </div>
      <hr className="text-secondarygray md:hidden mb-12 md:mb-0 max-w-[1100px] mx-auto" />
      <div className="flex max-w-[1050px] tracking-[0.2px] mx-auto justify-between flex-wrap md:w-[350px] ">
        {/* Resim */}
        <div className="md:mx-auto">
          <img
            src={pic}
            alt=""
            className="object-cover h-[400px] max-w-[340px] md:h-[292px] md:w-[332px] md:rounded-md"
          />
        </div>
        {/* Product Açıklaması */}
        <div className="flex flex-col max-w-[332px] gap-4 md:w-[350px]  md:mx-auto">
          <h3 className="font-bold text-2xl md:mt-12 text-textcolor">
            the quick fox jumps over
          </h3>
          <p className="text-sm text-secondarygray font-medium">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-sm text-secondarygray font-medium">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-sm text-secondarygray font-medium">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:mx-auto md:w-[332px] md:mt-12">
          <div className="flex flex-col gap-4 text-sm ">
            <h3 className="font-bold text-2xl text-textcolor">
              the quick fox jumps over
            </h3>
            <div className="flex items-center">
              <i className="fa-solid fa-chevron-right text-xl text-secondarygray mr-4"></i>
              <span className="font-bold text-secondarygray">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-chevron-right text-xl text-secondarygray mr-4"></i>
              <span className="font-bold text-secondarygray">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-chevron-right text-xl text-secondarygray mr-4"></i>
              <span className="font-bold text-secondarygray">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-chevron-right text-xl text-secondarygray mr-4"></i>

              <span className="font-bold text-secondarygray">
                the quick fox jumps over the lazy dog
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <h3 className="font-bold text-2xl text-textcolor">
              the quick fox jumps over
            </h3>
            <div className="flex items-center">
              <i className="fa-solid fa-chevron-right text-xl text-secondarygray mr-4"></i>
              <span className="font-bold text-secondarygray">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-chevron-right text-xl text-secondarygray mr-4"></i>
              <span className="font-bold text-secondarygray">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-chevron-right text-xl text-secondarygray mr-4"></i>
              <span className="font-bold text-secondarygray">
                the quick fox jumps over the lazy dog
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsMiddle;
