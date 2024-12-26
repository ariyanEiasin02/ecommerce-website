import React from 'react'

const OrderCompleted = () => {
    return (
        <section className="py-16 flex flex-col items-center justify-center bg-gray-50">
            <div className="w-[620px] text-center">
                <div className="mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-16 h-16 text-green-500 mx-auto"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m-6 6a9 9 0 100-18 9 9 0 000 18z"
                        />
                    </svg>
                </div>
                <h1 className="font-josefin text-2xl font-bold text-gray-800 mb-4">
                    Your Order Is Completed!
                </h1>
                <p className="font-lato text-gray-600 mb-6">
                    Thank you for your order! Your order is being processed and will be completed within 3-6
                    hours. You will receive an email confirmation when your order is completed.
                </p>
                <button
                    className="px-6 py-3 bg-blue-600 text-white rounded-md font-josefin font-bold text-lg hover:bg-blue-700 transition-all"
                    onClick={() => window.location.href = '/'}
                >
                    Continue Shopping
                </button>
            </div>
        </section>

    )
}

export default OrderCompleted