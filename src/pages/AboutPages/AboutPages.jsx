import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import About from '../../components/About/About'
import Features from '../../components/Features/Features'
import Offer from '../../components/Offer/Offer'
import AboutItem from '../../components/AboutItem/AboutItem'

const AboutPages = () => {
  return (
    <>
        <CommonBanner commonHeading="About Us" shopItem="About Us"/>
        <About/>
        <Offer/>
        <AboutItem/>
    </>
  )
}

export default AboutPages