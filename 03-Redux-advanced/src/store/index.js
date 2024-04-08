import { configureStore } from "@reduxjs/toolkit";

import amountReducer from "./amount.js";


const store = configureStore({
  reducer: { amount: amountReducer },
});

export default store;
