import React, { useContext, useState } from 'react'

import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { apiData } from '../ContextApi/ContextApi';

const ShopCard = () => {
    const DetailsApiData = useContext(apiData)
    const product = useParams()
   let dataProduct= DetailsApiData.filter((item)=> item.id == product.id)

    return (
        <>
            <div className="max-w-container mx-auto md:py-20 py-10 ">

                <div >

                    {dataProduct.map((item)=>(
                        <div className="mt-5 md:flex md:border   gap-10 p-2 shadow-lg ">
                            <div className="  flex gap-4">
                        <div className=" rounded-sm  w-[100px] flex flex-col gap-2 ">
                            {item.images.map((itemimg) => (
                                <img className='  w-full  bg-[#ebebf0] ' src={itemimg} alt="" />
                            ))}
                        </div>
                        <div className="md:w-[300px] w-[250px]  rounded-sm border-red-600">
                           
                                <img className='bg-[#ebebf0] h-full ' src={item.thumbnail} alt="" />
                           
                        </div>
                    </div>

                    <div className="pt-5 md:pt-0">
                        <h3 className='text-2xl font-bold font-josefin '>{item.title}</h3>
                        <div className="flex items-center gap-5">
                            <div className="flex text-yellow-400">
                                <p><IoIosStar /></p>
                                <p><IoIosStar /></p>
                                <p><IoIosStar /></p>
                                <p><IoIosStar /></p>
                                <p><IoIosStar /></p>
                            </div>
                            <p> (22) </p>
                        </div>
                        <p className='font-bold mt-2'>${item.price}<span className='text-red-500 pl-5 line-through '>${item.discountPercentage }</span> </p>
                        <p className='font-bold mt-2'>Color</p>
                        <p className='text-[#8f8f97] md:text-[16px] text-[14px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus <br /> porttitor purus, et volutpat sit.</p>
                        <h5 className='flex gap-5 font-bold items-center mt-5 font-josefin '>Add To Cart <FaRegHeart /></h5>
                        <p className=' font-josefin mt-3  '><span className='font-bold'>Categories :</span>  {item.category}</p>
                        <p className=' font-josefin mt-2'><span className='font-bold'>Tags :</span>  {item.tags} </p>
                        <div className="flex gap-5 items-center mt-2">
                            <p className=' font-josefin'>Share</p>
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
        </>
    )
}

export default ShopCard