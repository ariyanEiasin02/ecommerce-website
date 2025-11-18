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
import LeatestBlog from '../../components/LeatestBlog/LeatestBlog'

const metadata = {
  title: "Eiasin - Home",
  description: "Welcome to Eiasin, your one-stop shop for all your e-commerce needs. Discover a wide range of products, exclusive deals, and seamless shopping experience.",
};
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
       <LeatestBlog/>
    </>
  )
}

export default Home