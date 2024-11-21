import React from 'react'
import Banner from '../../components/Banner/Banner'
import ProductCart from '../../components/ProductCart/ProductCart'
import ProductMix from '../../components/ProductMix/ProductMix'
import Offer from '../../components/Offer/Offer'
import Features from '../../components/Features/Features'
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts'
import DiscountItem from '../../components/DiscountItem/DiscountItem'

const Home = () => {
  return (
    <>
       <Banner/>
       <ProductCart/>
       <ProductMix/>
       <Offer/>
       <Features/>
       <TrendingProducts/>
       <DiscountItem/>
    </>
  )
}

export default Home