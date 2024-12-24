import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decrement, deleteProduct, increment } from '../slice/cartSlice';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductShop = () => {
    const cartData = useSelector((state) => state.cartSlice.cartItems)

    const dispatch = useDispatch()
    const [handleDelete, setHandleDelete] = useState(false)
    const [handleClear, setHandleClear] = useState(false)

    const handleDeleteShow = (id) => {
        if (handleDelete === id) {
            setHandleDelete(null);
          } else {
            setHandleDelete(id);
          }
    }
    const hendleClearCartShow = () => {
        setHandleClear(!handleClear)
    }
    const hendleIncriment = (item) => {
        dispatch(increment(item));
    }
    const hendleDecriment = (item) => {
        dispatch(decrement(item));
    }

    const hendleFromProduct = (index) => {
        dispatch(deleteProduct(index))
    }
    const hendleClearCart = () => {
        dispatch(clearCart())
    }

    let { totalPrice, totalQuantity } = cartData.reduce((acc, current) => {
        acc.totalPrice += (current.price * current.qty);
        acc.totalQuantity += current.qty;
        return acc
    }, { totalPrice: 0, totalQuantity: 0 })
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
                            {
                                cartData.length > 0 ?
                                    cartData.map((item, index) => (
                                        <div key={item.id} className="mt-5 grid grid-cols-4 gap-4 items-center border-b pb-4 relative">
                                            <div className="flex items-start gap-3">
                                                <div className="relative flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md">
                                                    <img src={item.thumbnail} alt="" />
                                                    <div
                                                        onClick={() => handleDeleteShow(item.id)}
                                                        className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#000000]  text-white flex items-center justify-center p-[2px]">
                                                        <IoMdClose />
                                                    </div>

                                                </div>
                                                <div>
                                                    <h4 className="text-[#000000] font-josefin text-base font-medium w-48" title="Ut diam consequat">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-sm text-[#A1A8C1] font-josefin font-normal">Color: <span className="text-sm text-[#A1A8C1] font-josefin font-normal">Brown</span></p>
                                                    <p className="text-sm text-[#A1A8C1] font-josefin font-normal">Size: <span className="text-sm text-[#A1A8C1] font-josefin font-normal">XL</span></p>
                                                </div>
                                            </div>
                                            <div className="text-base text-primary text-center font-josefin font-normal">
                                                ${item.price}
                                            </div>
                                            <div className="flex items-center gap-2 border rounded-md bg-gray-100 w-24 h-8 justify-between mx-auto">
                                                <button
                                                    onClick={() => hendleDecriment(index)}
                                                    className="text-gray-600 bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition-all"
                                                    aria-label="Decrease Quantity"
                                                >
                                                    <FaMinus />
                                                </button>
                                                <span className="bg-white text-gray-800 w-10 h-full flex justify-center items-center font-medium">
                                                    {item.qty}
                                                </span>
                                                <button
                                                    onClick={() => hendleIncriment(index)}
                                                    className="text-gray-600 bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition-all"
                                                    aria-label="Increase Quantity"
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>

                                            <div className="text-base text-primary text-right font-josefin font-normal">
                                                ${(item.qty * item.price).toFixed(2)}
                                            </div>
                                            {
                                                handleDelete === item.id &&
                                                <div className="absolute -top-10 left-0 flex flex-col items-center bg-white border border-gray-200 shadow-md p-6 rounded-lg max-w-sm mx-auto">
                                                    <h3 className="font-josefin font-semibold text-[18px] text-primary pb-3">Are you sure you want to delete this?</h3>
                                                    <div className="flex gap-4 mt-2">
                                                        <button
                                                            onClick={() => hendleFromProduct(index)}
                                                            className="rounded-lg bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                                                        >
                                                            Yes
                                                        </button>
                                                        <button
                                                            onClick={handleDeleteShow}
                                                            className="w-full rounded-lg bg-primary py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                                                        >
                                                            No
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    ))
                                    :
                                    <div className="text-center my-6">
                                        <Link to="/Home/ShopGrid">
                                            <button
                                                className="rounded-lg bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                                            >
                                                Please Go To Shop
                                            </button>
                                        </Link>
                                    </div>
                            }
                            <div className="mt-5 flex justify-between">
                                <div className="">
                                    <button className="bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                        Update Curt
                                    </button>
                                </div>
                                {
                                    cartData.length > 0 &&
                                    <div className="relative">
                                        <button onClick={hendleClearCartShow} className="bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                                            Clear Curt
                                        </button>
                                        {
                                            handleClear &&
                                            <div className="absolute -top-16 -left-48 w-[350px] flex flex-col items-center bg-white border border-gray-200 shadow-md p-6 rounded-lg max-w-sm mx-auto">
                                                <h3 className="font-josefin font-semibold text-[18px] text-primary pb-3">Are you sure you want to delete this?</h3>
                                                <div className="flex gap-4 mt-2">
                                                    <button
                                                        onClick={hendleClearCart}
                                                        className="rounded-lg bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                                                    >
                                                        Yes
                                                    </button>
                                                    <button
                                                        onClick={hendleClearCartShow}
                                                        className="w-full rounded-lg bg-primary py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                                                    >
                                                        No
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="md:mt-0 mt-5 md:w-[28%] w-full">
                            <div className="">
                                <h3 className="font-josefin font-semibold text-[20px] text-primary mb-4 text-center">Cart Totals</h3>

                                <div className="bg-[#F4F4FC] py-6 px-4 rounded-md">
                                    <div className="flex justify-between items-center border-b pb-3 mb-3">
                                        <span className="font-lato font-semibold text-[18px] text-primary">Totals Items:</span>
                                        <span className="font-lato font-normal text-base text-primary">{totalQuantity}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-3 mb-3">
                                        <span className="font-lato font-semibold text-[18px] text-primary">Subtotals:</span>
                                        <span className="font-lato font-normal text-base text-primary">£219.00</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-3 mb-3">
                                        <span className="font-lato font-semibold text-[18px] text-primary">Totals:</span>
                                        <span className="font-lato font-normal text-base text-primary">${totalPrice.toFixed(2)}</span>
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