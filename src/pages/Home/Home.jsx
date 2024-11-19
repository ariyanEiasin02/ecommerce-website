import React from 'react'
import Banner from '../../components/Banner/Banner'
import ProductCart from '../../components/ProductCart/ProductCart'
import ProductMix from '../../components/ProductMix/ProductMix'
import Offer from '../../components/Offer/Offer'
import Features from '../../components/Features/Features'

const Home = () => {
  return (
    <>
       <Banner/>
       <ProductCart/>
       <ProductMix/>
       <Offer/>
       <Features/>
    </>
  )
}

export default Home