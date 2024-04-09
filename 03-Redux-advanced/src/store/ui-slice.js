import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; //we can write this mutating code here  because you learned that when using Redux Toolkit,we are not really mutating the state,
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice;
