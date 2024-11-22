import React, { useContext } from 'react'
import img1 from '../../assets/image1.png'
import { apiData } from '../ContextApi/ContextApi'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const Categories = () => {
    let data = useContext(apiData);
    let fillerData = data.filter((item) => item.id >= 15 && item.id <= 30)

    const PreviousArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute -bottom-16 lg:-bottom-24 left-[35%] md:left-[43%] py-3 px-3 sm:py-4 sm:px-4 rounded-md bg-secondCommon font-poppins font-bold text-lg sm:text-2xl text-white"
            >
                <IoIosArrowBack />
            </button>
        );
    };

    const NextArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute -bottom-16 lg:-bottom-24 right-[35%] md:right-[43%] py-3 px-3 sm:py-4 sm:px-4 rounded-md bg-secondCommon font-poppins font-bold text-lg sm:text-2xl text-white"
            >
                <IoIosArrowForward />
            </button>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className='py-12'>
            <div className="max-w-container mx-auto">
                <h1 className="text-4xl text-primary font-josefin font-bold text-center mb-8 lg:mb-16">Top Categories</h1>
                <Slider {...settings}>
                    {
                        fillerData.map((item) => (
                            <div className="w-full lg:!w-[95%] group px-4 lg:px-0">
                                <div className="flex justify-center items-center w-[270px] h-[270px] rounded-full bg-[#F6F7FB] group-hover:shadow-shadow duration-700 ease-in-out relative overflow-hidden mx-auto">
                                    <img className='w-[178px] h-auto' src={item.thumbnail} alt="" />
                                    <div className="flex justify-center absolute -bottom-16 left-1/2 -translate-x-1/2 group-hover:bottom-3 duration-700 ease-in-out">
                                        <button className="bg-[#08D15F] rounded-md py-3 px-5 font-josefin text-white font-bold text-xs">
                                            View Shop
                                        </button>
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <h3 className='font-josefin font-normal text-primary text-xl'>Mini LCW Chair</h3>
                                    <p className='font-josefin font-normal text-primary text-base'>$56.00</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </section>
    )
}

export default Categories