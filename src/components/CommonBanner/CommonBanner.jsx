import React from 'react'
import { Link } from 'react-router-dom'

const CommonBanner = ({ commonHeading, shopItem }) => {
  return (
    <section className="bg-[#F6F5FF] py-12">
      <div className="max-w-container mx-auto px-4 lg:px-0">

        {/* Heading */}
        <h2 className="font-josefin font-semibold text-4xl text-primary py-2">
          {commonHeading}
        </h2>

        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ul className="flex items-center gap-2">
            <li className="font-lato font-medium text-base text-primary">
              <Link to="/">Home</Link>
            </li>

            <span className="text-primary">/</span>

            <li className="font-lato font-medium text-base text-secondCommon capitalize">
              {shopItem}
            </li>
          </ul>
        </nav>

      </div>
    </section>
  )
}

export default CommonBanner
