import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiShoppingCart } from "react-icons/fi";
import { ImZoomIn } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";

import product1 from '../../assets/image1.png'
import product2 from '../../assets/image2.png'
import product3 from '../../assets/image3.png'
import product4 from '../../assets/image4.png'
const products = [
    { id: 1, name: "Cantilever chair 1", code: 'Y523201', price: 25, img: product1 },
    { id: 2, name: "Cantilever chair 2", code: 'Y523202', price: 30, img: product2 },
    { id: 3, name: "Cantilever chair 3", code: 'Y523203', price: 40, img: product3 },
    { id: 4, name: "Cantilever chair 4", code: 'Y523204', price: 50, img: product4 },
    { id: 5, name: "Cantilever chair 5", code: 'Y523205', price: 60, img: product1 },
    { id: 6, name: "Cantilever chair 6", code: 'Y523206', price: 80, img: product4 },
];

const ProductCart = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <>
            <section className="py-12">
                <div className="max-w-container mx-auto">
                    <h1 className="text-4xl text-primary font-josefin font-bold text-center mb-3">Featured Products</h1>
                    <Slider {...settings}>
                        {products.map((product) => (
                            <div key={product.id} className="p-4">
                                <div className="border rounded-lg shadow-md flex flex-col group">
                                    <div className="bg-[#F6F7FB] group-hover:bg-[#F7F7F7] py-8 px-4 relative">
                                        <img src={product.img} alt={product.name} className="w-[178px] h-[178px] mx-auto" />
                                        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 flex gap-2">
                                            <div className="w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                                <FiShoppingCart className="text-[#1389FF] hover:text-[#00009D]" />
                                            </div>
                                            <div className="w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                                <FaRegHeart className="text-[#1389FF] hover:text-[#00009D]" />
                                            </div>
                                            <div className="w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#eeeffb] flex justify-center items-center">
                                                <ImZoomIn className="text-[#1389FF] hover:text-[#00009D]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white group-hover:bg-[#00009D] text-center py-4">
                                        <h3 className="text-lg font-lato font-bold text-secondCommon group-hover:text-white mt-4">{product.name}</h3>
                                        <div className="flex justify-center gap-2 py-2">
                                            <span className="w-4 h-1 bg-[#05E6B7] rounded-xl"></span>
                                            <span className="w-4 h-1 bg-secondCommon rounded-xl"></span>
                                            <span className="w-4 h-1 bg-[#00009D] group-hover:bg-[#FFEAC1] rounded-xl"></span>
                                        </div>
                                        <p className="text-[#00009D] font-josefin text-sm group-hover:text-white">Code -{product.code}</p>
                                        <p className="py-2 text-[#00009D] font-josefin text-sm group-hover:text-white">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default ProductCart;
