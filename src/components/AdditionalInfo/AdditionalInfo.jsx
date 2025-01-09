import React from 'react'
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Group2 from '../../assets/Group2.png'
const AdditionalInfo = () => {
    return (
        <section className='py-16 bg-[#F9F8FE]'>
            <div className="max-w-container mx-auto px-4 md:px-0">
                <Tabs>
                    <TabList>
                        <div className="flex cursor-pointer md:gap-6 gap-4 flex-wrap mb-6">
                            <Tab className="text-primary font-lato  text-sm md:text-lg hover:text-secondCommon hover:underline">
                                Description
                            </Tab>
                            <Tab className="text-primary font-lato text-sm md:text-lg hover:text-secondCommon hover:underline">
                                Additional Info
                            </Tab>
                            <Tab className="text-primary font-lato text-sm md:text-lg hover:text-secondCommon hover:underline">
                                Reviews
                            </Tab>
                            <Tab className="text-primary font-lato text-sm md:text-lg hover:text-secondCommon hover:underline">
                                Video
                            </Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <div className="">
                            <div className="">
                                <h3 className='font-josefin font-semibold text-[22px] text-primary pb-2'>Varius tempor.</h3>
                                <p className='font-lato font-normal text-[#A9ACC6] text-base pb-4'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="">
                                <h3 className='font-josefin font-semibold text-[22px] text-primary pb-2'>More details</h3>
                                <div className="flex items-center gap-2">
                                    <div className="">
                                        <FaArrowRight className='text-black' />
                                    </div>
                                    <div className="">
                                        <p className='font-lato font-normal text-[#A9ACC6] text-base pb-2'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="">
                                        <FaArrowRight className='text-black' />
                                    </div>
                                    <div className="">
                                        <p className='font-lato font-normal text-[#A9ACC6] text-base pb-2'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="">
                                        <FaArrowRight className='text-black' />
                                    </div>
                                    <div className="">
                                        <p className='font-lato font-normal text-[#A9ACC6] text-base pb-2'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="">
                                        <FaArrowRight className='text-black' />
                                    </div>
                                    <div className="">
                                        <p className='font-lato font-normal text-[#A9ACC6] text-base pb-2'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="">
                            <div className="">
                                <h3 className='font-josefin font-semibold text-[22px] text-primary pb-2'>Extra Details:</h3>
                            </div>
                            <div className="">
                                <p className='font-josefin font-semibold text-xl text-primary pb-2'>Materials: <span className='font-lato font-normal text-[#A9ACC6] text-base'>Crafted from high-quality [material].</span></p>
                                <p className='font-josefin font-semibold text-xl text-primary pb-2'>Size Options: <span className='font-lato font-normal text-[#A9ACC6] text-base'>Available in all size.</span></p>
                                <p className='font-josefin font-semibold text-xl text-primary pb-2'>Care Tips: <span className='font-lato font-normal text-[#A9ACC6] text-base'> Easy to maintain with qulity.</span></p>
                                <p className='font-josefin font-semibold text-xl text-primary pb-2'>Warranty/Guarantee: <span className='font-lato font-normal text-[#A9ACC6] text-base'> Covered by a 2 year guarantee.</span></p>
                                <p className='font-josefin font-semibold text-xl text-primary pb-2'>Delivery: <span className='font-lato font-normal text-[#A9ACC6] text-base'>Ships within 24/7.</span></p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="">
                            <div className="">
                                <h3 className='font-josefin font-semibold text-[22px] text-primary pb-2'>What Our Customers Say</h3>
                            </div>
                            <div className="">
                                <ul className='flex gap-2 py-2'>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                </ul>
                                <p className='font-lato font-normal text-[#A9ACC6] text-base pb-2'>"Fast shipping and excellent customer service. Highly recommend this product!" – ab de villiers</p>
                            </div>
                            <div className="">
                                <ul className='flex gap-2 py-2'>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                </ul>
                                <p className='font-lato font-normal text-[#A9ACC6] text-base pb-2'>"Absolutely love it! The quality is amazing, and it exceeded my expectations." – virat kohli</p>
                            </div>
                            <div className="">
                                <ul className='flex gap-2 py-2'>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#FFC416]'><FaStar /></li>
                                    <li className='text-[#B2B2B2]'><FaStar /></li>
                                </ul>
                                <p className='font-lato font-normal text-[#A9ACC6] text-base pb-2'>"Absolutely love it! The quality is amazing, and it exceeded my expectations." – Tamim Iqbal</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="">
                            <div className="">
                                <img src={Group2} alt="video" />
                                <p className='font-lato font-normal text-[#A9ACC6] md:w-[60%] text-base pt-3'>See Natural in action! This short video highlights its standout features, functionality, and real-life applications, giving you a closer look at why it's the perfect choice for wonderfull view.</p>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    )
}

export default AdditionalInfo