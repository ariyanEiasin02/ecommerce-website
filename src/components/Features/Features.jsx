import React from 'react'
import features from '../../assets/features.png'
const Features = () => {
    return (
        <>
            <section className='py-12 bg-[#F1F0FF]'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex items-center px-4 md:px-0">
                        <div className="md:w-[45%]">
                            <img className='w-full' src={features} alt="" />
                        </div>
                        <div className="md:w-[55%]">
                            <h2 className="font-josefin text-primary text-2xl md:text-5xl">Unique Features Of leatest &
                                Trending Poducts</h2>
                            <div className="flex items-center mt-4">
                                <div className="">
                                <div className='w-3 h-3 bg-[#F52B70] rounded-full'></div>
                                </div>
                                <div className="pl-2">
                                    <p className='font-lato font-medium text-base text-[#ACABC3]'>All frames constructed with hardwood solids and laminates</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-2">
                                <div className="">
                                <div className='w-3 h-3 bg-[#2B2BF5] rounded-full'></div>
                                </div>
                                <div className="pl-2">
                                    <p className='font-lato font-medium text-base text-[#ACABC3]'>Reinforced with double wood dowels, glue, screw - nails corner
                                        blocks and machine nails</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-2">
                                <div className="">
                                <div className='w-3 h-3 bg-[#2BF5CC] rounded-full'></div>
                                </div>
                                <div className="pl-2">
                                    <p className='font-lato font-medium text-base text-[#ACABC3]'>Arms, backs and seats are structurally reinforced</p>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center">
                                <div className="">
                                    <button className="bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="ml-4">
                                    <p className='font-josefin text-sm font-medium text-primary'>B&B Italian Sofa </p>
                                    <p className='font-josefin text-sm font-medium text-primary'>$32.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features