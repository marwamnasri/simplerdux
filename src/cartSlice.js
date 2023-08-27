import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity || 1; // Increase quantity if item exists
      } else {
        state.items.push({
          id,
          name,
          price,
          quantity: quantity || 1, // Set quantity to 1 if not provided
        });
      }
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;




