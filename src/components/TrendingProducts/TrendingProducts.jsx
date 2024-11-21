import React, { useContext } from 'react';
import img from '../../assets/trending1.png';
import img1 from '../../assets/trending2.png';
import { apiData } from '../ContextApi/ContextApi';

const TrendingProducts = () => {
  const data = useContext(apiData);
  let dataInfo = data.filter((item) => item.id >= 1 && item.id <= 4);
  let dataInfoOffer = data.filter((item) => item.id >= 10 && item.id <= 12);

  return (
    <section className="py-12">
      <div className="max-w-container mx-auto px-4 md:px-0">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl text-primary font-josefin font-bold mb-3">
            Trending Products
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap lg:gap-0 gap-5 justify-center md:justify-between">
          {dataInfo.map((item) => (
            <div key={item.id} className="w-full sm:w-[48%] lg:w-[24%]">
              <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border p-4 group">
                <div className="bg-[#F6F7FB] group-hover:bg-[#F7F7F7] p-4">
                  <img
                    src={item.thumbnail}
                    alt="Product"
                    className="w-full h-auto"
                  />
                </div>
                <div className="py-4 flex justify-center">
                  <div>
                    <h2 className="text-base font-lato font-bold text-primary">
                      {item.title}
                    </h2>
                    <div className="flex items-center justify-center mt-2">
                      <p className="text-[#00009D] font-josefin text-sm font-normal">
                        ${item.price}
                      </p>
                      <p className="text-[#00009D] font-josefin text-xs line-through opacity-30 ml-2 font-normal">
                        ${item.price * 2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <div className="w-full md:w-[48%] lg:w-[32%] py-6 px-4 bg-[#FFF6FB] rounded-lg shadow-md">
            <h2 className="font-josefin font-semibold text-xl md:text-2xl text-primary">
              23% off in all products
            </h2>
            <button className="font-lato font-semibold text-secondCommon underline text-base">
              Shop Now
            </button>
            <div className="flex justify-end items-start mt-4">
              <img src={img} alt="Offer 1"/>
            </div>
          </div>
          <div className="w-full md:w-[48%] lg:w-[32%] py-6 px-4 bg-[#EEEFFB] rounded-lg shadow-md">
            <h2 className="font-josefin font-semibold text-xl md:text-2xl text-primary">
              23% off in all products
            </h2>
            <button className="font-lato font-semibold text-secondCommon underline text-base">
              View Collection
            </button>
            <div className="flex justify-end items-start mt-4">
              <img src={img1} alt="Offer 2" className="" />
            </div>
          </div>
          <div className="w-full lg:w-[32%]">
            {dataInfoOffer.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-x-5 mb-3 bg-white rounded-lg shadow p-3"
              >
                <div className="bg-[#F5F6F8] p-3 rounded">
                  <img
                    className="h-[71px] w-auto"
                    src={item.thumbnail}
                    alt="Offer Item"
                  />
                </div>
                <div>
                  <h3 className="text-base font-lato font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-[#00009D] font-josefin text-xs line-through font-normal">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
