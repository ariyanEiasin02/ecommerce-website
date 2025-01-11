import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { ImZoomIn } from "react-icons/im";
import { FiShoppingCart } from "react-icons/fi";
import { apiData } from "../ContextApi/ContextApi";
import ShortItem from "../ShortItem/ShortItem";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

const EcommerceItem = () => {
  const shopApiProduct = useContext(apiData)
  const [itemZoom, setItemZoom] = useState(null)
  const [category, setCategory] = useState([])
  const [brand, setBrand] = useState([])
  const [menuCol, setMenuCol] = useState('')
  
  useEffect(() => {
    setCategory([...new Set(shopApiProduct.map((item) => item.category))])
    setBrand([...new Set(shopApiProduct.map((item) => item.brand))])


  }, [shopApiProduct])

  let [categoryShow, setCategoryShow] = useState(false)
  let [brandShow, setBrandShow] = useState(false)
  let [priceShow, setPriceShow] = useState(false)

  let [categoryItem, setCategoryItem] = useState([])
  let [brandItem, setBrandItem] = useState([])
  let [priceItem, setPriceItem] = useState([])

  const hendleCategory = (cate) => {
    let filteredProduct = shopApiProduct.filter((item) => item.category == cate)
    setCategoryItem(filteredProduct)
    setPriceItem([])
  }

  const handleBrand = (quality) => {
    let filterBrnad = shopApiProduct.filter((item) => item.brand == quality)
    setBrandItem(filterBrnad)
    setCategoryItem([])
  }

  const hendlePrice = (value) => {
    let filterPriceproduct = shopApiProduct.filter((item) => item.price > value.low && item.price <= value.high)
    setPriceItem(filterPriceproduct)
    setBrandItem([])
    setCategoryItem([])
  }

  // pageinetion...................................
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(15);

  const lastItemIndex = currentPage * perPage;
  const firstItemIndex = lastItemIndex - perPage;

  const perPageProduct = shopApiProduct.slice(firstItemIndex, lastItemIndex)
  const pageNumbers = Math.ceil(shopApiProduct.length / perPage);

  const numbers = []
  for (let i = 1; i <= pageNumbers; i++) {
    numbers.push(i)
  }

  // prev and next button ........
  const hendelPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const hendelNextPage = () => {
    if (currentPage <= pageNumbers) {
      setCurrentPage(currentPage + 1)
    }
  }

  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, qty: 1 }))
    toast.success("Add to Cart Success!")
  }

  const handleShopMenu = () => {
    setMenuCol(false)
  }
  const handleShopMenuTwo = () => {
    setMenuCol(true)
  }
  const handleZoomCart = (index) => {
    setItemZoom((prevIndex) => (prevIndex === index ? null : index))
  }
  return (
    <section className="pt-12">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <ShortItem handleShopMenu={handleShopMenu} handleShopMenuTwo={handleShopMenuTwo} />
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
                      onClick={() => hendleCategory(item)}
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
              {priceShow &&
                <ul className='overflow-y-scroll h-64 flex flex-col gap-2 '>
                  <li className='font-lato font-normal text-lg px-4 py-3 hover:bg-gray-50 border-b-2 hover:!border-b-primary cursor-pointer duration-700 ease-in-out' onClick={() => hendlePrice({ low: 0.00, high: 10.00 })}>$0.00 - $10.00</li>
                  <li className='font-lato font-normal text-lg px-4 py-3 hover:bg-gray-50 border-b-2 hover:!border-b-primary cursor-pointer duration-700 ease-in-out' onClick={() => hendlePrice({ low: 10.01, high: 20.00 })}>$10.01 - $20.00</li>
                  <li className='font-lato font-normal text-lg px-4 py-3 hover:bg-gray-50 border-b-2 hover:!border-b-primary cursor-pointer duration-700 ease-in-out' onClick={() => hendlePrice({ low: 20.01, high: 100.00 })}>$20.01 - $100.00</li>
                  <li className='font-lato font-normal text-lg px-4 py-3 hover:bg-gray-50 border-b-2 hover:!border-b-primary cursor-pointer duration-700 ease-in-out' onClick={() => hendlePrice({ low: 100.01, high: 1000.00 })}>$100.01 - $1000.00</li>
                  <li className='font-lato font-normal text-lg px-4 py-3 hover:bg-gray-50 border-b-2 hover:!border-b-primary cursor-pointer duration-700 ease-in-out' onClick={() => hendlePrice({ low: 1000.01, high: 10000.00 })}>$1000.01 - $10000.00</li>

                </ul>
              }
            </div>
          </div>
          <div className="w-full lg:w-[72%]">
            {
              menuCol ?
                <div className="flex flex-col flex-wrap justify-between">
                  {
                    categoryItem.length > 0 ?
                    categoryItem.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col lg:flex-row justify-between items-center w-full mb-8 group"
                      >
                        <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] flex justify-center items-center p-4 relative w-full lg:w-[38%] h-[180px] lg:h-[220px] overflow-hidden">
                          <div>
                            <Link to={`/ShopList/${item.id}`}>
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className={`h-[150px] lg:h-[170px] w-auto ${itemZoom === index ? "scale-150" : ""}`}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="w-full lg:w-[58%] flex flex-col mt-4 lg:mt-0">
                          <div className="flex items-center justify-between gap-x-3">
                            <h3 className="text-[16px] lg:text-[18px] font-josefin text-primary font-bold">
                              {item.title}
                            </h3>
                            <div className="flex gap-2 py-1">
                              <span className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></span>
                              <span className="w-[10px] h-[10px] bg-secondCommon rounded-full"></span>
                              <span className="w-[10px] h-[10px] bg-[#00009D] rounded-full"></span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between gap-x-3 mt-2">
                            <p className="py-1 text-sm lg:text-base font-josefin text-primary font-semibold">
                              ${item.price}
                              <span className="text-xs text-[#FB2448] line-through ml-2">
                                ${item.discountPercentage}
                              </span>
                            </p>
                            <div className="flex gap-x-1">
                              <IoStar className="text-[#FFC416]" />
                              <IoStar className="text-[#FFC416]" />
                              <IoStar className="text-[#FFC416]" />
                              <IoStar className="text-[#FFC416]" />
                              <IoStar className="text-[#B2B2B2]" />
                            </div>
                          </div>
                          <p className="py-1 text-sm lg:text-base font-lato text-[#9295AA] font-normal mt-2">
                            {item.description}
                          </p>
                          <div className="">
                                    <ul className="flex gap-2">
                                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <FiShoppingCart
                                          onClick={() => handleAddToCart(item)}
                                          className="text-[#1389FF] hover:text-[#00009D]"
                                        />
                                      </li>
                                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                                      </li>
                                      <li onClick={() => handleZoomCart(index)} className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <ImZoomIn className="text-[#1389FF] hover:text-[#00009D]" />
                                      </li>
                                    </ul>
                            </div>
                          <ToastContainer
                            position="top-center"
                            autoClose={500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition={Bounce}
                          />
                        </div>
                      </div>
                    ))
                    
                      :
                      brandItem.length > 0 ?
                      brandItem.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col lg:flex-row justify-between items-center w-full mb-8 group"
                        >
                          <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] flex justify-center items-center p-4 relative w-full lg:w-[38%] h-[180px] lg:h-[220px] overflow-hidden">
                            <div>
                              <Link to={`/ShopList/${item.id}`}>
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className={`h-[150px] lg:h-[170px] w-auto ${itemZoom === index ? "scale-150" : ""}`}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="w-full lg:w-[58%] flex flex-col mt-4 lg:mt-0">
                            <div className="flex items-center justify-between gap-x-3">
                              <h3 className="text-[16px] lg:text-[18px] font-josefin text-primary font-bold">
                                {item.title}
                              </h3>
                              <div className="flex gap-2 py-1">
                                <span className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></span>
                                <span className="w-[10px] h-[10px] bg-secondCommon rounded-full"></span>
                                <span className="w-[10px] h-[10px] bg-[#00009D] rounded-full"></span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between gap-x-3 mt-2">
                              <p className="py-1 text-sm lg:text-base font-josefin text-primary font-semibold">
                                ${item.price}
                                <span className="text-xs text-[#FB2448] line-through ml-2">
                                  ${item.discountPercentage}
                                </span>
                              </p>
                              <div className="flex gap-x-1">
                                <IoStar className="text-[#FFC416]" />
                                <IoStar className="text-[#FFC416]" />
                                <IoStar className="text-[#FFC416]" />
                                <IoStar className="text-[#FFC416]" />
                                <IoStar className="text-[#B2B2B2]" />
                              </div>
                            </div>
                            <p className="py-1 text-sm lg:text-base font-lato text-[#9295AA] font-normal mt-2">
                              {item.description}
                            </p>
                            <div className="">
                                    <ul className="flex gap-2">
                                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <FiShoppingCart
                                          onClick={() => handleAddToCart(item)}
                                          className="text-[#1389FF] hover:text-[#00009D]"
                                        />
                                      </li>
                                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                                      </li>
                                      <li onClick={() => handleZoomCart(index)} className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <ImZoomIn className="text-[#1389FF] hover:text-[#00009D]" />
                                      </li>
                                    </ul>
                              </div>
                            <ToastContainer
                              position="top-center"
                              autoClose={500}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick={false}
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="dark"
                              transition={Bounce}
                            />
                          </div>
                        </div>
                      ))
                        :
                        priceItem.length > 0 ?
                        priceItem.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col lg:flex-row justify-between items-center w-full mb-8 group"
                          >
                            <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] flex justify-center items-center p-4 relative w-full lg:w-[38%] h-[180px] lg:h-[220px] overflow-hidden">
                              <div>
                              <Link to={`/ShopList/${item.id}`}>
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className={`h-[150px] lg:h-[170px] w-auto ${itemZoom === index ? "scale-150" : ""}`}
                                />
                              </Link>
                              </div>
                            </div>
                            <div className="w-full lg:w-[58%] flex flex-col mt-4 lg:mt-0">
                              <div className="flex items-center justify-between gap-x-3">
                                <h3 className="text-[16px] lg:text-[18px] font-josefin text-primary font-bold">
                                  {item.title}
                                </h3>
                                <div className="flex gap-2 py-1">
                                  <span className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></span>
                                  <span className="w-[10px] h-[10px] bg-secondCommon rounded-full"></span>
                                  <span className="w-[10px] h-[10px] bg-[#00009D] rounded-full"></span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between gap-x-3 mt-2">
                                <p className="py-1 text-sm lg:text-base font-josefin text-primary font-semibold">
                                  ${item.price}
                                  <span className="text-xs text-[#FB2448] line-through ml-2">
                                    ${item.discountPercentage}
                                  </span>
                                </p>
                                <div className="flex gap-x-1">
                                  <IoStar className="text-[#FFC416]" />
                                  <IoStar className="text-[#FFC416]" />
                                  <IoStar className="text-[#FFC416]" />
                                  <IoStar className="text-[#FFC416]" />
                                  <IoStar className="text-[#B2B2B2]" />
                                </div>
                              </div>
                              <p className="py-1 text-sm lg:text-base font-lato text-[#9295AA] font-normal mt-2">
                                {item.description}
                              </p>
                              <div className="">
                                    <ul className="flex gap-2">
                                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <FiShoppingCart
                                          onClick={() => handleAddToCart(item)}
                                          className="text-[#1389FF] hover:text-[#00009D]"
                                        />
                                      </li>
                                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                                      </li>
                                      <li onClick={() => handleZoomCart(index)} className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <ImZoomIn className="text-[#1389FF] hover:text-[#00009D]" />
                                      </li>
                                    </ul>
                                  </div>
                              <ToastContainer
                                position="top-center"
                                autoClose={500}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                                transition={Bounce}
                              />
                            </div>
                          </div>
                        ))
                          :
                          perPageProduct.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col lg:flex-row justify-between items-center w-full mb-8 group"
                            >
                              <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] flex justify-center items-center p-4 relative w-full lg:w-[38%] h-[180px] lg:h-[220px] overflow-hidden">
                                <div>
                                <Link to={`/ShopList/${item.id}`}>
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className={`h-[150px] lg:h-[170px] w-auto ${itemZoom === index ? "scale-150" : ""}`}
                                />
                              </Link>
                                </div>
                              </div>
                              <div className="w-full lg:w-[58%] flex flex-col mt-4 lg:mt-0">
                                <div className="flex items-center justify-between gap-x-3">
                                  <h3 className="text-[16px] lg:text-[18px] font-josefin text-primary font-bold">
                                    {item.title}
                                  </h3>
                                  <div className="flex gap-2 py-1">
                                    <span className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></span>
                                    <span className="w-[10px] h-[10px] bg-secondCommon rounded-full"></span>
                                    <span className="w-[10px] h-[10px] bg-[#00009D] rounded-full"></span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between gap-x-3 mt-2">
                                  <p className="py-1 text-sm lg:text-base font-josefin text-primary font-semibold">
                                    ${item.price}
                                    <span className="text-xs text-[#FB2448] line-through ml-2">
                                      ${item.discountPercentage}
                                    </span>
                                  </p>
                                  <div className="flex gap-x-1">
                                    <IoStar className="text-[#FFC416]" />
                                    <IoStar className="text-[#FFC416]" />
                                    <IoStar className="text-[#FFC416]" />
                                    <IoStar className="text-[#FFC416]" />
                                    <IoStar className="text-[#B2B2B2]" />
                                  </div>
                                </div>
                                <p className="py-1 text-sm lg:text-base font-lato text-[#9295AA] font-normal mt-2">
                                  {item.description}
                                </p>
                                <div className="">
                                    <ul className="flex gap-2">
                                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <FiShoppingCart
                                          onClick={() => handleAddToCart(item)}
                                          className="text-[#1389FF] hover:text-[#00009D]"
                                        />
                                      </li>
                                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                                      </li>
                                      <li onClick={() => handleZoomCart(index)} className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <ImZoomIn className="text-[#1389FF] hover:text-[#00009D]" />
                                      </li>
                                    </ul>
                                  </div>
                                <ToastContainer
                                  position="top-center"
                                  autoClose={500}
                                  hideProgressBar={false}
                                  newestOnTop={false}
                                  closeOnClick={false}
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                  theme="dark"
                                  transition={Bounce}
                                />
                              </div>
                            </div>
                          ))
                  }
                </div>
                :
                <div className="flex flex-wrap justify-between">
                  {
                    categoryItem.length > 0 ?
                    categoryItem.map((item, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-[48%] lg:w-[32%] mb-8 group"
                      >
                        <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] flex justify-center items-center p-4 relative w-auto h-[270px] overflow-hidden">
                          <div>
                            <Link to={`/ShopList/${item.id}`}>
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className={`h-[170px] w-auto ${itemZoom === index ? "scale-150" : ""}`}
                              />
                            </Link>
                            <div className="absolute bottom-6 -left-16 group-hover:left-4 duration-700 ease-in-out">
                              <ul>
                                <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                  <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                                </li>
                                <li onClick={() => handleZoomCart(index)} className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
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
                              ${item.discountPercentage}
                            </span>
                          </p>
                          <button onClick={() => handleAddToCart(item)} className="w-full rounded-lg bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                            Add to Cart
                          </button>
                          <ToastContainer
                            position="top-center"
                            autoClose={500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition={Bounce}
                          />
                        </div>
                      </div>
                    ))
                      :
                      brandItem.length > 0 ?
                      brandItem.map((item, index) => (
                        <div
                          key={index}
                          className="w-full sm:w-[48%] lg:w-[32%] mb-8 group"
                        >
                          <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] flex justify-center items-center p-4 relative w-auto h-[270px] overflow-hidden">
                            <div>
                              <Link to={`/ShopList/${item.id}`}>
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className={`h-[170px] w-auto ${itemZoom === index ? "scale-150" : ""}`}
                                />
                              </Link>
                              <div className="absolute bottom-6 -left-16 group-hover:left-4 duration-700 ease-in-out">
                                <ul>
                                  <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                    <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                                  </li>
                                  <li onClick={() => handleZoomCart(index)} className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
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
                                ${item.discountPercentage}
                              </span>
                            </p>
                            <button onClick={() => handleAddToCart(item)} className="w-full rounded-lg bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                              Add to Cart
                            </button>
                            <ToastContainer
                              position="top-center"
                              autoClose={500}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick={false}
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="dark"
                              transition={Bounce}
                            />
                          </div>
                        </div>
                      ))
                        :
                        priceItem.length > 0 ?
                        priceItem.map((item, index) => (
                          <div
                            key={index}
                            className="w-full sm:w-[48%] lg:w-[32%] mb-8 group"
                          >
                            <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] flex justify-center items-center p-4 relative w-auto h-[270px] overflow-hidden">
                              <div>
                                <Link to={`/ShopList/${item.id}`}>
                                <img
                                  src={item.thumbnail}
                                  alt={item.title}
                                  className={`h-[170px] w-auto ${itemZoom === index ? "scale-150" : ""}`}
                                  />
                                </Link>
                                <div className="absolute bottom-6 -left-16 group-hover:left-4 duration-700 ease-in-out">
                                  <ul>
                                    <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                      <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                                    </li>
                                    <li onClick={() => handleZoomCart(index)} className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
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
                                  ${item.discountPercentage}
                                </span>
                              </p>
                              <button onClick={() => handleAddToCart(item)} className="w-full rounded-lg bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                Add to Cart
                              </button>
                              <ToastContainer
                                position="top-center"
                                autoClose={500}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                                transition={Bounce}
                              />
                            </div>
                          </div>
                        ))
                          :
                          perPageProduct.map((item, index) => (
                            <div
                              key={index}
                              className="w-full sm:w-[48%] lg:w-[32%] mb-8 group"
                            >
                              <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] flex justify-center items-center p-4 relative w-auto h-[270px] overflow-hidden">
                                <div>
                                  <Link to={`/ShopList/${item.id}`}>
                                  <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className={`h-[170px] w-auto ${itemZoom === index ? "scale-150" : ""}`}
                                    />
                                    </Link>
                                  <div className="absolute bottom-6 -left-16 group-hover:left-4 duration-700 ease-in-out">
                                    <ul>
                                      <li className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                        <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                                      </li>
                                      <li onClick={() => handleZoomCart(index)} className="my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
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
                                    ${item.discountPercentage}
                                  </span>
                                </p>
                                <button onClick={() => handleAddToCart(item)} className="w-full rounded-lg bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                  Add to Cart
                                </button>
                                <ToastContainer
                                  position="top-center"
                                  autoClose={500}
                                  hideProgressBar={false}
                                  newestOnTop={false}
                                  closeOnClick={false}
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                  theme="dark"
                                  transition={Bounce}
                                />
                              </div>
                            </div>
                          ))
                  }
                </div>
            }
           <div className="w-full">
  <ul className="flex flex-wrap gap-2 mt-5 pb-5 items-center  w-full">
    <button 
    disabled={currentPage === 1}
      onClick={hendelPrevPage} 
      className={`py-2 px-5 border-2 border-gray-300 rounded-sm text-[#8A8FB9] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      Prev
    </button>

    {numbers.map((item) => (
      <li 
        key={item}
        className={`border-2 py-2 px-3 cursor-pointer rounded-md ${
          currentPage === item 
            ? 'bg-[#c3c3d4] border-[#c3c3d4] text-white' 
            : ''
        }`}
        onClick={() => setCurrentPage(item)}
      >
        {item}
      </li>
    ))}

    <button 
      onClick={hendelNextPage} 
      disabled={currentPage === pageNumbers}
      className={`py-2 px-5 border-2 border-gray-300 rounded-sm text-[#8A8FB9] ${currentPage === pageNumbers ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      Next
    </button>
  </ul>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceItem;
