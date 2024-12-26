import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import CheckOut from '../../components/CheckOut/CheckOut'

const CheckOutPages = () => {
  return (
    <>
        <CommonBanner commonHeading="Proceed To Checkout" shopItem="Proceed To Checkout"/>
        <CheckOut/>
    </>
  )
}

export default CheckOutPages