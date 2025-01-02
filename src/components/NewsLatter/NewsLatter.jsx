import React from 'react'
import newsImg from '../../assets/newslater.png'
import { Link } from 'react-router-dom'
const NewsLatter = () => {
  return (
    <div style={{backgroundImage : `url(${newsImg})`}} className={`mt-20 bg-cover bg-center py-24`}>
        <div className="flex justify-center items-center">
            <div className="text-center">
                <h2 className="font-josefin text-primary text-2xl lg:text-4xl lg:w-[70%] mx-auto w-full">Get Leatest Update By Subscribe
                0ur Newslater</h2>
                <Link to="/Home/ShopGrid/">
                <button className="bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                    Shop Now
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NewsLatter