import React from 'react'

const Faq = () => {
    const item =[
        {
            question: "Eu dictumst cum at sed euismood condimentum?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
        {
            question: "Magna bibendum est fermentum eros.",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
        {
            question: "Odio muskana hak eris conseekin sceleton?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
        {
            question: "Elit id blandit sabara boi velit gua mara?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
    ]
    return (
        <section className='py-16 px-4'>
            <div className="max-w-container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                    <div className="lg:w-[45%]">
                        <h2 className="font-josefin font-bold text-4xl text-primary mb-4">
                            General Information
                        </h2>

                        {item.map((item, index) => (
                            <div className="mt-5" key={index}>
                                <h3 className="font-josefin text-xl font-medium text-primary mb-1">
                                    {item.question}
                                </h3>
                                <p className="font-lato font-normal text-base text-[#A1ABCC]">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="lg:w-[50%] w-full">
                        <div className="p-6 bg-[#F8F8FD] shadow-lg rounded-lg">
                            <h2 className="font-josefin text-2xl font-bold text-primary mb-4">
                                Ask a Question
                            </h2>
                            <form>
                                <div className="mt-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 border rounded-md outline-none font-lato font-normal text-[17px] text-[#9096B2]"
                                    />
                                </div>
                                <div className="mt-4">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full px-4 py-2 border rounded-md outline-none font-lato font-normal text-[17px] text-[#9096B2]"
                                    />
                                </div>
                                <div className="mt-4">
                                    <textarea
                                        rows="5"
                                        placeholder="Type your message..."
                                        className="w-full px-4 py-2 border rounded-md outline-none font-lato font-normal text-[17px] text-[#9096B2]"
                                    ></textarea>
                                </div>
                                <div className="mt-6">
                                    <button className="bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all rounded-md w-full sm:w-auto">
                                        Send Mail
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
