import React from 'react';

const ContactInformation = () => {
  return (
    <>
      <div className="py-10 md:py-16">
        <div className="max-w-container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="lg:w-[48%] w-full">
              <h2 className="font-josefin font-bold text-primary text-3xl md:text-4xl">
                Information About Us
              </h2>
              <p className="py-4 font-lato font-medium text-[#8A8FB9] text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
                aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
                lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
              <div className="mt-5 flex gap-3">
                <div className="w-5 h-5 bg-[#5625DF] rounded-full"></div>
                <div className="w-5 h-5 bg-secondCommon rounded-full"></div>
                <div className="w-5 h-5 bg-[#37DAF3] rounded-full"></div>
              </div>
            </div>
            <div className="lg:w-[48%] w-full">
              <h2 className="font-josefin font-bold text-primary text-3xl md:text-4xl">
                Contact Way
              </h2>
              <div className="mt-5 flex flex-wrap justify-between gap-5">
                <div className="w-full md:w-[48%]">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#5726DF] rounded-full"></div>
                    <div className="ml-3">
                      <p className="font-lato font-medium text-[#8A8FB9] text-sm md:text-base">
                        Tel: 877-67-88-99
                      </p>
                      <p className="font-lato font-medium text-[#8A8FB9] text-sm md:text-base">
                        E-Mail: shop@store.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[48%]">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#FB2E86] rounded-full"></div>
                    <div className="ml-3">
                      <p className="font-lato font-medium text-[#8A8FB9] text-sm md:text-base">
                        Support Forum
                      </p>
                      <p className="font-lato font-medium text-[#8A8FB9] text-sm md:text-base">
                        For over 24hr
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[48%]">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#FFB265] rounded-full"></div>
                    <div className="ml-3">
                      <p className="font-lato font-medium text-[#8A8FB9] text-sm md:text-base">
                        20 Margaret st, London
                      </p>
                      <p className="font-lato font-medium text-[#8A8FB9] text-sm md:text-base">
                        Great Britain, 3NM98-LK
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[48%]">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#1BE982] rounded-full"></div>
                    <div className="ml-3">
                      <p className="font-lato font-medium text-[#8A8FB9] text-sm md:text-base">
                        Free standard shipping
                      </p>
                      <p className="font-lato font-medium text-[#8A8FB9] text-sm md:text-base">
                        on all orders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
