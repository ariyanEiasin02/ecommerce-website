import React from 'react'
import { FaCalendarAlt, FaTools } from 'react-icons/fa'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import { Link } from 'react-router-dom'
const LeatestBlog = () => {
    return (
        <section>
            <div className="mt-8 max-w-container mx-auto">
                <div className="text-center mb-5">
                    <h2 className="text-4xl text-primary font-josefin font-bold">Leatest Blog</h2>
                </div>
                <div className="py-6 px-4 lg:px-0 lg:flex justify-between">
                    <div className="w-full lg:w-[32%] bg-white shadow-lg overflow-hidden group rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={blog1}
                                alt="blog1"
                                className="w-full object-cover group-hover:scale-125 duration-700"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <FaTools className='text-secondCommon' />
                                    <span className="text-sm font-bold text-primary font-josefin mt-1">SaberAli</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaCalendarAlt className='text-[#FFA454]' />
                                    <span className="text-sm font-bold text-primary font-josefin mt-1">21 August, 2020</span>
                                </div>
                            </div>
                            <h3 className="text-[18px] font-josefin font-semibold text-primary group-hover:text-secondCommon duration-700 mt-4">
                                Top Essential Trends in 2021
                            </h3>
                            <p className="font-lato text-base text-[#72718F] mt-2">
                                More off this and less hello samlande lied much over tightly circa
                                horse taped mightly
                            </p>
                            <Link to="/Home/Blog/">
                            <button className="mt-3 text-primary group-hover:text-secondCommon duration-700 underline font-lato font-normal text-base">
                                Read More
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-[32%] bg-white shadow-lg overflow-hidden group rounded-lg my-6 lg:my-0">
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={blog2}
                                alt="blog1"
                                className="w-full object-cover group-hover:scale-125 duration-700"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <FaTools className='text-secondCommon' />
                                    <span className="text-sm font-bold text-primary font-josefin mt-1">Surfauxion</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaCalendarAlt className='text-[#FFA454]' />
                                    <span className="text-sm font-bold text-primary font-josefin mt-1">21 August, 2020</span>
                                </div>
                            </div>
                            <h3 className="text-[18px] font-josefin font-semibold text-primary group-hover:text-secondCommon duration-700 mt-4">
                                Top Essential Trends in 2021
                            </h3>
                            <p className="font-lato text-base text-[#72718F] mt-2">
                                More off this and less hello samlande lied much over tightly circa
                                horse taped mightly
                            </p>
                            <Link to="/Home/Blog/">
                            <button className="mt-3 text-primary group-hover:text-secondCommon duration-700 underline font-lato font-normal text-base">
                                Read More
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-[32%] bg-white shadow-lg overflow-hidden group rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={blog3}
                                alt="blog1"
                                className="w-full object-cover group-hover:scale-125 duration-700"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <FaTools className='text-secondCommon' />
                                    <span className="text-sm font-bold text-primary font-josefin mt-1">SaberAli</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaCalendarAlt className='text-[#FFA454]' />
                                    <span className="text-sm font-bold text-primary font-josefin mt-1">21 August, 2020</span>
                                </div>
                            </div>
                            <h3 className="text-[18px] font-josefin font-semibold text-primary group-hover:text-secondCommon duration-700 mt-4">
                                Top Essential Trends in 2021
                            </h3>
                            <p className="font-lato text-base text-[#72718F] mt-2">
                                More off this and less hello samlande lied much over tightly circa
                                horse taped mightly
                            </p>
                            <Link to="/Home/Blog/">
                            <button className="mt-3 text-primary group-hover:text-secondCommon duration-700 underline font-lato font-normal text-base">
                                Read More
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeatestBlog