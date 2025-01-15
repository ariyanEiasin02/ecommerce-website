import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearWishlist, deleteWishlist } from '../slice/cartSlice';
import { Link } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Wishlist = () => {
  const dispatch = useDispatch()
  const [handleWishlist, setHandleWishlist] = useState(false)
  const [handleDelete, setHandleDelete] = useState(false)
  const cartData = useSelector((state) => state.cartSlice.wishlistItems)

  const hendleWishlistShow = () => {
    setHandleWishlist(!handleWishlist)
  }
  const hendleClearWishlist = () => {
    dispatch(clearWishlist())
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, qty: 1 }))
    toast.success("Add to Cart Success!")
  }

  const handleDeleteShow = (id) => {
    if (handleDelete === id) {
      setHandleDelete(null);
    } else {
      setHandleDelete(id);
    }
  }
  const hendleFromProduct = (index) => {
      dispatch(deleteWishlist(index))
  }
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-container mx-auto">
        {
          cartData.length > 0 ?
            cartData.map((item, index) => (
              <div key={index} className="w-[90%] lg:w-[80%] mx-auto space-y-6 mt-5">
                <div className="bg-white w-full rounded-lg shadow-md py-2 px-4 flex items-center space-x-6">
                  <img
                    src={item.thumbnail}
                    alt="Product"
                    className="w-28 h-28 border-2 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-500 text-lg">$120.00</p>
                  </div>

                  <div className="flex space-x-4">
                    <button onClick={() => handleAddToCart(item)} className="px-5 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition">
                      Add to Cart
                    </button>
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
                    <div className="relative">
                    <button onClick={() => handleDeleteShow(item.id)} className="px-5 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                      Remove
                    </button>
                    {
                      handleDelete === item.id &&
                      <div className="absolute -top-12 -left-72 flex flex-col items-center bg-white border border-gray-200 shadow-md p-4 rounded-lg w-[400px] mx-auto">
                        <h3 className="font-josefin font-semibold text-[18px] text-primary pb-3">Are you sure you want to delete this?</h3>
                        <div className="flex gap-4 mt-2">
                          <button
                            onClick={() => hendleFromProduct(index)}
                            className="rounded-lg bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                          >
                            Yes
                          </button>
                          <button
                            onClick={handleDeleteShow}
                            className="w-full rounded-lg bg-primary py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    }
                  </div>
                  </div>
                </div>
              </div>
            ))
            :
            <div className="text-center my-6">
              <Link to="/Home/ShopGrid">
                <button
                  className="rounded-lg bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                >
                  Please Go To Shop
                </button>
              </Link>
            </div>
        }
        <div className="mt-5 w-[90%] lg:w-[80%] mx-auto flex justify-end">
          {
            cartData.length > 0 &&
            <div className="relative">
              <button onClick={hendleWishlistShow} className="bg-secondCommon mt-5 py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all rounded-lg">
                Clear Wishlist
              </button>
              {
                handleWishlist &&
                <div className="absolute -top-16 -left-48 w-[350px] flex flex-col items-center bg-white border border-gray-200 shadow-md p-6 rounded-lg max-w-sm mx-auto">
                  <h3 className="font-josefin font-semibold text-[18px] text-primary pb-3">Are you sure you want to all delete this?</h3>
                  <div className="flex gap-4 mt-2">
                    <button
                      onClick={hendleClearWishlist}
                      className="rounded-lg bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                    >
                      Yes
                    </button>
                    <button
                      onClick={hendleWishlistShow}
                      className="w-full rounded-lg bg-primary py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                    >
                      No
                    </button>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
