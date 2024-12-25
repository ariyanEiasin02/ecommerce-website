import React from 'react'
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartData = useSelector((state)=> state.cartSlice.cartItems)
  
  
  return (
    <>
    <header className="bg-common text-white px-4 py-2 hidden md:block">
      <div className="max-w-container mx-auto flex justify-between items-center">
        <div className="flex space-x-6 items-center">
          <div className=''>
            <span className="text-sm text-[#F1F1F1] font-josefin font-semibold">📧 ariyaneiasin56@gmail.com</span>
          </div>
          <div>
            <span className="text-sm text-[#F1F1F1] font-josefin font-semibold">📞 -880 1704-037578</span>
          </div>
        </div>
        <div className="flex gap-x-6 items-center">
          <select
            className="bg-common text-sm text-[#F1F1F1] font-josefin font-semibold"
            defaultValue="EN"
          >
            <option value="EN">English</option>
            <option value="BN">বাংলা</option>
          </select>

          <select
            className="bg-common text-sm text-[#F1F1F1] font-josefin font-semibold"
            defaultValue="USD"
          >
            <option value="USD">$ Dollar</option>
            <option value="BDT">৳ Taka</option>
          </select>
          <Link to="/Login">
          <button className="text-sm flex items-center text-[#F1F1F1] font-josefin font-semibold">
            <FaUser className="mr-1" />
            <span>Login</span>
          </button>
          </Link>
          <button className="flex items-center text-sm text-[#F1F1F1] font-josefin font-semibold">
            <FaHeart className="mr-1" />
            <span>Wishlist</span>
          </button>
          <Link to="/Home/shop/">
          <button className="relative flex text-sm items-center text-[#F1F1F1] font-josefin font-semibold">
            <FaShoppingCart className="mr-1" />
            <span>Shop</span>
            <p className='absolute -top-2 left-2 text-white text-[14px] font-josefin w-5 h-5 bg-secondCommon rounded-full font-bold flex justify-center items-center'>{cartData.length}</p>
          </button>
          </Link>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header