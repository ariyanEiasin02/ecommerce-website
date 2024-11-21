import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiShoppingCart } from "react-icons/fi";
import { ImZoomIn } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { apiData } from "../ContextApi/ContextApi";

const ProductCart = () => {
  let data = useContext(apiData)
  
  const PreviousArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute -bottom-10 left-[35%] md:left-[43%] py-3 px-3 sm:py-4 sm:px-4 rounded-md bg-secondCommon font-poppins font-bold text-lg sm:text-2xl text-white"
      >
        <IoIosArrowBack />
      </button>
    );
  };
  
  const NextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute -bottom-10 right-[35%] md:right-[43%] py-3 px-3 sm:py-4 sm:px-4 rounded-md bg-secondCommon font-poppins font-bold text-lg sm:text-2xl text-white"
      >
        <IoIosArrowForward />
      </button>
    );
  };
  
  
  const settings = {
    dots: false, 
    infinite: true, 
    autoplay: true, 
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 overflow-x-hidden">
      <div className="max-w-container mx-auto">
        <h1 className="text-4xl text-primary font-josefin font-bold text-center mb-3">Featured Products</h1>
        <Slider {...settings}>
          {data.map((product) => (
            <div key={product.id} className="lg:px-0 px-4 w-fill lg:!w-[95%] mt-5 overflow-x-hidden lg:shadow-xl !bg-white">
              <div className="border rounded-lg shadow-md flex flex-col group overflow-hidden">
                <div className="bg-[#F6F7FB] group-hover:bg-[#F7F7F7] py-12 px-4 relative overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-[180px] w-auto mx-auto"
                  />
                  <div className="absolute top-2 -left-32 group-hover:left-2 duration-700 ease-in-out flex gap-2">
                    <div className="w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                      <FiShoppingCart className="text-[#1389FF] hover:text-[#00009D]" />
                    </div>
                    <div className="w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                      <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                    </div>
                    <div className="w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                      <ImZoomIn className="text-[#1389FF] hover:text-[#00009D]" />
                    </div>
                  </div>
                  <div className="flex justify-center absolute -bottom-16 left-1/2 -translate-x-1/2 group-hover:bottom-2 duration-700 ease-in-out">
                  <button className="bg-[#08D15F] rounded-md py-3 px-6 font-josefin text-white font-bold text-xs">
                  View Details
                  </button>
                  </div>
                </div>
                <div className="bg-white group-hover:bg-[#00009D] text-center py-4">
                  <h3 className="text-lg font-lato font-bold text-secondCommon group-hover:text-white mt-4">
                    {product.title}
                  </h3>
                  <div className="flex justify-center gap-2 py-2">
                    <span className="w-4 h-1 bg-[#05E6B7] rounded-xl"></span>
                    <span className="w-4 h-1 bg-secondCommon rounded-xl"></span>
                    <span className="w-4 h-1 bg-[#00009D] group-hover:bg-[#FFEAC1] rounded-xl"></span>
                  </div>
                  <p className="py-1 text-[#00009D] font-josefin text-sm group-hover:text-white">
                    Code - {product.sku}
                  </p>
                  <p className="text-[#00009D] font-josefin text-sm group-hover:text-white">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductCart;
