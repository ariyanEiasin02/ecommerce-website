import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import Login from '../../components/Login/Login'

const LoginPages = () => {
  return (
    <>
        <CommonBanner commonHeading='My Account' shopItem='My Account'/>
        <Login/>
    </>
  )
}

export default LoginPages