import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client from '../../assets/clinet.png'
const AboutItem = () => {

    const settings = {
        dots: true, 
        infinite: true, 
        autoplay: true, 
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
      };
  return (
    <>
        <section className='py-16 bg-[#FBFBFF] overflow-hidden'>
            <div className="max-w-container mx-auto">
                <div className="px-4 md:px-0">
                    <h2 className='font-josefin font-bold text-primary text-3xl md:text-[42px] text-center'>Our Client Say!</h2>
                    <Slider {...settings}>
                    <div className="mt-5">
                    <div className="flex justify-center py-2">
                        <img src={client} alt="" />
                    </div>
                    <div className="text-center py-2">
                        <h3 className='font-lato font-semibold text-[22px] text-primary'>Selina Gomez</h3>
                        <h6 className='font-lato font-semibold text-[#8A8FB9] text-[12px]'>Ceo At Webecy Digital</h6>
                    </div>
                    <div className="text-center">
                        <p className='py-2 font-lato font-semibold text-base text-[#8A8FB9] md:w-[55%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                    </div>
                    </div>
                    <div className="mt-5">
                    <div className="flex justify-center py-2">
                        <img src={client} alt="" />
                    </div>
                    <div className="text-center py-2">
                        <h3 className='font-lato font-semibold text-[22px] text-primary'>Selina Gomez</h3>
                        <h6 className='font-lato font-semibold text-[#8A8FB9] text-[12px]'>Ceo At Webecy Digital</h6>
                    </div>
                    <div className="text-center">
                        <p className='font-lato font-semibold text-base text-[#8A8FB9] md:w-[55%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                    </div>
                    </div>
                    <div className="mt-5">
                    <div className="flex justify-center py-2">
                        <img src={client} alt="" />
                    </div>
                    <div className="text-center py-2">
                        <h3 className='font-lato font-semibold text-[22px] text-primary'>Selina Gomez</h3>
                        <h6 className='font-lato font-semibold text-[#8A8FB9] text-[12px]'>Ceo At Webecy Digital</h6>
                    </div>
                    <div className="text-center">
                        <p className='font-lato font-semibold text-base text-[#8A8FB9] md:w-[55%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                    </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutItem