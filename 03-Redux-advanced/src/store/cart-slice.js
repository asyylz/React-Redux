
import { createSlice } from "@reduxjs/toolkit";

const initialAmountState = { amount: 0, showCartItem: true };

const amountSlice = createSlice({
  name: "amount",
  initialState: initialAmountState,
  reducers: {
    increment(state) {
      state.amount++;
    },
    decrement(state) {
      state.amount--;
    },
    toggleCounter(state) {
      state.showCartItem = !state.showCartItem;
    },
  },
});

export const amountActions = amountSlice.actions;

export default amountSlice.reducer;