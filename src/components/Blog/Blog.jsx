import React, { useState } from "react";
import blog1 from "../../assets/blog.png";
import blog2 from "../../assets/blog1.png";
import blog3 from "../../assets/blog2.png";
import blog4 from "../../assets/blog3.png";
import blog5 from "../../assets/blog4.png";
import blog6 from "../../assets/blog5.png";
import { AiFillEdit } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import BlogItems from "../BlogItems/BlogItems";
import { Link } from "react-router-dom";
import BlogCard from "../LeatestBlog/BlogCard";

const Blog = ({ blogs }) => {
  // const posts = [
  //   {
  //     img: blog1,
  //     title: "Mauris at orci non vulputate diam tincidunt nec.",
  //     date: "Aug 09 2020",
  //     description:
  //       "Mauris at orci non vulputate diam tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //   },
  //   {
  //     img: blog2,
  //     title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
  //     date: "Aug 09 2020",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //   },
  //   {
  //     img: blog3,
  //     title: "Sit nam congue feugiat nisl, mauris amet nisi.",
  //     date: "Aug 09 2020",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //   },
  //   {
  //     img: blog4,
  //     title: "Sit nam congue feugiat nisl, mauris amet nisi.",
  //     date: "Aug 09 2020",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //   },
  //   {
  //     img: blog5,
  //     title: "Mauris at orci non vulputate diam tincidunt nec.",
  //     date: "Aug 09 2020",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //   },
  //   {
  //     img: blog6,
  //     title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
  //     date: "Aug 09 2020",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //   },
  //   {
  //     img: blog1,
  //     title: "Mauris at orci non vulputate diam tincidunt nec.",
  //     date: "Aug 09 2020",
  //     description:
  //       "Mauris at orci non vulputate diam tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //   },
  //   {
  //     img: blog2,
  //     title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
  //     date: "Aug 09 2020",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //   },
  //   {
  //     img: blog3,
  //     title: "Sit nam congue feugiat nisl, mauris amet nisi.",
  //     date: "Aug 09 2020",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //   },
  // ];
  // pageinetion...................................
  // const [currentPage, setCurrentPage] = useState(1);
  // let [perPage, setPerPage] = useState(3);

  // let lastItemIndex = currentPage * perPage;
  // let firstItemIndex = lastItemIndex - perPage;

  // let perPageProduct = posts.slice(firstItemIndex, lastItemIndex);
  // let pageNumbers = Math.ceil(posts.length / perPage);

  // let numbers = [];
  // for (let i = 1; i <= pageNumbers; i++) {
  //   numbers.push(i);
  // }
  // const hendelPrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // const hendelNextPage = () => {
  //   if (currentPage < pageNumbers) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-container mx-auto">
        <div className="md:flex justify-between flex-wrap gap-4 px-4 md:px-0">
          {blogs.map((blog) => (
            <div className="w-full lg:w-[24%]" key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
