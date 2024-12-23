import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

export const cartSlice = createSlice({
  name: 'cartItemSlice',
  initialState,
  reducers: {
    addToCart : (state,action) =>{
      let findProduct = state.cartItems.findIndex((item)=> item.id === action.payload.id)

      if(findProduct === -1){
        state.cartItems.push(action.payload)
        localStorage.setItem("cart",JSON.stringify(state.cartItems))
      }else{
        state.cartItems[findProduct].qty += 1;
        localStorage.setItem("cart",JSON.stringify(state.cartItems))
      }
    }
  },
})


export const { addToCart} = cartSlice.actions

export default cartSlice.reducer