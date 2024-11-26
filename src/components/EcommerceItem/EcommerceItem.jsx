import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaRegHeart } from "react-icons/fa";
import { ImZoomIn } from "react-icons/im";
import { FiShoppingCart } from "react-icons/fi";
import { apiData } from "../ContextApi/ContextApi";
import ShortItem from "../ShortItem/ShortItem";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const EcommerceItem = () => {
  const data = useContext(apiData);
  const [category, setCategory] = useState([]);
  const [categoryShow, setCategoryShow] = useState(false);
  const [brandShow, setBrandShow] = useState(false);
  const [priceShow, setPriceShow] = useState(false);
  const [categoryItemShow, setCategoryItemShow] = useState([]);
  const [price, setPrice] = useState([]);
  const [brand, setBrand] = useState([]);
  const [brandItemShow, setBrandItemShow] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
    setBrand([...new Set(data.map((item) => item.brand))]);
    setPrice([...new Set(data.map((item) => item.price))]);
    updateCurrentItems(data, currentPage);
  }, [data, currentPage]);

  const updateCurrentItems = (dataArray, page) => {
    const offset = page * itemsPerPage;
    setCurrentItems(dataArray.slice(offset, offset + itemsPerPage));
  };

  const handleCategory = (items) => {
    const filteredData = data.filter((item) => item.category === items);
    setCategoryItemShow(filteredData);
    setCurrentPage(0);
    updateCurrentItems(filteredData, 0);
  };

  const handleBrand = (items) => {
    const filteredBrand = data.filter((item) => item.brand === items);
    setBrandItemShow(filteredBrand);
    setCurrentPage(0);
    updateCurrentItems(filteredBrand, 0);
  };
  const handlePrice = (items) => {
    const filteredPrice = data.filter((item) => item.price === items);
    setBrandItemShow(filteredPrice);
    setCurrentPage(0);
    updateCurrentItems(filteredPrice, 0);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const displayedItems =
    categoryItemShow.length > 0 ? categoryItemShow : currentItems;

  return (
    <section className="pt-12">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <ShortItem />
        <div className="flex flex-wrap gap-y-8 justify-between mt-12">
          <div className="w-full lg:w-[23%]">
            <div className="w-full">
              <div
                onClick={() => setCategoryShow(!categoryShow)}
                className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-100 cursor-pointer"
              >
                <h2 className="text-xl font-semibold font-josefin text-primary">
                  Shop by Category
                </h2>
                <p className="text-2xl text-primary">
                  {categoryShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </p>
              </div>
              {categoryShow && (
                <ul className="h-96 overflow-y-scroll">
                  {category.map((item) => (
                    <li
                      key={item}
                      onClick={() => handleCategory(item)}
                      className="font-lato font-normal text-lg px-4 py-3 hover:bg-gray-50 border-b-2 hover:!border-b-primary cursor-pointer duration-700 ease-in-out"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-full mt-6">
              <div
                onClick={() => setBrandShow(!brandShow)}
                className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-100 cursor-pointer"
              >
                <h2 className="text-xl font-semibold font-josefin text-primary">
                  Shop by Brand
                </h2>
                <p className="text-2xl text-primary">
                  {brandShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </p>
              </div>
              {brandShow && (
                <ul className="h-96 overflow-y-scroll">
                  {brand.map((item) => (
                    <li
                      key={item}
                      onClick={() => handleBrand(item)}
                      className="font-lato font-normal text-lg px-4 py-3 hover:bg-gray-50 border-b-2 hover:!border-b-primary cursor-pointer duration-700 ease-in-out"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-full mt-6">
              <div
                onClick={() => setPriceShow(!priceShow)}
                className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-100 cursor-pointer"
              >
                <h2 className="text-xl font-semibold font-josefin text-primary">
                  Shop by Price
                </h2>
                <p className="text-2xl text-primary">
                  {priceShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </p>
              </div>
              {priceShow && (
                <ul className="h-96 overflow-y-scroll">
                  {price.map((item) => (
                    <li
                      key={item}
                      onClick={() => handlePrice(item)}
                      className="font-lato font-normal text-lg px-4 py-3 hover:bg-gray-50 border-b-2 hover:!border-b-primary cursor-pointer duration-700 ease-in-out"
                    >
                      ${item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="w-full lg:w-[72%]">
            <div className="flex flex-wrap justify-between">
              {displayedItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[48%] lg:w-[32%] mb-8 group"
                >
                  <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] flex justify-center items-center p-4 relative w-auto h-[270px] overflow-hidden">
                    <div>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-[170px] w-auto"
                      />
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
                      <span className="text-xs text-[#FB2448] line-through ml-2">
                        ${item.price * 2}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(
                (categoryItemShow.length || data.length) / itemsPerPage
              )}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="flex flex-wrap justify-center items-center mt-6 gap-2 sm:gap-4"
              pageClassName="px-2 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
              pageLinkClassName="text-sm sm:text-base"
              activeClassName="bg-primary text-white"
              previousClassName="px-2 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
              nextClassName="px-2 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
              breakClassName="px-2 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-md cursor-default"
              breakLinkClassName="text-sm sm:text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceItem;
