import React from 'react'

const OfferCard = ({offerImg,offerTitle,offerParagharap}) => {
  return (
    <>
        <div className="shadow-xl rounded-md py-8 text-center bg-[#FFFFFF] md:w-[24%] mb-5 md:mb-0">
            <img className='mx-auto py-4' src={offerImg} alt="" />
            <h3 className='text-primary font-josefin text-2xl font-semibold py-1'>{offerTitle}</h3>
            <p className='font-lato font-bold text-base text-primary text-[#1A0B5B4D] w-[85%] mx-auto'>{offerParagharap}</p>
        </div>
    </>
  )
}

export default OfferCard