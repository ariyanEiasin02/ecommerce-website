import React from "react";
import { FaCalendarAlt, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="group bg-white shadow-lg rounded-[8px] overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-[260px] object-cover hover:scale-110 duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FaTools className="text-secondCommon" />
            <span className="text-sm font-bold text-primary font-josefin mt-1">
              SaberAli
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-[#FFA454]" />
            <span className="text-sm font-bold text-primary font-josefin mt-1">
              {blog.date}
            </span>
          </div>
        </div>
        <h3 className="text-[18px] truncate font-josefin font-semibold text-primary group-hover:text-secondCommon duration-700 mt-3">
          {blog.title}
        </h3>
        <p className="font-lato line-clamp-2 text-base text-[#72718F] mt-3 mb-1">
          {blog.description}
        </p>
        <Link to="/Home/Blog/">
          <button className="mt-5 text-white duration-700 font-lato font-normal text-base py-2 px-4 rounded-sm border-none bg-secondCommon">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
