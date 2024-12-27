import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import SimpleBlog from '../../components/SimpleBlog/SimpleBlog'

const SimpleBlogPages = () => {
  return (
    <>
        <CommonBanner commonHeading='Single Blog' shopItem='Single Blog'/>
        <SimpleBlog/>
    </> 
  )
}

export default SimpleBlogPages