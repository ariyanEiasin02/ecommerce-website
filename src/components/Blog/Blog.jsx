import React, { useContext, useState } from 'react'
import blog1 from '../../assets/blog.png'
import blog2 from '../../assets/blog1.png'
import blog3 from '../../assets/blog2.png'
import blog4 from '../../assets/blog3.png'
import blog5 from '../../assets/blog4.png'
import blog6 from '../../assets/blog5.png'
import { AiFillEdit } from "react-icons/ai";
import { FaCalendarAlt, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { apiData } from '../ContextApi/ContextApi'
import { FaXTwitter } from 'react-icons/fa6'

const Blog = () => {
    const data = useContext(apiData);
       
    const RecentData = data.filter((item) => item.id >= 15 && item.id <= 18)
    const saleData = data.filter((item) => item.id >= 20 && item.id <= 22)
    const OfferData = data.filter((item) => item.id >= 25 && item.id <= 28)

    const posts = [
        {
            img :blog1,
            title: "Mauris at orci non vulputate diam tincidunt nec.",
            date: "Aug 09 2020",
            description:
                "Mauris at orci non vulputate diam tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {   
            img :blog2,
            title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
            date: "Aug 09 2020",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {
            img :blog3,
            title: "Sit nam congue feugiat nisl, mauris amet nisi.",
            date: "Aug 09 2020",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {
            img :blog4,
            title: "Sit nam congue feugiat nisl, mauris amet nisi.",
            date: "Aug 09 2020",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {
            img :blog5,
            title: "Mauris at orci non vulputate diam tincidunt nec.",
            date: "Aug 09 2020",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {
            img :blog6,
            title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
            date: "Aug 09 2020",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {
            img :blog1,
            title: "Mauris at orci non vulputate diam tincidunt nec.",
            date: "Aug 09 2020",
            description:
                "Mauris at orci non vulputate diam tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {   
            img :blog2,
            title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
            date: "Aug 09 2020",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {
            img :blog3,
            title: "Sit nam congue feugiat nisl, mauris amet nisi.",
            date: "Aug 09 2020",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {
            img :blog4,
            title: "Sit nam congue feugiat nisl, mauris amet nisi.",
            date: "Aug 09 2020",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {
            img :blog5,
            title: "Mauris at orci non vulputate diam tincidunt nec.",
            date: "Aug 09 2020",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
        {
            img :blog6,
            title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
            date: "Aug 09 2020",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        },
    ];
    // pageinetion...................................
      const [currentPage, setCurrentPage] = useState(1);
      let [perPage, setPerPage] = useState(3);
    
      let lastItemIndex = currentPage * perPage;
      let firstItemIndex = lastItemIndex - perPage;
    
      let perPageProduct = posts.slice(firstItemIndex, lastItemIndex)
      let pageNumbers = Math.ceil(posts.length / perPage);
    
      let numbers = []
      for (let i = 1; i <= pageNumbers; i++) {
        numbers.push(i)
      }
      const hendelPrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1)
        }
      }
      const hendelNextPage = () => {
        if (currentPage <  pageNumbers) {
            setCurrentPage(currentPage + 1)
        }
      }
    return (
        <section className="py-10 bg-gray-50">
           <div className="max-w-container mx-auto">
           <div className="md:flex justify-between px-4 md:px-0">
            <div className="md:w-[68%] full">
                {
                    perPageProduct.map((item)=>(
                       <div className="">
                        <div className="mt-8">
                        <img src={item.img} alt="" className='w-full md:h-[400px] h-[250px]' />
                       </div>
                       <div className="flex mt-4">
                        <div className="flex items-center">
                        <AiFillEdit className='text-[#FB2E86] text-xl' />
                            <p className='ml-2 bg-[#FFE7F9] py-[1px] md:py-[2px] md:px-6 px-3 font-josefin font-normal text-primary text-sm md:text-base'>Surf Auxion</p>
                        </div>
                        <div className="ml-6 flex items-center">
                        <FaCalendarAlt className='text-[#FFA454] text-xl' />
                        <p className='ml-2 bg-[#FFECE2] py-[1px] md:py-[2px] md:px-6 px-3 font-josefin font-normal text-primary text-sm md:text-base'>{item.date}</p>
                        </div>
                       </div>
                       <div className="mt-3">
                        <h2 className='py-1 font-josefin font-bold md:text-3xl text-xl text-primary'>{item.title}</h2>
                        <p className='font-lato font-normal text-base text-[#8A8FB9] py-2'>{item.description}</p>
                        <button className='mt-2 font-lato font-semibold text-[18px] text-primary'>
                        Read More<span className='text-pink-500'>*</span>
                        </button>
                       </div>
                       </div>
                    ))
                }
                <div>
              <ul className='flex md:gap-2 mt-5 pb-5 items-center md:overflow-x-hidden  overflow-x-scroll md:w-full w-[350px]'>
                <button onClick={hendelPrevPage} className='py-2 px-5 border-2 border-gray-300 rounded-sm text-[#8A8FB9]'>Prev</button>

                {numbers.map((item) => (
                  <li className={`border-2 py-2 px-3 cursor-pointer rounded-md ${currentPage === item ? 'bg-[#c3c3d4] border-[#c3c3d4] text-white' : ' '}`} onClick={() => setCurrentPage(item)}>{item} </li>

                ))}

                <button onClick={hendelNextPage} className='py-2 px-5 border-2 border-gray-300 rounded-sm text-[#8A8FB9]'>Next</button>
              </ul>
            </div>
            </div>
            <div className="md:w-[28%]">
  <div class="">
    
    <div class="mb-4 mt-8">
      <h2 class="font-josefin font-semibold text-[22px] text-primary mb-2">Search</h2>
      <input
        type="text"
        placeholder="Search For Posts"
        class="w-full border rounded-md px-4 py-2 text-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="">

      <div className='mb-4'>
        <h3 class="font-josefin font-semibold text-[22px] text-primary mb-2">Categories</h3>
        <ul class="grid grid-cols-2 gap-x-8 gap-y-3">
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Hobbies (14)</li>
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Women (21)</li>
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Women (21)</li>
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Women (21)</li>
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Women (21)</li>
          <li class="hover:bg-secondCommon hover:text-white py-1 px-4 rounded-md font-josefin font-normal text-primary text-sm duration-300">Man (21)</li>
        </ul>
      </div>

      <div className='mb-4'>
        <h3 class="font-josefin font-semibold text-[22px] text-primary mb-4 mt-2">Recent Posts</h3>
        {
            RecentData.map((item)=>(
                <div className="mt-2 flex items-center">
            <div className="w-20 h-16 bg-[#EEEFFB]">
                <img src={item.thumbnail} alt="" className='w-full h-full'/>
            </div>
            <div className="ml-3">
            <p class="font-josefin text-base text-[#3F509E] font-normal">{item.title}</p>
            <p class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
            </div>
        </div>
            ))
        }
      </div>
      <div>
        <h3 class="font-josefin font-semibold text-[22px] text-primary mb-4 mt-2">Sale Product</h3>
        {
            saleData.map((item)=>(
                <div className="mt-2 flex items-center">
            <div className="w-20 h-16 bg-[#EEEFFB]">
                <img src={item.thumbnail} alt="" className='w-full h-full'/>
            </div>
            <div className="ml-3">
            <p class="font-josefin text-base text-[#3F509E] font-normal">{item.title}</p>
            <p class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
            </div>
        </div>
            ))
        }
      </div>
      <div>
        <h3 class="font-josefin font-semibold text-[22px] text-primary mb-2 mt-5">Offer product</h3>
        <div className="grid grid-cols-2 gap-x-8">
        {
            OfferData.map((item)=>(
                 <div className="mt-2">
            <div className="w-[140px] bg-[#EEEFFB]">
                <img src={item.thumbnail} alt="" className='w-full h-full'/>
            </div>
            <div className="text-center">
            <p class="font-josefin text-base text-[#3F509E] font-medium py-2">{item.title}</p>
            <p class="font-lato font-semibold text-[11px] text-[#8A8FB9]">$12.00 - $15.00</p>
            </div>
        </div>
            ))
        }
        </div>
      </div>
      <div>
        <h3 class="font-josefin font-semibold text-[22px] text-primary mb-2 mt-5">Follow</h3>
        <ul className='flex gap-x-4'>
            <li className='w-8 h-8 flex justify-center items-center rounded-full bg-[#5625DF]'>
            <FaFacebookF className='text-white'/>
            </li>
            <li className='w-8 h-8 flex justify-center items-center rounded-full bg-[#FF27B7]'>
            <FaInstagram className='text-white'/>
            </li>
            <li className='w-8 h-8 flex justify-center items-center rounded-full bg-[#37DAF3]'>
            <FaXTwitter className='text-white'/>
            </li>
        </ul>
      </div>

    </div>

    <div class="mt-5">
      <h3 class="font-bold text-lg text-gray-800 mb-4">Tags</h3>
      <div class="flex flex-wrap gap-2">
        <span
          class="bg-gray-200 px-3 py-1 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          General
        </span>
        <span
          class="bg-gray-200 px-3 py-1 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          Atsanil
        </span>
        <span
          class="bg-gray-200 px-3 py-1 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          Insas
        </span>
        <span
          class="bg-gray-200 px-3 py-1 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          Bibsaas
        </span>
        <span
          class="bg-gray-200 px-3 py-1 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          Nulla
        </span>
      </div>
    </div>
  </div>


            </div>
           </div>
           </div>
        </section>
  )
}

export default Blog