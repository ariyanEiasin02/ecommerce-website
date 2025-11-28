import React, { useState } from "react";

const Faq = () => {
  const faqs = [
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
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* LEFT FAQ SECTION */}
          <div className="lg:w-[45%]">
            <h2 className="font-josefin font-bold text-4xl text-primary mb-6">
              General Information
            </h2>

            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#ddd] py-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left font-josefin text-xl text-primary"
                >
                  {faq.question}
                  <span className="text-secondCommon text-2xl font-bold">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {/* Answer Section */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="font-lato text-base text-[#A1ABCC] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="lg:w-[50%] w-full">
            <div className="p-8 bg-[#F8F8FD] shadow-xl rounded-xl">
              <h2 className="font-josefin text-2xl font-bold text-primary mb-6">
                Ask a Question
              </h2>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-[#D4D7E5] rounded-sm outline-none font-lato text-[#5A5F7D] focus:ring-1 focus:ring-secondCommon transition-all"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-[#D4D7E5] rounded-sm outline-none font-lato text-[#5A5F7D] focus:ring-1 focus:ring-secondCommon transition-all"
                />
                <textarea
                  rows="5"
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 border border-[#D4D7E5] rounded-sm outline-none font-lato text-[#5A5F7D] focus:ring-1 focus:ring-secondCommon transition-all resize-none"
                ></textarea>

                <button className="bg-secondCommon py-3 px-8 font-josefin text-white font-medium text-base rounded-lg hover:bg-opacity-90 transition-all w-full sm:w-auto shadow-md">
                  Send Mail
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
