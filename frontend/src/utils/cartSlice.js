import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
const savedRestaurantId = localStorage.getItem("restaurantId") || null;
const savedRestaurantInfo = JSON.parse(localStorage.getItem("restaurantInfo")) || null;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: savedCart,
    restaurantId: savedRestaurantId,
    restaurantInfo: savedRestaurantInfo,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const newRestaurantId = newItem.restaurantId;

      // Always set restaurant info if available
      if (newItem.resInfo) {
        state.restaurantInfo = {
          name: newItem.resInfo.name,
          imageId: newItem.resInfo.cloudinaryImageId,
        };
      }

      // If restaurantId not set, assign
      if (!state.restaurantId) {
        state.restaurantId = newRestaurantId;
      }

      // Add or increase quantity
      const existingItem = state.items.find(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      // Persist
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("restaurantId", state.restaurantId);
      localStorage.setItem("restaurantInfo", JSON.stringify(state.restaurantInfo));
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.card.info.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.card.info.id !== id);
        }
      }

      if (state.items.length === 0) {
        state.restaurantId = null;
        state.restaurantInfo = null;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("restaurantId", state.restaurantId);
      localStorage.setItem("restaurantInfo", JSON.stringify(state.restaurantInfo));
    },

    clearCart: (state) => {
      state.items = [];
      state.restaurantId = null;
      state.restaurantInfo = null;
      localStorage.removeItem("cartItems");
      localStorage.removeItem("restaurantId");
      localStorage.removeItem("restaurantInfo");
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
