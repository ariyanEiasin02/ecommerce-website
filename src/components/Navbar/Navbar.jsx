import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { IoClose, IoMenu, IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { apiData } from '../ContextApi/ContextApi';

const Navbar = () => {
    const [menuShow, setMenuShow] = useState(false);
    const mainData = useContext(apiData)

    const handleMenu = () => {

        setMenuShow(!menuShow);
    }

    // Search input value...................................
    let [input, setInput] = useState('')
    let [searchFilterProduct, setSearchFilterProduct] = useState([])

    const handleInput = (e) => {
        if (e.target.value !== "") {

            let searchProduct = mainData.filter((item) => item.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
            setSearchFilterProduct(searchProduct);
        } else {
            setSearchFilterProduct([])
        }

    }
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
                                <Link to='/Home/ShopGrid'>
                                    <li className="hover:text-secondCommon cursor-pointer">Shop</li>
                                </Link>
                                <Link to="/Home/Contact">
                                    <li className="hover:text-secondCommon cursor-pointer">Contact</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="relative flex items-center gap-x-4">
                            <div className="hidden md:flex items-center">
                                <input
                                    onChange={handleInput}
                                    className="border-2 border-gray-200 w-[300px] h-10 outline-none text-primary font-lato px-3"
                                    type="search"
                                    placeholder="Search"
                                />
                                <div className="absolute w-full z-20 top-10 left-0 bg-white shadow-md rounded-md">
                                    {searchFilterProduct.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-3 p-2 hover:bg-gray-100 transition-colors cursor-pointer"
                                        >
                                            <img
                                                className="w-10 h-10 object-cover rounded-sm border border-gray-300"
                                                src={item.thumbnail}
                                                alt={item.title}
                                            />
                                            <h5 className="text-sm text-primary font-medium font-lato">
                                                {item.title}
                                            </h5>
                                        </div>
                                    ))}
                                </div>
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
                        className={`md:hidden flex flex-col items-start bg-white shadow-lg absolute left-0 w-full px-4 py-4 gap-y-4 transition-all z-10 ${menuShow ? 'top-[60px] duration-700 ease-in-out' : 'top-[60px] left-[-800px] duration-700 ease-in-out'
                            }`}
                    >
                        <ul className="flex flex-col gap-y-4 font-lato font-normal text-base text-primary w-full text-center">
                            <Link to="/">
                                <li className="hover:text-secondCommon cursor-pointer">Home</li>
                            </Link>
                            <li className="hover:text-secondCommon cursor-pointer">Pages</li>
                            <li className="hover:text-secondCommon cursor-pointer">Products</li>
                            <li className="hover:text-secondCommon cursor-pointer">Blog</li>
                            <Link to='/Home/ShopGrid'>
                                <li className="hover:text-secondCommon cursor-pointer">Shop</li>
                            </Link>
                            <Link to="/Home/Contact">
                                <li className="hover:text-secondCommon cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                        <div className="relative flex items-center justify-center mx-auto mt-2">
                            <input
                                onChange={handleInput}
                                className="border-2 border-gray-200 w-[200px] h-10 outline-none text-primary font-lato px-3"
                                type="search"
                                placeholder="Search"
                            />
                            <div className="absolute w-full z-20 top-10 left-0 bg-white shadow-md rounded-md">
                                    {searchFilterProduct.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-3 p-2 hover:bg-gray-100 transition-colors cursor-pointer"
                                        >
                                            <img
                                                className="w-10 h-10 object-cover rounded-sm border border-gray-300"
                                                src={item.thumbnail}
                                                alt={item.title}
                                            />
                                            <h5 className="text-sm text-primary font-medium font-lato">
                                                {item.title}
                                            </h5>
                                        </div>
                                    ))}
                                </div>
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
