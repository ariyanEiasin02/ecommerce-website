import React from 'react'
import Vector from '../../assets/Vector.png'
import checklist from '../../assets/checklist.png'
import clock from '../../assets/clock.png'
import { Link } from 'react-router-dom'
const OrderCompleted = () => {
    return (
        <section className="py-16 flex flex-col items-center justify-center bg-gray-50">
            <div className="max-w-container mx-auto">
                <div className="max-w-lg lg:max-w-2xl text-center mx-auto">
                    <div className="mb-6 bg-[#F6F7FA] w-20 h-20 rounded-full flex justify-center items-center mx-auto">
                        <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                            <img src={Vector} alt="Order Completed Icon" />
                        </div>
                    </div>
                    <h1 className="font-josefin text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
                        Your Order Is Completed!
                    </h1>
                    <p className="font-lato font-semibold text-sm sm:text-base text-[#8D92A7] mb-6">
                        Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.
                    </p>
                    <Link to="/Home/ShopGrid">
                        <button
                            type="submit"
                            className="mt-4 bg-secondCommon text-white py-3 px-6 rounded-md font-josefin text-sm sm:text-base lg:text-lg font-bold"
                        >
                            Continue to Shipping
                        </button>
                    </Link>
                </div>
                <div className="md:block hidden mt-16 relative">
                    <div className="w-[800px] border-b-2 border-dotted mx-auto relative">
                        <div className="absolute -top-10 -right-4">
                            <img src={checklist} alt="" />
                        </div>
                    </div>
                    <div className="absolute -top-[300px] left-0">
                        <div className="h-[300px] border-l-2 border-dotted mx-auto relative">
                            <div className="-ml-[45px]">
                                <img src={clock} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OrderCompleted