import React from "react";
import { FiPhone, FiMail, FiMapPin, FiTruck } from "react-icons/fi";

const ContactInformation = () => {
  return (
    <section className="py-14 md:py-20 bg-[#F9F9FF]">
      <div className="max-w-container mx-auto px-4">

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Info Section */}
          <div>
            <h2 className="font-josefin font-bold text-primary text-3xl md:text-4xl">
              Information About Us
            </h2>

            <p className="py-4 font-lato font-medium text-[#8A8FB9] text-sm md:text-base leading-relaxed">
              We are committed to offering you a seamless shopping experience.  
              Our mission is to provide high-quality products and exceptional  
              customer service — ensuring you receive the best at every step.
            </p>

            <div className="mt-6 flex gap-4">
              <div className="w-6 h-6 bg-[#5625DF] rounded-full"></div>
              <div className="w-6 h-6 bg-secondCommon rounded-full"></div>
              <div className="w-6 h-6 bg-[#37DAF3] rounded-full"></div>
            </div>
          </div>

          {/* Right Contact Cards */}
          <div>
            <h2 className="font-josefin font-bold text-primary text-3xl md:text-4xl">
              Contact Ways
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Card 1 */}
              <div className="flex items-start gap-3 bg-white shadow-md rounded-xl p-5">
                <div className="w-10 h-10 bg-[#5726DF] rounded-full flex items-center justify-center text-white">
                  <FiPhone />
                </div>
                <div>
                  <p className="font-lato text-sm text-[#8A8FB9] font-semibold">Tel: 877-67-88-99</p>
                  <p className="font-lato text-sm text-[#8A8FB9]">E-Mail: shop@store.com</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-3 bg-white shadow-md rounded-xl p-5">
                <div className="w-10 h-10 bg-[#FB2E86] rounded-full flex items-center justify-center text-white">
                  <FiMail />
                </div>
                <div>
                  <p className="font-lato text-sm text-[#8A8FB9] font-semibold">Support Forum</p>
                  <p className="font-lato text-sm text-[#8A8FB9]">Reply within 24 hours</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-3 bg-white shadow-md rounded-xl p-5">
                <div className="w-10 h-10 bg-[#FFB265] rounded-full flex items-center justify-center text-white">
                  <FiMapPin />
                </div>
                <div>
                  <p className="font-lato text-sm text-[#8A8FB9] font-semibold">20 Margaret St, London</p>
                  <p className="font-lato text-sm text-[#8A8FB9]">Great Britain, 3NM98-LK</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex items-start gap-3 bg-white shadow-md rounded-xl p-5">
                <div className="w-10 h-10 bg-[#1BE982] rounded-full flex items-center justify-center text-white">
                  <FiTruck />
                </div>
                <div>
                  <p className="font-lato text-sm text-[#8A8FB9] font-semibold">Free Shipping</p>
                  <p className="font-lato text-sm text-[#8A8FB9]">On all orders</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
