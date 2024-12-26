import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import OrderCompleted from '../../components/OrderCompleted/OrderCompleted'

const OderCompeletPages = () => {
  return (
    <>
        <CommonBanner commonHeading="Order Completed" shopItem="Order Completed"/>
        <OrderCompleted/>
    </>
  )
}

export default OderCompeletPages