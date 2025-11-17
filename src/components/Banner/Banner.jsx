import React from 'react'
import banner from '../../assets/banner.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="bg-[#F2F0FF] py-12 md:py-20 relative">
      <div className="max-w-container mx-auto px-4 md:px-0">
        
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h6 className="font-lato mb-6 font-bold text-sm md:text-base text-secondCommon">
              Best Furniture For Your Castle...
            </h6>

            <h1 className="font-josefin text-primary text-3xl md:text-5xl leading-tight mb-4 font-semibold">
              New Furniture Collection Trends in 2020
            </h1>

            <p className="text-[#8A8FB9] font-lato text-base font-medium max-w-md mx-auto md:mx-0 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in 
              est adipiscing in phasellus non in justo.
            </p>

            <Link
              to="/Home/ShopGrid"
              className="inline-block bg-secondCommon text-white font-josefin font-semibold text-base py-3 px-8 rounded hover:bg-opacity-90 transition-all"
            >
              Shop Now
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={banner}
              alt="Furniture Banner"
              className="w-full max-w-sm md:max-w-lg drop-shadow-sm"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner
