import React from 'react';
import footerLogo from '../../assets/logo.png';

const Footer = () => {
  return (
    <section className="py-12 bg-[#EEEFFB]">
      <div className="max-w-container mx-auto">
        <div className="flex flex-wrap justify-between gap-8 lg:gap-0 px-4 lg:px-0">
          <div className="w-full sm:w-[45%] lg:w-[35%]">
            <img src={footerLogo} alt="Company Logo" />
            <div className="mt-6 flex items-center">
              <input
                className="flex w-[220px] h-10 outline-none bg-white text-[#8A8FB9] text-base px-3 rounded-md"
                type="email"
                placeholder="Enter Email Address"
              />
              <button className="rounded-md bg-secondCommon py-2 px-4 text-white font-medium">
                Sign Up
              </button>
            </div>
            <div className="mt-3 text-[#8A8FB9] text-base">
              <p>Contact Info:</p>
              <p>+88 017040-37578</p>
              <p>17 Princess Road, London, NW1 8JR, UK</p>
            </div>
          </div>
          <div className="w-[45%] sm:w-[30%] lg:w-[20%]">
            <h3 className="font-josefin text-2xl font-bold">Categories</h3>
            <ul className="mt-5 space-y-2 text-[#8A8FB9]">
              <li><a href="#">Laptops & Computers</a></li>
              <li><a href="#">Cameras & Photography</a></li>
              <li><a href="#">Smart Phones & Tablets</a></li>
              <li><a href="#">Video Games & Consoles</a></li>
              <li><a href="#">Waterproof Headphones</a></li>
            </ul>
          </div>
          <div className="w-[45%] sm:w-[30%] lg:w-[20%]">
            <h3 className="font-josefin text-2xl font-bold">Customer Care</h3>
            <ul className="mt-5 space-y-2 text-[#8A8FB9]">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Discount</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Orders History</a></li>
              <li><a href="#">Order Tracking</a></li>
            </ul>
          </div>
          <div className="w-[45%] sm:w-[30%] lg:w-[20%]">
            <h3 className="font-josefin text-2xl font-bold">Pages</h3>
            <ul className="mt-5 space-y-2 text-[#8A8FB9]">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Browse the Shop</a></li>
              <li><a href="#">Category</a></li>
              <li><a href="#">Pre-Built Pages</a></li>
              <li><a href="#">Visual Composer Elements</a></li>
              <li><a href="#">WooCommerce Pages</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
