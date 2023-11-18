// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/CartSlice'; // Import your cartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});

export default store;