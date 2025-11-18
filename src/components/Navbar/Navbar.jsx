import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { IoClose, IoMenu, IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import useDebounce from "./useDebounce";

const Navbar = () => {
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const wishlistData = useSelector((state) => state.cartSlice.wishlistItems);
  const navigate = useNavigate();
  const [menuShow, setMenuShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const abortControllerRef = useRef(null);
  const debouncedSearch = useDebounce(searchQuery, 500);

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
    setError(null);
  };

  useEffect(() => {
    // Cancel previous request if user is still typing
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    if (!debouncedSearch.trim()) {
      setSuggestions([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const fetchSearch = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(debouncedSearch)}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setSuggestions(data.products || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Search API Error:", error);
          setError("Failed to load search results");
          setSuggestions([]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearch();

    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [debouncedSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    const term = searchQuery.trim();

    setSearchQuery("");
    setSuggestions([]);
    setError(null);

    navigate(`/ShopList/${encodeURIComponent(term)}`);
  };

  const handleSuggestionClick = (item) => {
    setSearchQuery("");
    setSuggestions([]);
    navigate(`/ShopList/${item.id}`);
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
                className="hidden md:flex items-center relative"
              >
                <input
                  value={searchQuery}
                  onChange={handleInput}
                  className="border-2 border-gray-200 w-[400px] h-10 px-3 outline-none focus:border-secondCommon transition-colors"
                  type="search"
                  placeholder="Search products..."
                  autoComplete="off"
                />

                {(searchQuery.length > 0) && (
                  <div className="absolute w-full h-auto max-h-[400px] overflow-y-auto z-20 top-10 left-0 bg-white shadow-lg rounded-md border border-gray-200">
                    {isLoading ? (
                      <div className="p-4 text-center text-gray-500">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-secondCommon rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-secondCommon rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-secondCommon rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                        <p className="mt-2 text-sm">Searching...</p>
                      </div>
                    ) : error ? (
                      <div className="p-4 text-center text-red-500 text-sm">
                        {error}
                      </div>
                    ) : suggestions.length > 0 ? (
                      suggestions.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleSuggestionClick(item)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                        >
                          <img
                            className="w-10 h-10 object-cover rounded border border-gray-200"
                            src={item.thumbnail}
                            alt={item.title}
                            loading="lazy"
                          />
                          <div className="flex-1 text-left">
                            <h5 className="text-sm font-medium text-gray-800 truncate">
                              {item.title}
                            </h5>
                            <p className="text-xs text-gray-500">
                              ${item.price}
                            </p>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500 text-sm">
                        No products found
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-secondCommon hover:bg-opacity-90 p-[10px] transition-all duration-200 transform hover:scale-105"
                  title="Search"
                >
                  <IoSearch className="text-white text-xl" />
                </button>
              </form>
            </div>
          </div>

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
            <div className="relative flex items-center justify-center mx-auto mt-2 w-full">
              <form onSubmit={handleSubmit} className="flex items-center w-full gap-2">
                <input
                  value={searchQuery}
                  onChange={handleInput}
                  className="border-2 border-gray-200 flex-1 h-10 px-3 outline-none focus:border-secondCommon transition-colors"
                  type="search"
                  placeholder="Search products..."
                  autoComplete="off"
                />
                <button type="submit" className="bg-secondCommon hover:bg-opacity-90 p-[10px] transition-all">
                  <IoSearch className="text-white text-xl" />
                </button>
              </form>

              {/* Mobile Dropdown */}
              {searchQuery.length > 0 && (
                <div className="absolute w-full z-20 top-12 left-0 bg-white shadow-lg rounded-md border border-gray-200 max-h-[300px] overflow-y-auto">
                  {isLoading ? (
                    <div className="p-4 text-center text-gray-500">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-secondCommon rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-secondCommon rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-secondCommon rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                      <p className="mt-2 text-sm">Searching...</p>
                    </div>
                  ) : error ? (
                    <div className="p-4 text-center text-red-500 text-sm">
                      {error}
                    </div>
                  ) : suggestions.length > 0 ? (
                    suggestions.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSuggestionClick(item)}
                        className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                      >
                        <img
                          className="w-10 h-10 object-cover rounded border border-gray-200"
                          src={item.thumbnail}
                          alt={item.title}
                          loading="lazy"
                        />
                        <div className="flex-1 text-left">
                          <h5 className="text-sm font-medium text-gray-800 truncate">
                            {item.title}
                          </h5>
                          <p className="text-xs text-gray-500">
                            ${item.price}
                          </p>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-500 text-sm">
                      No products found
                    </div>
                  )}
                </div>
              )}
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
