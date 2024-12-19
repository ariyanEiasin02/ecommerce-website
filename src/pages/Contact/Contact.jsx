import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import ContactInformation from '../../components/ContactInformation/ContactInformation'
import Touch from '../../components/Touch/Touch'

const Contact = () => {
  return (
    <>
        <CommonBanner commonHeading='Contact Us' shopItem='Contact Us'/>
        <ContactInformation/>
        <Touch/>
    </>
  )
}

export default Contact