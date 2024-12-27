import React, { useContext } from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'
import { apiData } from '../ContextApi/ContextApi';

const BlogItems = () => {
    const data = useContext(apiData);
       
    const RecentData = data.filter((item) => item.id >= 15 && item.id <= 18)
    const saleData = data.filter((item) => item.id >= 20 && item.id <= 22)
    const OfferData = data.filter((item) => item.id >= 25 && item.id <= 28)
  return (
    <div class="">
    
    <div class="mb-4 mt-8">
      <h2 class="font-josefin font-semibold text-[22px] text-primary mb-2">Search</h2>
      <input
        type="text"
        placeholder="Search For Posts"
        class="w-full border rounded-md px-4 py-2 text-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="">

      <div className='mb-4'>
        <h3 class="font-josefin font-semibold text-[22px] text-primary mb-2">Categories</h3>
        <ul class="grid grid-cols-2 gap-x-8 gap-y-3">
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Hobbies (14)</li>
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Women (21)</li>
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Women (21)</li>
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Women (21)</li>
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Women (21)</li>
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Man (21)</li>
        </ul>
      </div>

      <div className='mb-4'>
        <h3 class="font-josefin font-semibold text-[22px] text-primary mb-4 mt-2">Recent Posts</h3>
        {
            RecentData.map((item)=>(
                <div className="mt-2 flex items-center">
            <div className="w-20 h-16 bg-[#EEEFFB]">
                <img src={item.thumbnail} alt="" className='w-full h-full'/>
            </div>
            <div className="ml-3">
            <p class="font-josefin text-base text-[#3F509E] font-normal">{item.title}</p>
            <p class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
            </div>
        </div>
            ))
        }
      </div>
      <div>
        <h3 class="font-josefin font-semibold text-[22px] text-primary mb-4 mt-2">Sale Product</h3>
        {
            saleData.map((item)=>(
                <div className="mt-2 flex items-center">
            <div className="w-20 h-16 bg-[#EEEFFB]">
                <img src={item.thumbnail} alt="" className='w-full h-full'/>
            </div>
            <div className="ml-3">
            <p class="font-josefin text-base text-[#3F509E] font-normal">{item.title}</p>
            <p class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
            </div>
        </div>
            ))
        }
      </div>
      <div>
        <h3 class="font-josefin font-semibold text-[22px] text-primary mb-2 mt-5">Offer product</h3>
        <div className="grid grid-cols-2 gap-x-8">
        {
            OfferData.map((item)=>(
                 <div className="mt-2">
            <div className="w-[140px] bg-[#EEEFFB]">
                <img src={item.thumbnail} alt="" className='w-full h-full'/>
            </div>
            <div className="text-center">
            <p class="font-josefin text-base text-[#3F509E] font-medium py-2">{item.title}</p>
            <p class="font-lato font-semibold text-[11px] text-[#8A8FB9]">$12.00 - $15.00</p>
            </div>
        </div>
            ))
        }
        </div>
      </div>
      <div>
        <h3 class="font-josefin font-semibold text-[22px] text-primary mb-2 mt-5">Follow</h3>
        <ul className='flex gap-x-4'>
            <li className='w-8 h-8 flex justify-center items-center rounded-full bg-[#5625DF]'>
            <FaFacebookF className='text-white'/>
            </li>
            <li className='w-8 h-8 flex justify-center items-center rounded-full bg-[#FF27B7]'>
            <FaInstagram className='text-white'/>
            </li>
            <li className='w-8 h-8 flex justify-center items-center rounded-full bg-[#37DAF3]'>
            <FaXTwitter className='text-white'/>
            </li>
        </ul>
      </div>

    </div>

    <div class="mt-5">
      <h3 class="font-bold text-lg text-gray-800 mb-4">Tags</h3>
      <div class="flex flex-wrap gap-2">
        <span
          class="bg-gray-200 px-3 py-1 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          General
        </span>
        <span
          class="bg-gray-200 px-3 py-1 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          Atsanil
        </span>
        <span
          class="bg-gray-200 px-3 py-1 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          Insas
        </span>
        <span
          class="bg-gray-200 px-3 py-1 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          Bibsaas
        </span>
        <span
          class="bg-gray-200 px-3 py-1 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          Nulla
        </span>
      </div>
    </div>
  </div>
  )
}

export default BlogItems