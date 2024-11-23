import React from 'react'
import img1 from '../../assets/company1.png'
import img2 from '../../assets/company2.png'
import img3 from '../../assets/company3.png'
import img4 from '../../assets/company4.png'
import img5 from '../../assets/comapny5.png'
const Company = () => {
  return (
    <section className='mt-6'>
        <div className="max-w-container mx-auto px-4 md:px-0">
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-[48%] lg:w-[18%]">
                    <img src={img1} alt="" />
                </div>
                <div className="w-[48%] lg:w-[18%]">
                    <img src={img2} alt="" />
                </div>
                <div className="w-[48%] lg:w-[18%]">
                    <img src={img3} alt="" />
                </div>
                <div className="w-[48%] lg:w-[18%]">
                    <img src={img4} alt="" />
                </div>
                <div className="w-[48%] lg:w-[18%]">
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Company