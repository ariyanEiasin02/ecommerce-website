import React, { useState } from 'react'
import {useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getDatabase, push, ref, set } from "firebase/database";
import { Bounce, toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {
    const db = getDatabase();
    const navigate = useNavigate()
    const cartData = useSelector((state) => state.cartSlice.cartItems)
    const [shopingEmail,setShopingEmail] = useState()
    const [shopingEmailError,setShopingEmailError] = useState()
    const [shopingFirstName,setShopingFirstName] = useState()
    const [shopingFirstNameError,setShopingFirstNameError] = useState()
    const [shopingLastName,setShopingLastName] = useState()
    const [shopingLastNameError,setShopingLastNameError] = useState()
    const [street,setStreet] = useState()
    const [streetError,setStreetError] = useState()
    const [apartment,setApartment] = useState()
    const [apartmentError,setApartmentError] = useState()
    const [city,setCity] = useState()
    const [cityError,setCityError] = useState()
    const [postal,setPostal] = useState()
    const [postalError,setPostalError] = useState()
    


    const { totalPrice, totalQuantity } = cartData.reduce((acc, current) => {
        acc.totalPrice += (current.price * current.qty);
        acc.totalQuantity += current.qty;
        return acc
    }, { totalPrice: 0, totalQuantity: 0 })

    const handleEmailShpoing = (e)=>{
        setShopingEmail(e.target.value); 
        setShopingEmailError('')       
    }
    const handleFirstNameShoping = (e)=>{
        setShopingFirstName(e.target.value); 
        setShopingFirstNameError('')       
    }
    const handleLastNameShoping = (e)=>{
        setShopingLastName(e.target.value); 
        setShopingLastNameError('')       
    }
    const handleStreet = (e)=>{
        setStreet(e.target.value); 
        setStreetError('')       
    }
    const handleApartment = (e)=>{
        setApartment(e.target.value); 
        setApartmentError('')       
    }
    const handleCity = (e)=>{
        setCity(e.target.value); 
        setCityError('')       
    }
    const handlePostal = (e)=>{
        setPostal(e.target.value); 
        setPostalError('')       
    }

    const handleShoping = ()=>{
        if(!shopingEmail){
            setShopingEmailError("Enter Your Email or Number")
        }else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(shopingEmail)) {
              setShopingEmailError("Please Enter Your Valid Email")
            }
          }
        if(!shopingFirstName){
            setShopingFirstNameError("Enter Your First Name")
        }
        if(!shopingLastName){
            setShopingLastNameError("Enter Your Last Name")
        }
        if(!street){
            setStreetError("Enter Your street Address")
        }
        if(!apartment){
            setApartmentError("Enter Your Apartment Address")
        }
        if(!city){
            setCityError("Enter Your City")
        }
        if(!postal){
            setPostalError("Enter Your Postal Code")
        }else {
            if (!/^(?=.*[0-9]).{4,4}$/.test(postal)) {
              setPostalError("Please Enter 4 Number")
            }
        }
        if(shopingEmail && shopingFirstName && shopingLastName && street && apartment && city && postal){
            toast.success("Your Order Successful")
            setTimeout(() => {
                navigate("/Home/OderCompelet/")
              },2000)
            set(push(ref(db, 'users/')), {
                shopingEmail: shopingEmail,
                shopingFirstName: shopingFirstName,
                shopingLastName:shopingLastName,
                street:street,
                apartment:apartment,
                city:city,
                postal:postal
              });
        }else{
            toast.warning("Please Fill Up The Form")
        }
        
    }

    return (
        <section className='py-16'>
            <div className="max-w-container mx-auto">
            <ToastContainer
            position="top-center"
            autoClose={5000}
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
                <div className="md:flex justify-between px-4 md:px-0">
                    <div className="md:w-[60%] mx-auto bg-[#F8F8FD]  shadow-md rounded-lg px-6 py-10">
                        <div className="md:flex justify-between">
                            <div className="">
                                <h2 className="font-josefin text-xl font-bold text-primary mb-6">
                                    Contact Information
                                </h2>
                            </div>
                            <div className="">
                                <p className="font-lato font-medium text-base text-[#C1C8E1]">
                                    Already have an account?{' '}
                                    <Link
                                        to="/Login"
                                        className="text-blue-600 hover:underline font-medium"
                                    >
                                        Log in
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <input
                                onChange={handleEmailShpoing}
                                type="email"
                                placeholder="Enter your email or phone"
                                className="w-full bg-transparent border-b-2 border-[#BFC6E0] mt-2 py-2 outline-none font-lato text-base font-medium text-[#C1C8E1]"
                            />
                            <p className="mt-2 font-lato font-normal text-[17px] text-secondCommon">{shopingEmailError}</p>
                        </div>

                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                id="news-offers"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                                htmlFor="news-offers"
                                className="font-medium text-sm text-[#8A91AB] ml-2 font-lato"
                            >
                                Keep me up to date on news and exclusive offers
                            </label>
                        </div>

                        <h3 className="font-josefin text-[18px] font-bold text-primary pt-5">
                            Shipping Address
                        </h3>

                        <form>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <input
                                        onChange={handleFirstNameShoping}
                                        type="text"
                                        placeholder="First name"
                                        className="w-full bg-transparent border-b-2 border-[#BFC6E0] mt-2 py-2 outline-none font-lato text-base font-medium text-[#C1C8E1]"
                                    />
                                    <p className="mt-2 font-lato font-normal text-[17px] text-secondCommon">{shopingFirstNameError}</p>
                                </div>
                                <div>
                                    <input
                                        onChange={handleLastNameShoping}
                                        type="text"
                                        id="last-name"
                                        placeholder="Last name"
                                        className="w-full bg-transparent border-b-2 border-[#BFC6E0] mt-2 py-2 outline-none font-lato text-base font-medium text-[#C1C8E1]"
                                    />
                                    <p className="mt-2 font-lato font-normal text-[17px] text-secondCommon">{shopingLastNameError}</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <input
                                    onChange={handleStreet}
                                    type="text"
                                    id="address"
                                    placeholder="Street address"
                                    className="w-full bg-transparent border-b-2 border-[#BFC6E0] mt-2 py-2 outline-none font-lato text-base font-medium text-[#C1C8E1]"
                                />
                                <p className="mt-2 font-lato font-normal text-[17px] text-secondCommon">{streetError}</p>
                            </div>
                            <div className="mt-4">
                                <input
                                    onChange={handleApartment}
                                    type="text"
                                    placeholder="Apartment or suite"
                                    className="w-full bg-transparent border-b-2 border-[#BFC6E0] mt-2 py-2 outline-none font-lato text-base font-medium text-[#C1C8E1]"
                                />
                                <p className="mt-2 font-lato font-normal text-[17px] text-secondCommon">{apartmentError}</p>
                            </div>
                            <div className="grid gap-4 mt-4 md:grid-cols-2">
                                <div>
                                    <input
                                        onChange={handleCity}
                                        type="text"
                                        placeholder="City"
                                        className="w-full bg-transparent border-b-2 border-[#BFC6E0] mt-2 py-2 outline-none font-lato text-base font-medium text-[#C1C8E1]"
                                    />
                                    <p className="mt-2 font-lato font-normal text-[17px] text-secondCommon">{cityError}</p>
                                </div>
                                <div>
                                    <input
                                        onChange={handlePostal}
                                        type="text"
                                        id="postal-code"
                                        placeholder="Postal Code"
                                        className="w-full bg-transparent border-b-2 border-[#BFC6E0] mt-2 py-2 outline-none font-lato text-base font-medium text-[#C1C8E1]"
                                    />
                                    <p className="mt-2 font-lato font-normal text-[17px] text-secondCommon">{postalError}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <select
                                    className="w-full bg-transparent border-b-2 border-[#BFC6E0] mt-2 py-2 outline-none font-lato text-base font-medium text-[#C1C8E1]"
                                >
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                </select>
                            </div>

                            <div className="mt-8">
                                <div
                                    onClick={handleShoping}
                                    type="submit"
                                    className="bg-secondCommon text-white py-3 px-6 rounded-md font-josefin text-lg font-bold w-64 cursor-pointer"
                                >
                                    Continue to Shipping
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-[35%]">
                        {

                            cartData.map((item, index) => (
                                <div key={item.id} className="mt-5 grid grid-cols-2 gap-4 items-center border-b pb-4 relative">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex-shrink-0 w-20 h-20 bg-gray-200 rounded-md">
                                            <img src={item.thumbnail} alt="" />
                                        </div>
                                        <div>
                                            <h4 className="text-[#000000] font-josefin text-base font-medium w-48" title="Ut diam consequat">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-[#A1A8C1] font-josefin font-normal">Color: <span className="text-sm text-[#A1A8C1] font-josefin font-normal">Brown</span></p>
                                            <p className="text-sm text-[#A1A8C1] font-josefin font-normal">Size: <span className="text-sm text-[#A1A8C1] font-josefin font-normal">XL</span></p>
                                        </div>
                                    </div>
                                    <div className="text-base text-primary text-right font-josefin font-normal">
                                        ${item.price}
                                    </div>
                                </div>
                            ))
                        }

                        <div className="mt-5">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckOut