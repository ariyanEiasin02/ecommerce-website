import React from 'react'
import Banner from '../../components/Banner/Banner'
import ProductCart from '../../components/ProductCart/ProductCart'
import ProductMix from '../../components/ProductMix/ProductMix'
import Offer from '../../components/Offer/Offer'
import Features from '../../components/Features/Features'
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts'
import DiscountItem from '../../components/DiscountItem/DiscountItem'
import Categories from '../../components/Categories/Categories'
import NewsLatter from '../../components/NewsLatter/NewsLatter'
import Company from '../../components/Company/Company'
import LeatestBlog from '../../components/LeatestBlog/LeatestBlog'

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
       <Categories/>
       <NewsLatter/>
       <Company/>
       <LeatestBlog/>
    </>
  )
}

export default Home