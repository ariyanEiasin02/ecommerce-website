import React, { useContext } from 'react'
import BlogItems from '../BlogItems/BlogItems'
import { FaCalendarAlt } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import blog1 from '../../assets/blog.png'
import blog2 from '../../assets/Group2.png'
import blog3 from '../../assets/Group1.png'
import { apiData } from '../ContextApi/ContextApi'
import { IoStar } from 'react-icons/io5'

const SimpleBlog = () => {
    const data = useContext(apiData);

    const RecentData = data.filter((item) => item.id >= 35 && item.id <= 38)
    const UpdateData = data.filter((item) => item.id >= 40 && item.id <= 42)
    return (
        <>
            <section className='py-16'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex px-4 md:px-0 justify-between">
                        <div className="md:w-[68%]">
                            <div className="">
                                <div className="mt-8">
                                    <img src={blog1} alt="" className='w-full md:h-[400px] h-[250px]' />
                                </div>
                                <div className="flex mt-4">
                                    <div className="flex items-center">
                                        <AiFillEdit className='text-[#FB2E86] text-xl' />
                                        <p className='ml-2 bg-[#FFE7F9] py-[1px] md:py-[2px] md:px-6 px-3 font-josefin font-normal text-primary text-sm md:text-base'>Surf Auxion</p>
                                    </div>
                                    <div className="ml-6 flex items-center">
                                        <FaCalendarAlt className='text-[#FFA454] text-xl' />
                                        <p className='ml-2 bg-[#FFECE2] py-[1px] md:py-[2px] md:px-6 px-3 font-josefin font-normal text-primary text-sm md:text-base'>Aug 09 2020</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h2 className='py-1 font-josefin font-bold md:text-3xl text-xl text-primary'>Mauris at orci non vulputate diam tincidunt nec.</h2>
                                    <p className='font-lato font-normal text-base text-[#8A8FB9] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                                    <p className='font-lato font-normal text-base text-[#8A8FB9] py-2 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                                    <div className="py-4 px-3 bg-[#FAFAFB] mt-4 border-l-2 border-secondCommon">
                                    <p className='font-josefin font-medium text-[18px] text-[#969CB4]'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”</p>
                                    </div>
                                    <div className="pt-8">
                                        <div className="flex justify-between gap-5">
                                            <div className="">
                                                <img src={blog2} alt="" />
                                            </div>
                                            <div className="">
                                                <img src={blog3} alt="" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className='font-lato font-normal text-base text-[#8A8FB9] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="flex flex-wrap justify-between">
                                            {
                                                RecentData.map((item) => (
                                                    <div className="md:w-[23%] py-3 md:py-0 w-[45%]">
                                                        <div className="bg-[#EEEFFB]">
                                                            <img src={item.thumbnail} alt="" />
                                                        </div>
                                                        <div className="text-center">
                                                            <h3 class="font-josefin text-[20px] text-[#000] font-normal pt-2">{item.title}</h3>
                                                            <div className="">
                                                                <div className="py-2">
                                                                    <ul className='flex gap-2 justify-center'>
                                                                        <li><IoStar className='text-[#FFD659] text-base' />
                                                                        </li>
                                                                        <li><IoStar className='text-[#FFD659] text-base' />
                                                                        </li>
                                                                        <li><IoStar className='text-[#FFD659] text-base' />
                                                                        </li>
                                                                        <li><IoStar className='text-[#FFD659] text-base' />
                                                                        </li>
                                                                        <li><IoStar className='text-[#B2B2B2] text-base' />
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="">
                                                                    <p className='text-base font-josefin text-primary font-semibold'>${item.price} <span className='text-xs text-[#FB2448] line-through'>${item.discountPercentage}</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="mt-5">
                                            <p className='font-lato font-normal text-base text-[#8A8FB9] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                                            <p className='mt-3 font-lato font-normal text-base text-[#8A8FB9] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                                        </div>
                                        <div className="">
                                            {
                                                UpdateData.map((item)=>(
                                                    <div className="mt-4 md:flex items-center bg-[#FFFFFF] shadow-lg p-3">
                                                <div className="w-20 h-20 bg-[#EEEFFB]">
                                                    <img src={item.thumbnail} alt="" />
                                                </div>
                                                <div className="ml-4 mt-4">
                                                    <div className="flex">
                                                    <h3 className='font-josefin font-medium text-primary text-[18px]'>{item.title}</h3>
                                                    <p className='ml-5 font-lato font-normal text-[13px] text-[#A3A2B6]'>Jan 09 2020</p>
                                                    </div>
                                                    <div className="">
                                                        <p className='font-lato font-normal text-[#A3A2B6] text-base'>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                                ))
                                            }
                                        </div>
                                        <div className="mt-8">
                                            <form>
                                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                                    <div className="flex-1">
                                                        <div className="flex items-center mt-1">
                                                            <input
                                                                type="text"
                                                                placeholder="Write Your Name"
                                                                className="w-full mt-2 px-4 py-2 border rounded-md outline-none font-lato font-normal text-[17px] text-[#9096B2]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center mt-1">
                                                            <input
                                                                type="email"
                                                                placeholder="Write Your Email"
                                                                className="w-full mt-2 px-4 py-2 border rounded-md outline-none font-lato font-normal text-[17px] text-[#9096B2]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-8 mb-4">
                                                    <textarea
                                                        placeholder="Write Your Comment"
                                                        className="w-full mt-2 px-4 py-2 border rounded-md outline-none font-lato font-normal text-[17px] text-[#9096B2]"
                                                        rows="6"
                                                    ></textarea>
                                                </div>

                                                <div className="mb-4 flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="saveDetails"
                                                        className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                                                    />
                                                    <label
                                                        htmlFor="saveDetails"
                                                        className="ml-2 text-sm text-gray-600"
                                                    >
                                                        Save my name, email, and website in this browser for the next time I comment.
                                                    </label>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="w-full text-center rounded-lg bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                                                >
                                                    Continue Shipping
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[28%]">
                            <BlogItems />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SimpleBlog