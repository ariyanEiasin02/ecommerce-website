import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import Registration from '../../components/Registration/Registration'

const RegistrationPages = () => {
  return (
    <>
        <CommonBanner commonHeading='Create Account' shopItem='Create Account'/>
        <Registration/>
    </>
  )
}

export default RegistrationPages