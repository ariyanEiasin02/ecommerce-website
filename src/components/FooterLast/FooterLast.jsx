import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FooterLast = () => {
  return (
    <section className="py-3 bg-[#E7E4F8]">
      <div className="max-w-container mx-auto px-5 sm:px-10">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <p className="font-lato font-semibold text-base text-[#9DA0AE]">
              ©Webecy - All Rights Reserved
            </p>
          </div>
          <div className="w-full sm:w-auto text-center">
            <ul className="flex justify-center gap-5">
              <li className="bg-primary p-2 rounded-full text-white hover:bg-opacity-90 transition">
                <FaFacebookF />
              </li>
              <li className="bg-primary p-2 rounded-full text-white hover:bg-opacity-90 transition">
                <FaInstagram />
              </li>
              <li className="bg-primary p-2 rounded-full text-white hover:bg-opacity-90 transition">
                <FaXTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterLast;
