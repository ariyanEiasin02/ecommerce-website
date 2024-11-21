import React from 'react';
import discountImg from '../../assets/discountImg.png';
import { FaCheck } from 'react-icons/fa';

const DiscountItem = () => {
  return (
    <section className="py-12">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl text-primary font-josefin font-bold mb-3">Discount Item</h2>
        </div>
        <div className="flex justify-center gap-6 flex-wrap my-6">
          <button
            className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline"
            data-filter="all"
          >
            Wood Chair
          </button>
          <button
            className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline"
            data-filter=".beauty"
          >
            Plastic Chair
          </button>
          <button
            className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline"
            data-filter=".furniture, .groceries"
          >
            Sofa Collection
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between lg:flex-row flex-col-reverse lg:gap-0 gap-6">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-josefin font-semibold text-primary text-3xl md:text-4xl">
              20% Discount On All Products
            </h2>
            <h5 className="font-josefin font-semibold text-secondCommon text-xl py-2">
              Eames Sofa Compact
            </h5>
            <p className="font-lato text-[17px] text-[#B7BACB] md:w-[85%] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
            </p>
            <div className="flex flex-wrap justify-between mt-3 gap-y-3">
              {/* Features List */}
              {[
                'Material expose like metals',
                'Clear lines and geometric figures',
                'Simple neutral colours.',
                'Material expose like metals',
              ].map((text, index) => (
                <div className="w-[48%]" key={index}>
                  <div className="flex items-center font-lato text-base text-[#B7BACB]">
                    <FaCheck className="text-secondCommon" />
                    <p className="ml-1">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-secondCommon mt-8 py-3 px-8 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
              Shop Now
            </button>
          </div>
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <img
              src={discountImg}
              alt="Discount"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
