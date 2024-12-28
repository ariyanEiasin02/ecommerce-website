import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import Error from '../../components/Error/Error'

const ErrorPages = () => {
  return (
    <>
        <CommonBanner commonHeading="404 Not Found" shopItem="404 Not Found"/>
        <Error/>
    </>
  )
}

export default ErrorPages