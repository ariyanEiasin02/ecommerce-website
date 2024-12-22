import React from 'react'

const ProductShop = () => {
    return (
        <>
            <section className='py-16 bg-white'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex justify-between md:px-0 px-4">
                        <div className="md:w-[68%] w-full">
                            <div className="grid grid-cols-4 gap-4 items-center pb-2 mb-2">
                                <h3 className="font-josefin font-semibold text-[20px] text-primary">Product</h3>
                                <h3 className="font-josefin font-semibold text-[20px] text-primary text-center">Price</h3>
                                <h3 className="font-josefin font-semibold text-[20px] text-primary text-center">Quantity</h3>
                                <h3 className="font-josefin font-semibold text-[20px] text-primary text-right">Total</h3>
                            </div>
                            <div className="grid grid-cols-4 gap-4 items-center border-b pb-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md"></div>
                                    <div>
                                        <h4 className="text-[#000000] font-josefin text-base font-medium w-48" title="Ut diam consequat">
                                            Ut diam consequat
                                        </h4>
                                        <p className="text-sm text-[#A1A8C1] font-josefin font-normal">Color: <span className="text-sm text-[#A1A8C1] font-josefin font-normal">Brown</span></p>
                                        <p className="text-sm text-[#A1A8C1] font-josefin font-normal">Size: <span className="text-sm text-[#A1A8C1] font-josefin font-normal">XL</span></p>
                                    </div>
                                </div>
                                <div className="text-base text-primary text-center font-josefin font-normal">
                                    $32.00
                                </div>
                                <div className="text-center">
                                    <input
                                        type="number"
                                        className="w-16
                                            border-2 outline-none border-gray-300 rounded-md text-center"
                                        value="1"
                                        min="1"
                                    />
                                </div>
                                <div className="text-base text-primary text-right font-josefin font-normal">
                                    $239.00
                                </div>
                            </div>
                            <div className="mt-5 grid grid-cols-4 gap-4 items-center border-b pb-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md"></div>
                                    <div>
                                        <h4 className="text-[#000000] font-josefin text-base font-medium w-48" title="Ut diam consequat">
                                            Ut diam consequat
                                        </h4>
                                        <p className="text-sm text-[#A1A8C1] font-josefin font-normal">Color: <span className="text-sm text-[#A1A8C1] font-josefin font-normal">Brown</span></p>
                                        <p className="text-sm text-[#A1A8C1] font-josefin font-normal">Size: <span className="text-sm text-[#A1A8C1] font-josefin font-normal">XL</span></p>
                                    </div>
                                </div>
                                <div className="text-base text-primary text-center font-josefin font-normal">
                                    $32.00
                                </div>
                                <div className="text-center">
                                    <input
                                        type="number"
                                        className="w-16
                                            border-2 outline-none border-gray-300 rounded-md text-center"
                                        value="1"
                                        min="1"
                                    />
                                </div>
                                <div className="text-base text-primary text-right font-josefin font-normal">
                                    $239.00
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between">
                                <button className="bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                    Update Curt
                                </button>
                                <button className="bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                    Clear Curt
                                </button>
                            </div>
                        </div>

                        <div className="md:mt-0 mt-5 md:w-[28%] w-full">
                            <div className="">
                                <h3 className="font-josefin font-semibold text-[20px] text-primary mb-4 text-center">Cart Totals</h3>

                                <div className="bg-[#F4F4FC] py-6 px-4 rounded-md">
                                    <div className="flex justify-between items-center border-b pb-3 mb-3">
                                        <span className="font-lato font-semibold text-[18px] text-primary">Totals Items:</span>
                                        <span className="font-lato font-normal text-base text-primary">5P</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-3 mb-3">
                                        <span className="font-lato font-semibold text-[18px] text-primary">Subtotals:</span>
                                        <span className="font-lato font-normal text-base text-primary">£219.00</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-3 mb-3">
                                        <span className="font-lato font-semibold text-[18px] text-primary">Totals:</span>
                                        <span className="font-lato font-normal text-base text-primary">£325.00</span>
                                    </div>
                                    <p className="text-[14px] text-[#8A91AB] mb-4">
                                        Shipping & taxes calculated at checkout.
                                    </p>
                                    <button
                                        className="font-lato text-base w-full px-4 py-2 bg-[#19D16F] text-white font-medium text-center rounded-md hover:opacity-80 transition"
                                    >
                                        Proceed To Checkout
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="font-josefin font-semibold text-[20px] text-primary mb-4 text-center">Calculate Shipping</h3>
                                <div className="bg-[#F4F4FC] py-6 px-4 rounded-md">
                                    <div className="mb-5">
                                        <select
                                            id="country"
                                            className="bg-transparent w-full py-1 border-b-2 border-[#C7CEE4] outline-none text-primary font-josefin text-base"
                                        >
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                        </select>
                                    </div>
                                    <div className="mb-5">
                                        <input
                                            type="text"
                                            id="city"
                                            placeholder="Mirpur Dhaka - 1200"
                                            className="bg-transparent w-full py-1 border-b-2 border-[#C7CEE4] outline-none text-primary font-josefin text-base"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            id="postal-code"
                                            placeholder="1200"
                                            className="bg-transparent w-full py-2 border-b-2 border-[#C7CEE4] outline-none text-primary font-josefin text-base"
                                        />
                                    </div>
                                    <button
                                        className="w-2/3 px-4 py-2 bg-secondCommon text-white  text-center rounded-md font-lato font-medium text-base"
                                    >
                                        Calculate Shipping
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductShop