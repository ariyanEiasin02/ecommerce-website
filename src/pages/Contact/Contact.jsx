import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import ContactInformation from '../../components/ContactInformation/ContactInformation'

const Contact = () => {
  return (
    <>
        <CommonBanner commonHeading='Contact Us' shopItem='Contact Us'/>
        <ContactInformation/>
    </>
  )
}

export default Contact