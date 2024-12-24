import React, { useContext } from "react";
import Card from "../Card/Card";
import { apiData } from "../ContextApi/ContextApi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProductMix = () => {
  const data = useContext(apiData);

  // Filter the data into categories (adjust these conditions as per your API structure)
  const newArrivals = data.slice(0, 6); // First 3 items as New Arrivals
  const bestSellers = data.slice(6, 12); // Next 3 items as Best Sellers
  const featured = data.slice(12, 18); // Another 3 items as Featured
  const specialOffers  = data.slice(18, 24); // Another 3 items as Featured

  return (
    <section className="py-12">
      <div className="max-w-container mx-auto md:px-0 px-4">
        <h1 className="text-3xl md:text-4xl font-josefin text-primary font-bold text-center mb-8">
          Latest Products
        </h1>

        <Tabs>
          {/* Tab List */}
          <TabList>
            <div className="flex justify-center gap-6 flex-wrap mb-6">
              <Tab className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
                New Arrival
              </Tab>
              <Tab className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
                Best Seller
              </Tab>
              <Tab className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
                Featured
              </Tab>
              <Tab className="text-primary font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
              Special Offer
              </Tab>
            </div>
          </TabList>

          {/* Tab Panels */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {newArrivals.map((card, index) => (
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
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {bestSellers.map((card, index) => (
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
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {featured.map((card, index) => (
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
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {specialOffers.map((card, index) => (
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
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductMix;
