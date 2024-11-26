import React from 'react'

const CommonBanner = ({commonHeading,shopItem}) => {
  return (
    <section className='bg-[#F6F5FF] py-12'>
        <div className="max-w-container mx-auto px-4 lg:px-0">
            <h2 className='font-josefin font-semibold text-4xl text-primary py-2'>{commonHeading}</h2>
            <ul className='flex gap-2'>
                <li className='font-lato font-medium text-base text-primary'>Home.</li>
                <li className='font-lato font-medium text-base text-primary'>Pages.</li>
                <li className='font-lato font-medium text-base text-secondCommon'>{shopItem}</li>
            </ul>
        </div>
    </section>
  )
}

export default CommonBanner