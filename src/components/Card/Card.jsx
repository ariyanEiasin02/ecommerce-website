import React, { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { ImZoomIn } from 'react-icons/im'
import sale from '../../assets/sale.png'
import { Link } from 'react-router-dom'
const Card = ({ imageMix, title, categoryName, fixedNow, fixedOld, handleAddToCart,productName}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const handleZoomCart = () => {
    setIsZoomed(!isZoomed);
  }
  return (
    <div
      className={`${categoryName}  text-primary group`}
    >
      <div className="bg-[#F6F7FB] group-hover:bg-[#F7F7F7] flex justify-center items-center p-4 relative group w-auto h-[270px] overflow-hidden">
        <div className="">
          <img src={imageMix} alt={title} className={`h-[170px] w-auto ${isZoomed ? "scale-150" : ""}`} />
          <div className="flex justify-center absolute -bottom-20 left-1/2 -translate-x-1/2 group-hover:bottom-4 duration-700 ease-in-out">
            <Link to={`Home/ShopList/${productName}`}>
              <button className="bg-[#08D15F] rounded-md py-3 px-6 font-josefin text-white font-bold text-xs">
                View Details
              </button>
            </Link>
          </div>
          <div className="absolute bottom-6 left-4 opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
            <ul>
              <li onClick={handleAddToCart} className='my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center'><FiShoppingCart className="text-[#1389FF] hover:text-[#00009D]" /></li>
              <li className='my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center'><FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" /></li>
              <li onClick={handleZoomCart} className='my-1 w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center'><ImZoomIn className="text-[#1389FF] hover:text-[#00009D]" /></li>
            </ul>
          </div>
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
            <img src={sale} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-2 pr-4">
        <h3 className="text-base font-josefin text-primary font-semibold">{title}</h3>
        <p className='text-base font-josefin text-primary font-semibold'>${fixedNow} <span className='text-xs text-[#FB2448] line-through'>${fixedOld}</span></p>
      </div>
    </div>
  )
}

export default Card