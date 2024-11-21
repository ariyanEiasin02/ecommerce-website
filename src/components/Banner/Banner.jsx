import React from 'react'
import banner from '../../assets/banner.png'
import bannerImg from '../../assets/bannerImg.png'
import Slider from 'react-slick';
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <section className="py-12 bg-[#F2F0FF] relative">
                <div className="max-w-container mx-auto px-4 md:px-0">
                    <Slider {...settings}>
                        <div className="">
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center mt-5">
                                <div className="flex justify-center md:justify-start w-full md:w-1/2">
                                    <img
                                        className="w-full max-w-md md:max-w-lg"
                                        src={banner}
                                        alt="Furniture Collection"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h6 className="font-lato font-bold text-base text-secondCommon">
                                        Best Furniture For Your Castle...
                                    </h6>
                                    <h1 className="font-josefin text-primary text-3xl md:text-5xl w-full py-2">
                                        New Furniture Collection Trends in 2020
                                    </h1>
                                    <p className="text-[#8A8FB9] font-lato font-bold text-base w-full">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                                    </p>
                                    <button className="bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center mt-5">
                                <div className="flex justify-center md:justify-start w-full md:w-1/2">
                                    <img
                                        className="w-full max-w-md md:max-w-lg"
                                        src={banner}
                                        alt="Furniture Collection"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h6 className="font-lato font-bold text-base text-secondCommon">
                                        Best Furniture For Your Castle...
                                    </h6>
                                    <h1 className="font-josefin text-primary text-3xl md:text-5xl w-full py-2">
                                        New Furniture Collection Trends in 2020
                                    </h1>
                                    <p className="text-[#8A8FB9] font-lato font-bold text-base w-full">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                                    </p>
                                    <button className="bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center mt-5">
                                <div className="flex justify-center md:justify-start w-full md:w-1/2">
                                    <img
                                        className="w-full max-w-md md:max-w-lg"
                                        src={banner}
                                        alt="Furniture Collection"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h6 className="font-lato font-bold text-base text-secondCommon">
                                        Best Furniture For Your Castle...
                                    </h6>
                                    <h1 className="font-josefin text-primary text-3xl md:text-5xl w-full py-2">
                                        New Furniture Collection Trends in 2020
                                    </h1>
                                    <p className="text-[#8A8FB9] font-lato font-bold text-base w-full">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                                    </p>
                                    <button className="bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className="absolute top-0 left-0 w-[120px] md:w-[160px] lg:w-[190px]">
                        <img src={bannerImg} alt="Decorative Banner" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner