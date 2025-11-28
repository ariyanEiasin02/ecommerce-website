import React from "react";
import touch from "../../assets/touch.png";

const Touch = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-4">

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">

          {/* Left Form Section */}
          <div className="w-full md:w-1/2">
            <h2 className="font-josefin font-bold text-3xl md:text-4xl text-primary">
              Get In Touch
              </h2>

            <p className="mt-4 font-lato text-base text-[#8A8FB9] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
              ultrices tristique amet erat vitae eget dolor lobortis quis bibendum
              quam.
            </p>

            <form className="mt-8 space-y-6">

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="border border-[#D4D7E5] w-full py-3 px-4 rounded-sm font-lato text-[#5A5F7D] focus:ring-1 outline-none focus:ring-secondCommon focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  required
                  className="border border-[#D4D7E5] w-full py-3 px-4 rounded-sm font-lato text-[#5A5F7D] focus:ring-1 outline-none focus:ring-secondCommon focus:border-transparent transition-all"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject*"
                required
                className="border border-[#D4D7E5] outline-none w-full py-3 px-4 rounded-sm font-lato text-[#5A5F7D] focus:ring-1 focus:ring-secondCommon focus:border-transparent transition-all"
              />

              {/* Message */}
              <textarea
                placeholder="Text Your Message*"
                required
                className="border border-[#D4D7E5] outline-none w-full py-3 px-4 rounded-sm h-32 font-lato text-[#5A5F7D] resize-none focus:ring-1 focus:ring-secondCommon focus:border-transparent transition-all"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="bg-secondCommon text-white font-josefin font-medium py-3 px-8 rounded-sm text-base shadow-sm hover:bg-opacity-90 transition-all"
              >
                Send Mail
              </button>

            </form>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={touch}
              alt="Contact"
              className="w-full max-w-md object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Touch;
