import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import ShopCard from '../../components/ShopCard/ShopCard'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo'

const ShopList = () => {
  return (
    <>
        <CommonBanner commonHeading='Shop List' shopItem='Shop List'/>
        <ShopCard/>
        <AdditionalInfo/>
        <RelatedProducts/>
    </>
  )
}

export default ShopList