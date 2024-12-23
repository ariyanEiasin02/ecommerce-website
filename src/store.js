import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './components/slice/cartSlice'

export const store = configureStore({
  reducer: {
    cartSlice:cartSlice.reducer
  },
})