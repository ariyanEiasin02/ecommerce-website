import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import ShopCard from '../../components/ShopCard/ShopCard'

const ShopList = () => {
  return (
    <>
        <CommonBanner commonHeading='Shop List' shopItem='Shop List'/>
        <ShopCard/>
    </>
  )
}

export default ShopList