import React, { useContext } from "react";
import Card from "../Card/Card";
import { apiData } from "../ContextApi/ContextApi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const ProductMix = () => {
  const data = useContext(apiData);

  const newArrivals = data.slice(35, 41);
  const bestSellers = data.slice(41, 47);
  const featured = data.slice(80, 86);
  const specialOffers = data.slice(148, 154);
  const dispatch = useDispatch()

  const handleAddToCart = (card) => {
    dispatch(addToCart({ ...card, qty: 1 }))
    toast.success("Add to Cart Success!")
  }
  return (
    <section className="py-12">
      <div className="max-w-container mx-auto md:px-0 px-4">
        <h1 className="text-3xl md:text-4xl font-josefin text-primary font-bold text-center mb-8">
          Latest Products
        </h1>
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <Tabs>
          <TabList>
            <div className="flex justify-center gap-6 flex-wrap mb-6">
              <Tab className="text-primary cursor-pointer font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
                New Arrival
              </Tab>
              <Tab className="text-primary cursor-pointer font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
                Best Seller
              </Tab>
              <Tab className="text-primary cursor-pointer font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
                Featured
              </Tab>
              <Tab className="text-primary cursor-pointer font-lato text-base md:text-lg hover:text-secondCommon hover:underline">
                Special Offer
              </Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {newArrivals.map((card, index) => (
                <Card
                  key={index}
                  imageMix={card.thumbnail}
                  title={card.title}
                  categoryName={card.category}
                  fixedNow={card.price}
                  fixedOld={card.discountPercentage}
                  productName={card.id}
                  handleAddToCart={() => handleAddToCart(card)}
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
                  fixedOld={card.discountPercentage}
                  productName={card.id}
                  handleAddToCart={() => handleAddToCart(card)}
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
                  fixedOld={card.discountPercentage}
                  productName={card.id}
                  handleAddToCart={() => handleAddToCart(card)}
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
                  fixedOld={card.discountPercentage}
                  productName={card.id}
                  handleAddToCart={() => handleAddToCart(card)}
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
