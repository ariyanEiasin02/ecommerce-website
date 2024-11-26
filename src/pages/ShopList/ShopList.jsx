import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import ShortItem from '../../components/ShortItem/ShortItem'
import ShopCard from '../../components/ShopCard/ShopCard'

const ShopList = () => {
  return (
    <>
        <CommonBanner commonHeading='Shop List' shopItem='Shop List'/>
        <ShortItem/>
        <ShopCard/>
    </>
  )
}

export default ShopList