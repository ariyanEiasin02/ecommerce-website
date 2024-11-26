import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import EcommerceItem from '../../components/EcommerceItem/EcommerceItem'
import Company from '../../components/Company/Company'
const ShopGrid = () => {
  return (
    <>
        <CommonBanner commonHeading='Product Details' shopItem='Shop Grid Default'/>
        <EcommerceItem/>
        <Company/>
    </>
  )
}

export default ShopGrid