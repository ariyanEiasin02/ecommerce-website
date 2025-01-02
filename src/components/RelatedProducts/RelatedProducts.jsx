import React, { useContext } from 'react'
import { apiData } from '../ContextApi/ContextApi'
import { FaStar } from 'react-icons/fa'

const RelatedProducts = () => {
    const relateData = useContext(apiData)
    const dataInfoOffer = relateData.filter((item) => item.id >= 10 && item.id <= 13);
  return (
    <section className='py-16 md:px-0 px-4'>
        <div className="max-w-container mx-auto">
            <h2 className='font-josefin font-bold text-4xl text-primary'>Related Products</h2>
            <div className="mt-7 md:flex justify-between">
                {
                    dataInfoOffer.map((item)=>(
                        <div className="md:w-[23%] w-full mt-5 md:mt-0">
                    <div className="bg-[#F6F7FB] rounded-lg">
                    <img src={item.thumbnail} alt="thumbnail" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h3 className='py-2 font-josefin font-semibold text-primary text-[16px]'>{item.title}</h3>
                        </div>
                        <div className="">
                            <ul className='flex gap-2'>
                                <li className='text-[#FFC416]'><FaStar/></li>
                                <li className='text-[#FFC416]'><FaStar/></li>
                                <li className='text-[#FFC416]'><FaStar/></li>
                                <li className='text-[#FFC416]'><FaStar/></li>
                                <li className='text-[#B2B2B2]'><FaStar/></li>
                            </ul>
                        </div>
                    </div>
                    <p className='font-josefin font-semibold text-sm text-primary'>$43.00</p>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts