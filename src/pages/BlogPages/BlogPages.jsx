import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import Blog from '../../components/Blog/Blog'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'

const BlogPages = () => {
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
          {
              id: 5,
              img: blog1,
              title: "Mauris at orci non vulputate diam tincidunt nec.",
              date: "Aug 09 2020",
              description: "More off this and less hello samlande lied much over tightly circa horse taped mightly",
          },
          {
              id: 6,
              img: blog2,
              title: "Mauris at orci non vulputate diam tincidunt nec.",
              date: "Aug 09 2020",
              description: "More off this and less hello samlande lied much over tightly circa horse taped mightly",
          },
          {
              id: 7,
              img: blog3,
              title: "Mauris at orci non vulputate diam tincidunt nec.",
              date: "Aug 09 2020",
              description: "More off this and less hello samlande lied much over tightly circa horse taped mightly"
          },
          {
              id: 8,
              img: blog1,
              title: "Mauris at orci non vulputate diam tincidunt nec.",
              date: "Aug 09 2020",
              description: "More off this and less hello samlande lied much over tightly circa horse taped mightly"
          },
      ]
  return (
    <>
        <CommonBanner commonHeading='Blog Page' shopItem='Blog Page'/>
        <Blog blogs={blogs} />
    </>
  )
}

export default BlogPages