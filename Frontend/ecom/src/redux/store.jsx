import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, wishlistReducer } from "./slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer
  },
});
