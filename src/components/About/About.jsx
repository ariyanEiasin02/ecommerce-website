import React from 'react';
import aboutBanner from '../../assets/aboutBanner.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-5 lg:gap-6">
            <div className="w-full lg:w-[48%]">
              <div className="shadow-imglastshadow">
                <img
                  src={aboutBanner}
                  alt="About Banner"
                  className="w-full rounded-md"
                />
              </div>
            </div>

            <div className="w-full lg:w-[48%] text-center lg:text-left">
              <h2 className="font-josefin font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mb-4">
                Know About Our Ecommerce Business, History
              </h2>
              <p className="font-lato font-semibold text-sm sm:text-base text-[#8A8FB9] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <button className="bg-secondCommon py-3 px-6 font-josefin text-white rounded-lg font-bold text-sm sm:text-base hover:bg-opacity-90 transition-all mt-5">
                <Link to="/Home/Contact/">  
                Contact us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
