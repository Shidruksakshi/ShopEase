import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtoCart: (state, action) => {
      const existing = state.find(i => i._id === action.payload._id);
      if (existing) {
        existing.quantity += 1;
        existing.totalPrice = Number(existing.price) * existing.quantity;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: Number(action.payload.price)
        });
      }
    },

    removeFromCart: (state, action) => {
      const item = state.find(i => i._id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice = Number(item.price) * item.quantity;
          return;
        }
        return state.filter(i => i._id !== action.payload);
      }
      return state;
    },

    clearFromCart: (state, action) => {
      return state.filter(i => i._id !== action.payload);
    }
  }
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    toggleWishlist: (state, action) => {
      const exists = state.find(i => i._id === action.payload._id);
      if (exists) {
        return state.filter(i => i._id !== action.payload._id);
      }
      state.push(action.payload);
    },
    clearWishlist: () => []
  }
});

export const cartReducer = cartSlice.reducer;
export const wishlistReducer = wishlistSlice.reducer;

export const { addtoCart, removeFromCart, clearFromCart } = cartSlice.actions;
export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
