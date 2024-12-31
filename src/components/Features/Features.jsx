import React, { useContext } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiData } from '../ContextApi/ContextApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/cartSlice';
import { Bounce, ToastContainer, toast } from 'react-toastify';
const Features = () => {
    const data = useContext(apiData);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
    const dispatch = useDispatch()

    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, qty: 1 }))
        toast.success("Add to Cart Success!")
    }
    return (
        <>
            <section className='py-12 bg-[#F1F0FF]'>
                <div className="max-w-container mx-auto">
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
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="!flex flex-col md:flex-row items-center justify-between px-4 md:px-0"
                            >
                                <div className="w-full md:w-[45%] flex justify-center">
                                    <div className="w-[400px] h-[370px] bg-[#F5E1FC] rounded-full flex items-center justify-center">
                                        <img
                                            className="w-auto max-h-[350px]"
                                            src={item.thumbnail}
                                            alt="Product"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-[55%] mt-6 md:mt-0">
                                    <h2 className="font-josefin text-primary text-2xl md:text-5xl">
                                        {item.title} & Trending Products
                                    </h2>

                                    <div className="flex items-center mt-4">
                                        <div className="w-3 h-3 bg-[#F52B70] rounded-full"></div>
                                        <p className="font-lato font-medium text-base text-[#ACABC3] pl-2">
                                            All frames constructed with hardwood solids and laminates
                                        </p>
                                    </div>

                                    <div className="flex items-center mt-2">
                                        <div className="w-3 h-3 bg-[#2B2BF5] rounded-full"></div>
                                        <p className="font-lato font-medium text-base text-[#ACABC3] pl-2">
                                            Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails
                                        </p>
                                    </div>

                                    <div className="flex items-center mt-2">
                                        <div className="w-3 h-3 bg-[#2BF5CC] rounded-full"></div>
                                        <p className="font-lato font-medium text-base text-[#ACABC3] pl-2">
                                            Arms, backs, and seats are structurally reinforced
                                        </p>
                                    </div>

                                    <div className="mt-5 flex items-center">
                                        <button
                                            onClick={() => handleAddToCart(item)}
                                            className="bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                            Add To Cart
                                        </button>
                                        <div className="ml-4">
                                            <p className="font-josefin text-sm font-medium text-primary">
                                                B&B Italian Sofa
                                            </p>
                                            <p className="font-josefin text-sm font-medium text-primary">${item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </section>
        </>
    )
}

export default Features