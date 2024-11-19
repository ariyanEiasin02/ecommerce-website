import React, { useEffect, useRef } from "react";
import mixitup from "mixitup";
import Card from "../Card/Card";
import imageMix1 from "../../assets/imageMix1.png";
import imageMix2 from "../../assets/imageMix2.png";
import imageMix3 from "../../assets/imageMix3.png";
import imageMix4 from "../../assets/imageMix4.png";
import imageMix5 from "../../assets/imageMix5.png";
import imageMix6 from "../../assets/imageMix6.png";

const ProductMix = () => {
  const containerRef = useRef(null);

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

  const cards = [
    { imageMix: imageMix1, title: "Comfort Handy Craft 1", category: "category-a", fixedNow: "45", fixedOld: "65" },
    { imageMix: imageMix2, title: "Comfort Handy Craft 2", category: "category-b", fixedNow: "55", fixedOld: "75" },
    { imageMix: imageMix3, title: "Comfort Handy Craft 3", category: "category-c", fixedNow: "35", fixedOld: "60" },
    { imageMix: imageMix4, title: "Comfort Handy Craft 4", category: "category-d", fixedNow: "65", fixedOld: "85" },
    { imageMix: imageMix5, title: "Comfort Handy Craft 5", category: "category-e", fixedNow: "65", fixedOld: "95" },
    { imageMix: imageMix6, title: "Comfort Handy Craft 6", category: "category-f", fixedNow: "50", fixedOld: "69" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
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
            data-filter=".category-a, .category-f"
          >
            Best Seller
          </button>
          <button
            className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline"
            data-filter=".category-b, .category-d"
          >
            Featured
          </button>
          <button
            className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline"
            data-filter=".category-c, .category-a, .category-f"
          >
            Special Offer
          </button>
        </div>
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              imageMix={card.imageMix}
              title={card.title}
              category={card.category}
              fixedNow={card.fixedNow}
              fixedOld={card.fixedOld}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductMix;
