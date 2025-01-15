import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  wishlistItems: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [],
}

export const cartSlice = createSlice({
  name: 'cartItemSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItems.findIndex((item) => item.id === action.payload.id)

      if (findProduct === -1) {
        state.cartItems.push(action.payload)
        localStorage.setItem("cart", JSON.stringify(state.cartItems))
      } else {
        state.cartItems[findProduct].qty += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItems))
      }
    },
    addToWishlist: (state, action) => {
      let findProduct = state.wishlistItems.findIndex((item) => item.id === action.payload.id)

      if (findProduct === -1) {
        state.wishlistItems.push(action.payload)
        localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems))
      } else {
        state.wishlistItems[findProduct].qty += 1;
        localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems))
      }
    },
    increment: (state, action) => {
      state.cartItems[action.payload].qty += 1;
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    decrement: (state, action) => {
      if (state.cartItems[action.payload].qty !== 1) {
        state.cartItems[action.payload].qty -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    deleteProduct: (state, action) => {
      state.cartItems.splice(action.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
       
     },
    deleteWishlist: (state, action) => {
      state.wishlistItems.splice(action.payload, 1)
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems))
     },
     clearCart: (state, action) => {
      state.cartItems = []
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    }, 
     clearWishlist: (state, action) => {
      state.wishlistItems = []
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems))
    }  
  },
})


export const { addToCart, increment, decrement,deleteProduct,clearCart,addToWishlist,clearWishlist,deleteWishlist} = cartSlice.actions

export default cartSlice.reducer