import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { IoClose, IoMenu, IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import useDebounce from "./useDebounce";

const Navbar = () => {
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const wishlistData = useSelector((state) => state.cartSlice.wishlistItems);
  const navigatie = useNavigate();
  const [menuShow, setMenuShow] = useState(false);

  // 🔍 Search States
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [suggestions, setSuggestions] = useState([]);

  // 🔍 Input handler
  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (!debouncedSearch) {
      setSuggestions([]);
      return;
    }

    const fetchSearch = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedSearch}`
        );
        const data = await res.json();
        setSuggestions(data.products || []);
      } catch (error) {
        console.error("Search API Error:", error);
      }
    };

    fetchSearch();
  }, [debouncedSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    const term = searchQuery;

    setSearchQuery("");
    setSuggestions([]);

    navigatie(`/ShopList/${term}`);
  };

  return (
    <>
      <nav className="bg-white py-4 shadow-md">
        <div className="max-w-container mx-auto px-4 md:px-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-4 md:gap-x-24">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <ul className="hidden md:flex gap-x-6 font-lato text-base text-primary">
              <Link to="/">
                <li className="hover:text-secondCommon cursor-pointer">Home</li>
              </Link>
              <Link to="/Home/About">
                <li className="hover:text-secondCommon cursor-pointer">
                  About Us
                </li>
              </Link>
              <Link to="/Home/Blog">
                <li className="hover:text-secondCommon cursor-pointer">Blog</li>
              </Link>
              <Link to="/Home/ShopGrid">
                <li className="hover:text-secondCommon cursor-pointer">Shop</li>
              </Link>
              <Link to="/Home/Contact">
                <li className="hover:text-secondCommon cursor-pointer">
                  Contact
                </li>
              </Link>
              <Link to="/Home/Faq/">
                <li className="hover:text-secondCommon cursor-pointer">FAQ</li>
              </Link>
            </ul>
            <div className="relative flex items-center gap-x-4">
              <form
                onSubmit={handleSubmit}
                className="hidden md:flex items-center"
              >
                <input
                  value={searchQuery}
                  onChange={handleInput}
                  className="border-2 border-gray-200 w-[400px] h-10 px-3 outline-none"
                  type="search"
                  placeholder="Search products..."
                />

                {/* Dropdown */}
                {suggestions.length > 0 && (
                  <div className="absolute w-full h-[400px] overflow-y-scroll z-20 top-10 left-0 bg-white shadow-md rounded-md">
                    {suggestions.map((item) => (
                      <Link key={item.id} to={`/ShopList/${item.id}`}>
                        <div className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer">
                          <img
                            className="w-10 h-10 object-cover rounded border"
                            src={item.thumbnail}
                            alt={item.title}
                          />
                          <h5 className="text-sm font-medium">{item.title}</h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                <button type="submit" className="bg-secondCommon p-[10px]">
                  <IoSearch className="text-white text-xl" />
                </button>
              </form>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`md:hidden flex flex-col items-start bg-white shadow-lg absolute left-0 w-full px-4 py-4 gap-y-4 transition-all z-10 ${
              menuShow ? "top-[60px]" : "top-[60px] left-[-800px]"
            }`}
          >
            {/* Mobile Menu Links */}
            <ul className="flex flex-col gap-y-4 font-lato text-base text-primary w-full text-center">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/Home/About">
                <li>About Us</li>
              </Link>
              <Link to="/Home/Blog">
                <li>Blog</li>
              </Link>
              <Link to="/Home/ShopGrid">
                <li>Shop</li>
              </Link>
              <Link to="/Home/Contact">
                <li>Contact</li>
              </Link>
              <Link to="/Home/Faq/">
                <li>FAQ</li>
              </Link>
            </ul>

            {/* Mobile Search */}
            <div className="relative flex items-center justify-center mx-auto mt-2">
              <input
                onChange={handleInput}
                className="border-2 border-gray-200 w-[300px] h-10 px-3 outline-none"
                type="search"
                placeholder="Search products..."
              />

              {/* Dropdown */}
              {suggestions.length > 0 && (
                <div className="absolute w-full z-20 top-10 left-0 bg-white shadow-md rounded-md">
                  {suggestions.map((item) => (
                    <Link key={item.id} to={`/ShopList/${item.id}`}>
                      <div className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer">
                        <img
                          className="w-10 h-10 object-cover rounded border"
                          src={item.thumbnail}
                          alt={item.title}
                        />
                        <h5 className="text-sm font-medium">{item.title}</h5>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              <button className="bg-secondCommon p-[10px]">
                <IoSearch className="text-white text-xl" />
              </button>
            </div>

            {/* Icons */}
            <div className="flex justify-between items-center mt-4 w-full">
              <Link to="/Login">
                <button className="flex items-center text-[18px] font-semibold">
                  <FaUser className="mr-1" />
                  Login
                </button>
              </Link>

              <Link to="/Wishlist/">
                <button className="relative flex items-center text-[18px] font-semibold">
                  <FaHeart className="mr-1" />
                  Wishlist
                  <p className="absolute -top-2 left-2 text-white text-[14px] w-5 h-5 bg-primary rounded-full font-bold flex justify-center items-center">
                    {wishlistData.length}
                  </p>
                </button>
              </Link>

              <Link to="/Home/shop/">
                <button className="relative flex items-center text-[18px] font-semibold">
                  <FaShoppingCart className="mr-1" />
                  Shop
                  <p className="absolute -top-2 left-2 text-white text-[14px] w-5 h-5 bg-secondCommon rounded-full font-bold flex justify-center items-center">
                    {cartData.length}
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
