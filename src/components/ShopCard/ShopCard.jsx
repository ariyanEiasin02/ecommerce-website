import React from 'react'
import img from '../../assets/image1.png'
const ShopCard = () => {
  return (
    <section className='py-12'>
        <div className="max-w-container mx-auto">
            <div className="flex">
                <div className="">
                    <div className="bg-pink-500 p-4">
                    <img src={img} alt="" />
                    </div>
                </div>
                <div className="">
                    <h2> Accumsan tincidunt</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShopCard