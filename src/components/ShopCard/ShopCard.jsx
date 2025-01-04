import React, { useContext, useState } from 'react'

import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { apiData } from '../ContextApi/ContextApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/cartSlice';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const ShopCard = () => {
    const dispatch = useDispatch()
    const DetailsApiData = useContext(apiData)
    const product = useParams()
    const dataProduct = DetailsApiData.filter((item) => item.id == product.id)
    const [thumbnail, setThumbnail] = useState(dataProduct.thumbnail);

    const handleThumbnail = (itemimg) => {
        setThumbnail(itemimg)
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, qty: 1 }))
        toast.success("Add to Cart Success!")
    }
    return (
        <section className='py-16'>
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
                <div className='px-4 md:px-0' >
                    {dataProduct.map((item,index) => (
                        <div key={index} className="md:flex items-center shadow-[#F6F4FD]  gap-10 py-8 px-2 shadow-2xl ">
                            <div className="flex gap-4">
                                <div className="rounded-sm  w-[100px] flex flex-col gap-2 ">
                                    {item.images.map((itemimg, index) => (
                                        <img
                                            key={index}
                                            className='w-full  bg-[#ebebf0] ' src={itemimg} alt={`Thumbnail ${index + 1}`}
                                            onClick={() => handleThumbnail(itemimg)} />
                                    ))}
                                </div>
                                <div className="md:w-[300px] w-[250px] h-[350px] border-2 overflow-hidden cursor-pointer rounded-sm flex justify-center items-center">

                                    {
                                        thumbnail &&
                                        <InnerImageZoom
                                        src={thumbnail}
                                        zoomSrc={thumbnail}
                                        className="w-full h-full"
                                        zoomType="hover"
                                        zoomScale={1.2}
                                        fadeDuration={200}
                                    />
                                    }
                                </div>
                            </div>

                            <div className="pt-5 md:pt-0">
                                <h3 className='font-josefin font-semibold text-4xl text-primary'>{item.title}</h3>
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="flex gap-2 text-[#FFC416]">
                                        <p><IoIosStar /></p>
                                        <p><IoIosStar /></p>
                                        <p><IoIosStar /></p>
                                        <p><IoIosStar /></p>
                                        <p><IoIosStar /></p>
                                    </div>
                                    <p className='text-primary text-sm font-josefin font-normal'> (22) </p>
                                </div>
                                <p className='font-josefin text-[18px] font-medium text-primary mt-2'>${item.price}<span className='text-secondCommon pl-2 line-through text-sm'>${item.discountPercentage}</span> </p>
                                <p className='font-josefin font-semibold text-[18px] text-primary mt-2'>Color</p>
                                <p className='font-lato font-normal text-base text-[#A9ACC6] w-[80%]'>{item.description}</p>
                                <button onClick={() => handleAddToCart(item)} className="bg-secondCommon mt-5 py-3 px-8 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all rounded-md mb-2">
                                    Add To Cart
                                </button>
                                <p className='font-josefin font-semibold text-primary text-[18px] py-1'>Categories : <span className='text-base text-[#A9ACC6]'>{item.category}</span></p>
                                <p className='font-josefin font-semibold text-primary text-[18px] py-1'>Tags : <span className='text-base text-[#A9ACC6]'>{item.tags}</span></p>
                                <div className="flex gap-2 items-center">
                                    <p className='font-josefin font-semibold text-primary text-[18px] py-2'>Share:</p>
                                    <div className="flex gap-3">
                                        <p><FaFacebook /></p>
                                        <p><FaInstagramSquare /></p>
                                        <p><AiFillTwitterCircle /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ShopCard