import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { IoClose, IoMenu, IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuShow, setMenuShow] = useState(false);

    return (
        <>
            <nav className="bg-white py-4 shadow-md">
                <div className="max-w-container mx-auto px-4 md:px-0">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-4 md:gap-x-24">
                            <img src={logo} alt="Logo" className="" />
                            <ul className={`hidden md:flex gap-x-6 font-lato font-normal text-base text-primary`}>
                                <Link to='/'>
                                <li className="hover:text-secondCommon cursor-pointer">Home</li>
                                </Link>
                                <li className="hover:text-secondCommon cursor-pointer">Pages</li>
                                <li className="hover:text-secondCommon cursor-pointer">Products</li>
                                <li className="hover:text-secondCommon cursor-pointer">Blog</li>
                               <Link to='/Home/ShopList'>
                               <li className="hover:text-secondCommon cursor-pointer">Shop</li>
                               </Link>
                                <li className="hover:text-secondCommon cursor-pointer">Contact</li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div className="hidden md:flex items-center">
                            <input
                                    className="border-2 border-gray-200 w-[300px] h-10 outline-none text-primary font-lato px-3"
                                    type="search"
                                    placeholder="Search"
                                />
                                <button className="bg-secondCommon p-[10px]">
                                    <IoSearch className="text-white font-semibold text-xl" />
                                </button>
                            </div>
                            <button
                                className="text-3xl md:hidden"
                                onClick={() => setMenuShow(!menuShow)}
                            >
                                {menuShow ? <IoClose /> : <IoMenu />}
                            </button>
                        </div>
                    </div>
                    <div
                        className={`md:hidden flex flex-col items-start bg-white shadow-lg absolute left-0 w-full px-4 py-4 gap-y-4 transition-all z-10 ${
                            menuShow ? 'top-[60px] duration-700 ease-in-out' : 'top-[60px] left-[-800px] duration-700 ease-in-out'
                        }`}
                    >
                        <ul className="flex flex-col gap-y-4 font-lato font-normal text-base text-primary w-full text-center">
                            <Link to="/">
                            <li className="hover:text-secondCommon cursor-pointer">Home</li>
                            </Link>
                            <li className="hover:text-secondCommon cursor-pointer">Pages</li>
                            <li className="hover:text-secondCommon cursor-pointer">Products</li>
                            <li className="hover:text-secondCommon cursor-pointer">Blog</li>
                            <Link to='/Home/ShopList'>
                            <li className="hover:text-secondCommon cursor-pointer">Shop</li>
                            </Link>
                            <li className="hover:text-secondCommon cursor-pointer">Contact</li>
                        </ul>
                        <div className="flex items-center justify-center mx-auto mt-2">
                                <input
                                    className="border-2 border-gray-200 w-[200px] h-10 outline-none text-primary font-lato px-3"
                                    type="search"
                                    placeholder="Search"
                                />
                                <button className="bg-secondCommon p-[10px]">
                                    <IoSearch className="text-white font-semibold text-xl" />
                                </button>
                            </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
