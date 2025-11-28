import React from 'react'
import { FaCalendarAlt, FaTools } from 'react-icons/fa'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'
const LeatestBlog = () => {
    const blogs = [
        {
            id: 1,
            img: blog1,
            title: "Mauris at orci non vulputate diam tincidunt nec.",
            date: "Aug 09 2020",
            description: "More off this and less hello samlande lied much over tightly circa horse taped mightly",
        },
        {
            id: 2,
            img: blog2,
            title: "Mauris at orci non vulputate diam tincidunt nec.",
            date: "Aug 09 2020",
            description: "More off this and less hello samlande lied much over tightly circa horse taped mightly",
        },
        {
            id: 3,
            img: blog3,
            title: "Mauris at orci non vulputate diam tincidunt nec.",
            date: "Aug 09 2020",
            description: "More off this and less hello samlande lied much over tightly circa horse taped mightly"
        },
        {
            id: 4,
            img: blog1,
            title: "Mauris at orci non vulputate diam tincidunt nec.",
            date: "Aug 09 2020",
            description: "More off this and less hello samlande lied much over tightly circa horse taped mightly"
        },
    ]
    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="max-w-container mx-auto">
                <div className="text-center mb-5">
                    <h2 className="text-4xl text-primary font-josefin font-bold">Leatest Blog</h2>
                </div>
                <div className="py-6 px-4 lg:px-0 lg:flex justify-between">
                    {blogs.map((blog) => (
                        <div className="w-full lg:w-[24%]" key={blog.id}>
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}

export default LeatestBlog