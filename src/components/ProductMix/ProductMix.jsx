import React, { useContext, useEffect, useRef, useState } from "react";
import mixitup from "mixitup";
import Card from "../Card/Card";
import { apiData } from "../ContextApi/ContextApi";

const ProductMix = () => {
  const containerRef = useRef(null);
  const data = useContext(apiData)

  useEffect(() => {
    if (containerRef.current) {
      mixitup(containerRef.current, {
        selectors: {
          target: ".mix",
        },
        animation: {
          duration: 300,
        },
      });
    }
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-container mx-auto md:px-0 px-4">
        <h1 className="text-3xl md:text-4xl font-josefin text-primary font-bold text-center mb-8">
          Latest Products
        </h1>
        <div className="flex justify-center gap-6 flex-wrap mb-6">
          <button
            className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline"
            data-filter="all"
          >
            New Arrival
          </button>
          <button
            className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline"
            data-filter=".beauty"
          >
            Best Seller
          </button>
          <button
            className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline"
            data-filter=".fragrances"
          >
            Featured
          </button>
          <button
            className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline"
            data-filter=".furniture, .groceries"
          >
            Special Offer
          </button>
        </div>
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {data.map((card, index) => (
            <Card
              key={index}
              imageMix={card.thumbnail}
              title={card.title}
              categoryName={card.category}
              fixedNow={card.price}
              fixedOld={card.price * 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductMix;
