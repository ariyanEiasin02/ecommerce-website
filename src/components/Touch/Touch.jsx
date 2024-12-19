import React from 'react';
import touch from '../../assets/touch.png';

const Touch = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-wrap md:flex-row flex-col-reverse justify-between items-center">
          <div className="w-full md:w-2/4 px-4 mb-8 md:mb-0">
            <h2 className="font-bold text-3xl font-josefin text-primary md:mt-0 mt-4">
              Get In Touch
            </h2>
            <p className="font-lato font-semibold text-base text-[#8A8FB9] my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor lobortis quis
              bibendum quam.
            </p>
            <form className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="border-2 border-[#8A8FB9] w-full py-3 px-4 outline-none rounded-md font-lato font-semibold text-[#8A8FB9]"
                  type="text"
                  placeholder="Your Name*"
                />
                <input
                  className="border-2 border-[#8A8FB9] w-full py-3 px-4 outline-none rounded-md font-lato font-semibold text-[#8A8FB9]"
                  type="email"
                  placeholder="Your E-mail*"
                  required
                />
              </div>
              <input
                className="border-2 border-[#8A8FB9] w-full py-3 px-4 outline-none rounded-md font-lato font-semibold text-[#8A8FB9]"
                type="text"
                placeholder="Subject*"
                required
              />
              <textarea
                className="border-2 border-[#8A8FB9] w-full py-3 px-4 outline-none rounded-md font-lato font-semibold text-[#8A8FB9] h-32"
                placeholder="Text Your Message*"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold rounded-lg text-base hover:bg-opacity-90 transition-all"
              >
                Send Mail
              </button>
            </form>
          </div>
          <div className="w-full md:w-2/4 px-4 flex justify-center">
            <img
              src={touch}
              alt="Contact Us"
              className="w-full max-w-sm md:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
