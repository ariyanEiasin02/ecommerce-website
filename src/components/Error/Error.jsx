import React from 'react'
import error from '../../assets/error.png'
import { Link } from 'react-router-dom'
const amii = () => {
    return (
        <section className='py-12'>
            <div className="max-w-container mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <img src={error} alt="" />
                    <button className="bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all">
                        <Link to="/">
                        Back To Home
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default amii