import React, { useState } from 'react'
import blog1 from '../../assets/blog.png'
import blog2 from '../../assets/blog1.png'
import blog3 from '../../assets/blog2.png'
import blog4 from '../../assets/blog3.png'
import blog5 from '../../assets/blog4.png'
import blog6 from '../../assets/blog5.png'
import { AiFillEdit } from "react-icons/ai";
import { FaCalendarAlt } from 'react-icons/fa'
import BlogItems from '../BlogItems/BlogItems'
import { Link } from 'react-router-dom'

const Blog = () => {
  const posts = [
    {
      img: blog1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      date: "Aug 09 2020",
      description:
        "Mauris at orci non vulputate diam tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      img: blog2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      date: "Aug 09 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      img: blog3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      date: "Aug 09 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      img: blog4,
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      date: "Aug 09 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      img: blog5,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      date: "Aug 09 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      img: blog6,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      date: "Aug 09 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      img: blog1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      date: "Aug 09 2020",
      description:
        "Mauris at orci non vulputate diam tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      img: blog2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      date: "Aug 09 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      img: blog3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
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
    if (currentPage < pageNumbers) {
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-container mx-auto">
        <div className="md:flex justify-between px-4 md:px-0">
          <div className="md:w-[68%] full">
            {
              perPageProduct.map((item) => (
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
                    <Link to="/Home/Blog/Simple">
                    <button className='mt-2 font-lato font-semibold text-[18px] text-primary'>
                      Read More<span className='text-pink-500'>*</span>
                    </button>
                    </Link>
                  </div>
                </div>
              ))
            }
            <div className='overflow-x-auto w-full'>
              <ul className='flex flex-nowrap gap-5 md:gap-2 mt-5 pb-5 items-center'>
                <button onClick={hendelPrevPage} className='py-2 px-5 border-2 border-gray-300 rounded-sm text-[#8A8FB9]'>Prev</button>

                {numbers.map((item) => (
                  <li key={item} className={`border-2 py-2 px-3 cursor-pointer rounded-md ${currentPage === item ? 'bg-[#c3c3d4] border-[#c3c3d4] text-white' : ''}`} onClick={() => setCurrentPage(item)}>{item}</li>
                ))}

                <button onClick={hendelNextPage} className='py-2 px-5 border-2 border-gray-300 rounded-sm text-[#8A8FB9]'>Next</button>
              </ul>
            </div>


          </div>
          <div className="md:w-[28%]">
            <BlogItems />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog