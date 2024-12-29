import React from 'react'
import OfferCard from '../OfferCard/OfferCard'
import offer1 from '../../assets/offer1.png'
import offer2 from '../../assets/offer2.png'
import offer3 from '../../assets/offer3.png'
import offer4 from '../../assets/offer4.png'
const Offer = () => {
  return (
    <>
    <section className='py-12'>
        <div className="max-w-container mx-auto">
        <h1 className="text-4xl text-primary font-josefin font-bold text-center mb-3">Our Features</h1>
        <div className="mt-6 md:flex justify-between gap-4 px-4 md:px-0">
            <OfferCard 
            offerImg={offer1} 
            offerTitle="Free Delivery"
            offerParagharap="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <OfferCard 
            offerImg={offer2} 
            offerTitle="100% Cash Back"
            offerParagharap="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <OfferCard 
            offerImg={offer3} 
            offerTitle="Quality Product"
            offerParagharap="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <OfferCard 
            offerImg={offer4} 
            offerTitle="24/7 Support"
            offerParagharap="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
        </div>
        </div>
    </section>
    </>
  )
}

export default Offer