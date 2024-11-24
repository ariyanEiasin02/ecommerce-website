import React from 'react'
import { FaBorderAll, FaListUl } from 'react-icons/fa'

const ShortItem = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div className="mb-4 lg:mb-0">
            <h3 className="font-josefin text-primary text-[22px] font-bold">Ecommerce Accessories & Fashion Items</h3>
            <p className="font-lato font-normal text-xs text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center space-x-2">
              <p className="font-lato font-normal text-base text-[#3F509E]">Per Page:</p>
              <input
                type="number"
                className="border px-2 py-2 rounded w-16 border-gray-300 font-lato outline-none font-normal text-xs text-[#8A8FB9]"
                min="1"
                defaultValue="3"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="font-lato font-normal text-base text-[#3F509E]">
                Sort By:
              </label>
              <select
                id="sort"
                className="border px-3 py-2 rounded bg-white border-gray-300 font-lato font-normal text-[#8A8FB9] text-xs"
              >
                <option>Best Match</option>
                <option>Low to High</option>
                <option>High to Low</option>
                <option>New Arrivals</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-lato font-normal text-base text-[#3F509E]">View:</p>
              <button
                className="p-2 border rounded border-gray-300 hover:bg-gray-200"
                title="Grid View"
              >
                <FaBorderAll />
              </button>
              <button
                className="p-2 border rounded border-gray-300 hover:bg-gray-200"
                title="List View"
              >
                <FaListUl />
              </button>
            </div>
            <div className="flex items-center w-full lg:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="border font-lato font-normal text-xs text-[#8A8FB9] outline-none px-3 py-2 rounded w-full lg:w-48 border-gray-300"
              />
            </div>
          </div>
        </div>
  )
}

export default ShortItem