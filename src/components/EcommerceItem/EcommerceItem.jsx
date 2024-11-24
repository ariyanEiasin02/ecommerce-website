import React, { useContext } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { ImZoomIn } from 'react-icons/im';
import { FiShoppingCart } from 'react-icons/fi';
import { apiData } from '../ContextApi/ContextApi';
import ShortItem from '../ShortItem/ShortItem';
const EcommerceItem = () => {
  const data = useContext(apiData)
  const filterData = data.filter((item) => item.id >= 15 && item.id <= 30)
  return (
    <section className="pt-12">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <ShortItem />
        <div className="flex flex-wrap gap-y-8 justify-between mt-12">
          {filterData.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] md:w-[32%] lg:w-[24%] group"
            >
              <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] flex justify-center items-center p-4 relative w-auto h-[270px] overflow-hidden">
                <div>
                  <img src={item.thumbnail} alt={item.title} className="h-[170px] w-auto" />
                  <div className="absolute bottom-6 -left-16 group-hover:left-4 duration-700 ease-in-out">
                    <ul>
                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                        <FiShoppingCart className="text-[#1389FF] hover:text-[#00009D]" />
                      </li>
                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                        <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                      </li>
                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                        <ImZoomIn className="text-[#1389FF] hover:text-[#00009D]" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-center items-center pt-2">
                <h3 className="text-[18px] font-josefin text-primary font-bold py-1">
                  {item.title}
                </h3>
                <div className="flex justify-center gap-2 py-1">
                  <span className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></span>
                  <span className="w-[10px] h-[10px] bg-secondCommon rounded-full"></span>
                  <span className="w-[10px] h-[10px] bg-[#00009D] rounded-full"></span>
                </div>
                <p className="py-1 text-base font-josefin text-primary font-semibold">
                  ${item.price}
                  <span className="text-xs text-[#FB2448] line-through ml-2">${item.price * 2}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EcommerceItem;
