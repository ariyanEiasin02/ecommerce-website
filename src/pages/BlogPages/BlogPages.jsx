import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import Blog from '../../components/Blog/Blog'

const BlogPages = () => {
  return (
    <>
        <CommonBanner commonHeading='Blog Page' shopItem='Blog Page'/>
        <Blog/>
    </>
  )
}

export default BlogPages