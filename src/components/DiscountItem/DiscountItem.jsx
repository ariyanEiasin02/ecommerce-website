import React, { useContext } from 'react';
import discountImg from '../../assets/chair.png';
import discountChair from '../../assets/pastichair.png';
import discountSofa from '../../assets/sofa.png';
import { FaCheck } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from 'react-router-dom';

const DiscountItem = () => {
  return (
    <section className="py-12">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl text-primary font-josefin font-bold mb-3">Discount Item</h2>
        </div>
        <Tabs>
          <TabList>
            <div className="flex justify-center gap-6 flex-wrap my-6">
            <Tab className="text-primary cursor-pointer font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
            Wood Chair
            </Tab>
            <Tab className="text-primary cursor-pointer font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
            Plastic Chair
            </Tab>
            <Tab className="text-primary cursor-pointer font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
            Sofa Collection
            </Tab>
            </div>
          </TabList>
          <TabPanel>
          <div className="mt-16 flex flex-wrap items-center justify-between lg:flex-row flex-col-reverse lg:gap-0 gap-6">
          <div className="w-full lg:w-[48%]">
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
            <Link to="/Home/ShopGrid/">
            <button className="bg-secondCommon mt-8 py-3 px-8 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
              Shop Now
            </button>
            </Link>
          </div>
          
          <div className="w-full lg:w-[48%]">
            <div className="md:w-[450px] w-[300px] md:h-[450px] h-[300px] bg-[#FCECF1] rounded-full">
            <img
              src={discountImg}
              alt="Discount"
              className="w-[690px] h-auto"
            />
            </div>
          </div>
        </div>
          </TabPanel>
          <TabPanel>
          <div className="mt-16 flex flex-wrap items-center justify-between lg:flex-row flex-col-reverse lg:gap-0 gap-6">
          <div className="w-full lg:w-[48%]">
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
            <Link to="/Home/ShopGrid/">
            <button className="bg-secondCommon mt-8 py-3 px-8 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
              Shop Now
            </button>
            </Link>
          </div>
          
          <div className="w-full lg:w-[48%]">
            <div className="md:w-[450px] w-[300px] md:h-[450px] h-[300px] bg-[#FCECF1] rounded-full">
            <img
              src={discountChair}
              alt="discountChair"
              className="md:w-[690px] w-[500px] h-auto"
            />
            </div>
          </div>
        </div>
          </TabPanel>
          <TabPanel>
          <div className="mt-16 flex flex-wrap items-center justify-between lg:flex-row flex-col-reverse lg:gap-0 gap-6">
          <div className="w-full lg:w-[48%]">
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
            <Link to="/Home/ShopGrid/">
            <button className="bg-secondCommon mt-8 py-3 px-8 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
              Shop Now
            </button>
            </Link>
          </div>
          
          <div className="w-full lg:w-[48%]">
            <div className="md:w-[450px] w-[300px] md:h-[450px] h-[300px] bg-[#FCECF1] rounded-full">
            <img
              src={discountSofa}
              alt="discountSofa"
              className="md:w-[690px] w-[500px] h-auto"
            />
            </div>
          </div>
        </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default DiscountItem;
